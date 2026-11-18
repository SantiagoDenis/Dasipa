"""Import exact SKU/price/pack data from the supplied two-page price list."""
import json
import re
import sys
from decimal import Decimal
from pathlib import Path
from pypdf import PdfReader

source = Path(sys.argv[1])
rows = []
for page_number, page in enumerate(PdfReader(source).pages, 1):
    for line in page.extract_text(extraction_mode="layout").splitlines():
        if not re.match(r"\s*D\d{3}-\d{3}-\d{3}", line):
            continue
        match = re.fullmatch(r"\s*(D\d{3}-\d{3}-\d{3})\s+(.+?)\s+\$\s*([\d.]+,\d{2})\s+(\d+)\s*", line)
        if not match:
            raise ValueError(f"Unparsed product on page {page_number}: {line}")
        sku, description, price, pack = match.groups()
        rows.append({"sku": sku, "description": description, "netCents": int(Decimal(price.replace('.', '').replace(',', '.')) * 100), "unitsPerPack": int(pack), "page": page_number})
if len(rows) != 58 or len({r['sku'] for r in rows}) != len(rows):
    raise ValueError('Expected 58 unique source rows')
target = Path(__file__).resolve().parents[1] / 'content' / 'cordoba-prices.json'
target.write_text(json.dumps({"source": source.name, "date": "2026-09-08", "currency": "ARS", "taxIncluded": False, "rows": rows}, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
print(f'Imported {len(rows)} unique SKUs; net price checksum: {sum(r["netCents"] for r in rows)} cents')

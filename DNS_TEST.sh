#!/bin/bash

echo "🔍 DNS ve Site Testi"
echo "===================="
echo ""

echo "1️⃣ A Record Kontrol:"
dig tealducks.com +short
echo ""

echo "2️⃣ CNAME Record Kontrol:"
dig www.tealducks.com +short
echo ""

echo "3️⃣ HTTP Status (tealducks.com):"
curl -I https://tealducks.com 2>&1 | grep -E "HTTP|location|x-robots"
echo ""

echo "4️⃣ HTTP Status (www.tealducks.com):"
curl -I https://www.tealducks.com 2>&1 | grep -E "HTTP|x-robots"
echo ""

echo "✅ Beklenen Sonuçlar:"
echo "- A record: 76.76.21.21"
echo "- CNAME: cname.vercel-dns.com"
echo "- HTTP: 200 OK"
echo "- x-robots-tag: index, follow"

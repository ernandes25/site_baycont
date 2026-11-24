#!/bin/bash
# Publica o site baycont.com.br na VPS.
# Uso (no terminal do VS Code):  bash "/home/ernandes/Bay Software/site_baycont/publicar.sh"
# 1) monta o site (pasta frontend/dist); 2) envia para a VPS; 3) guarda a versão anterior e troca pela nova.
set -e
cd "$(dirname "$0")/frontend"
[ -d node_modules ] || npm ci --no-audit --no-fund
rm -rf dist
npx vite build
scp -q -r dist root@baycont.com.br:/tmp/site_baycont_novo
ssh root@baycont.com.br 'bash -s' <<'EOF'
set -e
rm -rf /var/www/baycont.anterior
cp -a /var/www/baycont /var/www/baycont.anterior
rm -rf /var/www/baycont/*
cp -r /tmp/site_baycont_novo/. /var/www/baycont/
rm -rf /tmp/site_baycont_novo
chown -R root:www-data /var/www/baycont
find /var/www/baycont -type d -exec chmod 0750 {} +
find /var/www/baycont -type f -exec chmod 0640 {} +
echo "--- site no ar (deve ser 200):"
curl -s -o /dev/null -w '%{http_code}\n' --resolve baycont.com.br:443:127.0.0.1 https://baycont.com.br/
echo "Publicado. A versão anterior ficou em /var/www/baycont.anterior (para voltar, se precisar)."
EOF

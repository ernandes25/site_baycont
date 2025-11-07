# 🆘 Solução de Problemas - Baycont

## 🚀 Início Rápido

### Linux/Mac:
```bash
./start.sh
```

### Windows:
```cmd
start.bat
```

### Manual:
```bash
npm run dev
```

---

## ❌ Problemas Comuns e Soluções

### 1. "npm: command not found"

**Problema:** Node.js não está instalado.

**Solução:**
1. Acesse: https://nodejs.org/
2. Baixe a versão LTS
3. Instale e reinicie o terminal
4. Verifique: `node --version`

---

### 2. "Port 3000 is already in use"

**Problema:** Porta 3000 já está sendo usada por outro processo.

**Solução Linux/Mac:**
```bash
# Descobrir o processo
lsof -ti:3000

# Matar o processo
lsof -ti:3000 | xargs kill -9
```

**Solução Windows:**
```cmd
# Descobrir o processo
netstat -ano | findstr :3000

# Matar o processo (substitua <PID> pelo número)
taskkill /PID <PID> /F
```

**Alternativa:** Mudar a porta no `frontend/vite.config.js`:
```javascript
server: {
  port: 3001,  // Mude para outra porta
  // ...
}
```

---

### 3. "Port 5000 is already in use"

**Problema:** Porta 5000 já está sendo usada.

**Solução:** Igual ao problema anterior, mas use porta 5000.

**Alternativa:** Mude no `backend/.env`:
```env
PORT=5001
```

---

### 4. "Module not found" ou "Cannot find module"

**Problema:** Dependências não foram instaladas.

**Solução:**
```bash
# Deletar node_modules e reinstalar
rm -rf node_modules frontend/node_modules backend/node_modules
npm run install-all

# Ou manualmente
cd frontend && npm install && cd ..
cd backend && npm install && cd ..
```

---

### 5. Formulário de contato não envia email

**Problema 1:** Arquivo `.env` não existe ou está mal configurado.

**Solução:**
```bash
# Verificar se existe
ls backend/.env

# Se não existir, criar
cp backend/.env.example backend/.env

# Editar e configurar
nano backend/.env  # ou vim, ou qualquer editor
```

**Problema 2:** Credenciais do Gmail incorretas.

**Solução:**
1. Verifique se o email está correto
2. Use uma senha de app (não a senha normal):
   - Vá em https://myaccount.google.com/security
   - Ative verificação em duas etapas
   - Procure "Senhas de app"
   - Gere uma nova senha
   - Use essa senha no `.env`

**Problema 3:** Backend não está rodando.

**Solução:**
```bash
# Em um terminal separado
cd backend
npm run dev

# Verificar se está funcionando
curl http://localhost:5000
```

---

### 6. Imagens não aparecem

**Problema:** Imagens não foram copiadas para `frontend/public/assets/`.

**Solução:**
```bash
# Verificar se existem
ls frontend/public/assets/

# Se não existir, copiar
cp -r assets frontend/public/

# Windows:
xcopy assets frontend\public\assets\ /E /I /Y
```

---

### 7. "EACCES: permission denied"

**Problema:** Sem permissão para executar.

**Solução Linux/Mac:**
```bash
# Dar permissão
chmod +x start.sh

# Ou executar com sudo
sudo ./start.sh
```

**Solução:** Não use `sudo npm` se possível. Configure npm corretamente:
```bash
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
```

---

### 8. Erro de CORS no console do navegador

**Problema:** Frontend não consegue se comunicar com backend.

**Solução:** Verifique o `backend/server.js`:
```javascript
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3001'],
  methods: ['GET', 'POST'],
  credentials: true
}));
```

---

### 9. "styled-components is not defined" ou erro de CSS

**Problema:** Não estamos usando styled-components, só CSS puro.

**Solução:** Verifique se todos os arquivos `.css` existem:
```bash
ls frontend/src/components/*.css
```

Se algum estiver faltando, crie manualmente.

---

### 10. Backend não envia email mas não dá erro

**Problema:** Gmail bloqueando aplicativos menos seguros.

**Solução:**
1. Use senha de app (método recomendado)
2. Ou permita apps menos seguros:
   - https://myaccount.google.com/lesssecureapps
   - Ative "Permitir aplicativos menos seguros"
   - **Não recomendado por questões de segurança!**

---

### 11. Site está lento ou travando

**Problema:** Muitas abas do navegador abertas ou recursos insuficientes.

**Solução:**
1. Feche abas desnecessárias
2. Limpe cache do navegador
3. Use modo de produção (build):
   ```bash
   cd frontend
   npm run build
   npm run preview
   ```

---

### 12. Erro "vite: command not found"

**Problema:** Vite não foi instalado corretamente.

**Solução:**
```bash
cd frontend
npm install vite --save-dev
npm install
```

---

### 13. Menu mobile não abre

**Problema:** JavaScript não está carregando corretamente.

**Solução:**
1. Abra o console do navegador (F12)
2. Verifique se há erros
3. Limpe cache: Ctrl+Shift+R (Windows/Linux) ou Cmd+Shift+R (Mac)

---

### 14. Scroll suave não funciona

**Problema:** CSS `scroll-behavior` não suportado pelo navegador.

**Solução:** Atualize seu navegador ou use uma alternativa moderna (Chrome, Firefox, Edge).

---

### 15. Carrossel de notícias não rola automaticamente

**Problema:** JavaScript do componente não está executando.

**Solução:**
1. Verifique o console (F12) por erros
2. Recarregue a página
3. Verifique se o React está renderizando corretamente

---

## 🔍 Comandos de Diagnóstico

### Verificar versões:
```bash
node --version
npm --version
```

### Verificar processos rodando:
```bash
# Linux/Mac
lsof -i :3000
lsof -i :5000

# Windows
netstat -ano | findstr :3000
netstat -ano | findstr :5000
```

### Verificar estrutura do projeto:
```bash
ls -la
ls -la frontend/
ls -la backend/
```

### Ver logs do backend:
```bash
cd backend
npm run dev
# Deixe rodando e observe os logs
```

### Limpar tudo e recomeçar:
```bash
# Deletar node_modules
rm -rf node_modules frontend/node_modules backend/node_modules

# Deletar package-lock.json
rm -rf package-lock.json frontend/package-lock.json backend/package-lock.json

# Reinstalar
npm run install-all
```

---

## 🌐 Problemas de Browser

### Chrome/Edge:
- Limpar cache: `Ctrl+Shift+Del`
- Hard refresh: `Ctrl+Shift+R`
- DevTools: `F12`

### Firefox:
- Limpar cache: `Ctrl+Shift+Del`
- Hard refresh: `Ctrl+F5`
- DevTools: `F12`

### Safari:
- Limpar cache: `Cmd+Option+E`
- Hard refresh: `Cmd+Shift+R`
- DevTools: `Cmd+Option+I`

---

## 📞 Ainda com Problemas?

### 1. Verifique os logs
Sempre abra o console do navegador (F12) e o terminal para ver mensagens de erro.

### 2. Consulte a documentação
- React: https://react.dev/
- Vite: https://vitejs.dev/
- Express: https://expressjs.com/
- Nodemailer: https://nodemailer.com/

### 3. Entre em contato
- **WhatsApp:** (34) 9724-9781
- **Email:** baycontassessoria@gmail.com

### 4. GitHub Issues
Se encontrou um bug, documente:
- Sistema operacional
- Versão do Node.js
- Mensagem de erro completa
- Passos para reproduzir

---

## ✅ Checklist de Verificação

Antes de pedir ajuda, verifique:

- [ ] Node.js está instalado (`node --version`)
- [ ] NPM está instalado (`npm --version`)
- [ ] Dependências instaladas (`npm run install-all`)
- [ ] Arquivo `.env` existe em `backend/`
- [ ] Credenciais de email corretas no `.env`
- [ ] Imagens em `frontend/public/assets/`
- [ ] Portas 3000 e 5000 livres
- [ ] Console do navegador sem erros (F12)
- [ ] Terminal sem erros
- [ ] Internet conectada (para notícias)

---

## 🎓 Recursos de Aprendizado

### Para entender o projeto:
- **React:** https://react.dev/learn
- **Vite:** https://vitejs.dev/guide/
- **Express:** https://expressjs.com/en/starter/installing.html
- **CSS:** https://developer.mozilla.org/pt-BR/docs/Web/CSS

### Tutoriais:
- React + Vite: https://www.youtube.com/results?search_query=react+vite+tutorial
- Node.js + Express: https://www.youtube.com/results?search_query=nodejs+express+tutorial
- Landing Page: https://www.youtube.com/results?search_query=landing+page+tutorial

---

**Desenvolvido por Baysoftware Brasil** - Uberlândia, MG

# 🌐 Deploy na Localweb - Baycont

## ⚠️ Informações Importantes

A Localweb oferece hospedagem tradicional (cPanel) que funciona melhor com sites estáticos.
Para este projeto que tem frontend (React) + backend (Node.js), recomendamos a abordagem híbrida.

---

## 🎯 Estratégia Recomendada: Deploy Híbrido

### Frontend → Localweb
### Backend → Render (gratuito)

---

## 📦 Passo 1: Fazer Build do Frontend

```bash
cd frontend
npm install
npm run build
```

Isso criará a pasta `frontend/dist` com os arquivos prontos para produção.

---

## 📤 Passo 2: Upload na Localweb

### Arquivos para Enviar:
✅ **APENAS** os arquivos dentro da pasta `frontend/dist/`

### Como fazer upload:

1. **Acesse o cPanel da Localweb**
   - URL: geralmente `seudominio.com.br/cpanel`
   - Faça login com suas credenciais

2. **Localize o Gerenciador de Arquivos**
   - Procure por "Gerenciador de Arquivos" ou "File Manager"

3. **Navegue até a pasta pública**
   - Vá para: `public_html/` (ou `www/`)
   - Esta é a pasta raiz do seu site

4. **Faça upload dos arquivos**
   - Selecione TODOS os arquivos dentro de `frontend/dist/`
   - Inclui: `index.html`, `assets/`, todas as imagens `.png` e `.webp`
   - **NÃO** envie a pasta `dist` em si, apenas seu conteúdo

5. **Estrutura final no servidor:**
   ```
   public_html/
   ├── index.html
   ├── assets/
   │   ├── index-xxxxx.js
   │   ├── index-xxxxx.css
   │   ├── logo-baycont.png
   │   ├── hero-background.png
   │   └── (outras imagens...)
   ├── baycont-emp-2.png
   ├── baycont-empresa.png
   ├── hero-background.png
   ├── logo-baycont.png
   ├── logo-baysoft.webp
   └── (outras imagens...)
   ```

---

## 🔧 Passo 3: Deploy do Backend (Render)

### 1. Criar conta no Render
- Acesse: https://render.com
- Crie uma conta gratuita com GitHub

### 2. Criar Web Service

1. Clique em **"New +"** → **"Web Service"**
2. Conecte seu repositório GitHub
3. Configure:
   - **Name:** baycont-backend
   - **Region:** Oregon (US West)
   - **Branch:** develop (ou main)
   - **Root Directory:** `backend`
   - **Runtime:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `node server.js`
   - **Instance Type:** Free

### 3. Adicionar Variáveis de Ambiente

Na seção **Environment**, clique em "Add Environment Variable":

```
PORT=5000
EMAIL_USER=seu-email@gmail.com
EMAIL_PASS=sua-senha-app-gmail
EMAIL_TO=baycontassessoria@gmail.com
```

**⚠️ Importante:** Para o Gmail, você precisa gerar uma "Senha de App":
- Vá em: https://myaccount.google.com/apppasswords
- Gere uma senha específica para este app

### 4. Deploy
Clique em **"Create Web Service"** e aguarde 5-10 minutos.

Você receberá uma URL como: `https://baycont-backend.onrender.com`

---

## 🔗 Passo 4: Conectar Frontend ao Backend

Após obter a URL do backend no Render, você precisa atualizar o frontend:

### 1. Editar o arquivo de configuração da API

Abra `frontend/src/App.jsx` e localize onde a API é chamada.
Substitua o endpoint de desenvolvimento pela URL do Render:

```javascript
// Antes (desenvolvimento):
const API_URL = 'http://localhost:5000';

// Depois (produção):
const API_URL = 'https://baycont-backend.onrender.com';
```

### 2. Refazer o build e upload

```bash
cd frontend
npm run build
```

Faça upload novamente dos arquivos da pasta `dist/` para a Localweb.

---

## ✅ Verificação Final

1. **Teste o site:** Acesse `seudominio.com.br`
2. **Teste o formulário de contato:** Preencha e envie
3. **Verifique o e-mail:** Confirme se a mensagem foi recebida

---

## 🆘 Problemas Comuns

### "Erro ao enviar mensagem"
- Verifique se a URL do backend está correta no código
- Confirme que o backend no Render está online
- Teste a API diretamente: `https://baycont-backend.onrender.com/api/health`

### "Site não carrega"
- Verifique se o `index.html` está na raiz de `public_html/`
- Limpe o cache do navegador (Ctrl + F5)
- Verifique permissões dos arquivos no cPanel (644 para arquivos, 755 para pastas)

### "CORS Error"
- Verifique se o backend permite requisições do seu domínio
- Pode ser necessário configurar CORS no `backend/server.js`

---

## 📝 Alternativa: Tudo na Localweb

Se a Localweb oferecer suporte a Node.js (hosting específico):

1. Consulte a documentação da Localweb sobre Node.js
2. Você precisará fazer upload de TODO o projeto
3. Configurar variáveis de ambiente via painel deles
4. Instalar dependências no servidor

**⚠️ Nota:** A maioria dos planos básicos da Localweb NÃO suporta Node.js.
Portanto, o deploy híbrido é a melhor opção.

---

## 🎉 Pronto!

Seu site estará no ar com:
- ✅ Frontend profissional na Localweb
- ✅ Backend confiável no Render
- ✅ Custo zero para o backend
- ✅ Formulário de contato funcional


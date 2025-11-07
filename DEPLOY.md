# 🌐 Guia de Deploy - Baycont

Este guia mostra como colocar o site no ar usando serviços gratuitos.

## 📦 Opções de Hospedagem

### Frontend (Site)
- ✅ **Vercel** (Recomendado - Grátis)
- ✅ **Netlify** (Grátis)
- ✅ **GitHub Pages** (Grátis)

### Backend (API)
- ✅ **Render** (Recomendado - Grátis)
- ✅ **Railway** (Grátis com limite)
- ✅ **Heroku** (Pago)

---

## 🚀 Deploy do Backend (Render)

### 1. Criar conta no Render
- Acesse: https://render.com
- Crie uma conta gratuita

### 2. Criar novo Web Service

1. Clique em **"New +"** → **"Web Service"**
2. Conecte seu repositório GitHub (ou faça upload manual)
3. Configure:
   - **Name:** baycont-api
   - **Region:** Oregon (US West)
   - **Branch:** main
   - **Root Directory:** backend
   - **Runtime:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`

### 3. Configurar Variáveis de Ambiente

Na seção **Environment**, adicione:

```
PORT=5000
EMAIL_USER=seu-email@gmail.com
EMAIL_PASS=sua-senha-de-app
EMAIL_TO=baycontassessoria@gmail.com
```

### 4. Deploy

Clique em **"Create Web Service"** e aguarde o deploy.

Você receberá uma URL como: `https://baycont-api.onrender.com`

---

## 🌟 Deploy do Frontend (Vercel)

### 1. Criar conta na Vercel
- Acesse: https://vercel.com
- Crie uma conta gratuita

### 2. Preparar o build

No seu computador, na pasta `frontend`:

```bash
cd frontend
npm run build
```

### 3. Instalar Vercel CLI (Opcional)

```bash
npm install -g vercel
```

### 4. Deploy via CLI

Na pasta `frontend`:

```bash
vercel
```

Siga as instruções:
- **Set up and deploy?** Yes
- **Which scope?** Sua conta
- **Link to existing project?** No
- **Project name?** baycont
- **Directory?** ./
- **Override settings?** No

### 5. Deploy via Interface Web

1. Acesse https://vercel.com/new
2. Importe seu repositório GitHub
3. Configure:
   - **Framework Preset:** Vite
   - **Root Directory:** frontend
   - **Build Command:** `npm run build`
   - **Output Directory:** dist

### 6. Configurar Variável de Ambiente

Na Vercel, vá em **Settings** → **Environment Variables**:

```
VITE_API_URL=https://baycont-api.onrender.com
```

### 7. Atualizar código do Frontend

Edite `frontend/src/components/Contato.jsx`, linha do axios:

```javascript
// Antes:
const response = await axios.post('/api/contato', formData)

// Depois:
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'
const response = await axios.post(`${API_URL}/api/contato`, formData)
```

### 8. Fazer novo deploy

```bash
vercel --prod
```

Você receberá uma URL como: `https://baycont.vercel.app`

---

## 🔧 Configurar Domínio Personalizado (baycont.com.br)

### Na Vercel (Frontend)

1. Vá em **Settings** → **Domains**
2. Adicione: `baycont.com.br` e `www.baycont.com.br`
3. A Vercel fornecerá registros DNS

### No seu provedor de domínio (Registro.br, GoDaddy, etc.)

Adicione os seguintes registros DNS:

**Tipo A:**
```
@ → 76.76.21.21
```

**Tipo CNAME:**
```
www → cname.vercel-dns.com
```

Aguarde até 48h para propagação do DNS.

---

## 📱 Deploy Alternativo - Netlify

### Frontend no Netlify

1. Acesse: https://netlify.com
2. Arraste a pasta `frontend/dist` (após o build)
3. Configure domínio personalizado
4. Adicione variáveis de ambiente

---

## 🐳 Deploy com Docker (Avançado)

### Dockerfile do Backend

Crie `backend/Dockerfile`:

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
CMD ["npm", "start"]
```

### Dockerfile do Frontend

Crie `frontend/Dockerfile`:

```dockerfile
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

---

## ✅ Checklist de Deploy

### Backend
- [ ] Código no GitHub/GitLab
- [ ] Serviço criado no Render
- [ ] Variáveis de ambiente configuradas
- [ ] Deploy realizado com sucesso
- [ ] Testado endpoint: `https://sua-api.onrender.com`

### Frontend
- [ ] Build testado localmente (`npm run build`)
- [ ] Projeto criado na Vercel
- [ ] Variável VITE_API_URL configurada
- [ ] Deploy realizado com sucesso
- [ ] Site acessível: `https://seu-site.vercel.app`

### Domínio
- [ ] Domínio adicionado na Vercel
- [ ] DNS configurado no provedor
- [ ] SSL/HTTPS ativo
- [ ] Redirecionamento www configurado

---

## 🔒 Segurança

### Importante:

1. **Nunca commite o arquivo `.env`** no Git
2. Configure `.gitignore` corretamente
3. Use variáveis de ambiente em produção
4. Ative HTTPS (automático na Vercel/Render)
5. Configure CORS no backend se necessário

### CORS no Backend

Se tiver problemas com CORS, adicione em `backend/server.js`:

```javascript
const cors = require('cors');

app.use(cors({
  origin: ['https://baycont.vercel.app', 'https://baycont.com.br'],
  methods: ['GET', 'POST'],
  credentials: true
}));
```

---

## 📊 Monitoramento

### Ferramentas gratuitas:

1. **Google Analytics** - Tráfego do site
2. **Google Search Console** - SEO
3. **Render Dashboard** - Status do backend
4. **Vercel Analytics** - Performance do frontend

---

## 💰 Custos

### Plano Gratuito:
- ✅ Vercel: Ilimitado para sites pessoais
- ✅ Render: 750h/mês grátis (suficiente)
- ✅ Domínio: ~R$ 40/ano (.com.br)

### Total estimado: **R$ 40/ano** apenas para o domínio!

---

## 🆘 Suporte

**Problemas com deploy?**
- WhatsApp: (34) 9724-9781
- Email: baycontassessoria@gmail.com

**Documentação oficial:**
- Vercel: https://vercel.com/docs
- Render: https://render.com/docs
- Vite: https://vitejs.dev/guide/

---

**Desenvolvido por Baysoftware Brasil** - Uberlândia, MG

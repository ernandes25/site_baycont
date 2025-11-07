# 🚀 Setup Inicial - Baycont

Siga estas etapas para configurar e executar o site pela primeira vez:

## 1️⃣ Instalar Node.js

Se ainda não tiver o Node.js instalado:
- Acesse: https://nodejs.org/
- Baixe a versão LTS (recomendada)
- Instale seguindo as instruções

Verifique a instalação:
```bash
node --version
npm --version
```

## 2️⃣ Instalar Dependências

Na pasta raiz do projeto (`site_baycont`), execute:

```bash
npm run install-all
```

**Ou instale manualmente em cada pasta:**

```bash
# Na raiz
cd /home/ernandes/Google\ Drive/3\ -\ IA_CONTABILIDADE/site_baycont

# Instalar dependências da raiz
npm install

# Instalar frontend
cd frontend
npm install

# Instalar backend
cd ../backend
npm install
```

## 3️⃣ Configurar Email (Backend)

### Passo 1: Criar arquivo .env

Na pasta `backend`, copie o arquivo de exemplo:

```bash
cd backend
cp .env.example .env
```

### Passo 2: Configurar Gmail

1. Acesse sua conta do Gmail
2. Vá em **"Gerenciar sua Conta do Google"**
3. Clique em **"Segurança"**
4. Ative a **"Verificação em duas etapas"** (se não estiver ativa)
5. Procure por **"Senhas de app"**
6. Selecione **"Email"** e **"Outro (nome personalizado)"**
7. Digite "Baycont Site" e clique em **Gerar**
8. Copie a senha gerada (16 caracteres)

### Passo 3: Editar o arquivo .env

Abra o arquivo `backend/.env` e preencha:

```env
PORT=5000
EMAIL_USER=seu-email@gmail.com
EMAIL_PASS=senha-de-app-gerada-pelo-gmail
EMAIL_TO=baycontassessoria@gmail.com
```

**Exemplo:**
```env
PORT=5000
EMAIL_USER=meuemail@gmail.com
EMAIL_PASS=abcd efgh ijkl mnop
EMAIL_TO=baycontassessoria@gmail.com
```

## 4️⃣ Executar o Site

### Opção 1: Executar Frontend e Backend juntos (Recomendado)

Na pasta raiz do projeto:

```bash
npm run dev
```

Isso abrirá:
- **Frontend:** http://localhost:3000
- **Backend:** http://localhost:5000

### Opção 2: Executar separadamente

**Terminal 1 - Frontend:**
```bash
cd frontend
npm run dev
```

**Terminal 2 - Backend:**
```bash
cd backend
npm run dev
```

## 5️⃣ Acessar o Site

Abra seu navegador e acesse:
```
http://localhost:3000
```

## 🔧 Solução de Problemas

### Erro: "Porta 3000 já está em uso"

Execute no terminal:
```bash
# Linux/Mac
lsof -ti:3000 | xargs kill -9

# Windows
netstat -ano | findstr :3000
taskkill /PID <número_do_pid> /F
```

### Erro: "Porta 5000 já está em uso"

Execute no terminal:
```bash
# Linux/Mac
lsof -ti:5000 | xargs kill -9

# Windows
netstat -ano | findstr :5000
taskkill /PID <número_do_pid> /F
```

### Erro ao enviar email

Verifique:
1. ✅ Arquivo `.env` está na pasta `backend`
2. ✅ Email e senha estão corretos
3. ✅ Verificação em duas etapas está ativa no Gmail
4. ✅ Senha de app foi gerada corretamente

### Imagens não aparecem

Verifique se a pasta `assets` foi copiada para `frontend/public/`:

```bash
ls frontend/public/assets/
```

Se não, copie manualmente:
```bash
cp -r assets frontend/public/
```

## 📝 Comandos Úteis

```bash
# Instalar tudo
npm run install-all

# Executar em desenvolvimento
npm run dev

# Executar só o frontend
npm run dev:frontend

# Executar só o backend
npm run dev:backend

# Build para produção
cd frontend && npm run build
```

## ✅ Checklist

- [ ] Node.js instalado
- [ ] Dependências instaladas (`npm run install-all`)
- [ ] Arquivo `.env` criado no backend
- [ ] Email configurado no `.env`
- [ ] Senha de app do Gmail gerada
- [ ] Imagens na pasta `frontend/public/assets/`
- [ ] Site funcionando em `http://localhost:3000`
- [ ] Formulário de contato enviando emails

## 📞 Precisa de Ajuda?

Entre em contato:
- WhatsApp: (34) 9724-9781
- Email: baycontassessoria@gmail.com

---

**Baysoftware Brasil** - Uberlândia, MG

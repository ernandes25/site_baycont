# 🚀 Deploy do Backend na Localweb

## ⚠️ Verificação Importante

Antes de começar, você precisa confirmar se seu plano da Localweb suporta **Node.js**.

### Como verificar:

1. **Entre no cPanel da Localweb**
2. **Procure por:**
   - "Setup Node.js App"
   - "Node.js Selector"
   - "Application Manager"
   - Ou entre em contato com o suporte

### 📋 Planos que geralmente suportam Node.js:
- ✅ Hospedagem Premium
- ✅ Hospedagem Business
- ✅ Cloud Hosting
- ❌ Hospedagem Básica (geralmente NÃO suporta)

---

## 🎯 Opção 1: Localweb COM suporte a Node.js

Se sua Localweb **suporta Node.js**, siga estes passos:

### Passo 1: Preparar o Backend

1. **Criar arquivo `.env` de produção:**

No seu computador, crie o arquivo `backend/.env.production`:

```env
PORT=5000
EMAIL_USER=seu-email@gmail.com
EMAIL_PASS=sua-senha-de-app-gmail
EMAIL_TO=baycontassessoria@gmail.com
NODE_ENV=production
```

2. **Compactar a pasta backend:**

```bash
cd "/home/ernandes/Google Drive/3 - SCRIPT_CONTABILIDADE/site_baycont"
zip -r backend.zip backend/ -x "backend/node_modules/*"
```

### Passo 2: Upload no cPanel

1. **Acesse o cPanel da Localweb**
2. **Gerenciador de Arquivos**
3. **Crie uma pasta:** `nodejs` ou `api` (fora de `public_html/`)
4. **Faça upload do** `backend.zip`
5. **Extraia** o arquivo ZIP

### Passo 3: Configurar Node.js App

1. **No cPanel, procure:** "Setup Node.js App"
2. **Clique em "Create Application":**
   - **Node.js version:** 18.x ou superior
   - **Application mode:** Production
   - **Application root:** `nodejs/backend` (ou o caminho que você criou)
   - **Application URL:** `seu-dominio.com.br:5000` ou subdomínio
   - **Application startup file:** `server.js`
   - **Passenger log file:** Deixe padrão

3. **Clique em "Create"**

### Passo 4: Instalar Dependências

1. **Ainda na tela do Node.js App**
2. **Clique em "Run NPM Install"** ou
3. **Use o Terminal do cPanel:**

```bash
cd ~/nodejs/backend
npm install --production
```

### Passo 5: Configurar Variáveis de Ambiente

1. **Na tela do Node.js App**
2. **Encontre "Environment Variables"**
3. **Adicione:**

```
PORT=5000
EMAIL_USER=seu-email@gmail.com
EMAIL_PASS=sua-senha-app-gmail
EMAIL_TO=baycontassessoria@gmail.com
NODE_ENV=production
```

### Passo 6: Iniciar a Aplicação

1. **Clique em "Start App" ou "Restart"**
2. **Teste:** Acesse `seu-dominio.com.br:5000` (ou a URL configurada)

### Passo 7: Configurar Proxy (Opcional)

Para usar `seu-dominio.com.br/api` em vez de `:5000`, crie um arquivo `.htaccess` em `public_html/`:

```apache
# Redirecionar /api para Node.js
RewriteEngine On
RewriteRule ^api/(.*)$ http://localhost:5000/api/$1 [P,L]
```

---

## 🎯 Opção 2: Localweb SEM suporte a Node.js

Se sua Localweb **NÃO suporta Node.js**, você tem 3 alternativas:

### Alternativa A: Usar serviço gratuito para backend apenas

**Render.com (Grátis):**
- ✅ 750 horas/mês grátis
- ✅ Fácil de configurar
- ✅ Integração com GitHub
- ⚠️ Dorme após 15 min de inatividade (plano free)

**Railway (Grátis com limite):**
- ✅ $5 de crédito mensal grátis
- ✅ Sempre ativo
- ✅ Mais rápido que Render

**Cyclic (Grátis):**
- ✅ Sempre ativo
- ✅ Fácil deploy

### Alternativa B: Formulário simples sem backend

Usar serviços de formulário como:
- **Formspree** (grátis até 50 envios/mês)
- **Web3Forms** (grátis ilimitado)
- **EmailJS** (200 emails/mês grátis)

### Alternativa C: Upgrade do plano Localweb

Considere fazer upgrade para um plano que suporta Node.js.

---

## 📧 Solução Rápida: Usar Web3Forms (SEM Backend)

Se você não quer criar conta em lugar nenhum, posso modificar o frontend para usar Web3Forms:

### Vantagens:
- ✅ Totalmente grátis e ilimitado
- ✅ Sem necessidade de backend
- ✅ Sem cadastro necessário
- ✅ Emails chegam direto na sua caixa

### Como funciona:
1. Você obtém uma chave API (grátis, sem cadastro)
2. Eu modifico o frontend para enviar direto para Web3Forms
3. Pronto! Formulário funcional sem backend

Quer que eu implemente essa solução?

---

## 🤔 Qual escolher?

### Escolha Opção 1 SE:
- ✅ Seu plano Localweb suporta Node.js
- ✅ Você quer tudo no mesmo servidor
- ✅ Não se importa em configurar no cPanel

### Escolha Alternativa A (Render) SE:
- ✅ Seu plano não suporta Node.js
- ✅ Aceita criar uma conta simples (1 minuto)
- ✅ Quer controle total do backend

### Escolha Alternativa B (Web3Forms) SE:
- ✅ Quer a solução mais simples
- ✅ Não quer criar conta em lugar nenhum
- ✅ Não precisa de funcionalidades avançadas no backend

---

## 💡 Minha Recomendação

Para o seu caso (formulário de contato simples), recomendo:

**1ª opção:** Web3Forms (sem backend, totalmente grátis)
**2ª opção:** Render (backend completo, grátis, 1 minuto de cadastro)
**3ª opção:** Verificar se Localweb suporta Node.js

Qual você prefere? Posso te ajudar a implementar qualquer uma delas!

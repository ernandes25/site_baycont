# Baycont - Contabilidade Digital e Assessoria Empresarial

Landing page moderna desenvolvida com React e Node.js para a Baycont Contabilidade Digital.

## 🚀 Tecnologias

- **Frontend:** React 18 + Vite
- **Backend:** Node.js + Express
- **Email:** Nodemailer
- **Estilização:** CSS3 com variáveis CSS
- **Ícones:** React Icons

## 📋 Funcionalidades

- ✅ Design responsivo e moderno
- ✅ Navegação suave entre seções (smooth scroll)
- ✅ Menu interativo com submenus
- ✅ Seção "Quem Somos" com abas (Valores, Missão, Visão)
- ✅ Apresentação completa de serviços
- ✅ Carrossel automático de notícias do Portal Cont News
- ✅ Links úteis para portais empresariais
- ✅ Formulário de contato funcional
- ✅ Integração com WhatsApp, Email e Instagram
- ✅ API backend para envio de emails

## 🛠️ Instalação e Configuração

### Pré-requisitos

- Node.js 16+ instalado
- NPM ou Yarn

### Passo 1: Instalar dependências

Na raiz do projeto, execute:

```bash
npm run install-all
```

Ou instale manualmente:

```bash
# Frontend
cd frontend
npm install

# Backend
cd ../backend
npm install
```

### Passo 2: Configurar variáveis de ambiente

Crie um arquivo `.env` na pasta `backend` baseado no `.env.example`:

```env
PORT=5000
EMAIL_USER=seu-email@gmail.com
EMAIL_PASS=sua-senha-de-app-do-gmail
EMAIL_TO=baycontassessoria@gmail.com
```

#### Como obter a senha de app do Gmail:

1. Acesse sua conta Google
2. Vá em "Segurança"
3. Ative a verificação em duas etapas
4. Em "Senhas de app", gere uma nova senha
5. Use essa senha no `EMAIL_PASS`

### Passo 3: Copiar as imagens

Certifique-se de que as imagens da pasta `assets` estejam disponíveis em `frontend/public/assets/`:

```bash
cp -r assets frontend/public/
```

## 🚀 Como Executar

### Desenvolvimento (Frontend + Backend juntos)

```bash
npm run dev
```

Isso iniciará:
- Frontend em: http://localhost:3000
- Backend em: http://localhost:5000

### Executar separadamente

**Frontend:**
```bash
cd frontend
npm run dev
```

**Backend:**
```bash
cd backend
npm run dev
```

## 📦 Build para Produção

```bash
cd frontend
npm run build
```

Os arquivos otimizados estarão na pasta `frontend/dist`.

## 🌐 Deploy

### Frontend (Vercel/Netlify)

1. Faça build do frontend
2. Faça deploy da pasta `frontend/dist`
3. Configure as variáveis de ambiente se necessário

### Backend (Heroku/Railway/Render)

1. Faça deploy da pasta `backend`
2. Configure as variáveis de ambiente:
   - `PORT`
   - `EMAIL_USER`
   - `EMAIL_PASS`
   - `EMAIL_TO`

## 📁 Estrutura do Projeto

```
site_baycont/
├── assets/                    # Imagens originais
├── backend/                   # API Node.js
│   ├── server.js             # Servidor Express
│   ├── package.json
│   └── .env.example
├── frontend/                  # Aplicação React
│   ├── public/
│   │   └── assets/           # Imagens da landing page
│   ├── src/
│   │   ├── components/       # Componentes React
│   │   │   ├── Header.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── QuemSomos.jsx
│   │   │   ├── Servicos.jsx
│   │   │   ├── Noticias.jsx
│   │   │   ├── LinksUteis.jsx
│   │   │   ├── Contato.jsx
│   │   │   └── Footer.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
├── package.json               # Scripts principais
└── README.md
```

## 🎨 Paleta de Cores

- **Primária:** #1e3a8a (Azul escuro)
- **Secundária:** #3b82f6 (Azul)
- **Accent:** #60a5fa (Azul claro)
- **Escuro:** #1e293b
- **Claro:** #f1f5f9

## 📱 Seções da Landing Page

1. **Header** - Menu de navegação com logo e botão "Área do Cliente"
2. **Hero** - Banner principal com call-to-action
3. **Quem Somos** - Informações sobre a empresa (com abas)
4. **Serviços** - 6 serviços principais detalhados
5. **Notícias** - Carrossel automático com notícias do setor
6. **Links Úteis** - Acesso rápido a portais importantes
7. **Contato** - Formulário funcional + informações de contato
8. **Footer** - Informações finais e créditos

## 🔧 Customização

Para personalizar cores, edite as variáveis CSS em `frontend/src/index.css`:

```css
:root {
  --primary-color: #1e3a8a;
  --secondary-color: #3b82f6;
  /* ... */
}
```

## 📞 Contato

**Baycont Contabilidade Digital**
- 📱 WhatsApp: (34) 9724-9781
- 📧 Email: baycontassessoria@gmail.com
- 📷 Instagram: @baytonassessoria
- 📍 Uberlândia - MG
- 🌐 www.baycont.com.br

## 💻 Desenvolvido por

**Baysoftware Brasil**
Uberlândia - MG

---

© 2025 Baycont - Contabilidade Digital e Assessoria Empresarial

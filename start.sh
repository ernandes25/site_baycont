#!/bin/bash

# 🚀 Script de Inicialização Rápida - Baycont
# Execute este script para configurar e iniciar o projeto

echo "================================================"
echo "🚀 Iniciando Baycont - Landing Page"
echo "================================================"
echo ""

# Verificar se Node.js está instalado
if ! command -v node &> /dev/null
then
    echo "❌ Node.js não está instalado!"
    echo "📥 Instale o Node.js em: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js instalado: $(node --version)"
echo "✅ NPM instalado: $(npm --version)"
echo ""

# Verificar se está na pasta correta
if [ ! -f "package.json" ]; then
    echo "❌ Execute este script na pasta raiz do projeto!"
    exit 1
fi

# Função para verificar se as dependências estão instaladas
check_dependencies() {
    if [ ! -d "node_modules" ] || [ ! -d "frontend/node_modules" ] || [ ! -d "backend/node_modules" ]; then
        return 1
    fi
    return 0
}

# Verificar dependências
if ! check_dependencies; then
    echo "📦 Instalando dependências..."
    echo ""
    
    # Instalar dependências da raiz
    echo "▶ Instalando dependências da raiz..."
    npm install
    
    # Instalar dependências do frontend
    echo "▶ Instalando dependências do frontend..."
    cd frontend && npm install && cd ..
    
    # Instalar dependências do backend
    echo "▶ Instalando dependências do backend..."
    cd backend && npm install && cd ..
    
    echo ""
    echo "✅ Todas as dependências foram instaladas!"
    echo ""
else
    echo "✅ Dependências já instaladas!"
    echo ""
fi

# Verificar arquivo .env
if [ ! -f "backend/.env" ]; then
    echo "⚠️  ATENÇÃO: Arquivo .env não encontrado!"
    echo ""
    echo "Para o formulário de contato funcionar, você precisa:"
    echo "1. Copiar o arquivo backend/.env.example para backend/.env"
    echo "2. Configurar suas credenciais de email"
    echo ""
    echo "Deseja criar o arquivo .env agora? (s/n)"
    read -r resposta
    
    if [ "$resposta" = "s" ] || [ "$resposta" = "S" ]; then
        cp backend/.env.example backend/.env
        echo ""
        echo "✅ Arquivo .env criado!"
        echo "📝 Edite o arquivo backend/.env com suas credenciais"
        echo ""
        echo "Pressione ENTER para continuar..."
        read
    fi
fi

# Verificar se as imagens foram copiadas
if [ ! -d "frontend/public/assets" ]; then
    echo "📁 Copiando imagens para frontend/public/assets..."
    mkdir -p frontend/public
    cp -r assets frontend/public/
    echo "✅ Imagens copiadas!"
    echo ""
fi

echo "================================================"
echo "🎉 Tudo pronto! Iniciando o site..."
echo "================================================"
echo ""
echo "🌐 Frontend: http://localhost:3000"
echo "🔌 Backend:  http://localhost:5000"
echo ""
echo "⚠️  Para parar os servidores, pressione Ctrl+C"
echo ""

# Aguardar 2 segundos
sleep 2

# Iniciar o projeto
npm run dev

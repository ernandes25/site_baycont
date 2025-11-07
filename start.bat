@echo off
chcp 65001 >nul
cls

echo ================================================
echo 🚀 Iniciando Baycont - Landing Page
echo ================================================
echo.

:: Verificar se Node.js está instalado
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ Node.js não está instalado!
    echo 📥 Instale o Node.js em: https://nodejs.org/
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('node --version') do set NODE_VERSION=%%i
echo ✅ Node.js instalado: %NODE_VERSION%

for /f "tokens=*" %%i in ('npm --version') do set NPM_VERSION=%%i
echo ✅ NPM instalado: %NPM_VERSION%
echo.

:: Verificar se está na pasta correta
if not exist "package.json" (
    echo ❌ Execute este script na pasta raiz do projeto!
    pause
    exit /b 1
)

:: Verificar dependências
if not exist "node_modules" (
    goto install_deps
)
if not exist "frontend\node_modules" (
    goto install_deps
)
if not exist "backend\node_modules" (
    goto install_deps
)
goto deps_ok

:install_deps
echo 📦 Instalando dependências...
echo.

echo ▶ Instalando dependências da raiz...
call npm install
if %errorlevel% neq 0 (
    echo ❌ Erro ao instalar dependências da raiz!
    pause
    exit /b 1
)

echo ▶ Instalando dependências do frontend...
cd frontend
call npm install
if %errorlevel% neq 0 (
    echo ❌ Erro ao instalar dependências do frontend!
    pause
    exit /b 1
)
cd ..

echo ▶ Instalando dependências do backend...
cd backend
call npm install
if %errorlevel% neq 0 (
    echo ❌ Erro ao instalar dependências do backend!
    pause
    exit /b 1
)
cd ..

echo.
echo ✅ Todas as dependências foram instaladas!
echo.
goto check_env

:deps_ok
echo ✅ Dependências já instaladas!
echo.

:check_env
:: Verificar arquivo .env
if not exist "backend\.env" (
    echo ⚠️  ATENÇÃO: Arquivo .env não encontrado!
    echo.
    echo Para o formulário de contato funcionar, você precisa:
    echo 1. Copiar o arquivo backend\.env.example para backend\.env
    echo 2. Configurar suas credenciais de email
    echo.
    set /p resposta="Deseja criar o arquivo .env agora? (s/n): "
    
    if /i "%resposta%"=="s" (
        copy "backend\.env.example" "backend\.env" >nul
        echo.
        echo ✅ Arquivo .env criado!
        echo 📝 Edite o arquivo backend\.env com suas credenciais
        echo.
        echo Pressione qualquer tecla para continuar...
        pause >nul
    )
)

:: Verificar se as imagens foram copiadas
if not exist "frontend\public\assets" (
    echo 📁 Copiando imagens para frontend\public\assets...
    if not exist "frontend\public" mkdir "frontend\public"
    xcopy "assets" "frontend\public\assets\" /E /I /Y >nul
    echo ✅ Imagens copiadas!
    echo.
)

echo ================================================
echo 🎉 Tudo pronto! Iniciando o site...
echo ================================================
echo.
echo 🌐 Frontend: http://localhost:3000
echo 🔌 Backend:  http://localhost:5000
echo.
echo ⚠️  Para parar os servidores, pressione Ctrl+C
echo.

:: Aguardar 2 segundos
timeout /t 2 /nobreak >nul

:: Iniciar o projeto
call npm run dev

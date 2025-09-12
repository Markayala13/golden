# Script para deployment a Hostinger
Write-Host "🚀 Iniciando deployment para Hostinger..." -ForegroundColor Green

# Paso 1: Limpiar builds anteriores
Write-Host "🧹 Limpiando builds anteriores..." -ForegroundColor Yellow
if (Test-Path ".next") {
    Remove-Item -Recurse -Force ".next"
}
if (Test-Path "out") {
    Remove-Item -Recurse -Force "out"
}

# Paso 2: Configurar para exportación estática
Write-Host "⚙️ Configurando para exportación estática..." -ForegroundColor Yellow
$configContent = @"
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
"@
$configContent | Out-File -FilePath "next.config.js" -Encoding UTF8

# Paso 3: Generar build estática
Write-Host "🔨 Generando build estática..." -ForegroundColor Yellow
npm run build

# Paso 4: Copiar .htaccess a la carpeta out
Write-Host "📁 Copiando .htaccess..." -ForegroundColor Yellow
Copy-Item ".htaccess" "out\.htaccess"

# Paso 5: Restaurar configuración de desarrollo
Write-Host "🔄 Restaurando configuración de desarrollo..." -ForegroundColor Yellow
$devConfigContent = @"
/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Comentado para desarrollo
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
"@
$devConfigContent | Out-File -FilePath "next.config.js" -Encoding UTF8

Write-Host "✅ ¡Deployment preparado!" -ForegroundColor Green
Write-Host ""
Write-Host "📋 INSTRUCCIONES PARA HOSTINGER:" -ForegroundColor Cyan
Write-Host "1. Ve a tu panel de Hostinger" -ForegroundColor White
Write-Host "2. Abre el Administrador de archivos" -ForegroundColor White
Write-Host "3. Navega a la carpeta 'public_html'" -ForegroundColor White
Write-Host "4. ELIMINA todo el contenido existente en public_html" -ForegroundColor Red
Write-Host "5. Sube TODO el contenido de la carpeta 'out' a public_html" -ForegroundColor White
Write-Host ""
Write-Host "🎉 Tu sitio estará disponible en tu dominio!" -ForegroundColor Green

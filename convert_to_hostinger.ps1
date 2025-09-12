# Script para convertir rutas a Hostinger
Write-Host "Convirtiendo rutas para Hostinger..." -ForegroundColor Green

$files = @("index.html", "services.html", "gallery.html", "contact.html", "index-es.html", "services-es.html", "gallery-es.html", "contact-es.html")

foreach ($file in $files) {
    Write-Host "Procesando $file..." -ForegroundColor Yellow
    
    # Leer contenido
    $content = Get-Content $file -Raw
    
    # Reemplazar todas las rutas a absolutas
    $content = $content -replace 'href="styles.css"', 'href="/styles.css"'
    $content = $content -replace 'src="LOGOS/PAVERS LOGO.PNG"', 'src="/LOGOS/PAVERS LOGO.PNG"'
    $content = $content -replace 'src="pic/', 'src="/pic/'
    $content = $content -replace 'src="PIC2/', 'src="/PIC2/'
    $content = $content -replace 'href="index.html"', 'href="/index.html"'
    $content = $content -replace 'href="services.html"', 'href="/services.html"'
    $content = $content -replace 'href="gallery.html"', 'href="/gallery.html"'
    $content = $content -replace 'href="contact.html"', 'href="/contact.html"'
    $content = $content -replace 'href="index-es.html"', 'href="/index-es.html"'
    $content = $content -replace 'href="services-es.html"', 'href="/services-es.html"'
    $content = $content -replace 'href="gallery-es.html"', 'href="/gallery-es.html"'
    $content = $content -replace 'href="contact-es.html"', 'href="/contact-es.html"'
    
    # Guardar archivo
    Set-Content $file $content -Encoding UTF8
}

# Arreglar CSS también
$cssContent = Get-Content styles.css -Raw
$cssContent = $cssContent -replace 'pic/Capture4.PNG', '/pic/Capture4.PNG'
Set-Content styles.css $cssContent -Encoding UTF8

Write-Host "Listo para Hostinger!" -ForegroundColor Green 
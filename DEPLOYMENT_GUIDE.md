# 🚀 Guía de Despliegue - Texas Pool and Pavers

## 📋 Checklist antes de subir al servidor:

### ✅ **Estructura de archivos correcta:**
```
tu-dominio.com/
├── index.html
├── services.html
├── gallery.html
├── contact.html
├── index-es.html
├── services-es.html
├── gallery-es.html
├── contact-es.html
├── styles.css
├── script.js
├── .htaccess (para Apache)
├── web.config (para IIS)
├── LOGOS/
│   └── PAVERS LOGO.PNG
├── pic/
│   ├── CapturePOOL.PNG
│   ├── CaptureExterior Paving.PNG
│   └── ... (todas las imágenes)
└── PIC2/
    ├── BEVERLY.png
    └── ... (todas las imágenes)
```

## 🔧 **Problemas comunes y soluciones:**

### 1. **Imágenes no se cargan**
**Causa:** Rutas incorrectas o mayúsculas/minúsculas
**Solución:**
- Verificar que las carpetas se llamen exactamente `pic/` y `PIC2/`
- Verificar que los nombres de archivos coincidan exactamente (incluyendo mayúsculas)

### 2. **CSS no se aplica**
**Causa:** Archivo CSS no encontrado
**Solución:**
- Verificar que `styles.css` esté en la raíz del sitio
- Verificar que el enlace en HTML sea correcto: `<link rel="stylesheet" href="/styles.css">`

### 3. **JavaScript no funciona**
**Causa:** Archivo JS no encontrado
**Solución:**
- Verificar que `script.js` esté en la raíz del sitio
- Verificar que el enlace en HTML sea correcto: `<script src="/script.js"></script>`

### 4. **Página principal no carga**
**Causa:** Servidor no reconoce index.html
**Solución:**
- Subir el archivo `.htaccess` (Apache) o `web.config` (IIS)
- Verificar que el servidor tenga habilitado el módulo rewrite

### 5. **Navegación entre páginas no funciona**
**Causa:** Rutas relativas vs absolutas
**Solución:**
- Usar rutas absolutas: `/services.html` en lugar de `services.html`
- Verificar que todos los enlaces usen `/` al inicio

## 🌐 **Configuración por tipo de servidor:**

### **Apache (cPanel, Hostinger, etc.):**
- Subir archivo `.htaccess`
- Verificar que mod_rewrite esté habilitado

### **IIS (Windows Server):**
- Subir archivo `web.config`
- Habilitar URL Rewrite Module

### **Nginx:**
```nginx
location / {
    try_files $uri $uri/ $uri.html =404;
}
```

### **GitHub Pages:**
- Crear archivo `_config.yml`:
```yaml
include: [".htaccess"]
```

## 🔍 **Verificación post-despliegue:**

1. **Abrir las herramientas de desarrollador (F12)**
2. **Ir a la pestaña "Network"**
3. **Recargar la página**
4. **Verificar que no haya errores 404 en:**
   - styles.css
   - script.js
   - Imágenes
   - LOGOS/PAVERS LOGO.PNG

## 📞 **Si aún hay problemas:**

1. **Verificar permisos de archivos** (644 para archivos, 755 para carpetas)
2. **Limpiar caché del navegador**
3. **Probar en modo incógnito**
4. **Verificar logs del servidor**

## 🎯 **Comandos útiles para verificar:**

```bash
# Verificar estructura de archivos
ls -la

# Verificar permisos
chmod 644 *.html *.css *.js
chmod 755 LOGOS/ pic/ PIC2/

# Verificar que no haya archivos ocultos
ls -la | grep "^\."
```

¡Con esta configuración tu sitio debería funcionar perfectamente en cualquier servidor web! 🚀 
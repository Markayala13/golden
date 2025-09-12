# Texas Pool & Pavers - Modern Website

Una aplicación web moderna construida con el stack más potente de 2025 para Texas Pool & Pavers, especialistas en construcción de piscinas y pavimentación exterior.

## 🚀 Stack Tecnológico

### Frontend Framework
- **Next.js 14** con App Router y Server Components
- **React 18** con TypeScript
- **Tailwind CSS** para estilos modernos y responsivos

### UI/UX Components
- **shadcn/ui** - Componentes accesibles y bien diseñados
- **Radix UI** - Primitivos accesibles
- **Framer Motion** - Animaciones suaves y profesionales
- **Lucide React** - Iconos modernos

### State Management & Forms
- **Zustand** - Estado global ligero
- **React Hook Form** - Manejo de formularios
- **Zod** - Validación de esquemas

### Content & Visual Editors
- **Tiptap v3** - Editor de texto rico
- **React Flow** - Editor de nodos y flujo
- **DnD Kit** - Drag and drop profesional

### Internationalization
- **next-intl** - Soporte multiidioma (EN/ES)

### Development Tools
- **TypeScript** - Tipado estático
- **ESLint** - Linting de código
- **Prettier** - Formateo de código
- **Turbopack** - Bundler rápido

## 📦 Instalación

### Prerrequisitos
- Node.js 18+ 
- npm, yarn, o pnpm

### Pasos de Instalación

1. **Clonar el repositorio**
```bash
git clone <repository-url>
cd texas-pool-pavers-modern
```

2. **Instalar dependencias**
```bash
npm install
# o
yarn install
# o
pnpm install
```

3. **Configurar variables de entorno**
```bash
cp .env.example .env.local
```

4. **Ejecutar en desarrollo**
```bash
npm run dev
# o
yarn dev
# o
pnpm dev
```

5. **Abrir en el navegador**
```
http://localhost:3000
```

## 🏗️ Estructura del Proyecto

```
├── app/                    # App Router (Next.js 14)
│   ├── globals.css        # Estilos globales
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página principal
├── components/            # Componentes React
│   ├── ui/               # Componentes UI base (shadcn/ui)
│   ├── layout/           # Componentes de layout
│   ├── sections/         # Secciones de página
│   └── providers/        # Providers de contexto
├── lib/                  # Utilidades y configuraciones
├── hooks/                # Custom hooks
├── store/                # Estado global (Zustand)
├── types/                # Definiciones de TypeScript
├── public/               # Archivos estáticos
│   ├── LOGOS/           # Logos de la empresa
│   ├── pic/             # Imágenes principales
│   └── PIC2/            # Imágenes adicionales
└── styles/              # Estilos adicionales
```

## 🎨 Características Principales

### ✨ Diseño Moderno
- **Responsive Design** - Optimizado para todos los dispositivos
- **Dark/Light Mode** - Soporte para temas
- **Animaciones Suaves** - Transiciones con Framer Motion
- **Accesibilidad** - Cumple estándares WCAG

### 🌍 Internacionalización
- **Soporte EN/ES** - Traducciones completas
- **Language Switcher** - Cambio dinámico de idioma
- **SEO Optimizado** - Meta tags por idioma

### 📱 Componentes Interactivos
- **Hero Section** - Animaciones de entrada
- **Services Cards** - Hover effects y animaciones
- **Contact Form** - Validación en tiempo real
- **Mobile Menu** - Navegación táctil

### 🚀 Performance
- **Server Components** - Renderizado optimizado
- **Image Optimization** - Next.js Image component
- **Code Splitting** - Carga lazy de componentes
- **SEO Optimized** - Meta tags y structured data

## 🛠️ Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm run start        # Servidor de producción
npm run lint         # Linting de código
npm run type-check   # Verificación de tipos
```

## 🚀 Deployment

### Vercel (Recomendado)
1. Conectar repositorio a Vercel
2. Configurar variables de entorno
3. Deploy automático en cada push

### Otros Proveedores
- **Netlify** - Compatible con Next.js
- **Railway** - Deploy fácil
- **DigitalOcean App Platform** - Escalable

## 📝 Configuración de Entorno

### Variables de Entorno Requeridas
```env
# Base URL
NEXT_PUBLIC_BASE_URL=https://texaspoolandpavers.com

# Analytics (opcional)
NEXT_PUBLIC_GA_ID=your-ga-id
NEXT_PUBLIC_GTM_ID=your-gtm-id

# Email (para formularios)
EMAIL_SERVICE_ID=your-email-service
EMAIL_TEMPLATE_ID=your-template-id
EMAIL_PUBLIC_KEY=your-public-key
```

## 🎯 Próximas Características

### Editor Visual (Fase 2)
- **Tiptap Editor** - Editor de contenido rico
- **React Flow** - Editor de flujos de trabajo
- **DnD Kit** - Drag and drop para layouts

### CMS Headless (Fase 3)
- **Plasmic** - Builder visual
- **Payload CMS** - CMS headless
- **Content Management** - Panel de administración

### Analytics & SEO (Fase 4)
- **Google Analytics 4** - Tracking avanzado
- **Search Console** - Optimización SEO
- **Performance Monitoring** - Métricas de rendimiento

## 🤝 Contribución

1. Fork el proyecto
2. Crear rama feature (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 📞 Contacto

**Texas Pool & Pavers**
- 📧 Email: texaspoolandpavers@gmail.com
- 📱 Teléfono: (210) 374-2779
- 🌐 Website: https://texaspoolandpavers.com
- 📍 Ubicación: Texas, USA

---

**Desarrollado con ❤️ usando el stack más moderno de 2025** 
# 🔒 GUÍA DE SEGURIDAD - Golden Boy Stonework Chatbot

## ⚠️ CRÍTICO: Antes de hacer Deploy

### 1. Verificar .gitignore
```bash
# Verificar que estos archivos NO se suban a GitHub:
.env
.env.local
.env.production.local
```

### 2. Variables de Entorno Seguras

**NUNCA hardcodees la API key en el código**

#### Para Desarrollo Local:
1. Copia `.env.example` a `.env.local`
2. Completa con tus valores reales
3. NUNCA subas `.env.local` a GitHub

#### Para Vercel (Recomendado):
1. Ve a tu proyecto en Vercel Dashboard
2. Settings → Environment Variables
3. Agrega:
   - `OPENAI_API_KEY` = tu_key_real
   - `NEXT_PUBLIC_BASE_URL` = https://tu-dominio.vercel.app

### 3. Checklist Pre-Deploy

- [ ] `.env.local` está en `.gitignore`
- [ ] No hay API keys en el código
- [ ] Logs no exponen información sensible
- [ ] Variables configuradas en platform de deployment

### 4. Plataformas de Deployment Seguras

#### Vercel (Recomendado):
```bash
# 1. Push a GitHub sin .env.local
git add .
git commit -m "Ready for deployment"
git push

# 2. Conectar GitHub con Vercel
# 3. Configurar Environment Variables en Vercel
# 4. Deploy automático
```

#### Netlify:
```bash
# Similar a Vercel, configurar env vars en Netlify dashboard
```

### 5. Verificación Post-Deploy

1. **Verificar que el chatbot funciona**
2. **Revisar logs de producción**
3. **Confirmar que no se expone información sensible**

### 6. Rotación de API Keys

**Si accidentalmente expones tu API key:**

1. **INMEDIATAMENTE** revoca la key en OpenAI
2. Genera una nueva API key
3. Actualiza en tu plataforma de deployment
4. Redeploy

### 7. Monitoreo de Uso

- Revisa regularmente el uso de OpenAI API
- Configura alertas de gasto
- Monitorea logs por actividad sospechosa

## 🚨 QUE NUNCA HAGAS:

❌ Subir `.env.local` a GitHub
❌ Hardcodear API keys en código
❌ Compartir logs con información sensible
❌ Dejar API keys en comentarios de código
❌ Usar la misma API key en múltiples proyectos

## ✅ MEJORES PRÁCTICAS:

✅ Usar variables de entorno
✅ Revocar keys no utilizadas
✅ Monitorear uso de API
✅ Usar .gitignore robusto
✅ Hacer deployment desde repositorio limpio

## 📞 En Caso de Emergencia

Si sospechas que tu API key fue comprometida:
1. Revoca inmediatamente en OpenAI
2. Genera nueva key
3. Actualiza deployment
4. Revisa logs de uso inusual

---

**Recuerda: La seguridad es responsabilidad del desarrollador. Una API key comprometida puede resultar en costos inesperados.**
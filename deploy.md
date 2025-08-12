# 🚀 Despliegue Rápido en Render - AUNA Hub

## 📋 Pasos para Despliegue One-Shot:

### 1. **Acceso Directo a Render:**
- URL: https://render.com
- Inicia sesión con tu cuenta de GitHub

### 2. **Crear Nuevo Web Service:**
- Haz clic en **"New +"** → **"Web Service"**
- Conecta tu cuenta de GitHub si no está conectada

### 3. **Seleccionar Repositorio:**
- Busca: `Telepatic-Kodes/auna-hub`
- Selecciona el repositorio

### 4. **Configuración Automática:**
```
Name: auna-hub
Environment: Node
Region: US East (N. Virginia) [o la más cercana]
Branch: main
Build Command: npm install && npm run build
Start Command: npm start
Plan: Free
```

### 5. **Variables de Entorno:**
```
NODE_ENV = production
```

### 6. **Desplegar:**
- Haz clic en **"Create Web Service"**
- Espera ~10-15 minutos para el build y despliegue

## 🔗 URLs Importantes:
- **Repositorio:** https://github.com/Telepatic-Kodes/auna-hub
- **Render Dashboard:** https://dashboard.render.com
- **Sitio Desplegado:** https://auna-hub.onrender.com (una vez listo)

## ✅ Verificación Post-Despliegue:
1. Verifica que el sitio cargue correctamente
2. Prueba el modo oscuro/claro
3. Verifica todas las secciones
4. Prueba la responsividad en móvil

## 🎯 Características del Sitio:
- ✅ Contenido original de auna.cl
- ✅ Dark Mode funcional
- ✅ Diseño responsive
- ✅ Animaciones suaves
- ✅ SEO optimizado
- ✅ Performance optimizada

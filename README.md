# Lumini - Tu Compañero Emocional

Lumini es una aplicación móvil diseñada para ayudarte a mantener un registro de tus emociones, analizar patrones de sueño y proporcionar guía emocional personalizada. Esta aplicación está construida con React Native, Expo y Node.js.

## 📱 Características Principales

- Registro diario de emociones
- Análisis de patrones de sueño
- Guía emocional personalizada
- Reportes y estadísticas
- Interfaz intuitiva y amigable

## 🛠 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- Node.js (versión 14.0 o superior)
- npm (versión 6.0 o superior)
- Expo CLI
- iOS Simulator o Android Studio (para emulación)

## 🚀 Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/tu-usuario/lumini.git
cd lumini
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Instalar Expo CLI globalmente** (si aún no lo tienes)
```bash
npm install -g expo-cli
```

## 💻 Ejecutar el Proyecto

1. **Iniciar el servidor de desarrollo**
```bash
expo start
```

2. **Ejecutar en iOS**
```bash
expo run:ios
```

3. **Ejecutar en Android**
```bash
expo run:android
```

## 📱 Probar en tu Dispositivo

1. Descarga la aplicación Expo Go en tu dispositivo móvil
2. Escanea el código QR que aparece en la terminal o en el navegador
3. La aplicación se cargará automáticamente

## 🔧 Configuración del Entorno

1. **Variables de Entorno**
   - Crea un archivo `.env` en la raíz del proyecto
   - Copia el contenido de `.env.example` y configura tus variables

```bash
API_URL=tu_url_api
ENVIRONMENT=development
```

## 📂 Estructura del Proyecto

```
lumini/
├── assets/
├── src/
│   ├── components/
│   ├── screens/
│   ├── navigation/
│   ├── services/
│   └── utils/
├── App.js
└── package.json
```

## 🔨 Scripts Disponibles

- `npm start`: Inicia el servidor de desarrollo
- `npm test`: Ejecuta las pruebas
- `npm run build`: Genera la build de producción
- `npm run lint`: Ejecuta el linter
- `npm run eject`: Ejector de Expo (usar con precaución)

## 🤝 Contribución

1. Fork el proyecto
2. Crea tu rama de características (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Notas Adicionales

- La aplicación requiere conexión a internet para algunas funcionalidades
- Se recomienda usar la última versión de Expo
- Para problemas conocidos, consulta la sección de Issues en el repositorio

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles.
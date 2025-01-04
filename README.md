# React Podcast App

Este repositorio contiene la solución a la prueba técnica de frontend para **INDITEX**, donde se desarrolla una aplicación para escuchar podcasts musicales. La aplicación está construida como una SPA (Single Page Application) utilizando React.

## Objetivo

El objetivo de esta prueba es implementar una mini-aplicación que permita a los usuarios explorar y reproducir podcasts musicales, cumpliendo con los requisitos funcionales y técnicos especificados.

---

## Descripción de las vistas

### 1. **Vista Principal**

- **URL:** `/`
- Muestra el listado de los 100 podcasts más populares utilizando el servicio externo de Apple.
- **Requerimientos:**
  - Almacenar el listado en el cliente para evitar solicitudes repetitivas si no ha pasado más de un día.
  - Implementar un filtro de búsqueda en tiempo real basado en el título y el autor del podcast.
  - Al hacer clic en un podcast, navegar a la vista de detalles.

---

### 2. **Vista de Detalle del Podcast**

- **URL:** `/podcast/{podcastId}`
- Incluye una barra lateral con información del podcast y una sección principal con los episodios disponibles.
- **Requerimientos:**
  - Mostrar la barra lateral con:
    - Imagen del podcast.
    - Título.
    - Autor.
    - Descripción.
  - Listar los episodios con:
    - Título.
    - Fecha de publicación.
    - Duración.
  - Almacenar en cliente el detalle del podcast para evitar solicitudes repetitivas si no ha pasado más de un día.
  - Permitir la navegación al detalle de un episodio al hacer clic en su título.

---

### 3. **Vista de Detalle del Episodio**

- **URL:** `/podcast/{podcastId}/episode/{episodeId}`
- Muestra los detalles del episodio y un reproductor de audio básico.
- **Requerimientos:**
  - Barra lateral igual que en la vista de detalle del podcast.
  - Sección principal con:
    - Título del episodio.
    - Descripción (renderizando HTML si es necesario).
    - Reproductor de audio HTML5.

---

## Requerimientos Generales

- La aplicación debe ser una SPA, sin recargar completamente el documento principal.
- Navegación con URLs limpias (sin usar `#`).
- Implementar dos modos:
  - **Development:** Assets no minimizados.
  - **Production:** Assets concatenados y minimizados.
- Navegación con indicador visual para reflejar el cambio de vistas.
- Compatible solo con la última versión de Google Chrome en escritorio.

---

## Recursos

- **Listado de podcasts populares:**  
  `https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json`
- **Detalles de un podcast:**  
  `https://itunes.apple.com/lookup?id=934552872&media=podcast&entity=podcastEpisode&limit=20`
- **Servicio para CORS:**  
  `https://allorigins.win`

---

## Instalación y Ejecución

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/react-podcast-app.git
   cd react-podcast-app
   ```
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Ejecutar en modo development:
   ```bash
   npm start
   ```
4. Generar build para producción:
   ```bash
   npm run build
   ```

---

## Notas

- Los errores se mostrarán únicamente en la consola del navegador.
- No es necesario considerar navegadores distintos a Google Chrome ni tamaños de pantalla pequeños.

---

## Contribución

Este proyecto está diseñado para una prueba técnica y no está abierto a contribuciones externas.

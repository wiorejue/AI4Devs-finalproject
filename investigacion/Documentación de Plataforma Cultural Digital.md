# **Presentación producto sitio web “latearte”**

Latearte (un hub) donde lo artístico late con fuerza, es punto de encuentro con las artes, el ingenio y la creatividad; es una plataforma web de streaming de alta especialidad diseñada para el consumo de contenidos culturales, independientes, de prestigio y de contenidos ingeniosos, audaces y creativos.

Lugar para conectar con contenidos artísticos, para entremezclar ideas nuevas con contenidos destacados; presentar una alternativa refrescante al "scroll" infinito de las plataformas comerciales. Se busca crear una plataforma de curaduría premium, donde se selecciona, organiza y gestiona contenidos artísticos, un refugio para quienes buscan calidad artística sobre cantidad algorítmica.

Se quiere crear un **Meta-Buscador Especializado** o un **Hub de Curaduría**, que resuelva el problema de la fragmentación: el usuario no tiene que saltar de app en app para saber dónde conectar con la cultura y el arte. 

Se quiere presentar al usuario contenido gratuito, acceder de forma integrada a algunos contenidos y además presentar opciones de contenido de pago, y que las pueda distinguir fácilmente.

## ---

**📄 Documentación del Producto: sitio web “latearte“**

### **1\. Objetivos del Proyecto**

* **Objetivo General:** Crear un ecosistema digital que centralice y clasifique el contenido cultural y artístico de alta calidad disperso en la web, facilitando el descubrimiento y el acceso directo.  
* **Objetivos Específicos:**  
  * **Curaduría sobre Cantidad:** Filtrar solo contenido con valor artístico (premiados, cine de autor, música académica/selecta).  
  * **Transparencia de Acceso:** Informar claramente al usuario si el contenido es gratuito, bajo suscripción (Netflix, MUBI, Qello) o de pago por evento (VOD).  
  * **Experiencia Fluida:** Reducir la fricción mediante la reproducción embebida siempre que las licencias y APIs lo permitan.

### ---

### **2\. Pilares del Contenido**

La oferta se divide en tres ejes verticales que definen la identidad de la aplicación:

* **Cortos y cortometrajes (The Short List):** Una colección de piezas breves, ingeniosas y vanguardistas. Con dos líneas:  
  *  El enfoque principal son obras premiadas en festivales internacionales o nominadas por la Academia (**Oscars**), garantizando una experiencia de alto impacto en poco tiempo.  
  * Cortos y animaciones frescas, ingeniosas, creativas, nuevas propuestas. La parte más dinámica que se conecte con la búsqueda de experiencias nuevas, que sorprendan.  
* **Escenarios (The Stage):** Un espacio dedicado a la música y las artes escénicas. No solo conciertos completos, sino **curaduría de fragmentos magistrales** (la "pieza de oro" de una presentación). Abarca desde la potencia de una orquesta sinfónica hasta la intimidad de un club de Jazz o un bolero.  
* **Cine de Autor (The Cinema):** Un catálogo alejado del *blockbuster*. Se centra en el cine de festivales (Cannes, Berlinale, etc.), cine independiente y obras que alimentan la **"Cinefilia Pura"**, donde la visión del director es el eje central.

### 

### **3\. Perfil del Usuario Objetivo**

* **El Curioso Cultural:** Personas que buscan aprender o descubrir algo nuevo en sus tiempos libres.  
* **El Melómano y Amante del Arte:** Usuarios que valoran la interpretación técnica, desde un solo de violín hasta una puesta en escena teatral.  
* **Cinefilitas:** Espectadores que huyen de los clichés de Hollywood y buscan profundidad temática.

### ---

**4\. Características Principales**

* **Agregación Inteligente:** La plataforma no solo aloja, sino que indexa contenido de terceros (YouTube, Vimeo, plataformas de nicho).  
* **Etiquetado de "Estatus de Acceso":** Un sistema de iconos visuales que indica:  
  * 🟢 **Abierto:** Contenido gratuito o de dominio público.  
  * 🟡 **Suscripción:** Requiere cuenta en una plataforma externa.  
  * 🔵 **Premium/VOD:** Pago único por alquiler o compra.  
* **Reproductor Unificado:** Capacidad de embeber marcos de reproducción para que el usuario no abandone la web (sujeto a disponibilidad técnica del origen).

### ---

**5\. Funcionalidades Detalladas**

#### **A. Módulo de Usuario y Navegación**

* **Filtros de "Costo":** Opción para mostrar solo contenido gratuito o contenido disponible en las plataformas que el usuario ya paga.  
* **Buscador por "Hito":** Permitir búsquedas como "Nominados Oscar 2024" o "Jazz Instrumental en vivo".  
* **Listas de Deseos (Watchlist):** Guardar contenido de diferentes fuentes en una sola lista personalizada.

#### **B. Visualización de Resultados (Card Design)**

Cada miniatura de video debe mostrar:

1. **Título y Director/Artista.**  
2. **Sello de Calidad:** (Ej: "Ganador Cannes", "Nominado Oscar", "Versión Sinfónica").  
3. **Indicador de Plataforma:** Logo de la fuente original (Ej: YouTube, Vimeo, MUBI).  
4. **Tipo de Acceso:** Texto o icono que indique si es pago o gratuito.

#### **C. Funcionalidades Técnicas de Reproducción**

* Smart Embedding: Si el video permite iframe (como YouTube o Vimeo), se reproduce en una ventana modal dentro de Artesir.  
* **Deep Linking:** Si el contenido es de una plataforma cerrada (como Netflix o Apple TV), el botón de "Play" abre directamente la aplicación o la web externa en el minuto exacto.

### ---

**6\. Estructura de Secciones (Matriz de Contenido)**

| Sección | Funcionalidad Específica | Subcategorías / Géneros | Atributo Diferencial | Ejemplo de Contenido |
| :---- | :---- | :---- | :---- | :---- |
| **Cortos** | Botón de "Sorpréndeme" (Random Play). | Animación, Ficción, Documental, Curiosidades. | Calidad premiada (Oscar/Festivales).Cortos nuevos, audaces, creativos, resaltados en listas artísticas o culturales. | Cortometrajes de animación de festivales. Propuestas nuevas, ingeniosas, creativas. |
| **Conciertos** | Selector de "Solo Fragmentos" o "Concierto Completo". | Sinfónico, Ópera, Teatro, Homenajes, Jazz, Salsa, Rock, Pop. | Versiones instrumentales y "**highlights**". | El solo de trompeta de un concierto de Jazz. |
| **Cine** | Ficha técnica con enfoque en el estilo visual. | Cine de Autor, Independiente, Cine Cultural. | Narrativas no convencionales. | Películas de cine independiente o experimental. |

### 

### ---

### **7\. Reglas de Negocio**

* **Prioridad de Visualización:** El contenido gratuito y embebible tendrá prioridad en los algoritmos de recomendación para mejorar la retención del usuario en la web.  
* **Afiliación:** Enlaces a plataformas de pago podrán incluir códigos de afiliado para monetizar la plataforma.


## ---

**🔄 Flujo E2E Prioritario: "El Descubrimiento de Valor en Tiempo Real"**

**Escenario:** Un usuario tiene 15 minutos libres y quiere ver algo de alta calidad que encaje con su estado de ánimo actual, entender por qué es importante y aprender algo mientras lo ve.

1. **Entrada:** El usuario ajusta el **Dial de Tiempo** a 15 min y selecciona el **Mood** "Melancólico/Inspirador".  
2. **Selección:** El sistema filtra y presenta una **Ficha de Obra** de un corto premiado.  
3. **Consumo:** El usuario inicia la reproducción (embebida) y activa el **Modo Contexto**.  
4. **Salida:** El usuario termina el video habiendo recibido 2-3 datos históricos (Pop-ups) y sabe exactamente por qué esa obra es un hito cultural.

## ---

**📝 Planificación de Historias de Usuario**

### **Historias Must-Have (Críticas para el flujo)**

1. **Historia: El Dial de Tiempo Exacto**  
   * **Como** usuario con tiempo limitado, **quiero** filtrar el contenido mediante un selector de rango (0-120 min), **para que** la plataforma solo me muestre piezas que pueda terminar de ver en mi disponibilidad actual.  
   * *Criterio de Aceptación:* El filtro debe actualizar los resultados en tiempo real y discriminar entre "Fragmento" y "Obra Completa".  
2. **Historia: La Ficha de Valor Cultural**  
   * **Como** espectador exigente, **quiero** ver una ficha técnica que incluya Título, Región, Duración, "Vibe" (Mood) y el "Por qué es importante", **para** decidir si el contenido merece mi atención en menos de 10 segundos.  
   * *Criterio de Aceptación:* La ficha debe ser visualmente limpia y el campo "Importancia" no debe superar los 280 caracteres.  
3. **Historia: Indicador de Acceso y Origen**  
   * **Como** usuario, **quiero** saber si el video es gratuito o de una suscripción externa antes de hacer clic, **para** evitar la frustración de encontrar muros de pago inesperados.  
   * *Criterio de Aceptación:* Cada miniatura/ficha debe mostrar el logo de la plataforma origen y el código de color (Verde/Amarillo/Azul).

### **Historias Should-Have (Deseables / Incrementales)**

4. **Historia: Modo Contexto (Pop-ups de Datos)**  
   * **Como** usuario interesado en la historia del arte, **quiero** activar notificaciones sutiles durante el video, **para** recibir datos curiosos o históricos sin detener la reproducción.  
   * *Criterio de Aceptación:* Los pop-ups deben aparecer en la esquina superior/inferior, durar máximo 5 segundos y tener un interruptor de encendido/apagado global.  
5. **Historia: Reproducción Embebida Inteligente**  
   * **Como** usuario, **quiero** ver el contenido directamente en ArtStream mediante un player embebido, **para** no perder el hilo de mi navegación y filtros actuales.  
   * *Criterio de Aceptación:* Si la API de la fuente lo permite, el video debe abrirse en un modal; de lo contrario, debe haber un botón de "Abrir en fuente original".

## ---

**🎨 Visualización de la "Ficha de Obra" (Ejemplo)**

**Título:** *The Last Steps* (Cortometraje)

**Región:** 🇫🇷 Francia | **Duración:** 12 min

**Vibe:** 🕯️ Nostálgico / Minimalista

**Valor Cultural:** Nominado al Oscar (2025). Destaca por su técnica de stop-motion con materiales reciclados, explorando la soledad urbana.

**Acceso:** 🟢 Gratis (Vimeo)

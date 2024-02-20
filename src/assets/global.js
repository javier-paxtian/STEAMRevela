export const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export const pages = [
    {
        "nombre": "Inicio",
        "src": "/"
    },
    {
        "nombre": "Catalogo",
        "src": "/catalogue"
    },
    {
        "nombre": "Juego",
        "src": "/game"
    },
]

export const card0 = [
    { id: '1', },
    { id: '3', },
    { id: '5', },
    { id: '7', },
    { id: '9', },
    { id: '11', },
    { id: '13', },
    { id: '15', },
    { id: '17', },
    { id: '19', },
    { id: '21', },
    { id: '23', },
    { id: '25', },
    { id: '27', },
    { id: '29', },
    { id: '31', },
];

export const card1 = [
    { id: '18', },
    { id: '19', },
    { id: '22', },
    { id: '23', },
    { id: '2', },
    { id: '3', },
    { id: '6', },
    { id: '7', },
    { id: '26', },
    { id: '27', },
    { id: '30', },
    { id: '31', },
    { id: '10', },
    { id: '11', },
    { id: '14', },
    { id: '15', },
];

export const card2 = [
    { id: '4', },
    { id: '5', },
    { id: '6', },
    { id: '7', },
    { id: '12', },
    { id: '13', },
    { id: '14', },
    { id: '15', },
    { id: '20', },
    { id: '21', },
    { id: '22', },
    { id: '23', },
    { id: '28', },
    { id: '29', },
    { id: '30', },
    { id: '31', }
];

export const card3 = [
    { id: '24', },
    { id: '25', },
    { id: '26', },
    { id: '27', },
    { id: '8', },
    { id: '9', },
    { id: '10', },
    { id: '11', },
    { id: '28', },
    { id: '29', },
    { id: '30', },
    { id: '31', },
    { id: '12', },
    { id: '13', },
    { id: '14', },
    { id: '15', }
];

export const card4 = [
    { id: '16', },
    { id: '17', },
    { id: '18', },
    { id: '19', },
    { id: '20', },
    { id: '21', },
    { id: '22', },
    { id: '23', },
    { id: '24', },
    { id: '25', },
    { id: '26', },
    { id: '27', },
    { id: '28', },
    { id: '29', },
    { id: '30', },
    { id: '31', }
];
export const catalogue = [
    {
        "id": 1,
        "titulo": "Microscopio",
        "descripcion": "Instrumento óptico que amplía objetos pequeños, permitiendo la observación de detalles a nivel microscópico.",
        "curiosidad": "El microscopio fue inventado en el siglo XVII por Antonie van Leeuwenhoek, quien observó por primera vez microorganismos."
    },
    {
        "id": 2,
        "titulo": "Robot Educativo",
        "descripcion": "Máquina o ingenio electrónico programable que es capaz de manipular objetos y realizar diversas operaciones",
        "curiosidad": "El robotista Mark Roshiem construyó en 2002 un caballero robótico inspirado en los diseños de Da Vinci. Su prototipo podía hablar y saludar. Más tarde utilizó el diseño de Da Vinci como inspiración para sus futuras construcciones de robots para la NASA."
    },
    {
        "id": 3,
        "titulo": "Juguetes Lego",
        "descripcion": "Conjunto de piezas que permiten a los estudiantes experimentar con conceptos de ingeniería y diseño.",
        "curiosidad": "Con 7.541 piezas, el Halcón Milenario de LEGO Star Wars era el producto con más piezas de la historia de la compañía. Una vez montado, la nave de Star Wars mide 21 centímetros de alto, 33 cm. de largo y 56 cm. de ancho. Pero con la salida del Coliseo (ref.10276) ha pasado este a ser el set de LEGO con más piezas con un total de 9.036."
    },
    {
        "id": 4,
        "titulo": "Tablero Interactivo",
        "descripcion": "Superficie táctil que facilita la enseñanza de conceptos matemáticos y científicos de manera interactiva.",
        "curiosidad": "Los primeros tableros interactivos surgieron en la década de 1990, y desde entonces se han convertido en herramientas valiosas en la educación."
    },
    {
        "id": 5,
        "titulo": "Kits de Circuitos Electrónicos",
        "descripcion": "Conjunto de componentes que permiten a los estudiantes explorar la electrónica y aprender sobre circuitos.",
        "curiosidad": "Los primeros kits de electrónica para educación aparecieron en la década de 1960, pero la tecnología ha evolucionado significativamente desde entonces."
    },
    {
        "id": 6,
        "titulo": "Impresora 3D",
        "descripcion": "Dispositivo que crea objetos tridimensionales a partir de modelos digitales, integrando la tecnología y la ingeniería.",
        "curiosidad": "La primera impresora 3D fue creada en 1983, pero su popularidad en la educación ha crecido en las últimas décadas."
    },
    {
        "id": 7,
        "titulo": "Telescopio",
        "descripcion": "Instrumento óptico que permite la observación astronómica y la exploración de conceptos científicos y matemáticos.",
        "curiosidad": "El telescopio refractor fue inventado por Galileo en el siglo XVII, revolucionando la astronomía."
    },
    {
        "id": 8,
        "titulo": "Kist de Química",
        "descripcion": "Conjunto de materiales que permiten realizar experimentos prácticos y entender conceptos químicos.",
        "curiosidad": "El primer juego de química para niños se lanzó en la década de 1920, inspirando generaciones de científicos."
    },
    {
        "id": 9,
        "titulo": "Rompecabezas",
        "descripcion": "Juego que desarrolla habilidades de resolución de problemas y pensamiento lógico.",
        "curiosidad": "El rompecabezas más grande del mundo, completado en 2011, tenía más de 551,232 piezas."
    },
    {
        "id": 10,
        "titulo": "Instrumentos de Arte Digital",
        "descripcion": "Dispositivos como tabletas gráficas o lápices digitales que integran la tecnología en la expresión artística.",
        "curiosidad":"La primera tableta gráfica comercial se lanzó en 1981, cambiando la forma en que los artistas digitales trabajan."
    },
    {
        "id": 11,
        "titulo": "Modelos anatómicos",
        "descripcion": "Réplicas tridimensionales del cuerpo humano que facilitan la enseñanza de la biología y la anatomía.",
        "curiosidad": "Los primeros modelos anatómicos datan del siglo XVIII y fueron utilizados en la enseñanza de la anatomía."
    },
    {
        "id": 12,
        "titulo": "Modelos de ADN",
        "descripcion": "Modelos tridimensionales que representan la estructura del ácido desoxirribonucleico (ADN), introduciendo conceptos de biología molecular.",
        "curiosidad": "La estructura de doble hélice del ADN fue descubierta por James Watson y Francis Crick en 1953."
    },
    {
        "id": 13,
        "titulo": "Cámara Estenopeica",
        "descripcion": "Cámara fotográfica sin lentes que permite explorar conceptos de óptica y fotografía.",
        "curiosidad": "Las cámaras estenopeicas son las formas más simples de cámaras, utilizando un pequeño agujero en lugar de una lente"
    },
    {
        "id": 14,
        "titulo": "Acelerómetro",
        "descripcion": "Dispositivo que mide la aceleración y se utiliza para experimentos relacionados con la física y la ingeniería.",
        "curiosidad": "Los acelerómetros se utilizan en dispositivos como teléfonos inteligentes para detectar la orientación y los movimientos."
    },
    {
        "id": 15,
        "titulo": "Espectroscopio",
        "descripcion": "Instrumento óptico que permite el estudio de la composición química de sustancias mediante el análisis de su espectro de luz.",
        "curiosidad": "Los espectroscopios se utilizan para analizar la luz descomponerla en sus componentes espectrales."
    },
    {
        "id": 16,
        "titulo": "Maqueta de Ciudada Sostenible",
        "descripcion": "Maqueta que representa una ciudad diseñada con principios de sostenibilidad, integrando conceptos de urbanismo y ecología.",
        "curiosidad": "El diseño de ciudades sostenibles busca reducir el impacto ambiental y mejorar la calidad de vida de sus habitantes."
    },
    {
        "id": 17,
        "titulo": "Biomodelo de Sistema Cicrculatorio",
        "descripcion": "Réplica tridimensional del sistema circulatorio humano, utilizado en la educación médica y biológica.",
        "curiosidad": "Los primeros biomodelos para la enseñanza médica se utilizaron en la década de 1920."
    },
    {
        "id": 18,
        "titulo": "Cubo Rubik",
        "descripcion": "Rompecabezas tridimensional que desarrolla habilidades de resolución de problemas y pensamiento lógico, relacionándose con las matemáticas y el diseño.",
        "curiosidad": "El Cubo Rubik fue inventado por el arquitecto húngaro Ernő Rubik en 1974."
    },
    {
        "id": 19,
        "titulo": "Lámpara de Lava",
        "descripcion": "Dispositivo que utiliza principios de convección térmica y fluidez para crear patrones hipnóticos de luz, relacionándose con la física y el diseño.",
        "curiosidad": "La lámpara de lava fue inventada en la década de 1960 y se volvió un ícono de la cultura psicodélica."
    },
    {
        "id": 20,
        "titulo": "Caleidoscopio",
        "descripcion": "Tubo óptico que contiene fragmentos de vidrio y espejos, creando patrones visuales simétricos y explorando principios ópticos.",
        "curiosidad": "La palabra caleidoscopio se deriva de las palabras griegas kalos (hermoso), eidos (forma) y skopeo (observar), lo que significa observador de formas hermosas."
    },
    {
        "id": 21,
        "titulo": "Puzle de geometría fractal",
        "descripcion": "Rompecabezas que representa patrones fractales, explorando conceptos matemáticos y geométricos.",
        "curiosidad": "Los fractales son estructuras geométricas que se repiten a diferentes escalas, descritos por el matemático Benoît Mandelbrot en la década de 1980."
    },
    {
        "id": 22,
        "titulo": "Lupa de Insectos",
        "descripcion": "Instrumento óptico que amplía objetos pequeños, utilizado para el estudio de insectos y otros organismos.",
        "curiosidad": "Las lupas han sido utilizadas desde la antigüedad para observar detalles pequeños, y aún son herramientas esenciales en biología."
    },
    {
        "id": 23,
        "titulo": "Sphero SPRK+",
        "descripcion": "Una esfera robótica programable que enseña programación y conceptos matemáticos de manera divertida.",
        "curiosidad": "La película Star Wars: El Despertar de la Fuerza utilizó versiones modificadas de Sphero para representar a BB-8."
    },
    {
        "id": 24,
        "titulo": "Makey Makey",
        "descripcion": "Un dispositivo que convierte objetos cotidianos en controles táctiles para la computadora, fomentando la creatividad y la inventiva.",
        "curiosidad": "Fue creado por dos estudiantes del MIT Media Lab como proyecto de tesis."
    },
    {
        "id": 25,
        "titulo": "LittleBits",
        "descripcion": "Módulos magnéticos que se conectan para crear circuitos y prototipos electrónicos sin necesidad de soldaduras.",
        "curiosidad": "Ayah Bdeir, la fundadora, fue reconocida por la Casa Blanca como Campeona del Cambio en Innovación."
    },
    {
        "id": 26,
        "titulo": "Chibitronics Circuit Stickers",
        "descripcion": "Pegatinas que contienen circuitos electrónicos para crear proyectos interactivos de papel.",
        "curiosidad": "Han sido utilizados en proyectos de arte y diseño para integrar componentes electrónicos en creaciones visuales."
    },
    {
        "id": 27,
        "titulo": "Lápices 3D",
        "descripcion": "Bolígrafos que permiten dibujar en tres dimensiones utilizando filamentos plásticos.",
        "curiosidad": "Se utiliza en proyectos de diseño y prototipado rápido, integrando creatividad y tecnología."
    },
    {
        "id": 28,
        "titulo": "Edison Robot",
        "descripcion": "Un robot programable diseñado para enseñar programación y robótica de manera accesible.",
        "curiosidad": "Puede ser programado utilizando lenguajes de programación visual y también mediante código de bloques."
    },
    {
        "id": 29,
        "titulo": "E-Blox Circuit Builder",
        "descripcion": "Bloques de construcción que incorporan circuitos electrónicos, enseñando a los niños sobre electricidad y conexión de componentes.",
        "curiosidad": "Los bloques pueden iluminarse y activarse mediante interruptores y sensores."
    },
    {
        "id": 30,
        "titulo": "Snap Circuits",
        "descripcion": "Un kit de construcción electrónica que utiliza componentes modulares y coloridos para enseñar principios de electricidad.",
        "curiosidad": "Incluye más de 100 proyectos que van desde simples circuitos hasta dispositivos más complejos."
    },
    {
        "id": 31,
        "titulo": "Lampara de Plasma",
        "descripcion": "Esfera de cristal llena de gas noble que emite luz brillante al interactuar con un campo eléctrico.",
        "curiosidad": "Se utiliza para ilustrar principios de conducción eléctrica y fenómenos de plasma."
    }
]


export const steamInfo = [
    {
        "title": "Science",
        "titleEs": "Ciencia",
        "content": `La investigación y la construcción de explicaciones para comprender el mundo.
        La pregunta que se formule en una situación de aprendizaje STEAM debe ser investigable porque si no lo puedes investigar no es científica. La metodología científica desarrolla modelos que construyen explicaciones. Es decir, incluye los procesos de indagación, argumentación y modelización que permiten “idear” modelos interpretativos que nos sirvan para describir, predecir, explicar e intervenir en los fenómenos de acuerdo con lo que sabemos y las pruebas disponibles y que puedan transferirse a otros contextos.
        Por otro lado, las ciencias sociales tienen como objetivo obtener conocimiento científico de los hechos sociales. El procedimiento abarca una serie de procedimientos de recogida de datos, cuya naturaleza condiciona también los métodos de análisis. La investigación social permite obtener nuevos conocimientos para diagnosticar necesidades y problemas a los efectos de aplicar los conocimientos con finalidades prácticas de todos los tiempos. Se emplean la observación y la experimentación comunes en otras ciencias, pero gozan de mayor extensión, otros más específicos como son las encuestas, la documentación , el análisis estadístico de datos secundarios y los métodos cualitativos.`,
        "url": "./src/assets/img/ciencia.webp",
    },
    {
        "title": "Technology",
        "titleEs": "Tecnología",
        "content": `El pensamiento tecnológico es la habilidad que tiene el hombre para pensar y solucionar un  problema determinado o necesidad teniendo en cuenta el uso de técnicas y procedimientos propios  de la tecnología.   
        Este tipo de pensamiento es importante  por la  incidencia en la transformación y  desarrollo de la vida y mundo del hombre.  Las características o  elementos  importantes para este pensamiento son la imaginación, creatividad, lógica,  reflexión, análisis y experimentación. Metodológicamente, pensar tecnológicamente se resume en la capacidad de ver en cualquier tema o área la posibilidad de usar, a través del conocimiento o pensamiento, las herramientas y las técnicas propias de las nuevas tecnologías`,
        "url": "./src/assets/img/tec.webp",
    },
    {
        "title": "Engineering",
        "titleEs": "Ingeniería",
        "content": `La creación de soluciones funcionales.
        Aquí predomina el pensamiento ingenieril y el diseño que difiere del pensamiento científico por su capacidad para realizar de forma inmediata innovaciones positivas para sus fines pero son soluciones reales cuyas aplicaciones se basan en fundamentos científicos. La metodología sería de definición de objetos, plantear soluciones, probarlas a base de prototipos  rápidos.`,
        "url": "./src/assets/img/inge.webp",
    },
    {
        "title": "Art",
        "titleEs": "Arte",
        "content": `El pensamiento artístico, saber relacionar formas e ideas utilizando los recursos estéticos, conocer los medios , las técnicas y los materiales específicos del arte, atenderán a la sensibilidad a partir de experiencias artísticas. Desarrollarán nuevos modos de comunicación. 
        El pensamiento artístico es flexible porque en el proceso se van reformulando metas y es sensible cuando se experimentan sensaciones, emociones y sentimientos, el proceso activa los sentidos en los fenómenos naturales, socioculturales y artísticos. Agregar pintura, cinta adhesiva, pegamento, una canción o un sonido no hace que en un proyecto STEAM se haya integrado el arte . Al contrario, eso disminuye el aprendizaje profundo basado en los procesos que son inherentes a las artes. 
        La A se ha introducido en las propuestas stem atendiendo a dos razones, por una parte  para el fomento del pensamiento creativo e innovador que hace posible ideas revolucionarias y por otra parte,  porque se considera que el arte y el diseño pueden hacer que las disciplinas STEM sean más accesibles para representarlas en un contexto aplicado: cuando los alumnos diseñan soluciones a problemas (junto a la ingeniería) cuando programan (junto a tecnologías) o cuando presentan los resultados de sus investigaciones ( junto a la ciencia). Introducir el arte puede permitir superar el pensamiento  de que el arte no tiene lógica ni ciencia y que la ciencia no es creativa.`,
        "url": "./src/assets/img/art.webp",
    },
    {
        "title": "Mathematics",
        "titleEs": "Matemáticas",
        "content": `Pensar matemáticamente significa analizar y evaluar por qué los conceptos matemáticos, las prácticas y los procesos se utilizan para abordar problemas de matemáticas y crear nuevas ideas, procedimientos y maneras de pensar sobre matemáticas. El pensamiento matemático se complementa con el pensamiento lógico(las matemáticas no son las únicas que desarrollan el pensamiento lógico), es el proceso de llevar las cosas de manera precisa a sus esencias numéricas, estructurales o lógicas, y de analizar los patrones subyacentes.`,
        "url": "./src/assets/img/mate.webp",
    },
]
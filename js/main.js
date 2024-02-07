'use strict';

// elementos
let d = document;
let toggleButton = d.querySelector(".toggle-button");
let navbarLinks = d.querySelector(".navbar-links");
let navbarLogo = d.querySelector(".navbarlogo");
let parentDivLogo = navbarLogo.parentNode;
let homeView;
let inicioNavBtn = d.querySelector(".inicioNavBtn");
let productosNavBtn = d.querySelector(".productosNavBtn");
let categoriasNavBtn = d.querySelector(".categoriasNavBtn");
let main;
let nav = d.querySelector("nav");
let currentView = 'none';
let footer = d.querySelector("footer");
let popUpActive = false;

// array de libros
let libros = [
    {
    id: 1,
    nombre: 'El señor de los anillos',
	autor: 'J. R. R. Tolkien',
    categoria: 'Fantasía',
    descripcion: ['El Señor de los Anillos (título original en inglés: The Lord of the Rings) es una novela de fantasía épica escrita por el filólogo y escritor británico J. R. R. Tolkien.    Su historia se desarrolla en la Tercera Edad del Sol de la Tierra Media, un lugar ficticio poblado por hombres y otras razas antropomorfas, como los hobbits, los elfos o los enanos, así como por muchas otras criaturas reales y fantásticas.'],
    precio: 18,
    editorial: 'Tirant Lo Blanch',
    publicacion: '29 de julio de 1954',
	idioma: 'Español',
	tapa: 'Tapa dura',
	paginas: 1392,
    imagen: ['libro1.jpg', 'libro1-dorso.jpg'],
	resumen: ['La novela narra el viaje del protagonista principal, Frodo Bolsón, hobbit de la Comarca, para destruir el Anillo Único y la consiguiente guerra que provocará el enemigo para recuperarlo, ya que es la principal fuente de poder de su creador, el señor oscuro Sauron. J. R. R. Tolkien planeó El Señor de los Anillos como una secuela de su anterior novela El hobbit, pero terminó por convertirse en una historia de mucho más alcance y extensión que, escrita por etapas entre 1937 y 1949, se publicó por primera vez en el Reino Unido entre 1954 y 1955 en tres volúmenes. Desde entonces ha sido reimpresa en numerosas ocasiones y traducida a muchos idiomas,​ convirtiéndose en una de las obras más populares de la literatura del siglo XX.​ Además, ha sido adaptada en varias ocasiones a la radio, al teatro, al cine y la televisión.'],
    sobreautor: ['J. R. R. Tolkien o JRRT, fue un escritor, poeta, filólogo, lingüista y profesor universitario británico, nacido en el Estado Libre de Orange (hoy parte de Sudáfrica). Conocido principalmente por ser el autor de El hobbit y El Señor de los Anillos. De 1925 a 1945, Tolkien ocupó la cátedra Rawlinson y Bosworth en la Universidad de Oxford, enseñando anglosajón y, de 1945 a 1959, fue profesor de Lengua y Literatura inglesa en Merton. Era amigo cercano del también escritor C. S. Lewis y ambos eran miembros de un informal grupo de debate literario conocido como los Inklings. Tolkien fue nombrado Comendador de la Orden del Imperio Británico por la reina Isabel II el 28 de marzo de 1972.​'],
    cantidad: 0,
    },
    {
    id: 2,
    nombre: '1984',
	autor: 'George Orwell',
    categoria: 'Ficción',
    descripcion: ['1984 (en su versión original en inglés: Nineteen Eighty-Four) es una novela política de ficción distópica, escrita por George Orwell entre 1947 y 1948 y publicada el 8 de junio de 1949. La novela popularizó los conceptos del omnipresente y vigilante Gran Hermano o Hermano Mayor, de la notoria habitación 101, de la ubicua policía del Pensamiento y de la neolengua.'],
    precio: 12,
    editorial: 'Debolsillo',
    publicacion: '8 de junio de 1949',
	idioma: 'Español',
	tapa: 'Tapa blanda',
	paginas: 326,
    imagen: ['libro2.jpg', 'libro2-dorso.jpg'],
	resumen: ['Los miembros "externos" constituyen la burocracia del aparato estatal (de ahí la necesidad de la estricta vigilancia), viven sometidos a un control asfixiante y a una propaganda alienante que los desmoraliza y les impide pensar críticamente. El estado suprime todo derecho y condena a una existencia poco más que miserable, con riesgo de perder la vida o sufrir vejámenes espantosos, a aquellos que no demostrasen suficiente fidelidad y adhesión a la causa nacional. Para ello se organizan numerosas manifestaciones, donde se requiere la participación activa de los miembros, gritando las consignas favorables al partido, vociferando contra los supuestos traidores y dando rienda suelta al más desaforado fanatismo.'],
    sobreautor: ['Eric Arthur Blair (Motihari, Raj Británico, 25 de junio de 1903-Londres, Reino Unido, 21 de enero de 1950), conocido por su seudónimo de George Orwell, fue un novelista, periodista, ensayista y crítico británico nacido en la India, autor entre otras obras de las novelas distópicas Rebelión en la granja (1945) y 1984 (1949). Su obra lleva la marca de las experiencias autobiográficas vividas por el autor en tres etapas de su vida: su posición en contra del imperialismo británico que lo llevó al compromiso como representante de las fuerzas del orden colonial en Birmania durante su juventud.'],
    cantidad: 0,
    },
    {
    id: 3,
    nombre: 'Pasaje al misterio',
    autor: 'Francisco Renedo',
    categoria: 'Misterio',
    descripcion: ['Pasaje al misterio es un libro de viajes hacia el enigma y lo insólito. Entre sus páginas podemos encontrar extraños objetos voladores que atemorizaron a sus observadores, personas desaparecidas en extrañas circunstancias, pueblos que sufrieron terribles maldiciones, o apariciones y milagros que unos catalogan de divinos y otros de demoníacos.'],
    precio: 10,
    editorial: 'Luciérnaga',
    publicacion: '31 de Mayo de 2018',
    idioma: 'Español',
    tapa: 'Tapa dura',
    paginas: 320,
    imagen: ['libro3.jpg', 'libro3-dorso.jpg'],
    resumen: ['En "Pasaje al misterio" hace un recorrido por España, deteniéndose en los lugares en los que se han producido hechos "misteriosos", desde avistamientos de ovnis, desapariciones o leyendas de brujas. Lugares casi siempre remotos, pertenecientes al mundo rural, en los que perduran antiguas tradiciones y leyendas que el autor ha ido recopilando in situ, trasladándose a los lugares de los que habla y entrevistándose con los propios protagonistas y testigos.'],
    sobreautor: ['Fran Renedo Carrandi nació en Torrelavega, Cantabria. Escritor, conferenciante y divulgador de la cultura cántabra colabora en diversos medios de comunicación como el periódico La Voz de Cantabria, la revista Más Allá, Año Cero o Enigmas. Es autor de varios libros, entre ellos Guía de la Cantabria Mágica (Luciérnaga, 2017). Además, ha obtenido la Mención de Honor en la XXIII edición del Premio de Investigación “Cabuérniga” 2015 sobre Etnografía y Culturas Rurales y Marineras, por su obra “Tres Ejemplos de superstición en Cantabria: Brujería, Noche de San Juan y Costumbres Funerarias de los Montañeses”.'],
    cantidad: 0,
    },
    {
    id: 4,
    nombre: 'Quinta estación',
    autor: 'N.K. Jemisin',
    categoria: 'Ficción',
    descripcion: ['La quinta estación es la primera novela de «La Tierra Fragmentada», serie que mezcla fantasía y ciencia ficción, y que ha hecho merecedora a su autora de dos Premios Hugo a la mejor novela consecutivos: 2016 por la presente y 2017 por El portal de los obeliscos (La Tierra Fragmentada).'],
    precio: 13,
    editorial: 'Nova',
    publicacion: '15 de Marzo de 2017',
    idioma: 'Español',
    tapa: 'Tapa blanda',
    paginas: 444,
    imagen: ['libro4.jpg', 'libro4-dorso.jpg'],
    resumen: ['La autora estadounidense nos traslada a un fantástico mundo formado por un único y enorme continente conocido como La Quietud, un lugar ciertamente peligroso e inestable en el que los terremotos y demás desastres relacionados con la tectónica de placas están a la orden del día. De hecho cada equis años tiene lugar lo que se conoce como la quinta estación, fenómeno en que estos desastres naturales ponen en jaque al planeta entero, amenazándolo con su total destrucción. Para luchar contra la implacable fuerza de la naturaleza existen los orogenes, humanos que tienen el poder de controlar los fenómenos sísmicos, la tierra y el aire.'],
    sobreautor: ['N.K. Jemisin (Iowa, 1972) es una escritora que cultiva con éxito los géneros fantástico y de ciencia ficción, logrando una interesante mezcla de ambos que, junto a la creación de nuevos y fascinantes mundos, conforma su característico sello personal. Su primera novela, Los cien mil reinos, fue nominada a los prestigiosos premios Nébula y Hugo en 2011. '],
    cantidad: 0,
    },
    {
    id: 5,
    nombre: 'Reino de ladrones',
    autor: 'Leigh Bardugo',
    categoria: 'Fantasía',
    descripcion: ['Mientras poderosas fuerzas de todo el mundo llegan a Ketterdam para desentrañar el secreto de la peligrosa droga conocida como jurda parem, viejos rivales y nuevos enemigos emergen para desafiar el ingenio de Kaz y poner a prueba las frágiles lealtades del equipo.'],
    precio: 14,
    editorial: 'Hidra',
    publicacion: '20 de Septiembre de 2016',
    idioma: 'Español',
    tapa: 'Tapa dura',
    paginas: 546,
    imagen: ['libro5.jpg', 'libro5-dorso.jpg'],
    resumen: ['Kaz Brekker y los suyos han conseguido llevar a cabo un golpe legendario al que ni ellos mismos pensaban sobrevivir. Pero en lugar de repartirse una suculenta recompensa, a su regreso se ven obligados a luchar de nuevo por sus vidas. Traicionados y con un miembro menos, los cuervos andan escasos de recursos, aliados y esperanza. A medida que poderosas fuerzas llegadas de todo el mundo se dan cita en Ketterdam para luchar por el control de la peligrosa jurda parem, antiguos rivales y nuevos enemigos emergen para desafiar a Kaz y para poner a prueba las frágiles lealtades del equipo. '],
    sobreautor: ['Leigh Bardugo nació en Jerusalén, Israel. Se graduó en la Universidad de Yale. Antes de convertirse en autora, trabajó en publicidad, periodismo y, más recientemente, como maquilladora y artista de efectos especiales en Hollywood. Es la autora de La trilogía Grisha y la serie Seis de Cuervos. El segundo libro de la serie Six of Crows, Crooked Kingdom, se convirtió en un éxito de ventas del New York Times en 2016.'],
    cantidad: 0,
    },
    {
    id: 6,
    nombre: 'El sueño eterno',
    autor: 'Raymond Chandler',
    categoria: 'Misterio',
    descripcion: ['The Big Sleep (en español: El sueño eterno) es una novela negra publicada en el año 1939 por el autor estadounidense Raymond Chandler. Con esta novela irrumpía Chandler en el ámbito de la novela policíaca, presentando además a su más reconocido personaje: el detective Philip Marlowe.'],
    precio: 11,
    editorial: 'Alfred A. Knopf',
    publicacion: '7 de Julio de 1939',
    idioma: 'Español',
    tapa: 'Tapa blanda',
    paginas: 236,
    imagen: ['libro6.jpg', 'libro6-dorso.jpg'],
    resumen: ['El famoso detective Philip Marlowe es contratado por un militar millonario para investigar la inesperada desaparición de su hombre de confianza. Al aceptar el caso, Marlowe se ve envuelto en una trama de asesinatos, chantajistas y otros asuntos turbios que le enredan en una verdadera maraña.'],
    sobreautor: ['Raymond Thornton Chandler (Chicago, 23 de julio de 1888 - La Jolla, California, 26 de marzo de 1959) fue un escritor estadounidense de novela negra. Su padre, un ingeniero civil estadounidense alcohólico y maltratador, abandonó a su familia y se divorció de su mujer, vivía con sus tíos maternos, y ella llevó a su hijo a Inglaterra para que recibiese una sólida formación literaria.'],
    cantidad: 0,
    },
    {
    id: 7,
    nombre: 'El resplandor',
	autor: 'Stephen King',
    categoria: 'Terror',
    descripcion: ['El resplandor (título original The Shining) es la tercera novela de terror del escritor estadounidense Stephen King, publicada en 1977. El título se inspiró en la canción de John Lennon Instant Karma!, que contiene la línea «We all shine on...». King quiso en un principio ponerle el título The Shine, pero lo cambió cuando se dio cuenta de que shine era un título muy despectivo para las personas negras.'],
    precio: 20,
    editorial: 'Doubleday',
    publicacion: '28 de Enero de 1977',
	idioma: 'Español',
	tapa: 'Tapa dura',
	paginas: 681,
    imagen: ['libro7.jpg', 'libro7-dorso.jpg'],
	resumen: ['Al escritor Jack Torrance le es ofrecido un empleo como cuidador del hotel Overlook durante el invierno junto a su familia. Este trabajo parece ser una oportunidad perfecta para demostrar que está totalmente curado de su alcoholismo. El hotel está situado en lo alto de las montañas de Colorado y el pueblo más cercano es Sidewinder, aproximadamente a 65 kilómetros del lugar. Los caminos son intransitables por el invierno, por lo que el lugar está prácticamente aislado del mundo, especialmente durante las fuertes tormentas. A pesar de todos los inconvenientes del trabajo, los problemas económicos y personales de la familia de Jack le obligan a aceptarlo, sin saber nada de los terribles acontecimientos ocurridos en el hotel Overlook en el pasado hasta el mismo día de la entrevista.'],
    sobreautor: ['Stephen Edwin King (pronunciación: /ˈstiːvən ˈɛdwɪn ˈkɪŋ/) (Portland, Maine; 21 de septiembre de 1947), más conocido como Stephen King y ocasionalmente por su pseudónimo Richard Bachman, es un escritor estadounidense de novelas de terror, ficción sobrenatural, misterio, ciencia ficción y literatura fantástica. Sus libros han vendido más de 500 millones de ejemplares, y en su mayoría han sido adaptados al cine y a la televisión. Ha publicado 64 novelas, once colecciones de relatos y novelas cortas, y siete libros de no ficción, además de un guion cinematográfico, entre otras obras.'],
    cantidad: 0,
    },
    {
    id: 8,
    nombre: 'Berserk',
	autor: 'Kentaro Miura',
    categoria: 'Comics',
    descripcion: ['Berserk (ベルセルク?) es un manga creado por Kentaro Miura con un estilo épico fantástico y de fantasía oscura. El manga comenzó a publicarse en 1989 en la extinta revista  Monthly Animal House, hasta que fue reemplazada en 1992 por la revista quincenal Young Animal, donde fue publicado irregularmente hasta el 2021.'],
    precio: 10,
    editorial: 'Hakusensha',
    publicacion: '13 de Agosto de 1989',
	idioma: 'Español',
	tapa: 'Tapa dura',
	paginas: 220,
    imagen: ['libro8.jpg', 'libro8-dorso.jpg'],
	resumen: ['La historia está ambientada en una época con tintes de la Europa medieval y renacentista, en la cual se cuenta la vida de Guts (cuyo nombre fue traducido como Gatsu en las primeras ediciones en castellano), un mercenario huérfano que acompañado del elfo Puck, caza seres demoníacos llamados apóstoles. La historia se divide en dos partes: la primera (que va del volumen 4 al volumen 13) relata su niñez y juventud hasta cómo conoce a Griffith, líder de un grupo mercenario llamado la «Banda del Halcón». La segunda parte (volúmenes del 1 al 3 y 14 al 41, publicándose) muestra su historia tras el fatídico Eclipse, la caza de los apóstoles y su búsqueda de venganza contra Griffith.'],
    sobreautor: ['Kentarō Miura (三浦 建太郎 Miura Kentarō?, 11 de julio de 1966 - 6 de mayo de 2021) fue un mangaka (dibujante de mangas) japonés. Mayormente conocido por su popular manga de fantasía oscura, Berserk. Nació en Ciudad Chiba el 11 de julio de 1966. Era zurdo. En 1976, a la edad de 10 años, Miura hizo su primer manga, titulado Miuranger, publicado por sus compañeros de clase en la escuela. El manga llegó a los 40 tomos. En 1977, Miura creó su segundo manga llamado Ken e no michi (剣への道 El camino a la espada), usando por primera vez tinta india.'],
    cantidad: 0,
    },
    {
    id: 9,
    nombre: 'El bazar de los malos sueños',
    autor: 'Stephen King',
    categoria: 'Terror',
    descripcion: ['El bazar de los malos sueños es una colección de relatos cortos de Stephen King, publicada el 3 de noviembre de 2015. Es la sexta colección de historias cortas de King. Una de las historias, "Obituarios", ganó el Premio Edgar en el 2016 por mejor relato corto, y la colección completa ganó el Premio Shirley Jackson a la mejor colección.'],
    precio: 15,
    editorial: 'Scribner',
    publicacion: '3 de Enero de 2015',
    idioma: 'Español',
    tapa: 'Tapa blanda',
    paginas: 495,
    imagen: ['libro9.jpg', 'libro9-dorso.jpg'],
    resumen: ['Stephen King nos presenta en El bazar de los malos sueños una excepcional selección de relatos, algunos nuevos y otros revisados en profundidad. Cada uno viene precedido de su propia introducción, donde se habla sobre sus orígenes y los motivos que llevaron al autor a escribirlo, incluyendo aspectos autobiográficos. Aunque han pasado ya treinta y cinco años desde que escribió su primera colección, Stephen King sigue deslumbrándonos con su maestría en el género. En esta ocasión trata temas como la moralidad, la vida después de la muerte, la culpa y lo que corregiríamos del pasado si pudiésemos ver el futuro. Magníficos, inquietantes, absorbentes, estos cuentos suponen uno de los más preciados regalos de King a sus lectores.'],
    sobreautor: ['Stephen Edwin King (pronunciación: /ˈstiːvən ˈɛdwɪn ˈkɪŋ/) (Portland, Maine; 21 de septiembre de 1947), más conocido como Stephen King y ocasionalmente por su pseudónimo Richard Bachman, es un escritor estadounidense de novelas de terror, ficción sobrenatural, misterio, ciencia ficción y literatura fantástica. Sus libros han vendido más de 500 millones de ejemplares, y en su mayoría han sido adaptados al cine y a la televisión. Ha publicado 64 novelas, once colecciones de relatos y novelas cortas, y siete libros de no ficción, además de un guion cinematográfico, entre otras obras.'],
    cantidad: 0,
    },
    {
    id: 10,
    nombre: "Lo que el viento se llevó",
    autor: "Margaret Mitchell",
    categoria: "Romance",
    descripcion: ["Lo que el viento se llevó (en inglés: Gone with the Wind) es una novela escrita por Margaret Mitchell y uno de los libros más vendidos de la historia, un clásico de la literatura de los Estados Unidos y es, junto a su adaptación al cine, uno de los mayores iconos o mitos de la cultura universal."],
    precio: 17,
    editorial: "Macmillan Publishers",
    publicacion: "30 de Junio de 1936",
    idioma: "Español",
    tapa: "Tapa dura",
    paginas: 1037,
    imagen: ["libro10.jpg", 'libro10-dorso.jpg'],
    resumen: ["Georgia, 1861. En la elegante mansión sureña de Tara, vive Scarlett O'Hara, la joven más bella, caprichosa y egoísta de la región. Ella suspira por el amor de Ashley, pero él está prometido con su prima, la dulce y bondadosa Melanie. En la última fiesta antes del estallido de la Guerra, Scarlett conoce al cínico y apuesto Rhett Butler, un vividor arrogante y aventurero, que no tiene ninguna intención de participar en la contienda. Lo único que él desea es hacerse rico y conquistar a Scarlett."],
    sobreautor: ["La autora, Margaret Mitchell, era una periodista de Atlanta, en el Estado de Georgia (una de las primeras mujeres que tuvo una columna en un diario importante del Sur de los Estados Unidos). Mientras guardaba reposo motivado por una fractura de tobillo, comenzó a escribir lo que más tarde sería la novela Lo que el viento se llevó estimulada por su segundo marido, John Marsh, que le aconsejó que escribiera un libro propio después de que hubiera leído todos los libros de historia que él le trajo de la biblioteca pública."],
    cantidad: 0
    },
    {
    id: 11,
    nombre: "Vagabond",
    autor: "Takehiko Inoue",
    categoria: "Comics",
    descripcion: ["Vagabond (バガボンド 'Vagabundo'?) es una serie de manga épica de artes marciales escrita y dibujada por Takehiko Inoue. Relata la historia del guerrero más famoso de Japón, Musashi Miyamoto. El manga comenzó en 1998 siendo serializado en la revista semanal Shukan Moningu y es publicado por Kōdansha en Japón."],
    precio: 10,
    editorial: "Kōdansha",
    publicacion: "14 de Abril de 1998",
    idioma: "Español",
    tapa: "Tapa dura",
    paginas: 242,
    imagen: ["libro11.jpg", 'libro11-dorso.jpg'],
    resumen: ["Miyamoto Musashi: Guerrero samurái de espíritu indomable. Conocido al comienzo por su nombre real de Shinmen Takezo, su estilo de combate se basa al principio en dejarse llevar por su instinto y en su desmedida fuerza natural, que poco a poco pule con los encuentros que libra. después de su persona de Takezo es ejecutado por el monje budista Takuan, quien le da la identidad de Musashi Miyamoto. Sasaki Kojirō: el legendario archirrival de Miyamoto Musashi. Se cree que Kojiro haya estudiado el estilo Chujo-ryu bajo la instrucción o bien de Toda Seigen o de Kanemaki Jisai. Kojiro era célebre por su técnica Tsubame-Gaeshi, o “Corte Golondrina”, inspirada por el movimiento de una golondrina al volar."],
    sobreautor: ["Durante su vida estudiantil practicó el baloncesto, que luego se convertiría en uno de los temas principales de su obra. Su obra se caracteriza por la gran claridad y realismo de su dibujo, que refleja de modo fiel las proporciones del cuerpo. Su primer éxito como autor fue la conquista del prestigioso Tezuka Show, gracias a su obra Kaede Purple, centrada en el baloncesto. También trabajó por unos meses como asistente del dibujante Tsukasa Hōjō, autor de City Hunter."],
    cantidad: 0
    },
    {
    id: 12,
    nombre: "Cincuenta sombras de Grey",
    autor: "E. L. James",
    categoria: "Romance",
    descripcion: ["Cincuenta sombras de Grey (en inglés: Fifty Shades of Grey) es una novela erótica de la autora británica E. L. James del año 2011. Narrada en gran medida en Seattle, es la primera entrega de una hexalogía que describe la relación entre una recién graduada de la universidad, Anastasia Steele, y el joven magnate de negocios Christian Grey."
    ],
    precio: 16,
    editorial: "Vintage Books",
    publicacion: "21 de Diciembre de 2011",
    idioma: "Español",
    tapa: "Tapa blanda",
    paginas: 540,
    imagen: ["libro12.jpg", 'libro12-dorso.jpg'],
    resumen: ["Cincuenta sombras de Grey narra la historia de Anastasia «Ana» Steele, una joven estudiante, que cursa la carrera de Literatura en la Universidad de Washington, y que vive con su mejor amiga, Katherine «Kate» Kavanagh, quien escribe para el periódico estudiantil de su universidad. Debido a un resfriado, Katherine persuade a Ana para que tome su lugar en la entrevista que le haría a Christian Grey, un joven empresario de veintisiete años, apuesto y exitoso. Ana se ve atraída inmediatamente por él, pero también lo encuentra intimidante."],
    sobreautor: ["Erika Leonard Mitchell, más conocida por el seudónimo de E. L. James (Londres, Inglaterra, 7 de marzo de 1963), es una escritora británica de origen chileno-escocés, famosa por la trilogía de libros, Cincuenta sombras de Grey. En 2012 la revista Time la incluyó en su lista anual de Las 100 personas más influyentes del mundo."],
    cantidad: 0
    }
];

let ulLibros = d.createElement("ul"); 
ulLibros.classList.add("listadelibros");

// carrito inicializado en 0
let totalCarrito = 0;
let totalProductosCarrito = 0;
let carrito = [];

// local Storage + carrito
buscarCarritoEnLocalStorage();
function buscarCarritoEnLocalStorage(){
    let carritoLocalStorage = JSON.parse(localStorage.getItem("carrito"));
    if(carritoLocalStorage){
        carrito = carritoLocalStorage;
    } else {
        actualizarCarritoEnLocalStorage();
    }
}

function actualizarCarritoEnLocalStorage(){
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

// elementos
let divIconoCarrito = d.createElement("div");
divIconoCarrito.classList.add("iconocarrito");
let pIconoCarrito = d.createElement("p");
let iconoCarrito = d.createElement("i");
iconoCarrito.classList.add("fas", "fa-shopping-cart");
let spanCantCarrito = d.createElement("span");
spanCantCarrito.innerText = `${totalProductosCarrito}`;
pIconoCarrito.appendChild(iconoCarrito);
pIconoCarrito.appendChild(spanCantCarrito);
divIconoCarrito.appendChild(pIconoCarrito);
let pCartAmount = d.createElement("p");
pCartAmount.innerText = `$${totalCarrito}.00`;
let cartContainer = d.querySelector(".cart");
let botonCerrarCart = d.querySelector(".botoncerrar");

botonCerrarCart.addEventListener("click", () => {
    cartContainer.classList.remove("active");
})


// mostrar el icono y gestionar su posición según el ancho 
function mostrarIconoCarrito(){ // medidas del carrito
    if(window.innerWidth < 640){
        parentDivLogo.appendChild(divIconoCarrito);
        let montoCarrito = d.querySelector(".iconocarrito p:nth-child(2)");
        if(montoCarrito){
            montoCarrito.remove();
        }
    } else if (window.innerWidth >= 640 && window.innerWidth < 850){
        let divIconoCarrito2 = d.querySelector(".navbar > div:first-child .iconocarrito");
        if(divIconoCarrito2){
            divIconoCarrito2.appendChild(pCartAmount);
        } 
        else { // Si no existe el contenedor, agrega el monto al contenedor principal
            divIconoCarrito.appendChild(pCartAmount);
            parentDivLogo.appendChild(divIconoCarrito);
        }
    } else if (window.innerWidth >= 850){
        let divIconoCarrito3 = d.querySelector(".navbar > div:first-child .iconocarrito");
        if(divIconoCarrito3){
            divIconoCarrito3.remove();
        } // Agregar el monto del carrito al contenedor principal y moverlo a la barra de navegación
        divIconoCarrito.appendChild(pCartAmount);
        navbarLinks.appendChild(divIconoCarrito);
    }
    
    // mostrar el carrito al hacer clic
    divIconoCarrito.addEventListener("click", () => {
        cartContainer.classList.add("active");
        mostrarCarrito();
    })
    actualizarDatosCarrito();
}

// Llamar a la función para mostrar el icono del carrito cuando se carga la página
mostrarIconoCarrito();
window.addEventListener("resize", mostrarIconoCarrito); // cambia el tamaño de la ventana


toggleButton.addEventListener("click", () => {
    // Alternar la clase active al hacer clic en alternar
    navbarLinks.classList.toggle("active");
});

function detectMain() {
    // detectar y eliminar el contenido del elemento main
    main = d.querySelector("main");
    if (main) {
        while (main.firstChild) {
            main.removeChild(main.firstChild);
        }
        return true;
    } else {
        return false;
    }
}

function homeview() {
    if (detectMain()) {
        // Si hay contenido en 'main', eliminarlo
        main.remove();
    }
    homeView = d.querySelector(".homebanner");

    if (!homeView) {
        // Si no existe la vista de inicio, crearla y agregarla al DOM
        let homeContainer = d.createElement("div");
        homeContainer.classList.add("homebanner");
        let homeDiv = d.createElement("div");
        let homeH1 = d.createElement("h1");
        homeH1.innerText = "Bienvenido ";
        let homeH1Span = d.createElement("span");
        homeH1Span.innerText = "Fíjate un objetivo, lee un libro";
        homeH1.appendChild(homeH1Span);
        let homeP = d.createElement("p");
        homeP.innerText = `“Para viajar lejos, no hay nada mejor que un libro”`;
        let homeBtn = d.createElement("a");
        homeBtn.classList.add("btn");
        homeBtn.setAttribute('href', '#');
        homeBtn.innerText = "Ver productos";

        homeBtn.addEventListener("click", () => {
            productsview();
        })

        homeDiv.appendChild(homeH1);
        homeDiv.appendChild(homeP);
        homeDiv.appendChild(homeBtn);
        homeContainer.appendChild(homeDiv);

        nav.insertAdjacentElement("afterend", homeContainer);
        currentView = 'home';
    }
}

function togglehomemain() {
    if (!detectMain()) {
        // Si no hay 'main', crearlo y agregarlo al DOM
        main = d.createElement("main");
        nav.insertAdjacentElement("afterend", main);
        main = d.querySelector("main");
    }
    homeView = d.querySelector(".homebanner");
    if (homeView) {
        // Si hay una vista de inicio, eliminarla
        homeView.remove();
    }
}

function productsview(){
    togglehomemain();
    
    // elementos HTML para la vista 
    let header = d.createElement("header");
    let p = d.createElement("p");
    p.classList.add("breadcrumbs");
    p.innerText = " > Todos los libros";
    let a1 = d.createElement("a");
    a1.setAttribute("href", "#");
    a1.innerText = "Inicio";
    p.prepend(a1);
    
    let h1 = d.createElement("h1");
    let h1Span = d.createElement("span");
    h1Span.innerText = "Explora "
    h1Span.classList.add("h1span");
    h1.prepend(h1Span);

    let h1Span2 = d.createElement("span");
    h1Span2.classList.add("h1span2");
    h1Span2.innerText = "Todos los libros";

    let iconToFilter = d.createElement("i");
    iconToFilter.classList.add("fa-solid", "fa-filter");

    iconToFilter.addEventListener("click", () => {
        categoriesview();
    })

    h1Span2.append(iconToFilter);
    h1.append(h1Span2);

    
    header.appendChild(p);
    header.append(h1);
    
    main.append(header);

    MostrarLibros(libros);
    main.append(ulLibros);
    
     // Agregar eventos para el enlace de inicio y mostrar libros
    a1.addEventListener("click", () => {
        homeview();
    });
    currentView = 'productos';

}

// Función para mostrar la vista de categorías
function categoriesview(){
    togglehomemain();  // Alternar entre 'main' y la vista de inicio

    // elementos HTML para categorías
    let header = d.createElement("header");
    let p = d.createElement("p");
    p.classList.add("breadcrumbs");
    p.innerText = " > Categorías";
    let a1 = d.createElement("a");
    a1.setAttribute("href", "#");
    a1.innerText = "Inicio";
    p.prepend(a1);

    // Restablecer el evento click del enlace "Inicio" para que vaya a la vista de inicio
    a1.addEventListener("click", () => {
        homeview();
    });

    // Crear lista de categorías
    let ul = d.createElement("ul");
    let li1 = d.createElement("li");
    let aLi1 = d.createElement("a");
    aLi1.setAttribute("href", "#");
    aLi1.innerText = "Ficción";
    li1.appendChild(aLi1);
    let li2 = d.createElement("li");
    let aLi2 = d.createElement("a");
    aLi2.setAttribute("href", "#");
    aLi2.innerText = "Misterio";
    li2.appendChild(aLi2);
    let li3 = d.createElement("li");
    let aLi3 = d.createElement("a");
    aLi3.setAttribute("href", "#");
    aLi3.innerText = "Fantasía";
    li3.appendChild(aLi3);
    let li4 = d.createElement("li");
    let aLi4 = d.createElement("a");
    aLi4.setAttribute("href", "#");
    aLi4.innerText = "Terror";
    li4.appendChild(aLi4);
    let li5 = d.createElement("li");
    let aLi5 = d.createElement("a");
    aLi5.setAttribute("href", "#");
    aLi5.innerText = "Comics";
    li5.appendChild(aLi5);
    let li6 = d.createElement("li");
    let aLi6 = d.createElement("a");
    aLi6.setAttribute("href", "#");
    aLi6.innerText = "Romance";
    li6.appendChild(aLi6);

    ul.append(li1);
    ul.append(li2);
    ul.append(li3);
    ul.append(li4);
    ul.append(li5);
    ul.append(li6);

    // otros
    let h1 = d.createElement("h1");
    h1.innerText = "Selecciona una categoría para filtrar*";
    let p2 = d.createElement("p");
    p2.innerText = "*Mostrando todos los libros";

    header.appendChild(p);
    header.append(ul);
    header.append(h1);
    header.append(p2);
    
    main.append(header);

    MostrarLibros(libros);
    main.append(ulLibros);

    currentView = 'categorias';

    
    // Crear el filtro de categorías
    ul.addEventListener("click", (e) => {
        if (e.target.tagName === "A"){
            // Obtener la categoría seleccionada
            let categoriaSeleccionada = e.target.innerText;
    
            // Mostrar libros según la categoría seleccionada
            mostrarLibrosPorCategoria(categoriaSeleccionada);
    
            // Evento al hacer clic en el enlace de inicio en las migas de pan
            let a1 = d.querySelector(".breadcrumbs a:first-child");
            a1.addEventListener("click", () => {
                homeview();
            });
    
            // Mostrar el pop-up cada vez que se filtra por categoría
            mostrarPopUpDespuesDe(2);
        }
    })
}

// click en botones de navegación
inicioNavBtn.addEventListener("click", () => {
    hideNavbarLinks()
    homeview();
});
productosNavBtn.addEventListener("click", () => {
    hideNavbarLinks()
    productsview();
});
categoriasNavBtn.addEventListener("click", () => {
    hideNavbarLinks()
    categoriesview();
});

// ocultar la barra de navegación
function hideNavbarLinks(){
    navbarLinks.classList.remove("active");
}

// mostrar la lista de libros en la interfaz
const MostrarLibros = (arraydelibros) => {
    ulLibros.innerHTML = "";
    arraydelibros.forEach(function(libro){

        // elementos HTML
        let liPreview = d.createElement("li");
        let imgPreview = d.createElement("img");
        imgPreview.setAttribute("src", `assets/img/libros/${libro.imagen[0]}`);
        imgPreview.setAttribute("alt", `Tapa del libro ${libro.nombre}`);

        let divDetaailsPreview = d.createElement("div");
        let ulDetailsPreview = d.createElement("ul");
        let liTitlePreview = d.createElement("li");
        let h2TitlePreview = d.createElement("h2");
        h2TitlePreview.innerText = libro.nombre;
        let liAutCatPreview = d.createElement("li");
        liAutCatPreview.innerText = ", "
        let spanAutorPreview = d.createElement("span");
        spanAutorPreview.innerText = libro.autor;
        let spanCatPreview = d.createElement("span");
        spanCatPreview.innerText = libro.categoria;
        let liPricePreview = d.createElement("li");
        liPricePreview.innerText = `$${libro.precio}.00 usd`;
        let liBtnPreview = d.createElement("li");
        let aBtnPreview = d.createElement("a");
        aBtnPreview.setAttribute("href", "#");
        aBtnPreview.classList.add("btn");

        aBtnPreview.innerHTML = "Añadir al carrito";

        liPreview.append(imgPreview);
        liTitlePreview.append(h2TitlePreview);
        liAutCatPreview.prepend(spanAutorPreview);
        liAutCatPreview.append(spanCatPreview);

        ulDetailsPreview.append(liTitlePreview);
        ulDetailsPreview.append(liAutCatPreview);
        ulDetailsPreview.append(liPricePreview);
        liBtnPreview.append(aBtnPreview);
        ulDetailsPreview.append(liBtnPreview);

        
        divDetaailsPreview.append(ulDetailsPreview);
        liPreview.append(divDetaailsPreview);

        
        ulLibros.append(liPreview);

        // mostrar detalles del libro y animar el botón carrito
        liPreview.addEventListener("click", () => {
            showmodal(libro);
        })

        aBtnPreview.addEventListener("click", (e) => {
            animarBotonAddToCart(aBtnPreview, e, libro);
        })

    })
}

// mostrar libros filtrados por categoría
function mostrarLibrosPorCategoria(categoriaSeleccionada){

    let breadcrumbsCategoria;
    // Filtrar libros por la categoría seleccionada
    let librosFiltrados = libros.filter(libro => libro.categoria === categoriaSeleccionada);

    // mostrar los libros filtrados
    MostrarLibros(librosFiltrados);

    // elementos
    let h1 = d.querySelector("header h1");
    let p2 = h1.nextElementSibling;
    h1.innerText = `Libros de "${categoriaSeleccionada}"`;
    p2.innerText = `${librosFiltrados.length} resultados encontrados`;
    let p = d.querySelector(".breadcrumbs");
    let a1 = d.createElement("a");
    a1.setAttribute("href", "#");
    a1.innerText = "Inicio";
    p.innerHTML = "";
    p.append(a1);
    let a2 = d.createElement("a");
    a2.setAttribute("href", "#");
    a2.classList.add("breadcrumbsCategoria");
    a2.innerText = "Categorías";
    p.innerHTML += " > ";
    p.append(a2);
    p.innerHTML += ` > ${categoriaSeleccionada}`;
    breadcrumbsCategoria = d.querySelector(".breadcrumbsCategoria");

    // evento al enlace de categorías en las migas
    breadcrumbsCategoria.addEventListener("click", () => {
        categoriesview();
    })

}

// Función para manejar el funcionamiento de las pestañas en la modal
function modalTabs(){
    // elementos de pestañas
    let tabsDetalles = d.querySelectorAll(".tabs li");
    let tabsWrapDetalles = d.querySelectorAll(".tab_wrap");

    tabsDetalles.forEach(function(tab, indice){
        tab.addEventListener("click", function(){
            // Manejar el cambio de pestañas 
            tabsDetalles.forEach(function(tab){
                tab.classList.remove("active");
            })
            tab.classList.add("active");

            tabsWrapDetalles.forEach(function(content, indice_content){
                if(indice_content == indice){
                    content.style.display = "block";
                } else {
                    content.style.display = "none";
                }
            })
        })
    });
}

// Funcionamiento de la galería de imágenes del producto
function galeriaproducto(){

    let imgPreview = d.querySelector(".galeria > img");
    let miniaturas = d.querySelectorAll(".miniaturasGaleria img");
    let currentIndex = 0;

    //cambiar el src del preview
    function changePreviewImg(index){
        imgPreview.src = miniaturas[index].src;
        miniaturas.forEach(miniatura => miniatura.classList.remove("miniaturaActual"));
        miniaturas[index].classList.add("miniaturaActual");
    }

    //cambiar el src del preview al hacer click en una miniatura
    miniaturas.forEach((miniatura, index) => {
        miniatura.addEventListener("click", () => {
            changePreviewImg(index);
            // currentIndex = index;
        })
    })

    //cambiar el src del preview al usar las flechas direccionales del teclado
    d.addEventListener("keydown", (e) => {
        if (miniaturas.length > 1){
            if (e.key === "ArrowLeft"){
                currentIndex = (currentIndex - 1 + miniaturas.length) % miniaturas.length;
                changePreviewImg(currentIndex);
            } else if (e.key === "ArrowRight"){
                currentIndex = (currentIndex + 1) % miniaturas.length;
                changePreviewImg(currentIndex);
            }

        }
    });

    
}

//function to show the modal with the details of the book
function showmodal(book){

    //create the modal background
    let modalBackground = d.createElement("div");
    modalBackground.setAttribute("id", "modalbackground");
    let modal = d.createElement("div");
    modal.setAttribute("id", "modal");

    let primerParteModal = d.createElement("div");

    //add the product img
    let divGaleria = d.createElement("div");
    divGaleria.classList.add("galeria");
    let imgProducto = d.createElement("img");
    imgProducto.setAttribute("src", `assets/img/libros/${book.imagen[0]}`);
    imgProducto.setAttribute("alt", `Tapa del libro ${book.nombre}`);
    divGaleria.append(imgProducto);
    
    //if the product has more than one img, create a gallery
    if (book.imagen.length > 1){
        let galeriaMiniaturas = d.createElement("div");
        galeriaMiniaturas.classList.add("miniaturasGaleria");

        for (let i = 0; i < book.imagen.length; i++){
            let miniatura = d.createElement("img");
            miniatura.setAttribute("src", `assets/img/libros/${book.imagen[i]}`);
            miniatura.setAttribute("alt", `Tapa del libro ${book.nombre}`);
            galeriaMiniaturas.append(miniatura);
        }

        divGaleria.append(galeriaMiniaturas);
    } 

    //insert the gallery div into the first div of the #modal
    primerParteModal.append(divGaleria);

    //add the product info (second div of the modal)
    let divInfo = d.createElement("div");
    let bookTitle = d.createElement("h3");
    bookTitle.innerText = book.nombre;
    let bookInfoUl = d.createElement("ul");
    let bookInfoLi1 = d.createElement("li");
    bookInfoLi1.innerText = book.autor;
    let bookInfoLi2 = d.createElement("li");
    bookInfoLi2.innerText = `${book.tapa}, ${book.categoria}`;
    let bookInfoLi3 = d.createElement("li");
    bookInfoLi3.innerText = `$${book.precio}.00 usd`;

    bookInfoUl.append(bookInfoLi1);
    bookInfoUl.append(bookInfoLi2);
    bookInfoUl.append(bookInfoLi3);
    
    let btnModal = d.createElement('button');
    btnModal.type = "button";
    btnModal.classList.add("btn", "addtocarrito");
    btnModal.innerHTML = 'Añadir al carrito';

    btnModal.addEventListener("click", (e) => {
        animarBotonAddToCart(btnModal, e, book);
    })


    let divDescription = d.createElement("div");
    let h4Description = d.createElement("h4");
    h4Description.innerText = "Descripción";

    //generar párrafos para la descripción
    generarParrafos(book.descripcion, divDescription);

    divInfo.append(bookTitle);
    divInfo.append(bookInfoUl);
    divInfo.append(btnModal);

    divDescription.prepend(h4Description);
    divInfo.append(divDescription);
    
    //insert the product info into the first div of the #modal
    primerParteModal.append(divInfo);

    //parte 2 del modal (tabs)
    let segundaParteModal = d.createElement("div");
    segundaParteModal.classList.add("wrapper");

    let tabs = d.createElement("ul");
    tabs.classList.add("tabs");
    let tab1 = d.createElement("li");
    tab1.classList.add("active");
    let h4Resumen = d.createElement("h4");
    h4Resumen.innerText = "Resumen";
    let tab2 = d.createElement("li");
    let h4Detalles = d.createElement("h4");
    h4Detalles.innerText = "Detalles";
    let tab3 = d.createElement("li");
    let h4SobreAutor = d.createElement("h4");
    h4SobreAutor.innerText = "Sobre el autor";


    tab1.append(h4Resumen);
    tab2.append(h4Detalles);
    tab3.append(h4SobreAutor);

    tabs.append(tab1);
    tabs.append(tab2);
    tabs.append(tab3);

    //insert the tabs into the wrapper
    segundaParteModal.append(tabs);




    //content of "resumen"
    let tabWrap1 = d.createElement("div");
    tabWrap1.classList.add("tab_wrap");
    tabWrap1.style.display = "block";
    generarParrafos(book.resumen, tabWrap1);

    //content of "detalles"
    let tabWrap2 = d.createElement("div");
    tabWrap2.classList.add("tab_wrap");
    tabWrap2.style.display = "none";

    let ulDetalles = d.createElement("ul");

    let liEditorial = d.createElement("li");
    let spanLiEditorial = d.createElement("span");
    spanLiEditorial.innerText = "Editorial: ";
    liEditorial.append(spanLiEditorial);
    liEditorial.innerHTML += book.editorial;

    let liPublicacion = d.createElement("li");
    let spanLiPublicacion = d.createElement("span");
    spanLiPublicacion.innerText = "Publicación: ";
    liPublicacion.append(spanLiPublicacion);
    liPublicacion.innerHTML += book.publicacion;

    let liIdioma = d.createElement("li");
    let spanLiIdioma = d.createElement("span");
    spanLiIdioma.innerText = "Idioma: ";
    liIdioma.append(spanLiIdioma);
    liIdioma.innerHTML += book.idioma;

    let liTapa = d.createElement("li");
    let spanLiTapa = d.createElement("span");
    spanLiTapa.innerText = "Formato: ";
    liTapa.append(spanLiTapa);
    liTapa.innerHTML += book.tapa;

    let liPaginas = d.createElement("li");
    let spanLiPaginas = d.createElement("span");
    spanLiPaginas.innerText = "Páginas: ";
    liPaginas.append(spanLiPaginas);
    liPaginas.innerHTML += `${book.paginas}pgs`;

    //insert the each detail into the ul
    ulDetalles.append(liEditorial);
    ulDetalles.append(liPublicacion);
    ulDetalles.append(liIdioma);
    ulDetalles.append(liTapa);
    ulDetalles.append(liPaginas);

    //insert the ul into the second wrap
    tabWrap2.append(ulDetalles);

    //content of "sobre el autor"
    let tabWrap3 = d.createElement("div");
    tabWrap3.classList.add("tab_wrap");
    tabWrap3.style.display = "none";

    generarParrafos(book.sobreautor, tabWrap3);

    //create the close button
    let closeBtn = d.createElement('a');
    closeBtn.href = '#';
    let closeBtnIcon = d.createElement("i");
    closeBtnIcon.classList.add("fa-solid", "fa-x");
    closeBtn.append(closeBtnIcon);

    closeBtn.addEventListener("click", () => {
        d.querySelector('#modalbackground').remove();
        return false;
    })

    //insert the content of the tabs into the wrapper
    segundaParteModal.append(tabWrap1);
    segundaParteModal.append(tabWrap2);
    segundaParteModal.append(tabWrap3);


    
    modal.append(primerParteModal);
    modal.append(segundaParteModal);
    modal.append(closeBtn);
    
    modalBackground.append(modal);
    
    //insert the modal after the lista de libros
    ulLibros.insertAdjacentElement("afterend", modalBackground);
    modalTabs();
    galeriaproducto();
};


// generar párrafos a partir de un array de texto
function generarParrafos(array, etiquetapadre){
    array.forEach(function(parrafo){
        let p = d.createElement("p");
        p.innerText = parrafo;
        etiquetapadre.append(p);
    })
}

// mostrar el contenido del carrito 
function mostrarCarrito(){

    // Obtener contenedor del carrito 
    let container = d.querySelector(".cart div:nth-child(2)");
    if (container){
        container.innerHTML = "";
    } else {
        container = d.createElement("div");
        cartContainer.append(container);
    }

    if(carrito.length == 0){ // Mostrar mensaje de carrito vacío
        let emptyCart = d.createElement("div");
        emptyCart.classList.add("emptyCart");
        let emptyImg = d.createElement("img");
        emptyImg.setAttribute("src", "assets/img/carrito.png");
        emptyImg.setAttribute("alt", "Carrito vacío");
        let emptyp = d.createElement("p");
        emptyp.innerText = "Ups, al parecer aún no se ha agregado ningún libro al carrito.";
        let emptyBtn = d.createElement("a");
        emptyBtn.classList.add("btn");
        emptyBtn.setAttribute("href", "#");
        emptyBtn.innerText = "Ver productos";
        emptyBtn.addEventListener("click", () => {
            productsview();
            cartContainer.classList.remove("active");
        })

        emptyCart.append(emptyImg);
        emptyCart.append(emptyp);
        emptyCart.append(emptyBtn);
        container.append(emptyCart);
    } else { // Generar lista de productos en el carrito
        generarListaProductosCarrito(container, "shoppingcart", true, true);
    }
}

// añadir un libro al carrito
function addBookToCart(book){
    // Verifica si el libro está en el carrito
    let bookInCart = carrito.find(libro => libro.id === book.id);
    if(bookInCart){
        bookInCart.cantidad++;
        bookInCart.subtotal = bookInCart.cantidad * book.precio;
    } else {
        carrito.push({
            id: book.id,
            nombre: book.nombre,
            autor: book.autor,
            cantidad: 1,
            precio: book.precio,
            imagen: book.imagen[0],
            subtotal: book.precio,
        })
    }
    mostrarIconoCarrito(); // Actualizar info del carrito
}

actualizarDatosCarrito();

// actualizar los datos del carrito 
function actualizarDatosCarrito(){
    // variables en 0
    totalCarrito = 0;
    totalProductosCarrito = 0;
    
    carrito.forEach(function (libro) {  // Calcular total y cantidad de productos en el carrito
        totalCarrito += libro.subtotal;
        totalProductosCarrito += libro.cantidad;
    });

    // Actualizar elementos en la interfaz
    spanCantCarrito.innerText = `${totalProductosCarrito}`;
    pCartAmount.innerText = `$${totalCarrito}.00`;
    actualizarCarritoEnLocalStorage(); // storage
}

// borrar del carrito 
function removeItemFromCart(book, agregaren){
    const index = carrito.findIndex(libroCarrito => libroCarrito.id === book.id);

    if (index !== -1) {
        // Eliminar el book del carrito
        carrito.splice(index, 1);

        // Recalcular el total del carrito
        totalCarrito -= book.subtotal;

        // Decrementar el total de productos en el carrito
        totalProductosCarrito--;

        if (agregaren == "shoppingcart"){
            mostrarCarrito();
            actualizarDatosCarrito();
        } else if (agregaren == "checkout"){
            mostratCarritoEnCheckout();

            // Verificar si el carrito está vacío después de eliminar un elemento
            if (carrito.length === 0) {
                // Redirigir a la página de inicio solo si estamos en la sección de checkout
                window.location.href = "index.html";
            }
        }
    }
}

// mostrar pop-ups
function showPopup(){

    let popUpBackground = d.createElement("div");
    popUpBackground.classList.add("popUpbackground");

    // Temporizador para cerrar automáticamente el pop-up
    let cuentaregresiva = 10;
    let popUpCountdown = d.createElement("p");
    popUpCountdown.innerHTML = `Este banner cerrará automáticamente en ${cuentaregresiva} segundos`;

    let fx = setInterval(() => {
        cuentaregresiva--;
        popUpCountdown.innerHTML = `Este banner cerrará automáticamente en ${cuentaregresiva} segundos`;
        if (cuentaregresiva == 0){
            clearInterval(fx);
            popUpBackground.remove();
        }
    }, 1000);


    let popUpCloseBtn = d.createElement("a");
    popUpCloseBtn.setAttribute("href", "#");
    popUpCloseBtn.classList.add("botoncerrar");
    let popUpCloseBtnIcon = d.createElement("i");
    popUpCloseBtnIcon.classList.add("fa-solid", "fa-x");
    popUpCloseBtn.append(popUpCloseBtnIcon);

    //popUp1
    let popUp1 = d.createElement("div");
    popUp1.classList.add("popUp");
    let popUp1Img = d.createElement("img");
    popUp1Img.setAttribute("src", "assets/img/venta.png");
    popUp1Img.setAttribute("alt", "Vector de etiquetas de descuento");
    let popU1ph2 = d.createElement("h2");
    popU1ph2.innerText = "¡Super Venta!";
    let popUp1Text = d.createElement("p");
    popUp1Text.innerHTML = "Hasta "
    let popUp1Span = d.createElement("span");
    popUp1Span.innerText = "50%";
    popUp1Text.append(popUp1Span);
    popUp1Text.innerHTML += " de descuento ";
    let popUp1Span2 = d.createElement("span");
    popUp1Span2.innerText = "en todos los libros";
    popUp1Text.append(popUp1Span2);

    //popUp2
    let popUp2 = d.createElement("div");
    popUp2.classList.add("popUp");
    let popUp2Img = d.createElement("img");
    popUp2Img.setAttribute("src", "assets/img/misterio.png");
    popUp2Img.setAttribute("alt", "Ilustración de un detective");
    let popU2ph2 = d.createElement("h2");
    popU2ph2.innerText = "¡Oferta!";
    let popUp2Text = d.createElement("p");
    let popUp2Span = d.createElement("span");
    popUp2Span.innerText = "3x2";
    popUp2Text.append(popUp2Span);
    popUp2Text.innerHTML += " en libros de misterio ";

    let btnPopUp2 = d.createElement("div");
    btnPopUp2.classList.add("btnPopUp");
    let aBtnPopUp2 = d.createElement("a");
    aBtnPopUp2.setAttribute("href", "#");
    aBtnPopUp2.classList.add("btn");
    aBtnPopUp2.innerText = "Ver libros de Misterio";
    btnPopUp2.append(aBtnPopUp2);

    aBtnPopUp2.addEventListener("click", () => {
        categoriesview()
        mostrarLibrosPorCategoria("Misterio");
        let a1 = d.querySelector(".breadcrumbs a:first-child");
        a1.addEventListener("click", () => {
            homeview();
        });
        popUpBackground.remove();
    })

    //popUp3
    let popUp3 = d.createElement("div");
    popUp3.classList.add("popUp");
    let popUp3Img = d.createElement("img");
    popUp3Img.setAttribute("src", "assets/img/romance.png");
    popUp3Img.setAttribute("alt", "Ilustración de una pareja abrazándose");
    let popU3ph2 = d.createElement("h2");
    popU3ph2.innerText = "¡Oferta!";
    let popUp3Text = d.createElement("p");
    popUp3Text.innerHTML = "Por tiempo limitado todos los libros de Romance al "
    let popUp3Span = d.createElement("span");
    popUp3Span.innerText = "60%";
    popUp3Text.append(popUp3Span);
    popUp3Text.innerHTML += " de descuento!";
    let btnPopUp3 = d.createElement("div");
    btnPopUp3.classList.add("btnPopUp");
    let aBtnPopUp3 = d.createElement("a");
    aBtnPopUp3.setAttribute("href", "#");
    aBtnPopUp3.classList.add("btn");
    aBtnPopUp3.innerText = "Ver libros de Romance";
    btnPopUp3.append(aBtnPopUp3);

    aBtnPopUp3.addEventListener("click", () => {
        categoriesview()
        mostrarLibrosPorCategoria("Romance");
        let a1 = d.querySelector(".breadcrumbs a:first-child");
        a1.addEventListener("click", () => {
            homeview();
        });
        popUpBackground.remove();
    })

    //popUp4
    let popUp4 = d.createElement("div");
    popUp4.classList.add("popUp");
    let popUp4Img = d.createElement("img");
    popUp4Img.setAttribute("src", "assets/img/envio.png");
    popUp4Img.setAttribute("alt", "Ilustración de auto de reparto");

    let popUp4Text = d.createElement("p");
    popUp4Text.innerHTML = "Obten ";
    let popUp4Span = d.createElement("span");
    popUp4Span.innerText = "¡envío gratis!";
    popUp4Span.classList.add("enviogratisspan");
    popUp4Text.append(popUp4Span);
    popUp4Text.innerHTML += " por la compra de más de 3 libros";


    // Insertar el pop-up en el DOM
    footer.insertAdjacentElement("beforebegin", popUpBackground);

    // Mostrar un pop-up aleatorio de acuerdo a una opción
    let aleatorio = Math.floor(Math.random() * 4) + 1;

    // configuracion de pop-ups
    switch (aleatorio) {
        case 1:
            popUp1.append(popUp1Img);
            popUp1.append(popU1ph2);
            popUp1.append(popUp1Text);
            popUp1.append(popUpCountdown);
            popUp1.append(popUpCloseBtn);
            popUpBackground.append(popUp1);
            break;
        case 2:
            popUp2.append(popUp2Img);
            popUp2.append(popU2ph2);
            popUp2.append(popUp2Text);
            popUp2.append(btnPopUp2);
            popUp2.append(popUpCountdown);
            popUp2.append(popUpCloseBtn);
            popUpBackground.append(popUp2);
            break;
        case 3:
            popUp3.append(popUp3Img);
            popUp3.append(popU3ph2);
            popUp3.append(popUp3Text);
            popUp3.append(btnPopUp3);
            popUp3.append(popUpCountdown);
            popUp3.append(popUpCloseBtn);
            popUpBackground.append(popUp3);
            break;
        case 4:
            popUp4.append(popUp4Img);
            popUp4.append(popUp4Text);
            popUp4.append(popUpCountdown);
            popUp4.append(popUpCloseBtn);

            popUpBackground.append(popUp4);
            break;
    }

    popUpCloseBtn.addEventListener("click", () => {
        popUpBackground.remove();
    })

    window.addEventListener('keydown', (e) => {
        if (e.key == 'Escape') {
            popUpBackground.remove();
        }
    });
}

// mostrar pop-ups 
function mostrarPopUpDespuesDe(segundos){
    segundos = segundos * 1000;

    if (!popUpActive){
        popUpActive = true;

        setTimeout(() => {
            showPopup();
            popUpActive = false;
        }, segundos);
    }

}

// checkout
function checkoutview(){
    // elementos
    let containerCheckOut = d.createElement("div");
    containerCheckOut.classList.add("containerCheckOut");
    let checkoutHeading = d.createElement("div");
    checkoutHeading.classList.add("heading");
    let logoForCheckout = d.createElement("div");
    let checkoutHeadingTitleDiv = d.createElement("div");
    let checkoutHeadingTitle = d.createElement("h1");
    let checkoutHeadingTitleIcon = d.createElement("i");
    checkoutHeadingTitleIcon.classList.add("fa-solid", "fa-shopping-cart");
    checkoutHeadingTitle.append(checkoutHeadingTitleIcon);
    checkoutHeadingTitle.innerHTML += " Checkout";
    checkoutHeadingTitleDiv.append(checkoutHeadingTitle);
    let checkoutHeadingBtnDiv = d.createElement("div");
    let checkoutHeadingBtn = d.createElement("p");
    let checkoutHeadingBtnIcon = d.createElement("i");
    checkoutHeadingBtnIcon.classList.add("fa-solid", "fa-chevron-left");
    checkoutHeadingBtn.append(checkoutHeadingBtnIcon);
    checkoutHeadingBtn.innerHTML += "Ver más productos";
    checkoutHeadingBtnDiv.append(checkoutHeadingBtn);
    checkoutHeadingTitleDiv.append(checkoutHeadingBtnDiv);
    checkoutHeading.append(logoForCheckout);
    checkoutHeading.append(checkoutHeadingTitleDiv);

    //secciones del chekout
    let checkoutSections = d.createElement("div");
    checkoutSections.classList.add("checkoutSections");

    let checkoutSectionSummary = d.createElement("div");
    let checkoutSectionSummaryTitle = d.createElement("h2");
    let checkoutSectionSummaryTitleIcon = d.createElement("i");
    checkoutSectionSummaryTitleIcon.classList.add("fa-regular", "fa-circle-down");
    checkoutSectionSummaryTitle.innerText += "Resumen del pedido ";
    checkoutSectionSummaryTitle.append(checkoutSectionSummaryTitleIcon);

    checkoutSectionSummary.append(checkoutSectionSummaryTitle);
    checkoutSections.append(checkoutSectionSummary);

    let checkoutSectionForm = d.createElement("form");
    let checkoutSectionFormTitle = d.createElement("h2");
    checkoutSectionFormTitle.innerText = "Información de envío";

    let checkoutSectionFormInputs = d.createElement("div");
    checkoutSectionFormInputs.classList.add("formSection");

    let  nameInputs = d.createElement("div");
    nameInputs.classList.add("inputFlex");

    let nameInputDiv = d.createElement("div");
    let nameInput = d.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("id", "nombre");
    nameInput.setAttribute("name", "nombre");

    let nameInputLabel = d.createElement("label");
    nameInputLabel.setAttribute("for", "nombre");
    nameInputLabel.innerText = "Nombre";

    nameInputDiv.append(nameInputLabel);
    nameInputDiv.append(nameInput);
    nameInputs.append(nameInputDiv);

    let lastNameInputDiv = d.createElement("div");
    let lastNameInput = d.createElement("input");
    lastNameInput.setAttribute("type", "text");
    lastNameInput.setAttribute("id", "apellido");
    lastNameInput.setAttribute("name", "apellido");

    let lastNameInputLabel = d.createElement("label");
    lastNameInputLabel.setAttribute("for", "apellido");
    lastNameInputLabel.innerText = "Apellido";

    lastNameInputDiv.append(lastNameInputLabel);
    lastNameInputDiv.append(lastNameInput);
    nameInputs.append(lastNameInputDiv);

    checkoutSectionFormInputs.append(nameInputs);

    let emailInputDiv = d.createElement("div");
    let emailInput = d.createElement("input");
    emailInput.setAttribute("type", "email");
    emailInput.setAttribute("id", "email");
    emailInput.setAttribute("name", "email");

    let emailInputLabel = d.createElement("label");
    emailInputLabel.setAttribute("for", "email");
    emailInputLabel.innerText = "Email";

    emailInputDiv.append(emailInputLabel);
    emailInputDiv.append(emailInput);
    checkoutSectionFormInputs.append(emailInputDiv);

    let phoneInputDiv = d.createElement("div");
    let phoneInput = d.createElement("input");
    phoneInput.setAttribute("type", "number");
    phoneInput.setAttribute("id", "telefono");
    phoneInput.setAttribute("name", "telefono");
    phoneInput.setAttribute("max", "9999999999999999");

    let phoneInputLabel = d.createElement("label");
    phoneInputLabel.setAttribute("for", "telefono");
    phoneInputLabel.innerText = "Teléfono";

    phoneInputDiv.append(phoneInputLabel);
    phoneInputDiv.append(phoneInput);
    checkoutSectionFormInputs.append(phoneInputDiv);

    let addressInputDiv = d.createElement("div");
    let addressInput = d.createElement("input");
    addressInput.setAttribute("type", "text");
    addressInput.setAttribute("id", "direccion");
    addressInput.setAttribute("name", "direccion");

    let addressInputLabel = d.createElement("label");
    addressInputLabel.setAttribute("for", "direccion");
    addressInputLabel.innerText = "Dirección";

    addressInputDiv.append(addressInputLabel);
    addressInputDiv.append(addressInput);
    checkoutSectionFormInputs.append(addressInputDiv);

    let cityFlexInputs  = d.createElement("div");
    cityFlexInputs.classList.add("inputFlex");

    let cityInputDiv = d.createElement("div");
    let cityInput = d.createElement("input");
    cityInput.setAttribute("type", "text");
    cityInput.setAttribute("id", "ciudad");
    cityInput.setAttribute("name", "ciudad");

    let cityInputLabel = d.createElement("label");
    cityInputLabel.setAttribute("for", "ciudad");
    cityInputLabel.innerText = "Ciudad";

    cityInputDiv.append(cityInputLabel);
    cityInputDiv.append(cityInput);
    cityFlexInputs.append(cityInputDiv);

    let stateInputDiv = d.createElement("div");
    let stateInput = d.createElement("input");
    stateInput.setAttribute("type", "number");
    stateInput.setAttribute("id", "piso");
    stateInput.setAttribute("name", "piso");
    stateInput.setAttribute("max", "99");

    let stateInputLabel = d.createElement("label");
    stateInputLabel.setAttribute("for", "piso");
    stateInputLabel.innerText = "Piso (indicar 0 si es una casa)";

    stateInputDiv.append(stateInputLabel);
    stateInputDiv.append(stateInput);
    cityFlexInputs.append(stateInputDiv);

    cityFlexInputs.append(cityInputDiv);
    cityFlexInputs.append(stateInputDiv);
    checkoutSectionFormInputs.append(cityFlexInputs);

    let zipFlexInputs  = d.createElement("div");
    zipFlexInputs.classList.add("inputFlex");

    let zipInputDiv = d.createElement("div");
    let zipInput = d.createElement("input");
    zipInput.setAttribute("type", "number");
    zipInput.setAttribute("id", "codigoPostal");
    zipInput.setAttribute("name", "codigoPostal");
    zipInput.setAttribute("max", "999999");

    let zipInputLabel = d.createElement("label");
    zipInputLabel.setAttribute("for", "codigoPostal");
    zipInputLabel.innerText = "Código Postal";

    zipInputDiv.append(zipInputLabel);
    zipInputDiv.append(zipInput);
    zipFlexInputs.append(zipInputDiv);

    let countryInputDiv = d.createElement("div");
    let countryInput = d.createElement("input");
    countryInput.setAttribute("type", "text");
    countryInput.setAttribute("id", "pais");
    countryInput.setAttribute("name", "pais");

    let countryInputLabel = d.createElement("label");
    countryInputLabel.setAttribute("for", "pais");
    countryInputLabel.innerText = "País";

    countryInputDiv.append(countryInputLabel);
    countryInputDiv.append(countryInput);
    zipFlexInputs.append(countryInputDiv);

    checkoutSectionFormInputs.append(zipFlexInputs);

    checkoutSectionForm.append(checkoutSectionFormTitle);
    checkoutSectionForm.append(checkoutSectionFormInputs);


    let checkoutSectionPaymentTitle = d.createElement("h2");
    checkoutSectionPaymentTitle.innerText = "Información de pago";

    let checkoutSectionPaymentInputs = d.createElement("div");
    checkoutSectionPaymentInputs.classList.add("formSection");

    let paymentMethodsDiv = d.createElement("div");
    paymentMethodsDiv.classList.add("payment-method");

    let paymentMethodsCardBtn = d.createElement("button");
    paymentMethodsCardBtn.classList.add("method", "selectedMethod");
    paymentMethodsCardBtn.disabled = true;

    let paymentMethodsCardIcon = d.createElement("i");
    paymentMethodsCardIcon.classList.add("fa-regular", "fa-credit-card");
    paymentMethodsCardBtn.append(paymentMethodsCardIcon);

    let paymentMethodsCardText = d.createElement("span");
    paymentMethodsCardText.innerText = "Tarjeta de crédito";
    paymentMethodsCardBtn.append(paymentMethodsCardText);

    let paymentMethodsCardIcon2 = d.createElement("i");
    paymentMethodsCardIcon2.classList.add("fa-solid", "fa-circle-check");
    paymentMethodsCardBtn.append(paymentMethodsCardIcon2);

    paymentMethodsDiv.append(paymentMethodsCardBtn);
    

    let paymentMethodsPaypalBtn = d.createElement("button");
    paymentMethodsPaypalBtn.classList.add("method");

    let paymentMethodsPaypalIcon = d.createElement("i");
    paymentMethodsPaypalIcon.classList.add("fa-brands", "fa-paypal");
    paymentMethodsPaypalBtn.append(paymentMethodsPaypalIcon);

    let paymentMethodsPaypalText = d.createElement("span");
    paymentMethodsPaypalText.innerText = "Paypal";
    paymentMethodsPaypalBtn.append(paymentMethodsPaypalText);

    let paymentMethodsPaypalIcon2 = d.createElement("i");
    paymentMethodsPaypalIcon2.classList.add("fa-solid", "fa-arrow-up-right-from-square");
    paymentMethodsPaypalBtn.append(paymentMethodsPaypalIcon2);

    checkoutSectionPaymentInputs.append(paymentMethodsDiv);
    

    let cardNameInputDiv = d.createElement("div");
    let cardNameInput = d.createElement("input");
    cardNameInput.setAttribute("type", "text");
    cardNameInput.setAttribute("id", "nombreTarjeta");
    cardNameInput.setAttribute("name", "nombreTarjeta");

    let cardNameInputLabel = d.createElement("label");
    cardNameInputLabel.setAttribute("for", "nombreTarjeta");
    cardNameInputLabel.innerText = "Nombre en la tarjeta";

    cardNameInputDiv.append(cardNameInputLabel);
    cardNameInputDiv.append(cardNameInput);

    checkoutSectionPaymentInputs.append(cardNameInputDiv);


    let cardNumberInputDiv = d.createElement("div");
    let cardNumberInput = d.createElement("input");
    cardNumberInput.setAttribute("type", "number");
    cardNumberInput.setAttribute("id", "numeroTarjeta");
    cardNumberInput.setAttribute("name", "numeroTarjeta");
    cardNumberInput.setAttribute("max", "99999999999999999999");

    let cardNumberInputLabel = d.createElement("label");
    cardNumberInputLabel.setAttribute("for", "numeroTarjeta");
    cardNumberInputLabel.innerText = "Número de tarjeta";

    cardNumberInputDiv.append(cardNumberInputLabel);
    cardNumberInputDiv.append(cardNumberInput);

    checkoutSectionPaymentInputs.append(cardNumberInputDiv);

    let cardDateCvvFlexInputs  = d.createElement("div");
    cardDateCvvFlexInputs.classList.add("inputFlex");

    let cardDateInputDiv = d.createElement("div");
    let cardDateInput = d.createElement("input");
    cardDateInput.setAttribute("type", "text");
    cardDateInput.setAttribute("id", "fechavencimiento");
    cardDateInput.setAttribute("name", "fechavencimiento");

    let cardDateInputLabel = d.createElement("label");
    cardDateInputLabel.setAttribute("for", "fechavencimiento");
    cardDateInputLabel.innerText = "Fecha de expiración (MM/AA)";

    cardDateInputDiv.append(cardDateInputLabel);
    cardDateInputDiv.append(cardDateInput);
    cardDateCvvFlexInputs.append(cardDateInputDiv);

    let cardCvvInputDiv = d.createElement("div");
    let cardCvvInput = d.createElement("input");
    cardCvvInput.setAttribute("type", "number");
    cardCvvInput.setAttribute("id", "cvv");
    cardCvvInput.setAttribute("name", "cvv");
    cardCvvInput.setAttribute("max", "999");

    let cardCvvInputLabel = d.createElement("label");
    cardCvvInputLabel.setAttribute("for", "cvv");
    cardCvvInputLabel.innerText = "CVV";

    cardCvvInputDiv.append(cardCvvInputLabel);
    cardCvvInputDiv.append(cardCvvInput);
    cardDateCvvFlexInputs.append(cardCvvInputDiv);

    checkoutSectionPaymentInputs.append(cardDateCvvFlexInputs);

    checkoutSectionForm.append(checkoutSectionPaymentTitle);
    checkoutSectionForm.append(checkoutSectionPaymentInputs);

    let btnSubmit = d.createElement("button");
    btnSubmit.setAttribute("type", "submit");
    btnSubmit.innerText = "Enviar pedido ";

    let btnSubmitIcon = d.createElement("i");
    btnSubmitIcon.classList.add("fa-solid", "fa-arrow-right");
    btnSubmit.append(btnSubmitIcon);

    let btnSubmitDiv = d.createElement("div");
    btnSubmitDiv.append(btnSubmit);

    checkoutSectionForm.append(btnSubmitDiv);

    checkoutSections.append(checkoutSectionForm);

    containerCheckOut.append(checkoutHeading);
    containerCheckOut.append(checkoutSections);


    footer.insertAdjacentElement("beforebegin", containerCheckOut);

    checkoutHeadingBtn.addEventListener("click", () => {
        containerCheckOut.remove();
    })

    showHideOrderSummary()

    checkoutSectionForm.addEventListener("submit", (e) => {
        e.preventDefault(); //evitar que se envíe el formulario
        let esValido = 0;

        // eliminar todas las clases de error previas
        let errorInputs  = d.querySelectorAll(".errorInput");
        errorInputs.forEach((errorInput) => {
            errorInput.classList.remove("errorInput");
        });

        // eliminar mensajes de errores previos para luego voler a validar
        let errorMessages  = d.querySelectorAll("form p");
        errorMessages.forEach((errorMessage) => {
            errorMessage.remove();
        });

        // validar que todos los campos estén completos
        let inputs = d.querySelectorAll("form input");

        inputs.forEach((input) => {
            if (input.value.trim() === ""){

                input.classList.add("errorInput");
                let errorMessage = d.createElement("p");
                errorMessage.innerText = `*Este campo es obligatorio`;
                input.parentElement.append(errorMessage);

            } else{
                esValido++;
            }
        });

        if (esValido == inputs.length){
            let name = d.querySelector("#nombre").value;
            orderConfirmationView(name);
            containerCheckOut.remove();
            carrito = [];
            mostrarCarrito();
            actualizarDatosCarrito();
        }

    })
}

// mostrar u ocultar el resumen del pedido
function showHideOrderSummary(){
    let containerCheckout = d.querySelector(".containerCheckOut");

    // Verificar si existe  
    if (containerCheckout){
        let orderSummaryTitle = d.querySelector(".checkoutSections h2:nth-of-type(1)");
        let orderSummaryBtn = orderSummaryTitle.querySelector('i');

        // evento al botón 
        orderSummaryBtn.addEventListener('click', () => {
            // Si el botón muestra un círculo hacia abajo, cambiar a un círculo
            if (orderSummaryBtn.classList.contains('fa-circle-down')) {
              orderSummaryBtn.classList.remove('fa-circle-down', 'fa-regular');
              orderSummaryBtn.classList.add('fa-circle-up', 'fa-solid');
            mostratCarritoEnCheckout();

            // Si el botón muestra un círculo hacia arriba, cambiar a un círculo hacia abajo
            } else {
              orderSummaryBtn.classList.remove('fa-circle-up', 'fa-solid');
              orderSummaryBtn.classList.add('fa-circle-down', 'fa-regular');

              let verificarsiexisteelul = d.querySelector(".checkoutSections .cartItems");
                if (verificarsiexisteelul){
                    verificarsiexisteelul.parentElement.remove();
                }
            }
        });

        // ocultar boton o no
        if(window.innerWidth > 850){
            orderSummaryBtn.style.display = "none";
            mostratCarritoEnCheckout();            
        } 
    }
}

// muestra carrito en checkout
function mostratCarritoEnCheckout(){
    let orderSummaryTitle = d.querySelector(".checkoutSections h2:nth-of-type(1)");
    generarListaProductosCarrito(orderSummaryTitle, "checkout", false, false);
    actualizarDatosCarrito();
}

// generar la lista de productos en el carrito
function generarListaProductosCarrito(divAInsertar, agregaren, agregarBtns, agregarCantidad){
    // elementos
    let contenedorCartItems = d.createElement("div");
    let cantidadProductos = d.createElement("p");
    cantidadProductos.classList.add("cantProductsInCart");
    totalProductosCarrito = 0;
    totalCarrito = 0;
    let cartItems = d.createElement("ul");
    cartItems.classList.add("cartItems");

    // Iterar sobre cada libro en el carrito
    carrito.forEach(function(libro){
        let cartItem = d.createElement("li");
        cartItem.classList.add("cartItem");

        let cartItemImg = d.createElement("img");
        cartItemImg.setAttribute("src", `assets/img/libros/${libro.imagen}`);
        cartItemImg.setAttribute("alt", `Tapa del libro ${libro.nombre}`);

        let cartItemDetalles = d.createElement("div");
        cartItemDetalles.classList.add("cartItemDetalles");

        let cartItemTitle = d.createElement("p");
        cartItemTitle.innerText = libro.nombre;
        let cartItemAutor = d.createElement("span");
        cartItemAutor.innerText = libro.autor;
        cartItemTitle.append(cartItemAutor);

        let cartItemCantPrice = d.createElement("div");
        let cartQuantity = d.createElement("div");
        cartQuantity.classList.add("cartQuantity");

        let restarCantidad = d.createElement("i");
        restarCantidad.classList.add("fa-solid", "fa-minus", "restarCantidad");
        let cantidadItem = d.createElement("input");
        cantidadItem.setAttribute("type", "text");
        cantidadItem.setAttribute("value", libro.cantidad);
        cantidadItem.classList.add("carrito-item-cantidad");
        cantidadItem.disabled = true;
        let sumarCantidad = d.createElement("i");
        sumarCantidad.classList.add("fa-solid", "fa-plus", "sumarCantidad");
        
        // Agregar evento de clic al ícono de restar cantidad
        restarCantidad.addEventListener("click", () => {
            if (libro.cantidad > 1) {
            libro.cantidad--; // Restar cantidad del libro en el carrito
            libro.subtotal = libro.cantidad * libro.precio; // Recalcular el subtotal del libro
            totalCarrito -= libro.precio; // Recalcular el total del carrito
            totalProductosCarrito--; // Decrementar el total de productos en el carrito
                if (agregaren == "shoppingcart"){
                    mostrarCarrito();
                    actualizarDatosCarrito();
                } else if (agregaren == "checkout"){
                    mostratCarritoEnCheckout();
                }
            } else {
                removeItemFromCart(libro, agregaren);
            }
        });
        
        // Agregar evento de clic al ícono de sumar cantidad
        sumarCantidad.addEventListener("click", () => {
            libro.cantidad++; // Sumar cantidad del libro en el carrito
            libro.subtotal = libro.cantidad * libro.precio; // Recalcular el subtotal del libro
            totalCarrito += libro.precio; // Recalcular el total del carrito
            totalProductosCarrito++; // Incrementar el total de productos en el carrito
            if (agregaren == "shoppingcart"){
                mostrarCarrito();
                actualizarDatosCarrito();
            } else if (agregaren == "checkout"){
                mostratCarritoEnCheckout();
            }
        });

        // elementos
        cartQuantity.append(restarCantidad);
        cartQuantity.append(cantidadItem);
        cartQuantity.append(sumarCantidad);

        let cartItemPrice = d.createElement("p");
        let spanPrice = d.createElement("span");
        spanPrice.innerText = `$${libro.precio}.00`;
        let spanSubtotal = d.createElement("span");
        spanSubtotal.innerText = `$${libro.subtotal}.00`;
        cartItemPrice.append(spanPrice);
        cartItemPrice.append(spanSubtotal);

        cartItemCantPrice.append(cartQuantity);
        cartItemCantPrice.append(cartItemPrice);

        cartItemDetalles.append(cartItemTitle);
        cartItemDetalles.append(cartItemCantPrice);

        let cartItemDelete = d.createElement("span");
        cartItemDelete.classList.add("btn-eliminar");
        let iconoDelete = d.createElement("i");
        iconoDelete.classList.add("fa-solid", "fa-trash");
        cartItemDelete.append(iconoDelete);

        // Agregar evento de clic al botón de eliminar
        cartItemDelete.addEventListener("click", () => {
            removeItemFromCart(libro, agregaren);
        });

        cartItem.append(cartItemImg);
        cartItem.append(cartItemDetalles);
        cartItem.append(cartItemDelete);

        cartItems.append(cartItem);

        totalCarrito += libro.subtotal;
        totalProductosCarrito += libro.cantidad;
    })

    // elementos
    let cartTotal = d.createElement("div");
    cartTotal.classList.add("carrito-total");
    
    let divTotal = d.createElement("div");
    let pTotal = d.createElement("p");
    pTotal.innerText = "Total ";
    let spanTotal = d.createElement("span");
    spanTotal.innerText = `$${totalCarrito}.00`;

    pTotal.append(spanTotal);
    divTotal.append(pTotal);

    cartTotal.append(divTotal);

    // Agregar botones si es necesario
    if (agregarBtns == true){

        let divBtns = d.createElement("div");
        let cartBtn = d.createElement("button");
        cartBtn.classList.add("btn-pagar");
        cartBtn.innerText = "Continuar con la compra";
        let iconoBtn = d.createElement("i");
        iconoBtn.classList.add("fa-solid", "fa-bag-shopping");
        cartBtn.append(iconoBtn);

        cartBtn.addEventListener("click", () => {
            checkoutview();
            cartContainer.classList.remove("active");
        })
    
        let vaciarBtn = d.createElement("p");
        vaciarBtn.innerText = "Vaciar carrito";
        vaciarBtn.addEventListener("click", () => {
            carrito = [];
            mostrarCarrito();
            actualizarDatosCarrito();
        })
    
        let seguirComprandoBtn = d.createElement("p");
        seguirComprandoBtn.innerText = "Ver más productos";
        seguirComprandoBtn.addEventListener("click", () => {
            cartContainer.classList.remove("active");
            productsview();
        })
    
        divBtns.append(cartBtn);
        divBtns.append(vaciarBtn);
        divBtns.append(seguirComprandoBtn);
        cartTotal.append(divBtns);
    }

    // Agregar total de productos al elemento principal
    if (agregarCantidad == true){
        cantidadProductos.innerText = `${totalProductosCarrito} productos`;
        contenedorCartItems.append(cantidadProductos);
    }

    contenedorCartItems.append(cartItems);
    contenedorCartItems.append(cartTotal);

    // Agregar el contenedor principal al contenedor específico según el contexto
    if (agregaren == "shoppingcart"){
        divAInsertar.append(contenedorCartItems);
    } else if (agregaren == "checkout") {
        let verificarsiexisteelul = d.querySelector(".checkoutSections .cartItems");
        if (verificarsiexisteelul){
            verificarsiexisteelul.parentElement.remove();
        }
        divAInsertar.insertAdjacentElement("afterend", contenedorCartItems);
    }

    // Actualizar la cantidad de productos en el icono del carrito
    spanCantCarrito.innerText = `${totalProductosCarrito}`;
    // Actualizar el monto total del carrito en la barra lateral
    pCartAmount.innerText = `$${totalCarrito}.00`;
}

// cerrar modal con scape
window.addEventListener('keydown', (e) => {
    if (e.key == 'Escape' && d.querySelector('#modalbackground')) {
        d.querySelector('#modalbackground').remove();
    }
});

// compra exitosa
function orderConfirmationView(name){
    togglehomemain();

    // elementos
    let orderConfirmationContainer = d.createElement("div");
    orderConfirmationContainer.classList.add("ordenconfirmation");

    let imgOrderConfirmation = d.createElement("img");
    imgOrderConfirmation.setAttribute("src", "assets/img/confirmacion.png");
    imgOrderConfirmation.setAttribute("alt", "Ilustración de libros apilados");

    let orderConfirmationDiv = d.createElement("div");

    let orderConfirmationTitle = d.createElement("h1");
    orderConfirmationTitle.innerText = `¡Gracias por tu compra, ${name}!`;

    let orderConfirmationText = d.createElement("p");
    orderConfirmationText.innerText = "Tu pedido ha sido confirmado.";

    let orderConfirmationText2 = d.createElement("p");
    orderConfirmationText2.innerText = "Recibirás un email con la confirmación de tu pedido y el número de seguimiento del envío.";

    let orderConfirmationBtnDiv = d.createElement("div");
    let orderConfirmationBtn = d.createElement("a");
    orderConfirmationBtn.setAttribute("href", "#");
    orderConfirmationBtn.classList.add("btn");
    orderConfirmationBtn.innerText = "Ver más productos";

    // ver productos
    orderConfirmationBtn.addEventListener("click", () => {
        productsview();
    });

    orderConfirmationBtnDiv.append(orderConfirmationBtn);

    orderConfirmationDiv.append(orderConfirmationTitle);
    orderConfirmationDiv.append(orderConfirmationText);
    orderConfirmationDiv.append(orderConfirmationText2);
    orderConfirmationDiv.append(orderConfirmationBtnDiv);

    orderConfirmationContainer.append(imgOrderConfirmation);
    orderConfirmationContainer.append(orderConfirmationDiv);

    main.append(orderConfirmationContainer);
}

// animar agregar al carrito
function animarBotonAddToCart(boton, event, book){
    let animacion = d.createElement("span");
    animacion.classList.add("bodymovinanim");

    boton.append(animacion);

    let animacionIcono = bodymovin.loadAnimation({
        container: animacion,
        renderer: 'svg',
        loop: false,
        path: 'assets/animations/check.json'
    })

    if (event.target.classList.contains("btn")){
        event.target.classList.add("animando");

        animacionIcono.playSegments([0, 60], true);
    
        let cambiarText = setInterval(() => {
            boton.innerText = "Añadir otro";
            event.target.classList.remove("animando");
            clearInterval(cambiarText);

            addBookToCart(book);
        }, 2800);
    }

    event.preventDefault();
    event.stopPropagation();

}

// mostrar pop-up
mostrarPopUpDespuesDe(5);
// vista principal 
homeview();
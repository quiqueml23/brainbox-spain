import type { BrainCard } from '../types/card';

export const CARDS: BrainCard[] = [
  {
    id: 'alhambra',
    category: 'monument',
    region: { es: 'Andalucía · Granada', sk: 'Andalúzia · Granada', en: 'Andalusia · Granada' },
    era: { es: 'Siglos XIII–XIV', sk: '13.–14. storočie', en: '13th–14th c.' },
    title: { es: 'La Alhambra', sk: 'Alhambra', en: 'The Alhambra' },
    subtitle: {
      es: 'Palacio y fortaleza nazarí',
      sk: 'Nasridovský palác a pevnosť',
      en: 'Nasrid Palace & Fortress',
    },
    accentColor: '#C84B31',
    vignettes: [
      {
        id: 'court',
        image: './cards/alhambra-court.jpg',
        title: { es: 'Patio de los Leones', sk: 'Levie nádvorie', en: 'Court of the Lions' },
        caption: {
          es: '124 columnas de mármol blanco y fuente central con 12 leones de piedra.',
          sk: '124 stĺpov z bieleho mramoru a centrálna fontána s 12 kamennými levmi.',
          en: '124 white marble columns and central fountain supported by 12 stone lions.',
        },
      },
      {
        id: 'pomegranate',
        image: './cards/alhambra-pomegranate.jpg',
        title: { es: 'La Granada (Símbolo)', sk: 'Granátové jablko (Symbol)', en: 'The Pomegranate (Symbol)' },
        caption: {
          es: 'Fruta que da nombre a la ciudad y figura en el escudo histórico.',
          sk: 'Ovocie, ktoré dalo mestu meno a nachádza sa v historickom erbe.',
          en: 'The fruit that names the city and features on the historic coat of arms.',
        },
      },
      {
        id: 'sierra',
        image: './cards/alhambra-sierra.jpg',
        title: { es: 'Sierra Nevada', sk: 'Sierra Nevada', en: 'Sierra Nevada' },
        caption: {
          es: 'Picos nevados al fondo con el Mulhacén (3.479 m), la cumbre más alta de la península.',
          sk: 'Zasnežené štíty v pozadí s vrchom Mulhacén (3 479 m), najvyšším vrchom Pyrenejí.',
          en: 'Snow-capped peaks in the background with Mulhacén (3,479 m), the peninsula’s highest peak.',
        },
      },
    ],
    questions: [
      {
        number: 1,
        question: {
          es: '¿Cuántos leones de piedra sostienen la fuente del Patio de los Leones?',
          sk: 'Koľko kamenných levov podopiera fontánu na Levom nádvorí?',
          en: 'How many stone lions support the fountain in the Court of the Lions?',
        },
        answer: { es: '12 leones', sk: '12 levov', en: '12 lions' },
      },
      {
        number: 2,
        question: {
          es: '¿Qué fruta da nombre y aparece en el escudo de Granada?',
          sk: 'Aké ovocie dalo mestu meno a je v jeho erbe?',
          en: 'Which fruit gives the city its name and appears on its coat of arms?',
        },
        answer: { es: 'La granada', sk: 'Granátové jablko', en: 'The pomegranate' },
      },
      {
        number: 3,
        question: {
          es: '¿Cuántas columnas de mármol blanco rodean el patio?',
          sk: 'Koľko stĺpov z bieleho mramoru obklopuje nádvorie?',
          en: 'How many white marble columns surround the courtyard?',
        },
        answer: { es: '124 columnas', sk: '124 stĺpov', en: '124 columns' },
      },
      {
        number: 4,
        question: {
          es: '¿Cuál es la montaña más alta visible en Sierra Nevada?',
          sk: 'Ktorý je najvyšší viditeľný vrch v pohorí Sierra Nevada?',
          en: 'What is the highest mountain peak visible in Sierra Nevada?',
        },
        answer: { es: 'El Mulhacén (3.479 m)', sk: 'Mulhacén (3 479 m)', en: 'Mulhacén (3,479 m)' },
      },
      {
        number: 5,
        question: {
          es: '¿De qué color es la semilla interior de la fruta granada en la viñeta?',
          sk: 'Akej farby sú zrnká granátového jablka na obrázku?',
          en: 'What color are the inner pomegranate seeds in the illustration?',
        },
        answer: { es: 'Rojas', sk: 'Červené', en: 'Red' },
      },
      {
        number: 6,
        question: {
          es: '¿Qué dinastía musulmana construyó estos palacios?',
          sk: 'Ktorá moslimská dynastia postavila tieto paláce?',
          en: 'Which Muslim dynasty built these palaces?',
        },
        answer: { es: 'La dinastía nazarí', sk: 'Dynastia Nasridovcov', en: 'The Nasrid dynasty' },
      },
    ],
  },
  {
    id: 'sagrada-familia',
    category: 'monument',
    region: { es: 'Cataluña · Barcelona', sk: 'Katalánsko · Barcelona', en: 'Catalonia · Barcelona' },
    era: { es: '1882 – presente', sk: '1882 – súčasnosť', en: '1882 – present' },
    title: { es: 'La Sagrada Familia', sk: 'Sagrada Família', en: 'La Sagrada Família' },
    subtitle: {
      es: 'Basílica modernista de Antoni Gaudí',
      sk: 'Gaudího modernistická bazilika',
      en: "Antoni Gaudí's Modernist Basilica",
    },
    accentColor: '#1E3A5F',
    vignettes: [
      {
        id: 'towers',
        image: './cards/sagrada-towers.jpg',
        title: { es: 'Torres y Pináculos', sk: 'Veže a pinakly', en: 'Towers & Pinnacles' },
        caption: {
          es: '18 torres previstas en total, coronadas con mosaicos de cerámica veneciana.',
          sk: 'Celkovo 18 plánovaných veží zakončených benátskou mozaikou.',
          en: '18 planned towers in total, crowned with colorful Venetian ceramic mosaics.',
        },
      },
      {
        id: 'salamander',
        image: './cards/sagrada-salamander.jpg',
        title: { es: 'El Dragón de Trencadís', sk: 'Drak z trencadís', en: 'Trencadís Dragon' },
        caption: {
          es: 'Técnica de mosaico con trozos de cerámica rota, firma inconfundible de Gaudí.',
          sk: 'Mozaika z rozbitých keramických črepov, Gaudího nezameniteľný podpis.',
          en: 'Mosaic technique using broken ceramic pieces, Gaudí’s unmistakable signature.',
        },
      },
      {
        id: 'facade',
        image: './cards/sagrada-facade.jpg',
        title: { es: 'Fachada y Naturaleza', sk: 'Fasáda a príroda', en: 'Facade & Nature' },
        caption: {
          es: 'Columnas que imitan troncos de bosque y palmeras mediterráneas al frente.',
          sk: 'Stĺpy napodobňujúce lesné kmene a stredomorské palmy v popredí.',
          en: 'Columns resembling forest trunks and Mediterranean palm trees in front.',
        },
      },
    ],
    questions: [
      {
        number: 1,
        question: {
          es: '¿Cuántas torres tendrá en total la Sagrada Familia al completarse?',
          sk: 'Koľko veží bude mať Sagrada Família celkovo po dokončení?',
          en: 'How many towers will the Sagrada Família have in total when finished?',
        },
        answer: { es: '18 torres', sk: '18 veží', en: '18 towers' },
      },
      {
        number: 2,
        question: {
          es: '¿Cómo se llama la técnica de mosaico con trozos de cerámica rota?',
          sk: 'Ako sa volá mozaiková technika z rozbitých keramických črepov?',
          en: 'What is the name of the mosaic technique using broken ceramic tiles?',
        },
        answer: { es: 'Trencadís', sk: 'Trencadís', en: 'Trencadís' },
      },
      {
        number: 3,
        question: {
          es: '¿Qué animal de mosaico aparece en la segunda viñeta?',
          sk: 'Aké mozaikové zviera je na druhom obrázku?',
          en: 'What mosaic creature appears in the second vignette?',
        },
        answer: { es: 'El dragón / salamandra de Gaudí', sk: 'Gaudího drak / salamandra', en: "Gaudí's dragon / salamander" },
      },
      {
        number: 4,
        question: {
          es: '¿En qué año se inició la construcción del templo?',
          sk: 'V ktorom roku sa začala výstavba chrámu?',
          en: 'In what year did construction of the basilica begin?',
        },
        answer: { es: '1882', sk: '1882', en: '1882' },
      },
      {
        number: 5,
        question: {
          es: '¿Qué árboles mediterráneos acompañan la fachada?',
          sk: 'Aké stredomorské stromy sprevádzajú fasádu?',
          en: 'Which Mediterranean trees accompany the facade?',
        },
        answer: { es: 'Palmeras', sk: 'Palmy', en: 'Palm trees' },
      },
      {
        number: 6,
        question: {
          es: '¿Quién fue el genial arquitecto que asumió la obra en 1883?',
          sk: 'Kto bol geniálny architekt, ktorý prevzal dielo v roku 1883?',
          en: 'Who was the genius architect who took over the project in 1883?',
        },
        answer: { es: 'Antoni Gaudí', sk: 'Antoni Gaudí', en: 'Antoni Gaudí' },
      },
    ],
  },
  {
    id: 'cervantes',
    category: 'person',
    region: { es: 'Alcalá · La Mancha', sk: 'Alcalá · La Mancha', en: 'Alcalá · La Mancha' },
    era: { es: '1547 – 1616', sk: '1547 – 1616', en: '1547 – 1616' },
    title: { es: 'Miguel de Cervantes', sk: 'Miguel de Cervantes', en: 'Miguel de Cervantes' },
    subtitle: {
      es: 'Autor de Don Quijote de la Mancha',
      sk: 'Autor Dona Quijota de la Mancha',
      en: 'Author of Don Quixote',
    },
    accentColor: '#B85D19',
    vignettes: [
      {
        id: 'mills',
        image: './cards/cervantes-mills.jpg',
        title: { es: 'Los Molinos de Viento', sk: 'Veterné mlyny', en: 'The Windmills' },
        caption: {
          es: 'Molinos blancos manchegos que Don Quijote confundió con gigantes.',
          sk: 'Biele mlyny z La Manche, ktoré si Don Quijote pomýlil s obrami.',
          en: 'White windmills in La Mancha that Don Quixote mistook for giants.',
        },
      },
      {
        id: 'sancho',
        image: './cards/cervantes-sancho.jpg',
        title: { es: 'Sancho Panza y Rucio', sk: 'Sancho Panza a Rucio', en: 'Sancho Panza & Rucio' },
        caption: {
          es: 'Fiel escudero montado en su burro gris Rucio con bota de vino.',
          sk: 'Verný zbrojnoš na sivom somárikovi Ruciovi s koženým mechom na víno.',
          en: 'Loyal squire riding his grey donkey Rucio with a leather wine bota.',
        },
      },
      {
        id: 'quill',
        image: './cards/cervantes-quill.jpg',
        title: { es: 'Pluma y Don Quijote (1605)', sk: 'Brko a Don Quijote (1605)', en: 'Quill & Don Quixote (1605)' },
        caption: {
          es: 'Publicado en 1605, considerado la primera novela moderna de la historia.',
          sk: 'Vydaný v roku 1605, považovaný za prvý moderný román v histórii.',
          en: 'Published in 1605, widely regarded as the first modern novel in history.',
        },
      },
    ],
    questions: [
      {
        number: 1,
        question: {
          es: '¿En qué año se publicó la primera parte de Don Quijote?',
          sk: 'V ktorom roku vyšiel prvý diel Dona Quijota?',
          en: 'In what year was the first part of Don Quixote published?',
        },
        answer: { es: '1605', sk: '1605', en: '1605' },
      },
      {
        number: 2,
        question: {
          es: '¿Cómo se llama el burro de Sancho Panza?',
          sk: 'Ako sa volá somárik Sancha Panzu?',
          en: "What is the name of Sancho Panza's donkey?",
        },
        answer: { es: 'Rucio', sk: 'Rucio', en: 'Rucio' },
      },
      {
        number: 3,
        question: {
          es: '¿Con qué confunde Don Quijote a los molinos de viento?',
          sk: 'S čím si Don Quijote pomýlil veterné mlyny?',
          en: 'What does Don Quixote mistake the windmills for?',
        },
        answer: { es: 'Con gigantes', sk: 'S obrami', en: 'Giants' },
      },
      {
        number: 4,
        question: {
          es: '¿Qué lleva Sancho Panza colgado para beber?',
          sk: 'Čo má Sancho Panza zavesené na pitie?',
          en: 'What drinking flask is Sancho Panza carrying?',
        },
        answer: { es: 'Una bota de vino', sk: 'Kožený mech na víno', en: 'A leather wine bota' },
      },
      {
        number: 5,
        question: {
          es: '¿Por qué batalla fue apodado Cervantes «El Manco de Lepanto»?',
          sk: 'Po ktorej bitke dostal Cervantes prezývku „Jednoruký z Lepanta“?',
          en: 'After which battle was Cervantes nicknamed "The One-handed of Lepanto"?',
        },
        answer: { es: 'Batalla de Lepanto (1571)', sk: 'Bitka pri Lepante (1571)', en: 'Battle of Lepanto (1571)' },
      },
      {
        number: 6,
        question: {
          es: '¿En qué ciudad madrileña nació Cervantes?',
          sk: 'V ktorom meste sa narodil Cervantes?',
          en: 'In which city was Cervantes born?',
        },
        answer: { es: 'Alcalá de Henares', sk: 'Alcalá de Henares', en: 'Alcalá de Henares' },
      },
    ],
  },
  {
    id: 'toledo',
    category: 'city',
    region: { es: 'Castilla-La Mancha', sk: 'Kastília-La Mancha', en: 'Castilla-La Mancha' },
    era: { es: 'Capital visigoda e imperial', sk: 'Vizigótske a cisárske sídlo', en: 'Visigothic & Imperial Capital' },
    title: { es: 'Toledo', sk: 'Toledo', en: 'Toledo' },
    subtitle: {
      es: 'La Ciudad de las Tres Culturas',
      sk: 'Mesto troch kultúr',
      en: 'City of the Three Cultures',
    },
    accentColor: '#9A5B25',
    vignettes: [
      {
        id: 'alcazar',
        image: './cards/toledo-alcazar.jpg',
        title: { es: 'El Alcázar y Catedral', sk: 'Alcázar a katedrála', en: 'The Alcázar & Cathedral' },
        caption: {
          es: 'Fortaleza imperial de cuatro torres que corona el punto más alto de la ciudad.',
          sk: 'Cisárska pevnosť so 4 vežami, ktorá dominuje najvyššiemu bodu mesta.',
          en: 'Four-towered imperial fortress crowning the highest point of the hill.',
        },
      },
      {
        id: 'bridge',
        image: './cards/toledo-bridge.jpg',
        title: { es: 'Puente y Río Tajo', sk: 'Most a rieka Tajo', en: 'Bridge & Tagus River' },
        caption: {
          es: 'El río Tajo envuelve la colina como un foso natural defensivo.',
          sk: 'Rieka Tajo obteká kopec ako prirodzená obranná vodná priekopa.',
          en: 'The Tagus River wraps around the hill like a natural defensive moat.',
        },
      },
      {
        id: 'city',
        image: './cards/toledo.jpg',
        title: { es: 'Tres Culturas y Espadas', sk: 'Tri kultúry a meče', en: 'Three Cultures & Swords' },
        caption: {
          es: 'Convivencia histórica de cristianos, judíos y musulmanes; cuna del acero damasquinado.',
          sk: 'Historické spolunažívanie kresťanov, židov a moslimov; kolíska damascénskej ocele.',
          en: 'Historical coexistence of Christians, Jews & Muslims; home of damascene steel.',
        },
      },
    ],
    questions: [
      {
        number: 1,
        question: {
          es: '¿Qué río rodea la colina de Toledo como un foso natural?',
          sk: 'Ktorá rieka obteká kopec mesta Toledo?',
          en: 'Which river wraps around the hill of Toledo like a moat?',
        },
        answer: { es: 'El río Tajo', sk: 'Rieka Tajo', en: 'The Tagus River (Tajo)' },
      },
      {
        number: 2,
        question: {
          es: '¿Cuántas torres tiene el gran edificio del Alcázar?',
          sk: 'Koľko veží má budova Alcázaru?',
          en: 'How many towers does the Alcázar building have?',
        },
        answer: { es: 'Cuatro torres', sk: 'Štyri veže', en: 'Four towers' },
      },
      {
        number: 3,
        question: {
          es: '¿Qué tres religiones dieron a Toledo el apodo de «Ciudad de las Tres Culturas»?',
          sk: 'Ktoré tri náboženstvá dali Toledu prezývku „Mesto troch kultúr“?',
          en: 'Which three religions gave Toledo the nickname "City of Three Cultures"?',
        },
        answer: {
          es: 'Cristiana, judía y musulmana',
          sk: 'Kresťanstvo, judaizmus a islam',
          en: 'Christian, Jewish, and Muslim',
        },
      },
      {
        number: 4,
        question: {
          es: '¿Qué famoso pintor cretense residió y pintó Toledo en el siglo XVI?',
          sk: 'Ktorý slávny krétsky maliar žil a maľoval v Tolede v 16. storočí?',
          en: 'Which famous Cretan painter lived and painted Toledo in the 16th century?',
        },
        answer: { es: 'El Greco', sk: 'El Greco', en: 'El Greco' },
      },
      {
        number: 5,
        question: {
          es: '¿Por qué producto artesanal de metal es famosa la ciudad en todo el mundo?',
          sk: 'Akým kovovým remeselným výrobkom je mesto svetoznáme?',
          en: 'For which handcrafted metal product is the city world-famous?',
        },
        answer: { es: 'Las espadas y acero toledano', sk: 'Meče a toledská oceľ', en: 'Toledo steel and swords' },
      },
      {
        number: 6,
        question: {
          es: '¿De qué pueblo germánico fue capital Toledo antes de la invasión árabe?',
          sk: 'Ktorého germánskeho národa bolo Toledo hlavným mestom pred arabskou inváziou?',
          en: 'Of which Germanic people was Toledo the capital before the Moorish invasion?',
        },
        answer: { es: 'Los visigodos', sk: 'Vizigóti', en: 'The Visigoths' },
      },
    ],
  },
  {
    id: 'segovia',
    category: 'monument',
    region: { es: 'Castilla y León · Segovia', sk: 'Kastília a León · Segovia', en: 'Castile and León · Segovia' },
    era: { es: 'Siglo I–II d. C.', sk: '1.–2. storočie n. l.', en: '1st–2nd century AD' },
    title: { es: 'Acueducto de Segovia', sk: 'Akvadukt v Segovii', en: 'Aqueduct of Segovia' },
    subtitle: {
      es: 'Ingeniería romana sin argamasa',
      sk: 'Rímske inžinierstvo bez malty',
      en: 'Roman Engineering Without Mortar',
    },
    accentColor: '#2B5B84',
    vignettes: [
      {
        id: 'arches',
        image: './cards/segovia-arches.jpg',
        title: { es: '167 Arcos de Granito', sk: '167 žulových oblúkov', en: '167 Granite Arches' },
        caption: {
          es: 'Construido sin mortero ni cemento: los sillares se sostienen por puro equilibrio de pesos.',
          sk: 'Postavený bez malty a cementu: bloky držia len vďaka rovnováhe a vlastnej váhe.',
          en: 'Built without mortar or cement: blocks hold together solely by equilibrium and gravity.',
        },
      },
      {
        id: 'plaza',
        image: './cards/segovia-plaza.jpg',
        title: { es: 'Plaza del Azoguejo', sk: 'Námestie Azoguejo', en: 'Azoguejo Square' },
        caption: {
          es: 'Punto más imponente donde el acueducto alcanza su altura máxima de 28,5 metros.',
          sk: 'Najpôsobivejšie miesto, kde akvadukt dosahuje maximálnu výšku 28,5 metra.',
          en: 'Most dramatic section where the aqueduct reaches its peak height of 28.5 meters.',
        },
      },
      {
        id: 'overview',
        image: './cards/segovia.jpg',
        title: { es: 'Época del Imperio', sk: 'Obdobie Rímskej ríše', en: 'Roman Empire Era' },
        caption: {
          es: 'Transportaba agua desde el río Frío a 15 km de distancia hasta la ciudad alta.',
          sk: 'Privádzal vodu z rieky Frío vzdialenej 15 km až do horného mesta.',
          en: 'Conveyed water from the Frío River 15 km away straight into the upper fortified town.',
        },
      },
    ],
    questions: [
      {
        number: 1,
        question: {
          es: '¿Cuántos arcos de granito componen el acueducto?',
          sk: 'Koľko žulových oblúkov tvorí akvadukt?',
          en: 'How many granite arches make up the aqueduct?',
        },
        answer: { es: '167 arcos', sk: '167 oblúkov', en: '167 arches' },
      },
      {
        number: 2,
        question: {
          es: '¿Qué tipo de cemento o mortero une las piedras de granito?',
          sk: 'Aký typ cementu alebo malty spája žulové kamene?',
          en: 'What type of cement or mortar binds the granite stones together?',
        },
        answer: { es: 'Ninguno (se sostiene por equilibrio)', sk: 'Žiadny (držia rovnováhou)', en: 'None (held by gravity alone)' },
      },
      {
        number: 3,
        question: {
          es: '¿Cuál es la altura máxima alcanzada en la plaza del Azoguejo?',
          sk: 'Aká je maximálna výška na námestí Azoguejo?',
          en: 'What is the maximum height reached at Azoguejo Square?',
        },
        answer: { es: '28,5 metros', sk: '28,5 metra', en: '28.5 meters' },
      },
      {
        number: 4,
        question: {
          es: '¿Cuántos pisos de arcos superpuestos tiene en su tramo más alto?',
          sk: 'Koľko poschodí oblúkov nad sebou má v najvyššom úseku?',
          en: 'How many tiers of stacked arches does it have in its highest section?',
        },
        answer: { es: 'Dos pisos', sk: 'Dve poschodia', en: 'Two tiers' },
      },
      {
        number: 5,
        question: {
          es: '¿Qué civilización construyó este acueducto en el siglo I–II?',
          sk: 'Ktorá civilizácia postavila tento akvadukt v 1.–2. storočí?',
          en: 'Which civilization constructed this aqueduct in the 1st–2nd century?',
        },
        answer: { es: 'El Imperio romano', sk: 'Rímska ríša', en: 'The Roman Empire' },
      },
      {
        number: 6,
        question: {
          es: '¿Qué plato gastronómico típico segoviano se corta tradicionalmente con el borde de un plato?',
          sk: 'Aké typické segovijské jedlo sa tradične krája okrajom taniera?',
          en: 'Which traditional Segovian roast dish is famously cut using the edge of a plate?',
        },
        answer: { es: 'El cochinillo asado', sk: 'Pečené prasiatko (cochinillo)', en: 'Roast suckling pig (cochinillo)' },
      },
    ],
  },
  {
    id: 'velazquez',
    category: 'person',
    region: { es: 'Sevilla · Madrid', sk: 'Sevilla · Madrid', en: 'Seville · Madrid' },
    era: { es: '1599 – 1660', sk: '1599 – 1660', en: '1599 – 1660' },
    title: { es: 'Diego Velázquez', sk: 'Diego Velázquez', en: 'Diego Velázquez' },
    subtitle: {
      es: 'Maestro del Barroco y «Las Meninas»',
      sk: 'Majster baroka a „Las Meninas“',
      en: 'Baroque Master & "Las Meninas"',
    },
    accentColor: '#7A2E3A',
    vignettes: [
      {
        id: 'margarita',
        image: './cards/velazquez-margarita.jpg',
        title: { es: 'La Infanta Margarita', sk: 'Infantka Margaréta', en: 'Infanta Margarita' },
        caption: {
          es: 'Protagonista de «Las Meninas» (1656), vestida con guardainfante en el palacio real.',
          sk: 'Ústredná postava obrazu „Las Meninas“ (1656) v palácových šatách.',
          en: 'Centerpiece of "Las Meninas" (1656), wearing a wide hoop skirt in the royal palace.',
        },
      },
      {
        id: 'palette',
        image: './cards/velazquez-palette.jpg',
        title: { es: 'Paleta y Cruz Roja', sk: 'Paleta a červený kríž', en: 'Palette & Red Cross' },
        caption: {
          es: 'Pintor de cámara de Felipe IV y Caballero de la Orden de Santiago.',
          sk: 'Dvorný maliar Filipa IV. a rytier Rádu svätého Jakuba (Santiago).',
          en: 'Court painter to Philip IV and Knight of the Order of Santiago.',
        },
      },
      {
        id: 'hall',
        image: './cards/velazquez.jpg',
        title: { es: 'Museo del Prado', sk: 'Múzeum Prado', en: 'Prado Museum' },
        caption: {
          es: 'Su obra maestra se expone en Madrid y es admirada por su perspectiva e iluminación única.',
          sk: 'Jeho majstrovské dielo visí v Madride a je obdivované pre hru so svetlom a priestorom.',
          en: 'His masterpiece hangs in Madrid, celebrated worldwide for its mastery of perspective.',
        },
      },
    ],
    questions: [
      {
        number: 1,
        question: {
          es: '¿Cuál es el cuadro más célebre de Velázquez, pintado en 1656?',
          sk: 'Aký je najslávnejší Velázquezov obraz z roku 1656?',
          en: "What is Velázquez's most famous painting, completed in 1656?",
        },
        answer: { es: 'Las Meninas', sk: 'Las Meninas', en: 'Las Meninas' },
      },
      {
        number: 2,
        question: {
          es: '¿Cómo se llama la joven infanta protagonista del cuadro?',
          sk: 'Ako sa volá mladá infantka, hlavná postava obrazu?',
          en: 'What is the name of the young princess at the center of the painting?',
        },
        answer: { es: 'Infanta Margarita', sk: 'Infantka Margaréta', en: 'Infanta Margarita' },
      },
      {
        number: 3,
        question: {
          es: '¿De qué rey de España fue pintor oficial de la corte?',
          sk: 'Ktorého španielskeho kráľa bol dvorným maliarom?',
          en: 'Which Spanish king appointed him as official court painter?',
        },
        answer: { es: 'Felipe IV', sk: 'Filip IV.', en: 'Philip IV' },
      },
      {
        number: 4,
        question: {
          es: '¿Qué orden de caballería otorgó la cruz roja que luce en su pecho?',
          sk: 'Ktorý rytiersky rád mu udelil červený kríž na hrudi?',
          en: 'Which chivalric order granted him the red cross badge on his chest?',
        },
        answer: { es: 'Orden de Santiago', sk: 'Rád svätého Jakuba (Santiago)', en: 'Order of Santiago' },
      },
      {
        number: 5,
        question: {
          es: '¿En qué museo madrileño se expone «Las Meninas»?',
          sk: 'V ktorom madridskom múzeu sa nachádza obraz Las Meninas?',
          en: 'In which Madrid museum is "Las Meninas" exhibited?',
        },
        answer: { es: 'Museo del Prado', sk: 'Múzeum Prado', en: 'The Prado Museum' },
      },
      {
        number: 6,
        question: {
          es: '¿En qué ciudad andaluza nació Velázquez en 1599?',
          sk: 'V ktorom andalúzskom meste sa Velázquez narodil v roku 1599?',
          en: 'In which Andalusian city was Velázquez born in 1599?',
        },
        answer: { es: 'Sevilla', sk: 'Sevilla', en: 'Seville' },
      },
    ],
  },
  {
    id: 'camino-santiago',
    category: 'culture',
    region: { es: 'Norte de España · Galicia', sk: 'Sever Španielska · Galícia', en: 'Northern Spain · Galicia' },
    era: { es: 'Desde el siglo IX', sk: 'Od 9. storočia', en: 'Since the 9th c.' },
    title: { es: 'Camino de Santiago', sk: 'Svätojakubská cesta', en: 'Camino de Santiago' },
    subtitle: {
      es: 'Ruta milenaria de peregrinación',
      sk: 'Tisícročná pútnická cesta',
      en: 'Millenary Pilgrimage Route',
    },
    accentColor: '#4A6B4E',
    vignettes: [
      {
        id: 'shell',
        image: './cards/camino-shell.jpg',
        title: { es: 'La Concha de Vieira', sk: 'Mušľa hrebenatka', en: 'The Scallop Shell' },
        caption: {
          es: 'Hito de piedra con la concha dorada y flechas amarillas que guían el rumbo.',
          sk: 'Kamenný míľnik so zlatou mušľou a žltými šípkami, ktoré ukazujú smer.',
          en: 'Stone milepost with golden scallop shell and yellow arrows indicating the route.',
        },
      },
      {
        id: 'cathedral',
        image: './cards/camino-cathedral.jpg',
        title: { es: 'Catedral de Santiago', sk: 'Katedrála v Santiagu', en: 'Santiago Cathedral' },
        caption: {
          es: 'Fachada del Obradoiro y meta donde descansa la tumba del Apóstol Santiago.',
          sk: 'Baroková fasáda Obradoiro a cieľ, kde odpočíva hrob apoštola Jakuba.',
          en: 'Baroque Obradoiro facade and destination housing the tomb of St. James the Apostle.',
        },
      },
      {
        id: 'staff',
        image: './cards/camino-staff.jpg',
        title: { es: 'Bordón y Credencial', sk: 'Palica a pas pútnika', en: 'Staff & Credential' },
        caption: {
          es: 'Bastón de madera y credencial con sellos para obtener «La Compostela» (mín. 100 km a pie).',
          sk: 'Drevená palica a preukaz s pečiatkami na získanie certifikátu Compostela (min. 100 km pešo).',
          en: 'Walking staff and stamped pilgrim credential needed to claim "La Compostela" (min. 100 km).',
        },
      },
    ],
    questions: [
      {
        number: 1,
        question: {
          es: '¿Qué concha marina es el símbolo sagrado del peregrino?',
          sk: 'Aká morská mušľa je posvätným symbolom pútnika?',
          en: 'Which seashell is the sacred symbol of the pilgrim?',
        },
        answer: { es: 'La vieira', sk: 'Hrebenatka (vieira)', en: 'The scallop shell' },
      },
      {
        number: 2,
        question: {
          es: '¿De qué color son las flechas que marcan el sendero en mojones y muros?',
          sk: 'Akej farby sú šípky, ktoré značia trasu na kameňoch a stenách?',
          en: 'What color are the arrows painted on markers along the path?',
        },
        answer: { es: 'Amarillas', sk: 'Žlté', en: 'Yellow' },
      },
      {
        number: 3,
        question: {
          es: '¿Cuál es la distancia mínima a pie para obtener el certificado «La Compostela»?',
          sk: 'Aká je minimálna pešia vzdialenosť na získanie certifikátu Compostela?',
          en: 'What is the minimum walking distance required to receive the Compostela certificate?',
        },
        answer: { es: '100 kilómetros', sk: '100 kilometrov', en: '100 kilometers' },
      },
      {
        number: 4,
        question: {
          es: '¿En qué comunidad autónoma española culmina la ruta?',
          sk: 'V ktorom španielskom autonómnom spoločenstve sa cesta končí?',
          en: 'In which Spanish autonomous community does the route culminate?',
        },
        answer: { es: 'Galicia', sk: 'Galícia', en: 'Galicia' },
      },
      {
        number: 5,
        question: {
          es: '¿Cómo se llama la famosa plaza frente a la fachada principal de la catedral?',
          sk: 'Ako sa volá slávne námestie pred hlavnou fasádou katedrály?',
          en: 'What is the name of the grand plaza in front of the cathedral’s main facade?',
        },
        answer: { es: 'Plaza del Obradoiro', sk: 'Námestie Obradoiro', en: 'Plaza del Obradoiro' },
      },
      {
        number: 6,
        question: {
          es: '¿Qué plato marinero gallego tradicional con pimentón es típico probar?',
          sk: 'Aké tradičné galícijské jedlo s mletou paprikou pútnici radi ochutnajú?',
          en: 'Which iconic Galician seafood dish sprinkled with paprika is a must-try?',
        },
        answer: { es: 'Pulpo a la gallega (Pulpo á feira)', sk: 'Chobotnica po galícijsky (Pulpo á feira)', en: 'Galician octopus (Pulpo á feira)' },
      },
    ],
  },
  {
    id: 'mezquita-cordoba',
    category: 'monument',
    region: { es: 'Andalucía · Córdoba', sk: 'Andalúzia · Córdoba', en: 'Andalusia · Córdoba' },
    era: { es: 'Año 785 – s. XVI', sk: 'Rok 785 – 16. stor.', en: '785 AD – 16th c.' },
    title: { es: 'Mezquita de Córdoba', sk: 'Mešita v Córdobe', en: 'Mosque-Cathedral of Córdoba' },
    subtitle: {
      es: 'Bosque de arcos bicolores omeyas',
      sk: 'Les dvojfarebných umajjovských oblúkov',
      en: 'Forest of Two-Tone Umayyad Arches',
    },
    accentColor: '#A93226',
    vignettes: [
      {
        id: 'arches',
        image: './cards/mezquita-arches.jpg',
        title: { es: 'Arcos Rojos y Blancos', sk: 'Červeno-biele oblúky', en: 'Red & White Arches' },
        caption: {
          es: 'Más de 850 columnas de mármol, jaspe y granito con dobles arcos de herradura.',
          sk: 'Viac ako 850 stĺpov z mramoru, jaspisu a žuly s dvojitými podkovovitými oblúkmi.',
          en: 'Over 850 columns of marble, jasper & granite crowned by two-tiered horseshoe arches.',
        },
      },
      {
        id: 'lanterns',
        image: './cards/mezquita-lanterns.jpg',
        title: { es: 'Lámparas de Latón', sk: 'Mosadzné lampy', en: 'Brass Lanterns' },
        caption: {
          es: 'Lámparas colgantes que iluminaban los pasillos de oración del califato.',
          sk: 'Visiace lampy, ktoré osvetľovali modlitebné lode za čias kalifátu.',
          en: 'Hanging brass lamps that illuminated the prayer naves during the Caliphate.',
        },
      },
      {
        id: 'courtyard',
        image: './cards/mezquita-courtyard.jpg',
        title: { es: 'Patio de los Naranjos', sk: 'Pomarančovníkový dvor', en: 'Orange Tree Courtyard' },
        caption: {
          es: 'Patio de abluciones con fuentes y filas de naranjos junto al alminar.',
          sk: 'Nádvorie na rituálnu očistu s fontánami a radmi pomarančovníkov pri minarete.',
          en: 'Ablution courtyard lined with fountains and rows of fragrant orange trees by the minaret.',
        },
      },
    ],
    questions: [
      {
        number: 1,
        question: {
          es: '¿De qué dos colores alternos están pintadas las dovelas de los arcos?',
          sk: 'Akými dvoma striedavými farbami sú maľované oblúky?',
          en: 'What two alternating colors decorate the arches?',
        },
        answer: { es: 'Rojo y blanco', sk: 'Červená a biela', en: 'Red and white' },
      },
      {
        number: 2,
        question: {
          es: '¿Cuántas columnas aproximadamente sostienen la sala de oración?',
          sk: 'Koľko stĺpov približne podopiera modlitebnú sálu?',
          en: 'Approximately how many columns support the prayer hall?',
        },
        answer: { es: 'Más de 850 columnas', sk: 'Viac ako 850 stĺpov', en: 'Over 850 columns' },
      },
      {
        number: 3,
        question: {
          es: '¿Qué árboles dan nombre al patio exterior de la Mezquita?',
          sk: 'Aké stromy dali názov vonkajšiemu nádvoriu?',
          en: 'Which trees give the mosque’s outer courtyard its name?',
        },
        answer: { es: 'Los naranjos', sk: 'Pomarančovníky', en: 'Orange trees' },
      },
      {
        number: 4,
        question: {
          es: '¿Qué líder omeya inició su construcción en el año 785?',
          sk: 'Ktorý umajjovský vládca začal jej stavbu v roku 785?',
          en: 'Which Umayyad emir initiated its construction in 785 AD?',
        },
        answer: { es: 'Abderramán I', sk: 'Abd ar-Rahmán I.', en: 'Abd al-Rahman I' },
      },
      {
        number: 5,
        question: {
          es: '¿Qué río cruza el puente romano junto a la Mezquita?',
          sk: 'Ktorá rieka tečie pod rímskym mostom vedľa mešity?',
          en: 'Which river flows beneath the Roman bridge beside the Mosque?',
        },
        answer: { es: 'El río Guadalquivir', sk: 'Rieka Guadalquivir', en: 'The Guadalquivir River' },
      },
      {
        number: 6,
        question: {
          es: '¿Qué tipo de arco arquitectónico característico domina el templo?',
          sk: 'Aký typický architektonický oblúk dominuje chrámu?',
          en: 'Which characteristic architectural arch dominates the interior?',
        },
        answer: { es: 'Arco de herradura', sk: 'Podkovovitý oblúk', en: 'Horseshoe arch' },
      },
    ],
  },
  {
    id: 'isabel-catolica',
    category: 'person',
    region: { es: 'Corona de Castilla', sk: 'Kastílska koruna', en: 'Crown of Castile' },
    era: { es: '1451 – 1504', sk: '1451 – 1504', en: '1451 – 1504' },
    title: { es: 'Isabel I la Católica', sk: 'Izabela I. Katolícka', en: 'Isabella I of Castile' },
    subtitle: {
      es: 'Reina de Castilla y protagonista de 1492',
      sk: 'Kráľovná Kastílie a osobnosť roku 1492',
      en: 'Queen of Castile & Key Figure of 1492',
    },
    accentColor: '#8E44AD',
    vignettes: [
      {
        id: 'crown',
        image: './cards/isabel-crown.jpg',
        title: { es: 'Corona y Castilla', sk: 'Koruna a Kastília', en: 'Crown & Castile' },
        caption: {
          es: 'Corona real sobre cojín carmesí y fortalezas de piedra del Reino de Castilla.',
          sk: 'Kráľovská koruna na karmínovom vankúši a kamenné hrady Kastílskeho kráľovstva.',
          en: 'Royal crown on crimson cushion and stone fortress castles of the Kingdom of Castile.',
        },
      },
      {
        id: 'caravels',
        image: './cards/isabel-caravels.jpg',
        title: { es: 'Tres Carabelas (1492)', sk: 'Tri karavely (1492)', en: 'Three Caravels (1492)' },
        caption: {
          es: 'Patrocinó a Cristóbal Colón: la Pinta, la Niña y la Santa María zarparon en 1492.',
          sk: 'Podporila Krištofa Kolumba: lode Pinta, Niña a Santa María vyplávali v roku 1492.',
          en: 'Sponsored Christopher Columbus: the Pinta, Niña, and Santa María set sail in 1492.',
        },
      },
      {
        id: 'compass',
        image: './cards/isabel-compass.jpg',
        title: { es: 'Brújula y Mapa Marítimo', sk: 'Kompas a námorná mapa', en: 'Compass & Sea Chart' },
        caption: {
          es: 'Instrumentos náuticos de la era de los descubrimientos que conectaron los continentes.',
          sk: 'Námorné prístroje z obdobia objavov, ktoré prepojili kontinenty.',
          en: 'Nautical instruments from the Age of Discovery that connected the continents.',
        },
      },
    ],
    questions: [
      {
        number: 1,
        question: {
          es: '¿En qué año clave se financió el viaje de Colón y se culminó la Reconquista?',
          sk: 'V ktorom kľúčovom roku sa uskutočnila Kolumbova výprava?',
          en: 'In which pivotal year was Columbus’s voyage funded?',
        },
        answer: { es: '1492', sk: '1492', en: '1492' },
      },
      {
        number: 2,
        question: {
          es: '¿Con qué rey de Aragón contrajo matrimonio uniendo las dos coronas?',
          sk: 'S ktorým aragónskym kráľom sa vydala a spojila obe koruny?',
          en: 'Which King of Aragon did she marry, uniting the two crowns?',
        },
        answer: { es: 'Fernando II de Aragón', sk: 'Ferdinand II. Aragónsky', en: 'Ferdinand II of Aragon' },
      },
      {
        number: 3,
        question: {
          es: '¿Cuántas carabelas zarparon en la primera expedición hacia América?',
          sk: 'Koľko lodí vyplávalo na prvej výprave do Ameriky?',
          en: 'How many caravels sailed in the first voyage toward the Americas?',
        },
        answer: { es: 'Tres carabelas', sk: 'Tri lode', en: 'Three caravels' },
      },
      {
        number: 4,
        question: {
          es: '¿Cuáles eran los nombres de las tres naves de Colón?',
          sk: 'Aké boli mená troch Kolumbových lodí?',
          en: "What were the names of Columbus's three ships?",
        },
        answer: { es: 'La Pinta, la Niña y la Santa María', sk: 'Pinta, Niña a Santa María', en: 'Pinta, Niña, and Santa María' },
      },
      {
        number: 5,
        question: {
          es: '¿Qué título concedió el Papa Alejandro VI a Isabel y Fernando?',
          sk: 'Aký čestný titul udelil pápež Alexander VI. Izabele a Ferdinandovi?',
          en: 'What title was granted by Pope Alexander VI to Isabella and Ferdinand?',
        },
        answer: { es: 'Los Reyes Católicos', sk: 'Katolícki králi', en: 'The Catholic Monarchs' },
      },
      {
        number: 6,
        question: {
          es: '¿Sobre qué objeto descansa la corona de oro en la viñeta?',
          sk: 'Na čom leží zlatá koruna na obrázku?',
          en: 'On what object does the golden crown rest in the vignette?',
        },
        answer: { es: 'Un cojín carmesí', sk: 'Karmínový vankúš', en: 'A crimson cushion' },
      },
    ],
  },
  {
    id: 'plaza-espana-sevilla',
    category: 'city',
    region: { es: 'Andalucía · Sevilla', sk: 'Andalúzia · Sevilla', en: 'Andalusia · Seville' },
    era: { es: '1929 (Exposición Iberoamericana)', sk: '1929 (Iberoamerická výstava)', en: '1929 (Ibero-American Expo)' },
    title: { es: 'Plaza de España (Sevilla)', sk: 'Plaza de España (Sevilla)', en: 'Plaza de España (Seville)' },
    subtitle: {
      es: 'Joya regionalista de Aníbal González',
      sk: 'Regionalistický skvost Aníbala Gonzáleza',
      en: "Aníbal González's Regionalist Gem",
    },
    accentColor: '#D48806',
    vignettes: [
      {
        id: 'palace',
        image: './cards/sevilla-palace.jpg',
        title: { es: 'Palacio y Torres Gemelas', sk: 'Palác a veže', en: 'Palace & Twin Towers' },
        caption: {
          es: 'Impresionante edificio semicircular de ladrillo visto con torres norte y sur de 74 metros.',
          sk: 'Pôsobivá polkruhová tehlová budova s dvoma vežami vysokými 74 metrov.',
          en: 'Semicircular exposed-brick palace flanked by twin north & south 74-meter towers.',
        },
      },
      {
        id: 'bridge',
        image: './cards/sevilla-bridge.jpg',
        title: { es: '4 Puentes de Cerámica', sk: '4 keramické mosty', en: '4 Ceramic Bridges' },
        caption: {
          es: 'Cruzan el canal y simbolizan los 4 antiguos reinos: Castilla, León, Aragón y Navarra.',
          sk: 'Preklenujú kanál a symbolizujú 4 historické kráľovstvá: Kastíliu, León, Aragónsko a Navarru.',
          en: 'Span the canal representing 4 ancient kingdoms: Castile, León, Aragon, and Navarre.',
        },
      },
      {
        id: 'boats',
        image: './cards/sevilla-boats.jpg',
        title: { es: 'Barcas de Remos y Azulejos', sk: 'Člny a kachličky', en: 'Rowboats & Tiled Benches' },
        caption: {
          es: 'Canal de 515 metros con barcas y 48 bancos de azulejos dedicados a cada provincia.',
          sk: '515-metrový kanál s člnmi a 48 kachličkovými lavičkami pre každú španielsku provinciu.',
          en: '515-meter canal with rowboats and 48 ceramic benches dedicated to each province.',
        },
      },
    ],
    questions: [
      {
        number: 1,
        question: {
          es: '¿Para qué gran evento de 1929 se construyó esta plaza monumental?',
          sk: 'Pre akú veľkú udalosť v roku 1929 bolo postavené toto námestie?',
          en: 'For which major 1929 event was this monumental square built?',
        },
        answer: { es: 'La Exposición Iberoamericana de 1929', sk: 'Iberoamerická výstava 1929', en: 'The 1929 Ibero-American Exposition' },
      },
      {
        number: 2,
        question: {
          es: '¿Qué simbolizan los cuatro puentes cerámicos que cruzan el canal?',
          sk: 'Čo symbolizujú štyri keramické mosty ponad kanál?',
          en: 'What do the four ceramic bridges over the canal symbolize?',
        },
        answer: {
          es: 'Los reinos de Castilla, León, Aragón y Navarra',
          sk: 'Kráľovstvá Kastília, León, Aragónsko a Navarra',
          en: 'Kingdoms of Castile, León, Aragon, and Navarre',
        },
      },
      {
        number: 3,
        question: {
          es: '¿Cuántos bancos de azulejos dedicados a las provincias españolas rodean la plaza?',
          sk: 'Koľko keramických lavičiek venovaných provinciám lemuje námestie?',
          en: 'How many tiled benches dedicated to Spanish provinces line the square?',
        },
        answer: { es: '48 bancos', sk: '48 lavičiek', en: '48 benches' },
      },
      {
        number: 4,
        question: {
          es: '¿Qué forma geométrica tiene el trazado de la plaza?',
          sk: 'Aký geometrický tvar má pôdorys námestia?',
          en: 'What geometric shape defines the square’s layout?',
        },
        answer: { es: 'Semicircular', sk: 'Polkruhový', en: 'Semicircular' },
      },
      {
        number: 5,
        question: {
          es: '¿Qué tipo de embarcaciones navegan por su canal?',
          sk: 'Aké plavidlá sa plavia po kanáli námestia?',
          en: 'What kind of boats sail on its canal?',
        },
        answer: { es: 'Barcas de remos', sk: 'Veslice', en: 'Rowboats' },
      },
      {
        number: 6,
        question: {
          es: '¿Quién fue el insigne arquitecto sevillano que diseñó la plaza?',
          sk: 'Kto bol slávny sevillský architekt, ktorý námestie navrhol?',
          en: 'Who was the renowned Sevillian architect who designed the plaza?',
        },
        answer: { es: 'Aníbal González', sk: 'Aníbal González', en: 'Aníbal González' },
      },
    ],
  },
];

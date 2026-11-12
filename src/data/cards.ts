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
    image: './cards/alhambra.jpg',
    accentColor: '#C84B31',
    facts: [
      {
        id: 'dynasty',
        label: { es: 'Dinastía', sk: 'Dynastia', en: 'Dynasty' },
        value: { es: 'Nazarí (Al-Ándalus)', sk: 'Nasridovci (Al-Andalus)', en: 'Nasrid (Al-Andalus)' },
      },
      {
        id: 'unesco',
        label: { es: 'Patrimonio UNESCO', sk: 'Pamiatka UNESCO', en: 'UNESCO Site' },
        value: { es: 'Desde 1984', sk: 'Od roku 1984', en: 'Since 1984' },
      },
      {
        id: 'courtyard',
        label: { es: 'Patio famoso', sk: 'Známe nádvorie', en: 'Famous court' },
        value: { es: 'Patio de los Leones', sk: 'Levie nádvorie', en: 'Court of the Lions' },
      },
      {
        id: 'meaning',
        label: { es: 'Nombre árabe', sk: 'Arabský názov', en: 'Arabic name' },
        value: { es: '«La Fortaleza Roja»', sk: '„Červená pevnosť“', en: '"The Red Fortress"' },
      },
    ],
    questions: [
      {
        number: 1,
        question: {
          es: '¿En qué ciudad andaluza se encuentra La Alhambra?',
          sk: 'V ktorom andalúzskom meste sa nachádza Alhambra?',
          en: 'In which Andalusian city is The Alhambra located?',
        },
        answer: { es: 'Granada', sk: 'Granada', en: 'Granada' },
      },
      {
        number: 2,
        question: {
          es: '¿Qué significa en árabe el nombre «Alhambra»?',
          sk: 'Čo znamená v arabčine názov „Alhambra“?',
          en: 'What does the Arabic name "Alhambra" mean?',
        },
        answer: { es: 'La Fortaleza Roja', sk: 'Červená pevnosť', en: 'The Red Fortress' },
      },
      {
        number: 3,
        question: {
          es: '¿Qué cordillera nevada se ve al fondo de la ilustración?',
          sk: 'Aké zasnežené pohorie vidno v pozadí ilustrácie?',
          en: 'Which snow-capped mountain range is visible in the background?',
        },
        answer: { es: 'Sierra Nevada', sk: 'Sierra Nevada', en: 'Sierra Nevada' },
      },
      {
        number: 4,
        question: {
          es: '¿Cómo se llama el patio de la fuente mostrado en la tarjeta?',
          sk: 'Ako sa volá nádvorie s fontánou zobrazené na karte?',
          en: 'What is the name of the fountain courtyard shown on the card?',
        },
        answer: { es: 'Patio de los Leones', sk: 'Levie nádvorie', en: 'Court of the Lions' },
      },
      {
        number: 5,
        question: {
          es: '¿En qué año fue declarada Patrimonio de la Humanidad por la UNESCO?',
          sk: 'V ktorom roku bola zapísaná do zoznamu UNESCO?',
          en: 'In what year was it declared a UNESCO World Heritage Site?',
        },
        answer: { es: '1984', sk: '1984', en: '1984' },
      },
      {
        number: 6,
        question: {
          es: '¿Qué dinastía musulmana construyó los palacios principales?',
          sk: 'Ktorá moslimská dynastia postavila hlavné paláce?',
          en: 'Which Muslim dynasty built the main palaces?',
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
      es: 'Basílica modernista de Gaudí',
      sk: 'Gaudího modernistická bazilika',
      en: "Gaudí's Modernist Basilica",
    },
    image: './cards/sagrada-familia.jpg',
    accentColor: '#1E3A5F',
    facts: [
      {
        id: 'architect',
        label: { es: 'Arquitecto', sk: 'Architekt', en: 'Architect' },
        value: { es: 'Antoni Gaudí (1883)', sk: 'Antoni Gaudí (1883)', en: 'Antoni Gaudí (1883)' },
      },
      {
        id: 'style',
        label: { es: 'Estilo', sk: 'Štýl', en: 'Style' },
        value: { es: 'Modernismo catalán', sk: 'Katalánsky modernizmus', en: 'Catalan Modernism' },
      },
      {
        id: 'towers',
        label: { es: 'Torres previstas', sk: 'Plánované veže', en: 'Planned towers' },
        value: { es: '18 torres en total', sk: 'Celkovo 18 veží', en: '18 towers in total' },
      },
      {
        id: 'start',
        label: { es: 'Primera piedra', sk: 'Základný kameň', en: 'First stone' },
        value: { es: 'Año 1882', sk: 'Rok 1882', en: 'Year 1882' },
      },
    ],
    questions: [
      {
        number: 1,
        question: {
          es: '¿Quién asumió el proyecto de la Sagrada Familia en 1883?',
          sk: 'Kto prevzal projekt Sagrady Famílie v roku 1883?',
          en: 'Who took over the Sagrada Família project in 1883?',
        },
        answer: { es: 'Antoni Gaudí', sk: 'Antoni Gaudí', en: 'Antoni Gaudí' },
      },
      {
        number: 2,
        question: {
          es: '¿En qué ciudad se encuentra esta basílica?',
          sk: 'V ktorom meste sa nachádza táto bazilika?',
          en: 'In which city is this basilica located?',
        },
        answer: { es: 'Barcelona', sk: 'Barcelona', en: 'Barcelona' },
      },
      {
        number: 3,
        question: {
          es: '¿Cuántas torres tendrá el templo una vez terminado?',
          sk: 'Koľko veží bude mať chrám po dokončení?',
          en: 'How many towers will the basilica have when completed?',
        },
        answer: { es: '18 torres', sk: '18 veží', en: '18 towers' },
      },
      {
        number: 4,
        question: {
          es: '¿En qué año se colocó la primera piedra?',
          sk: 'V ktorom roku bol položený základný kameň?',
          en: 'In what year was the first stone laid?',
        },
        answer: { es: '1882', sk: '1882', en: '1882' },
      },
      {
        number: 5,
        question: {
          es: '¿Qué árboles mediterráneos aparecen en primer plano de la imagen?',
          sk: 'Aké stredomorské stromy sú v popredí obrázka?',
          en: 'Which Mediterranean trees appear in the foreground?',
        },
        answer: { es: 'Palmeras', sk: 'Palmy', en: 'Palm trees' },
      },
      {
        number: 6,
        question: {
          es: '¿A qué movimiento artístico pertenece la obra?',
          sk: 'Do akého umeleckého smeru patrí táto stavba?',
          en: 'Which artistic movement does this work belong to?',
        },
        answer: { es: 'Modernismo catalán', sk: 'Katalánsky modernizmus', en: 'Catalan Modernism' },
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
    image: './cards/cervantes.jpg',
    accentColor: '#B85D19',
    facts: [
      {
        id: 'masterpiece',
        label: { es: 'Obra cumbre', sk: 'Hlavné dielo', en: 'Masterpiece' },
        value: { es: 'Don Quijote (1605)', sk: 'Don Quijote (1605)', en: 'Don Quixote (1605)' },
      },
      {
        id: 'nickname',
        label: { es: 'Apodo', sk: 'Prezývka', en: 'Nickname' },
        value: { es: 'Manco de Lepanto', sk: 'Jednoruký z Lepanta', en: 'One-handed of Lepanto' },
      },
      {
        id: 'birthplace',
        label: { es: 'Nacimiento', sk: 'Rodisko', en: 'Birthplace' },
        value: { es: 'Alcalá de Henares', sk: 'Alcalá de Henares', en: 'Alcalá de Henares' },
      },
      {
        id: 'companion',
        label: { es: 'Escudero fiel', sk: 'Verný zbrojnoš', en: 'Loyal squire' },
        value: { es: 'Sancho Panza', sk: 'Sancho Panza', en: 'Sancho Panza' },
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
          es: '¿En qué ciudad nació Miguel de Cervantes?',
          sk: 'V ktorom meste sa narodil Miguel de Cervantes?',
          en: 'In which city was Miguel de Cervantes born?',
        },
        answer: { es: 'Alcalá de Henares', sk: 'Alcalá de Henares', en: 'Alcalá de Henares' },
      },
      {
        number: 3,
        question: {
          es: '¿Por qué batalla recibió el apodo de «Manco de Lepanto»?',
          sk: 'Po ktorej bitke dostal prezývku „Jednoruký z Lepanta“?',
          en: 'After which battle did he earn the nickname "One-handed of Lepanto"?',
        },
        answer: { es: 'La batalla de Lepanto (1571)', sk: 'Bitka pri Lepante (1571)', en: 'The Battle of Lepanto (1571)' },
      },
      {
        number: 4,
        question: {
          es: '¿Qué construcciones blancas confunde Don Quijote con gigantes?',
          sk: 'Aké biele stavby si Don Quijote pomýlil s obrami?',
          en: 'What white structures does Don Quixote mistake for giants?',
        },
        answer: { es: 'Molinos de viento', sk: 'Veterné mlyny', en: 'Windmills' },
      },
      {
        number: 5,
        question: {
          es: '¿Cómo se llama el inseparable escudero de Don Quijote?',
          sk: 'Ako sa volá nerozlučný zbrojnoš Dona Quijota?',
          en: "What is the name of Don Quixote's loyal squire?",
        },
        answer: { es: 'Sancho Panza', sk: 'Sancho Panza', en: 'Sancho Panza' },
      },
      {
        number: 6,
        question: {
          es: '¿Qué dos objetos de escritura aparecen en primer plano de la tarjeta?',
          sk: 'Aké dva písacie predmety sú v popredí karty?',
          en: 'Which two writing objects appear in the foreground of the card?',
        },
        answer: { es: 'Un libro abierto y una pluma', sk: 'Otvorená kniha a brko', en: 'An open book and a quill' },
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
    image: './cards/toledo.jpg',
    accentColor: '#9A5B25',
    facts: [
      {
        id: 'cultures',
        label: { es: 'Tres culturas', sk: 'Tri kultúry', en: 'Three cultures' },
        value: { es: 'Cristiana, judía y musulmana', sk: 'Kresťanská, židovská, moslimská', en: 'Christian, Jewish & Muslim' },
      },
      {
        id: 'river',
        label: { es: 'Río que la rodea', sk: 'Rieka okolo mesta', en: 'Surrounding river' },
        value: { es: 'Río Tajo', sk: 'Rieka Tajo', en: 'Tagus River (Tajo)' },
      },
      {
        id: 'painter',
        label: { es: 'Pintor célebre', sk: 'Slávny maliar', en: 'Famous painter' },
        value: { es: 'El Greco (s. XVI)', sk: 'El Greco (16. stor.)', en: 'El Greco (16th c.)' },
      },
      {
        id: 'craft',
        label: { es: 'Artesanía', sk: 'Remeslo', en: 'Craft' },
        value: { es: 'Acero y espadas', sk: 'Oceľ a meče', en: 'Steel & swords' },
      },
    ],
    questions: [
      {
        number: 1,
        question: {
          es: '¿Qué río rodea en curva la colina de Toledo?',
          sk: 'Ktorá rieka obteká kopec mesta Toledo?',
          en: 'Which river curves around the hill of Toledo?',
        },
        answer: { es: 'El río Tajo', sk: 'Rieka Tajo', en: 'The Tagus River (Tajo)' },
      },
      {
        number: 2,
        question: {
          es: '¿Qué tres culturas convivieron históricamente en Toledo?',
          sk: 'Ktoré tri kultúry historicky spolunažívali v Tolede?',
          en: 'Which three cultures historically coexisted in Toledo?',
        },
        answer: {
          es: 'Cristiana, judía y musulmana',
          sk: 'Kresťanská, židovská a moslimská',
          en: 'Christian, Jewish, and Muslim',
        },
      },
      {
        number: 3,
        question: {
          es: '¿Qué gran fortaleza cuadrada corona lo alto de la ciudad en la imagen?',
          sk: 'Aká veľká štvorcová pevnosť korunuje vrchol mesta na obrázku?',
          en: 'Which large square fortress crowns the top of the city?',
        },
        answer: { es: 'El Alcázar de Toledo', sk: 'Alcázar v Tolede', en: 'The Alcázar of Toledo' },
      },
      {
        number: 4,
        question: {
          es: '¿Qué famoso pintor cretense vivió y trabajó en Toledo en el siglo XVI?',
          sk: 'Ktorý slávny krétsky maliar žil a tvoril v Tolede v 16. storočí?',
          en: 'Which famous Cretan painter lived and worked in Toledo in the 16th century?',
        },
        answer: { es: 'El Greco', sk: 'El Greco', en: 'El Greco' },
      },
      {
        number: 5,
        question: {
          es: '¿Por qué artesanía metalúrgica es mundialmente famosa Toledo?',
          sk: 'Akým kováčskym remeslom je Toledo svetoznáme?',
          en: 'For what metalworking craft is Toledo world-famous?',
        },
        answer: { es: 'Por su acero y espadas', sk: 'Svojou oceľou a mečmi', en: 'Its steel and swords' },
      },
      {
        number: 6,
        question: {
          es: '¿A qué comunidad autónoma pertenece Toledo hoy en día?',
          sk: 'Do ktorého autonómneho spoločenstva dnes Toledo patrí?',
          en: 'Which autonomous community does Toledo belong to today?',
        },
        answer: { es: 'Castilla-La Mancha', sk: 'Kastília-La Mancha', en: 'Castilla-La Mancha' },
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
    image: './cards/segovia.jpg',
    accentColor: '#2B5B84',
    facts: [
      {
        id: 'arches',
        label: { es: 'Arcos visibles', sk: 'Počet oblúkov', en: 'Visible arches' },
        value: { es: '167 arcos de granito', sk: '167 žulových oblúkov', en: '167 granite arches' },
      },
      {
        id: 'height',
        label: { es: 'Altura máxima', sk: 'Maximálna výška', en: 'Max height' },
        value: { es: '28,5 metros', sk: '28,5 metra', en: '28.5 meters' },
      },
      {
        id: 'technique',
        label: { es: 'Unión', sk: 'Spojenie', en: 'Construction' },
        value: { es: 'Sin mortero ni cemento', sk: 'Bez malty a cementu', en: 'No mortar or cement' },
      },
      {
        id: 'origin',
        label: { es: 'Época', sk: 'Obdobie', en: 'Era' },
        value: { es: 'Imperio romano (Trajano)', sk: 'Rímska ríša (Traján)', en: 'Roman Empire (Trajan)' },
      },
    ],
    questions: [
      {
        number: 1,
        question: {
          es: '¿Qué material une los sillares de granito del acueducto?',
          sk: 'Aký materiál spája žulové kvádre akvaduktu?',
          en: 'What material binds the granite blocks of the aqueduct together?',
        },
        answer: {
          es: 'Ninguno: se sostienen por su propio peso (sin argamasa)',
          sk: 'Žiadny: držia vlastnou váhou (bez malty)',
          en: 'None: they hold by gravity alone (no mortar)',
        },
      },
      {
        number: 2,
        question: {
          es: '¿Cuántos arcos de granito tiene el acueducto?',
          sk: 'Koľko žulových oblúkov má akvadukt?',
          en: 'How many granite arches does the aqueduct have?',
        },
        answer: { es: '167 arcos', sk: '167 oblúkov', en: '167 arches' },
      },
      {
        number: 3,
        question: {
          es: '¿Cuál es su altura máxima en la plaza del Azoguejo?',
          sk: 'Aká je jeho maximálna výška?',
          en: 'What is its maximum height?',
        },
        answer: { es: '28,5 metros', sk: '28,5 metra', en: '28.5 meters' },
      },
      {
        number: 4,
        question: {
          es: '¿Qué civilización construyó este monumento?',
          sk: 'Ktorá civilizácia postavila túto pamiatku?',
          en: 'Which civilization built this monument?',
        },
        answer: { es: 'El Imperio romano', sk: 'Rímska ríša', en: 'The Roman Empire' },
      },
      {
        number: 5,
        question: {
          es: '¿Cuántos niveles de arcos superpuestos se ven en el tramo alto de la imagen?',
          sk: 'Koľko poschodí oblúkov nad sebou vidno na obrázku?',
          en: 'How many tiers of stacked arches are visible in the tall section?',
        },
        answer: { es: 'Dos niveles', sk: 'Dve poschodia', en: 'Two tiers' },
      },
      {
        number: 6,
        question: {
          es: '¿En qué comunidad autónoma está Segovia?',
          sk: 'V ktorom autonómnom spoločenstve leží Segovia?',
          en: 'In which autonomous community is Segovia located?',
        },
        answer: { es: 'Castilla y León', sk: 'Kastília a León', en: 'Castile and León' },
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
    image: './cards/velazquez.jpg',
    accentColor: '#7A2E3A',
    facts: [
      {
        id: 'work',
        label: { es: 'Obra maestra', sk: 'Majstrovské dielo', en: 'Masterpiece' },
        value: { es: 'Las Meninas (1656)', sk: 'Las Meninas (1656)', en: 'Las Meninas (1656)' },
      },
      {
        id: 'king',
        label: { es: 'Pintor del rey', sk: 'Dvorný maliar', en: 'Court painter' },
        value: { es: 'Felipe IV', sk: 'Filipa IV.', en: 'King Philip IV' },
      },
      {
        id: 'museum',
        label: { es: 'Museo actual', sk: 'Dnešné múzeum', en: 'Current museum' },
        value: { es: 'Museo del Prado (Madrid)', sk: 'Múzeum Prado (Madrid)', en: 'Prado Museum (Madrid)' },
      },
      {
        id: 'birth',
        label: { es: 'Ciudad natal', sk: 'Rodné mesto', en: 'Birthplace' },
        value: { es: 'Sevilla (1599)', sk: 'Sevilla (1599)', en: 'Seville (1599)' },
      },
    ],
    questions: [
      {
        number: 1,
        question: {
          es: '¿Cuál es el cuadro más famoso de Velázquez, pintado en 1656?',
          sk: 'Aký je najslávnejší Velázquezov obraz z roku 1656?',
          en: "What is Velázquez's most famous painting, created in 1656?",
        },
        answer: { es: 'Las Meninas', sk: 'Las Meninas', en: 'Las Meninas' },
      },
      {
        number: 2,
        question: {
          es: '¿De qué rey español fue pintor de cámara?',
          sk: 'Ktorého španielskeho kráľa bol dvorným maliarom?',
          en: 'Which Spanish king did he serve as court painter?',
        },
        answer: { es: 'Felipe IV', sk: 'Filipa IV.', en: 'Philip IV' },
      },
      {
        number: 3,
        question: {
          es: '¿En qué museo madrileño se conserva «Las Meninas»?',
          sk: 'V ktorom madridskom múzeu je vystavený obraz Las Meninas?',
          en: 'In which Madrid museum is "Las Meninas" housed?',
        },
        answer: { es: 'Museo del Prado', sk: 'Múzeum Prado', en: 'The Prado Museum' },
      },
      {
        number: 4,
        question: {
          es: '¿En qué ciudad andaluza nació Velázquez en 1599?',
          sk: 'V ktorom andalúzskom meste sa Velázquez narodil v roku 1599?',
          en: 'In which Andalusian city was Velázquez born in 1599?',
        },
        answer: { es: 'Sevilla', sk: 'Sevilla', en: 'Seville' },
      },
      {
        number: 5,
        question: {
          es: '¿Qué movimiento artístico representa Velázquez?',
          sk: 'Ktorý umelecký smer reprezentuje Velázquez?',
          en: 'Which artistic movement does Velázquez represent?',
        },
        answer: { es: 'El Barroco (Siglo de Oro)', sk: 'Barok (Zlatý vek)', en: 'Baroque (Spanish Golden Age)' },
      },
      {
        number: 6,
        question: {
          es: '¿Qué herramientas de pintor se ven en primer plano de la ilustración?',
          sk: 'Aké maliarske nástroje vidno v popredí ilustrácie?',
          en: 'Which painting tools appear in the foreground of the illustration?',
        },
        answer: { es: 'Caballete, paleta y pinceles', sk: 'Maliarsky stojan, paleta a štetce', en: 'Easel, palette, and brushes' },
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
    image: './cards/camino-santiago.jpg',
    accentColor: '#4A6B4E',
    facts: [
      {
        id: 'symbol',
        label: { es: 'Símbolo', sk: 'Symbol', en: 'Symbol' },
        value: { es: 'Concha de vieira y flecha amarilla', sk: 'Hrebenatka a žltá šípka', en: 'Scallop shell & yellow arrow' },
      },
      {
        id: 'goal',
        label: { es: 'Meta final', sk: 'Cieľ cesty', en: 'Destination' },
        value: { es: 'Catedral de Santiago', sk: 'Katedrála v Santiagu', en: 'Santiago Cathedral' },
      },
      {
        id: 'certificate',
        label: { es: 'Acreditación', sk: 'Certifikát', en: 'Certificate' },
        value: { es: 'La Compostela (mín. 100 km a pie)', sk: 'Compostela (min. 100 km pešo)', en: 'Compostela (min. 100 km on foot)' },
      },
      {
        id: 'route',
        label: { es: 'Ruta más popular', sk: 'Najznámejšia trasa', en: 'Most popular route' },
        value: { es: 'Camino Francés', sk: 'Francúzska trasa', en: 'French Way' },
      },
    ],
    questions: [
      {
        number: 1,
        question: {
          es: '¿Qué concha marina es el símbolo universal del Camino de Santiago?',
          sk: 'Aká morská mušľa je univerzálnym symbolom Svätojakubskej cesty?',
          en: 'Which seashell is the universal symbol of the Camino de Santiago?',
        },
        answer: { es: 'La concha de vieira', sk: 'Mušľa hrebenatka', en: 'The scallop shell' },
      },
      {
        number: 2,
        question: {
          es: '¿Cuál es la distancia mínima a pie para obtener «La Compostela»?',
          sk: 'Aká je minimálna pešia vzdialenosť na získanie certifikátu Compostela?',
          en: 'What is the minimum walking distance to earn the Compostela?',
        },
        answer: { es: '100 kilómetros', sk: '100 kilometrov', en: '100 kilometers' },
      },
      {
        number: 3,
        question: {
          es: '¿En qué comunidad autónoma termina el Camino?',
          sk: 'V ktorom autonómnom spoločenstve sa cesta končí?',
          en: 'In which autonomous community does the Camino end?',
        },
        answer: { es: 'Galicia', sk: 'Galícia', en: 'Galicia' },
      },
      {
        number: 4,
        question: {
          es: '¿De qué color son las flechas que guían a los peregrinos?',
          sk: 'Akej farby sú šípky, ktoré vedú pútnikov?',
          en: 'What color are the arrows that guide pilgrims?',
        },
        answer: { es: 'Amarillas', sk: 'Žlté', en: 'Yellow' },
      },
      {
        number: 5,
        question: {
          es: '¿Cuál es la ruta más transitada del Camino?',
          sk: 'Ktorá trasa Svätojakubskej cesty je najnavštevovanejšia?',
          en: 'What is the most traveled route of the Camino?',
        },
        answer: { es: 'El Camino Francés', sk: 'Francúzska trasa (Camino Francés)', en: 'The French Way' },
      },
      {
        number: 6,
        question: {
          es: '¿Qué bastón tradicional lleva el peregrino junto al hito de piedra?',
          sk: 'Aký tradičný predmet má pútnik pri kamennom míľniku?',
          en: 'What traditional walking gear is beside the stone milepost?',
        },
        answer: { es: 'Un bordón (bastón de madera) y mochila', sk: 'Drevená palica a batoh', en: 'A wooden staff and backpack' },
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
    image: './cards/mezquita-cordoba.jpg',
    accentColor: '#A93226',
    facts: [
      {
        id: 'founder',
        label: { es: 'Inicio de obra', sk: 'Začiatok stavby', en: 'Construction started' },
        value: { es: '785 d. C. (Abderramán I)', sk: '785 n. l. (Abd ar-Rahmán I.)', en: '785 AD (Abd al-Rahman I)' },
      },
      {
        id: 'arches',
        label: { es: 'Diseño único', sk: 'Unikátny dizajn', en: 'Unique design' },
        value: { es: 'Doble arco rojo y blanco', sk: 'Dvojité červeno-biele oblúky', en: 'Red & white double arches' },
      },
      {
        id: 'columns',
        label: { es: 'Columnas', sk: 'Stĺpy', en: 'Columns' },
        value: { es: 'Más de 850 columnas', sk: 'Viac ako 850 stĺpov', en: 'Over 850 columns' },
      },
      {
        id: 'courtyard',
        label: { es: 'Patio exterior', sk: 'Vonkajšie nádvorie', en: 'Courtyard' },
        value: { es: 'Patio de los Naranjos', sk: 'Pomarančovníkové nádvorie', en: 'Courtyard of the Orange Trees' },
      },
    ],
    questions: [
      {
        number: 1,
        question: {
          es: '¿De qué dos colores son los arcos bicolores de la Mezquita?',
          sk: 'Akých dvoch farieb sú pruhované oblúky mešity?',
          en: 'What two colors are the striped arches of the Mosque-Cathedral?',
        },
        answer: { es: 'Rojo y blanco', sk: 'Červená a biela', en: 'Red and white' },
      },
      {
        number: 2,
        question: {
          es: '¿Quién inició su construcción en el año 785?',
          sk: 'Kto začal jej výstavbu v roku 785?',
          en: 'Who began its construction in 785 AD?',
        },
        answer: { es: 'Abderramán I', sk: 'Abd ar-Rahmán I.', en: 'Abd al-Rahman I' },
      },
      {
        number: 3,
        question: {
          es: '¿Cuántas columnas aproximadamente sostienen la sala de oración?',
          sk: 'Približne koľko stĺpov podopiera modlitebnú sálu?',
          en: 'Approximately how many columns support the prayer hall?',
        },
        answer: { es: 'Más de 850 columnas', sk: 'Viac ako 850 stĺpov', en: 'Over 850 columns' },
      },
      {
        number: 4,
        question: {
          es: '¿Qué árboles frutales dan nombre al patio exterior?',
          sk: 'Aké ovocné stromy dali názov vonkajšiemu nádvoriu?',
          en: 'Which fruit trees give the outer courtyard its name?',
        },
        answer: { es: 'Naranjos (Patio de los Naranjos)', sk: 'Pomarančovníky', en: 'Orange trees' },
      },
      {
        number: 5,
        question: {
          es: '¿Qué edificio cristiano se construyó en su interior en el siglo XVI?',
          sk: 'Aká kresťanská stavba bola postavená v jej vnútri v 16. storočí?',
          en: 'What Christian building was constructed inside it in the 16th century?',
        },
        answer: { es: 'Una catedral renacentista', sk: 'Renesančná katedrála', en: 'A Renaissance cathedral' },
      },
      {
        number: 6,
        question: {
          es: '¿Qué lámparas iluminan el interior en la ilustración?',
          sk: 'Aké lampy osvetľujú interiér na ilustrácii?',
          en: 'What kind of lamps illuminate the interior in the illustration?',
        },
        answer: { es: 'Lámparas colgantes de latón', sk: 'Visiace mosadzné lampy', en: 'Hanging brass lanterns' },
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
    image: './cards/isabel-catolica.jpg',
    accentColor: '#8E44AD',
    facts: [
      {
        id: 'marriage',
        label: { es: 'Unión dinástica', sk: 'Dynastický zväzok', en: 'Dynastic union' },
        value: { es: 'Con Fernando II de Aragón (1469)', sk: 'S Ferdinandom II. Aragónskym (1469)', en: 'With Ferdinand II of Aragon (1469)' },
      },
      {
        id: 'year1492',
        label: { es: 'Año clave', sk: 'Kľúčový rok', en: 'Key year' },
        value: { es: '1492: Granada y América', sk: '1492: Granada a Amerika', en: '1492: Granada & the Americas' },
      },
      {
        id: 'voyage',
        label: { es: 'Expedición', sk: 'Výprava', en: 'Expedition' },
        value: { es: 'Patrocinó a Cristóbal Colón', sk: 'Podporila Krištofa Kolumba', en: 'Sponsored Christopher Columbus' },
      },
      {
        id: 'title',
        label: { es: 'Título papal', sk: 'Pápežský titul', en: 'Papal title' },
        value: { es: 'Los Reyes Católicos', sk: 'Katolícki králi', en: 'The Catholic Monarchs' },
      },
    ],
    questions: [
      {
        number: 1,
        question: {
          es: '¿Con qué rey se casó Isabel I en 1469 uniendo Castilla y Aragón?',
          sk: 'S ktorým kráľom sa Izabela I. vydala v roku 1469 a spojila Kastíliu a Aragónsko?',
          en: 'Which king did Isabella I marry in 1469, uniting Castile and Aragon?',
        },
        answer: { es: 'Fernando II de Aragón', sk: 'Ferdinand II. Aragónsky', en: 'Ferdinand II of Aragon' },
      },
      {
        number: 2,
        question: {
          es: '¿Qué año marcó la toma de Granada y el primer viaje de Colón?',
          sk: 'Ktorý rok znamenal dobytie Granady a prvú Kolumbovu výpravu?',
          en: 'Which year marked the fall of Granada and Columbus’s first voyage?',
        },
        answer: { es: '1492', sk: '1492', en: '1492' },
      },
      {
        number: 3,
        question: {
          es: '¿Cuántos barcos navegan en el océano en la ilustración?',
          sk: 'Koľko lodí pláva po oceáne na ilustrácii?',
          en: 'How many ships are sailing on the ocean in the illustration?',
        },
        answer: { es: 'Tres carabelas', sk: 'Tri karavely', en: 'Three caravels' },
      },
      {
        number: 4,
        question: {
          es: '¿Qué título recibieron Isabel y Fernando por parte del Papa?',
          sk: 'Aký titul udelil pápež Izabele a Ferdinandovi?',
          en: 'What title were Isabella and Ferdinand granted by the Pope?',
        },
        answer: { es: 'Los Reyes Católicos', sk: 'Katolícki králi', en: 'The Catholic Monarchs' },
      },
      {
        number: 5,
        question: {
          es: '¿De qué reino fue reina titular Isabel I?',
          sk: 'Ktorého kráľovstva bola Izabela I. panovníčkou?',
          en: 'Of which kingdom was Isabella I the reigning queen?',
        },
        answer: { es: 'Reino de Castilla', sk: 'Kastílske kráľovstvo', en: 'Kingdom of Castile' },
      },
      {
        number: 6,
        question: {
          es: '¿Qué instrumentos de navegación aparecen junto a la corona en la tarjeta?',
          sk: 'Aké navigačné predmety sú vedľa koruny na karte?',
          en: 'Which navigation items appear next to the crown on the card?',
        },
        answer: { es: 'Una brújula y un mapa enrollado', sk: 'Kompas a zrolovaná mapa', en: 'A compass and a rolled map' },
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
    image: './cards/plaza-espana-sevilla.jpg',
    accentColor: '#D48806',
    facts: [
      {
        id: 'expo',
        label: { es: 'Inauguración', sk: 'Otvorenie', en: 'Inauguration' },
        value: { es: 'Exposición de 1929', sk: 'Výstava v roku 1929', en: '1929 Exposition' },
      },
      {
        id: 'shape',
        label: { es: 'Forma', sk: 'Tvar', en: 'Shape' },
        value: { es: 'Semicírculo (abrazo a América)', sk: 'Polkruh (objatie Ameriky)', en: 'Semicircle (embrace)' },
      },
      {
        id: 'bridges',
        label: { es: '4 puentes', sk: '4 mosty', en: '4 bridges' },
        value: { es: 'Antiguos reinos de España', sk: 'Bývalé španielske kráľovstvá', en: 'Ancient Spanish kingdoms' },
      },
      {
        id: 'benches',
        label: { es: 'Bancos de azulejos', sk: 'Kachličkové lavičky', en: 'Tiled benches' },
        value: { es: '48 provincias españolas', sk: '48 španielskych provincií', en: '48 Spanish provinces' },
      },
    ],
    questions: [
      {
        number: 1,
        question: {
          es: '¿Con motivo de qué evento de 1929 se construyó la Plaza de España de Sevilla?',
          sk: 'Pri príležitosti akej udalosti v roku 1929 bola postavená Plaza de España?',
          en: 'For which 1929 event was Plaza de España in Seville built?',
        },
        answer: {
          es: 'La Exposición Iberoamericana de 1929',
          sk: 'Iberoamerická výstava 1929',
          en: 'The 1929 Ibero-American Exposition',
        },
      },
      {
        number: 2,
        question: {
          es: '¿Qué representan los cuatro puentes que cruzan el canal?',
          sk: 'Čo symbolizujú štyri mosty ponad kanál?',
          en: 'What do the four bridges crossing the canal represent?',
        },
        answer: {
          es: 'Los antiguos reinos de España (Castilla, León, Aragón y Navarra)',
          sk: 'Bývalé kráľovstvá Španielska',
          en: 'The ancient kingdoms of Spain',
        },
      },
      {
        number: 3,
        question: {
          es: '¿Qué está representado en los bancos de cerámica alrededor de la plaza?',
          sk: 'Čo je vyobrazené na keramických lavičkách po obvode námestia?',
          en: 'What is depicted on the ceramic benches around the square?',
        },
        answer: {
          es: 'Las provincias de España (48 bancos)',
          sk: 'Španielske provincie (48 lavičiek)',
          en: 'The provinces of Spain (48 benches)',
        },
      },
      {
        number: 4,
        question: {
          es: '¿Qué forma geométrica tiene el edificio principal de la plaza?',
          sk: 'Aký geometrický tvar má hlavná budova námestia?',
          en: 'What geometric shape is the main building of the square?',
        },
        answer: { es: 'Semicircular', sk: 'Polkruhový', en: 'Semicircular' },
      },
      {
        number: 5,
        question: {
          es: '¿Qué embarcaciones aparecen navegando por el canal en la imagen?',
          sk: 'Aké plavidlá vidno na kanáli na obrázku?',
          en: 'What boats appear on the canal in the illustration?',
        },
        answer: { es: 'Barcas de remos de madera', sk: 'Drevené veslice', en: 'Wooden rowboats' },
      },
      {
        number: 6,
        question: {
          es: '¿Quién fue el arquitecto creador de la plaza?',
          sk: 'Kto bol architektom tohto námestia?',
          en: 'Who was the architect of the square?',
        },
        answer: { es: 'Aníbal González', sk: 'Aníbal González', en: 'Aníbal González' },
      },
    ],
  },
];

const quizData = [
    { id: 1, categoria: "Geografia I", difficoltà: "Media", testo: "Quale stato confina con la Cisgiordania a est, lungo la maggior parte del Fiume Giordano?", opzioni: ["A) Siria", "B) Egitto", "C) Giordania", "D) Libano"], corretta: "C" },
    { id: 2, categoria: "Geografia I", difficoltà: "Media", testo: "Qual è il punto più basso della Terra, un lago salato condiviso che si trova al confine tra la Cisgiordania e la Giordania?", opzioni: ["A) Mar Mediterraneo", "B) Mar Morto", "C) Mar Rosso", "D) Lago di Tiberiade"], corretta: "B" },
    { id: 3, categoria: "Geografia I", difficoltà: "Facile", testo: "Quale città è il centro urbano e la città più popolosa della Striscia di Gaza?", opzioni: ["A) Rafah", "B) Gaza City", "C) Khan Yunis", "D) Gerico"], corretta: "B" },
    { id: 4, categoria: "Geografia I", difficoltà: "Difficile", testo: "In quale regione geografica della Cisgiordania si trova la città di Betlemme?", opzioni: ["A) Valle del Giordano", "B) Samaria", "C) Giudea", "D) Striscia di Gaza"], corretta: "C" },
    { id: 5, categoria: "Geografia I", difficoltà: "Media", testo: "Quale caratteristica climatica è prevalente nella maggior parte dei Territori Palestinesi (Cisgiordania e Striscia di Gaza)?", opzioni: ["A) Clima tropicale", "B) Clima continentale", "C) Clima desertico", "D) Clima mediterraneo"], corretta: "D" },
    { id: 6, categoria: "Geografia I", difficoltà: "Facile", testo: "Quale corpo idrico forma il confine occidentale della Striscia di Gaza?", opzioni: ["A) Lago di Hula", "B) Fiume Giordano", "C) Mar Mediterraneo", "D) Mar Morto"], corretta: "C" },
    { id: 7, categoria: "Geografia I", difficoltà: "Difficile", testo: "La città di Gerico, l'oasi più antica del mondo, si trova in prossimità di quale grande valle o depressione geografica?", opzioni: ["A) Deserto del Negev", "B) Pianura costiera", "C) Valle del Giordano", "D) Altopiano della Samaria"], corretta: "C" },
    { id: 8, categoria: "Geografia I", difficoltà: "Difficile", testo: "Qual è la città palestinese situata più a nord nella Cisgiordania, nota come il capoluogo del governatorato della Samaria settentrionale?", opzioni: ["A) Hebron", "B) Ramallah", "C) Nablus", "D) Betlemme"], corretta: "C" },
    { id: 9, categoria: "Geografia I", difficoltà: "Media", testo: "Quale paese si trova al confine meridionale della Striscia di Gaza, separato dal valico di Rafah?", opzioni: ["A) Arabia Saudita", "B) Giordania", "C) Egitto", "D) Siria"], corretta: "C" },
    { id: 10, categoria: "Geografia II", difficoltà: "Media", testo: "Qual è la caratteristica geomorfologica distintiva della Cisgiordania (West Bank)?", opzioni: ["A) Vasta pianura alluvionale", "B) Un altopiano centrale prevalentemente montuoso e collinare.", "C) Catena vulcanica", "D) Profonda depressione desertica"], corretta: "B" },
    { id: 11, categoria: "Storia I", difficoltà: "Media", testo: "Sotto quale impero fu stabilita la provincia di *Syria Palaestina* nel II secolo d.C., dopo la Rivolta di Bar Kokh?", opzioni: ["A) Ottomano", "B) Bizantino", "C) Impero Romano", "D) Achemenide"], corretta: "C" },
    { id: 12, categoria: "Storia I", difficoltà: "Media", testo: "Dopo la divisione dell'Impero Romano, sotto quale impero rimase l'amministrazione la Palestina fino alla conquista araba del VII secolo?", opzioni: ["A) Impero Bizantino", "B) Romano d'Occidente", "C) Califfato Abasside", "D) Regno Latino"], corretta: "A" },
    { id: 13, categoria: "Storia I", difficoltà: "Media", testo: "Quale dinastia islamica governò la Palestina subito dopo la conquista araba nel 636 d.C., stabilendo Damasco come capitale del Califfato?", opzioni: ["A) Ayyubidi", "B) Omayyadi", "C) Mamelucchi", "D) Fatimidi"], corretta: "B" },
    { id: 14, categoria: "Storia I", difficoltà: "Media", testo: "Qual è il periodo storico in cui la regione della Palestina fu un campo di battaglia e sede di vari stati crociati?", opzioni: ["A) V a.C. - II a.C.", "B) XVII - XVIII secolo", "C) XI secolo - XIII secolo", "D) V - VII secolo"], corretta: "C" },
    { id: 15, categoria: "Storia I", difficoltà: "Media", testo: "Per quanto tempo la Palestina è rimasta ininterrottamente sotto il dominio dell'Impero Ottomano prima dello scioglimento post-Prima Guerra Mondiale?", opzioni: ["A) Circa 400 anni", "B) Circa 50 anni", "C) Circa 1000 anni", "D) Circa 100 anni"], corretta: "A" },
    { id: 16, categoria: "Storia I", difficoltà: "Media", testo: "Dopo la Prima Guerra Mondiale, l'amministrazione della Palestina fu assegnata a quale potenza europea attraverso un Mandato della Società delle Nazioni?", opzioni: ["A) Francia", "B) Italia", "C) Regno Unito", "D) Stati Uniti"], corretta: "C" },
    { id: 17, categoria: "Storia I", difficoltà: "Facile", testo: "Quale documento emesso dal governo britannico nel 1917 espresse il sostegno alla creazione di una 'dimora nazionale per il popolo ebraico' in Palestina?", opzioni: ["A) Accordi di Oslo", "B) Piano di spartizione", "C) Linea Verde", "D) Dichiarazione Balfour"], corretta: "D" },
    { id: 18, categoria: "Storia I", difficoltà: "Facile", testo: "Quale evento storico portò l'ONU a proporre la Risoluzione 181 (Piano di Spartizione) nel 1947?", opzioni: ["A)L'estenuante e lunga crisi di Suez", "B) La fine del Mandato del Regno Unito", "C) La sanguinosa guerra dei Sei Giorni", "D) L'istituzione dell'OLP dopo un lungo periodo"], corretta: "B" },
    { id: 19, categoria: "Storia II", difficoltà: "Media", testo: "Con quale nome è conosciuta in arabo la guerra del 1948 (conosciuta in Israele come Guerra d'Indipendenza), che portò all'esodo palestinese?", opzioni: ["A) Al-Nakba", "B) Intifada", "C) Al-Quds", "D) Al-Ghor"], corretta: "A" },
    { id: 20, categoria: "Storia II", difficoltà: "Facile", testo: "Quale territorio palestinese (non la Striscia di Gaza) fu annesso e governato dalla Giordania tra il 1948 e il 1967?", opzioni: ["A) Il Negev", "B) Il Golan", "C) Gerusalemme Est", "D) La Cisgiordania"], corretta: "D" },
    { id: 21, categoria: "Bandiera I", difficoltà: "Facile", testo: "Qual è il significato del colore verde nella bandiera palestinese?", opzioni: ["A) Il sangue dei martiri", "B) La prosperità", "C) L'unità", "D) Il passato glorioso"], corretta: "B" },
    { id: 22, categoria: "Bandiera I", difficoltà: "Media", testo: "Da quali tre colori sono composte le strisce orizzontali della bandiera palestinese?", opzioni: ["A) Rosso, Bianco, Verde", "B) Giallo, Blu, Rosso", "C) Nero, Bianco, Verde", "D) Nero, Rosso, Oro"], corretta: "C" },
    { id: 23, categoria: "Bandiera I", difficoltà: "Media", testo: "Quale forma geometrica, di colore rosso, si trova sul lato dell'asta della bandiera palestinese?", opzioni: ["A) Un quadrato", "B) Un cerchio", "C) Un rettangolo", "D) Un triangolo"], corretta: "D" },
    { id: 24, categoria: "Bandiera I", difficoltà: "Media", testo: "Il design della bandiera palestinese si basa direttamente su quale vessillo storico che rappresentava l'unità araba?", opzioni: ["A) Califfato Omayyade", "B) La bandiera della Rivolta Araba", "C) Mandato Britannico", "D) OLP originale"], corretta: "B" },
    { id: 25, categoria: "Bandiera I", difficoltà: "Facile", testo: "Qual è il significato del colore nero nella bandiera palestinese?", opzioni: ["A) La purezza e la pace", "B) L'oppressione", "C) La fertilità", "D) L'Islam e la fede"], corretta: "B" },
    
{ 
        id: 26, 
        categoria: "Storia Palestina", 
        difficoltà: "Media", 
        testo: "Da quale bandiera storica la Bandiera della Palestina trae direttamente ispirazione, con la combinazione di colori panarabi?", 
        opzioni: ["A) La Bandiera del Califfato Ottomano", "B) La Bandiera della Rivolta Araba", "C) La Bandiera del Regno d'Egitto", "D) La Bandiera della Lega Araba"], 
        corretta: "B"
  
    },
    { 
        id: 27, 
        categoria: "Storia Palestina", 
        difficoltà: "Media", 
        testo: "Quale organizzazione ha adottato ufficialmente questa bandiera nel 1964, rendendola il simbolo del popolo palestinese?", 
        opzioni: ["A) L'Autorità Palestinese (ANP)", "B) Il Movimento di Liberazione Nazionale Palestinese (Fatah)", "C) L'Organizzazione per la Liberazione della Palestina (OLP)", "D) Il Consiglio Nazionale Palestinese (CNP)"], 
        corretta: "C" 
  
    },
    { 
        id: 28, 
        categoria: "Storia Palestina", 
        difficoltà: "Media", 
        testo: "Chi è accreditato di aver disegnato la bandiera originale della Rivolta Araba, che è il modello per la bandiera palestinese moderna?", 
        opzioni: ["A) Yasser Arafat", "B) Sharif Hussein bin Ali", "C) Haj Amin al-Husseini", "D) Faisal I dell'Iraq"], 
        corretta: "B"
  
    },
    { 
        id: 29, 
        categoria: "Storia Palestina", 
        difficoltà: "Media", 
        testo: "Cosa simboleggia il triangolo rosso nella bandiera della Palestina?", 
        opzioni: ["A) Il Coraggio del popolo palestinese", "B) La Dinastia Fatimide e Gerusalemme", "C) Il sangue versato per l'indipendenza e la dinastia hashemita", "D) L'Unità dei quattro popoli arabi principali"], 
        corretta: "C" 
  
    },
    { 
        id: 30, 
        categoria: "Storia Palestina", 
        difficoltà: "Media", 
        testo: "Quale dei quattro colori panarabi sulla bandiera è tradizionalmente associato al Califfato Omayyade?", 
        opzioni: ["A) Il Verde", "B) Il Nero", "C) Il Rosso", "D) Il Bianco"], 
        corretta: "D" 
  
    },
    { 
        id: 31, 
        categoria: "Storia Palestina", 
        difficoltà: "Media", 
        testo: "A quale Califfato è tradizionalmente associato il colore Nero, la striscia superiore della bandiera palestinese?", 
        opzioni: ["A) Il Califfato Omayyade", "B) Il Califfato Abbaside", "C) Il Califfato Fatimide", "D) Il Sultanato Ayyubide"], 
        corretta: "B"
  
    },
    { 
        id: 32, 
        categoria: "Storia Palestina", 
        difficoltà: "Media", 
        testo: "Quando è stata presentata per la prima volta la bandiera (nella sua forma originale della Rivolta Araba) al mondo?", 
        opzioni: ["A) 1948", "B) 1920", "C) 1916", "D) 1905"], 
        corretta: "C" 
  
    },
    { 
        id: 33, 
        categoria: "Storia Palestina", 
        difficoltà: "Media", 
        testo: "Cosa simboleggia il verde, la striscia inferiore della bandiera, secondo la simbologia panaraba?", 
        opzioni: ["A) Il Mar Mediterraneo e il cielo", "B) La Ricchezza mineraria del sottosuolo", "C) L'Esercito per la Liberazione della Palestina (ELP)", "D) La dinastia Fatimide e la prosperità del suolo"], 
        corretta: "D"
  
    },
    { 
        id: 34, 
        categoria: "Storia Palestina", 
        difficoltà: "Media", 
        testo: "In quale periodo storico la bandiera palestinese fu temporaneamente vietata dalle autorità militari israeliane nei Territori Palestinesi?", 
        opzioni: ["A) Durante la Guerra del Kippur (1973)", "B) Durante gli anni della Prima Intifada (1987-1993)", "C) Immediatamente dopo la Guerra dei Sei Giorni (1967)", "D) Durante il Mandato Britannico (1920-1948)"], 
        corretta: "B" 
  
    },
    { 
        id: 35, 
        categoria: "Storia Palestina", 
        difficoltà: "Media", 
        testo: "Quale importante accordo internazionale nel 1993 portò all'uso pubblico della bandiera palestinese da parte dell'Autorità Palestinese?", 
        opzioni: ["A) Il Vertice di Camp David", "B) Gli Accordi di pace tra Giordania e Israele", "C) La Conferenza di Madrid", "D) Gli Accordi di Oslo"], 
        corretta: "D" 
  
    },
    { 
        id: 36, 
        categoria: "Storia Palestina", 
        difficoltà: "Media", 
        testo: "Qual è l'ordine corretto delle strisce orizzontali sulla bandiera della Palestina, partendo dall'alto?", 
        opzioni: ["A) Verde, Bianco, Nero", "B) Nero, Bianco, Verde", "C) Bianco, Nero, Verde", "D) Nero, Verde, Bianco"], 
        corretta: "B"
  
    },
    { 
        id: 37, 
        categoria: "Storia Palestina", 
        difficoltà: "Media", 
        testo: "Quale altra bandiera moderna ha utilizzato la combinazione esatta dei colori panarabi e il triangolo rosso, basandosi anch'essa sulla bandiera della Rivolta Araba?", 
        opzioni: ["A) La bandiera dell'Iraq", "B) La bandiera dell'Egitto", "C) La bandiera della Siria", "D) La bandiera della Giordania"], 
        corretta: "D"
  
    },
    { 
        id: 38, 
        categoria: "Storia Palestina", 
        difficoltà: "Media", 
        testo: "Come viene definito l'attuale status della bandiera palestinese presso le Nazioni Unite dal 2015?", 
        opzioni: ["A) Bandiera di uno stato membro fondatore", "B) Bandiera di uno stato membro a pieno titolo", "C) Bandiera di osservatore non membro", "D) Bandiera di un territorio amministrato fiduciariamente"], 
        corretta: "C"
  
    },
    { 
        id: 39, 
        categoria: "Storia Palestina", 
        difficoltà: "Media", 
        testo: "In quale anno la bandiera della Palestina è stata innalzata per la prima volta a New York presso la sede delle Nazioni Unite?", 
        opzioni: ["A) 1993", "B) 2012", "C) 2015", "D) 2000"], 
        corretta: "C" 
  
    },
    { 
        id: 40, 
        categoria: "Storia Palestina", 
        difficoltà: "Media", 
        testo: "Durante il periodo del Mandato Britannico, quale bandiera veniva ufficialmente utilizzata in Palestina?", 
        opzioni: ["A) La bandiera palestinese attuale (OLP)", "B) Una bandiera bianca con una Stella di David blu", "C) L'Union Jack britannica con un badge", "D) La bandiera panaraba con un simbolo locale"], 
        corretta: "C"
  
    },

 { id: 41, categoria: "Geografia III", difficoltà: "Difficile", testo: "Which major city in the West Bank is famous for the Cave of the Patriarchs (Ibrahimi Mosque) and is located in the southern hills?", opzioni: ["A) Ramallah", "B) Nablus", "C) Hebron", "D) Jenin"], corretta: "C" },
    { id: 42, categoria: "Geografia III", difficoltà: "Difficile", testo: "What is the official name, in English, for the Palestinian coastal territory situated along the Mediterranean Sea?", opzioni: ["A) The Western Coast", "B) The Gaza Shore", "C) The Gaza Strip", "D) The Mediterranean Exclave"], corretta: "C" },
    { id: 43, categoria: "Bandiera IV", difficoltà: "Difficile", testo: "Which color in the Palestinian flag symbolizes the Umayyad Caliphate and a period of Arab glory and resilience?", opzioni: ["A) Red", "B) White", "C) Black", "D) Green"], corretta: "C" },
    { id: 44, categoria: "Geografia III", difficoltà: "Difficile", testo: "The Palestinian city of Ramallah serves as the *de facto* administrative capital and is generally located in which part of the West Bank?", opzioni: ["A) North", "B) Central", "C) South", "D) East"], corretta: "B" },
    { id: 45, categoria: "Bandiera IV", difficoltà: "Difficile", testo: "What do the four colors (Black, White, Green, and Red) of the Palestinian flag represent collectively?", opzioni: ["A) The four sacred cities", "B) Pan-Arab colors and unity", "C) The four seasons", "D) The four major religious groups"], corretta: "B" },
    { id: 46, categoria: "Geografia IV", difficoltà: "Media", testo: "The highest point in the West Bank is generally considered to be near which city or geographic region?", opzioni: ["A) Jericho", "B) Bethlehem", "C) Gaza", "D) Hebron"], corretta: "D" },
    { id: 47, categoria: "Geografia IV", difficoltà: "Facile", testo: "What separates the major Palestinian population centers of the West Bank (Cisgiordania) from the Gaza Strip?", opzioni: ["A) The Jordan River", "B) The Dead Sea", "C) Israeli territory", "D) The border with Jordan"], corretta: "C" },
    { id: 48, categoria: "Bandiera IV", difficoltà: "Facile", testo: "The white stripe in the Palestinian flag is horizontally positioned between which two colors?", opzioni: ["A) Red and Green", "B) Black and Green", "C) Red and Black", "D) Green and Red"], corretta: "B" },
    { id: 49, categoria: "Bandiera IV", difficoltà: "Facile", testo: "In vexillology, the three horizontal stripes combined with the triangle on the hoist side form a design known as a 'Tricolour' and a '...' ?", opzioni: ["A) Cross", "B) Banner", "C) Chevron", "D) Lozenge"], corretta: "C" },
    { id: 50, categoria: "Geografia IV", difficoltà: "Facile", testo: "Which physical feature marks the westernmost boundary of the Palestinian areas in the West Bank?", opzioni: ["A) The Jordan River", "B) The Dead Sea shoreline", "C) The mountain ridge", "D) The border with Jordan"], corretta: "C" },
    { id: 51, categoria: "Geografia V", difficoltà: "Difficile", testo: "La Cisgiordania è prevalentemente montuosa. Qual è il suo punto di accesso e di uscita verso il Mar Mediterraneo?", opzioni: ["A) Non ha accesso al Mar Mediterraneo", "B) Attraverso il Fiume Giordano", "C) Attraverso il valico di Rafah", "D) Il porto di Ashdod"], corretta: "A" },
    { id: 52, categoria: "Geografia V", difficoltà: "Media", testo: "Quale valle fertile si estende lungo il Fiume Giordano ed è l'area più bassa della Cisgiordania?", opzioni: ["A) La Valle del Giordano", "B) La Valle di Esdraelon", "C) La Valle di Ajalon", "D) La Valle di Sorek"], corretta: "A" },
    { id: 53, categoria: "Geografia V", difficoltà: "Media", testo: "Qual è il valico di frontiera tra la Striscia di Gaza e l'Egitto?", opzioni: ["A) Valico di Allenby", "B) Valico di Quneitra", "C) Valico di Erez", "D) Valico di Rafah"], corretta: "D" },
    { id: 54, categoria: "Geografia V", difficoltà: "Difficile", testo: "Quale città della Cisgiordania è famosa per la Chiesa della Natività e si trova a sud di Gerusalemme?", opzioni: ["A) Hebron", "B) Nablus", "C) Betlemme", "D) Ramallah"], corretta: "C" },
    { id: 55, categoria: "Geografia V", difficoltà: "Facile", testo: "Quale corpo idrico, noto per la sua salinità, si trova all'estremità meridionale della Valle del Giordano?", opzioni: ["A) Lago di Hula", "B) Mar Morto", "C) Mar Rosso", "D) Golfo di Aqaba"], corretta: "B" },
    { id: 56, categoria: "Geografia V", difficoltà: "Difficile", testo: "La Striscia di Gaza si trova nella regione storica conosciuta come:", opzioni: ["A) Samaria", "B) Giudea", "C) L'Altopiano Centrale", "D) La Pianura Costiera Meridionale"], corretta: "D" },
    { id: 57, categoria: "Geografia V", difficoltà: "Difficile", testo: "Quale delle seguenti città è considerata il centro amministrativo dell'Autorità Nazionale Palestinese (ANP)?", opzioni: ["A) Gerico", "B) Ramallah", "C) Gaza City", "D) Hebron"], corretta: "B" },
    { id: 58, categoria: "Geografia V", difficoltà: "Media", testo: "Quali due catene montuose fiancheggiano la città di Nablus nella Cisgiordania settentrionale?", opzioni: ["A) Monte Scopus e Olivi", "B) Monte Carmel e Tabor", "C) Monte Nebo e Hermon", "D) Monte Ebal e Monte Garizim"], corretta: "D" },
    { id: 59, categoria: "Geografia V", difficoltà: "Facile", testo: "Qual è la caratteristica climatica specifica degli altopiani della Giudea e della Samaria?", opzioni: ["A) Inverni umidi, estati secche", "B) Clima desertico", "C) Clima tropicale", "D) Clima subartico"], corretta: "A" },
    { id: 60, categoria: "Geografia V", difficoltà: "Difficile", testo: "Il fiume Giordano sfocia in quale corpo idrico, che segna il punto finale del suo corso?", opzioni: ["A) Mar Mediterraneo", "B) Mar Morto", "C) Lago di Tiberiade", "D) Mar Rosso"], corretta: "B" },
    { id: 61, categoria: "Storia IV", difficoltà: "Facile", testo: "Dopo la conquista islamica del VII secolo, i Fatimidi, una dinastia sciita, governarono la Palestina da quale città principale nel X e XI secolo?", opzioni: ["A) Damasco", "B) Il Cairo", "C) Bagdad", "D) Istanbul"], corretta: "B" },
    { id: 62, categoria: "Storia IV", difficoltà: "Facile", testo: "Quale sultano curdo sconfisse i crociati e riconquistò Gerusalemme nel 1187?", opzioni: ["A) Baybars", "B) Saladino", "C) Tamerlano", "D) Altri"], corretta: "B" },
    { id: 63, categoria: "Storia IV", difficoltà: "Facile", testo: "L'Impero Ottomano conquistò la Palestina sconfiggendo quale potenza nel 1517?", opzioni: ["A) Impero Bizantino", "B) Mamelucchi d'Egitto", "C) Impero Safavide", "D) Il Regno Latino"], corretta: "B" },
    { id: 64, categoria: "Storia V", difficoltà: "Facile", testo: "Quale fu il nome del piano proposto dalle Nazioni Unite nel 1947 per dividere la Palestina del Mandato in due stati?", opzioni: ["A) Risoluzione 181 (Piano di Spartizione)", "B) Piano della Commissione Peel", "C) Accordo Sykes-Picot", "D) Dichiarazione di Londra"], corretta: "A" },
    { id: 65, categoria: "Storia V", difficoltà: "Media", testo: "La 'Grande Rivolta Araba' contro il Mandato Britannico e l'immigrazione ebraica si svolse tra quali anni?", opzioni: ["A) 1917–1920", "B) 1956–1957", "C) 1936–1939", "D) 1967–1968"], corretta: "C" },
    { id: 66, categoria: "Storia V", difficoltà: "Media", testo: "Quale evento storico portò Israele a conquistare e occupare la Cisgiordania e la Striscia di Gaza nel 1967?", opzioni: ["A) La Guerra del Kippur", "B) La Guerra dei Sei Giorni", "C) La Crisi di Suez", "D) La Prima Intifada"], corretta: "B" },
    { id: 67, categoria: "Storia V", difficoltà: "Media", testo: "La Prima Intifada, la rivolta palestinese popolare contro l'occupazione israeliana, è iniziata in quale anno?", opzioni: ["A) 1973", "B) 1987", "C) 1993", "D) 2000"], corretta: "B" },
    { id: 68, categoria: "Storia V", difficoltà: "Media", testo: "Gli Accordi di Oslo (1993 e 1995) hanno portato alla creazione di quale organo di autogoverno palestinese?", opzioni: ["A) Il Consiglio Legislativo Palestinese", "B) L'Organizzazione per la Liberazione della Palestina", "C) La Lega Araba", "D) L'Autorità Nazionale Palestinese (ANP)"], corretta: "D" },
    { id: 69, categoria: "Storia V", difficoltà: "Media", testo: "Quale città della Palestina fu il luogo in cui nacque la Seconda Intifada (Intifada di Al-Aqsa) nell'anno 2000?", opzioni: ["A) Ramallah", "B) Gaza City", "C) Gerusalemme (Monte del Tempio/Haram al-Sharif)", "D) Hebron"], corretta: "C" },
    { id: 70, categoria: "Storia V", difficoltà: "Difficile", testo: "Il 'disimpegno' unilaterale di Israele, che portò allo smantellamento degli insediamenti e al ritiro delle forze militari dalla Striscia di Gaza, avvenne in quale anno?", opzioni: ["A) 1995", "B) 2000", "C) 2005", "D) 2007"], corretta: "C" },
	{ id: 71, categoria: "Geografia VI", difficoltà: "Media", testo: "Which UNESCO World Heritage site in the West Bank is known for its ancient agricultural terraces and irrigation systems?", opzioni: ["A) Old City of Nablus", "B) Battir", "C) Hisham's Palace, Jericho", "D) Herodion Fortress"], corretta: "B" },
    { id: 72, categoria: "Storia VI", difficoltà: "Difficile", testo: "Which two major Palestinian cities in the West Bank were declared a single 'Area A' enclave under the 1995 Oslo II Accord?", opzioni: ["A) Hebron and Bethlehem", "B) Jenin and Tulkarm", "C) Ramallah and Jericho", "D) Nablus and Jenin"], corretta: "D" },
    { id: 73, categoria: "Bandiera V", difficoltà: "Media", testo: "What is the common name for the four colors (Black, White, Green, Red) shared by the flags of Palestine, Jordan, Kuwait, and other Arab nations?", opzioni: ["A) Unity Colors", "B) Ottoman Hues", "C) Pan-Arab Colors", "D) Levant Colors"], corretta: "C" },
    { id: 74, categoria: "Geografia VI", difficoltà: "Media", testo: "The area designated as Area C under the Oslo Accords is generally controlled by which administration?", opzioni: ["A) Palestinian Authority (PA)", "B) United Nations", "C) Israeli Civil Administration", "D) Joint Security Forces"], corretta: "C" },
    { id: 75, categoria: "Storia VI", difficoltà: "Difficile", testo: "The *Fatah* political faction, a founding member of the PLO, was established by which prominent Palestinian leader?", opzioni: ["A) Mahmoud Abbas", "B) Yasser Arafat", "C) Hafez al-Assad", "D) Sheikh Ahmed Yassin"], corretta: "B" },
    { id: 76, categoria: "Bandiera V", difficoltà: "Difficile", testo: "Which color in the Palestinian flag specifically represents the Arab Fatimid Caliphate of North Africa?", opzioni: ["A) Red Triangle", "B) Black Stripe", "C) White Stripe", "D) Green Stripe"], corretta: "C" },
    { id: 77, categoria: "Geografia VI", difficoltà: "Media", testo: "Which Palestinian city is considered the commercial and transportation hub of the northern West Bank (Samaria)?", opzioni: ["A) Ramallah", "B) Hebron", "C) Nablus", "D) Jericho"], corretta: "C" },
    { id: 78, categoria: "Storia VI", difficoltà: "Media", testo: "The historic city of Jerusalem was captured by which invading force in 1099, establishing the Kingdom of Jerusalem?", opzioni: ["A) Mamluks", "B) Ottoman Turks", "C) Ayyubids", "D) Crusaders (First Crusade)"], corretta: "D" },
    { id: 79, categoria: "Bandiera V", difficoltà: "Media", testo: "The flag of which country features a prominent green cedar tree centered on a white background?", opzioni: ["A) Cyprus", "B) Morocco", "C) Lebanon", "D) Syria"], corretta: "C" },
    { id: 80, categoria: "Geografia VI", difficoltà: "Media", testo: "What is the main source of fresh water for the Gaza Strip, which is severely depleted and often contaminated?", opzioni: ["A) The Sea of Galilee", "B) Desalination Plants", "C) The Coastal Aquifer", "D) The Yarmouk River"], corretta: "C" }
];
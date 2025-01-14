const data = [
	{
		title: 'Thematik',
		style: { border: 'border-orange-500', bgcolor: 'bg-orange-500' },
		keys: [
			{
				name: 'Street Photography',
				description: 'Alltagsszenen in der Stadt einfangen, spontane Momente und urbanes Leben.',
				typicalElements: [
					'Passanten in Bewegung',
					'Straßenmusiker',
					'Graffiti',
					'Verkehr (Autos, Busse, Fahrräder)',
					'Märkte und Geschäfte',
				],
				untypicalElements: [
					'Schatten von Personen ohne ihre Silhouetten',
					'Reflexionen in Pfützen oder Schaufenstern',
					'Detail eines Straßenschildes',
					'Weggeworfene Gegenstände wie ein Schuh',
					'Kinderwagen ohne sichtbare Personen',
				],
			},
			{
				name: 'Porträtfotografie',
				description: 'Charakterstarke Gesichter oder Emotionen in Nahaufnahme festhalten.',
				typicalElements: [
					'Gesichter mit intensivem Blick',
					'Hände in Geste oder Pose',
					'Hintergrund mit neutralem Fokus',
					'Accessoires wie Hüte oder Brillen',
					'Ausdrucksstarke Mimik',
				],
				untypicalElements: [
					'Extreme Nahaufnahmen (z. B. nur die Lippen oder ein Auge)',
					'Silhouetten ohne Details',
					'Porträt mit ungewöhnlichen Perspektiven (z. B. von unten)',
					'Unscharfer Vordergrund, der nur eine Geschichte andeutet',
					'Kombination aus Porträt und Landschaft',
				],
			},
			{
				name: 'Architekturdetails',
				description: 'Besondere Muster, Linien und Strukturen in Gebäuden entdecken.',
				typicalElements: [
					'Fassadenmuster',
					'Fensterreihen',
					'Türen oder Portale',
					'Symmetrische Treppenhäuser',
					'Säulen',
				],
				untypicalElements: [
					'Verfallene Gebäudeelemente (abblätternde Farbe)',
					'Elemente hinter Gittern oder Netzen',
					'Reflexion der Architektur in einer Wasserfläche',
					'Strukturen durch Schattenwurf auf Wänden',
					'Insekten oder Pflanzen, die mit Architektur verschmelzen',
				],
			},
			{
				name: 'Licht und Schatten',
				description: 'Spielen mit Kontrasten, um spannende Kompositionen zu schaffen.',
				typicalElements: [
					'Lange Schatten von Bäumen oder Menschen',
					'Lichtstrahlen durch Fenster oder Türen',
					'Sonnenuntergänge',
					'Silhouetten gegen das Licht',
					'Schattenspiele von Gebäuden',
				],
				untypicalElements: [
					'Schatten, die Objekte formen, die gar nicht sichtbar sind',
					'Gebrochenes Licht durch z. B. einen Vorhang',
					'Spiegelungen in untypischen Oberflächen (z. B. Metall)',
					'Farbiges Licht durch Filter oder Glas',
					'Schattendetails, die eine zweite Handlung andeuten',
				],
			},
			{
				name: 'Makrofotografie',
				description: 'Die unsichtbare Welt im Detail zeigen, z. B. Insekten oder Pflanzen.',
				typicalElements: [
					'Insekten (z. B. Bienen oder Käfer)',
					'Pflanzenstrukturen wie Blätter oder Blüten',
					'Wassertröpfchen',
					'Texturen von Oberflächen (Holz, Stein)',
					'Kleinstlebewesen',
				],
				untypicalElements: [
					'Winzige Gegenstände (z. B. Schrauben oder Sandkörner)',
					'Muster auf Banknoten oder Textilien',
					'Augen von Tieren im Detail',
					'Luftblasen in Eis oder Wasser',
					'Schneekristalle',
				],
			},
			{
				name: 'Langzeitbelichtung',
				description: 'Bewegung von Wasser, Wolken oder Lichtspuren kreativ festhalten.',
				typicalElements: [
					'Bewegtes Wasser (z. B. Flüsse, Wasserfälle)',
					'Lichtspuren von Autos',
					'Sternenbahnen am Himmel',
					'Bewegte Menschen in einer Stadt',
					'Wolken, die über den Himmel ziehen',
				],
				untypicalElements: [
					'Bewegung von Pflanzen im Wind',
					'Abstrakte Bewegungen durch Handkamera',
					'Langzeitbelichtung bei Sonnenlicht (starke Filter nötig)',
					'Details von Feuerwerken in Nahaufnahme',
					'Tänzer in Bewegung',
				],
			},
			{
				name: 'Natur und Landschaften',
				description: 'Vom Sonnenaufgang bis zu stürmischen Wellen besondere Naturmomente einfangen.',
				typicalElements: [
					'Berge, Wälder, Flüsse',
					'Sonnenauf- oder -untergänge',
					'Felder und Blumen',
					'Tiere in ihrer Umgebung',
					'Wetterphänomene wie Regenbögen',
				],
				untypicalElements: [
					'Versteckte Details, z. B. ein einzelner Ast',
					'Natürliche Spiegelungen in Wasser',
					'Menschliche Eingriffe in der Landschaft (z. B. Zäune)',
					'Bodenaufnahmen mit Fokus auf Texturen',
					'Geräusche eingefangen durch visuelle Details (z. B. raschelndes Gras)',
				],
			},
			{
				name: 'Abstrakte Fotografie',
				description: 'Formen, Farben und Strukturen für künstlerische Bilder nutzen.',
				typicalElements: [
					'Geometrische Muster',
					'Kontraste zwischen Farben',
					'Spiegelungen oder Verzerrungen',
					'Lichtbrechung in Glas',
					'Bewegung eingefroren in außergewöhnlicher Form',
				],
				untypicalElements: [
					'Extreme Nahaufnahmen ohne erkennbaren Bezug',
					'Strukturen in ungewöhnlichen Materialen (z. B. Rost)',
					'Schatten als Hauptmotiv',
					'Verwaschene Farben durch Bewegung',
					'Überlagerungen mehrerer Schichten',
				],
			},
			{
				name: 'Lost Places',
				description: 'Verlassene Orte dokumentieren und ihre mystische Atmosphäre einfangen.',
				typicalElements: [
					'Verlassene Häuser oder Fabriken',
					'Alte Möbel',
					'Zerbrochene Fenster',
					'Graffiti und Vandalisierung',
					'Verfallende Mauern',
				],
				untypicalElements: [
					'Details von Pflanzen, die das Gebäude überwuchern',
					'Objekte, die zurückgelassen wurden (z. B. Spielzeug)',
					'Lichtspiele durch kaputte Dächer',
					'Tiere, die sich angesiedelt haben',
					'Historische Hinweise (z. B. alte Schriftzüge)',
				],
			},
			{
				name: 'Tierfotografie',
				description: 'Wildlife oder Haustiere in außergewöhnlichem Licht fotografieren.',
				typicalElements: [
					'Tiere in Bewegung (Flug, Sprung)',
					'Tiere in ihrer natürlichen Umgebung',
					'Porträts von Haustieren',
					'Gruppenverhalten bei Vögeln oder Fischen',
					'Jungtiere',
				],
				untypicalElements: [
					'Tiere in ungewöhnlichen Posen (z. B. liegend)',
					'Fokus auf Details (Pfoten, Augen, Federn)',
					'Tiere mit menschlichen Gegenständen (z. B. ein Hund mit Hut)',
					'Schatten oder Spuren der Tiere',
					'Tiere im Zusammenspiel mit Licht oder Wasser',
				],
			},
			{
				name: 'Food Photography',
				description: 'Kunstvoll angerichtete Speisen und Getränke in Szene setzen.',
				typicalElements: [
					'Farbenfrohe Gerichte',
					'Texturen von Zutaten (z. B. Brotkruste)',
					'Dampfende heiße Speisen',
					'Schöne Telleranordnungen',
					'Frische Kräuter',
				],
				untypicalElements: [
					'Unperfekte Gerichte (z. B. ein angeschnittenes Stück)',
					'Ungewöhnliche Perspektiven (z. B. von unten)',
					'Zutaten im Chaos verteilt',
					'Nutzung von Schatten und Licht',
					'Gerichte, die im Herstellungsprozess gezeigt werden',
				],
			},
			{
				name: 'Nachtfotografie',
				description: 'Sternenhimmel, Lichtspiele und urbane Nachtstimmung einfangen.',
				typicalElements: [
					'Sterne und Milchstraße',
					'Lichtspuren von Autos',
					'Beleuchtete Gebäude',
					'Straßenlaternen',
					'Feuerwerke',
				],
				untypicalElements: [
					'Details im Vordergrund (z. B. Bäume oder Menschen)',
					'Bewegte Lichter von Fahrrädern',
					'Dunkle Silhouetten vor hellen Sternen',
					'Reflexionen auf nassen Oberflächen',
					'Nebel und diffuse Beleuchtung',
				],
			},
			{
				name: 'Emotionen',
				description: 'Menschen in intensiven Momenten oder bei besonderen Anlässen porträtieren.',
				typicalElements: ['Lachen', 'Tränen', 'Konzentrierte Gesichter', 'Gesten der Freude oder Trauer', 'Umarmungen'],
				untypicalElements: [
					'Emotionen durch Objekte dargestellt (z. B. ein zerbrochener Gegenstand)',
					'Ungewöhnliche Perspektiven (z. B. von hinten)',
					'Emotionen in einer Gruppe festgehalten',
					'Hände als alleinige Darstellung der Gefühle',
					'Schattenspiele, die Emotionen andeuten',
				],
			},
			{
				name: 'Minimalismus',
				description: 'Schlichte, klare Motive, bei denen weniger mehr ist.',
				typicalElements: [
					'Einzelne Objekte vor klarem Hintergrund',
					'Symmetrische Muster',
					'Reduzierte Farbpalette',
					'Negative Flächen',
					'Schlichte Linien',
				],
				untypicalElements: [
					'Objekte in ungewohnter Umgebung',
					'Farbliche Kontraste in einem minimalistischen Stil',
					'Ungewöhnliche Texturen im Fokus',
					'Dynamik durch leichte Bewegungen',
					'Kleine Details, die erst auf den zweiten Blick sichtbar werden',
				],
			},
			{
				name: 'Bewegung',
				description: 'Dynamische Motive wie Sportler, Tänzer oder spielende Kinder einfangen.',
				typicalElements: [
					'Sportler in Aktion',
					'Tänzer in der Luft',
					'Spielende Kinder',
					'Fließendes Wasser',
					'Rennende Tiere',
				],
				untypicalElements: [
					'Bewegung in abstrakten Formen',
					'Ungewöhnliche Perspektiven von Bewegung (z. B. von oben)',
					'Unscharfe Hintergründe, die Bewegung andeuten',
					'Bewegung durch Schatten',
					'Details, die in der Bewegung eingefroren werden',
				],
			},
			{
				name: 'Regen und Wetter',
				description: 'Szenen bei ungewöhnlichem Wetter, wie Regen oder Nebel, fotografieren.',
				typicalElements: [
					'Regentropfen auf Fenstern',
					'Pfützen und Reflexionen',
					'Nebel in einer Landschaft',
					'Gewitter und Blitze',
					'Sonnenstrahlen durch Wolken',
				],
				untypicalElements: [
					'Details von Regen auf Pflanzen',
					'Menschen mit Regenschirmen',
					'Wetterphänomene im Zusammenspiel mit Licht',
					'Ungewöhnliche Blickwinkel auf Gewitter',
					'Spuren, die der Regen hinterlässt (z. B. Schlamm)',
				],
			},
			{
				name: 'Kulturelle Events',
				description: 'Festivals, Märkte oder Straßenkünstler in Aktion dokumentieren.',
				typicalElements: [
					'Menschenmengen',
					'Farbenfrohe Kostüme',
					'Straßenkünstler in Aktion',
					'Marktstände mit Waren',
					'Musiker und Instrumente',
				],
				untypicalElements: [
					'Hinter den Kulissen eines Events',
					'Details von Dekorationen',
					'Emotionen von Einzelpersonen in der Menge',
					'Schatten oder Silhouetten bei Events',
					'Interaktionen zwischen Künstlern und Publikum',
				],
			},
			{
				name: 'Symmetrie und Muster',
				description: 'Geometrie im Alltag und wiederkehrende Muster festhalten.',
				typicalElements: [
					'Wiederholte Fenster oder Türen',
					'Spiegelungen in Wasser',
					'Schachbrettmuster',
					'Symmetrische Brücken',
					'Texturen auf Gebäuden',
				],
				untypicalElements: [
					'Symmetrie in natürlichen Objekten',
					'Asymmetrien, die Symmetrie stören',
					'Muster durch Schatten erzeugt',
					'Symmetrische Kompositionen in ungewöhnlichen Materialien',
					'Farbliche Kontraste in symmetrischen Formen',
				],
			},
			{
				name: 'Kleinstadtidyll',
				description: 'Das Besondere im Gewöhnlichen einer Kleinstadt zeigen.',
				typicalElements: [
					'Alte Häuser und Gassen',
					'Blumenkästen an Fenstern',
					'Menschen im Alltag',
					'Kleine Geschäfte',
					'Kirchtürme',
				],
				untypicalElements: [
					'Details von Straßenschildern',
					'Tiere in der Stadt',
					'Verlassene Plätze',
					'Besondere Momente wie Sonnenuntergänge in der Stadt',
					'Alltagsgegenstände im Fokus',
				],
			},
			{
				name: 'Storytelling in Bildern',
				description: 'Ein kleines visuelles Narrativ mit mehreren Bildern entwickeln.',
				typicalElements: [
					'Zusammenhängende Motive',
					'Chronologische Reihenfolge',
					'Emotionen und Handlungen',
					'Details, die die Geschichte unterstreichen',
					'Kontraste zwischen Szenen',
				],
				untypicalElements: [
					'Abstrakte Darstellung der Geschichte',
					'Symbolische Objekte',
					'Hintergründe, die mehr erzählen als die Hauptmotive',
					'Unverbundene Szenen, die später Sinn ergeben',
					'Gegenstände oder Personen, die als wiederkehrende Elemente fungieren',
				],
			},
		],
	},
	{
		title: 'Komposition & Perspektive',
		style: { border: 'border-lime-500', bgcolor: 'bg-lime-500' },
		keys: [
			{ name: 'Nahaufnahme' },
			{ name: 'Augenhöhe' },
			{ name: 'tiefer Winkel' },
			{ name: 'hoher Winkel' },
			{ name: 'Fisheye' },
			{ name: 'Über die Schulter' },
			{ name: 'Zentrale Positionierung des Hauptmotivs' },
			{ name: 'Angedeutete Führungslinien' },
			{ name: 'Asymmetrische Bildaufteilung' },
			{ name: 'Außermittig' },
			{ name: 'Close-Up' },
			{ name: 'Diagonale Führungslinien' },
			{ name: 'Einrahmung durch Schatten' },
			{ name: 'Einrahmung durch Silhouette' },
			{ name: 'Eye-Level' },
			{ name: 'Froschperspektive' },
			{ name: 'Führungslinien' },
			{ name: 'Goldener Schnitt' },
			{ name: 'Horizontale Führungslinien' },
			{ name: 'Komposition durch Ebenen' },
			{ name: 'Künstlicher Rahmen' },
			{ name: 'Natürlicher Rahmen' },
			{ name: 'Panorama-Aufnahme' },
			{ name: 'Schnappschuss' },
			{ name: 'Senkrechte Führungslinien' },
			{ name: 'Sich wiederholende Führungslinien' },
			{ name: 'Symmetrische Bildaufteilung' },
			{ name: 'Unausgeglichene Komposition' },
			{ name: 'Vogelperspektive' },
			{ name: 'Zwei-Drittel-Regel' },
		],
	},
	{
		title: 'Stil',
		style: { border: 'border-cyan-500', bgcolor: 'bg-cyan-500' },
		keys: [
			{
				name: 'Abstrakt',
				description: 'Fokus auf Farben, Formen und Strukturen statt auf konkrete Gegenstände oder Szenen.',
			},
			{
				name: 'Anime-Stil',
				description: 'Lebhafte, gezeichnete Darstellungen im Stil japanischer Animation.',
			},
			{
				name: 'Architekturfotografie',
				description: 'Gebäude und urbane Strukturen in ästhetischen und geometrischen Kompositionen.',
			},
			{
				name: 'Astrofotografie',
				description: 'Fotografien des Nachthimmels, oft mit Fokus auf Sterne, Planeten und Galaxien.',
			},
			{
				name: 'Barock',
				description: 'Prunkvolle, detailreiche Darstellungen, oft mit intensiven Farben und Goldakzenten.',
			},
			{
				name: 'Bewegungsunschärfe',
				description:
					'CM (Intentional Camera Movement) bezeichnet eine Fototechnik, bei der durch bewusstes Bewegen der Kamera während einer längeren Belichtungszeit gezielt unscharfe, abstrakte Bilder entstehen.',
			},
			{
				name: 'Boudoir',
				description: 'Intime, elegante Portraits, oft mit romantischer und sinnlicher Stimmung.',
			},
			{
				name: 'Cartoon',
				description: 'Übertriebene, humorvolle Formen mit satten Farben und vereinfachten Designs.',
			},
			{
				name: 'Cinematisch',
				description: 'Filmähnliche Ästhetik mit Fokus auf Licht, Farben und Erzählung.',
			},
			{
				name: 'Concept Art',
				description:
					'Künstlerische Darstellungen, die Ideen oder Konzepte visualisieren, häufig in der Film- oder Spieleindustrie genutzt.',
			},
			{
				name: 'Cyberpunk',
				description: 'Futuristische, neonlastige Ästhetik, oft mit düsteren und technologischen Elementen.',
			},
			{
				name: 'Dokumentarisch',
				description: 'Authentische, ungefilterte Darstellung des Lebens, oft mit gesellschaftlichem Fokus.',
			},
			{
				name: 'Doppelbelichtung',
				description: 'meherer Bilder übereinander gelegt',
			},
			{
				name: 'Dramatisch',
				description:
					'Ein dramatisches Bild erzeugt starke Emotionen und Spannung durch Kontraste, Licht, Perspektive und ausdrucksstarke Motive.',
			},
			{
				name: 'Drohnenfotografie',
				description: 'Luftaufnahmen mit einzigartigen Perspektiven, oft aus großer Höhe.',
			},
			{
				name: 'Editorial',
				description: 'Künstlerische Fotografien, oft für Zeitschriften oder Storytelling.',
			},
			{
				name: 'Expressionistisch',
				description: 'Intensiv und emotional, mit starken Farben und dramatischen Kompositionen.',
			},
			{
				name: 'Fantasy',
				description: 'Magische und fantastische Szenen, oft mit kreativen und übernatürlichen Elementen.',
			},
			{
				name: 'Fine Art',
				description: 'Künstlerisch und oft abstrakt, mit Fokus auf Ästhetik und Emotionen.',
			},
			{
				name: 'Fotorealistisch',
				description:
					'beschreibt Bilder, die so detailgetreu und präzise dargestellt sind, dass sie wie echte Fotografien wirken',
			},
			{
				name: 'Food-Fotografie',
				description: 'Ästhetische Darstellung von Speisen und Getränken, oft mit Fokus auf Textur und Farbe.',
			},
			{
				name: 'Futuristisch',
				description: 'Szenen mit futuristischen Technologien, Räumen und Designs, die in die Zukunft blicken.',
			},
			{
				name: 'Gothic',
				description: 'Dunkel und mystisch, oft mit dramatischem Licht und architektonischen Details.',
			},
			{
				name: 'High-Key',
				description: 'Helle und lebhafte Bilder mit wenig Schatten, oft für eine luftige Stimmung.',
			},
			{
				name: 'Hyperrealistisch',
				description: 'So detailliert und lebensecht, dass es fast über die Realität hinausgeht.',
			},
			{
				name: 'Impressionistisch',
				description:
					'Weiche, lichtdurchflutete Darstellungen mit Fokus auf Atmosphäre und Emotionen statt auf Details.',
			},
			{
				name: 'Industrial',
				description: 'Fokus auf Fabriken, Maschinen und industrielle Umgebungen, oft mit rauer Ästhetik.',
			},
			{
				name: 'Kawaii',
				description: 'Niedliche, verspielte Darstellungen, oft mit sanften Farben und süßen Details.',
			},
			{
				name: 'Kinderfotografie',
				description: 'Emotionale und lebendige Darstellungen von Kindern, oft in spielerischen Szenen.',
			},
			{
				name: 'Landschaftsfotografie',
				description: 'Darstellung von Natur- und Außenlandschaften, oft mit Schwerpunkt auf Licht und Perspektive.',
			},
			{
				name: 'Langzeitbelichtung',
				description:
					'ist eine Aufnahmetechnik, bei der der Verschluss der Kamera für eine längere Zeit geöffnet bleibt, um Bewegungen sichtbar zu machen oder Lichtspuren einzufangen',
			},
			{
				name: 'Low-Key',
				description: 'Dunkle, stimmungsvolle Bilder mit betontem Schatten und Licht.',
			},
			{
				name: 'Makrofotografie',
				description: 'Extrem detaillierte Nahaufnahmen von kleinen Objekten oder Strukturen.',
			},
			{
				name: 'Melancholisch',
				description:
					'beschreibt einen Zustand der sanften Traurigkeit oder Nachdenklichkeit, oft verbunden mit Sehnsucht und stiller Wehmut',
			},
			{
				name: 'Minimalistisch',
				description: 'Einfachheit und Reduktion auf das Wesentliche, oft mit viel Negativraum.',
			},
			{
				name: 'Modefotografie',
				description: 'Darstellung von Kleidung und Accessoires, oft in kreativen und stilisierten Szenen.',
			},
			{
				name: 'Noir',
				description:
					'Kontrastreiche Schwarz-Weiß-Ästhetik, oft mit stimmungsvollen Schatten und geheimnisvollem Flair.',
			},
			{
				name: 'Panoramafotografie',
				description: 'Breite, detaillierte Aufnahmen von Landschaften oder Stadtansichten.',
			},
			{
				name: 'Piktorialismus',
				description:
					'Der Piktorialismus ist ein fotografischer Stil, der durch weiche Fokussierung, malerische Ästhetik und handwerkliche Manipulation versucht, die Fotografie als Kunstform zu etablieren und Emotionen statt dokumentarischer Genauigkeit in den Vordergrund zu stellen.',
			},
			{
				name: 'Portrait',
				description: 'Fokus auf die Darstellung von Menschen, oft mit Betonung von Emotionen und Persönlichkeit.',
			},
			{
				name: 'Postapokalyptisch',
				description:
					'Szenarien nach einer Katastrophe, oft düster, mit verfallenen Gebäuden und überwucherten Landschaften.',
			},
			{
				name: 'Produktfotografie',
				description: 'Darstellung von Produkten für Werbung, mit besonderem Fokus auf Details und Beleuchtung.',
			},
			{
				name: 'Psychedelisch',
				description: 'Lebhafte, verzerrte und farbenfrohe Szenen, die an Träume oder Halluzinationen erinnern.',
			},
			{
				name: 'Realistisch',
				description:
					'Darstellung von Szenen, die der Realität so nah wie möglich kommen, ohne künstlerische Verzerrung.',
			},
			{
				name: 'Reise',
				description: 'Bilder, die verschiedene Kulturen, Orte und Abenteuer dokumentieren.',
			},
			{
				name: 'Retro',
				description:
					'Nostalgischer Stil, der auf vergangene Jahrzehnte anspielt, oft mit Vintage-Farbpaletten und Elementen.',
			},
			{
				name: 'Romantisch',
				description:
					'beschreibt etwas, das Gefühle von Liebe, Sehnsucht oder Harmonie weckt und oft mit Schönheit, Zärtlichkeit oder idealisierten Vorstellungen verbunden ist.',
			},
			{
				name: 'Schwarz-Weiß',
				description: 'Monochrome Ästhetik, die Kontraste und Strukturen betont.',
			},
			{
				name: 'Skizzenhaft',
				description: 'Wie eine Zeichnung oder Skizze, oft mit klaren Linien und Schraffuren.',
			},
			{
				name: 'Sportfotografie',
				description: 'Dynamische Aufnahmen von Sportereignissen mit Fokus auf Bewegung und Energie.',
			},
			{
				name: 'Steampunk',
				description: 'Retro-futuristischer Stil, inspiriert von viktorianischer Ästhetik und Dampfmaschinen.',
			},
			{
				name: 'Stillleben',
				description: 'Arrangierte Objekte, oft mit künstlerischem Fokus auf Licht und Schatten.',
			},
			{
				name: 'Street Art Style',
				description: 'Inspiriert von Graffiti und urbaner Kunst, mit intensiven Farben und Formen.',
			},
			{
				name: 'Street Photography',
				description: 'Spontane Szenen aus dem urbanen Alltag, oft dynamisch und ungestellt.',
			},
			{
				name: 'Surrealistisch',
				description: 'Traumhafte, oft unwirkliche Szenen mit fantastischen Elementen und unerwarteten Kompositionen.',
			},
			{
				name: 'Unterwasserfotografie',
				description: 'Szenen unter Wasser, oft mit besonderem Fokus auf Lichtbrechung und Farben.',
			},
			{
				name: 'Vintage',
				description: 'Alte, nostalgische Ästhetik mit oft entsättigten Farben und körniger Textur.',
			},
			{
				name: 'Wildlife',
				description: 'Aufnahmen von Tieren in freier Wildbahn, mit Fokus auf Verhalten und Umgebung.',
				tag: ['natur', 'grün'],
			},
		],
	},
	{
		title: 'Beleuchtung',
		style: { border: 'border-red-500', bgcolor: 'bg-red-500' },
		keys: [
			{ name: 'Weiches Morgenlicht' },
			{ name: 'Dramatisches Gegenlicht' },
			{ name: 'Schummriges Kerzenlicht' },
			{ name: 'Hoher Kontrast' },
			{ name: 'Hohes Detailniveaut' },
			{ name: 'HDR' },
			{ name: 'Hohes Maß an Dynamik' },
			{ name: 'Natürliches Licht' },
			{ name: 'Starke Farbkontraste' },
			{ name: 'Gegenlicht' },
			{ name: 'hartes Licht' },
			{ name: 'fokussiert' },
			{ name: 'Diffus' },
			{ name: 'Pastell' },
			{ name: 'Lebhaft' },
			{ name: 'Gedämpft' },
			{ name: 'Gesättigt' },
			{ name: 'Entsättigt' },
			{ name: 'Monochromatisch' },
			{ name: 'Komplementär' },
		],
	},
	{
		title: 'Künstler',
		style: { border: 'border-green-500', bgcolor: 'bg-green-500' },
		keys: [
			{
				name: 'Walt Disney',
				description: 'Cartoon, handgezeichneter Animationsstil',
				link: 'https://www.catawiki.com/nl/l/66533137-walt-disney-studios-disney-kunstwerk-framed-original-animation-drawing-additional-book-building-a-building',
			},
			{
				name: 'Banksy',
				description: 'Street Art, Schablonen-Graffiti, gesellschaftskritisch',
				link: 'https://www.singulart.com/de/blog/2023/11/17/beruehmte-banksy-gemaelde/',
			},
			{
				name: 'Pablo Picasso',
				description: 'Kubismus, abstrakte Formen, geometrische Darstellung',
				link: 'https://themuseum.blog/de/10-kunstwerke-von-picasso-die-sie-kennen-sollten/',
			},
			{
				name: 'Vincent van Gogh',
				description: 'Post-Impressionismus, expressive Pinselstriche, Farben',
				link: 'https://www.nga.gov/collection/highlights/van-gogh-self-portrait.html',
			},
			{
				name: 'Claude Monet',
				description: 'Impressionismus, Licht- und Farbenspiele',
				link: 'https://www.arthistoryproject.com/artists/claude-monet/sunset-on-the-seine-at-lavacourt-winter-effect/',
			},
			{
				name: 'Leonardo da Vinci',
				description: 'Renaissance, realistisches Zeichnen, sfumato-Technik',
				link: 'https://www.singulart.com/de/blog/2023/11/02/leonardo-da-vinci-gemaelde/',
			},
			{
				name: 'Salvador Dalí',
				description: 'Surrealismus, traumartige, verzerrte Bilder',
				link: 'https://artlia.de/blogs/wandbilder-digest/die-20-beruhmtesten-maler-der-kunstgeschichte',
			},
			{
				name: 'Frida Kahlo',
				description: 'Surrealismus, Selbstporträts, mexikanische Symbolik',
				link: 'https://www.kunstnet.org/werk/509693-frida-kahlo',
			},
			{
				name: 'Andy Warhol',
				description: 'Pop Art, Massenproduktion, Konsumkultur',
				link: 'https://artlia.de/blogs/wandbilder-digest/die-20-beruhmtesten-maler-der-kunstgeschichte',
			},
			{
				name: 'Jackson Pollock',
				description: 'Action Painting, Drip-Technik, abstrakter Expressionismus',
				link: 'https://www.artdex.com/myth-genius-jackson-pollock/',
			},
			{
				name: 'Keith Haring',
				description: 'Street Art, einfache Linien, lebendige Farben',
				link: 'https://www.npr.org/2023/05/27/1178084648/keith-haring-radiant-baby-the-broad',
			},
			{
				name: 'Henri Matisse',
				description: 'Fauvismus, kräftige Farben, vereinfachte Formen',
				link: 'https://artlia.de/blogs/wandbilder-digest/die-20-beruhmtesten-maler-der-kunstgeschichte',
			},
			{
				name: 'Gustav Klimt',
				description: 'Jugendstil, goldene Ornamente, dekorative Elemente',
				link: 'https://artlia.de/blogs/wandbilder-digest/die-20-beruhmtesten-maler-der-kunstgeschichte',
			},
			{
				name: 'Edvard Munch',
				description: 'Expressionismus, düstere Farben, emotionale Themen',
				link: 'https://artlia.de/blogs/wandbilder-digest/die-20-beruhmtesten-maler-der-kunstgeschichte',
			},
			{
				name: 'Hokusai',
				description: 'Japanische Ukiyo-e Kunst, Holzschnitte, „Die große Welle“',
				link: 'https://www.alamy.de/die-grosse-welle-von-kanagawa-katsushika-hokusai-1831-holzschnitt-drucken-aka-der-wave-japanische-kunst-image235761420.html',
			},
			{
				name: 'Yayoi Kusama',
				description: 'Avantgarde, psychedelische Punkte, Installationen',
				link: 'https://artlia.de/blogs/wandbilder-digest/die-20-beruhmtesten-maler-der-kunstgeschichte',
			},
			{
				name: 'Joan Miró',
				description: 'Surrealismus, abstrakte Formen, kindliche Symbole',
				link: 'https://artlia.de/blogs/wandbilder-digest/die-20-beruhmtesten-maler-der-kunstgeschichte',
			},
			{
				name: 'Albrecht Dürer',
				description: 'Renaissance, realistische Druckgrafik und Holzschnitte',
				link: 'https://artlia.de/blogs/wandbilder-digest/die-20-beruhmtesten-maler-der-kunstgeschichte',
			},
			{
				name: 'Jean-Michel Basquiat',
				description: 'Neoexpressionismus, Graffiti-Einflüsse, rohe Energie',
				link: 'https://artlia.de/blogs/wandbilder-digest/die-20-beruhmtesten-maler-der-kunstgeschichte',
			},
		],
	},
	{
		title: 'Format',
		style: { border: 'border-purple-500', bgcolor: 'bg-purple-500' },
		keys: [
			{ name: 'Quadratisch (1:1)' },
			{ name: 'Panorama (16:9)' },
			{ name: 'Hochformat (3:4)' },
			{ name: 'Querformat (4:3)' },
			{ name: 'HD (1280 × 720 Pixel)' },
			{ name: 'Full HD (1920 × 1080 Pixel)' },
			{ name: '4K (3840 × 2160 Pixel)' },
			{ name: 'Instagram-Post (1080 × 1080)' },
			{ name: 'Facebook-Cover (820 × 312 Pixel)' },
			{ name: 'YouTube Thumbnail (1280 × 720 Pixel)' },
			{ name: 'LinkedIn Post (1200 × 627 Pixel)' },
			{ name: 'iPhone 15 Pro (2556 × 1179 Pixel)' },
			{ name: 'iPad Pro 12.9“ (2732 × 2048 Pixel)' },
		],
	},
	{
		title: 'Medium',
		style: { border: 'border-gray-500', bgcolor: 'bg-gray-500' },
		keys: [
			{ name: 'Fotografie', description: 'Erstellung von Bildern durch Licht auf einem lichtempfindlichen Medium.' },
			{
				name: '\u00d6l auf Leinwand',
				description: 'Maltechnik mit \u00d6lfarben auf einer Leinwand als Trägermaterial.',
			},
			{
				name: 'Digitale Illustration',
				description: 'Erstellung von Kunstwerken mit digitalen Werkzeugen wie Tablets und Software.',
			},
			{
				name: 'Kohlezeichnung',
				description: 'Zeichnungen mit Kohle auf Papier, oft für Skizzen oder Schatteneffekte.',
			},
			{ name: 'Aquarell', description: 'Malerei mit transparenten Wasserfarben auf speziellem Aquarellpapier.' },
			{ name: 'Pastellkreide', description: 'Zeichnungen mit weichen, farbintensiven Kreiden auf rauem Papier.' },
			{
				name: 'Bleistiftzeichnung',
				description: 'Klassische Zeichnung oder Skizze mit Bleistift in unterschiedlichen Härtegraden.',
			},
			{
				name: 'Tuschezeichnung',
				description: 'Klare Linien und Schraffuren mit Tinte, oft für detailreiche Arbeiten verwendet.',
			},
			{
				name: 'Gouache',
				description: 'Deckende Wasserfarben, die kräftiger als Aquarell sind und leuchtend wirken.',
			},
			{
				name: 'Acrylmalerei',
				description: 'Schnelltrocknende Farben, die vielseitig auf unterschiedlichen Oberflächen angewendet werden.',
			},
			{
				name: 'Collage',
				description: 'Kunstwerke aus der Kombination von Papier, Fotos, Textilien und weiteren Materialien.',
			},
			{ name: 'Enkaustik', description: 'Maltechnik mit heißem Wachs und Farbpigmenten, meist auf Holzplatten.' },
			{
				name: 'Linolschnitt / Holzschnitt',
				description: 'Drucktechnik, bei der Motive aus Linoleum oder Holz geschnitten und gedruckt werden.',
			},
			{
				name: 'Spray-Art (Graffiti)',
				description: 'Bilder, die mit Sprayfarben auf Wänden, Leinwänden oder anderen Flächen entstehen.',
			},
			{
				name: 'Digital Painting',
				description: 'Digitale Malerei mit Software wie Photoshop oder Procreate und speziellen Pinseln.',
			},
			{
				name: 'Mischtechnik (Mixed Media)',
				description: 'Kombination verschiedener Materialien und Techniken in einem Kunstwerk.',
			},
			{
				name: 'Airbrush',
				description: 'Präziser Farbauftrag mit einer Spritzpistole für glatte Verlaufe und Details.',
			},
			{
				name: 'Kalligrafie',
				description: 'Kunstvolle Gestaltung von Schriftzeichen, oft kombiniert mit Zeichnungen.',
			},
			{ name: 'Sandkunst', description: 'Bilder oder Installationen, die durch die Verwendung von Sand entstehen.' },
			{
				name: 'Wachsfarben (Crayon)',
				description: 'Zeichnungen mit Wachsmalstiften, die farbintensiv und leicht zu verwenden sind.',
			},
			{ name: 'Metallgravur', description: 'Gravur von Bildern oder Mustern in Metall wie Kupfer oder Silber.' },
			{
				name: 'Glasmalerei',
				description: 'Farben und Bilder, die auf Glas angebracht oder in Glas integriert werden.',
			},
		],
	},
]

export default data

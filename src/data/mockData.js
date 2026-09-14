// Zentrale Mock-Daten für den klickbaren claim.m Prototyp
// Begriffe, Status- und Kennzahlennamen sind aus der Anforderungsliste
// (claim-m_Vollstaendige-Modulanforderungen.pdf, Module M0, M2, M11) übernommen.

export const navigation = [
  { label: 'Mein Arbeitstag', path: '/dashboard', icon: 'Home' },
  { label: 'Claim-Dashboard', path: '/claims', icon: 'BarChart2' },
  { label: 'Nachtragslebenszyklus', path: '/nachtrag', icon: 'GitBranch' },
  { label: 'GF-Briefing', path: '/gf-briefing', icon: 'Briefcase' },
]

export const currentUser = {
  name: 'Elias Wüstenhöfer',
  role: 'Junior PM',
  email: 'e.wuestenhoefer@claimm.de',
}

// ---------------------------------------------------------------------------
// Mitarbeiter
// ---------------------------------------------------------------------------

export const employees = [
  { id: 'elias', name: 'Elias Wüstenhöfer', role: 'Junior PM' },
  { id: 'benjamin', name: 'Benjamin Thumberger', role: 'Bereichsleitung PM' },
  { id: 'lisa', name: 'Lisa Kreutzer', role: 'Head of Claim & Contract' },
  { id: 'philipp', name: 'Philipp Preuß', role: 'Head of TQM' },
  { id: 'michal', name: 'Michal Gamalski', role: 'Geschäftsführung' },
  { id: 'marco', name: 'Marco Richter', role: 'Geschäftsführung' },
]

// ---------------------------------------------------------------------------
// Projekte (8) — mit AN-/AG-Mandatsperspektive und 3-Ampel-Status
// (Termine / Kosten / Qualität), wie in M2 gefordert.
// ---------------------------------------------------------------------------

export const projects = [
  {
    id: 'kau-koeln',
    name: 'KAU Köln',
    adresse: 'Konrad-Adenauer-Ufer 21-23, Köln',
    perspektive: 'AN',
    verantwortlich: 'Elias Wüstenhöfer',
    ampel: 'rot',
    ampelTermine: 'rot',
    ampelKosten: 'rot',
    ampelQualitaet: 'gelb',
    kritisch: true,
  },
  {
    id: 'elisenhof-muenchen',
    name: 'Elisenhof München',
    adresse: 'Prielmayerstraße 3, München',
    perspektive: 'AN',
    verantwortlich: 'Benjamin Thumberger',
    ampel: 'gelb',
    ampelTermine: 'gelb',
    ampelKosten: 'grün',
    ampelQualitaet: 'grün',
    kritisch: false,
  },
  {
    id: 'ezvk-darmstadt',
    name: 'EZVK Darmstadt',
    adresse: 'Holzhofallee 17a, Darmstadt',
    perspektive: 'AG',
    verantwortlich: 'Philipp Preuß',
    ampel: 'grün',
    ampelTermine: 'grün',
    ampelKosten: 'grün',
    ampelQualitaet: 'grün',
    kritisch: false,
  },
  {
    id: 'luk-koeln',
    name: 'LUK Köln',
    adresse: 'Laurenzplatz, Köln',
    perspektive: 'AG',
    verantwortlich: 'Benjamin Thumberger',
    ampel: 'grün',
    ampelTermine: 'grün',
    ampelKosten: 'gelb',
    ampelQualitaet: 'grün',
    kritisch: false,
  },
  {
    id: 'oppenhof-koeln',
    name: 'Oppenhof & Partner Köln',
    adresse: 'Köln',
    perspektive: 'AG',
    verantwortlich: 'Elias Wüstenhöfer',
    ampel: 'gelb',
    ampelTermine: 'gelb',
    ampelKosten: 'gelb',
    ampelQualitaet: 'grün',
    kritisch: false,
  },
  {
    id: 'iw-koeln',
    name: 'IW Köln',
    adresse: 'Köln',
    perspektive: 'AG',
    verantwortlich: 'Philipp Preuß',
    ampel: 'grün',
    ampelTermine: 'grün',
    ampelKosten: 'grün',
    ampelQualitaet: 'gelb',
    kritisch: false,
  },
  {
    id: 'brueckenstrasse-koeln',
    name: 'Brückenstraße Köln',
    adresse: 'Brückenstraße, Köln',
    perspektive: 'AN',
    verantwortlich: 'Benjamin Thumberger',
    ampel: 'rot',
    ampelTermine: 'rot',
    ampelKosten: 'gelb',
    ampelQualitaet: 'rot',
    kritisch: true,
  },
  {
    id: 'ludwigstrasse-koeln',
    name: 'Ludwigstraße Köln',
    adresse: 'Ludwigstraße, Köln',
    perspektive: 'AN',
    verantwortlich: 'Elias Wüstenhöfer',
    ampel: 'grün',
    ampelTermine: 'grün',
    ampelKosten: 'grün',
    ampelQualitaet: 'grün',
    kritisch: false,
  },
]

// ---------------------------------------------------------------------------
// Mein Arbeitstag — Widgets
// ---------------------------------------------------------------------------

export const meineAufgaben = [
  {
    id: 'task-1',
    titel: 'Nachweischeckliste Behinderungsanzeige vervollständigen',
    projekt: 'KAU Köln',
    faelligkeit: '2026-09-14',
    prioritaet: 'hoch',
    erledigt: false,
  },
  {
    id: 'task-2',
    titel: 'Rückfrage Statiker zu Bewehrungsänderung klären',
    projekt: 'Elisenhof München',
    faelligkeit: '2026-09-14',
    prioritaet: 'mittel',
    erledigt: false,
  },
  {
    id: 'task-3',
    titel: 'Aufmaß Mehrmengen Stahlbetonarbeiten prüfen',
    projekt: 'EZVK Darmstadt',
    faelligkeit: '2026-09-15',
    prioritaet: 'mittel',
    erledigt: false,
  },
  {
    id: 'task-4',
    titel: 'Entwurf Nachtragsankündigung mit Lisa abstimmen',
    projekt: 'KAU Köln',
    faelligkeit: '2026-09-16',
    prioritaet: 'hoch',
    erledigt: false,
  },
  {
    id: 'task-5',
    titel: 'Wochenbericht Projektstatus aktualisieren',
    projekt: 'Elisenhof München',
    faelligkeit: '2026-09-17',
    prioritaet: 'niedrig',
    erledigt: true,
  },
]

export const offeneFreigaben = [
  {
    id: 'approval-1',
    titel: 'Nachtragsankündigung KAU Köln – Behinderung Baubeginn',
    modul: 'M2',
    antragsteller: 'Elias Wüstenhöfer',
    frist: '2026-09-14',
  },
  {
    id: 'approval-2',
    titel: 'Terminplanfortschreibung Elisenhof München',
    modul: 'M1',
    antragsteller: 'Benjamin Thumberger',
    frist: '2026-09-15',
  },
  {
    id: 'approval-3',
    titel: 'Nachtragsangebot Brückenstraße Köln – Zusatzleistung',
    modul: 'M6',
    antragsteller: 'Benjamin Thumberger',
    frist: '2026-09-16',
  },
]

export const kritischeFristen = [
  {
    id: 'deadline-1',
    titel: 'Stellungnahme Auftraggeber – Nachtrag KAU Köln',
    typ: 'Claim-Frist',
    datum: '2026-09-14',
    zeit: '17:00 Uhr',
    ampel: 'rot',
  },
  {
    id: 'deadline-2',
    titel: 'Gewährleistungsbürgschaft Rückgabe – LUK Köln',
    typ: 'Vertragsfrist',
    datum: '2026-09-16',
    ampel: 'gelb',
  },
  {
    id: 'deadline-3',
    titel: 'Nachtragsangebot Brückenstraße Köln einreichen',
    typ: 'Nachtragsfrist',
    datum: '2026-09-18',
    ampel: 'gelb',
  },
  {
    id: 'deadline-4',
    titel: 'Vollständigkeitsprüfung Mengenänderung – EZVK Darmstadt',
    typ: 'Nachtragsfrist',
    datum: '2026-09-25',
    ampel: 'grün',
  },
]

export const aiTagesbriefing =
  '3 Projekte benötigen heute Ihre Aufmerksamkeit: KAU Köln (Frist Stellungnahme Auftraggeber heute 17:00 Uhr), Brückenstraße Köln (kritische Termin- und Qualitätsabweichung) sowie Elisenhof München (offene Terminplanfreigabe). Die Nachweischeckliste für die Behinderungsanzeige KAU Köln ist zu 75 % vollständig — es fehlen noch Fotodokumentation und Bautagebuchauszug.'

export const neuigkeiten = [
  {
    id: 'news-1',
    typ: 'Neues Dokument',
    text: 'Bautagebuchauszug KW37 zu KAU Köln wurde in M9 abgelegt.',
    zeit: 'vor 2 Stunden',
  },
  {
    id: 'news-2',
    typ: 'Statusänderung',
    text: 'Nachtrag NT-2026-018 (Elisenhof München) wechselte von „in Prüfung“ zu „eingereicht“.',
    zeit: 'vor 4 Stunden',
  },
  {
    id: 'news-3',
    typ: 'Kommentar',
    text: 'Lisa Kreutzer hat die Höhenprüfung zu NT-2026-014 (KAU Köln) kommentiert.',
    zeit: 'gestern, 17:42 Uhr',
  },
  {
    id: 'news-4',
    typ: 'Neues Dokument',
    text: 'Nachtragsangebot Zusatzleistung Brückenstraße Köln als Entwurf erzeugt.',
    zeit: 'gestern, 09:15 Uhr',
  },
]

export const dashboardWidgetDefinitions = [
  { id: 'aufgaben', label: 'Meine Aufgaben heute' },
  { id: 'freigaben', label: 'Offene Freigaben' },
  { id: 'fristen', label: 'Kritische Fristen' },
  { id: 'projekte', label: 'Meine Projekte' },
  { id: 'kibriefing', label: 'KI-Tagesbriefing' },
  { id: 'neuigkeiten', label: 'Neuigkeiten seit gestern' },
]

// ---------------------------------------------------------------------------
// Claim-Dashboard — Status-Vokabular je Mandatsperspektive (M2)
// ---------------------------------------------------------------------------

export const AN_STATUS = [
  'erkannt',
  'in Prüfung',
  'angekündigt',
  'eingereicht',
  'in Verhandlung',
  'beauftragt',
  'abgerechnet',
]

export const AG_STATUS = [
  'eingegangen',
  'in Prüfung',
  'Rückfrage',
  'in Verhandlung',
  'anerkannt',
  'zurückgewiesen',
  'abgerechnet',
]

export const nachtraege = [
  {
    id: 'NT-2026-014',
    projekt: 'KAU Köln',
    projektId: 'kau-koeln',
    perspektive: 'AN',
    nachtragsart: 'Behinderung',
    beschreibung: 'Verzögerter Baubeginn durch ausstehende Baugenehmigung Nachbargrundstück',
    anspruchsgrund: 'Behinderung nach § 6 VOB/B',
    angemeldeterWert: 280000,
    gepruefterWert: 255000,
    status: 'in Verhandlung',
    frist: '2026-09-14',
    fristLabel: 'Stellungnahme Auftraggeber',
    verantwortlich: 'Elias Wüstenhöfer',
    details: {
      dokumente: [
        'Behinderungsanzeige_KAU_Koeln.pdf',
        'Bautagebuchauszug_KW30-37.pdf',
        'Terminplan_Fortschreibung_v3.pdf',
      ],
      verlauf: [
        { datum: '2026-08-04', ereignis: 'Behinderung erkannt (KI-Hinweis aus Bautagebuch)' },
        { datum: '2026-08-11', ereignis: 'Vorprüfung abgeschlossen, Nachweise angefordert' },
        { datum: '2026-08-25', ereignis: 'Nachtragsankündigung versendet' },
        { datum: '2026-09-02', ereignis: 'Eingereicht bei Auftraggeber' },
        { datum: '2026-09-10', ereignis: 'Erste Verhandlungsrunde durchgeführt' },
      ],
      kommunikation: [
        { von: 'Elias Wüstenhöfer', an: 'Bauherr KAU Köln', betreff: 'Behinderungsanzeige', datum: '2026-08-04' },
        { von: 'Bauherr KAU Köln', an: 'Elias Wüstenhöfer', betreff: 'Rückfrage zu Nachweisen', datum: '2026-08-14' },
        { von: 'Lisa Kreutzer', an: 'Bauherr KAU Köln', betreff: 'Nachtragsangebot', datum: '2026-09-02' },
      ],
    },
  },
  {
    id: 'NT-2026-018',
    projekt: 'Elisenhof München',
    projektId: 'elisenhof-muenchen',
    perspektive: 'AN',
    nachtragsart: 'Planänderung',
    beschreibung: 'Änderung der Grundrissplanung EG auf Wunsch des Bauherrn',
    anspruchsgrund: 'Anordnung nach § 1 Abs. 3 VOB/B',
    angemeldeterWert: 64000,
    gepruefterWert: 58500,
    status: 'eingereicht',
    frist: '2026-09-20',
    fristLabel: 'Rückmeldung Auftraggeber',
    verantwortlich: 'Benjamin Thumberger',
    details: {
      dokumente: ['Planaenderung_EG_Rev4.pdf', 'Nachtragsangebot_NT-2026-018.pdf'],
      verlauf: [
        { datum: '2026-08-20', ereignis: 'Planänderung erkannt' },
        { datum: '2026-08-28', ereignis: 'Vollständige Prüfung abgeschlossen' },
        { datum: '2026-09-11', ereignis: 'Eingereicht bei Auftraggeber' },
      ],
      kommunikation: [
        { von: 'Benjamin Thumberger', an: 'Bauherr Elisenhof München', betreff: 'Nachtragsangebot Planänderung EG', datum: '2026-09-11' },
      ],
    },
  },
  {
    id: 'NT-2026-021',
    projekt: 'Brückenstraße Köln',
    projektId: 'brueckenstrasse-koeln',
    perspektive: 'AN',
    nachtragsart: 'Zusatzleistung',
    beschreibung: 'Zusätzliche Abdichtungsarbeiten Tiefgarage aufgrund geänderter Bodengutachten',
    anspruchsgrund: 'Zusätzliche Leistung nach § 2 Abs. 6 VOB/B',
    angemeldeterWert: 41500,
    gepruefterWert: null,
    status: 'erkannt',
    frist: '2026-09-18',
    fristLabel: 'Nachtragsangebot einreichen',
    verantwortlich: 'Benjamin Thumberger',
    details: {
      dokumente: ['Bodengutachten_Nachtrag_Tiefgarage.pdf'],
      verlauf: [{ datum: '2026-09-12', ereignis: 'Zusatzleistung durch KI-Hinweis aus Protokoll erkannt' }],
      kommunikation: [],
    },
  },
  {
    id: 'NT-2026-009',
    projekt: 'EZVK Darmstadt',
    projektId: 'ezvk-darmstadt',
    perspektive: 'AG',
    nachtragsart: 'Mengenänderung',
    beschreibung: 'Mehrmengen Stahlbetonarbeiten laut Aufmaß der ausführenden Firma',
    anspruchsgrund: 'Mengenänderung nach § 2 Abs. 3 VOB/B',
    geforderterWert: 96000,
    gepruefterWert: 71000,
    status: 'in Verhandlung',
    frist: '2026-09-19',
    fristLabel: 'Gegenangebot versenden',
    verantwortlich: 'Philipp Preuß',
    details: {
      dokumente: ['Aufmass_Stahlbeton_ausfuehrende_Firma.pdf', 'Gegenpruefung_M2.pdf'],
      verlauf: [
        { datum: '2026-08-29', ereignis: 'Nachtragsforderung eingegangen' },
        { datum: '2026-09-05', ereignis: 'Vollständigkeit geprüft' },
        { datum: '2026-09-13', ereignis: 'Erste Kürzung nach Höhenprüfung mitgeteilt' },
      ],
      kommunikation: [
        { von: 'Ausführende Firma', an: 'Philipp Preuß', betreff: 'Mehrmengen Stahlbetonarbeiten', datum: '2026-08-29' },
      ],
    },
  },
  {
    id: 'NT-2026-011',
    projekt: 'LUK Köln',
    projektId: 'luk-koeln',
    perspektive: 'AG',
    nachtragsart: 'Bauzeitverlängerung',
    beschreibung: 'Verlängerung der Bauzeit durch Witterungsbedingungen Winter 2025/2026',
    anspruchsgrund: 'Bauzeitverlängerung nach § 6 Abs. 2 VOB/B',
    geforderterWert: 38000,
    gepruefterWert: 12000,
    status: 'Rückfrage',
    frist: '2026-09-22',
    fristLabel: 'Nachweise Witterung anfordern',
    verantwortlich: 'Benjamin Thumberger',
    details: {
      dokumente: ['Witterungsnachweis_Winter25-26.pdf'],
      verlauf: [
        { datum: '2026-09-01', ereignis: 'Nachtragsforderung eingegangen' },
        { datum: '2026-09-08', ereignis: 'Rückfrage zu Witterungsnachweisen gestellt' },
      ],
      kommunikation: [],
    },
  },
  {
    id: 'NT-2026-016',
    projekt: 'Oppenhof & Partner Köln',
    projektId: 'oppenhof-koeln',
    perspektive: 'AG',
    nachtragsart: 'Beschleunigung',
    beschreibung: 'Beschleunigungsmaßnahmen zur Einhaltung des vertraglichen Fertigstellungstermins',
    anspruchsgrund: 'Beschleunigungsanordnung nach § 1 Abs. 3 VOB/B',
    geforderterWert: 54000,
    gepruefterWert: 54000,
    status: 'anerkannt',
    frist: '2026-09-30',
    fristLabel: 'Beauftragung veranlassen',
    verantwortlich: 'Elias Wüstenhöfer',
    details: {
      dokumente: ['Beschleunigungsanordnung.pdf', 'Pruefung_Hoehe_M2.pdf'],
      verlauf: [
        { datum: '2026-08-15', ereignis: 'Nachtragsforderung eingegangen' },
        { datum: '2026-08-30', ereignis: 'Grund- und Höhenprüfung abgeschlossen' },
        { datum: '2026-09-10', ereignis: 'Forderung anerkannt' },
      ],
      kommunikation: [
        { von: 'Elias Wüstenhöfer', an: 'Ausführende Firma', betreff: 'Anerkennung Beschleunigungsmaßnahmen', datum: '2026-09-10' },
      ],
    },
  },
]

// KI-erkannter, noch nicht formalisierter Sachverhalt für Phase 1 (Erkennung)
export const erkannterSachverhalt = {
  projekt: 'KAU Köln',
  projektId: 'kau-koeln',
  quelle: 'Bautagebuch, Eintrag vom 04.08.2026',
  kiHinweis:
    'Die KI hat im Bautagebuch einen Hinweis auf einen verzögerten Baubeginn erkannt: Die Zufahrt zur Baustelle war blockiert, da die Baugenehmigung für das Nachbargrundstück nicht rechtzeitig vorlag. Möglicher Anspruchsgrund: Behinderung nach § 6 VOB/B. Ähnliche Hinweise wurden in der Terminplanfortschreibung vom 03.08.2026 gefunden.',
  datum: '2026-08-04',
}

// Zweiter, unabhängiger KI-Hinweis — Beispiel für die laufende automatische
// Erkennung weiterer potenzieller Nachträge im Projektportfolio.
export const weitereErkannteSachverhalte = [
  {
    projekt: 'IW Köln',
    projektId: 'iw-koeln',
    quelle: 'Bautagebuch, Eintrag vom 12.09.2026',
    kiHinweis:
      'Die KI hat im Bautagebuch einen Hinweis auf zusätzliche Elektroinstallationsarbeiten erkannt, die nicht im Leistungsverzeichnis enthalten sind. Möglicher Anspruchsgrund: zusätzliche Leistung nach § 2 Abs. 6 VOB/B. Ähnliche Hinweise wurden in zwei E-Mails vom 10.09. und 11.09.2026 gefunden.',
    datum: '2026-09-12',
  },
]

// ---------------------------------------------------------------------------
// Nachtragslebenszyklus — Beispielvorgang NT-2026-014 (KAU Köln)
// ---------------------------------------------------------------------------

export const nachtragslebenszyklusPhasen = [
  { id: 1, label: 'Erkennung' },
  { id: 2, label: 'Vorprüfung' },
  { id: 3, label: 'Prüfung' },
  { id: 4, label: 'Freigabe & Einreichung' },
  { id: 5, label: 'Verhandlung' },
  { id: 6, label: 'Abschluss' },
]

export const vorpruefungFormular = {
  anspruchsgrund: 'Behinderung nach § 6 VOB/B',
  beschreibung:
    'Der Baubeginn verzögerte sich um 14 Werktage, da die Baugenehmigung für das Nachbargrundstück nicht rechtzeitig vorlag und die Zufahrt zur Baustelle dadurch blockiert war.',
  kostenschaetzung: 280000,
}

export const nachweischeckliste = [
  { id: 'nw-1', label: 'Vertrag und Klauseln', status: 'bestätigt' },
  { id: 'nw-2', label: 'Behinderungsanzeige', status: 'bestätigt' },
  { id: 'nw-3', label: 'Bautagebuch', status: 'bestätigt' },
  { id: 'nw-4', label: 'Terminplanstände', status: 'bestätigt' },
  { id: 'nw-5', label: 'Schriftverkehr', status: 'bestätigt' },
  { id: 'nw-6', label: 'Protokolle', status: 'bestätigt' },
  { id: 'nw-7', label: 'Fotodokumentation', status: 'fehlt' },
  { id: 'nw-8', label: 'Kalkulationsunterlagen', status: 'fehlt' },
]

export const positionsliste = [
  { pos: '1', bezeichnung: 'Verlängerte Baustellenvorhaltung (14 AT)', menge: 14, einheit: 'AT', ep: 4200, gp: 58800, gepruefterWert: 58800, differenz: 0 },
  { pos: '2', bezeichnung: 'Zusätzliche Bauleitung', menge: 14, einheit: 'AT', ep: 950, gp: 13300, gepruefterWert: 11400, differenz: -1900 },
  { pos: '3', bezeichnung: 'Verschiebung Nachunternehmerleistungen', menge: 1, einheit: 'psch', ep: 185000, gp: 185000, gepruefterWert: 165000, differenz: -20000 },
  { pos: '4', bezeichnung: 'Mehrkosten Gerätevorhaltung', menge: 1, einheit: 'psch', ep: 22900, gp: 22900, gepruefterWert: 19800, differenz: -3100 },
]

export const pruefungZusammenfassung =
  'Die KI hat den Sachverhalt mit Vertrag, Terminplan und Bautagebuch abgeglichen. Die Behinderung ist dem Grunde nach nachvollziehbar belegt, die Anzeige erfolgte fristgerecht. Bei der Höhe wurden Abweichungen bei der Bauleitung, den Nachunternehmerleistungen und der Gerätevorhaltung festgestellt (insgesamt -25.000 €). Empfehlung: Freigabe mit geprüftem Wert 255.000 €.'

export const pruefungGrund =
  'Vertragliche Anspruchsgrundlage: § 6 VOB/B. Die Verzögerung der Baugenehmigung für das Nachbargrundstück liegt im Verantwortungsbereich des Auftraggebers. Die Behinderungsanzeige wurde am 04.08.2026 fristgerecht und formal korrekt gestellt. Kausalität zwischen Anordnung und Bauzeitverzug ist anhand von Terminplan und Bautagebuch nachvollziehbar. Ergebnis: dem Grunde nach vollständig begründet.'

export const pruefungHoehe =
  'Menge und Einheitspreise der Baustellenvorhaltung entsprechen der Urkalkulation. Bei der Bauleitung und den Nachunternehmerleistungen wurden nicht belegte Zuschläge sowie ein zu hoch angesetzter Verschiebeaufwand festgestellt. Geprüfter Gesamtwert: 255.000 € (Differenz zur Anmeldung: -25.000 €).'

export const freigabeWorkflow = [
  { rolle: 'Bearbeiter', name: 'Elias Wüstenhöfer', status: 'abgeschlossen' },
  { rolle: 'Head of Claim & Contract', name: 'Lisa Kreutzer', status: 'in Prüfung' },
  { rolle: 'Geschäftsführung', name: 'Michal Gamalski', status: 'ausstehend' },
]

export const anschreibenEntwurf = `Sehr geehrte Damen und Herren,

im Rahmen der Baumaßnahme KAU Köln zeigen wir hiermit die Behinderung gemäß § 6 VOB/B an und reichen den daraus resultierenden Nachtrag zur Prüfung ein.

Die Baugenehmigung für das angrenzende Nachbargrundstück lag nicht rechtzeitig vor, wodurch die Zufahrt zur Baustelle blockiert und der Baubeginn um 14 Werktage verzögert wurde. Der geprüfte Nachtragswert beläuft sich auf 255.000 € netto.

Die vollständigen Nachweise (Behinderungsanzeige, Bautagebuch, Terminplanfortschreibung) sind diesem Schreiben beigefügt.

Wir bitten um Stellungnahme bis zum 14.09.2026, 17:00 Uhr.

Mit freundlichen Grüßen
claim.m GmbH`

export const verhandlungsHistorie = [
  { datum: '2026-09-02', bezeichnung: 'Angemeldeter Wert', betrag: 280000 },
  { datum: '2026-09-08', bezeichnung: 'Geprüfter Wert (intern)', betrag: 255000 },
  { datum: '2026-09-10', bezeichnung: 'Gegenangebot Auftraggeber', betrag: 190000 },
  { datum: '2026-09-14', bezeichnung: 'Aktuelle Verhandlungsposition', betrag: 232000 },
]

export const interneVerhandlungsnotizen =
  'Zielkorridor intern: 220.000–240.000 €. Mindestgrenze 210.000 € (Freigabe Lisa Kreutzer erforderlich bei Unterschreitung). Auftraggeber argumentiert mit angeblich vermeidbarer Verzögerung durch verspätete Anzeige – Gegenposition durch Bautagebuch entkräftet. Nächster Schritt: Gesprächstermin 16.09.2026 mit Projektleitung Auftraggeber.'

export const lessonsLearnedFelder = {
  erfolgsfaktoren: 'Frühzeitige und lückenlose Bautagebuchdokumentation ermöglichte eine schnelle und belastbare Behinderungsanzeige.',
  wiederkehrendeRisiken: 'Abhängigkeit von Genehmigungen Dritter (Nachbargrundstücke) sollte bereits in der Angebotsphase vertraglich abgesichert werden.',
  empfehlungFuerKuenftigeProjekte: 'Standardklausel zur Anzeigepflicht bei Drittgenehmigungen in Vertragsvorlagen aufnehmen.',
}

// ---------------------------------------------------------------------------
// GF-Briefing / Jarvis (M10 + M11)
// ---------------------------------------------------------------------------

export const gfEntscheidungen = [
  {
    id: 'decision-1',
    thema: 'Nachtrag KAU Köln freigeben',
    auswirkung: '280.000 € Nachtragsvolumen, kritische Frist heute 17:00 Uhr',
    empfehlung: 'Freigabe empfohlen – Behinderung ist dem Grunde nach vollständig begründet, geprüfter Wert 255.000 €.',
    frist: '2026-09-14, 17:00 Uhr',
  },
  {
    id: 'decision-2',
    thema: 'Angebot Elisenhof Phase 2 freigeben',
    auswirkung: 'Auftragsvolumen 1,1 Mio. €, Projektstart Q4 2026',
    empfehlung: 'Freigabe empfohlen – Deckungsbeitrag und Kapazität sind gesichert.',
    frist: '2026-09-16',
  },
  {
    id: 'decision-3',
    thema: 'Personalentscheidung: Stelle PM ausschreiben?',
    auswirkung: 'Kapazitätsengpass im Q1 2027 bei aktueller Pipeline erkennbar',
    empfehlung: 'Ausschreibung empfohlen, Recruitingdauer ca. 3 Monate einplanen.',
    frist: '2026-09-25',
  },
]

export const gfQuickPrompts = [
  'Welche Projekte sind kritisch?',
  'Pipeline diese Woche?',
  'Offene Freigaben?',
  'Kapazität nächsten Monat?',
]

export const gfChatAntworten = {
  'Welche Projekte sind kritisch?':
    'Zwei Projekte sind aktuell kritisch: KAU Köln (Termine und Kosten rot, Nachtrag über 280.000 € mit Frist heute 17:00 Uhr) und Brückenstraße Köln (Termine und Qualität rot). Beide benötigen diese Woche eine Entscheidung.',
  'Pipeline diese Woche?':
    'Die gewichtete Pipeline liegt aktuell bei 1,4 Mio. €. Größte Opportunity: Angebot Elisenhof Phase 2 (1,1 Mio. €, Freigabe ausstehend). Zwei weitere Opportunities befinden sich in der Angebotsphase.',
  'Offene Freigaben?':
    'Drei Freigaben stehen heute an: Nachtrag KAU Köln (280.000 €), Angebot Elisenhof Phase 2 sowie die Personalentscheidung zur Ausschreibung einer PM-Stelle.',
  'Kapazität nächsten Monat?':
    'Für Oktober 2026 zeigt die Kapazitätsplanung einen beginnenden Engpass im Projektleitungsbereich Köln. Bei Beauftragung von Elisenhof Phase 2 wird eine zusätzliche PM-Kapazität ab Q1 2027 benötigt.',
}

export const gfChatFallback =
  'Diese Anfrage wird im Prototyp simuliert. Im Produktivsystem verbindet sich der KI-Assistent (M10) mit den Live-Daten aller Module und beantwortet die Frage mit anklickbaren Quellen.'

export const gfMorgenbriefing = {
  anrede: 'Guten Morgen, Michal.',
  entscheidungspunkte: [
    { text: 'Nachtrag KAU Köln (280.000 €) — Frist heute 17:00 Uhr', link: '/nachtrag' },
    { text: 'Angebot Elisenhof Phase 2 — Freigabe ausstehend', link: '/claims' },
    { text: 'Personalentscheidung: Stelle PM ausschreiben?', link: '/gf-briefing' },
  ],
  portfolio: '8 Projekte aktiv, 2 kritisch',
  pipeline: '1,4 Mio. € gewichtet',
  liquiditaet: 'unauffällig',
}

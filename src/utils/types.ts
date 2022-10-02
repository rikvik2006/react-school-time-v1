import moment from "moment";

export type HourContent = {
    id: string;
    name: string;
    emoji: string;
    tags: string[];
    note: string;
    description: string;
    created: string;
}

type HourContentNull = {
    val: null;
}

export const hoursContent: HourContent[] | HourContent[] = [
    {
        id: "0",
        name: "Matematica",
        emoji: "➗",
        tags: ["Verifica🔥"],
        note: "Portare fogli protocollo...",
        description: "lorem ipus * 10",
        created: `Creato ${moment().format("DD/MM/y")}`
    },
    {
        id: "1",
        name: "Motoria",
        emoji: "🏃‍♂️",
        tags: ["Partita🏐"],
        note: "Portare scarpe da ginnastica",
        description: "Ninete non faro niente come sempre",
        created: `Creato ${moment().format("DD/MM/y")}`
    },
    {
        id: "2",
        name: "Informatica",
        emoji: "🖥️",
        tags: ["Lezione📖"],
        note: "Lezione su react router dom",
        description: "Introduzione continuazione della spiegazione di react, più introduzione hai router con react router dom",
        created: `Creato ${moment().format("DD/MM/y")}`
    },
    {
        id: "3",
        name: "Informatica",
        emoji: "🖥️",
        tags: ["Laboratorio⚗️"],
        note: "Applicazione dei concetti spiegati nell ora precedente",
        description: "Postazione 2, utente: PinoPagliaccio, password: 1234... ma se metto un 5",
        created: `Creato ${moment().format("DD/MM/y")}`
    },
    {
        id: "4",
        name: "Storia",
        emoji: "🪖",
        tags: ["Lezione📖"],
        note: "Portare il libro porate il libro noi di ieri oggi e domani",
        description: "Intro duzione sull epoca dell bo non so una cosa a caso non credo ci sia qualcuno che ascolti storia",
        created: `Creato ${moment().format("DD/MM/y")}`
    },
    {
        id: "3",
        name: "Informatica",
        emoji: "🌐",
        tags: ["Lezione📖"],
        note: "Spiegazione sull protocolli di base delle reti",
        description: "Spiegazione protocolli fondamentali delle reti, IP, TCP, UDP. Spiegazione di base sul portfordwarding e come bloccare/accettare richieste modidificando le opzioni del firewall",
        created: `Creato ${moment().format("DD/MM/y")}`
    },
    {
        id: "5",
        name: "Sistemi e reti",
        emoji: "🌐",
        tags: ["Laboratorio⚗️"],
        note: "Applicazione dei concetti spiegati nell ora precedente",
        description: "Postazione 3, utente: PinoPagliaccio, password: 1234... ma se metto un 5",
        created: `Creato ${moment().format("DD/MM/y")}`
    },
    {
        id: "7",
        name: "Telecomunicazioni",
        emoji: "🔋",
        tags: ["Spiegazione📖"],
        note: "Portare i 2 quaderni rossi di telecomunicazioni",
        description: "Esercizi di ripasso sui circuiti",
        created: `Creato ${moment().format("DD/MM/y")}`
    },
    {
        id: "8",
        name: "Telecomunicazioni",
        emoji: "🔋",
        tags: ["Laboratorio⚗️"],
        note: "Nuovo laboratorio cambiato dal B05, al B15",
        description: "Applicazione dei concetti ripassati nell ora precedente",
        created: `Creato ${moment().format("DD/MM/y")}`
    },
    {
        id: "9",
        name: "Telecomunicazioni",
        emoji: "🔋",
        tags: ["Laboratorio⚗️"],
        note: "Nuovo laboratorio cambiato dal B05, al B15",
        description: "Applicazione dei concetti ripassati nell ora precedente",
        created: `Creato ${moment().format("DD/MM/y")}`
    },
    {
        id: "10",
        name: "Informatica",
        emoji: "🖥️",
        tags: ["Spiegazione📖"],
        note: "Portare libro E-Proggram e PC portatile",
        description: "Introduzione su il machine learing e l'inteligenza artificiale con python",
        created: `Creato ${moment().format("DD/MM/y")}`
    },
    {
        id: "11",
        name: "Matematica",
        emoji: "➗",
        tags: ["Laboratorio⚗️"],
        note: "Portare libro di Matematica e quanderno, più il libro piccolo",
        description: "",
        created: `Creato ${moment().format("DD/MM/y")}`
    },
    {
        id: "12",
        name: "Religione",
        emoji: "➗",
        tags: ["Lezione📖"],
        note: "Finire il compito di educazione civica",
        description: "Educazione civica i 17 obbiettivi della agenda 20 30... ancora",
        created: `Creato ${moment().format("DD/MM/y")}`
    },
    {
        id: "13",
        name: "Motoria",
        emoji: "🏃‍♂️",
        tags: ["Partita🏐"],
        note: "Portare scarpe da ginnastica",
        description: "Ninete non faro niente come sempre",
        created: `Creato ${moment().format("DD/MM/y")}`
    },
    {
        id: "14",
        name: "Informatica",
        emoji: "🖥️",
        tags: ["Lezione📖"],
        note: "Lezione su react router dom",
        description: "Introduzione continuazione della spiegazione di react, più introduzione hai router con react router dom",
        created: `Creato ${moment().format("DD/MM/y")}`
    },
    {
        id: "15",
        name: "Informatica",
        emoji: "🖥️",
        tags: ["Laboratorio⚗️"],
        note: "Applicazione dei concetti spiegati nell ora precedente",
        description: "Postazione 2, utente: PinoPagliaccio, password: 1234... ma se metto un 5",
        created: `Creato ${moment().format("DD/MM/y")}`
    },
    {
        id: "16",
        name: "Storia",
        emoji: "🪖",
        tags: ["Lezione📖"],
        note: "Portare il libro porate il libro noi di ieri oggi e domani",
        description: "Intro duzione sull epoca dell bo non so una cosa a caso non credo ci sia qualcuno che ascolti storia",
        created: `Creato ${moment().format("DD/MM/y")}`
    },
    {
        id: "17",
        name: "Informatica",
        emoji: "🌐",
        tags: ["Lezione📖"],
        note: "Spiegazione sull protocolli di base delle reti",
        description: "Spiegazione protocolli fondamentali delle reti, IP, TCP, UDP. Spiegazione di base sul portfordwarding e come bloccare/accettare richieste modidificando le opzioni del firewall",
        created: `Creato ${moment().format("DD/MM/y")}`
    },
    {
        id: "18",
        name: "Sistemi e reti",
        emoji: "🌐",
        tags: ["Laboratorio⚗️"],
        note: "Applicazione dei concetti spiegati nell ora precedente",
        description: "Postazione 3, utente: PinoPagliaccio, password: 1234... ma se metto un 5",
        created: `Creato ${moment().format("DD/MM/y")}`
    },
    {
        id: "19",
        name: "Telecomunicazioni",
        emoji: "🔋",
        tags: ["Spiegazione📖"],
        note: "Portare i 2 quaderni rossi di telecomunicazioni",
        description: "Esercizi di ripasso sui circuiti",
        created: `Creato ${moment().format("DD/MM/y")}`
    },
    {
        id: "20",
        name: "Telecomunicazioni",
        emoji: "🔋",
        tags: ["Laboratorio⚗️"],
        note: "Nuovo laboratorio cambiato dal B05, al B15",
        description: "Applicazione dei concetti ripassati nell ora precedente",
        created: `Creato ${moment().format("DD/MM/y")}`
    },
    {
        id: "21",
        name: "Telecomunicazioni",
        emoji: "🔋",
        tags: ["Laboratorio⚗️"],
        note: "Nuovo laboratorio cambiato dal B05, al B15",
        description: "Applicazione dei concetti ripassati nell ora precedente",
        created: `Creato ${moment().format("DD/MM/y")}`
    },
    {
        id: "22",
        name: "Informatica",
        emoji: "🖥️",
        tags: ["Spiegazione📖"],
        note: "Portare libro E-Proggram e PC portatile",
        description: "Introduzione su il machine learing e l'inteligenza artificiale con python",
        created: `Creato ${moment().format("DD/MM/y")}`
    },
    {
        id: "23",
        name: "Matematica",
        emoji: "➗",
        tags: ["Laboratorio⚗️"],
        note: "Portare libro di Matematica e quanderno, più il libro piccolo",
        description: "",
        created: `Creato ${moment().format("DD/MM/y")}`
    },
    {
        id: "24",
        name: "Storia",
        emoji: "🪖",
        tags: ["Lezione📖"],
        note: "Portare il libro porate il libro noi di ieri oggi e domani",
        description: "Intro duzione sull epoca dell bo non so una cosa a caso non credo ci sia qualcuno che ascolti storia",
        created: `Creato ${moment().format("DD/MM/y")}`
    },
    {
        id: "25",
        name: "Informatica",
        emoji: "🌐",
        tags: ["Lezione📖"],
        note: "Spiegazione sull protocolli di base delle reti",
        description: "Spiegazione protocolli fondamentali delle reti, IP, TCP, UDP. Spiegazione di base sul portfordwarding e come bloccare/accettare richieste modidificando le opzioni del firewall",
        created: `Creato ${moment().format("DD/MM/y")}`
    },
    {
        id: "26",
        name: "Sistemi e reti",
        emoji: "🌐",
        tags: ["Laboratorio⚗️"],
        note: "Applicazione dei concetti spiegati nell ora precedente",
        description: "Postazione 3, utente: PinoPagliaccio, password: 1234... ma se metto un 5",
        created: `Creato ${moment().format("DD/MM/y")}`
    },
    {
        id: "27",
        name: "Telecomunicazioni",
        emoji: "🔋",
        tags: ["Spiegazione📖"],
        note: "Portare i 2 quaderni rossi di telecomunicazioni",
        description: "Esercizi di ripasso sui circuiti",
        created: `Creato ${moment().format("DD/MM/y")}`
    },
    {
        id: "28",
        name: "Telecomunicazioni",
        emoji: "🔋",
        tags: ["Laboratorio⚗️"],
        note: "Nuovo laboratorio cambiato dal B05, al B15",
        description: "Applicazione dei concetti ripassati nell ora precedente",
        created: `Creato ${moment().format("DD/MM/y")}`
    },
    {
        id: "29",
        name: "Telecomunicazioni",
        emoji: "🔋",
        tags: ["Laboratorio⚗️"],
        note: "Nuovo laboratorio cambiato dal B05, al B15",
        description: "Applicazione dei concetti ripassati nell ora precedente",
        created: `Creato ${moment().format("DD/MM/y")}`
    },
    {
        id: "30",
        name: "Informatica",
        emoji: "🖥️",
        tags: ["Spiegazione📖"],
        note: "Portare libro E-Proggram e PC portatile",
        description: "Introduzione su il machine learing e l'inteligenza artificiale con python",
        created: `Creato ${moment().format("DD/MM/y")}`
    },
    {
        id: "31",
        name: "Matematica",
        emoji: "➗",
        tags: ["Laboratorio⚗️"],
        note: "Portare libro di Matematica e quanderno, più il libro piccolo",
        description: "Portare libro e quaderno",
        created: `Creato ${moment().format("DD/MM/y")}`
    },
]
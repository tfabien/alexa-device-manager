// Configuration des URLs d'API disponibles
const API_URLS = [
    "https://alexa.amazon.de/api/behaviors/entities?skillId=amzn1.ask.1p.smarthome",
    "https://alexa.amazon.com/api/behaviors/entities?skillId=amzn1.ask.1p.smarthome",
    "https://layla.amazon.com/api/behaviors/entities?skillId=amzn1.ask.1p.smarthome",
    "https://pitangui.amazon.com/api/behaviors/entities?skillId=amzn1.ask.1p.smarthome",
    "https://alexa.amazon.co.jp/api/behaviors/entities?skillId=amzn1.ask.1p.smarthome"
];

// Configuration des pays pour la connexion Amazon
const COUNTRIES = [
    { code: "FR", name: "France", url: "https://www.amazon.fr" },
    { code: "DE", name: "Allemagne", url: "https://www.amazon.de" },
    { code: "US", name: "États-Unis", url: "https://www.amazon.com" },
    { code: "JP", name: "Japon", url: "https://www.amazon.co.jp" },
    { code: "BR", name: "Brésil", url: "https://www.amazon.com.br" }
];

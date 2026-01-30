// Gestion de l'interface utilisateur
function renderStep1() {
    const countriesHTML = COUNTRIES.map(country =>
        `<option value="${country.code}">${country.name}</option>`
    ).join('');
    return `
        <div class="wizard-step active" id="step1">
            <h2>Étape 1 : Vérifiez votre connexion Amazon</h2>
            <p>Assurez-vous d'être connecté à votre compte Amazon.</p>
            <select id="country-select">${countriesHTML}</select>
            <button id="open-amazon">Ouvrir Amazon</button>
            <button id="next-step1">Suivant</button>
        </div>
    `;
}

function renderStep2() {
    const urlsHTML = API_URLS.map(url =>
        `<option value="${url}">${url}</option>`
    ).join('');
    return `
        <div class="wizard-step" id="step2">
            <h2>Étape 2 : Sélectionnez l'URL de l'API</h2>
            <p>Choisissez l'URL de l'API à utiliser ou laissez le système deviner.</p>
            <select id="api-url-select">${urlsHTML}</select>
            <button id="guess-url">Deviner l'URL</button>
            <button id="next-step2">Suivant</button>
        </div>
    `;
}

function renderResult(devices) {
    return `
        <h2>Résultat</h2>
        <pre>${JSON.stringify(devices, null, 2)}</pre>
    `;
}

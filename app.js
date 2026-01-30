// Logique principale de l'application
document.addEventListener('DOMContentLoaded', () => {
    const wizardEl = document.getElementById('wizard');
    const resultEl = document.getElementById('result');
    let currentStep = 1;

    // Initialisation du wizard
    wizardEl.innerHTML = renderStep1() + renderStep2();

    // Étape 1 : Vérification de la connexion Amazon
    document.getElementById('open-amazon').addEventListener('click', () => {
        const countryCode = document.getElementById('country-select').value;
        const country = COUNTRIES.find(c => c.code === countryCode);
        openInNewTab(country.url);
    });

    document.getElementById('next-step1').addEventListener('click', () => {
        document.getElementById('step1').classList.remove('active');
        document.getElementById('step2').classList.add('active');
        currentStep = 2;
    });

    // Étape 2 : Sélection de l'URL de l'API
    document.getElementById('guess-url').addEventListener('click', async () => {
        const selectEl = document.getElementById('api-url-select');
        for (const url of API_URLS) {
            const result = await testApiUrl(url);
            if (result.success && result.data && result.data.length > 0) {
                selectEl.value = url;
                alert(`URL devinée : ${url}`);
                break;
            }
        }
    });

    document.getElementById('next-step2').addEventListener('click', async () => {
        const apiUrl = document.getElementById('api-url-select').value;
        setCookie('alexa_api_url', apiUrl);
        try {
            const devices = await fetchDevices(apiUrl);
            wizardEl.classList.add('hidden');
            resultEl.innerHTML = renderResult(devices);
            resultEl.classList.remove('hidden');
        } catch (error) {
            alert(`Erreur : ${error.message}`);
        }
    });
});

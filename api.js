// Gestion des appels API
async function testApiUrl(url) {
    try {
        const response = await fetch(url, { method: 'GET', credentials: 'include' });
        if (response.ok) {
            const data = await response.json();
            return { success: true, url, data };
        }
        return { success: false, url };
    } catch (error) {
        return { success: false, url, error: error.message };
    }
}

async function fetchDevices(apiUrl) {
    const response = await fetch(apiUrl, { method: 'GET', credentials: 'include' });
    if (!response.ok) throw new Error("Erreur lors de la récupération des appareils.");
    return await response.json();
}

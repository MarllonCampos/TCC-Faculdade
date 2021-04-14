export function saveData(data) {
    try {
        sessionStorage.setItem('greeneryData', JSON.stringify(data));
        return 'sucesso'
    } catch (e) {
        return `erro ${e}`
    }

};


export function retrieveSessionData(sessionName) {
    try {
        return JSON.parse(sessionStorage.getItem(sessionName))
    } catch (e) {
        return `erro ${e}`
    }

};
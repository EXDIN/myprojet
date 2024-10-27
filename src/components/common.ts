export function getCurrentDate() {
    const day = (new Date().getDate()) < 10 ? "0"+(new Date().getDate()) : new Date().getDate()
    const month = (new Date().getMonth()) < 10 ? "0"+(new Date().getMonth()) : new Date().getMonth()
    return day+"."+month+"."+new Date().getFullYear()
}

export enum LANGUAGE {
    "UA",
    "EN"
}

export function lang(stingUA: string, stringUK: string) {
    const currLanguage = Number(localStorage.getItem('userLanguage')) || LANGUAGE.UA;
    if (currLanguage == null || LANGUAGE[0] === LANGUAGE[currLanguage]) {
        return String(stingUA);
    } else {
        return String(stringUK);
    }
}
export function getCurrentDate() {
    return new Date().getDay()+"."+new Date().getMonth()+"."+new Date().getFullYear()
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
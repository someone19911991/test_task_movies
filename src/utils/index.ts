function fLUppercase(str: string) {
    return str[0].toUpperCase() + str.slice(1);
}

const getNecessaryValuesFromMovie = (necessaryKeys: string[], object: any) => {
    const dataToReturn: any = {};
    for(let i in object){
        dataToReturn[i.toLowerCase()] = object[i];
    }
    return dataToReturn;
}

export { fLUppercase, getNecessaryValuesFromMovie };

export function getError(response) {
    const errorMessage = `There was an ERROR!!! ${response.status} ${response.statusText}`;
    return errorMessage;
 }

export function getData(response) { 
    console.log(response);
    const dataMessage = {
        "Definition": response.entries[0].lexemes[0].senses[0].definition
    };
    return dataMessage;
}

export function getDefinition() { }
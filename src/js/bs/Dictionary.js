export function getError(response) {
    const errorMessage = `There was an ERROR!!! ${response.status} ${response.statusText}`;
    return errorMessage;
 }

export function getData(response) { }

export function getDefinition() { }
export function getError(response) {
    const errorMessage = `There was an ERROR!!! ${response.status} ${response.statusText}`;
    return errorMessage;
 }

export function getData(response) { 
    const dataMessage = {
        "Definition": response.entries[0].lexemes[0].senses[0].definition
    };
    return dataMessage;
}

export function getDefinition(word) {
    const url = 'https://lingua-robot.p.rapidapi.com/language/v1/entries/en/example';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.API_KEY,
            'X-RapidAPI-Host': 'lingua-robot.p.rapidapi.com'
	    }
    };

    fetch(url, options)
        .then(response => {
            const result = response.json();
            if (!result.ok)
                reject(response)
            else
                resolve(response)
        })
        .then(getData(data), getError(error))
    
}
    
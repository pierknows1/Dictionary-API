import { getError, getData, getDefinition } from '../src/js/bs/Dictionary';

describe("getError", () => {
    test("should return an error", () => { 
        const response = {
            status: '404',
            statusText: 'Not Found'
        };
        const error = getError(response);
        expect(error).toBe("There was an ERROR!!! 404 Not Found");
    }); 
});

describe("getData", () => {
    test("should get a definition", () => {
        const response = {
            "entries": [
                {
                    "lexemes": [
                    {
                        "senses": [
                            {
                                "definition": "(heading) Employment.",
                            }
                        ]
                    }
                ]
                }
            ]
            
        };
        const data = getData(response);
        expect(data).toEqual({ "Definition": "(heading) Employment." });
    });
});

describe("getDefiniton", () => {
    test("should get a definition", () => {
        const word = "work";
        const response = getDefinition(word);
        expect(response).toBe({ "Definition": "(heading) Employment." });
    })
})
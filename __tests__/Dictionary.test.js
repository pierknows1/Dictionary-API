import { getError, getData, getDefinition } from '../src/js/bs/Dictionary';

describe("getError", () => {
    test("should return an error", () => { 
        const response = {
            status: '404',
            statusText: 'Not Found'
        };
        const error = getError(response);
        expect(error).toBe("404 Not Found");
    }); 
});

// describe("getData", () => {
//     test("should...")
// });



// describe("getDefiniton", () => {
//     test("explanation", () => {
//         const ipt = "";
//         const val = "";
//         const component = new Component(ipt);
//         expect(component.property).toBe(val);
//     })
// })
const { generateRandomNric } = require('./generator')

describe("NRIC_Controller.generateRandomNric", () => {
    it('matches regex', () => {

        const randomNric = generateRandomNric();

        const regex = /[STFG]\d{7}[A-Z]/;
        expect(randomNric).toMatch(regex);
    });
});
const generateRandomNric = () => {
    const firstLettersBank = "STFG";
    const middleNumbersBank = "0123456789";
    const lastLettersBank = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let firstLetter = firstLettersBank[Math.floor(Math.random() * firstLettersBank.length)];
    let middleNumbers = "";
    let lastLetter = lastLettersBank[Math.floor(Math.random() * lastLettersBank.length)];

    for (let i = 0; i < 7; i++) {
        middleNumbers += middleNumbersBank[Math.floor(Math.random() * middleNumbersBank.length)];
    }

    return `${firstLetter}${middleNumbers}${lastLetter}`;
};

module.exports = {
    generateRandomNric
}

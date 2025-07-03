export function randomStringGenerator() {
    const min = 9;
    const max = 13;
    const randomStringLength = Math.floor(Math.random() * (max - min + 1)) + min;

    const symbols = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM12345679';
    let result = '';

    for (let i = 0; i < randomStringLength; i++) {
        const randomIndex = Math.floor(Math.random() * symbols.length);
        result += symbols[randomIndex];
    }

    return result;
}

const groupAnagrams = (strings) => {
    const sortedStrings = strings.map((str) => {
        return str.split('').sort().join('');
    });
    const hash = {};

    for(let i = 0; i < strings.length; i++) {
        const sortedWord = sortedStrings[i];
        const currentWord = strings[i];
        if(!(sortedWord in hash)) {
            hash[sortedWord] = [];
        }
        hash[sortedWord].push(currentWord);
    }
    return Object.values(hash);
};

module.exports = {
    name: 'Group Anagrams',
    program: groupAnagrams
};

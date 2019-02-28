const words = [art, elbow, night, save, below, vase, car, thing];

function reorganize(words) {
    if (!words) {
        return;
    }

    words = words.split("");
    words = words.sort("");
    words = words.join("");
    return words;
}

function regroup(words) {
    const anagrams = {}; //holds empty object 
    
    words.forEach((words) => {
        const sortWords = reorganize(words);
        if (anagrams[sortWords]) {
            return anagrams[sortWords].push(words);
        }
        anagrams[sortWords] = [words];
    });
    return anagrams; //returns objet
}

//  Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
function translatePigLatin(str) {
    return str;
}

translatePigLatin("consonant");

// translatePigLatin("california") should return the string aliforniacay.
// translatePigLatin("paragraphs") should return the string aragraphspay.
// translatePigLatin("glove") should return the string oveglay.
// translatePigLatin("algorithm") should return the string algorithmway.
// translatePigLatin("eight") should return the string eightway.
// Should handle words where the first vowel comes in the middle of the word. translatePigLatin("schwartz") should return the string artzschway.
// Should handle words without vowels. translatePigLatin("rhythm") should return the string rhythmay.

function translatePigLatin(str) {
    let vowels = "aeiou".split("")
    // declared all the vowels and splited them one by one
    // console.log(vowels); => [ 'a', 'e', 'i', 'o', 'u' ]
    function isVowel(letter) {
        return vowels.indexOf(letter);
    }
    //  helper function to not repeat same code.

    for (let i = 0; i < str.length; i += 1) {
        let individualLetter = str[i];
        //  -iterated through the string and decleared individualLetter to have easy understanding
        if (isVowel(individualLetter) != -1 && i === 0) {
            return str + "way";
        }
        //  if it is a vowel and at position zero return string with "way" added to it like "eightway" or "algorithmway"

        if (isVowel(individualLetter) != -1) {
            // + console.log(str.slice(i));     //alifornia
            // + console.log(str.slice(0, i));  //c
            // + "ay"                           // aliforniacay
            return str.slice(i) + str.slice(0, i) + "ay";
        }
    }

    return str + "ay";
    // for str = rhythm + ay //rhythmway
}

let result = translatePigLatin("california");
console.log(result);
//liforniacay
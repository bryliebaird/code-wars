const vowelArr = ["a", "e", "i", "o", "u"];

const word = "brylie";
const wordArr = word.split("");

const vowelCount = function(vowelArr, wordArr){
    let vowelsCount = 0;

    for(letter of wordArr){
        for(vowel of vowelArr){
            if(letter === vowel){
                vowelsCount++;
            }
        }
    }
    return vowelsCount;
}

vowelCount(vowelArr, wordArr);
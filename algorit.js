

function analyzSentence(sentence){
    // initialize counters
    let length = 0;
    let wordCount = 0;
    let vowelCount = 0;

    //   iterate over each character in the sentence


    for (let i = 0; i < sentence.length; i++){
        const character = sentence[i]

        // increment length counter
        length++;

        // check if the character is a space or a point
        if(character === '' || character ===''){
            // if the character is a space or a pointerEvent, increment word i it's not the last character

            if (i!== sentence.length -1){
                wordCount++;
            }

        }else{
            // if the character is not a space or a PointerEvent,check if it's a vowel
            if (isVowel(character)){
                vowelCount++
            }
        }  a
    }
            return{
                length:length,
                wordCount:wordCount,
                vowelCount:vowelCount
            };
            // helper functionto check if a character is a vowel
            function isVowel(character){
                return ['a','e','i','o','u'].includes(character.toLower());
            }
            // Example usage
            const sentence = "Hello, how are you today?";
            const analysis = analyzSentence(sentence);
            console.log("Length:", analysis.length);
            console.log("Word count:",analysis.wordCount);
            console.log("Vowel count:", analysis.vowelCount)
        }

    
    
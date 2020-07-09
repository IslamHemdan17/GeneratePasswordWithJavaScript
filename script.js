const characterAmountRange=document.getElementById('characterAmountRange');
const characterAmountNumber=document.getElementById('characterAmountNumber');
const includeUppercaseElement=document.getElementById('includeUppercase');

const includeNumbersElement=document.getElementById('includeNumbers');

const includeSymbolsElement=document.getElementById('includeSymbols');

const form=document.getElementById('passwordGeneratorform');

const passwordDisplay=document.getElementById('passwordDisplay');


const UpperCase_Char_Codes= arrayFromLowToHigh(65,90)
const LowerCase_Char_Codes= arrayFromLowToHigh(97,122)
const Number_Char_Codes= arrayFromLowToHigh(48,57)
const Symbol_Char_Codes= arrayFromLowToHigh(33,47).concat(
    arrayFromLowToHigh(58,64)
).concat(
    arrayFromLowToHigh(91,96)
    ).concat(
        arrayFromLowToHigh(123,126)
)
    


characterAmountRange.addEventListener('input',synchCharacterAmount)
characterAmountNumber.addEventListener('input',synchCharacterAmount)



form.addEventListener('submit',e=>{

    e.preventDefault();

    const characterAmount=characterAmountNumber.value;
    const includeUpercase=includeUppercaseElement.checked;
    const includeNumbers=includeNumbersElement.checked;
    const includeSymbols=includeSymbolsElement.checked;

    const password=generatePassword(characterAmount,includeUpercase,includeNumbers,includeSymbols)

    passwordDisplay.innerText=password
})


function generatePassword(characterAmount,includeUpercase,includeNumbers,includeSymbols)
{
    let charcodes=LowerCase_Char_Codes;

    if(includeUpercase){
        charcodes=charcodes.concat(UpperCase_Char_Codes)
    }
    if(includeNumbers){
        charcodes=charcodes.concat(Number_Char_Codes)
    }
    if(includeSymbols){
        charcodes=charcodes.concat(Symbol_Char_Codes)
    }

    const PasswordCharacters=[];
    for (let index = 0; index < characterAmount; index++) {
        const characterCode =charcodes[Math.floor(Math.random() * charcodes.length)];

        PasswordCharacters.push(String.fromCharCode(characterCode))
    }
    return PasswordCharacters.join('');


}

function arrayFromLowToHigh(low,high){
    const array=[];
    for (let i = low; i <=high; i++) {
        array.push(i);
    }
    return array
}















function synchCharacterAmount(e){
    const value=e.target.value;
    characterAmountRange.value=value;
    characterAmountNumber.value=value;
}
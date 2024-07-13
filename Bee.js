const charVal = document.getElementById("textarea");
 let totalCount = document.getElementById("total-conter");
 let remanCount = document.getElementById("remaining-counter");
 let userChar = 0;

const updateCounter = ( ) => {
     userChar = charVal.value.length;
    
     totalCount.innerText = userChar;
     remanCount.innerText = 300 - userChar;
};

charVal.addEventListener("keyup" , ()  => updateCounter());

// copy the text code
const copyText = () => {
    charVal.select();
    charVal.setSelectionRange(0 , 9999); //mobile
    navigator.clipboard.writeText(charVal.value); //imp



};


/*F-TASK: 

Shunday findDoublers function tuzing, unga faqat bitta string argument pass bolib, agar stringda bir hil harf qatnashgan bolsa true, qatnashmasa false qaytarishi kerak.
MASALAN: getReverse("hello") return true return qiladi */

function findDoublers(str){
    for(i=0; i<str.length; i++){
        for(j=i+1; j<str.length; j++){
            if(str[i] === str[j]){
                return true;
            }
        }
    }
    return false;
}

result = findDoublers("helo");

console.log(result);
// E-TASK: 
// Shunday function tuzing, u bitta string argumentni qabul qilib osha stringni teskari qilib return qilsin.
// MASALAN: getReverse("hello") return qilsin "olleh"


function getReverse(str){
    return str.split("").reverse().join("");
  }
  
  
  result = getReverse("hello");
  
  console.log(result);
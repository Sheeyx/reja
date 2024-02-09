// A-TASK: 

// Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
// MASALAN countLetter("e", "engineer") 3ni return qiladi.

function countLetter(letter,word){
    let i = 0;
    let count = 0;
    while(i < word.length-1){
        if(word[i] == letter){
            count++
        }
        i++
    }

    return count > 0 ? count : 0;
}

result = countLetter("w", "engineer");

console.log(result);



// *********  Event loop & Callback functions **************

// const list = [
//     "yahshi talaba boling",// 0-20
//     "togri boshliq tanlang va koproq hato qling", //20-30
//     "uzingizga ishlashingizni boshlang", //30 - 40
//     "siz kuchli bolgan narsalarni qiling", // 40-50
//     "yoshlarga investitsiya qiling", // 50-60
//     "endi dam oling, foydasi yoq endi" // 60
// ];

// function maslahatBering(a, callback){
//     if(typeof a !== "number") callback("insert number",null)
//     else if(a <= 20) callback(null,list[0])
//     else if(a <= 20 && a<30) callback(null,list[1])
//     else if(a <= 30 && a<40) callback(null,list[2])
//     else if(a <= 40 && a<50) callback(null,list[3])
//     else if(a <= 50 && a<60) callback(null,list[4])
//     else {
//         setTimeout(function(){
//             callback(null, list[5]);
//         },5000)
//     }
// }

// console.log("passed here 0");
// maslahatBering(65, (err,data)=>{
//     if(err) console.log("ERROR: ",err);
//     console.log("Javob: ",data);
// })
// console.log("passed here 1");



// *********  Asynchronous function **************

// async function maslahatBering(a){
//     if(typeof a !== "number") throw Error("insert a number");
//     else if(a <= 20) return(list[0])
//     else if(a <= 20 && a<30) return(list[1])
//     else if(a <= 30 && a<40) return(list[2])
//     else if(a <= 40 && a<50) return(list[3])
//     else if(a <= 50 && a<60) return(list[4])
//     else {
//         ////return(list[5]);
//         // return new Promise((resolve, reject)=>{
//         //     setTimeout(()=>{
//         //         return(list[5]);
//         //     },5000)
//         // })
        
//     }
// }

// then,catch
// console.log("passed here 0");
// maslahatBering(60)
//     .then((data)=>{
//         console.log("javob", data);
//     })
//     .catch((err)=>{
//         console.log("ERROR ",err);
//     });

// console.log("passed here 1");

//async await

// async function run(){
//     let javob = await maslahatBering(20);
//     console.log(javob);
//     javob = await maslahatBering(30);
//     console.log(javob);
//     javob = await maslahatBering(40);
//     console.log(javob);
// }

// run();
// C-TASK: 

// Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin, hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.
// MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!

const moment = require("moment");

class Shop{
    non;
    lagmon;
    cola;

    constructor(non, lagmon, cola){
        this.non = non;
        this.lagmon = lagmon;
        this.cola = cola;
    }

    qabul(name, amount){
        if(name == "non"){
            this.non += amount;
        } else if(name == "lagmon"){
            this.lagmon += amount;
        } else if(name == "cola"){
            this.cola += amount;
        }
    }

    sotish(name, amount){
        if(name == "non"){
            this.non >= amount ? this.non -= amount : console.log(`${this.non} yetarli emas`);
        } else if(name == "lagmon"){
            this.lagmon >= amount ? this.lagmon -= amount : console.log(`${this.lagmon} yetarli emas`);
        } else if(name == "cola"){
            this.cola >= amount ? this.cola -= amount : console.log(`${this.cola} yetarli emas`);

        }
    }

    qoldiq(){
        console.log(`Hozir ${moment().format('H:mm')} da ${this.non} ta non, ${this.lagmon} ta lagmon va ${this.cola} ta cola mavjud!`);
    }
    
}

const shop = new Shop(4, 5, 2);

shop.qoldiq();

shop.sotish('non', 3)

shop.qoldiq();

shop.sotish('non', 1)

shop.qoldiq();

shop.sotish('non', 1)

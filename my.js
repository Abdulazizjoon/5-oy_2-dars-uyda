//1-masala
// (function() {
//     var a = 10;
//     console.log(a);
// })();
// (function () {
//     var sozlar="salom bu lIfe"
//     console.log("lIfe dagi soz",sozlar);
// }
// )();

// qovusni ichida funcsiya yozils va qovusdan keyin yana bitta bosh qovus yozilsa bi lIfe deyiladi
//lIfe assosan kodlarni biro buzib kirmasligi uchun ishlatiladi masalan console logdan kimdir kod yozsa
// ishlab ketishi munkun va kerakli malumotlar havfsiz bolmaydi shuning uchun lIfe kerak agar unu shlatsa
//kodingizni hechkim ololmaydi va lIfeni faqat kerakli, hechkim bilmasigi kerak bolgan kodga ishlatish 
//lozim chunki hamassiga ishlatisez kodiz sekinlashadi 

//2-masala
//a
// function filterlash(massiv) {
//     let sonlarik = massiv.filter(x => x % 2 === 0);
//     return sonlarik;
// }
// var massiv = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var natija = filterlash(massiv);
// console.log("Juft sonlar:", natija);
//b

// function yigis(massiv) {
//     return massiv.reduce((acc, current) => acc + current, 0);
// }
// let massiv = [1, 2, 3, 4, 5];
// let yigindi = yigis(massiv);
// console.log(yigindi);

//3-masala
//b
// function a(callback) {
//     console.log("2-sekund kuting");
//     setTimeout(function() {
//         callback("Asinxron funksiya");
//     }, 2000);
// }
// a(function(b) {
//     console.log(b);
// });

//c
//calbak funksuay asosan setinterval ,settimeout...shunga oxshash narsalarga kerak
//vaqt chegarasi,sorov,larda kop ishlatiladi

//4-masala
// function tes(a) {
//     if (a <= 0) {
//         return
//     }
//     console.log(a)
//     tes(a - 1);
// }
// tes(5);

setInterval(function () {
    if (a) {
        
    }
})


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

// function aa(b) {
//     for (let key in b) {
//         if (b.hasOwnProperty(key)) { 
//             console.log(`${key}: ${b[key]}`);
//         }
//     }
// }

// let a = {
//     a: 1,
//     b: "two",
//     c: [3, 4, 5]
// };

// aa(a);

// function chiqar(a) {
//     for (let key in a) {
//         if (a.hasOwnProperty(key)) {
//             console.log(`${key}: ${a[key]}`);
//         }
//     }
// }

// let aa = {
//     a: 1,
//     b: 2,
//     c: 3
// };

// chiqar(aa);

// function a(aa, b) {
//     let d = -1;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === b) {
//             d = i;
//         }    
//     }

//     return d;
// }


// let arr = [1, 3, 5, 3, 7, 9, 3];
// let t = 3;
// let res = a(arr, b);
// console.log(t, res);



// function a(arr) {
//     if (arr.length < 3) {
//         return "error";
//     }
    
//     var boshlanishi = Math.floor(arr.length / 2) - 1;
//     var oxirgi = boshlanishi + 3;
    
//     return arr.slice(boshlanishi, oxirgi);
// }


// var aa = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// var yigindi = a(aa);
// console.log(yigindi);


// function a(arr, b) {

//     var d = Math.floor(Math.random() * 90 + 10);

//     var i = Math.floor(Math.random() * arr.length);
//     arr.splice(i, b, d);

//     console.log(`Massivga ${b} ta element boshlanib, ${d} soni ${i} indeksdan boshlab qo'shildi.`);
//     return arr;
// }


// var t = [1, 2, 3, 4, 5];


// var yigindi = a(t, 3, 2);
// console.log(yigindi);

// function o(arr1, arr2, arr3) {
//     arr1.push(arr3);
    
    
//     arr1.push(arr2);
    
//     return arr1;
// }


// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = [7, 8, 9];

// let yigindi = o(arr1, arr2, arr3);
// console.log(yigindi);

// function a(arr, e) {
//     return arr.lastIndexOf(e);
// }

// let arr = [1, 2, 3, 4, 2, 5, 6, 2];
// let e = 2;

// let lastIndex = a(arr, e);
// console.log( e, lastIndex);

// function elementExistsInBoth(arr1, arr2, arr3) {
 
//     let index1 = arr1.indexOf(arr3);

//     let index2 = arr2.indexOf(arr3);
   
//     return index1 !== -1 && index2 !== -1;
// }


// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [5, 6, 7, 8, 9];
// let arr3= 5;

// let a = elementExistsInBoth(arr1, arr2, arr3);
// console.log(arr3,  a);



// function a(arr) {
//     let son = [];
    
   
//     arr.forEach(function(item) {
//         if (item >= 100 && item <= 999) {
//             son.push(item); 
//         }
//     });

//     if (son.length === 0) {
//         return ;
//     }
    
   
//     let but = son.reduce(function(or, d) {
//         return or + d;
//     }, 0) / son.length;

//     return but;
// }


// const arrr = [123, 456, 789, 234, 567, 890];
// const ortacha = a(arrr);
// console.log(ortacha); 




// function a(string) {
   
//     let natija = string.map(function(arr) {
//         return arr[arr.length - 1]; 
//     });

//     return natija;
// }


// const yozuvlar = ['apple', 'banana', 'cherry', 'date'];
// const natija = a(yozuvlar);
// console.log(natija);


// function a(arr) {
    
//     let natija = arr.filter(function(aa) {
//         return aa.length < 4;
//     });

//     return natija; 
// }

// const d = ['apple', 'banana', 'cherry', 'date', 'figma', 'grape'];
// const natija = a(d);
// console.log(natija); 


// function indexof(ismlar) {
//     const indeks = ismlar.findIndex(function(ism) {
//         return ism.includes('bek'); 
//     });

//     return indeks; 
// }

// const ismlar = ['Abdulbek', 'Bekzod', 'Muhammad', 'Bekmirza', 'Ravshanbek'];
// const indeks = indexof(ismlar);
// console.log(indeks);



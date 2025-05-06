/*Func1. a sonning ixtiyoriy n-darajasini hisoblovchi power(a, n) nomli funksiya hosil qiling. QY
power(3, 5) => 243
 */

// function power(a, n) {
//   return a ** n;
// }
// console.log(power(3, 5));

/*Func2. 2 ta a va b sonning o'rta arifmetigi (a + b) / 2 va geometrigi (a + b) ^ (1 / 2) hisoblovchi mean(a, b) nomli funksiya hosil qiling. QYM
mean(12, 48) => 30, 24
 */

// function mean(a, b) {
//   let arifmetik = (a + b) / 2;
//   let geometrik = Math.sqrt(a * b);
//   return { arifmetik, geometrik };
// }

// console.log(mean(12, 48));

/*Func3. Haqiqiy sonning ishorasini aniqlovchi sign(n) nomli funksiya hosil qiling. Funksiya argumenti noldan kichik bo'lsa -1; noldan katta bo'lsa 1; nolga teng bo'lsa 0 qiymat qaytarsin. QY
sign(10) => 1
 */

// function sign(n) {
//   if (n < 0) {
//     return -1;
//   }else if(n>0){
//     return 1
//   }else{
//     return 0
//   }
// }
// console.log(sign(10))

/*Func4. A*x^2 + B*x + C = 0 ko'rinishidagi tenglama kvadrat tenglama deyiladi. (A noldan farqli son). Kvadrat tenglamaning ildizlar sonini aniqlovchi numberOfRoots(A, B, C) nomli funksiya hosil qiling. D = B^2 - 4*A*C. Agar D > 0 bo’lsa 2 ta, D = 0 bo’lsa 1 ta, D < 0 bo’lsa 0 ta. QY
numberOfRoots (1, -6, 9) => 1
 */

// function numberOfRoots(A, B, C) {
//   let D = B ** 2 - 4 * A * C;
//   if (D > 0) {
//     return 2;
//   } else if (D == 0) {
//     return 1;
//   } else {
//     return 0;
//   }
// }
// console.log(numberOfRoots(1, -6, 9));

/*Func5. Doiraning yuzini hisoblovchi areaCircle(R) nomli funksiya hosil qiling. Doiraning yuzi S = π*R^2 orqali hisoblanadi. QY
 */

// function areaCircle(R) {
//   let S = Math.PI * R ** 2;
//   return S;
// }
// console.log(areaCircle(8));

/*Func6. A va B sonlari orasidagi sonlar yig'indisini hisoblovchi sumRange(A, B) nomli funksiya hosil qiling. Agar A > B bo'lsa, funksiya 0 qiymat qaytaradi. QY
sumRange(8, 10) => 27
 */

// function sumRange(A, B) {
//   if (A > B) {
//     return 0;
//   }
//   let sum = 0;
//   for (let i = A; i <= B; i++) {
//     sum += i;
//   }
//   return sum;
// }
// console.log(sumRange(8, 10));

/* Func7. Arifmetik amallarni bajaruvchi calc(A, B, S) funksiyasini hosil qiling. A va B haqiqiy sonlar. S o'zgaruchisi orqali bajariladigan arifmetik amal aniqlanadi. “-” – ayirish, “*” – ko'paytirish, “/” - bo'lish, “+” - qo'shish va boshqa belgilar uchun 0 qaytarsin. QY
calc(10, 15, “*”) => 150
calc(7, 8, “+”) => 15
*/

// function calc(A, B, S) {
//   switch (S) {
//     case "+":
//       return A + B;
//     case "-":
//       return A - B;
//     case "*":
//       return A * B;
//     case "/":
//       return B !== 0 ? A / B : "Nolga bo'lish mumkin emas";
//     default:
//       return 0;
//   }
// }

// console.log(calc(10, 15, "*"));
// console.log(calc(7, 8, "+"));

/*Func8. Butun sonning juft - toqligini aniqlovchi isEven(K) funksiyasini hosil qiling. Funksiya K juft son bo'lsa - true, aks xolda false qiymat qaytarsin. QY
isEven(10) => true
 */

// function isEven(K){
//     if(K%2===0){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(isEven(12))

/*Func9. Kiritilgan 3 ta a, b, c sonlarning eng kichigini, o’rtachasini va eng kattasini chiqaruvchi sortABC(a, b, c) nomli dastur tuzing. QYM
sortABC(10, 5, 8) => 5, 8, 10
 */

// function sortABC(a, b, c) {
//     let x = a, y = b, z = c;

//     if (x > y) { let t = x; x = y; y = t; }
//     if (x > z) { let t = x; x = z; z = t; }
//     if (y > z) { let t = y; y = z; z = t; }

//     console.log(x, y, z);
//   }

//   sortABC(10, 5, 8);

/*Func10. isPowerN(K, N) mantiqiy funksiyasini hosil qiling. (K > 0). Agar K soni N soninig biror darajasi bo'lsa - true, aks xolda false qiymat qaytarilsin. QY
 */

// function isPowerN(K, N) {
//   if (K <= 0 || N <= 1) return false;

//   for (let x = 1; x < K; x *= N) {
//     if (x === K) return true;
//   }
//   return false;
// }

// console.log(isPowerN(27, 3));

/* Func11. isPrime(N) mantiqiy funksiyasini hosil qiling. (N > 0). Agar N soni tub bo'lsa - true, aks holda false qiymat qaytarilsin. QY
  isPrime(7)  => true*/

// function isPrime(N) {
//   if (N <= 1) return false;
//   for (let i = 2; i <= Math.sqrt(N); i++) {
//     if (N % i === 0) return false;
//   }
//   return true;
// }

// console.log(isPrime(7));

/*Func12. isPrime funksiyasi orqali N gacha bo’lgan sonlar ichidan nechtasi tub ekanini aniqlovchi numberOfPrime(N) nomli dastur tuzilsin. QY
numberOfPrime(10) => 4
 */

// function isPrime(N) {
//     if (N <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(N); i++) {
//       if (N % i === 0) return false;
//     }
//     return true;
//   }

//   function numberOfPrime(N) {
//     let count = 0;
//     for (let i = 2; i <= N; i++) {
//       if (isPrime(i)) {
//         count++;
//       }
//     }
//     return count;
//   }

//   console.log(numberOfPrime(10));

/*Func13. Butun qiymat qaytaruvchi digitNth(K, N) funksiyasini hosil qiling. (K > 0). Funksiya K sonining N-raqamini qaytarsin. Agar K soni raqamlari N dan kichik bo'lsa, -1 qaytarilsin. digitCount funksiyasidan foydalaning.QY
digitNth(105782, 5) => 8
digitNth(1057, 5) => -1
 */
// function digitNth(K, N) {
//   const KString = K.toString();

//   if (N > KString.length) {
//     return -1;
//   }

//   return parseInt(KString[N - 1]);
// }

// console.log(digitNth(105782, 5)); 
// console.log(digitNth(1057, 5)); 

/* Func14. N sonining raqamlaridan teskari tartibda hosil bo’ladigan sonni qaytaruvchi inverseNumber(N) nomli funksiya hosil qiling. QY
inverseNumber(56814) => 41865
*/
// function inverseNumber(N) {
//     let result = 0;
//     for (; N > 0; N = parseInt(N / 10)) {
//       let digit = N % 10;
//       result = result * 10 + digit;
//     }
//     return result;
//   }

//   console.log(inverseNumber(56814));

/*Func15. isPalindrom(N) mantiqiy funksiyasini hosil qiling. (N > 0). Agar N soni palindrom bo'lsa - true, aks holda false qiymat qaytarilsin. inverseNumber funksiyasidan foydalaning. Palindromik son - chapda ham, o’ngdan ham o’qilganda bir xil bo’ladigan son. Masalan, 123321, 78987. QY
isPalindrom(1678761) => true
 */

// function inverseNumber(N) {
//     let result = 0;
//     for (; N > 0; N = parseInt(N / 10)) {
//       let digit = N % 10;
//       result = result * 10 + digit;
//     }
//     return result;
//   }

//   function isPalindrom(N) {
//     return N === inverseNumber(N);
//   }

//   console.log(isPalindrom(1678761));

/*Func16. 1 dan N ga sonlar ko’paytmasini qaytaruvchi factorial(N) nomli funksiya hosil qiling. Agar N manfiy bo’lib qolsa, 1 qaytarilsin. QY */

// function factorial(N) {
//     if (N < 0) {
//       return 1;
//     }

//     let counter = 1;
//     for (let i = 1; i <= N; i++) {
//       counter *= i;
//     }

//     return counter;
//   }

//   console.log(factorial(4));

/* Func17. 1 dan N bo’lgan sonlar ichida 3 bo’linadigan sonlar yig’indisini hisoblovchi getSum3(N) nomli dastur yozing.
getSum3(15) => 45
*/

// function getSum3(N) {
//     let sum = 0;
//     for (let i = 1; i <= N; i++) {
//       if (i % 3 === 0) {
//         sum += i;
//       }
//     }
//     return sum;
//   }

//   console.log(getSum3(15));

/* Func18. 1 dan N ga sonlar bo’lgan juft va toqlar sonlar yig’indisini qaytaruvchi sumOddEven(N) nomli funksiya hosil qiling. QYM
sumOddEven(10) => 30, 25
*/

// function sumOddEven(N) {
//   let evenSum = 0;
//   let oddSum = 0;

//   for (let i = 1; i <= N; i++) {
//     if (i % 2 === 0) {
//       evenSum += i;
//     } else {
//       oddSum += i;
//     }
//   }

//   return {evenSum, oddSum};
// }

// console.log(sumOddEven(10))

/*Func19. invertTime(H, M, S) funksiyasini hosil qiling. H - soat, M - minut, S - sekund. Funksiya orqali berilgan soat, minut va sekundni T sekundga almashtiruvchi programma tuzilsin.
invertTime(0, 6, 40) => 400
 */
// function invertTime(H, M, S) {
//   let seconds = H * 3600 + M * 60 + S;
//   return seconds;
// }

// console.log(invertTime(0, 6, 40));

/*Func20. decTime(H, M, S) funksiyasini hosil qiling. H - soat, M - minut, S - sekund. Funksiya berilgan vaqtdan 1 sekund oldingi vaqtni ko’rsatsin.
decTime(0, 6, 40) => 00:06:39
 */
// function timeToHMS(T) {
//   let h = Math.floor(T / 3600);
//   let m = Math.floor((T / 60) % 60);
//   let s = T % 60;

//   return `${h}h:${m}m:${s}s`;
// }

// function decTime(H, M, S) {
//   let seconds = H * 3600 + M * 60 + S - 1;
//   return timeToHMS(seconds);
// }
// console.log(decTime(0, 6, 40));

/*Func21. Mantiqiy qiymat qaytaruvchi isLeapYear(Y) funksiyasini hosil qiling. Funksiya berilgan Y - yil kabisa yili bo'lsa true, aks holda false qiymat qaytarsin. */

// function isLeapYear(Y) {
//   let kabisaYil = Y % 4 === 0 && (Y % 100 !== 0 || Y % 400 === 0);
//   return kabisaYil;
// }
// console.log(isLeapYear(2000));

/* Func22. isLeapYear(Y) funksiyasidan foydalangan xolda, butun qiymat qaytaruvchi monthDays(M, Y) funksiyasini hosil qiling. Funksiya berilgan Y - yilning M - oyi kunlar sonini qaytarsin.
monthDays(2, 2020) => 28
monthDays(3, 2021) => 31
*/
// function isLeapYear(Y) {
//   let kabisaYil = Y % 4 === 0 && (Y % 100 !== 0 || Y % 400 === 0);
//   return kabisaYil;
// }

// function monthDays(M, Y) {
//   if (M === 2) {
//     if (isLeapYear(Y)) {
//       return 29;
//     } else {
//       return 28;
//     }
//   } else if (M === 4 || M === 6 || M === 9 || M === 11) {
//     return 30;
//   } else {
//     return 31;
//   }
// }
// console.log(monthDays(2, 2021));

/*Func23. monthDays funksiyasidan foydalangan xolda, prevDate (D, M, Y) funksiyasini hosil qiling. Funksiya berilgan sanadan oldingi sanani aniqlasin, D - kun, Y - yil, M - oyini qaytarsin. QY
prevDate (10, 3, 2022) => 09.03.2022
 */

// function isLeapYear(Y) {
//   return Y % 4 === 0 && (Y % 100 !== 0 || Y % 400 === 0);
// }

// function monthDays(M, Y) {
//   if (M === 2) {
//     if (isLeapYear(Y)) {
//       return 29;
//     } else {
//       return 28;
//     }
//   } else if (M === 4 || M === 6 || M === 9 || M === 11) {
//     return 30;
//   } else {
//     return 31;
//   }
// }

// function prevDate(D, M, Y) {
//   if (D > 1) {
//     D = D - 1;
//   } else {
//     if (M === 1) {
//       M = 12;
//       Y = Y - 1;
//     } else {
//       M = M - 1;
//     }
//     D = monthDays(M, Y);
//   }

//   let day = D;
//   if (D < 10) {
//     day = "0" + D;
//   }

//   let month = M;
//   if (M < 10) {
//     month = "0" + M;
//   }

//   return ` ${day}.${month}.${Y}`;
// }

// console.log(prevDate(10, 3, 2022));

/*Func24. monthDays funksiyasidan foydalangan xolda, nextDate(D, M, Y) funksiyasini hosil qiling. Funksiya berilgan sanadan keying sanani aniqlasin, D-kun, Y yil, M - oyini qaytarsin. QY
nextDate (10, 3, 2022) => 11.03.2022
*/
// function isLeapYear(Y) {
//   return Y % 4 === 0 && (Y % 100 !== 0 || Y % 400 === 0);
// }

// function monthDays(M, Y) {
//   if (M === 2) {
//     if (isLeapYear(Y)) {
//       return 29;
//     } else {
//       return 28;
//     }
//   } else if (M === 4 || M === 6 || M === 9 || M === 11) {
//     return 30;
//   } else {
//     return 31;
//   }
// }

// function nextDate(D, M, Y) {
//   if (D < monthDays(M, Y)) {
//     D = D + 1;
//   } else {
//     D = 1;
//     if (M === 12) {
//       M = 1;
//       Y = Y + 1;
//     } else {
//       M = M + 1;
//     }
//   }

//   let day = D;
//   if (D < 10) {
//     day = "0" + D;
//   }

//   let month = M;
//   if (M < 10) {
//     month = "0" + M;
//   }

//   return ` ${day}.${month}.${Y}`;
// }

// console.log(nextDate(31, 12, 2022));

/*Func25. N sonining bo’luvchilari soni va bo’luvchilari yi’gindisini chiqaruvchi getDividersNumberAndSum(N) nomli funksiya yozing. QYM
getDividersNumberAndSum(12) => 6, 28
 */
// function getDividersNumberAndSum(N) {
//     let count = 0;
//     let sum = 0;

//     for (let i = 1; i <= N; i++) {
//       if (N % i === 0) {
//         count++;
//         sum += i;
//       }
//     }

//     return `${count}, ${sum}`;
//   }

//   console.log(getDividersNumberAndSum(12));

// // [0, 1, 1, 2, 3, 5, 8, 13, 21]
// const fibo = [0, 1];
// for (let i = 2; i <= 6; i++) {
//                // fibo[3]=fibo[3-1]+fibo[3-2]  
//     fibo[i] = fibo[i - 1] + fibo[i - 2];
// }
// console.log(fibo); 


// simple way fon recursion 
function fibo(i) {
               //have to add a stoping condition
               if (i == 0) ///stoping condition.
                {
                   return 0;
               }
               if (i == 1)// stoping condition
                {
                   return 1;
               }
               //     fibo[i] = fibo[i - 1] + fibo[i - 2];
               // we have to call the function by using () 
               return fibo(i - 1) + fibo(i - 2);
           }
           console.log(fibo(6));
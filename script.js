// function age(a,b){
//     return a + b;
// }
// function detail(name,age){
//     console.log(`${name} ${age}`)
// }
// detail("hello", age(20,30))

// ----------------------------------------------------------

// let count=1;
// function test(){
//   setTimeout(()=>{
//     console.log(count++);
//     setTimeout(()=>{
//       console.log(count++);
//       setTimeout(()=>{
//         console.log(count++);
//         setTimeout(()=>{
//           console.log(count++);
//           setTimeout(()=>{
//             console.log(count++);
//             setTimeout(()=>{
//               console.log(count++);
//               setTimeout(()=>{
//                 console.log(count++);
//               },7000)
//             },6000)
//           },5000)
//         },4000)
//       },3000)
//     },2000)
//   },1000)
// }

// test()

// // ---------------------------------------------------

// let count=1;

// let myPromise = new Promise(function(res, rej){
//   setTimeout(() => {
//     res(console.log(count++));
//     setTimeout(()=>{
//       res(console.log(count++));
//       setTimeout(()=>{
//         res(console.log(count++));
//         setTimeout(()=>{
//           res(console.log(count++));
//           setTimeout(()=>{
//             res(console.log(count++));
//             setTimeout(()=>{
//               res(console.log(count++));
//               setTimeout(()=>{
//                 res(console.log(count++));
//               },7000)
//             },6000)
//           },5000)
//         },4000)
//       },3000)
//     },2000)
//   },1000);
// })
// myPromise.then();

// ---------------------------------------------------

// let n=2;
// const myPromise = new Promise(function(res, rej){
//   if (n>0){
//     res()
//   }
//   else {
//     rej()
//   }
// })

// myPromise. 
//     then(function () { 
//         console.log("Promise Resolved"); 
//     }). 
//     catch(function () { 
//         console.log("Promise Rejected"); 
//     });

// ----------------------------------------------



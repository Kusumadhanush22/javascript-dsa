let arr = [4,1,3,5,2]
//Normal Solution
// const bubblesort  = (a) => {
//     let n = a.length
//     for(let i =0;i<n;i++) {
//         for(let j=0;j<n-1;j++) {
//             if (a[j] > a[j+1]) {
//                 a[j] = a[j] + a[j+1]
//                 a[j+1] = a[j] - a[j+1]
//                 a[j] = a[j] - a[j+1]
//             }
//         }
//     }
//     return a
// }

//Optimized Solution 1
// const bubblesort  = (a) => {
//     let n = a.length
//     for(let i =0;i<n;i++) {
//         for(let j=0;j<n-i- 1;j++) {
//             if (a[j] > a[j+1]) {
//                 a[j] = a[j] + a[j+1]
//                 a[j+1] = a[j] - a[j+1]
//                 a[j] = a[j] - a[j+1]
//             }
//         }
//     }
//     return a
// }
//Optimized Solution 2
const bubblesort  = (a) => {
    let n = a.length
    for(let i =0;i<n;i++) {
        let flag = true
        for(let j=0;j<n-i- 1;j++) {
            if (a[j] > a[j+1]) {
                a[j] = a[j] + a[j+1]
                a[j+1] = a[j] - a[j+1]
                a[j] = a[j] - a[j+1]
                flag = false
            }
        }
        if(flag) break
    }
    return a
}

console.log(bubblesort(arr))
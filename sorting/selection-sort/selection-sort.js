const selectionSort = (a) => {
    let n = a.length;
    for(let i=0;i<n;i++) {
        let lowest = i
        for(let j=i+1;j<n;j++) {
            if (a[j] < a[lowest] ) {
                lowest = j
            }
        }
        if(lowest !== i) {
            [a[i],a[lowest]] = [a[lowest], a[i]]
        }
    }
    return a
}
console.log(selectionSort([4,1,3,2,5]))
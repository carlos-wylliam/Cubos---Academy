let a = "5 3.56 17 -5.1 36.3 0.0002 -2 5 5 -9.01 -17.7"
let b = a.split("\n")
let c = parseInt(b[0])
let d = []
for(let i = 1; i <= c; i++){
    d.push(a[i].split(" ").map(Number))
}

console.log(d)
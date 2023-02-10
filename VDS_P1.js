var hey = "what's up";
console.log(hey);

var x=  3;
let y = 5;
const z = 7;

console.log("x tambah y = ", x+y);

if (x >= 1){
    console.log("x besar sama dengan satu!")
}

console.log("===========")

var a = 4;
while (a > 0.1){
    a = a - 0.4
    console.log(a)
}

console.log("===========")

var b = 4;
for (var i=0;i<10;i++){
    b = b - 0.1
    console.log(b);
}

console.log("===========")

function quad(x){
    return x**2;
}
console.log(quad(5))

console.log("===========")

function exp(x){
return Math.exp(x);
}

console.log(exp(1))



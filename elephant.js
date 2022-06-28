function calc (x) {
    let steps = 0;
if (x >= 1 && x <= 1000000) {
    if (x % 5 == 0)
    steps = x / 5;
    else 
    steps = Math.trunc (x / 5) + 1;}
else
    console.log("error")
return steps;
    }
console.log (calc (0))

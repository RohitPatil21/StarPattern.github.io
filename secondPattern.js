// que-2

/*
    *
    **
    ***
    ****
    *****
    ******
*/

debugger;
let n = 7;
let s = "";

for(let i=1; i<=n; i++){
    for(let j=1; j<=i; j++){
        s = s + "*";
    }
    s = s + "\n";
}
console.log(s);
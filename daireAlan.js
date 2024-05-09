// Homework Link: https://academy.patika.dev/tr/courses/nodejs/odev1
let arguments = process.argv.slice(2);

function daire(r){
    console.log(`Yarıçap: ${r}`)
    console.log(`Dairenin alanı:${Math.PI * Math.pow(r,2)}`);
}

console.log(daire(Number(arguments[0])));
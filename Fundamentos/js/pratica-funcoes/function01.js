function parimpa(n) {
    if(n % 2 == 0) {
        return 'Par'
    } else {
        return 'Impar'
    }
}

let result = parimpa(100)
console.log(result)
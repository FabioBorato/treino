function validateEmail(email:string):boolean {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
console.log(validateEmail('usuario@dominio.com'));
console.log(validateEmail('emailinvalido'));
console.log(validateEmail('email@invalido.'));
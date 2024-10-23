/*
 *
 Problem : Create A Function For Fectorial Number !
 INPUT : 5
 OUTPUT : 120
 *
 */

const Fectorial = n => {
    if (n === 0) {
        return 1;
    }
    return n * Fectorial(n - 1);
};

console.log(Fectorial(5));

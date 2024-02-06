function factors(num) {
    const factors = [];
    const primeFactors = [];

    // Loop to find factors
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            factors.push(i);
        }
    }

    // Loop to find prime factors
    for (let i = 0; i < factors.length; i++) {
        let isPrime = true;

        for (let j = 2; j < factors[i]; j++) {
            console.log(factors[i])
            if (factors[i] % j === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            primeFactors.push(factors[i]);
        }
        
    }

    console.log("Factors:", factors);
    console.log("Prime Factors:", primeFactors);
}

factors(12);



// function findPrime(num) {
//     for (let i = 2; i < num; i++) {
//         if(num%i==0){
//             return false
//         }        
//     }
//     return true
// }
// console.log(findPrime(6))
// findPrime(3)
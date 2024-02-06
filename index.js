function primeAndFactors(num) {
    const factors = []
    const prime = []
    const notPrime = []

    // Loop for finding the factors of the argument.
    for (let i = 2; i <= num; i++) {
        if(num%i===0){
            factors.push(i)
        }
    }

    // Loop to find the prime numbers from the factors array.

    for (let i = 0; i < factors.length; i++) {

        let isPrime = true

        for (let j = 2; j < factors[i]; j++) {
            if(factors[i]%j===0){
                notPrime.push(factors[i])
                isPrime = false
                break
            }
        }

        if(isPrime){
            prime.push(factors[i])
        }

    }

    console.log( `These are prime numbers ` + prime)
    console.log(`These are the non-prime numbers ` + notPrime)
    console.log(factors)
}
primeAndFactors(12)
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

        // So How things are working here is first the isPrime value is being set at  true outside the function and then here how the loop work first the i will loop till it complete all the value in notprime array one by one and the inner loop j is starts with 2 and will run till its is smaller then the factors[i] which will be one by one values and if any number gets divsible by any number till it reachs to the end then the loop will break and it add that number to the notprime array and if the numbers does not gets divided till it reaches the end the it will be added to the prime numbers array .
        
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
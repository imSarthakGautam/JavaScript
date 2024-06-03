//function sumPrimes() so it returns the sum of all prime numbers that are less than or equal to num.

function sumPrimes(num) {
    let sum=0;
  //to check if its prime
    function isPrime(num){
      for (let i=2; i<=Math.sqrt(num); i++){
  
  //checks if number is prime or not
       if (num % i=== 0){
         return false;
        }
      } 
    return true;
  }
     
    
   
  
  for (let i=2; i<=num;i++){
    if(isPrime(i)){
      sum=sum+i;
    } 
  }
  console.log(sum)
  return sum;
  }
  
  sumPrimes(10);
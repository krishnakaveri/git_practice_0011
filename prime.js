function prime(number){

   let factor=0;

   for(i=1;i<=number;i++){

      if(number % i == 0){

         factor++;
      }
}
      if(factor == 2){
         return true
     } 
       return false
    }
}
let answer=prime(5);

if(answer==true){
     console.log("prime number")
}else{
     console.log("is a not prime number")
}
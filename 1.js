let num = [6, 2, 12, 8, 7, 9, 42]; 
function filtNum (array) {
  let odd = 0; 
  let even = 0; 
  for ( let i = 0; i < array.length; i++) { 
  if (array [i] % 2 === 0) odd++;
  else if (array [i] % 2 !== 0) even++;};
  
  console.log(odd); 
  console.log(even); 
  
} 

filtNum(num); 
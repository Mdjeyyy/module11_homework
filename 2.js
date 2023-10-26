function justNum(a) {
  let tru = "простое число "; 
  let fals = "непростое число"; 
  let ffalss = "данные неверны"; 
  if(a <= 1 || a > 1000) return ffalss; 
  for (i = 2; i <= a / 2; i++)
    if( a % 2 === 0) return fals; 
  return tru;
}
console.log(justNum(101));
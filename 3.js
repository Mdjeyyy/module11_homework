function fun1 (b){
  return function fun2 (a){
    return a + b;
  }; 
};

console.log( fun1(1) (2) ); 
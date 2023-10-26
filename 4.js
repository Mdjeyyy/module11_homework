function fofo(a, b){ 
  let int = setInterval(() => {
         console.log(a++); 
       if (a > b) clearInterval(int); 
}, 1000) 
  } 

fofo(5, 15); 
function buscamenor(array) {
 
  for(let i = 0; i < array.length -1; i++){
    for(let j = 0; j < array.length; j++){
        if(array[j] < array[j + 1]){
            const temp = array[j]

            array[j] = array[j + 1];
            array[j + 1] = temp

        }
    }
  }
 
    console.log("Array ordenado em ordem decrescente:", array);
}

buscamenor([3, 5, 1, 1, 6, 7, 8, 9, 4]);

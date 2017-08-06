console.log('inside iife-xhr.js');

// Placeholder elements for carnivore and herbivore
let carnivoreEl = document.getElementById("carnivores");
let herbivoreEl = document.getElementById("herbivores");


//empty var for the carnivore content
let carnivoreOutput = "";
function showCarnivores (carnivoreArray) {
  for (let index = 0; index < carnivoreArray.length; index++){
    //   set carnivore element output to result
        carnivoreOutput += `<ul><li>${carnivoreArray[index]}</li></ul>`
      
  }
//set of carnivore html to carnivore output
carnivoreEl.innerHTML = carnivoreOutput;
}



let herbivoreOutput = "";
function showHerbivores (herbivoreArray) {
     for (let index = 0; index < herbivoreArray.length; index++){
    //   set herbivore element output to result
         herbivoreOutput+= `<ul><li>${herbivoreArray[index]}</li></ul>`
  }
//set the herbivore html to herbivore output
herbivoreEl.innerHTML = herbivoreOutput;
}



// call the functions above 
Predator.loadCarnivores(showCarnivores);
Predator.loadHerbivores(showHerbivores);
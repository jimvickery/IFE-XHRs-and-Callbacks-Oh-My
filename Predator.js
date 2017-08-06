// Create two JSON files. One should contain an array of 
// carnivores, and the other should contain an array of herbivores.
// Create an IIFE with the name of Predator.
// Predator should have two private arrays to store carnivores 
// and herbivores.
// Predator should expose two public functions to load each 
// JSON file and store the array of animals in the appropriate 
// private array. Each of those functions should accept one argument 
// that will store the callback function to be executed.
// // In the iife-xhr.js file, define two functions that 
// will be executed after each type of animal is loaded then display 
// those animals 
// in your DOM. (Example given below)
// In the Predator IIFE, invoke the callback function,
//  passed in from iife-xhr.js, after each file is loaded.
console.log('inside predator.js');


var Predator = (function () {
  return {
    loadCarnivores: function (callbackFunction) {
      var carnivoreLoader = new XMLHttpRequest();
      var carnivoreArray = [];
      carnivoreLoader.addEventListener('load', function(){

       // Invoke the callback function so that the caller knows
       // that the process is complete. Make sure to pass the 
       // carnivore array as an argument.
        
        var carnivoreJSONObject = JSON.parse(this.responseText);
       
        //iterate over carnivore JSON object and push items into carnivore array
        carnivoreJSONObject.forEach(function(item) {
            var itemCarnivore = item.animal;
            carnivoreArray.push(itemCarnivore);
        });
        showCarnivores(carnivoreArray);
      });
      carnivoreLoader.open("GET", "carnivores.json");
      carnivoreLoader.send();
    },
    loadHerbivores: function(callbackFunction) {
    var herbivoreArray = [];
    var herbivoreLoader = new XMLHttpRequest ();
    herbivoreLoader.addEventListener("load", function(){
    // load the herbivore array
    var herbivoreJSONObject = JSON.parse(this.responseText);
    
      //iterate over herbivore JSON object and push items into herbivore array
      herbivoreJSONObject.forEach(function(item) {
        var itemHerbivore = item.animal;
        herbivoreArray.push(itemHerbivore);
      });
      //show herbivore
      showHerbivores(herbivoreArray);
    });
      herbivoreLoader.open("GET", "herbivores.json");
      herbivoreLoader.send();

    }


  }
})();
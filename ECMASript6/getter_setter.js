// You can obtain values from an object and set the value of a property within an object.

//These are classically called getters and setters.

class Thermostat {
    constructor(temp){
      this._temp= temp;
    }
 
    //getter : to return the value in celsius form
    get temperature(){
      return (this._temp-32)*5/9;
    }
 
    set temperature(temp){
      //store in faremheit form
    
     this._temp = (temp * 9/5) + 32;
    
    }
    //setter: to input value in object
 }
 
 const thermos = new Thermostat(76); // Setting in Fahrenheit scale
 let temp = thermos.temperature; // 24.44 in Celsius
 thermos.temperature = 26;
 temp = thermos.temperature; // 26 in Celsius
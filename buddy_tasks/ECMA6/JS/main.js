import { deviceName , meailage, name as newName }  from "./utils.js";


import age from "./utils.js";

console.log(age)

class car {
  constructor(tiers, minSeats, maxSeats, minWeight, MaxWeight){
    this.tiers = tiers;
    this.minSeats = minSeats;
    this.maxSeats = maxSeats;
    this.minWeight = minWeight;
    this.MaxWeight = MaxWeight;
  }
  carArictech(){
    return `A ${deviceName} Has ${this.tiers} tiers with max ${this.maxSeats}
            seats and min ${this.minSeats} seats along with max ${this.MaxWeight} 
            weight and min ${this.minWeight} weight consits..` 
  }
}

class audiCar extends car{
  constructor(tiers, minSeats, maxSeats, minWeight, MaxWeight, engine, model){
    super(tiers, minSeats,  maxSeats, minWeight, MaxWeight)
    this.engine = engine;
    this.model = model;
  }
  audi(distance, fuelFilled){
    return `A Auid ${deviceName}:${this.model}(model) has ${this.tiers} tiers with ${this.maxSeats}
    seats and along with ${this.MaxWeight} weight and it contains ${this.engine} engine, 
    finally it give ${meailage(distance, fuelFilled)} km/liter.` 
  }
}

let obj = new audiCar(4, 5,  8, '10K', '500k', 'Advance', 'AudiF213')
console.log(obj.audi(100))



class grandParent {
  
  getGrandParentDetails(name=newName, age=newAge){
    return `My Name Is:${name} And My Age Is:${age}`
  }
  
}

class parent extends grandParent {
  getParentDetails(name=newName, age=newAge){
    return `My Name Is:${name} And My Age Is:${age}`
  }
  
}

class child extends parent {
  getChildDetails(name=newName, age=newAge){
    return `My Name Is:${name} And My Age Is:${age}`
  }
  
}


let child_obj = new child()

console.log(child_obj.getChildDetails())


//// rest params ////

function restParams(a, b, ...c){
console.log(a, b, c)
  c.forEach((s)=>{
    console.log(s)
    return s
  })
}

restParams(1, 2, 3, 4, 5, 6, 7, 8, 9, 0)


//// spread operator ///  Cloning  --> 


function ConvertHandler() {
  
  this.getNum = function(input) {
    if(input.includes("/")){
      if(input.indexOf("/")!==input.lastIndexOf("/")) return null
      const values = input.replace(/[^0-9./]/g,"").split("/")
      return +values[0]/+values[1]
    }
    if(input.indexOf(".")!==input.lastIndexOf(".")) return null
    return parseFloat(input) || 1
  };
  
  this.getUnit = function(input) {
    return input.replace(/[^a-zA-Z]/g,"").toLowerCase() === "l" ? "L" : input.replace(/[^a-zA-Z]/g,"").toLowerCase()
  };
  
  this.getReturnUnit = function(initUnit) {
    const units = {
      "gal":"L",
      "l":"gal",
      "mi":"km",
      "km":"mi",
      "lbs":"kg",
      "kg":"lbs"
    }
    
    
    return units[initUnit.toLowerCase()];
  };

  this.spellOutUnit = function(unit) {
    const units = {
      "km": "kilometers",
      "mi": "miles",
      "kg" : "kilograms",
      "lbs":"pounds",
      "l" : "liters",
      "gal" : "gallons"
    }
    
    return units[unit.toLowerCase()];
  };
  
  this.convert = function(initNum, initUnit) {
    const convertions = {
    galToL : 3.78541,
    lbsToKg : 0.453592,
    miToKm : 1.60934,
    }

    let result;

    Object.keys(convertions).forEach(val=>{
        if(val.toLowerCase().split("to")[0] === initUnit.toLowerCase()){
          result = initNum * convertions[val]
        } 
        else if(val.toLowerCase().split("to")[1] === initUnit.toLowerCase()){
          result = initNum / convertions[val]
        } 
    })

    return +(result.toFixed(5))
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result = `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`
    
    return result;
  };
  
}

module.exports = ConvertHandler;

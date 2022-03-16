const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite("Unit tests",()=>{
  test("convertHandler should correctly read a whole number input",()=>{
    assert.strictEqual(convertHandler.getNum("3l"),3)
  })

  test("convertHandler should correctly read a decimal number input",()=>{
    assert.strictEqual(convertHandler.getNum("3.5lgal"),3.5)
  })

  test("convertHandler should correctly read a fractional input",()=>{
    assert.strictEqual(convertHandler.getNum("5/2kg"),2.5)
  })

  test("convertHandler should correctly read a fractional input with decimal",()=>{
    assert.strictEqual(convertHandler.getNum("5.2/2L"),2.6)
  })
  
  test("convertHandler should correctly return an error on a double-fraction",()=>{
    assert.isNotOk(convertHandler.getNum("3/2/3km"))
  })
  
  test("convertHandler should correctly default to a numerical input of 1 when no numerical input is provided",()=>{
    assert.strictEqual(convertHandler.getNum("gal"),1)
  })
  
  test("convertHandler should correctly read each valid input unit",()=>{
    assert.strictEqual(convertHandler.getUnit("5gal"),"gal")
    assert.strictEqual(convertHandler.getUnit("3.5kg"),"kg")
    assert.strictEqual(convertHandler.getUnit("5.5/3mi"),"mi")
  })
  
  test("convertHandler should correctly return an error for an invalid input unit",()=>{
    assert.isNotOk(convertHandler.getReturnUnit("5gals"))
    assert.isNotOk(convertHandler.getReturnUnit("3.5kgmd"))
  })
  
  test("convertHandler should return the correct return unit for each valid input unit",()=>{
    assert.strictEqual(convertHandler.getReturnUnit("gal"),"L")
    assert.strictEqual(convertHandler.getReturnUnit("kg"),"lbs")
  })
  
  test("convertHandler should correctly return the spelled-out string unit for each valid input unit",()=>{
    assert.strictEqual(convertHandler.spellOutUnit("gal"),"gallons")
    assert.strictEqual(convertHandler.spellOutUnit("kg"),"kilograms")
    assert.strictEqual(convertHandler.spellOutUnit("L"),"liters")
    assert.strictEqual(convertHandler.spellOutUnit("mi"),"miles")
  })
  
  test("convertHandler should correctly convert gal to L",()=>{
    assert.strictEqual(convertHandler.convert(3,"gal"),11.35623)
    assert.strictEqual(convertHandler.convert(2.5,"GAL"),9.46353)
    assert.strictEqual(convertHandler.convert(2.5/2,"gal"),4.73176)
  })
  
  test("convertHandler should correctly convert L to gal",()=>{
    assert.strictEqual(convertHandler.convert(3,"l"),0.79252)
    assert.strictEqual(convertHandler.convert(2.5,"L"),0.66043)
    assert.strictEqual(convertHandler.convert(2.5/2,"l"),0.33022)
  })
  
  test("convertHandler should correctly convert mi to km",()=>{
    assert.strictEqual(convertHandler.convert(3,"km"),1.86412)
    assert.strictEqual(convertHandler.convert(2.5,"KM"),1.55343)
    assert.strictEqual(convertHandler.convert(2.5/2,"km"),0.77672)
  })
  
  test("convertHandler should correctly convert km to mi",()=>{
    assert.strictEqual(convertHandler.convert(3,"mi"),4.82802)
    assert.strictEqual(convertHandler.convert(2.5,"MI"),4.02335)
    assert.strictEqual(convertHandler.convert(2.5/2,"mi"),2.01167)
  })
  
  test("convertHandler should correctly convert lbs to kg",()=>{
    assert.strictEqual(convertHandler.convert(3,"lbs"),1.36078)
    assert.strictEqual(convertHandler.convert(2.5,"LBS"),1.13398)
    assert.strictEqual(convertHandler.convert(2.5/2,"lbs"),0.56699)
  })
  
  test("convertHandler should correctly convert kg to lbs",()=>{
    assert.strictEqual(convertHandler.convert(3,"kg"),6.61387)
    assert.strictEqual(convertHandler.convert(2.5,"KG"),5.51156)
    assert.strictEqual(convertHandler.convert(2.5/2,"kg"),2.75578)
  })
  
})

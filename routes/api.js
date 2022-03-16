'use strict';

const ConvertHandler = require('../controllers/convertHandler.js');
const router = require("express").Router()

const convert = async(req,res) =>{
  const {input} = req.query
  const convertHandler = new ConvertHandler()
  const initNum = convertHandler.getNum(input)
  const initUnit = convertHandler.getUnit(input)
  const returnUnit = convertHandler.getReturnUnit(initUnit)
  
  if(!initNum && !returnUnit) res.send('invalid number and unit')
  else if(!initNum) res.send("invalid number")
  else if(!returnUnit) res.send("invalid unit")
  else {
    const returnNum = convertHandler.convert(initNum,initUnit)
    const string = convertHandler.getString(initNum, initUnit, returnNum, returnUnit)
    res.json({initNum,initUnit,returnNum,returnUnit,string})
  }
}

router.route("/").get(convert)

module.exports = router


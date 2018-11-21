const kodersModel = require('../../models/koders').model;

const getKoders = async () =>{
    const allKoders = await kodersModel.find({}).exec();
    return allKoders;
 }
 
 const createKoder = async (koderData)=>{
     const { name } = koderData;
     //console.log(name);
     const existingkoder = await kodersModel.find({name}).exec();
    console.log(existingkoder);
     const exist = existingkoder.length > 0;
     console.log(exist);
     if(exist) throw new Error("koder Already Exist");
 
     const newKoder = new kodersModel(koderData);
     const koderCreated = await newKoder.save();
     return koderCreated;
 }
 
 const deletekoder = (id)=>{
     console.log(id);
     return kodersModel.findByIdAndDelete(id).exec();
 }
 
 const updateKoder = (dataKoder)=>{
     return kodersModel.findByIdAndUpdate(dataKoder._id,dataKoder).exec();
 }
 
 module.exports = {
     getKoders,
     createKoder,
     deletekoder,
     updateKoder
 }
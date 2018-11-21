const mentorsModel = require('../../models/mentors').model;

const getMentors = async () =>{
    const allMentors = await mentorsModel.find({}).exec();
    return allMentors;
 }
 
 const createMentor = async (mentorData)=>{
     const { name } = mentorData;
     //console.log(name);
     const existingMentor = await mentorsModel.find({name}).exec();
    console.log(existingMentor);
     const exist = existingMentor.length > 0;
     console.log(exist);
     if(exist) throw new Error("Mentor Already Exist");
 
     const newMentor = new mentorsModel(mentorData);
     const mentorCreated = await newMentor.save();
     return mentorCreated;
 }
 
 const deleteMentor = (id)=>{
     console.log(id);
     return mentorsModel.findByIdAndDelete(id).exec();
 }
 
 const updateMentor = (dataMentor)=>{
     return mentorsModel.findByIdAndUpdate(dataMentor._id,dataMentor).exec();
 }
 
 module.exports = {
     getMentors,
     createMentor,
     deleteMentor,
     updateMentor
 }
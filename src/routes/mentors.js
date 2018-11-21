const express = require('express');
const routerMentors = express.Router();
const useCaseMentors = require('../useCases/mentors');

routerMentors.get('/',async (req,res)=>{
    try {
        const allMentors = await useCaseMentors.getMentors();
        //console.log(allMentors);
        res.json({
        success:true,
        message:"All mentors",
        payload:{
            allMentors
        }
    });
    } catch (error) {
        res.status(404);
        res.json({
            success:false,
            message:"Could not show the mentors",
            error:[
                error
            ]
        });
    }
});

routerMentors.post('/',async(req,res)=>{
    try {
        const mentorData = req.body;
        //console.log(mentorData,"fa oi");
        const newMentor = await useCaseMentors.createMentor(mentorData);
        //console.log(newMentor);
        res.json({
        success:true,
        message:"Mentor Created",
        payload:{
            newMentor
        }
    });
    } catch (error) {
        res.status(404);
        res.json({
            success:false,
            message:"Could not create the Mentor",
            error:[
                error
            ]
        });
    }
});

routerMentors.delete('/:id',async(req,res)=>{
    try {
        const { id } = req.params;
        console.log(id);
        const deleteMentor = await useCaseMentors.deleteMentor(id);
        res.json({
        success:true,
        message:"Mentor Deleted",
        payload:{
            deleteMentor
        }
        });
    } catch (error) {
        res.status(404);
        res.json({
            success:false,
            message:"Could not eliminate Mentor",
            error:[
                error
            ]
        });
    }
});

routerMentors.put('/',async(req,res)=>{
    try {
        const putMentor = req.body;
        const MentorPut = await useCaseMentors.updateMentor(putMentor);
        res.json({
        success:true,
        message:"Mentor Updated",
        payload:{
            MentorPut
        }
    });
    } catch (error) {
        res.status(404);
        res.json({
            success:false,
            message:"Could not update the Mentor",
            error:[
                error
            ]
        });
    }
});

module.exports = {
    routerMentors
}
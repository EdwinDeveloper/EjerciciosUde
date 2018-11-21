const express = require('express');
const routerCourses = express.Router();
const useCaseCourses = require('../useCases/courses');

routerCourses.get('/',async(req,res)=>{
    try {
        const allCourses = await useCaseCourses.getCourses();
        //console.log(allCourses);
        res.json({
        success:true,
        message:"All users",
        payload:{
            allCourses
        }
    });
    } catch (error) {
        res.status(404);
        res.json({
            success:false,
            message:"Could not show the courses",
            error:[
                error
            ]
        });
    }
});

routerCourses.post('/',async(req,res)=>{
    try {
        const courseData = req.body;
        const newCourse = await useCaseCourses.createCourse(courseData);
        res.json({
        success:true,
        message:"Course Creadted",
        payload:{
            newCourse
        }
    });
    } catch (error) {
        res.status(404);
        res.json({
            success:false,
            message:"Could not create the course",
            error:[
                error
            ]
        });
    }
});

routerCourses.delete('/:id',async(req,res)=>{
    try {
        const { id } = req.params;
        const deleteCourse = await useCaseCourses.deleteCourse(id);
        res.json({
        success:true,
        message:"Course Deleted",
        payload:deleteCourse
        });
    } catch (error) {
        res.status(404);
        res.json({
            success:false,
            message:"Could not eliminate course",
            error:[
                error
            ]
        });
    }
});

routerCourses.put('/',async(req,res)=>{
    try {
        const putCourse = req.body;
        const coursePut = await useCaseCourses.updateCourse(putCourse);
        res.json({
        success:true,
        message:"Course Updated",
        payload:{
            coursePut
        }
    });
    } catch (error) {
        res.status(404);
        res.json({
            success:false,
            message:"Could not update the course",
            error:[
                error
            ]
        });
    }
});

module.exports = {
    routerCourses
}
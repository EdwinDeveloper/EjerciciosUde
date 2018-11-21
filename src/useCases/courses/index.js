const coursesModel= require('../../models/courses').model;

const getCourses = async () =>{
   const allCourses = await coursesModel.find({}).exec();
   return allCourses;
}

const createCourse = async(courseData)=>{
    const { name } = courseData;
    //console.log(name);
    const existingCourse = await coursesModel.find({name}).exec();
    const exist = existingCourse.length > 0;

    if(exist) throw new Error("Course Already Exist");

    const newCourse = new coursesModel(courseData);
    const userCreated = await newCourse.save();
    return userCreated;
}

const deleteCourse = (id)=>{
    return courseDeleted = coursesModel.findByIdAndDelete(id).exec();
}

const updateCourse = (dataCourse)=>{
    return coursesModel.findByIdAndUpdate(dataCourse._id,dataCourse).exec();
}

module.exports = {
    getCourses,
    createCourse,
    deleteCourse,
    updateCourse
}
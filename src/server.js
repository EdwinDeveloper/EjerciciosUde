/*Declaramos una variable e importamos la entidad de express*/
const express=require('express');
const app=express();

const { routerCourses } = require('./routes/courses');
const { routerMentors } = require('./routes/mentors');
const { routerKoders }=require('./routes/koders');

app.use(express.json());

app.use('/courses',routerCourses);
app.use('/mentors',routerMentors);
app.use('/koders',routerKoders);


module.exports = app;
const express = require('express');
const Joi = require('joi');

const api = express.Router();

api.use(express.json());

const courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'},
    ];


api.get('/', (req, res) => {
    res.send('We are on the api!');
});

api.get('/courses', (req, res) => {
    res.send(courses);
    });
    
api.get('/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with given ID wasnt found');
    res.send(course);
    });

api.post('/', (req, res) => {
        console.log(req.body);
    });

api.post('/courses', (req, res) => {
        const schema = Joi.object({
        name: Joi.string().min(3).required()
        });
    
        const { error } = schema.validate(req.body);
        // console.log(result);
    
        if (error) return res.status(400).send(error.details[0].message);
    
    const course = {
    id: courses.length + 1,
    name: req.body.name
    };
    courses.push(course);
    res.send(course);
    });
    
  api.put('/courses/:id', (req, res) => {
        //Lookup the course
        const course = courses.find(c => c.id === parseInt(req.params.id));
        //if not existing return 404 error
        if (!course) return res.status(404).send('The course with given ID wasnt found');
    
        const schema = Joi.object({
            name: Joi.string().min(3).required()
            });
        
        //validate the course   
        const { error } = schema.validate(req.body);
        
        //if invalid return 400 error
        if (error) return res.status(400).send(error.details[0].message);
    
        //Update the course
        course.name = req.body.name;
        //return the updated course
        res.send(course);
    
    });
    
   api.delete('/courses/:id', (req, res) => {
        //Lookup the course
        const course = courses.find(c => c.id === parseInt(req.params.id));
        //if not existing return 404 error
        if (!course) return res.status(404).send('The course with given ID wasnt found');
    
        //Delete the course
        const index = courses.indexOf(course);
        courses.splice(index, 1);
    
        res.send(course);
    });

module.exports = api;
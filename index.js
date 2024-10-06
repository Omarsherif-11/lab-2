const express = require('express');

const swagger_ui= require('swagger-ui-express');

const yaml = require('yamljs')

const path = require('path')

const app = express();

app.use(express.json());

const swaggerDoc = yaml.load(path.join(__dirname, 'swagger.yaml'));

app.use('/api-docs', swagger_ui.serve, swagger_ui.setup(swaggerDoc));

let students = [];

app.get('/api/v1/student/:id', (req, res) => {

    const id = req.params.id;

    for(let student of students){

        if(student.id == id){

            return res.status(200).json(student);

        }
    }

    return res.status(404).json('No such student');
    
})

app.post('/api/v1/student', (req, res) => {

    const {name, id, major, studyYear, gpa} = req.body;

    if(!(name && id && major && studyYear && gpa)){

        return res.status(401).json('Fill in all the fields');

    }

    const student = {id, name, major, studyYear, gpa};

    students.push(student);

    return res.status(201).json(student);
})

app.delete('/api/v1/student/:id', (req, res) => {

    const id = req.params.id;

    for(let i = 0;i < students.length;i++){
        
        if(students[i].id === id){

            students.splice(i , 1);

            return res.status(200).json('Deleted Successfully');

        }
    }

    return res.status(404).json('No such Student');
})

app.put('/api/v1/student', (req, res) => {

    const {name, id, major, studyYear, gpa} = req.body;

    if(!(name && id && major && studyYear && gpa)){

        return res.status(401).json('Fill in all the fields');

    }

    const student = {name, major, studyYear, gpa};

    for(let i = 0;i < students.length;i++){

        if(i.id === id){

            students[i] = student;

            return res.status(200).json(student);

        }
    }

    return res.status(404).json('No such student');
})


app.listen(3000);
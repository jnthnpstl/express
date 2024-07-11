const student = require('../Model/model');

class StudentController{ 
    get = (req, res) => {
        student.find().then(data => {
            return res.send(data)
        }).catch(err => {
            return res.send(err);
        })
    }

    add = (req, res) => {
        const body = req.body;
        student.create(body).then(data => {
            return res.send(data)
        }).catch(err => {
            return res.send(err);
        })
    }

    delete = (req, res) => {
        const id = req.body.id;
        student.findByIdAndDelete(id).then(data => {
            return res.send(data)
        }).catch(err => {
            return res.send(err);
        })
    }

    update = (res, req) => {
        const body = req.body
        student.findByIdAndUpdate(body.id, body).then(data => {
            return res.send(data)
        }).catch(err => {
            return res.send(err);
        })
    }
}

module.exports = StudentController;
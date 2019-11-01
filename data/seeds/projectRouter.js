const router = require('express').Router();

const project = require('../helpers/projectModel');

router.get('/', (req, res) => {
    project.get()
    .then(pro => {
    res.status(200).json(pro)
    })
    .catch(err => {
        res.status(500).json({error: 'error getting the Projects'})
    });
})

router.get('/:id', (req, res) => {
    project.get(req.params.id)
    .then(pro => {
        if (pro) {
        res.status(200).json(pro)}else{
            res.status(404).json({message: 'the project with that Id could not be found'})
        }
    })
    .catch(err => {
        res.status(500).json({error: 'the project info could not be retrieved'})
    })
});

router.post('/', (req, res) => {
    project.insert(req.body)
    .then(pro => {
        res.status(201).json(pro)

    })
    .catch(err => {
        res.status(500).json({error: 'project could not be created'})
    });
})

router.put('/:id', (req, res) => {

    project.update(req.params.id, req.body)
    .then(pro => {
        if(pro) {
            res.status(200).json(pro)
        }else{
            res.status(404).json({message: 'The Project could not be Found'})
        }
    })
    .catch(err => {
        res.status(500).json({error: 'Error Updating the Project'})
    })
});

router.delete('/:id', (req, res) => {

    project.remove(req.params.id)
    .then(pro => {
        if (pro > 0){
     res.status(200).json({message: 'The Project has been Deleted'})
        }else{
            res.status(404).json({message: 'The Project With That Id Could Not Be Found'})
        }
    })
    .catch(err => {
        res.status(500).json({error: 'Error Removing The Project'})
    })
})

module.exports = router;

const router = require('express').Router();

const action = require('../helpers/actionModel');

router.get('/', (req, res) => {
    action.get()
    .then(act => {
    res.status(200).json(act)
    })
    .catch(err => {
        res.status(500).json({error: 'error getting actions'})
    });
})

router.get('/:id', (req, res) => {
    action.get(req.params.id)
    .then(act => {
        if (act) {
        res.status(200).json(act)}else{
            res.status(404).json({message: 'the action with that Id could not be found'})
        }
    })
    .catch(err => {
        res.status(500).json({error: 'the action info could not be retrieved'})
    })
});

router.post('/', (req, res) => {
    action.insert(req.body)
    .then(act => {
        res.status(201).json(act)

    })
    .catch(err => {
        res.status(500).json({error: 'action could not be created'})
    });
})

router.put('/:id', (req, res) => {

    action.update(req.params.id, req.body)
    .then(act => {
        if(act) {
            res.status(200).json(act)
        }else{
            res.status(404).json({message: 'The Action could not be Found'})
        }
    })
    .catch(err => {
        res.status(500).json({error: 'Error Updating the Action'})
    })
});

router.delete('/:id', (req, res) => {

    action.remove(req.params.id)
    .then(act => {
        if (act > 0){
     res.status(200).json({message: 'The Action has been Deleted'})
        }else{
            res.status(404).json({message: 'The Action With That Id Could Not Be Found'})
        }
    })
    .catch(err => {
        res.status(500).json({error: 'Error Removing The Action'})
    })
})

module.exports = router;
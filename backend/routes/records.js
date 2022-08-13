const router = require('express').Router();
let Record = require('../models/record.model');

router.route('/').get((req, res) => {
  Record.find()
    .then(Entries => res.json(Entries))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const description = req.body.description;
  const price = Number(req.body.price);
  const date = Date.parse(req.body.date);

  const newRecord = new Record({
    name,
    description,
    price,
    date,
  });

  newRecord.save()
  .then(() => res.json('Record added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Record.findById(req.params.id)
    .then(Record => res.json(Record))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Record.findByIdAndDelete(req.params.id)
    .then(() => res.json('Record deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Record.findById(req.params.id)
    .then(Record => {
      Record.name = req.body.name;
      Record.description = req.body.description;
      Record.price = Number(req.body.price);
      Record.date = Date.parse(req.body.date);

      Record.save()
        .then(() => res.json('Record updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
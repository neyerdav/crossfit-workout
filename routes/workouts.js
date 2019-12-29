var express = require('express');
var router = express.Router();
var workout_controller = require('../controller/workoutController');

/* GET users listing. */
router.get('/', workout_controller.getAll);

/* GET users listing. */
router.get('/:id', workout_controller.getById);

/* GET users listing. */
router.post('/', workout_controller.create);

router.put('/:id', workout_controller.update);

router.delete('/:id', workout_controller.delete);

module.exports = router;

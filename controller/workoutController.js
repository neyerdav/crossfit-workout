var Workout = require('../models/workouts');

exports.getAll = function(req, res, next) {
   Workout.find(function(err, workouts) {
       if (err) return res.status(500).json(err)
       return res.status(200).json(workouts);
   })
};

exports.getById = function(req, res, next) {
    Workout.findById(req.params.id, function (err, workout) {
        if (err) return res.status(500).json(err)
        return res.status(200).json(workout);
    });
};

exports.update = function(req, res, next) {
    Workout.findByIdAndUpdate(req.params.id,  req.body, {new: true},
        (err, workout) => {
            // Handle any possible database errors
            if (err) return res.status(500).json(err)
            return res.status(200).json(workout);
        }
    )};

exports.create = function(req, res, next) {
    var workout = new Workout({
        name : req.body.name,
        updated: Date.now(),
        publish: Date.now(),
        description: req.body.description,
        result: req.body.result,
        id:req.body.id
    });
    workout.save();
    return res.status(200).json(workout);
};

exports.delete = function(req, res, next) {
    Workout.findOneAndDelete(req.params.id, function (err, result) {
        if (err) return res.status(500).json(err);
        // We'll create a simple object to send back with a message and the id of the document that was removed
        // You can really do this however you want, though.
        const response = {
            message: "Todo successfully deleted",
            id: result._id
        };
        return res.status(200).json(response);
    });
};

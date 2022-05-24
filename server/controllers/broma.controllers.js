const Broma = require ("../models/broma.model");

module.exports.findAllBromas = (req, res ) => {
    Broma.find()
        .then(allDaBromas => res.json({users: allDaBromas}))
        .catch( err => res.json( {message: "Something went wrong", error: err }));
};


  
module.exports.findOneSingleBroma = (req, res) => {
    Broma.findOne({ _id: req.params.id })
      .then((oneSingleBroma) => res.json({ Broma: oneSingleBroma }))
      .catch((err) => res.json({ message: "Something went wrong", error: err }));
};
  
module.exports.createNewBroma = (req, res) => {
    Broma.create(req.body)
      .then((newlyCreatedBroma) => res.json({ Broma: newlyCreatedBroma }))
      .catch((err) => res.json({ message: "Something went wrong", error: err }));
};
 
module.exports.updateExistingBroma = (req, res) => {
    Broma.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then((updatedBroma) => res.json({ joke: updatedBroma }))
      .catch((err) => res.json({ message: "Something went wrong", error: err }));
};
  
module.exports.deleteAnExistingBroma = (req, res) => {
    Broma.deleteOne({ _id: req.params.id })
      .then((result) => res.json({ result: result }))
      .catch((err) => res.json({ message: "Something went wrong", error: err }));
};
  
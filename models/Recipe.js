const mongoose = require('mongoose');

const RecipeSchema = mongoose.Schema({
    title:{type: String, required: true },
    ingredients: {type: String, required: true },
    instructions: {type: String, required: true },
    time: {type: Number, required: true },
    difficulty :{type: Number, required: true },
});

module.exports = mongoose.model('Recipe', RecipeSchema);
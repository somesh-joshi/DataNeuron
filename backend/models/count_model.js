const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const countSchema = new Schema({
//todays date
    add_count: {
        type: Number
    },
    update_count: {
        type: Number
    }
});


const Count = mongoose.model('Count', countSchema);

module.exports = Count;
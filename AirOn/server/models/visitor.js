const path = require('path');
const { mongoose } = require(path.join(__dirname, '/../db/db'));

function getFormattedDate() {
    var date = new Date();
    var str = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    return str;
}

let visitorSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 1,
        trim: true,
        required: true,
        // unique: true,
    },
    status: {
        // current status of person, in or out of the event
        type: String,
        enum: ['in', 'out'],
        default: 'out'
    },

    timeIn: {
        type:String,
        default: getFormattedDate()
    },
    timeOut: {
        type:String,
        default: getFormattedDate()
    },
    allow: {
        type: String,
        enum: ['yes', 'no'],
    },
    criminal_code: {
        type: String,
    },

    age: {
        type: String,
    },

    gender: {
        type: String,
    },

    no_of_crimes_committed: {
        type: String,
    },

    recent_crime: {
        type: String,
    },

    address: {
        type: String,
    }
});

let Visitor = mongoose.model('Visitor', visitorSchema);

module.exports = { Visitor };
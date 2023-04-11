const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
    dateAndTime: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    veneers: {
        type: Boolean,
        required: true
    },
    rootCanal: {
        type: Boolean,
        required: true
    },
    implant: {
        type: Boolean,
        required: true
    },
    restoration: {
        type: Boolean,
        required: true
    },
    cleaning: {
        type: Boolean,
        required: true
    },
    cosmetic: {
        type: Boolean,
        required: true
    },
}, {
    timestamps: true
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
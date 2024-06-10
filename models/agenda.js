const mongoose = require('mongoose');

const agendaSchema = new mongoose.Schema({
  time: {
    type: String,
    required: true,
  },
  activity: {
    type: String,
    required: true,
    unique: true,
  },
  room: {
    type: Number,
    required: true,
  },
});

const Agenda = mongoose.model('Agenda', agendaSchema);

module.exports = Agenda;

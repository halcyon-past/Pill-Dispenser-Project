const mongoose = require('mongoose');

const medicineSchema = new mongoose.Schema({
  data: {
    type: Map,
    of: [String],
    required: true,
    validate: {
      validator: (data) => data.size <= 4,
      message: 'Data must contain maximum 4 key-value pairs',
    },
  },
});

const Medicine = mongoose.model('Medicine', medicineSchema);

module.exports = Medicine;

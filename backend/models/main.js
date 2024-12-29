const mongoose = require('mongoose')

// Define the schema for sem_subjects
const semSubjectsSchema = new mongoose.Schema({
  sem1: [String],
  sem2: [String],
  sem3: [String],
  sem4: [String],
  sem5: [String],
  sem6: [String],
  sem7: [String],
  sem8: [String]
},{
  collection:"subject_names_semwise"
});

const getSubjectNames = mongoose.model('subject_names_semwise', semSubjectsSchema);

// Create a model for the course schema
module.exports = getSubjectNames;
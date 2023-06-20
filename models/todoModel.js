const mongoose = require("mongoose");

const todoSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please add the title name"],
    },
    description: {
      type: String,
      required: [true, "Please add the description for task"],
    },
    status: {
      type: String,
      required: [true, "Please add the status of task"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Todo", todoSchema);

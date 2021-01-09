const inquirer = require("inquirer");
const choice = require("inquirer/lib/objects/choice");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your projects name?",
      name: "projectname",
    },

    {
      type: "input",
      message: "tell me about your project",
      name: "projectinfo",
    },

    {
      type: "input",
      message: "installation instructions",
      name: "installation instuctions",
    },

    {
      type: "input",
      message: "License usage (normal license is MIT)",
      name: "usageinstructions",
    },

    {
      type: "input",
      message: "who contributed",
      name: "contributers",
    },

    {
      type: "input",
      message: "Test notes",
      name: "testnotes",
    },
    {
      type: "input",
      message: "FAQs",
      name: "FAQ",
    },
  ])

  .then((answers) => {
    console.log(answers);
  });

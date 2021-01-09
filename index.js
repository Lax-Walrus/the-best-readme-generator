const inquirer = require("inquirer");
const choice = require("inquirer/lib/objects/choice");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your projects name?",
      name: "project_name",
    },

    {
      type: "input",
      message: "tell me about your project",
      name: "project_info",
    },

    {
      type: "input",
      message: "installation instructions",
      name: "installation_instuctions",
    },

    {
      type: "input",
      message: "License usage (normal license is MIT)",
      name: "usage_instructions",
    },

    {
      type: "input",
      message: "who contributed",
      name: "contributers",
    },

    {
      type: "input",
      message: "Test notes",
      name: "test_notes",
    },
    {
      type: "input",
      message: "FAQs",
      name: "FAQ",
    },
  ])

  .then(function getfile(answer) {
    console.log(answer);

    const readmetemp = ` ### ${answer.project_name}

![License: ${answer.usage_instructions}](https://img.shields.io/badge/License-${answer.usage_instructions}-green.svg)
    
## description:
    
    ${answer.project_info}
    
## TOC
    
- [Installation](#installation)
    
- [Usage](#usage)
    
- [Testing](#tests)
    
- [Contributers](#Contributers)
    
- [FAQs](#FAQs)
    
## Installation:
    
${answer.installation_instuctions}
    
## Usage
    
${answer.usage_instructions}
    
## Testing
    
${answer.test_notes}
    
 ## Contributers
    
${answer.contributers}
    
## FAQs
    
${answer.FAQ}
    `;

    fs.writeFile(`readme.md`, readmetemp, (err) =>
      err ? console.error(err) : console.log("no error")
    );
  });

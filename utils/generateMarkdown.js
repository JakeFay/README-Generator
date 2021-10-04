// TODO: Create a function that returns a license badge based on which license is passed in

// const { text } = require("stream/consumers");

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var badges = {
    'GNU GPLv3': "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]",

    'GNU AGPLv3': "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)]",

    'GNU LGPLv3': "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)]",

    'Mozilla Public License 2.0': "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]",

    'Apache License 2.0': "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]",

    'MIT License': "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]",

    'Boost Software License 1.0': "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)]",

    'None': ''
  }
  return badges[license];
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
  var links = {
    'GNU GPLv3': "(https://www.gnu.org/licenses/gpl-3.0)",

    'GNU AGPLv3': "(https://www.gnu.org/licenses/agpl-3.0)",

    'GNU LGPLv3': "(https://www.gnu.org/licenses/lgpl-3.0)",

    'Mozilla Public License 2.0': "(https://opensource.org/licenses/MPL-2.0)",

    'Apache License 2.0': "(https://opensource.org/licenses/Apache-2.0)",

    'MIT License': "(https://opensource.org/licenses/MIT)",

    'Boost Software License 1.0': "(https://www.boost.org/LICENSE_1_0.txt)",

    'None': ''
  }
  return links[license];
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenses) {

  var markdown = ''

  for (let i = 0; i < licenses.length; i++) {
    markdown += `${renderLicenseBadge(licenses[i])}${renderLicenseLink(licenses[i])}`
  }
  return markdown;
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  return `
# ${data.title} ${renderLicenseSection(data.license)}

## Description

${data.about}

## Table of contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Credits](#credits)
* [Contributing](#contributing)
* [tests](#tests)
* [Questions](#questions)
* [Link](#link)

## Installation

${data.installation}

## Usage

${data.usage}

## License

${data.license}

## Credits

${data.credits}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

${data.question}

## Link

${data.link}

`;
}

module.exports = generateMarkdown;

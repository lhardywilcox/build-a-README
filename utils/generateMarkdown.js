// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// Create object, pull items from object for functions?

const gnuInfo =
{
  type: 'GNU GPLv3',
  badge: `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`,
  link: '[GNU GPLv3 link](https://www.gnu.org/licenses/gpl-3.0.en.html)',
};

const mitInfo =
{
  type: 'MIT',
  badge: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
  link: '[MIT License link](https://opensource.org/license/mit-0/)',
};

const boostInfo =
{
  type: 'Boost Software License 1.0',
  badge: `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`,
  link: '[Boost Software License 1.0 link](https://opensource.org/license/bsl1-0-html/)',
};


// How do I get the data for the license chosen from index.js?  This throws an error for can't find index.js.


function renderLicenseBadge(license) {

  /*  const badgeInfo = {
     GNUGPLv3: `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`,
     MIT: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
     Boost: `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`,
   } */
  if (license === mitInfo.type) {
    return mitInfo.badge;
  } else if (license === gnuInfo.type) {
    return gnuInfo.badge;
  } else if (license === boostInfo.type) {
    return boostInfo.badge;
  } else {
    return ("");
  };
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === mitInfo.type) {
    return mitInfo.link;
  } else if (license === gnuInfo.type) {
    return gnuInfo.link;
  } else if (license === boostInfo.type) {
    return boostInfo.link;
  } else {
    return ("");
  };
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {
  if (license) {
    return `${renderLicenseBadge(license)}\n
    ${renderLicenseLink(license)}\n
    For the complete text of the license, please click on the link provided.\n`;
  } else {
    return ("");
  };
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({ title, license, description, installation, usage, credits, tests, github, email }) {
  return `# ${title}\n
  ${renderLicenseBadge(license)}\n
  ## Description\n
  ${description}\n
  ## Table of Contents\n
  -[Installation](#Installation)\n
  -[Usage](#Usage)\n
  -[Credits](#Credits)\n
  -[License](#License)\n
  -[Tests](#Tests)\n
  -[Questions](#Questions)\n
  ## Installation\n
  ${installation}\n
  ## Usage\n
  ${usage}\n
  ## Credits\n
  ${credits}\n
  ## License\n
  ${renderLicenseSection(license)}
  ## Tests\n
  ${tests}\n
  ## Questions\n
  If you have questions, please reach out to me at:\n
  [Github Link](${github})\n
  or\n
  [Email Link](${email})
`;
}

module.exports = generateMarkdown;

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// Create object, pull items from object for functions?

const gnuInfo =
{
  type: 'GNU GPLv3',
  badge: 'https://img.shields.io/badge/License-GPLv3-blue.svg',
  link: 'https://www.gnu.org/licenses/gpl-3.0',
};

const mitInfo =
{
  type: 'MIT',
  badge: 'https://img.shields.io/badge/License-MIT-yellow.svg',
  link: 'https://opensource.org/licenses/MIT',
};

const boostInfo =
{
  type: 'Boost Software License 1.0',
  badge: 'https://img.shields.io/badge/License-Boost_1.0-lightblue.svg',
  link: 'https://www.boost.org/LICENSE_1_0.txt',
};


// How do I get the data for the license chosen from index.js?

function renderLicenseBadge(license) {

  /*  const badgeInfo = {
     GNUGPLv3: `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`,
     MIT: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
     Boost: `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`,
   } */
  if (data.license === mitInfo.type) {
    return mitInfo.badge;
  } else if (data.license === gnuInfo.type) {
    return gnuInfo.badge;
  } else if (data.license === boostInfo.type) {
    return boostInfo.badge;
  } else {
    return ("");
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (data.license === mitInfo.type) {
    return mitInfo.link;
  } else if (data.license === gnuInfo.type) {
    return gnuInfo.link;
  } else if (data.license === boostInfo.type) {
    return boostInfo.link;
  } else {
    return ("");
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

// Is this supposed to be rendering the actual verbiage of the license?
function renderLicenseSection(license) {


}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}\n
  ## Description\n
  ${data.description}\n
  ## Installation\n
  ${data.installation}\n
  ## Usage\n
  ${data.usage}\n
  ## Credits/Collaborators\n
  ${data.credits}\n
  ## License\n


`;
}

module.exports = generateMarkdown;

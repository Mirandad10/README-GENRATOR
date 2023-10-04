// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
    case 'GPLv3':
      return '![License:GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
    case 'BSD 3-Clause':
      return '![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)';
    default:
      return ''; // return if no license or unrecongnized lciense
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    case 'GPLv3':
      return 'https:www.gnu.org/badge/licenses/gpl-3.0';
    case 'BSD 3-Clause':
      return 'https://openspource.org/licenses-BSD-3-Clause-blue';
    default:
      return ''; // return if no license or unrecongnized lciense
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license && license !== 'none') {
    return `
    ##License
    this project is licensed under the ${license} license. for more information refer to the [license documentation] ${renderLicenseLink(license)}).`;

  }
  return ''; // return if no license or 'none' is chosen
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ## Badges
  ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

   ${data.title}

   ## Description
   ${data.description}

   ## Installation 
   ${data.installation}

   ## Usage 
   ${data.usage}

   ## License 
   ${data.license === 'none' ? 'no license applied. ' : data.license}

   ## Contributing
   ${data.contributing}

   ##Tests
   ${data.tests}

   ## conatct
   ${data.contact}

`;
}

module.exports = generateMarkdown;

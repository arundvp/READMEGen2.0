// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
  switch (license) {
    case 'MIT':
      badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'Apache':
      badge = '[![License: Apache-2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'GPL':
      badge = '[![License: GPL-3.0](https://img.shields.io/badge/License-GPL%203.0-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case 'BSD':
      badge = '[![License: BSD-3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
      break;
    case 'Unlicense':
      badge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
      break;
    default:
      badge = '';
  }
  return badge;
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = '';
  switch (license) {
    case 'MIT':
      link = 'https://opensource.org/licenses/MIT';
      break;
    case 'Apache':
      link = 'https://opensource.org/licenses/Apache-2.0';
      break;
    case 'GPL':
      link = 'https://www.gnu.org/licenses/gpl-3.0';
      break;
    case 'BSD':
      link = 'https://opensource.org/licenses/BSD-3-Clause';
      break;
    default:
      link = '';
      
}
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
    let section = '';
    switch (license) {
      case 'MIT':
        section = 'This project is licensed under the MIT license.';
        break;
      case 'Apache':
        section = 'This project is licensed under the Apache license.';
        break;
      case 'GPL':
        section = 'This project is licensed under the GPL license.';
        break;
      case 'BSD':
        section = 'This project is licensed under the BSD license.';
        break;
      default:
        section = '';
    }
    return section;

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
 ## Description
  ${data.description}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution Guidelines](#contribution-guidelines)
  - [Test Instructions](#test-instructions)
  - [License](#license)
  - [How to Contribute](#how-to-contribute)
  - [Deployed Link](#deployed-link)
  - [Questions](#questions)
  ## Installation <a name="installation"></a>

  ${data.installation}
  
  ## Usage <a name="usage"></a>
  
  ${data.usage}
  
  ## Contribution Guidelines <a name="contribution-guidelines"></a>
  
  ${data.contribution}
  
  ## Test Instructions <a name="test-instructions"></a>
  
  ${data.test}
  
  ## License <a name="license"></a>
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
  
  ## Credits <a name="credits"></a>
  
  ${data.credits}
  
  ## Badges <a name="badges"></a>
  
  ${data.badges}
  
  ## Features <a name="features"></a>
  
  ${data.features}
  
  ## How to Contribute <a name="how-to-contribute"></a>
  ${data.howToContribute}
 
  ## Deployed Link <a name="deployed-link"></a>
  ${data.deployedLink}
  
  ## Questions <a name="questions"></a>
  If you have any questions, please contact me at ${data.email}. 
  
  My GitHub profile is [${data.github}](https://github.com/${data.github}).

`;
}

module.exports = generateMarkdown;


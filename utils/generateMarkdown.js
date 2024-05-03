// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badges = {
      'MIT': '!License: MIT',
      'GPLv2': '!License: GPL v2',
      'GPLv3': '!License: GPL v3',
      'Apache 2.0': '!License',
      'BSD 3-Clause': '!License',
      'BSD 2-Clause': '!License',
      'LGPLv3': '!License: LGPL v3',
      'AGPLv3': '!License: AGPL v3',
      'Unlicense': '!License: Unlicense',
      'CC0': '!License: CC0'
    };
  
    // Return the badge if the license exists, otherwise return an empty string
    return badges[license] || '';
};
console.log(renderLicenseBadge('MIT'));

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinks = {
      'MIT': 'https://opensource.org/licenses/MIT',
      'GPLv2': 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html',
      'GPLv3': 'https://www.gnu.org/licenses/gpl-3.0',
      'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
      'BSD 3-Clause': 'https://opensource.org/licenses/BSD-3-Clause',
      'BSD 2-Clause': 'https://opensource.org/licenses/BSD-2-Clause',
      'LGPLv3': 'https://www.gnu.org/licenses/lgpl-3.0',
      'AGPLv3': 'https://www.gnu.org/licenses/agpl-3.0',
      'Unlicense': 'https://unlicense.org/',
      'CC0': 'https://creativecommons.org/publicdomain/zero/1.0/'
    };
  
    // Return the link if the license exists, otherwise return an empty string
    return licenseLinks[license] || '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
if (!license) return '';

const licenseBadge = renderLicenseBadge(license);
const licenseLink = renderLicenseLink(license);
const licenseText = `This project is licensed under the ${license} - see the LICENSE file for details.`;

return `
## License

${licenseBadge}

${licenseText}
`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
// Generate sections with the provided data
const titleSection = `# ${data.title}`;
const descriptionSection = `## Description\n\n${data.description}`;
const tableOfContentsSection = `## Table of Contents\n\n- Installation\n- Usage\n- Contributing\n- Tests\n- Questions\n- License`;
const installationSection = `## Installation\n\nTo install necessary dependencies, run the following command:\n\n\`\`\`\n${data.installation}\n\`\`\``;
const usageSection = `## Usage\n\n${data.usage}`;
const contributingSection = `## Contributing\n\n${data.contributing}`;
const testsSection = `## Tests\n\nTo run tests, run the following command:\n\n\`\`\`\n${data.tests}\n\`\`\``;
const questionsSection = `## Questions\n\nIf you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at ${data.github}.`;

// Use the renderLicenseSection function to create the license section
const licenseSection = renderLicenseSection(data.license);

// Combine all sections into one markdown string
return `${titleSection}\n\n${descriptionSection}\n\n${tableOfContentsSection}\n\n${installationSection}\n\n${usageSection}\n\n${contributingSection}\n\n${testsSection}\n\n${questionsSection}\n\n${licenseSection}`;
return `# ${data.title}

`;
}

module.exports = generateMarkdown;
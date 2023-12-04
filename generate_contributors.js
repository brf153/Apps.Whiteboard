const fs = require('fs');

const contributorsData = JSON.parse(fs.readFileSync('contributors.json', 'utf-8'));
const contributorsList = contributorsData.map(contributor => `![${contributor.login}](${contributor.avatar_url}&size=50)`);
const contributorsSection = `<!-- CONTRIBUTORS-LIST:START -->\n${contributorsList.join('\n')}\n<!-- CONTRIBUTORS-LIST:END -->`;

const readmeContent = fs.readFileSync('README.md', 'utf-8');
const updatedReadme = readmeContent.replace(/<!-- CONTRIBUTORS-LIST:START -->[\s\S]*<!-- CONTRIBUTORS-LIST:END -->/, contributorsSection);

fs.writeFileSync('README.md', updatedReadme);
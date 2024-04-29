const fs = require('fs');

const projectsData = fs.readFileSync('data/repos.json', 'utf8');
const projectsList = JSON.parse(projectsData);

var filterProject = [];
const excludeProject = new Set(["stopwatch", "first_app", "IT-curriculum-guide", "javascript-algorithms", "next-njcocosa", "Project-List", "react-ph-client", "system-design-primer", "client"]);

for (const project of projectsList) {
    if (!excludeProject.has(project.name)) {
        filterProject.push(project);
        excludeProject.add(project.name); // to prevent duplication
    }
}

export const projects = filterProject
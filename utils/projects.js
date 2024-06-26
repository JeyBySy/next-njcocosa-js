import projectsList from '../data/projects.json'


var filterProject = [];
const excludeProject = new Set(["Server-Battleship", "Client-battleship", "stopwatch", "first_app", "IT-curriculum-guide", "javascript-algorithms", "next-njcocosa", "Project-List", "react-ph-client", "system-design-primer", "client"]);

for (const project of projectsList) {
    if (!excludeProject.has(project.name)) {
        filterProject.push(project);
        excludeProject.add(project.name); // to prevent duplication
    }
}

export const projects = filterProject
function startProjects() {
    document.getElementById('introScreen').style.display = 'none';
    document.getElementById('mainContent').style.display = 'block';
    showProject('conversion');  // Show Unit Converter as the default project
}

function showProject(projectId) {
    const projects = document.querySelectorAll('.project-container');
    projects.forEach(project => {
        project.style.display = 'none';
    });
    document.getElementById(projectId

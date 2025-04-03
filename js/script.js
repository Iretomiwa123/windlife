document.addEventListener("DOMContentLoaded", function () {
    
    const projects = [
        {
            id: 1,
            title: "Nigeria Rainforest Conservation",
            description: "Protecting Nigeria rainforest from deforestation and promoting sustainable practices.",
            image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
            category: "Conservation",
            location: "Nigeria",
        },
        {
            id: 2,
            title: "Clean Ocean Initiative",
            description: "Removing plastic waste from oceans and coastal areas while educating communities.",
            image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
            category: "Ocean Protection",
            location: "Global",
        }
    ];

    const projectsContainer = document.getElementById("projects-container");
    projects.forEach(project => {
        const projectCard = `
            <div class="col-md-6 col-lg-4 mb-4">
                <div class="card shadow-sm border-0">
                    <img src="${project.image}" class="card-img-top" alt="${project.title}">
                    <div class="card-body">
                        <h5 class="card-title">${project.title}</h5>
                        <p class="card-text">${project.description}</p>
                        <p><strong>Location:</strong> ${project.location}</p>
                        <a href="#" class="btn1">Learn More</a>
                    </div>
                </div>
            </div>
        `;
        projectsContainer.innerHTML += projectCard;
    });
});
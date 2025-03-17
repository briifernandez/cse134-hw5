document.addEventListener('DOMContentLoaded', async() => {
    const container = document.getElementById("experience-card");

    const experience = localStorage.getItem('experience') || '[]';
    const localStorageJSON = JSON.parse(experience);

    for (const experience of localStorageJSON) {
        const experienceCard = document.createElement('experience-card');
        experienceCard.setAttribute('title', experience.title);
        experienceCard.setAttribute('img-src', experience.imageSrc);
        experienceCard.setAttribute('img-alt', experience.imageAlt);
        experienceCard.setAttribute('description', experience.description);
        experienceCard.setAttribute('link', experience.link);
        container.appendChild(experienceCard);
        
    }

    try {
        const response = await fetch('experience.json');
        const experienceList = await response.json();
        for(const experience of experienceList) {
            const experienceCard = document.createElement('experience-card');
            experienceCard.setAttribute('title', experience.title);
            experienceCard.setAttribute('img-src', experience.imageSrc);
            experienceCard.setAttribute('img-alt', experience.imageAlt);
            experienceCard.setAttribute('description', experience.description);
            experienceCard.setAttribute('link', experience.link);
            container.appendChild(experienceCard);
        }
    }
    catch (error) {
        console.error('Error fetching experience', error);
    }
});
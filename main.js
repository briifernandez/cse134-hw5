document.addEventListener('DOMContentLoaded', () => {
    const loadLocalBtn = document.getElementById('load-local');
    const loadRemoteBtn = document.getElementById('load-remote');
    const container = document.getElementById('experience-card');

    if (!localStorage.getItem('experience')) {
        const sampleData = [
            {
                "title": "San Diego Supercomputer Center",
                "imageSrc": "imgs/sdsc-screen.png",
                "imageAlt": "Image of San Diego Supercomputer work",
                "description": "At the San Diego Supercomputer Center, I played a key role in modernizing research software applications by transitioning legacy AccessDB forms into a scalable web-based platform. I developed and optimized core application modules, including contact management, protocol tracking, and subject records, streamlining data workflows for researchers. Using React, TypeScript, Golang, and Tailwind CSS, I designed and implemented intuitive CRUD functionalities, improving usability and data accessibility.",
                "link": "https://neurosciences.ucsd.edu/centers-programs/adrc/index.html"
            },
            {
                "title": "County of San Diego",
                "imageSrc": "imgs/county-screen.png",
                "imageAlt": "Image of County of San Diego work",
                "description": "At the County of San Diego, I led the design and development of the county’s film site landing page, enhancing accessibility and user experience for filmmakers and location managers. I created intuitive prototypes in Figma, conducted user interviews and usability tests to refine functionality, and translated the designs into a fully functional WordPress site. I presented the final design and key insights at the U.S. Chamber of Commerce Conference, highlighting its potential to drive revenue growth in the local film industry.",
                "link": "https://www.sandiegocounty.gov/content/sdc/cao/edga/filming.html"
            },
            {
                "title": "Innovating for National Security",
                "imageSrc": "imgs/i4x-screen.png",
                "imageAlt": "Image of Innovating for National Security work",
                "description": "As part of Innovating for National Security, I collaborated with cross-functional teams to optimize vessel tracking operations for the U.S. Coast Guard within a 200-nautical-mile enforcement zone. Through comprehensive stakeholder interviews, I identified critical needs and pain points, refining project strategies to enhance operational efficiency. I developed Value Proposition Canvases (VPCs) and iteratively improved our Mission Model Canvas (MMC) to align with evolving insights.",
                "link": "https://innovation.ucsd.edu/about-oic/programs/innovating-for-national-security.html"
            }
        ];

        localStorage.setItem('experience', JSON.stringify(sampleData)); 
    }
  

    loadLocalBtn.addEventListener('click', () => {
      const data = localStorage.getItem('experience') || '[]';
      const localData = JSON.parse(data);
      container.innerHTML = '';
  
      for (const item of localData) {
        const card = document.createElement('experience-card');
        card.setAttribute('title', item.title);
        card.setAttribute('img-src', item.imageSrc);
        card.setAttribute('img-alt', item.imageAlt);
        card.setAttribute('description', item.description);
        card.setAttribute('link', item.link);
        container.appendChild(card);
      }
    });
  
  loadRemoteBtn.addEventListener('click', async () => {
    try {
    
      const response = await fetch('https://api.jsonbin.io/v3/b/67d7a6988561e97a50ed7402/latest', {
        headers: {
          'X-Access-Key': '$2a$10$navaQNhy6LpLL0CpTyao3.mPt0ydEqRmeZ/P5pn0b2Mfsd9Xm0LG.'
        }
      });
   
      if (!response.ok) {
        throw new Error(`Failed to fetch`);
      }

      const jsonData = await response.json();
      const current = jsonData.record;

      container.innerHTML = '';

      for (const item of current) {
        const card = document.createElement('experience-card');
        card.setAttribute('title', item.title);
        card.setAttribute('img-src', item.imageSrc);
        card.setAttribute('img-alt', item.imageAlt);
        card.setAttribute('description', item.description);
        card.setAttribute('link', item.link);
        container.appendChild(card);
      }
    } catch (error) {
      console.error('Error fetching', error);
    }
    });
  });
  
const ProjectsAPI = {
    projects: [
        {
            id: 1,
            title: 'JPH Building',
            summary: 'The client required a spring clean to the website and to move away from flash. This presented a challenge to keep the website looking professional while getting users to become conversions by completing the enquiry form. There was also a challenge to optimize the site to appear high within the Google listings for "Cheltenham Builders".',
            websiteImg: 'npower-photo-challenge-hero.jpg',
            websiteDesktop: 'npower-photo-challenge-desktop.png',
            websiteMobile: 'npower-photo-challenge-mobile.png',
            websiteAddress: 'http://www.npower.com/',
            slug: 'jph-building',
            tags: ['css','html','wordpress','photoshop']
         },{
            id: 2,
            title: 'Uno',
            summary: 'This website was put together by creating a concept within Photoshop and then skinning a Wordpress to the client's requirements. The aim of the design was to showcase the artist's songs and latest videos. Vector logos and high resolution images were provided to me which makes creating high quality web pages a lot easier.',
            websiteImg: 'npower-photo-challenge-hero.jpg',
            websiteDesktop: 'npower-photo-challenge-desktop.png',
            websiteMobile: 'npower-photo-challenge-mobile.png',
            websiteAddress: 'http://www.npower.com/',
            slug: 'uno',
            tags: ['css','html','wordpress']
         },{
            id: 3,
            title: 'npower Photo Challenge',
            summary: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which.',
            websiteImg: 'npower-photo-challenge-hero.jpg',
            websiteDesktop: 'npower-photo-challenge-desktop.png',
            websiteMobile: 'npower-photo-challenge-mobile.png',
            websiteAddress: 'http://www.npower.com/',
            slug: 'npower-photo-challenge',
            tags: ['css','html','javascript']
         },{
            id: 4,
            title: 'Barnardos',
            summary: 'Manga',
            websiteImg: 'npower-photo-challenge-hero.jpg',
            websiteDesktop: 'npower-photo-challenge-desktop.png',
            websiteMobile: 'npower-photo-challenge-mobile.png',
            websiteAddress: 'http://www.npower.com/',
            slug: 'barnardos',
            tags: ['css','html','javascript','webpack','gridpak']
        },{
           id: 5,
           title: 'Porfolio',
           websiteImg: 'npower-photo-challenge-hero.jpg',
           websiteDesktop: 'npower-photo-challenge-desktop.png',
           websiteMobile: 'npower-photo-challenge-mobile.png',
           websiteAddress: 'http://www.npower.com/',
           websiteImg: 'bbc-situ.jpg',
           slug: 'barnardos',
           tags: ['css','html','javascript','webpack','react']
       }
    ],
    all: function() { return this.projects },
    get: function(id) {
        const isProject = p => p.id === id
        return this.projects.find(isProject)
    }
}

export default ProjectsAPI;

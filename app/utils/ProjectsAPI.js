const ProjectsAPI = {
    projects: [
        {
            id: 1,
            title: 'Summer Sixteen',
            summary: 'Lorem lipsum',
            websiteImg: 'bbc-situ.jpg',
            slug: 'summer-sixteen'
         },{
            id: 2,
            title: 'Love Yourz',
            summary: 'J Cole',
            websiteImg: 'bbc-situ.jpg',
            slug: 'love-yourz'
         },{
            id: 3,
            title: 'Tripping',
            summary: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which.',
            websiteImg: 'bbc-situ.jpg',
            slug: 'tripping'
         },{
            id: 4,
            title: 'Outburst004',
            summary: 'Manga',
            websiteImg: 'bbc-situ.jpg',
            slug: 'outburst004'
        }
    ],
    all: function() { return this.projects },
    get: function(id) {
        const isProject = p => p.id === id
        return this.projects.find(isProject)
    }
}

export default ProjectsAPI;

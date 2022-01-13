export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61e08955762e8b009d3dd6fa',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-wib9iseu',
                  apiId: 'f5928ed9-400f-4f88-a0e5-e8f0b3d82624'
                },
                {
                  buildHookId: '61e08956fc35a30059ddc8ea',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-y8yasn89',
                  apiId: 'ffd3e449-e697-4bf2-8d49-3d5e69e4652b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tryingToBeADeveloper/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-y8yasn89.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}

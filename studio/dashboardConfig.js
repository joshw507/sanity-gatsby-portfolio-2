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
                  buildHookId: '635a8aa4d279ba32d5523234',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-2-studio-n5kbnd9b',
                  apiId: '4e24d132-8bbf-4164-b7ce-52f7a75106e8'
                },
                {
                  buildHookId: '635a8aa5ee24b42e38a50a9e',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-2-web-myoei6xu',
                  apiId: '31b94eba-c77e-4069-9ebe-10f20d0aeb27'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/joshw507/sanity-gatsby-portfolio-2',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-2-web-myoei6xu.netlify.app',
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

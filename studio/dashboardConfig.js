export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e325d64bb02107b9cb2e47e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-pgcjupae',
                  apiId: '06bcfa3c-48ed-4def-9b05-29e09c31a043'
                },
                {
                  buildHookId: '5e325d6491ca41fbdf1b2b5f',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-rpfmkkcr',
                  apiId: 'f828e8b5-8288-4124-80f2-63a1c90bd0e5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/SpacemanPete/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-rpfmkkcr.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}

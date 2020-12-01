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
                  buildHookId: '5fc68eea3bd97f2b53278ebf',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-1cmsm8jj',
                  apiId: 'c8d4829f-0b57-4a75-b5f8-3c5318c2a241'
                },
                {
                  buildHookId: '5fc68eeaf74c0027510d4642',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-8uov7p68',
                  apiId: 'cda39f36-603a-4f6b-a52a-ec2ebcdf98e9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rimvydas-codemazes/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-8uov7p68.netlify.app', category: 'apps' }
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

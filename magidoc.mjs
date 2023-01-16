import path from 'path';

function markdown(string) {
  // Takes the first indent and trims that length from everywhere.
  // Markdown templates don't like the extra space at the beginning.
  const target = string[0];
  const trimSize = /^\s+/.exec(string)[0].length;
  return target
    .split('\n')
    .map((line) => line.substr(trimSize - 1))
    .join('\n');
}

export default {
  introspection: {
    type: 'sdl',
    paths: ['./schema.graphql'],
  },
  website: {
    template: 'carbon-multi-page',
    staticAssets: './dist/assets',
    output: './dist',
    options: {
      appTitle: 'Tarvent API',
      appLogo: 'https://cdn.trvt.io/resource/graphics/logo/RefLogo.png',
      appFavicon: 'https://cdn.trvt.io/resource/graphics/logo/favicon-16x16.png',
      
      pages: [
        {
          title: 'Welcome',
          content: markdown`
            # 👋 Hi

            Welcome to [Tarvent](https://api.tarvent.com/graphql/)'s GraphQL documentation!
          `,
        },
      ],
      externalLinks: [
        {
          href: 'https://api.tarvent.com',
          label: 'Tarvent API',
          kind: 'Tarvent',
        },
        {
          href: 'https://www.tarvent.com/contact-us',
          label: 'Tarvent support',
          kind: 'Tarvent',
        },
      ],
      queryGenerationFactories: {
        UUID: '000000000000000000',
        Byte: '000000',
        Decimal: 0.0,
        'Int!': 420,
        String: 'abc',
      },
    },
  },
};

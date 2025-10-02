const projects = [
    {
        title: 'DLA Creature Cards',
        // link: {
        //     url: 'https://creaturecards.deutschla.com/',
        //     title: 'DLA Creature Cards',
        // },
        subtitle:
            'A canvas drawing app converting user generated drawings into generative AI compositited into printable playing cards.',
        summary: [
            'A full stack application for an internal DLA project.',
            'User generated Canvas drawings are combined a send to a stable diffusion backend.',
            'The backend returns a full fidelity AI rendered of the sketches.',
            'The result is re-rendered into canvas and decorated with additional text and images.',
        ],
        stack: ['NexJS', 'Canvas', 'React', 'SCSS modules', 'AWS'],
    },
    {
        title: 'TacoBell.com',
        link: {
            url: 'https://ta.co',
            title: 'Taco Bell',
        },
        subtitle:
            'Ecommerce and marketing site for Taco Bell. Integrating online ordering, user accounts, and order history, as well as all marketing, legal, and content needs.',
        summary: [
            'Technical Lead for frontend team on Tacobell.com',
            'Integrat multiple data sources include serverless APIs, product and restarautn data, and headless CMSs content.',
        ],
        stack: [
            'NexJS',
            'React',
            'SCSS modules',
            'Contentful',
            'Serverless',
            'Node',
            'AWS',
        ],
    },
    {
        title: 'WarnerBros.com',
        link: {
            url: 'https://wb.com',
            title: 'Warner Brothers',
        },
        subtitle: 'Consumer facing website for Warner Bros.',
        summary: [
            'Fullstack engineer with web team supporting multiple territories.',
        ],
        stack: ['React Static', 'Drupal', 'Cucumber / Selenium', 'SCSS'],
    },
    {
        title: 'Facebook Stories',
        link: {
            url: 'https://stories.fb.com',
            title: 'Facebook stories',
        },
        subtitle: 'Marketing site for the Facebook Stories team.',
        summary: [
            'Lead developer for a WordPress VIP site built to promote the Stories component of Facebook platform.',
            'The project launch was scheduled to coincided with the teams F8 Conference presentation, so the timeline was fixed in advance. We developed quickly within a localized Docker instance to get development up to velocity, then ported over to the VIP platform and completed the build there.',
            'The admin was built using custom fields to provide fully tailed content control to the Stories team to update content as necessary.',
        ],
        stack: [
            'WPVIP',
            'Docker',
            'PHPCS',
            'ES6 Modules',
            'Greensock Animations',
            'SCSS',
        ],
    },
    {
        title: 'Uber Freight',
        link: {
            url: 'https://www.uberfreight.com/',
            title: 'Uber Freight site',
        },
        subtitle: 'Onboarding site for the Uber Freight team',
        summary: [
            'Work closely with the Uber Freight team to introduce new content and features to the Freight site.  The could be anything from building new React components in FusionJS, content migration, routing changes, or basic pixel adjustments and bug fixes to existing elements.',
            "The site uses a Contentful JSON API backend, with a FusionJS / Styletron frontend.  Development work would go through a standard approval process on dev / staging environemnts, which would then be deployed using the client's internal system.",
        ],
        stack: ['FusionJS', 'Styletron'],
    },
    {
        title: 'Uber Brand',
        link: {
            url: 'https://brand.uber.com',
            title: 'Uber brand guidelines',
        },
        subtitle: 'Uber brand guidelines site',
        summary: [
            "A centralized guideline site for Uber's various teams to reference logo usage, typography, motion studies, photography usage, and more.",
            'As a member of this dev team, I built out React components for the site using a tightly controlled theming system. Colors, Line height, Animation curves, buttons and more all had to be precisely consistent across components.',
        ],
    },
    {
        title: 'Volkswagen USA',
        link: {
            title: 'vw.com',
            url: 'https://vw.com',
        },
        subtitle: 'VW USA Home page',
        summary: [
            'Needing to sell thru a home page redesign, the client was having a difficult time visualizing the cost/benefit design choices presented. Tasked with building a full-fidelity prototype with no runway, I quickly contructed a stand-alone scaffold of the existing VW site to deliver a new protocype in with the design team.  With little runway, I executed a behaviorly complete design in browser. It was constructed with live copies of existing HTML scaffold, and siting along side all JavaScript and CSS libraries running in production to provide the implementation team with the lowest possible barrier to execution.',
        ],
        stack: [
            'ES6',
            'SCSS',
            'Gulp',
            'jQuery',
            'HTML',
            'Gulp Middleware vai Express',
        ],
    },
    // {
    //   title: 'Tacobell.com',
    //   link: {
    //     url: 'http://ta.co'
    //   },
    //   summary: [
    //     "Bringing mobile ordering outside the app store.  My team was tasked with providing an integrated mobile and desktop experiences that leveraged existing APIs and services build for Taco Bell's mobile app. My primary responsibility during construction was a feature rich checkout process for guest and registered users, user conversion, and a side chained interface for reloading prepaid cards during checkout.",
    //     'This site has since been proted to a new platform so much of the original work has been been written again.'
    //   ],
    //   stack: ['HTML', 'BackBone', 'SCSS']
    // },
    {
        title: 'Uber Marketplace',
        link: {
            url: 'https://marketplace.uber.com',
        },
        summary: [
            'Model out site structure and content using the agency’s Contentful account, and eventually migrate to Uber’s account.',
            'Build out fully functional React components for the Marketplace site based on third-party designs.',
            'Provide technical feedback on design files for ease of implementation, with suggested revisions.',
            'Oversee development of other components, review pull requests, and manage repository branches and tags.',
        ],
        stack: ['React', 'FusionJS', 'Styletron', 'Contentful'],
    },
    {
        title: 'Eminem: Revival',
        link: {
            url: 'http://www.deutsch.com/projects/revival',
        },
        subtitle: ' A short turn-around album teaser for Interscope records',
        summary: [
            'Interscope was referred to our agency to handle rapid development for marketing efforts on the new Eminem album “Revival”. I was tasked with quickly building',
        ],
        stack: ['HTML', 'SCSS', 'Gulp', 'AWS'],
    },
];

export { projects };

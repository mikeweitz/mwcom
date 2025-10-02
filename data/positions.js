const positions = [
    {
        role: 'Technology Lead',
        company: 'Taco Bell (contract)',
        dates: {
            start: 'Jan, 2024',
        },
        responsibilities: [
            'Domain expert on Dockerized Next.js application deployed to Amazon ECS serving 1.5 million daily users, driving millions in monthly revenue.',
            'Streamlined frontend architecture for multi-zone Next.js application to reduce build times by ~10%.',
            'Led multiple sprints of performance overhaul work that raised lighthouse scores and improved user checkout funnel by ~5%.',
            'Partnered with the restaurant control center team to develop a framework for a shared component library across dotcom and back-of-house teams.',
            'Drove engineering growth through code reviews, pair programming, and knowledge sharing to improve code quality and adoption of best practices.',
            'Created and maintained CI/CD pipelines for test, build, deploy, and cache-clear stages.',
            'Collaborated with Quality Assurance teams to establish acceptance criteria and ensure new features met performance, accessibility, and mobile-first standards.',
        ],
        summary:
            'Hands-on frontend technology leader working with multiple teams on react, Next.js, and node implementations for tacobell.com ecommerce application.',
        skills: [
            'React',
            'TypeScript',
            'Next.js',
            'Node',
            'AWS',
            'CI/CD',
            'Docker',
            'Contentful',
        ],
    },
    {
        role: 'Technology Lead',
        company: 'Deutsch LA',
        dates: {
            start: 'Dec, 2020 - Nov, 2023',
        },
        summary:
            'Lead engineer on embedded team within client organization to build and maintain frontend and API middleware for TacoBell.com.',
        responsibilities: [
            'Partnered with cross-functional teams across marketing, product, content, analytics, visual design, and performance to gather requirements and deliver new features supporting campaigns that drive site engagement.',
            'Consistently optimized products for a mobile-first customer base.',
            'Conducted technical requirements gathering to ensure features are fully vetted for all user stores.',
            'Provided technical leadership through pair programming, code review, and merge request oversight to align features with software development best practices.',
            'Collaborated with design and product teams to deliver comprehensive user experiences that cover all use cases and application states.',
            'Created versatile and reusable content models consumed via GraphQL endpoints to support Content teams.',
            'Launched a Progressive Web App incorporating custom AI workflows into a tablet-first Canvas app.',
        ],
        skills: [
            'React',
            'NextJS',
            'Contentful',
            'Gitlab',
            'Storybook',
            'Node',
            'AWS',
        ],
    },
    {
        role: 'Senior Engineer',
        company: 'Warner Bros',
        dates: {
            start: 'March, 2020',
            end: 'Dec, 2020',
        },
        summary:
            'Contributor on a cross-functional team running the consumer facing warnerbros.com site supporting 18 regions and thousands of statically generated routes.',
        responsibilities: [
            'Maintained a global ReactJS platform across 18 regions with multi-language support.',
            'Improved reliability through consistent application of unit, snapshot and integration testing.',
            'Enforced TypeScript, ESLint, and Prettier standards to ensure consistent, high-quality code.',
            'Delivered features on time in Agile sprints, collaborating with cross-functional teams.',
            'Maintained unit and end-to-end test suite using Jest and Cucumber to ensure reliability and quality of core features.',
        ],
        skills: [
            'React',
            'Styled Components',
            'Git',
            'Jest',
            'Enzyme',
            'Cucumber',
            'Node',
        ],
    },
    {
        role: 'Lead Developer',
        company: 'HAUS',
        dates: {
            start: 'Aug, 2018',
            end: 'Aug, 2019',
        },
        responsibilities: [
            'Worked with Uber and Facebook clients to build large-scale component driven React websites using CSS-in-JS paradigms for interactivity, and event-driven animations with Greensock (GSAP).',
            'Followed opinionated, enterprise-quality coding standards on client platforms including Wordpress VIP, and Uber’s in-house FusionJS React framework.',
            'Integrated with various back-end platforms including Contentful, Wordpress VIP, and Chameleon.',
            'Consistently shipped high-quality code on aggressive deadlines.',
        ],
        skills: [
            'React',
            'Styled Components',
            'FusionJS',
            'Next.js',
            'Webpack',
            'GSAP Animation',
        ],
    },
    {
        role: 'Principal Engineer',
        company: 'Deutsch, Inc',
        dates: {
            start: 'May 2018',
            end: 'Aug 2018',
        },
        responsibilities: [
            'Gather requirements to scope and architect new client projects, defining technical workflows and dependencies to ensure on-time delivery.',
            'Partnered with stakeholders across account, production, and QA teams to translate business needs into actionable technical plans.',
            'Established project scaffolding and documentation standards, streamlining developer onboarding and reducing setup time.',
            'Mentored and guided engineers on best practices in React architecture, code quality, and team workflows, raising overall engineering standards.',
        ],
        skills: [
            'JavaScript',
            'Node',
            'Git',
            'Gulp',
            'AWS (S3, Lambda, CloudFront, Route 53)',
        ],
    },
    {
        role: 'Senior Frontend Engineer',
        company: 'Deutsch Inc',
        dates: {
            start: 'May 2015',
            end: 'May 2018',
        },
        responsibilities: [
            'Defined and implemented front end deliverables for client projects.',
            'Provided level-of-effort estimates for project timelines.',
            'Worked closely with production teams to ensure projects are built to spec.',
            'Scaffolded front-end projects including READMEs, work-flows, and managed code repositories.',
        ],
        skills: [
            'JavaScript',
            'Node',
            'jQuery',
            'CSS Animations',
            'HTML Templating',
            'PHP',
            'Git',
            'Gulp',
        ],
    },
    {
        role: 'Senior Front End Prototyper',
        company: 'Yuzu by Barnes & Noble',
        dates: {
            start: 'July 2014',
            end: 'Feb 2015',
        },
        responsibilities: [
            'Build high fidelity in-browser prototypes.',
            'Demonstrate proof-of-concepts as part of the user experience design work-flow.',
            'Primarily focused on the Yuzu web client feature set.',
        ],
        skills: [
            'Javascript',
            'HTML',
            'CSS',
            'JS and CSS Animation',
            'Ruby on Rails',
        ],
    },
    {
        role: 'Senior Director, Development',
        company: 'bpg',
        dates: {
            start: 'Oct 2012',
            end: 'Jul 2014',
        },
        responsibilities: [
            'Primary point of contact for all development needs for bpg.',
            'Provide oversight and feedback to internal and out-of-house developers.',
            'Set architecture and development scope for html-driven projects.',
            'Work closely with account team in responding to client requests.',
        ],
    },
    {
        role: 'Interactive Developer',
        company: 'bpg',
        dates: {
            start: 'Nov 2010',
            end: 'Oct 2012',
        },
        responsibilities: [
            'Deliver HTML/JS/CSS/PHP driven sites for high-profile client, both independently and within teams.',
            'Assist project managers in estimating scope on new projects.',
            'Write code other developers can read.',
            'Never miss a deadline.',
        ],
    },
    {
        role: 'Web Designer',
        company: 'Silva Artist Management',
        dates: {
            start: 'Oct 2007',
            end: 'Nov 2010',
        },
        responsibilities: [
            'Ran the official web sites for recording artists Foo Fighters, Beastie Boys, and Jimmy Eat World.',
            'Manage day-to-day interaction with fans on official message boards.',
            'Design, build, and ship artist newsletters.',
            'Report directly to artist’s management team.',
        ],
    },
];

export { positions };

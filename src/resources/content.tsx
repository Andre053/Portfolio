import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "André",
  lastName: "de Biasi",
  name: `André de Biasi`,
  role: "Data Scientist and Software Engineer",
  avatar: "/images/avatar.jpg",
  email: "andre.debiasi053@gmail.com",
  location: "America/Toronto", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English",], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Andre053",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/andre-de-biasi/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Using data to better understand the real world</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm André, currently a IT Technician at The Canadian Press, where I support users and write software
      <br /> After hours, I build my own projects.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        André is a Toronto-based technical professional who is passionate about using data to understand and improve society. 
        He has worked as a software engineer, cybersecurity analyst, systems administrator, and data analyst. Rooted in an
        interest in technology and politics, his interests lie in using technical skills to understand and advocate for solutions
        that champion the public good. 
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "The Canadian Press",
        timeframe: "SEP 2024 - PRESENT",
        role: "IT Technician",
        achievements: [
          <>
            Daily Windows, Mac, and Cloud application support for employees and clients across Canada.
          </>,
          <>
            Active Directory, Microsoft Entra, and Microsoft 365 administration for over 200 employees and clients. 
          </>,
          <>
            Utilizing PowerShell, Python, and Excel to automate or accelerate data management and analysis whenever possible. 
          </>,
          <>
            Developed a Python CLI program to export all Zoom meetings between a certain date using the Zoom API, saving hours of manual work. 
          </>,
          <>
            Deployed a PowerShell script to automate compression of a legacy Microsoft Access database, saving over 2 hours of time each month. 
          </>,
        ],
        images: [],
      },
      {
        company: "BALANCED+",
        timeframe: "JUN 2023 - AUG 2024",
        role: "Cybersecurity Analyst",
        achievements: [
          <>
            Monitored over 10 companies networks with FortiSIEM, FortiSOAR, and FortiAnalyzer, providing monthly security reports.
          </>,
          <>
            Developed FortiSOAR playbooks to secure the network or send notifications when potential security threats were found. 
          </>,
          <>
            Used SQL queries to create in-depth reports for clients using network and security data; Excel or FortiAnalyzer for report generation.
          </>,
          <>
            Created a Python program to automatically backup FortiGate configuration files for over 50 devices across 20 companies.  
          </>,
          <>
            Provided vulnerability and network scans with Tenable Nessus and SolarWinds, creating reports and presenting findings to stakeholders. 
          </>,
        ],
        images: [],
      },
      {
        company: "JALI Research",
        timeframe: "JUL 2022 - MAY 2023",
        role: "Systems Administrator",
        achievements: [
          <>
            Supported around 20 employees and the company with all IT-related needs.
          </>,
          <>
            Administered Microsoft Entra, Microsoft 365, and Intune.
          </>,
          <>
            Designed, installed, and administered the office network.
          </>,
          <>
            Developed documentation and IT policies for use by employees and management. 
          </>
        ],
        images: [],
      },
      {
        company: "Ontario One Call",
        timeframe: "NOV 2021 - JUL 2022",
        role: "Data Analyst / Software Developer",
        achievements: [
          <>
            Led development of a C# application for implementing a call centre routing menu. 
          </>,
          <>
            Automate Excel daily report generation with Python, saving 15 minutes each day. 
          </>,
          <>
            Created in-depth reports for clients using Excel, SQL, and Microsoft Access.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Toronto Metropolitan University",
        description: <>Certificate in Public Administration and Leadership (in progress).</>,
      },
      {
        name: "Brock University",
        description: <>Bachelor of Science (Honours). Major in Mathematics and Statistics, Concentration in Statistics, and Minor in Economics.</>,
      },
      {
        name: "Centre for Law and Democracy",
        description: <>Certificate course in international human rights law and freedom of expression.</>,
      },
      {
        name: "CompTIA",
        description: <>Certified with CompTIA A+, Network+, and Security+.</>,
      },
    ],
  },
  technical: {
    display: true, 
    title: "Tools",
    skills: [
      {
        title: "Data Science",
        description: (
          <>Preparing and analyzing data with Python and R. Creating dashboards in Tableau. Handling advanced queries and database administration with SQL.</>
        ),
        tags: [
          {
            name: "Python",
          },
          {
            name: "R",
          },
          {
            name: "SQL",
          },
          {
            name: "Tableau",
          },
          {
            name: "Excel",
          },
          {
            name: "QGIS",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Software Development",
        description: (
          <>Building next gen apps with Next.js, Python, and PostgreSQL. Developing automation with Python, Bash, and PowerShell.</>
        ),
        tags: [
          {
            name: "TypeScript",
          },
          {
            name: "Next.js",
          },
          {
            name: "Python",
          },
          {
            name: "SQL",
          },
          {
            name: "Bash",
          },
          {
            name: "Linux",
          },
          {
            name: "Docker",
          },
          {
            name: "Go",
          },
        ],
        images: [],
      },
      {
        title: "System, Network, and Cloud Administration",
        description: (
          <>Setting up and running IT architectures.</>
        ),
        tags: [
          
          {
            name: "AWS",
          },
          {
            name: "Azure",
          },
          {
            name: "Microsoft Entra",
          },
          {
            name: "Active Directory",
          },
          {
            name: "Docker",
          },
          {
            name: "GitHub Actions",
          },
          {
            name: "Jenkins",
          },
          {
            name: "Fortinet",
          },
          {
            name: "Cisco",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      }, 
    ],
  },
  interests: {
    display: true, // set to false to hide this section
    title: "Academic Skills",
    skills: [
      {
        title: "Data Science and Statistics",
        description: (
          <>Preparing and analyzing data with Python and R. Creating dashboards in Tableau. Handling advanced queries and database administration with SQL.</>
        ),
        tags: [
          {
            name: "Exploratory data analysis (EDA)",
          },
          {
            name: "Spatial analysis",
          },
          {
            name: "Machine learning",
          },
          {
            name: "Hypothesis testing",
          },
          {
            name: "Confidence intervals",
          },
        ],
      },
      {
        title: "Policy Analysis and Research",
        description: (
          <>Preparing and analyzing data with Python and R. Creating dashboards in Tableau. Handling advanced queries and database administration with SQL.</>
        ),
        tags: [
          {
            name: "Quantitative / qualitative analysis",
          },
          {
            name: "Logic models",
          },
          {
            name: "Survey design",
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `My projects ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/IMG_1400.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/IMG_1425.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };

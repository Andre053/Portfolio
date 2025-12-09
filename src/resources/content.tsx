import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "André",
  lastName: "de Biasi",
  name: `André de Biasi`,
  role: "Data Scientist | Software Engineer | IT Specialist",
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
  headline: <>Improving the public good with data and technology</>,
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
      I'm André, I currently work as an IT Technician at The Canadian Press where I support users with technical issues and write software.
      <br /><br />After hours, I study data science, public policy, and urban planning while building my own projects.
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
        passion for technology and politics, his interests lie in using technical skills to solve problems and advocate for solutions
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
            name: "Cloudflare",
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
            name: "Data pipelines",
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
      {
        title: "IT Administration and Cybersecurity",
        description: (
          <>Preparing and analyzing data with Python and R. Creating dashboards in Tableau. Handling advanced queries and database administration with SQL.</>
        ),
        tags: [
          {
            name: "Database administration",
          },
          {
            name: "Network / cloud administration",
          },
          {
            name: "Data security",
          },
          {
            name: "Data governance",
          },
          {
            name: "Secure protocols",
          },
        ],
      },
    ], // add a section for volunteering
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: `Blog – ${person.firstName}`,
  description: `Read what ${person.firstName} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.firstName}`,
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
      src: "/images/gallery/amherstberg-boat.jpg",
      alt: "A tanker ship in the distance moving North along the Detroit River, shot from a boat in the canal.",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/amherstberg-sunset.jpg",
      alt: "September sunset across the Detroit River.",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/christie-pitts-counterprotest-2025-1.jpg",
      alt: "On the counterprotester side of the park, a band is setup and speakers take turns talking about the importance of organizing and showing up to counterprotest.",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/christie-pitts-counterprotest-2025-2.jpg",
      alt: "Counterprotesters surround a Canada First rally with police officers creating a layer between both groups.",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/dufferin-grove-encampment-evicted-2025.jpg",
      alt: "Fence put up around where the Dufferin Grove encampment used to be. The area inside is empty. On the fence, there is caution tape reading 'SECURITY LINE DO NOT CROSS' and a City of Toronto sign stating 'PARK REMEDIATION IS UNDERWAY'",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/december-house.jpg",
      alt: "Driveway up to a house covered in snow.",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/december-shopyard.jpg",
      alt: "Workyard covered in snow.",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/december-workshop.jpg",
      alt: "Workshop covered in snow with workyard in the background.",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/december-old-car.jpg",
      alt: "Old car covered in snow with woodpile and forest in the background.",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/december-trees-1.jpg",
      alt: "Tops of trees from the ground.",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/december-trees-2.jpg",
      alt: "Tops of trees from the ground.",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };

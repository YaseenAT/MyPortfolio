

/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import { version } from "react";
 

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Mohammed Yaseen",
  title: "Hi I'm Yaseen",
  subTitle:  
    "Skilled in front-end technologies, including HTML, CSS, JavaScript, and state-of-the-art React libraries. Committed to staying updated on emerging trends and continuously enhancing skills to drive innovation in the ever-evolving tech landscape. Open to new opportunities that leverage my expertise in creating engaging user interfaces and delightful user experiences."
  ,
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/YaseenAT",
  linkedin: "https://www.linkedin.com/in/YassenAT/",
  gmail: "yaseen507at@gmail.com",
   
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Utilized JavaScript , React & Frontend Technologies to develop webpages as per business requirements. ",
  skills: [
    emoji(
      "⚡ Designed , Developed and Delivered webpages given by clients requirements. "
    ),
    emoji("⚡ Interact and gather requirements from clients for development , enhancements, Analysis and research on bringing up the best approach and solutions."),
    emoji(
      "⚡ Involved and committed API Testing using postman"
    ),
    emoji(
      "⚡ Introduced and integrated a new frontend framework, streamlining development processes and reducing time-tomarket for projects by 20%"
    ),
    emoji(
      "⚡ Demonstrated leadership by mentoring junior developers,fostering a collaborative team environment, and contributing to the professional growth of team members. "
    ),
    emoji(
      "⚡ Implemented robust security with Keycloak and JWT authentication, ensuring data integrity and confidentiality, seamlessly integrated with REST APIs."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  Versioning: [
    
    {
      skillName: "GIT",
      fontAwesomeClassname: require("./assets/images/Git-Icon-1788C.png")
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: require("./assets/images/github-6980894_1280.webp")
    },
    {
      skillName: "TortoiseSVN",
      fontAwesomeClassname: require("./assets/images/images.png")
    },
    {
      skillName: "Bugzilla",
      fontAwesomeClassname: require("./assets/images/bugZilla.png")
    },
    // {
    //   skillName: "Bugzilla",
    //   fontAwesomeClassname: require("./assets/images/git.png")
    // },
    // {
    //   skillName: "Bugzilla",
    //   fontAwesomeClassname: require("./assets/images/git.png")
    // },
  ],
  FrameWork: [
    
    {
      skillName: "React Js",
      fontAwesomeClassname: require("./assets/images/react-3.png")
    },
    {
      skillName: "Redux ToolKit",
      fontAwesomeClassname: require("./assets/images/redux-icon.webp")
    },
    {
      skillName: "Tailwind Css",
      fontAwesomeClassname: require("./assets/images/tailwind-css-icon.webp")
    },
    {
      skillName: "PgAdmin",
      fontAwesomeClassname: require("./assets/images/postgresql-icon.webp")
    },
    // {
    //   skillName: "Bugzilla",
    //   fontAwesomeClassname: require("./assets/images/git.png")
    // },
    // {
    //   skillName: "Bugzilla",
    //   fontAwesomeClassname: require("./assets/images/git.png")
    // },
  ],
  display: true // Set false to hide this section, defaults to true
};
 

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Visvesvaraya Technological University",
      collageName: "S T J Institute of technology , Ranebennur",
      logo: require("./assets/images/vtu.jpeg"),
      subHeader: "Bachelor of Engineering ",
      duration: "August 2018 - September 2021",
      desc: "7.8 CGPA- First Class With Distinction ",
      descBullets: [
         
      ]
    },
    {
      schoolName: "Department of Technical Education , Bangalore",
      collageName: "Govt. Polytechnic Bankapura",
      logo: require("./assets/images/dte.png"),
      subHeader: "Deploma in Engineering",
      duration: "2015 - 2018",
      desc: "76.6% - First Class With Distinction",
      descBullets: []
    },
    {
      schoolName: "Karnataka Secondary Education Examination Board , Bangalore",
      collageName: "Govt. Urdu School , Naregal",
      logo: require("./assets/images/sslc.jpeg"),
      subHeader: "SSLC",
      duration: "2014-2015",
      desc: "80%",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Sysytem Engineer",
      company: "Tata Consultancy Service",
      companylogo: require("./assets/images/tcs.png"),
      date: "March 2022 – Present",
      desc: "Spearheaded development of critical websites for CAIR, DRDO, and Ministry of Defense, Government of India.",
      descBullets: [
        "Leveraged ReactJS for UI development, applying lazy loading for enhanced website performance.",
        "Utilized Redux toolkit for efficient state management, maintaining a consistent application state"
      ]
    },
     
     
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Best Team Award",
      subtitle:
        "Awarded with Best Team for completion of all the requirements and delivering it without any major bugs while working in team and taking care of everyone is on the same page.",
      image: require("./assets/images/teamAward.png"),
      imageAlt: "Best Team Award logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Google Adds Essential Training",
      subtitle:
        "Comprehensive training covering all aspects of Google Ads, from setup to advanced optimization",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },
    {
      title: "Software Development and Testing- SDET",
      subtitle: "The Software Testing and Development course provides a comprehensive overview of SDLC, coding, debugging, and quality assurance practices. ",
      image: require("./assets/images/image.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    }

  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9886250058",
  email_address: "yaseen507at@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};

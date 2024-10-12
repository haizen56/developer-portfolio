import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
   import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'AI Powered Financial App',
        description: "Developed an AI-powered financial application that streamlines financial data analysis using OpenAI. I created the backend API with Express and TypeScript, incorporating authentication using AWS SES, Google, and Facebook. The app features an AI assistant trained on custom financial datasets using OpenAI, along with voice-to-text conversion powered by AWS Transcribe. Financial data is fetched from Google Sheets, automatically generating PDF reports, which are sent to users via AWS SES.",
        tools: ['Express', 'MongoDB', 'OpenAI API', 'AWS SES', 'AWS S3', 'Node Mailer', 'Joi', 'Puppeteer', 'EC2', 'PM2', 'Nginx'],
        role: 'Backend Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Travel Agency App',
        description: "Designed and developed a full-stack web application for a travel agency in Armenia, enabling users to book travel services with multilingual and multicurrency support. The front end was built using NextJS, MUI, and TailwindCSS, with dynamic maps powered by Google Maps. The backend API was developed using NestJS and MySQL, handling business logic, booking management, and email notifications via AWS. The application is deployed on AWS Amplify (frontend) and AWS EC2 (backend).",
        tools: ['NextJS', 'Tailwind CSS', "Google Maps", "NestJS", "TypeScript", "MySQL", "AWS S3", "Sun-Editor", "Gmail Passkey"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Multi Vendor Ecommerce System',
        description: "Led the development of an AI-driven ecommerce platform for multiple vendors. I built the backend using Express, TypeScript, and Mongoose, integrating OpenAI for intelligent product recommendations and Replicate API for image processing. The platform features a role-based authentication system, subscription management, and payment processing through Stripe. On the frontend, I used NextJS and TailwindCSS to build a responsive interface, with form validation handled by Formik. Cron jobs were scheduled for routine tasks and subscription reminders.",
        tools: ['React', 'Bootstrap', 'SCSS', 'Stripe', 'Express', 'TypeScript', 'MongoDB', 'Azure Blob', 'OpenAI API', 'Replicate AI', 'Cronjob', 'JWT'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Saas Agency App',
        description: "Developed a newspaper management dashboard application for a SaaS agency, designed to streamline content and team management. I created the frontend dashboard using NextJS and Material UI, with state management via React Redux. The app includes a rich text editor powered by Sun Editor for easy content creation, and a calendar integration to manage publishing schedules. React-hook-form was implemented for efficient form handling across the app.",
        tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: ayla,
    }
    
];


];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },

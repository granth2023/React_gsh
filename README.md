
# Artist Portfolio

## Introduction

**Artist Portfolio** is a React-based web application designed to showcase my skills in interactive web development, animation with GSAP, and building engaging user experiences. This project serves as a portfolio piece, demonstrating my capability to conceptualize, design, and implement advanced web features.

## Purpose

The primary goal of this project is to create an immersive and navigable user interface that effectively displays selected works, incorporating dynamic animations and transitions to enhance user engagement. It aims to highlight my proficiency in React, GSAP for animations, and my creative approach to web development.

## Features

- **Dynamic Landing Page**: Utilizes React and GSAP to animate elements, providing a visually engaging introduction.
- **Selected Works Showcase**: Interactive section displaying projects with detailed views, including Dreamerica, Deerkill Park, and more.
- **Advanced Navigation**: Implements smooth transitions between pages, enhancing the overall user experience.
- **Responsive Design**: Ensures a seamless experience across various devices and screen sizes.
- **Dark/Light Mode**: Offers users the ability to toggle between themes, demonstrating attention to user preferences.

## Stretch Goals

- **Enhanced Subpages**: Develop subpages for each selected work, including loglines, synopses, and additional content, creating a deeper dive into each project.

```javascript
useEffect(() => {
    const elements = workRef.current.children;
    gsap.set(elements, { x: '100%', autoAlpha: 0 });
    gsap.to(elements, { 
        x: '0%',
        autoAlpha: 1,
        stagger: 0.3,
        duration: 0.6,
        ease: 'power2.out',
        overwrite: 'auto',
    });
}, []);
```

- **Seamless Media Handling with AWS S3**: Integrates AWS S3 for efficient storage and retrieval of media assets, ensuring a responsive user experience.
- **Reliable Data Management with MongoDB**: Utilizes MongoDB to store and manage application data, offering scalable and flexible data structuring.
- **Engaging User Interface**: Features a React-based frontend with dynamic animations powered by GSAP, creating an immersive user journey.
- **Node.js and Express Backend**: Employs a Node.js/Express server for handling API requests, showcasing seamless integration with AWS S3 and MongoDB.

```javascript
import AWS from 'aws-sdk';
import dotenv from 'dotenv';

dotenv.config();

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
});
```

## Secure Access to Project Files

The core of this feature lies in the `accessProtectedFile` function, which validates a user's access request against a password stored within the project's document in MongoDB. Here's a closer look at how this function operates:

```javascript
export const accessProtectedFile = async (req, res) => {
    const { password, fileId } = req.body;

    try {
        // Find the project containing the requested file ID
        const project = await Project.findOne({ "files._id": fileId }, { "files.$": 1 });

        // If the project is found and the password matches
        if (project && project.accessPassword && password === project.accessPassword) {
            const file = project.files[0];
            // Respond with the URL to access the file
            res.send({ url: file.url });
        } else {
            // Handle incorrect password or unauthorized access attempts
            res.status(401).send('Unauthorized or incorrect password');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
};
```

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

Clone the repository:

```sh
git clone <repository-url>
```

Navigate to the project directory:

```sh
cd <project-directory>
```

Install dependencies:

```sh
npm install
```

or

```sh
yarn install
```

Start the development server:

```sh
npm start
```

or

```sh
yarn start
```

## Deployment on Netlify

- **Create a netlify.toml File:** This file will specify your build settings and publish directory for Netlify. Create a netlify.toml in your project's root directory with the following content:
```
toml
Copy code
[build]
  command = "npm run build"
  publish = "build"
  functions = "functions"

[build.environment]
  NODE_VERSION = "14.17.0"
Adjust the command and publish directory as needed based on your project's build process.
```
**Set Up Environment Variables:** Netlify allows you to set environment variables through their UI. Go to your site's settings on Netlify, and under "Build & deploy", find "Environment" to add your variables:

```
REACT_APP_API_URL - Your backend API URL if applicable.
AWS_ACCESS_KEY_ID - Your AWS access key for S3 integration.
AWS_SECRET_ACCESS_KEY - Your AWS secret access key.
AWS_REGION - The AWS region your S3 bucket is in.
Any other environment variables your project relies on.
Deploying with Netlify
Push Your Code to GitHub: Ensure your project is pushed to a GitHub repository.
```

**Create a New Site on Netlify:** Log in to your Netlify account and select "New site from Git". Choose GitHub as the Continuous Deployment provider and select your project repository.

**Configure Your Build Settings:** Netlify will attempt to automatically detect your build settings but ensure they match the netlify.toml file you created. If you set environment variables in the Netlify UI, they will automatically be used during the build process.

**Deploy:** Once your build settings are configured, click "Deploy site". Netlify will build your project and deploy it. Upon successful deployment, you will receive a unique Netlify URL to access your site.


**Monitoring Your Site**
Netlify Dashboard: Provides insights into your site's builds, deploy previews, form submissions, and more.
Logs: Check the "Deploys" tab on your Netlify site dashboard to view build logs for troubleshooting.

## Deployed Link

[Click here to view the project](https://grantsethharris.netlify.app/)

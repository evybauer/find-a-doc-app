# Health Point Web App 🏥

## Table of Contents 📚

- [Project Description](#project-description-)
- [Live Demo](#live-demo-)
- [Getting Started](#getting-started-)
  - [Prerequisites](#prerequisites-)
  - [Running Locally](#running-locally-)
- [Tech Stack](#tech-stack-)
- [Folder Structure](#folder-structure-)
- [Usage](#usage-)
- [Contributing](#contributing-)
- [License](#license-)
- [Contact](#contact-)

## Project Description 📝

Health Point is a "Find-a-Doc" web application provides a seamless interface for locating top-tier physicians and connecting them with employees at self-insured companies. The app leverages healthcare data analytics to enhance care outcomes, reduce costs, and improve access to quality healthcare for all.

## Live Demo 🌐

Check out the [working deployed demo](https://healthpoint.evelynbauer.ca/) of the application to see it in action.

## Getting Started 🚀

### Prerequisites

Before running this project locally, you'll need:

- [Node.js](https://nodejs.org/en/download) version 18 and newer
- [Git](https://git-scm.com/downloads)

### Running Locally

To set up the project locally, follow these steps:

1. Clone the repo:

```bash
git clone https://github.com/evybauer/find-a-doc-app.git
```

2. Install Node dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

## Tech Stack 🛠️

Our web application leverages cutting-edge technology including:

- **React**: A JavaScript library for building user interfaces.
- **React-DOM**: React package for working with the DOM.
- **React Router DOM**: For dynamic routing in the web app.
- **Ant Design (antd)**: A comprehensive React UI library that contains a set of high-quality components and demos for building rich, interactive interfaces.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.
- **Day.js**: A minimalist JavaScript library for parsing, validating, and displaying dates and times.
- **Font Awesome's React component**: To include vector icons and social logos in our app.

## Folder Structure 🗂️

Here's the hierarchical overview of the main directories and files of the project:

```
├── public
│   └── assets
│       ├── images
│       └── logo
└── src
    ├── components
    ├── data
    ├── providers
    └── Routes
```

Here's an overview of the main directories and files:

- `public/assets`: Contains static assets like doctor images and logos.
- `src`: Root folder for React components and logic.
- `src/components`: Reusable React components such as buttons, inputs, etc.
- `src/data`: Synthetic data to simulate backend data fetching such as doctor list, cities, insurance and others.
- `src/providers`: Context API providers for managing state.
- `src/Routes`: Route definitions for the web application.
- `package.json`: Defines npm behaviors and packages for the project.
- `README.md`: Detailed information about the project for developers.
- `tailwind.config.js`, `postcss.config.js`: Configuration for Tailwind CSS and PostCSS.
- `vite.config.js`: Configuration for the Vite build tool.

## Usage 💻

The Health Point ("Find-a-Doc") application is designed with user experience at the forefront, providing an intuitive and responsive interface that adapts seamlessly across different screen sizes. Here’s how the app stands out:

- **Responsive Design**: Optimized for use on any device, whether you're on a desktop, tablet, or mobile phone, ensuring consistent functionality and aesthetic across all platforms.

- **Advanced Filtering**: A robust filtering system allows users to refine their search for physicians using various criteria, including city, specialty, time of the day, and gender. This feature ensures that users can find a doctor who matches their specific needs with ease.

- **Doctor Availability**: The app presents all available doctors and open appointment slots in a clear, accessible format, making it simple for users to assess their options at a glance.

- **Calendar Navigation**: A beautifully designed UI provides users with a straightforward way to navigate through the calendar, discover available appointment times, and schedule a visit with their chosen doctor without hassle.

Whether you are seeking immediate medical attention or planning future healthcare needs, it facilitates a smooth and efficient doctor search and booking experience.

## Contributing 👨‍💻

If you would like to contribute to the project, your help is welcome. Please fork the repository and create a pull request with your changes.

## License 📜

This project is licensed under the Apache License Version 2.0 - see the [LICENSE](LICENSE) file for details.

## Contact 📫

For any questions or suggestions, please reach out to me at:

- Email: evybauer@gmail.com
- Website: [evelynbauer.ca](https://evelynbauer.ca)
- LinkedIn: [Evelyn Bauer](https://www.linkedin.com/in/evelyn-louise-bauer-31193890/)

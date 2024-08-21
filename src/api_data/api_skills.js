import tech from './api_technologies';

// Ids should be unique, use classes instead as icons get reused in modal??

const skills = [
  {
    title: 'Frontend',
    id: 0,
    className: 'frontend-skills',
    list: [
      tech.javascript,
      tech.react,
      tech.html,
      tech.css,
      tech.sass,
      tech.tailwind,
      // tech.bootstrap,
    ],
  },
  {
    title: 'Backend',
    id: 1,
    className: 'backend-skills',
    list: [tech.nodejs, tech.express, tech.ruby, tech.rails],
  },

  {
    title: 'Databases / Data Management',
    id: 2,
    className: 'db-skills',
    list: [
      tech.mongodb,
      tech.postgresql,
      tech.mongoose,
      tech.firebase,
      tech.firestore,
    ],
  },
  {
    title: 'Development Tools',
    id: 3,
    className: 'devtools-skills',
    list: [tech.git, tech.github, tech.postman, tech.openai, tech.vite],
  },
  // {
  //   title: 'Currently Learning',
  //   id: 4,
  //   className: 'learning-skills',
  //   list: [tech.python, tech.linux, tech.typescript, tech.go],
  // },
];

export { skills };

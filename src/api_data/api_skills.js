import { skillIcons } from './../assets/icons/icons_skills';
// icon sources:
// https://fontawesome.com/icons
// https://icon-sets.iconify.design/

// Ids should be unique, use classes instead as icons get reused in modal??
const skills = [
  {
    name: 'HTML',
    icon: skillIcons.html_primary,
    id: 'html-icon',
  },
  {
    name: 'CSS',
    icon: skillIcons.css_primary,
    id: 'css-icon',
  },
  {
    name: 'Sass',
    icon: skillIcons.sass_primary,
    id: 'sass-icon',
  },
  {
    name: 'JavaScript',
    icon: skillIcons.javascript_primary,
    id: 'javascript-icon',
  },
  {
    name: 'Node.js',
    icon: skillIcons.nodejs_primary,
    id: 'nodejs-icon',
  },
  {
    name: 'React.js',
    icon: skillIcons.react_primary,
    id: 'react-icon',
  },
  {
    name: 'express',
    icon: skillIcons.express_primary,
    id: 'express-icon',
  },
  {
    name: 'mongoDB',
    icon: skillIcons.mongodb_primary,
    id: 'mongodb-icon',
  },
  {
    name: 'mongoose',
    icon: skillIcons.mongoose_primary,
    id: 'mongoose-icon',
  },
  {
    name: 'Ruby',
    icon: skillIcons.ruby_primary,
    id: 'ruby-icon',
  },
  {
    name: 'Ruby on Rails',
    icon: skillIcons.rails_primary,
    id: 'rails-icon',
  },
  {
    name: 'PostgreSQL',
    icon: skillIcons.postgresql_primary,
    id: 'postgresql-icon',
  },
  {
    name: 'Tailwind CSS',
    icon: skillIcons.tailwind_primary,
    id: 'tailwind-icon',
  },
  {
    name: 'Bootstrap',
    icon: skillIcons.bootstrap_primary,
    id: 'bootstrap-icon',
  },
  {
    name: 'Postman API',
    icon: skillIcons.postman_primary,
    id: 'postman-icon',
  },
  {
    name: 'Firebase',
    icon: skillIcons.firebase_primary,
    id: 'firebase-icon',
  },
  {
    name: 'Cloud Firestore',
    icon: skillIcons.firestore_primary,
    id: 'firestore-icon',
  },
  {
    name: 'OpenAI',
    icon: skillIcons.openai_primary,
    id: 'openai-icon',
  },
  {
    name: 'git',
    icon: skillIcons.git_primary,
    id: 'git-icon',
  },
  {
    name: 'GitHub',
    icon: skillIcons.github_primary,
    id: 'github-icon',
  },
];

const skillsCategorised = {
  frontend: {
    title: 'Front-End',
    list: [
      {
        name: 'HTML',
        icon: skillIcons.html_primary,
        id: 'html-icon',
      },
      {
        name: 'CSS',
        icon: skillIcons.css_primary,
        id: 'css-icon',
      },
      {
        name: 'Sass',
        icon: skillIcons.sass_primary,
        id: 'sass-icon',
      },
      {
        name: 'JavaScript',
        icon: skillIcons.javascript_primary,
        id: 'javascript-icon',
      },
      {
        name: 'React.js',
        icon: skillIcons.react_primary,
        id: 'react-icon',
      },
      {
        name: 'Tailwind CSS',
        icon: skillIcons.tailwind_primary,
        id: 'tailwind-icon',
      },
      {
        name: 'Bootstrap',
        icon: skillIcons.bootstrap_primary,
        id: 'bootstrap-icon',
      },
    ],
  },
  backend: {
    title: 'Back-End',
    list: [
      {
        name: 'Node.js',
        icon: skillIcons.nodejs_primary,
        id: 'nodejs-icon',
      },
      {
        name: 'express',
        icon: skillIcons.express_primary,
        id: 'express-icon',
      },
      {
        name: 'Ruby',
        icon: skillIcons.ruby_primary,
        id: 'ruby-icon',
      },
      {
        name: 'Ruby on Rails',
        icon: skillIcons.rails_primary,
        id: 'rails-icon',
      },
      // {
      //   name: 'Python',
      //   icon: '',
      //   id: 'python-icon',
      // },
      // {
      //   name: 'Django',
      //   icon: '',
      //   id: 'django-icon',
      // },
      // {
      //   name: 'Go',
      //   icon: '',
      //   id: 'go-icon',
      // },
    ],
  },
  db: {
    title: 'Databases/ Data Management',
    list: [
      {
        name: 'mongoDB',
        icon: skillIcons.mongodb_primary,
        id: 'mongodb-icon',
      },
      {
        name: 'PostgreSQL',
        icon: skillIcons.postgresql_primary,
        id: 'postgresql-icon',
      },
      {
        name: 'mongoose',
        icon: skillIcons.mongoose_primary,
        id: 'mongoose-icon',
      },
      {
        name: 'Firebase',
        icon: skillIcons.firebase_primary,
        id: 'firebase-icon',
      },
      {
        name: 'Cloud Firestore',
        icon: skillIcons.firestore_primary,
        id: 'firestore-icon',
      },
    ],
  },
  devTools: {
    title: 'Development Tools',
    list: [
      {
        name: 'git',
        icon: skillIcons.git_primary,
        id: 'git-icon',
      },
      {
        name: 'GitHub',
        icon: skillIcons.github_primary,
        id: 'github-icon',
      },
      {
        name: 'Postman API',
        icon: skillIcons.postman_primary,
        id: 'postman-icon',
      },
      {
        name: 'OpenAI',
        icon: skillIcons.openai_primary,
        id: 'openai-icon',
      },
      {
        name: 'Vite',
        icon: skillIcons.vite_primary,
        id: 'vite-icon',
      },
    ],
  },
};

export { skills };

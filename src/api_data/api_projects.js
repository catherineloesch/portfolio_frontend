import { skillIcons } from './../assets/icons/icons_skills';
import { projectImages } from '../assets/images/project_images';

const projects = [
  {
    id: 0,
    title: 'Hunting Buddy',
    description: [],
    projectLink: '',
    codeLink: '',
    imgArr: projectImages.jobBoard,
    tags: ['React', 'MERN', 'Full-Stack', 'Responsive Design', 'All'],
    skills: [],
  },
  {
    id: 1,
    title: 'PlaceBook',
    description: [],
    projectLink: '',
    codeLink: '',
    imgArr: projectImages.jobBoard,
    tags: [],
    skills: [],
  },
  {
    id: 2,
    title: 'Pawnee Pets',
    description: [
      'A fully responsive full-stack job-board application, built from scratch in 10 days using a rails API as its back end and a react-based front end. Featuring freelance jobs posted by pet owners, the application enables users to make an account and post job listings looking for dog-walkers or pet sitters. Once logged in they can view their listings as well as edit and delete them. They can also update their account information and delete their account.',
    ],
    projectLink: 'http://pawnee-pets.katieloesch.co.uk',
    codeLink: 'https://github.com/katieloesch/project4-react-frontend',
    imgArr: projectImages.jobBoard,
    tags: ['React', 'Rails', 'Full-Stack', 'Responsive Design', 'All'],
    skills: [
      {
        name: 'React.js',
        icon: skillIcons.react_primary,
        id: 'react-icon',
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
        name: 'CSS',
        icon: skillIcons.css_primary,
        id: 'css-icon',
      },
      {
        name: 'JavaScript',
        icon: skillIcons.javascript_primary,
        id: 'javascript-icon',
      },
      {
        name: 'Heroku',
        icon: skillIcons.heroku_primary,
        id: 'heroku-icon',
      },
      {
        name: 'JWT',
        icon: skillIcons.jwt_primary,
        id: 'jwt-icon',
      },
      {
        name: 'Postman API',
        icon: skillIcons.postman_primary,
        id: 'postman-icon',
      },
    ],
  },
  {
    id: 3,
    title: 'Flicks 4 Brains',
    description: [
      "A movie and tv watchlist SPA with full CRUD functionality built from scratch in 8 days using ReactJS/SCSS. The user can add movies and tv shows to a 'watched' and a 'to-watch' list, mark them as watched as well as edit and remove them from the list. By clicking on cover art of a film and or tv show, more information is displayed about the title. The user also has the option to add movies and tv shows from the public TMDB API to their lists and modify/remove them. The updated version of the project is fully responsive for easy navigation on all screen sizes and connects to firestore/firebase allowing users to create an account and save their data.",
    ],
    projectLink: 'http://film-tv-stuff.katieloesch.co.uk',
    codeLink:
      'http://github.com/katieloesch/project-2-react-film-app-revisited',
    imgArr: projectImages.flicks4brains,
    tags: ['React', 'Full-Stack', 'Responsive Design', 'All'],
    skills: [
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
        name: 'Sass',
        icon: skillIcons.sass_primary,
        id: 'sass-icon',
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
  // {
  //   id: 4,
  //   title: 'Pomodoro Productivity',
  //   description: [
  //     "A todo list application built from scratch using React.js with full CRUD functionality: Users can add new tasks to the list, mark tasks as completed, edit tasks and remove tasks from the list. The application also displays the total number of tasks remaining and tasks are saved in the browser's local storage, so they persist after reloading the page. There is also filtering functionality to show completed tasks only, incomplete tasks or all tasks. Application state is managed with Redux and styling was achieved using CSS modules with a fully responsive design.",
  //   ],
  //   projectLink: 'http://todo-app.katieloesch.co.uk/',
  //   codeLink: 'https://github.com/katieloesch/react-todo-app',
  //   imgArr: projectImages.pomodoro,
  //   tags: ['React', 'Responsive Design', 'All'],
  //   skills: [
  //     {
  //       name: 'JavaScript',
  //       icon: skillIcons.javascript_primary,
  //       id: 'javascript-icon',
  //     },
  //     {
  //       name: 'React.js',
  //       icon: skillIcons.react_primary,
  //       id: 'react-icon',
  //     },
  //     {
  //       name: 'Redux',
  //       icon: skillIcons.redux_primary,
  //       id: 'redux-icon',
  //     },
  //     {
  //       name: 'CSS',
  //       icon: skillIcons.css_primary,
  //       id: 'css-icon',
  //     },
  //   ],
  // },
  {
    id: 5,
    title: 'Browser Arcade',
    description: [
      "A classic game of Tic Tac Toe built from scratch in 7 days using HTML/CSS/JS. This dynamic game allows two players to compete from the same computer. It lets users enter their name and pick a colour. After they start the game, a preview of their symbol will appear in any empty cell when they hover over it and a display notifies them about whose turn it is, who wins or if there's a draw. Users can also reset the game and keep track of the number of draws and wins. The game features animations and sound effects, which can be muted and the LocalStorage option enables users to continue their gaming session where they left off after the page reloads or the internet connection is interrupted.",
    ],
    projectLink: 'http://tictactoe.katieloesch.co.uk/',
    codeLink: 'http://github.com/katieloesch/project-1-tictactoe',
    imgArr: projectImages.arcade,
    tags: ['React', 'Responsive Design', 'All'],
    skills: [
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
        name: 'Sass',
        icon: skillIcons.sass_primary,
        id: 'sass-icon',
      },
    ],
  },
];

export { projects };

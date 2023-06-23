import { images } from '../assets/images';
import { skillIcons } from './../assets/icons/icons_skills'
const bgColor =  "#f4eae9";


const works = [
  
    { // Project 4
      title: 'Rails/React Pet Job Board',
      description: "A fully responsive full-stack job-board application, built from scratch in 10 days using a rails API as its back end and a react-based front end. Featuring freelance jobs posted by pet owners, the application enables users to make an account and post job listings looking for dog-walkers or pet sitters. Once logged in they can view their listings as well as edit and delete them. They can also update their account information and delete their account.",
      projectLink: 'https://pawneepets.netlify.app/',
      codeLink: 'https://github.com/katieloesch/project4-react-frontend',
      imgUrl: images.project4,
      tags: ['React', 'Rails', 'Full-Stack', 'All'],
      skills: [
        {
          name: 'React.js',
          icon: skillIcons.react_primary,
          bgColor: bgColor,
          id:'react-icon',
          color: '#57d2f2'
        },
        {
          name: 'Ruby',
          icon: skillIcons.ruby_primary,
          bgColor: bgColor,
          id: 'ruby-icon'
        },
        {
          name: 'Ruby on Rails',
          icon: skillIcons.rails_primary,
          bgColor: bgColor,
          id: 'rails-icon'
        },
        {
          name: 'CSS',
          icon: skillIcons.css_primary,
          bgColor: bgColor,
          id: 'css-icon',
          color: '#006db8'
        },
        {
          name: 'JavaScript',
          icon: skillIcons.javascript_p,
          bgColor: bgColor,
          id: 'javascript-icon',
          color: 'black'
        },
        {
          name: 'Heroku',
          icon: skillIcons.heroku_primary,
          bgColor: bgColor,
          id: 'heroku-icon'
        },
        {
          name: 'netlify',
          icon: skillIcons.netlify_primary,
          bgColor: bgColor,
          id: 'netlify-icon'
        },    {
          name: 'JWT',
          icon: skillIcons.jwt_primary,
          bgColor: bgColor,
          id: 'jwt-icon'
        },
        {
          name: 'Postman API',
          icon: skillIcons.postman_primary,
          bgColor: bgColor,
          id: 'postman-icon'
        }

      ]
    },
    { // Project 3
      title: 'MERN Guest Book',
      description: "A Full-Stack Guestbook application, built from scratch within 9 days by a team of 4 developers using the MERN stack. The website allows users to sign up for an account and subsequently log into and out of their account. They also can also edit their username and password once they are logged in, or delete their account. Authentication was achieved by using the Node ExpressJS and Passport.js packages. Users can also read, post, edit and delete comments in the Guestbook application, the concept of which was tailored around a specific event type: a divorce party. The idea behind this concept was to support recent divorcees by enjoying their divorce party to the fullest and later re-live all the happy memories.",
      projectLink: 'https://hpramanathan.github.io/project3-mernstack-app/',
      codeLink: 'https://github.com/katieloesch/project3-mernstack-app',
      imgUrl: images.project3,
      tags: ['React', 'MERN', 'Full-Stack', 'All'],
      skills: [
        {
          name: 'React.js',
          icon: skillIcons.react_primary,
          bgColor: bgColor,
          id:'react-icon',
          color: '#57d2f2'
        },
        {
          name: 'express',
          icon: skillIcons.express_primary,
          bgColor: bgColor,
          id: 'express-icon'
        },
        {
          name: 'mongoDB',
          icon: skillIcons.mongodb_primary,
          bgColor: bgColor,
          id:'mongodb-icon'
        },
        {
          name: 'mongoose',
          icon: skillIcons.mongoose_primary,
          bgColor: bgColor,
          id:'mongoose-icon'
        },    {
          name: 'Tailwind CSS',
          icon: skillIcons.tailwind_primary,
          bgColor: bgColor,
          id: 'tailwind-icon'
        },    {
          name: 'Postman API',
          icon: skillIcons.postman_primary,
          bgColor: bgColor,
          id: 'postman-icon'
        },
        {
          name: 'Heroku',
          icon: skillIcons.heroku_primary,
          bgColor: bgColor,
          id: 'heroku-icon'
        },
        {
          name: 'netlify',
          icon: skillIcons.netlify_primary,
          bgColor: bgColor,
          id: 'netlify-icon'
        },
        {
          name: 'Passport.js',
          icon: skillIcons.passport_primary,
          bgColor: bgColor,
          id: 'passport-icon'
        },
        {
          name: 'JWT',
          icon: skillIcons.jwt_primary,
          bgColor: bgColor,
          id: 'jwt-icon'
        }
      ]
    },
    { // Project 2
      title: 'React Film App',
      description: "A movie and tv watchlist SPA with full CRUD functionality built from scratch in 8 days using ReactJS/CSS. This front-end list-based application updates the UI and makes requests to a third-party API. The user can add movies and tv shows to a 'watched' and a 'to-watch' list, mark them as watched as well as edit and remove them from the list. By clicking on cover art of a film and or tv show, more information is displayed about the title. The user also has the option to add movies and tv shows from the public TMDB API to their lists and modify/remove them.",
      projectLink: 'https://katieloesch.github.io/project-2-react-film-app/',
      codeLink: 'https://github.com/katieloesch/project-2-react-film-app',
      imgUrl: images.project2,
      tags: ['React', 'Web App', 'All'],
      skills: [
        {
          name: 'JavaScript',
          icon: skillIcons.javascript_p,
          bgColor: bgColor,
          id: 'javascript-icon',
          color: 'black'
        },
        {
          name: 'React.js',
          icon: skillIcons.react_primary,
          bgColor: bgColor,
          id:'react-icon',
          color: '#57d2f2'
        },
        {
          name: 'CSS',
          icon: skillIcons.css_primary,
          bgColor: bgColor,
          id: 'css-icon',
          color: '#006db8'
        },
        {
          name: 'Postman API',
          icon: skillIcons.postman_primary,
          bgColor: bgColor,
          id: 'postman-icon'
        }
      ]
    },
    { // Project 1
      title: 'Tic Tac Toe',
      description: "A classic game of Tic Tac Toe built from scratch in 7 days using HTML/CSS/JS. This dynamic game allows two players to compete from the same computer. It lets users enter their name and pick a colour. After they start the game, a preview of their symbol will appear in any empty cell when they hover over it and a display notifies them about whose turn it is, who wins or if there's a draw. Users can also reset the game and keep track of the number of draws and wins. The game features animations and sound effects, which can be muted and the LocalStorage option enables users to continue their gaming session where they left off after the page reloads or the internet connection is interrupted.",
      projectLink: 'https://katieloesch.github.io/project-1-tictactoe/',
      codeLink: 'https://github.com/katieloesch/project-1-tictactoe',
      imgUrl: images.project1,
      tags: ['Web App', 'All'],
      skills: [ 
      {
        name: 'HTML',
        icon: skillIcons.html_primary,
        icon_color: skillIcons.html_color,
        bgColor: bgColor,
        id: 'html-icon',
        color: '#e34b24'
      },
      {
        name: 'CSS',
        icon: skillIcons.css_primary,
        bgColor: bgColor,
        id: 'css-icon',
        color: '#006db8'
      },
      {
        name: 'JavaScript',
        icon: skillIcons.javascript_p,
        bgColor: bgColor,
        id: 'javascript-icon',
        color: 'black'
      }]
    }]
export { works }

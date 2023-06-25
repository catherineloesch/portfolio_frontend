import { aboutImages } from './../assets/images/about'

const intros = [
  "Hi there! I'm Katie.",
  "I'm a biomedical scientist turned full-stack developer based in London."
]

const abouts = [
    {
      title: "background.",
      description: "As a biomedical science graduate, I had the opportunity to work with databases that store genetic data and algorithms for comparing sequence information. This experience sparked my interest in how software and technology can be used to improve and innovate healthcare and medical research.",
      imgUrl: aboutImages.dna
    },
    {
      title: "coding journey.",
      description: "My interest in coding led me to join the General Assembly software engineering immersive course to secure a solid foundation in programming fundamentals to build upon. I’m currently looking for opportunities to further develop my skills and learn new languages, frameworks and technologies as I believe there’s nothing more thrilling than being a life-long learner in a constantly evolving industry.",
      imgUrl: aboutImages.code
    },
    {
      title: "interests.",
      description: "I'm fascinated by sci-fi books, movies, and TV shows like Star Trek and Black Mirror that have often predicted technological advancements before they became mainstream, such as video calls, mobile phones, wireless headphones, credit cards, solar power, and AI.",
      imgUrl: aboutImages.eye
    },
  ]

  export { intros, abouts }
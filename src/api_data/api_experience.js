import { experience_images } from "../assets/images/experience"

const experience = [
    {
        year: 'Mar 2023 - Jun 2023',
        exp: [
            {
                name: 'Software Engineering Immersive',
                company: 'General Assembly London (remote)',
                img: experience_images.ga2,
                description: "This 12-week immersive course established programming fundamentals of both frontend and backend. It involved building of full-stack applications, implementing responsive design,  modelling and storing data in SQL and NoSQL databases, integrating third-party APIs and deploying applications on the web. Online learning was achieved via zoom lectures, labs, stand-up, pair-programming and individual as well as group projects requiring collaboration as a team using git and GitHub."
            }

        ]
    },
    {
        year: '2018 - 2020',
        exp: [
            {
                name: 'Computing & IT',
                company: 'Open University (remote)',
                img: experience_images.ou1,
                description: 'Introduction to computing and information technology 1 (TM111), Introduction to computing and information technology 2 (TM112), Essential mathematics 1 (MST124)'

            }
        ]
    },
    {
        year: 'Oct 2012 - Jun 2015',
        exp: [
            {
                name: 'BSc in Biomedical Science ',
                company: 'The University of Warwick (Coventry, UK)',
                img: experience_images.ww7,
                description: 'Biostatistics, Biochemistry, Genetics, Genomics'

            }
        ]
    }
]


export { experience }
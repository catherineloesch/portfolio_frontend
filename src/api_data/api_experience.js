import { experience_images } from "../assets/images/experience"

const experience = [
    {
        year: 'Mar 2023 - Jun 2023',
        exp: [
            {
                name: 'Software Engineering Immersive',
                company: 'General Assembly London (remote)',
                img: experience_images.ga3,
                description: ["12-week immersive bootcamp establishing programming fundamentals of both frontend and backend","full-stack applications with responsive design and deployment on the web", "modelling and storing data in SQL and NoSQL databases as well as integration of third-party APIs",  "learning via zoom lectures, labs, stand-ups and pair-programming", "individual as well as group projects requiring collaboration using git and GitHub"]
            }

        ]
    },
    {
        year: '2018 - 2020',
        exp: [
            {
                name: 'Computing & IT',
                company: 'Open University (remote)',
                img: experience_images.ou2,
                description: ['Introduction to computing and information technology 1 & 2 (TM111 & TM112)', 'Essential mathematics 1 (MST124)']

            }
        ]
    },

    {
        year: 'Jul 2016 - Sep 2016',
        exp: [
            {
                name: 'Laboratory Internship',
                company: 'Luxembourg Institute of Health, Department of Infection and Immunity',
                img: experience_images.lih3,
                description: ["Internship in Infectious Diseases Research unit", "study of paramyxovirus and coronavirus shedding in bats to understand inter-species transmission", "Training covered RNA extraction, purification, real-time PCR, and gel electrophoresis"]
            }
        ]
    },
    {
        year: 'Oct 2012 - Jun 2015',
        exp: [
            {
                name: 'BSc in Biomedical Science ',
                company: 'The University of Warwick (Coventry, UK)',
                img: experience_images.ww5,
                description: ['Key modules: Biostatistics, Genetics, Genomics, Molecular Biology, Microbiology, Virology.']

            }
        ]
    }
]


export { experience }
import { experience_images } from "../assets/images/experience"

const timelineData = [
    {
        id: 1,
        date: 'Mar 2023 - Jun 2023',
        title: 'Software Engineering Immersive',
        company: 'General Assembly London (remote)',
        img: experience_images.ga3,
        style: {background: '#ffffff'},
        description: ["12-week full-time bootcamp, frontend + backend fundamentals","full-stack applications with responsive design + deployment", "SQL + NoSQL databases, third-party API integration", "individual + group projects, pair-programming, git/GitHub collabotation"]
    },
    {
        id: 2,
        date: '2018 - 2020',
        title: 'Computing & IT',
        company: 'Open University (remote)',
        img: experience_images.ou2,
        style: {background: '#ffffff'},
        description: ['modules: Introduction to computing and IT 1 & 2 (TM111 & TM112), Essential mathematics 1 (MST124)']
    },

    {
        id: 3,
        date: 'Jul 2016 - Sep 2016',
        title: 'Laboratory Internship',
        company: 'Luxembourg Institute of Health (Esch-sur-Alzette, Luxembourg)',
        img: experience_images.lih3,
        style: {background: '#ffffff'},
        description: ["internship in the Department of Infection, Immunity & Human Biomonitoring Research Unit", "study of paramyxovirus and coronavirus shedding in bats to understand inter-species transmission", "training: RNA extraction, purification, real-time PCR, gel electrophoresis"]
    
        
    },
    {
        id: 4,
        date: 'Oct 2012 - Jun 2015',
        title: 'BSc in Biomedical Science',
        company: 'The University of Warwick (Coventry, UK)',
        img: experience_images.ww5,
        style: {background: '#ffffff'},
        description: ['key modules: Biostatistics, Genetics, Genomics, Molecular Biology, Microbiology, Virology']


    }
]


export { timelineData }
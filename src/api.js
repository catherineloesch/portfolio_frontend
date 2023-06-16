import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'vheylw75',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: 'skJUFxDyhEYapurNwx6poESEZTcpHcceE5n721u5ZZxl2DVRL0vsE2AXZlyD7KrTJ8iXb7eRgesnS5TZKdvdn69qtVY8thd4Fm032I8ELvtac0YVs2shEhEszBaPVzx8rLFlEkzMIkD84duYdqs0bR0mdjYPtQnk7RLpzVpJ6uhrljewBPOV'
})
// export const client = sanityClient({
//     projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
//     dataset: 'production',
//     apiVersion: '2022-02-01',
//     useCdn: true,
//     token: process.env.REACT_APP_SANITY_TOKEN
// })

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
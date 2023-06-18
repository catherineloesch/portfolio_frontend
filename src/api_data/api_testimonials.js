import { images } from '../assets/images';
import { brandImages } from './../assets/images/brands';

const testimonials = [
  {
    name: 'John Doe',
    company: 'GA',
    imgUrl: images.avatar_black,
    feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate ligula sed nisl aliquam, ut varius est tincidunt. Proin at.'
  },
  {
    name: 'Jane Doe',
    company: 'GA',
    imgUrl: images.avatar_red,
    feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate ligula sed nisl aliquam, ut varius est tincidunt. Proin at.'

  },
  {
    name: 'John Smith',
    company: 'GA',
    imgUrl: images.avatar_green,
    feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate ligula sed nisl aliquam, ut varius est tincidunt. Proin at.'
  }
    
]

const brands = [
  {
    name: 'Brand 1',
    imgUrl: brandImages.brand1
  },
  {
    name: 'Brand 2',
    imgUrl: brandImages.brand2
  },
  {
    name: 'Brand 3',
    imgUrl: brandImages.brand3
  },
  {
    name: 'Brand 4',
    imgUrl: brandImages.brand4
  }
    
]

  export { testimonials, brands }
// Have to hard code to import images in webpack
import CS from '../__mock-data__/course-images/C++.jpg';
import MATH from '../__mock-data__/course-images/Calculus.jpg';
import PHYS from '../__mock-data__/course-images/E&M.jpg';
import ENGL from '../__mock-data__/course-images/English.jpg';

const importImage = (courseName: string) => {
  switch (courseName) {
    case 'C++':
      return CS;
    case 'Calculus':
      return MATH;
    case 'E&M':
      return PHYS;
    case 'English':
      return ENGL;
    default:
      return '';
  }
};

export default importImage;

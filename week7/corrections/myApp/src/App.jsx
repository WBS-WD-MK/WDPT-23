import './App.css';
import Events from './components/Events';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import StudentsList from './components/Students';

// const studentData = {
//   firstName: 'Testy',
//   lastName: 'McTest',
//   age: 42,
//   course: 'Web Development',
//   city: 'Berlin',
//   picture: 'https://randomuser.me/api/portraits/men/1.jpg',
//   gpa: 80,
//   graduate: true,
// };
const students = [
  {
    id: 1,
    firstName: 'Testy',
    lastName: 'McTest',
    age: 42,
    course: 'Web Development',
    city: 'Berlin',
    picture: 'https://randomuser.me/api/portraits/men/1.jpg',
    gpa: 50,
    graduate: false,
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Doe',
    age: 22,
    course: 'Data Science',
    city: 'New York',
    picture: 'https://randomuser.me/api/portraits/women/2.jpg',
    gpa: 95,
    graduate: true,
  },
  {
    id: 3,
    firstName: 'John',
    lastName: 'Smith',
    age: 28,
    course: 'Web Development',
    city: 'Los Angeles',
    picture: 'https://randomuser.me/api/portraits/men/3.jpg',
    gpa: 85,
    graduate: false,
  },
  {
    id: 4,
    firstName: 'Alice',
    lastName: 'Johnson',
    age: 25,
    course: 'Data Science',
    city: 'San Francisco',
    picture: 'https://randomuser.me/api/portraits/women/4.jpg',
    gpa: 78,
    graduate: true,
  },
  {
    id: 5,
    firstName: 'Bob',
    lastName: 'Brown',
    age: 30,
    course: 'Web Development',
    city: 'Chicago',
    picture: 'https://randomuser.me/api/portraits/men/5.jpg',
    gpa: 67,
    graduate: false,
  },
  {
    id: 6,
    firstName: 'Charlie',
    lastName: 'Davis',
    age: 23,
    course: 'Data Science',
    city: 'Austin',
    picture: 'https://randomuser.me/api/portraits/men/6.jpg',
    gpa: 92,
    graduate: true,
  },
  {
    id: 7,
    firstName: 'Emily',
    lastName: 'Wilson',
    age: 27,
    course: 'Web Development',
    city: 'Seattle',
    picture: 'https://randomuser.me/api/portraits/women/7.jpg',
    gpa: 88,
    graduate: true,
  },
  {
    id: 8,
    firstName: 'David',
    lastName: 'Martinez',
    age: 29,
    course: 'Data Science',
    city: 'Miami',
    picture: 'https://randomuser.me/api/portraits/men/8.jpg',
    gpa: 73,
    graduate: false,
  },
  {
    id: 9,
    firstName: 'Fiona',
    lastName: 'Clark',
    age: 26,
    course: 'Web Development',
    city: 'Denver',
    picture: 'https://randomuser.me/api/portraits/women/9.jpg',
    gpa: 81,
    graduate: false,
  },
  {
    id: 10,
    firstName: 'George',
    lastName: 'Miller',
    age: 32,
    course: 'Data Science',
    city: 'Boston',
    picture: 'https://randomuser.me/api/portraits/men/10.jpg',
    gpa: 90,
    graduate: true,
  },
];
const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Events />
      <StudentsList students={students} />
      <Footer />
    </>
  );
};

export default App;

/**
 Create the Components:

You will create five components: Header, Navigation, Hero, Services, and Footer. For now you can declare the functions and return null from each one.
Currently, this platform doesn't support multi-javascript files, so if you are working here, create all the components in the same file, if you are working locally, each component will be placed in the src/components folder and will be a separate file.
Create the Navigation component:

Return a nav element that contains an ulwith some links.
Create the Header component:

Return a header with an h1 element 
Nest the Navigation component as a child of the Header 
Create the Hero component:

Return a section element with some content of your choosing
Create the Services component:

Return a section element with some content of your choosing
Create the Footer component:

Return a footer element with some content of your choosing
Compose the components:

Use the components to compose your UI inside the App component

 */

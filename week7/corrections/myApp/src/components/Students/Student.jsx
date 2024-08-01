import './student.css';
const Student = ({ student }) => {
  const getGrade = grade => {
    switch (true) {
      case grade >= 97:
        return 'A+';
      case grade >= 93:
        return 'A';
      case grade >= 90:
        return 'A-';
      case grade >= 87:
        return 'B+';
      case grade >= 83:
        return 'B';
      case grade >= 80:
        return 'B-';
      case grade >= 77:
        return 'C+';
      case grade >= 73:
        return 'C';
      case grade >= 70:
        return 'C-';
      case grade >= 67:
        return 'D+';
      case grade >= 63:
        return 'D';
      case grade >= 60:
        return 'D-';
      default:
        return 'F';
    }
  };
  return (
    <div className="student-card">
      <img src={student.picture} alt={`${student.firstName} ${student.lastName}`} />
      <h2>
        {student.firstName} {student.lastName}
      </h2>
      <p>Age: {student.age}</p>
      <p>Course: {student.course}</p>
      <p>City: {student.city}</p>
      <p> Grade: {getGrade(student.gpa)}</p>
      <p>Graduate: {student.graduate ? 'Yes' : 'No'}</p>
    </div>
  );
};

export default Student;

/**
 * In this exercise, you will create a Student component that displays detailed information about a student. You will use an object literal to hold the student data and display it in a styled card component.

Instructions:
Create the Student component:

Define a new component called Student 
Prepare the student data:

You can use the provided sample data or replace it with yours!
Display the student data:

Use JSX to display the student’s information inside the Student component. Create a markup that you can style as a card later.
Render the Student component as a child of App
Style the Student component:

Use CSS to style the Student component as a card.
 */

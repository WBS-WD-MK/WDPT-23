import Student from './Student';
import './students.css';
const StudentsList = ({ students }) => {
  return (
    <div className="students">
      {students.map(student => (
        <Student key={student.id} student={student} />
      ))}
    </div>
  );
};

export default StudentsList;

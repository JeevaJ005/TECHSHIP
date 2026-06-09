import StudentCard from "../../components/StudentCard";

export default function StudentDirectory() {

  const students = [
    {
      id: 101,
      name: "John",
      course: "BCA",
      college: "ABC College",
      skills: "Java, Python"
    },

    {
      id: 102,
      name: "David",
      course: "BSc",
      college: "XYZ College",
      skills: "C++, Java"
    },

    {
      id: 103,
      name: "Mary",
      course: "MCA",
      college: "PQR College",
      skills: "React, Node.js"
    }
  ];

  return (
    <div className="p-8">

      <h1 className="text-3xl font-bold mb-6">
        Student Directory
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {students.map((student) => (
          <StudentCard
            key={student.id}
            name={student.name}
            course={student.course}
            college={student.college}
            skills={student.skills}
          />
        ))}

      </div>

    </div>
  );
}
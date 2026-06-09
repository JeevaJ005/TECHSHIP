export default function Dashboard() {
  return (
    <div className="p-8">

      <h1 className="text-4xl font-bold mb-6">
        Student Management Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-blue-500 text-white p-6 rounded-lg">
          <h2 className="text-xl font-bold">
            Total Students
          </h2>

          <p className="text-3xl mt-2">
            3
          </p>
        </div>

        <div className="bg-green-500 text-white p-6 rounded-lg">
          <h2 className="text-xl font-bold">
            Total Courses
          </h2>

          <p className="text-3xl mt-2">
            3
          </p>
        </div>

        <div className="bg-purple-500 text-white p-6 rounded-lg">
          <h2 className="text-xl font-bold">
            Active Students
          </h2>

          <p className="text-3xl mt-2">
            3
          </p>
        </div>

      </div>

    </div>
  );
}
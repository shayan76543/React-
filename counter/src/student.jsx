function Student(props) {
  console.log(props)
  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-64">

      <h2 className="text-xl font-bold">
        {props.name}
      </h2>

      <p>Age: {props.age}</p>
      <p>Course: {props.course}</p>
      <p>Status: {props.status}</p>

    </div>
  );
}

export default Student;
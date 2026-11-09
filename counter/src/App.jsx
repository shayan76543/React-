import React from "react";
import Student from "./student";

function App() {
  return (
    <>
      <h1 className="bg-green-800 p-9 text-blue rounded-xl">
        Hello this tailwind
      </h1>

      <div className="min-h-screen bg-gray-100 p-10">

        <h1 className="text-3xl font-bold mb-8">
          Student Dashboard
        </h1>

        <div className="flex flex-wrap gap-6">

          <Student
            name="Shayan"
            age={18}
            course="Computer Science"
            status="Active"
          />

          <Student
            name="Ahmad"
            age={20}
            course="Software Engineering"
            status="Inactive"
          />

          <Student
            name="Ali"
            age={19}
            course="Artificial Intelligence"
            status="Active"
          />
          <Student
          name="abdullah"
          age={21}
          course="Ai"
          status="ACtive semi"
          />

        </div>
      </div>
    </>
  );
}

export default App;

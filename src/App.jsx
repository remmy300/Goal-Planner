import React from "react";
import Form from "./Components/Form";

const App = () => {
  return (
    <div>
      <div className="bg-gray-100 min-h-screen rounded-2xl ">
        <h1 className="text-2xl  text-center font-extrabold mb-4">
          Goal Planner
        </h1>
        <div className="w-full mx-auto">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default App;

import React, { useState } from "react";
import Goals from "./Goals";

const Form = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    deadline: "",
    status: "not-started",
  });

  const handleFormInput = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);

    setFormData({
      title: "",
      description: "",
      category: "",
      deadline: "",
      status: "not-started",
    });
  };
  return (
    <div>
      <div className=" w-64 md:w-72 lg:w-96  border border-gray-300 rounded-3xl mx-auto shadow shadow-gray-500 ">
        <h1 className="font-bold text-2xl  m-10 ">Add Goal</h1>
        <div className="flex justify-center items-center m-10   ">
          <form onSubmit={handleSubmit}>
            <label for="title" className="text-base font-semibold block mt-3">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleFormInput}
              className="focus:outline-none border border-gray-400 rounded w-full  "
            />
            <label
              for="description"
              className="text-base font-semibold block mt-3"
            >
              Description
            </label>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleFormInput}
              className="focus:outline-none border border-gray-400 rounded w-full   "
            />
            <div className="flex gap-4 mt-3">
              <div className="w-1/2">
                <label
                  for="category"
                  className="text-base font-semibold  block"
                >
                  Category
                </label>
                <input
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={handleFormInput}
                  className="focus:outline-none border border-gray-400 rounded  w-full  "
                />
              </div>
              <div className="w-1/2">
                <label for="deadline" className="text-base font-semibold ">
                  Deadline
                </label>
                <input
                  type="date"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleFormInput}
                  className="focus:outline-none border border-gray-400 rounded w-full"
                />
              </div>
            </div>
            <label for="status" className="block mt-3 font-semibold">
              Status
            </label>
            <select
              name="status"
              id="status"
              value={formData.status}
              onChange={handleFormInput}
              className="w-full border border-gray-300 rounded focus:outline-none"
            >
              <option value="not-started">Not-Started</option>
              <option value="in-progress">In-Progress</option>
              <option value="done">Done</option>
            </select>
            <div className="mt-3 flex items-end justify-end">
              <button
                type="submit"
                className="bg-blue-500 border-none rounded text-base p-2"
              >
                Add Goal
              </button>
            </div>
          </form>
        </div>
      </div>
      <Goals formData={formData} />
    </div>
  );
};

export default Form;

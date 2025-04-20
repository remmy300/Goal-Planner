import React, { useEffect, useState } from "react";
import Goals from "./Goals";

const Form = () => {
  const [editedGoal, setEditedGoal] = useState(null);
  const [goals, setGoals] = useState(() => {
    const storedGoals = localStorage.getItem("goals");
    return storedGoals ? JSON.parse(storedGoals) : [];
  });

  useEffect(() => {
    localStorage.setItem("goals", JSON.stringify(goals));
  }, [goals]);

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

    if (editedGoal !== null) {
      const updated = goals.map((goal) => {
        if (goal.id === editedGoal) {
          return { ...goal, ...formData };
        }
        return goal;
      });

      setGoals(updated);
      setEditedGoal(null);
    } else {
      const newGoal = { ...formData, id: Date.now() };

      setGoals((prevgoals) => [...prevgoals, newGoal]);
    }

    setFormData({
      title: "",
      description: "",
      category: "",
      deadline: "",
      status: "not-started",
    });
  };

  const handleDelete = (id) => {
    const updated = goals.filter((goal) => goal.id !== id);

    setGoals(updated);
    setEditedGoal(null);
  };

  const handleEdit = (id) => {
    const updated = goals.find((goal) => goal.id === id);
    const { title, description, category, deadline, status } = updated;
    if (updated) {
      setFormData({ title, description, category, deadline, status });
      setEditedGoal(id);
    }
  };

  const markAsDone = (id) => {
    const updated = goals.map((goal) =>
      goal.id === id ? { ...goal, status: "done" } : goal
    );

    setGoals(updated);
  };

  return (
    <div>
      <div className=" w-1/2 max-w-4xl  border border-gray-300 rounded-3xl mx-auto shadow shadow-gray-500 ">
        <h1 className="font-bold text-2xl  text-center "> 🎯Add New Goal</h1>
        <div className="flex justify-center items-center m-10   ">
          <form onSubmit={handleSubmit}>
            {["title", "description", "category"].map((field) => (
              <div key={field}>
                <label
                  htmlFor={field}
                  className="text-md font-semibold capitalize block mt-3"
                >
                  {field}
                </label>
                <input
                  type="text"
                  id={field}
                  name={field}
                  value={formData[field]}
                  onChange={handleFormInput}
                  className="w-full border rounded focus:outline-blue-400 px-3 py-2 "
                />
              </div>
            ))}

            <div className="grid grid-cols-2 gap-3 mt-3">
              <div>
                <label htmlFor="deadline" className="text-base font-semibold ">
                  Deadline
                </label>
                <input
                  type="date"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleFormInput}
                  className="focus:outline-none border border-gray-400 rounded w-full px-3 py-2"
                />
              </div>
              <div>
                <label htmlFor="status" className="block  font-semibold">
                  Status
                </label>
                <select
                  name="status"
                  id="status"
                  value={formData.status}
                  onChange={handleFormInput}
                  className="w-full border border-gray-300 rounded focus:outline-none px-3 py-2"
                >
                  <option value="not-started">Not-Started</option>
                  <option value="in-progress">In-Progress</option>
                  <option value="done">Done</option>
                </select>
              </div>
            </div>
            <div className="mt-3 flex items-end justify-end">
              <button
                type="submit"
                className="bg-blue-600 border-none rounded text-base p-2 text-white hover:bg-blue-400 transition"
              >
                {editedGoal !== null ? "Edited Goal" : "Add Goal"}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Goals
        goals={goals}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleMarkAsDone={markAsDone}
      />
    </div>
  );
};

export default Form;

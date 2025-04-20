import React, { useState } from "react";

const Goals = ({ goals, handleDelete, handleEdit, handleMarkAsDone }) => {
  const [filteredstatus, setFilteredStatus] = useState("all");
  const [sortedArr, setSortedArr] = useState("newest");

  const filteredGoals =
    filteredstatus === "all"
      ? goals
      : goals.filter((goal) => goal.status === filteredstatus);

  const sortedGoals = [...filteredGoals].sort((a, b) => {
    if (sortedArr === "newest") {
      return new Date(b.deadline) - new Date(a.deadline);
    } else {
      return new Date(a.deadline) - new Date(b.deadline);
    }
  });

  const colorStatus = {
    "not-started": "bg-red-200 text-red-800",
    "in-progress": "bg-yellow-200 text-yellow-900",
    done: "bg-green-200 text-green-800",
  };
  return (
    <div>
      <div className="w-64 md:w-72 lg:w-96 mx-auto mt-5">
        <div className="flex justify-between">
          <label for="filter" className="text-lg font-semibold">
            Filter By Status
          </label>
          <select
            name="filter"
            value={filteredstatus}
            onChange={(event) => setFilteredStatus(event.target.value)}
            id="filter"
            className="border border-gray-400 rounded focus:outline-none h-10"
          >
            <option value="all">All</option>
            <option value="not-started">Not Started</option>
            <option value="in-progress">In progress</option>
            <option value="done">Done</option>
          </select>

          <label for="sort" className="text-lg font-semibold">
            Sort By
          </label>
          <select
            name="sort"
            id="sort"
            value={sortedArr}
            onChange={(e) => setSortedArr(e.target.value)}
            className="border border-gray-400 rounded focus:outline-none h-10"
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 w-1/2 mx-auto mt-2">
        {sortedGoals.length === 0 ? (
          <p className="text-gray-800 text-2xl">No goals added yet!</p>
        ) : (
          sortedGoals.map((goal) => (
            <div
              key={goal.id}
              className="mb-2 p-2 border border-blue-300 rounded bg-white mx-auto w-50  shadow-lg hover:shadow-blue-400 transition-transform transform hover:scale-125 duration-200 "
            >
              <div>
                <h2 className="font-bold">Title:{goal.title}</h2>
                <p
                  className={`text-md/8 text-gray-700 font-semibold ${
                    colorStatus[goal.status]
                  }`}
                >
                  Status:{goal.status}
                </p>
                <p className="text-md/8 text-gray-700 font-semibold">
                  Deadline:{goal.deadline}
                </p>
                <p className="text-md/8 text-gray-600 font-semibold">
                  Category:{goal.category}
                </p>
                <p className="text-md/8 text-gray-600 font-semibold">
                  Description:{goal.description}
                </p>
              </div>
              <div className="flex gap-2 mt-3">
                <button
                  className="border bg-blue-500 rounded px-2 py-1 text-white"
                  onClick={() => handleDelete(goal.id)}
                >
                  Delete
                </button>
                <button
                  className="border bg-blue-500 rounded px-2 py-1 text-white"
                  onClick={() => handleEdit(goal.id)}
                >
                  Edit
                </button>
                <button
                  className="border bg-blue-500 rounded px-2 py-1 text-white"
                  onClick={() => handleMarkAsDone(goal.id)}
                >
                  Done
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Goals;

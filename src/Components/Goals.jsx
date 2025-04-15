import React from "react";

const Goals = () => {
  return (
    <div>
      <div className="w-64 md:w-72 lg:w-96 mx-auto mt-5">
        <div className="flex justify-between">
          <label for="filter">Filter By Status</label>
          <input
            type="text"
            className="border border-gray-400 rounded focus:outline-none p-2 h-10"
          />

          <label for="sort">Sort By</label>
          <select
            name="sort"
            id="sort"
            className="border border-gray-400 rounded focus:outline-none h-10"
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Goals;

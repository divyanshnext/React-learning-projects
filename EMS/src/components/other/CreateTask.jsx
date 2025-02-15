import React from "react";
import Header from "../other/Header";

const AdminDashboard = () => {
  return (
    <div className="p-5 mt-5 bg-black rounded">
      <div className="bg-gray-900 p-4 rounded-lg">
        <form className="flex gap-4">
          {/* Left Side Inputs */}
          <div className="w-1/2 space-y-3">
            <div>
              <h3 className="text-gray-300 mb-1">Task Title</h3>
              <input
                type="text"
                placeholder="Make a UI design"
                className="w-full p-2 bg-gray-800 rounded border border-gray-700 text-white"
              />
            </div>
            <div>
              <h3 className="text-gray-300 mb-1">Date</h3>
              <input
                type="date"
                className="w-full p-2 bg-gray-800 rounded border border-gray-700 text-white"
              />
            </div>
            <div>
              <h3 className="text-gray-300 mb-1">Assign to</h3>
              <input
                type="text"
                placeholder="Employee name"
                className="w-full p-2 bg-gray-800 rounded border border-gray-700 text-white"
              />
            </div>
            <div>
              <h3 className="text-gray-300 mb-1">Category</h3>
              <input
                type="text"
                placeholder="design, dev, etc"
                className="w-full p-2 bg-gray-800 rounded border border-gray-700 text-white"
              />
            </div>
          </div>

          {/* Right Side (Description) */}
          <div className="w-1/2">
            <h3 className="text-gray-300 mb-1">Description</h3>
            <textarea
              className="w-full h-32 p-2 bg-gray-800 rounded border border-gray-700 text-white"
            ></textarea>
          </div>
        </form>

        {/* Create Task Button (Compact) */}
        <div className="w-full flex justify-end mt-4">
          <button className="bg-green-600 px-5 py-2 rounded text-white hover:bg-green-700">
            Create Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

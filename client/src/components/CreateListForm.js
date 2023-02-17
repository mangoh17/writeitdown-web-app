import React, { useState } from "react";
import ListView from "./ListView";
import { Link, useNavigate } from "react-router-dom";

const BASE_URL = "http://localhost:5000";
function CreateListForm({ onSubmit }) {
  const navigate = useNavigate();
  const [list, setList] = useState({
    name: "",
    description: "",
    
  });
  const [isListView, setListView] = useState(false);

  const handleChangeView = (isListView) => {
    setListView(isListView);
  };

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    // why can´t i use input instead of target for the variable?
    setList((list) => {
      return {
        ...list,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setList({ name: "", description: "" });

    addList(list);
    console.log(list); //not working
  };

  const addList = async (list) => {
    try {
      await fetch(`${BASE_URL}/lists`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(list),
      });

      navigate("/");
    } catch (err) {
      console.log("Opps, something went wrong");
    }
  };

  return (
    <>
      {isListView === false ? (
        <div className="flex flex-col w-full border-opacity-50 justify-center items-center">
          <Link to="/">
            <button className="btn btn-sm bg-accent-focus marg mt-10 text-center">
              Back to Lists
            </button>
          </Link>
          <div className="grid card bg-yellow-200 m-10 p-10 w-3/5 rounded-box place-items-center  shadow-xl ">
            <div className="btnform-control w-full max-w-xs">
              <h2 className="btncard-title tracking-wider font-semibold pb-5">
                Create a list:
              </h2>
              <div className="btncard-body">
                <form onSubmit={handleSubmit}>
                  <label className="btnlabel">
                    Name
                    <input
                      type="text"
                      className=" btninput-bordered btninput btninput-bordered w-full max-w-xs"
                      placeholder="Type here"
                      name="name"
                      value={list.name}
                      onChange={(e) => handleChange(e)}
                    />
                  </label>
                  <label className="btnlabel">
                    Description
                    <textarea
                      type="text"
                      className="btninput btninput-bordered max-w-xs form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Type here"
                      name="description"
                      value={list.description}
                      onChange={(e) => handleChange(e)}
                    />
                  </label>
                  <div className="btncard-actions justify-end">
                    <button
                      type="submit"
                      className="btn btn-sm bg-accent-focus marg mt-10"
                    >
                      Create
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <ListView />
      )}
    </>
  );
}

export default CreateListForm;

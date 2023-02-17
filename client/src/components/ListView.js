import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdDeleteForever } from 'react-icons/md'

import CreateListForm from "./CreateListForm";
const BASE_URL = "http://localhost:5000";

function ListView(props) {
  const [lists, setLists] = useState([{}]);
  const [listsLength, setListsLength] = useState(lists.length);
  const [isListView, setListView] = useState(true);
  const [error, setError] = useState("")
  const query = props.query;
  

  useEffect(() => {
    const fetchLists = async () => {
      const response = await fetch(`${BASE_URL}/lists`);
      const data = await response.json();
      const lists = data.lists;
      setLists(lists);
    };
    fetchLists();
  }, []);

  const deleteList = async (id) => {
    try {
      await fetch(`${BASE_URL}/api/lists/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({input: lists})
      })
      window.location.reload()
    } catch(error) {
      setError("Oops...something went wrong")
    }
  }

  return (
    <>
      {" "}
      {/* {isListView ? ( */}
      <div className="container">
        <div className="list-of-lists"
        >
          {listsLength !== null ? (
            <div>
            
              <ul>
                {lists.map((list) => (
                  <Link to="/lists/{id}/posts">
                    <li
                    //query={lists.filter((list) => list.title.toLowerCase().includes(query))}
                     className="list-note"
                      key={list.id}
                      onSubmit={props.addList}
                    >
                      <p className="hover:font-bold not-italic cursor-pointer">
                        {" "}
                        - {list.name}:
                      </p>{" "}
                      <span>{list.description}</span>
                      <MdDeleteForever onClick={() => deleteList(list.id)}/>
                    </li>
                  </Link>
                ))}
              </ul>{" "}
            </div>
          ) : (
            <div>
              <h2 className="pb-5 text-lg tracking-wider font-semibold">
                You have no lists yet, create one
              </h2>
            </div>
          )}
          <Link to="/create-list">
            <button className="btn btn-sm bg-accent-focus marg mt-10">
              Create a list
            </button>
          </Link>
        </div>
      </div>
      {/* ) : (
        <CreateListForm />
      )} */}
    </>
  );
}

export default ListView;

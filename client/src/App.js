import React from "react";
import ListView from "./components/ListView";
import PostView from "./components/PostView";
import CreateListForm from "./components/CreateListForm";
import CreatePostForm from "./components/CreatePostForm";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Search from "./components/Search";
import { useState } from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

 
  return (
    <div className="App">

      <Header />
      <Search />
      

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/create-list" element={<CreateListForm />} />
          <Route path="/lists/:id/posts" element={<PostView />} />
          <Route path="/create-post" element={<CreatePostForm />} />
        </Routes>
      </BrowserRouter>

      {/* <CreatePostForm />
      onSubmit={(newPost) => handleCreatePost(newPost)} */}
      {/* <CreateListForm /> */}
      {/* onSubmit={(newList) => handleCreateList(newList)} */}
    </div>
  );
}

export default App;

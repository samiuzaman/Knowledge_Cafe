import { useState } from "react";
import "./App.css";
import Blogs from "./component/Blogs/Blogs";
import BookMarks from "./component/BookMarks/BookMarks";
import Header from "./component/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const handleAddToBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };
  return (
    <>
      <Header></Header>
      <main className="md:flex max-w-6xl mx-auto">
        <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
        <BookMarks bookmarks={bookmarks}></BookMarks>
      </main>
    </>
  );
}

export default App;

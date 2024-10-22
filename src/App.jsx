import { useState } from "react";
import "./App.css";
import Blogs from "./component/Blogs/Blogs";
import BookMarks from "./component/BookMarks/BookMarks";
import Header from "./component/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  const handleAddToBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };
  const handleMarkAsRead = (id, time) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
    // Remove the read blog from bookmark
    // console.log("Remove Bookmark", id);
    const remainingBookmarks = bookmarks.filter(
      (bookmark) => bookmark.id !== id
    );
    setBookmarks(remainingBookmarks);
  };

  return (
    <>
      <Header></Header>
      <main className="md:flex max-w-6xl mx-auto">
        <Blogs
          handleAddToBookmark={handleAddToBookmark}
          handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <BookMarks bookmarks={bookmarks} readingTime={readingTime}></BookMarks>
      </main>
    </>
  );
}

export default App;

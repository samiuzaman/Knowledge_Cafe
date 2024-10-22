import "./App.css";
import Blogs from "./component/Blogs/Blogs";
import BookMarks from "./component/BookMarks/BookMarks";
import Header from "./component/Header/Header";

function App() {
  return (
    <>
      <Header></Header>
      <main className="md:flex ">
        <Blogs></Blogs>
        <BookMarks></BookMarks>
      </main>
    </>
  );
}

export default App;

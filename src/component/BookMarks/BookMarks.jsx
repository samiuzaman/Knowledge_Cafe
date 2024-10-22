import PropTypes from "prop-types";
import BookMark from "./BookMark";
const BookMarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 text-center bg-gray-300 ml-4 mt-3 p-3 rounded-xl">
      <div>
        <h3>Reading Time: {readingTime}</h3>
      </div>
      <h2 className="text-3xl">Bookmarks Blogs: {bookmarks.length}</h2>
      {bookmarks.map((bookmark) => (
        <BookMark key={bookmark.id} bookmark={bookmark}></BookMark>
      ))}
    </div>
  );
};

BookMarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number,
};

export default BookMarks;

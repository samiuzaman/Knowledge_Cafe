import PropTypes from "prop-types";
import BookMark from "./BookMark";
const BookMarks = ({ bookmarks }) => {
  return (
    <div className="md:w-1/3 text-center bg-gray-300 ml-4 mt-3 p-3 rounded-xl">
      <h2 className="text-3xl">Bookmarks Blogs: {bookmarks.length}</h2>
      {
        bookmarks.map(bookmark => <BookMark key={bookmark.id} bookmark={bookmark}></BookMark>)
      }
    </div>
  );
};

BookMarks.propTypes = {
  bookmarks: PropTypes.object.isRequired
}

export default BookMarks;

import PropTypes from "prop-types";
import { IoBookmarksOutline } from "react-icons/io5";

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
  const {
    title,
    cover,
    author,
    author_image,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="mb-20 space-y-4">
      <img className="mb-8" src={cover}></img>
      <div className="flex justify-between items-center mb-4">
        <div className="flex">
          <img className="w-14 h-14 rounded-full" src={author_image}></img>
          <div className="ml-6">
            <h3 className="text-2xl"> {author} </h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex items-center">
          <span>{reading_time} min read</span>
          <button
            onClick={() => handleAddToBookmark(blog)}
            className="ml-2 text-red-600 text-2xl"
          >
            <IoBookmarksOutline></IoBookmarksOutline>
          </button>
        </div>
      </div>
      <h2 className="text-4xl mb-3">{title}</h2>
      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a> {hash} </a>
          </span>
        ))}
      </p>
      <button
        onClick={() => handleMarkAsRead(reading_time)}
        className="text-purple-600 font-bold underline"
      >
        Mark As Read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired,
};

export default Blog;

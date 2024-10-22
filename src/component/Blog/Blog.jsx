import PropTypes from "prop-types";

const Blog = ({ blog }) => {
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
    <div>
      <img src={cover}></img>
      <div className="flex justify-between items-center">
        <div className="flex">
          <img className="w-14 h-14 rounded-full" src={author_image}></img>
          <div className="ml-6">
            <h3 className="text-2xl"> {author} </h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time}</span>
        </div>
      </div>
      <h2 className="text-4xl">{title}</h2>
      <p>
        {
          hashtags.map((hash, idx) => <span key={idx}><a> {hash} </a></span>)
        }
      </p>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;

import PropTypes from "prop-types";
const BookMark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div className="bg-slate-200 p-4 m-4 rounded-xl">
      <h2 className="text-2xl">{title}</h2>
    </div>
  );
};

BookMark.propTypes = {
  bookmark: PropTypes.object.isRequired,
};

export default BookMark;

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import style from '../App.module.css';

function Movie({ medium_cover_image, title, summary, genres, id }) {
  return (
    <div className="card " style={{ width: '17rem' }}>
      <div className="card-header">Very Good Movie</div>
      <img
        className={`${style.movie__img}`}
        src={medium_cover_image}
        alt="그림"
      />
      <div className="card-body">
        <h2 className="card-title">
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>

        <div className="card-text">
          <p className={`${style.p}`}>{summary}</p>
        </div>
        <ul className="list-group list=group=flush">
          {genres.map((g, i) => (
            <li className="list-group-item" key={i}>
              {g}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  medium_cover_image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;

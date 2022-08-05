import propsTypes from 'prop-types';
import Movie from './Movie';

Movie.propsTypes = {
  movie: propsTypes.array.isRequired,
};

function Movies({ movies }) {
  return (
    <div className="row d-flex justify-content-center h-100">
      {movies.map((movie, i) => (
        <Movie key={i} {...movie} />
      ))}
    </div>
  );
}

export default Movies;

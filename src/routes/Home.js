import Movies from '../component/Movies';
import { Fetch } from '../hooks/hook';
import style from '../App.module.css';

function Home() {
  const { someThing, loading } = Fetch(
    `https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=year`
  );

  if (loading) return <h1>Loading...</h1>;
  const abc = { ...someThing }.data;

  // const [loading, setLoading] = useState(true);
  // const [movies, setMovies] = useState();

  // const getMoives = async () => {
  //   const json = await (
  //     await fetch(
  //       `https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=year`
  //     )
  //   ).json();

  //   setMovies(json.data.movies);
  //   setLoading(false);
  // };

  // useEffect(() => {
  //   getMoives();
  // }, []);

  return (
    <section className={`${style.section}`}>
      <div className="container h-100">
        <h1 className={`${style.h1}`}>Moive List</h1>
        <Movies movies={abc.movies} />
      </div>
    </section>
  );
}

export default Home;

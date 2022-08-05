import { useParams } from 'react-router-dom';
import { Fetch } from '../hooks/hook';

function Detail() {
  //객체로 받음
  const { id } = useParams();

  const { someThing, loading } = Fetch(
    `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
  );

  if (loading) return <h2>로딩 중입니다.</h2>;

  const { movie } = { ...someThing }.data;

  // hook 만들기 이전
  //   const [loading, setLoading] = useState(true);
  //   const [movie, setMovie] = useState();

  //   const getMoive = async () => {
  //     const json = await (
  //       await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
  //     ).json();

  //     setMovie(JSON.stringify(json));
  //     setLoading(false);
  //   };

  //   useEffect(() => {
  //     getMoive();
  //   }, []);

  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={movie.medium_cover_image} alt="그림" />
      <ul>
        <li>출시연도 : {movie.year}</li>
        <li>평점 : {movie.rating}</li>
      </ul>
    </div>
  );
}

export default Detail;

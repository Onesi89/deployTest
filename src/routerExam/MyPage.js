import { Navigate, useNavigate } from 'react-router-dom';

const MyPage = () => {
  const isLoggedIn = false;
  const abc = useNavigate('/login', { replace: true });

  if (!isLoggedIn) {
    // return useNavigate('/login', { replace: true });
    return <Navigate to="/login" replace={true} />;
  }

  return <div>마이 페이지</div>;
};

export default MyPage;

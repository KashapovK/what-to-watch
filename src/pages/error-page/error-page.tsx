import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const/const';
import { useAppDispatch } from '../../hooks';
import { clearRequestCount } from '../../store/api-actions';
import './error-page.css';

export default function ErrorPage() {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleRedirect() {
    dispatch(clearRequestCount())
      .then(() => navigate(AppRoute.Main));
  }

  return (
    <><h1>404 Not Found</h1>
      <button className="redirect-button" onClick={handleRedirect} >Вернуться на главную страницу</button>
    </>
  );
}

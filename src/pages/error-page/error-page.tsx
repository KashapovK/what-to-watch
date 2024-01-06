import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const/const';
import { useAppDispatch } from '../../hooks';
import { clearRequestCount } from '../../store/api-actions';

export default function ErrorPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleRedirect() {
    dispatch(clearRequestCount())
      .then(() => navigate(AppRoute.Main));
  }

  return (
    <div className="not-found-description">
      <span>Ошибка 404. Страница не найдена</span>
      <button className="redirect-button" onClick={handleRedirect}>Вернуться на главную страницу</button>
    </div>
  );
}

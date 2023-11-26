import { Link } from 'react-router-dom';
import { AppRoute } from '../../const/const';

export default function ErrorPage() {
  return (
    <><h1>404 Not Found</h1>
      <Link to={AppRoute.Main}>Вернуться на главную страницу</Link>
    </>
  );
}

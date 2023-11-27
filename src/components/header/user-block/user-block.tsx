import { useNavigate, Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../../hooks';
import { signOut } from '../../../store/api-actions';
import { AppRoute } from '../../../const/const.ts';

export default function UserBlock() {
  const { isAuthorized, avatarUrl } = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    isAuthorized ? (
      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar" onClick={() => navigate(AppRoute.MyList)}>
            <img src={avatarUrl} alt="User avatar" width="63" height="63" />
          </div>
        </li>
        <li
          className="user-block__item"
          onClick={() => {
            dispatch(signOut());
          }}
        >
          <Link to={AppRoute.Main} className="user-block__link">Sign out</Link>
        </li>
      </ul>
    ) : (
      <div className="user-block">
        <Link to={AppRoute.SignIn} className="user-block__link">Sign in</Link>
      </div>
    )
  );
}

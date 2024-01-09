import { useNavigate, Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../../hooks';
import { signOut } from '../../../store/api-actions';
import { AppRoute, AuthorizationStatus } from '../../../const/const.ts';

export default function UserBlock() {
  const { authorizationStatus, avatarUrl } = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    authorizationStatus === AuthorizationStatus.Authorized ? (
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
          <span className="user-block__link">Sign out</span>
        </li>
      </ul>
    ) : (
      <div className="user-block">
        <Link to={AppRoute.SignIn} className="user-block__link">Sign in</Link>
      </div>
    )
  );
}

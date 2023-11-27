import {Navigate} from 'react-router-dom';
import { AppRoute } from '../../const/const';
import {ReactElement} from 'react';
import { useAppSelector } from '../../hooks';


type PrivateRouteProps = {
    childern: ReactElement;
}

function PrivateRoute(childern: PrivateRouteProps) {
  const {isAuthorized} = useAppSelector((state) => state.user);

  return (
    isAuthorized
      ? childern
      : <Navigate to={AppRoute.SignIn} />
  );
}

export default PrivateRoute;

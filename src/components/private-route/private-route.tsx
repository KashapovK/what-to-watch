import {Navigate} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../routes';


type PrivateRouteProps = {
    authorizationStatus: AuthorizationStatus;
    childern: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {authorizationStatus, childern} = props;

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? childern
      : <Navigate to={AppRoute.SignIn} />
  );
}

export default PrivateRoute;

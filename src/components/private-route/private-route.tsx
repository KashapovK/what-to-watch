import {Navigate} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const/const';
import {ReactElement} from 'react';
import { useAppSelector } from '../../hooks';

type PrivateRouteProps = {
  children: ReactElement;
}

export default function PrivateRoute(children: PrivateRouteProps) {
  const {authorizationStatus } = useAppSelector((state) => state.user);

  return (
    <>
      {authorizationStatus === AuthorizationStatus.Authorized && children}
      {authorizationStatus === AuthorizationStatus.Unauthorized && <Navigate to={AppRoute.SignIn} />}
    </>
  );
}

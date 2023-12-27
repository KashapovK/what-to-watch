import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { AppRoute, AuthorizationStatus } from '../../const/const';
import { useAppSelector } from '../../hooks';
import SignInForm from './sign-in-form/sign-in-form';

export default function SignIn() {
  const navigate = useNavigate();
  const { authorizationStatus } = useAppSelector((state) => state.user);

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Authorized) {
      navigate(AppRoute.Main);
    }
  }, [authorizationStatus, navigate]);


  return (
    <div className="user-page">
      <Header/>
      <div className="sign-in user-page__content">
        <SignInForm/>
      </div>
      <Footer/>
    </div>
  );
}

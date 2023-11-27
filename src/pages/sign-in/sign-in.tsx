import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import SignInForm from './sign-in-form/sign-in-form';

export default function SignIn() {
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

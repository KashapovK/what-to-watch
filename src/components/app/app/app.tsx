import WelcomeScreen from '../../../pages/Main/welcome-screen';

type AppScreenProps = {
    filmName: string;
    filmGenre: string;
    filmReleaseDate: number;
}

function App({filmName,filmGenre,filmReleaseDate}: AppScreenProps): JSX.Element {
  return (
    <WelcomeScreen filmName={filmName} filmGenre={filmGenre} filmReleaseDate={filmReleaseDate}/>
  );
}

export default App;

import WelcomeScreen from '../../pages/Main/welcome-screen';

type AppScreenProps = {
    filmName: string;
    filmGenre: string;
    filmReleaseDate: number;
}

function App(props: AppScreenProps): JSX.Element {
  const {filmName,filmGenre,filmReleaseDate} = props;

  return (
    <WelcomeScreen filmName={filmName} filmGenre={filmGenre} filmReleaseDate={filmReleaseDate}/>
  );
}

export default App;

import { Route, BrowserRouter, Routes} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../const';
import { HelmetProvider } from 'react-helmet-async';
import WelcomeScreen from '../../pages/main/welcome-screen';
import Login from '../../pages/sign-in/login';
import MyList from '../../pages/my-list/mylist';
import Films from '../../pages/film/films';
import AddReview from '../../pages/add-review/review';
import Player from '../../pages/player/player';
import ErrorPage from '../../pages/error-page/error-page';
import PrivateRoute from '../private-route/private-route';

type AppScreenProps = {
    id: string;
    filmName: string;
    filmGenre: string;
    filmReleaseDate: number;
}

function App(props: AppScreenProps): JSX.Element {
  const {id, filmName,filmGenre,filmReleaseDate} = props;

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route
              path={AppRoute.Main}
              element={<WelcomeScreen filmName={filmName} filmGenre={filmGenre} filmReleaseDate={filmReleaseDate} id={id} filmList={[]}/>}
            />
            <Route
              path={AppRoute.SignIn}
              element={<Login/>}
            />
            <Route
              path={AppRoute.MyList}
              element={
                <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                  <MyList />
                </PrivateRoute>
              }
            />
            <Route
              path={AppRoute.Film}
              element={<Films/>}
            />
            <Route
              path={AppRoute.AddReview}
              element={<AddReview/>}
            />
            <Route
              path={AppRoute.NotFound}
              element={<ErrorPage/>}
            />
          </Route>
          <Route>
            <Route
              path={AppRoute.Player}
              element={<Player/>}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;

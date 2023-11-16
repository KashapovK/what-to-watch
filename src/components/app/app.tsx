import { Route, BrowserRouter, Routes} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const/const';
import { HelmetProvider } from 'react-helmet-async';
import Login from '../../pages/sign-in/login';
import MyList from '../../pages/my-list/my-list';
import Films from '../../pages/film/film';
import AddReview from '../../pages/add-review/add-review';
import Player from '../../pages/player/player';
import ErrorPage from '../../pages/error-page/error-page';
import PrivateRoute from '../private-route/private-route';
import { Film, FilmCard } from '../../types/types';
import MainPage from '../../pages/main-page/main-page';

type AppScreenProps = {
  filmProps: Film [];
  filmCard: FilmCard[];
}

function App({filmCard, filmProps}: AppScreenProps): JSX.Element {

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route
              path={AppRoute.Main}
              element={<MainPage films={filmCard} filmProps={filmProps} />}
            />
            <Route
              path={AppRoute.SignIn}
              element={<Login/>}
            />
            <Route
              path={AppRoute.MyList}
              element={
                <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                  <MyList filmProps={filmProps}/>
                </PrivateRoute>
              }
            />
            <Route
              path={AppRoute.Film}
              element={<Films filmCard={filmCard} filmProps={filmProps} reviews={reviews} />}
            />
            <Route
              path={AppRoute.AddReview}
              element={<AddReview filmCard={filmCard} />}
            />
            <Route
              path={AppRoute.NotFound}
              element={<ErrorPage/>}
            />
          </Route>
          <Route>
            <Route
              path={AppRoute.Player}
              element={<Player filmProps={filmProps} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;

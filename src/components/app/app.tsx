import { Route, Routes} from 'react-router-dom';
import { AppRoute } from '../../const/const';
import MyList from '../../pages/my-list/my-list';
import AddReview from '../../pages/add-review/add-review';
import Player from '../../pages/player/player';
import ErrorPage from '../../pages/error-page/error-page';
import PrivateRoute from '../private-route/private-route';
import MainPage from '../../pages/main/main';
import { useAppDispatch } from '../../hooks';
import { useEffect } from 'react';
import SignIn from '../../pages/sign-in/sign-in';
import Film from '../../pages/film/film';
import { loadFilms, verifyToken } from '../../store/api-actions';
import { getToken } from '../../services/storage';

const token = getToken();

export default function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadFilms());
    if (token) {
      dispatch(verifyToken());
    }
  }, [dispatch]);

  return (
    <Routes>
      <Route>
        <Route
          path={AppRoute.Main}
          element={<MainPage/>}
        />
        <Route
          path={AppRoute.SignIn}
          element={<SignIn/>}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute>
              <MyList />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Film}
          element={<Film />}
        />
        <Route
          path={AppRoute.AddReview}
          element={
            <PrivateRoute>
              <AddReview />
            </PrivateRoute>
          }
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
  );
}

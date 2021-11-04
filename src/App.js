import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import AppBar from './components/AppBar';
// import HomeView from './views/HomeView/HomeView';
// import MovieDetailsView from './views/MovieDetailsView/MovieDetailsView';
// import Movies from './views/MoviesView/MoviesView';
// import NotFound from './views/NotFoundViev/NotFoundViev';

const HomeView = lazy(() =>
  import('./views/HomeView/HomeView.js' /* webpackChunkName: "HomeView" */),
);
const MovieDetailsView = lazy(() =>
  import('./views/MovieDetailsView/MovieDetailsView.js' /* webpackChunkName: "MovieDetailsView" */),
);
const Movies = lazy(() =>
  import('./views/MoviesView/MoviesView.js' /* webpackChunkName: "MoviesView" */),
);
const NotFoundView = lazy(() =>
  import('./views/NotFoundView/NotFoundView.js' /* webpackChunkName: "NotFoundView" */),
);

function App() {
  return (
    <>
      <AppBar />
      <Suspense fallback={<h1>Загружаем</h1>}>
        <Switch>
          <Route path="/" exact component={HomeView} />
          <Route path="/movies" exact component={Movies} />
          <Route path="/movies/:movieId" component={MovieDetailsView} />
          <Route component={NotFoundView} />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;

import { Switch, Route } from 'react-router-dom';
import './App.css';
import AppBar from './components/AppBar';
import HomeView from './views/HomeView';
import MovieDetailsView from './views/MovieDetailsView';
import Movies from './views/MoviesView';
import NotFound from './views/NotFoundViev';

function App() {
  return (
    <>
      <AppBar />
      <Switch>
        <Route path="/" exact component={HomeView} />
        <Route path="/movies" exact component={Movies} />
        <Route path="/movies/:movieId" component={MovieDetailsView} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default App;

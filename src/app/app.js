import './vendor';
import './index.css';

import { HomePage, MoviePage } from './pages';
import { ROUTES } from './routes';
import { RouteService } from './services/router';

const body = document.body;

RouteService.init()
  .on({
    route: ROUTES.HOME.path,
    run: () => {
      body.innerHTML = HomePage({ page: 'Home' });
    },
  })
  // .on({
  //   route: ROUTES.AUTH.path,
  //   run: () => {
  //     body.innerHTML = Auth();
  //   },
  // })
  .on({
    route: ROUTES.MOVIE.path,
    run: ({ id }) => {
      body.innerHTML = MoviePage({ id });
    },
  })
  .start();

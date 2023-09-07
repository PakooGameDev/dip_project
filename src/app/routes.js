export const ROUTES = {
  HOME: {
    path: '/',
  },
  AUTH: {
    path: '/auth',
    buildPath: ({ id } = {}) => {
      const url = new URL(window.location.href);
      url.pathname = '/auth';
      if (id) {
        url.searchParams.set('id', id);
      }
      return url.pathname + url.search;
    },
  },
  MOVIE: {
    path: '/movie',
    buildPath: ({ id } = {}) => {
      const url = new URL(window.location.href);
      url.pathname = '/movie';
      if (id) {
        url.searchParams.set('id', id);
      }
      return url.pathname + url.search;
    },
  },
};

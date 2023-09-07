import { mockMovies } from '../../../mockData';
import { ContentItem } from '../ContentItem';
import styles from './AppContent.module.css';

export function AppContent({ page }) {
  // let hasClickHandler = false;
  // const addListClickHandler = () => {
  //   const listElement = document.getElementById('content_item');

  //   if (!listElement) {
  //     hasClickHandler = false;
  //     return;
  //   }

  //   if (hasClickHandler) {
  //     return;
  //   }

  //   listElement.addEventListener('click', (event) => {
  //     const id = getListItemId(event.target);
  //     if (!id) {
  //       return;
  //     }

  //     RouteService.push(ROUTES.FACT_DETAILS.buildPath({ id }));
  //   });
  //   hasClickHandler = true;
  // };

  // window.addEventListener('DOMContentLoaded', addListClickHandler);
  // const observer = new MutationObserver(addListClickHandler);

  // observer.observe(document, {
  //   attributes: false,
  //   childList: true,
  //   characterData: false,
  //   subtree: true,
  // });

  const movies = mockMovies;

  let a = '';
  Object.values(movies).forEach((el) => {
    a += ContentItem(el.movie);
  });

  switch (page) {
    case 'Home':
      return `
      <div class="${styles.content}">
        <div class="${styles.grid}">
          ${a}
        </div>
        <div class="${styles.pagination}">
            IN PROGRESS
        </div>
      </div>
    `;
    case 'settings':
      break;
    case 'movies':
      break;
    default:
      return `
      <div class="${styles.content}">
        <div class="${styles.grid}">
          ${a}
        </div>
        <div class="${styles.pagination}">
            IN PROGRESS
        </div>
      </div>
    `;
  }
}

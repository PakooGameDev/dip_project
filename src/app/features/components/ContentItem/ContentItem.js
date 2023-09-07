import styles from './ContentItem.module.css';

export function ContentItem(movie) {
  return `
    <div id="content_item" class="${styles.item}">
      <div class="${styles.banner}">
        <img src = "${movie.poster}" alt="bannerSVG"/>
        <div class="${styles.rating}">${movie.rating.basic}</div>
      </div>
      <span class="${styles.moviename}">${movie.name}</span>
      <div class="${styles.categories}">

      </div>
    </div>
  `;
}

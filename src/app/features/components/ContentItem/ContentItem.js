import styles from './ContentItem.module.css';

export function ContentItem() {
  return `
    <div class="${styles.item}">
      <div class="${styles.banner}">
        <img src = ".\\assets\\images\\item.png" alt="bannerSVG"/>
      </div>
      <span class="${styles.moviename}">Wonder Woman: 1984</span>
      <div class="${styles.categories}">
        <span class="categories">Adventure</span>
        <span class="categories">Action</span>
        <span class="categories">Fantasy</span>
      </div>
    </div>
  `;
}

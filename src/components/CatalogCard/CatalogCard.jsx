import Favourite from "../Icons/Favourite";
import css from "./CatalogCard.module.css";

export default function CatalogCard({
  price,
  description,
  location,
  rating,
  name,
  gallery,
}) {
  return (
    <div className={css.contentContainer}>
      <div className={css.imgWrapper}>
        <img src={gallery} alt={name} className={css.img} />
      </div>
      <div className={css.contentWrapper}>
        <h3 className={css.cardTitle}>{name}</h3>
        <div className={css.reviewAndLocationWrapper}>
          <div>{rating}</div>
          <div>{location}</div>
        </div>
        <p className={css.textAbout}>{description} </p>
        <ul className={css.comfortList}>
          <li className={css.comfortItem}>Automatic</li>
        </ul>
        <button type="button" className={css.showMoreBtn}>
          Show more
        </button>

        <div className={css.priceAndFavouriteWrapper}>
          <div>€{price}</div>
          <div>
            <Favourite />
          </div>
        </div>
      </div>
    </div>
  );
}

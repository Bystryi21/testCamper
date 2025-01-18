import Favourite from "../Icons/Favourite";
import StarYellow from "../Icons/StarYellow";
import css from "./CatalogCard.module.css";
import Location from "../Icons/Location";
import { Link } from "react-router-dom";
import FeaturesList from "../FeaturesList/FeaturesList";

export default function CatalogCard({
  // price,
  // description,
  // location,
  // rating,
  // name,
  // gallery,
  // id,
  // reviews,
  value,
}) {
  const { price, description, location, rating, name, gallery, id, reviews } =
    value;

  return (
    <div className={css.contentContainer}>
      <div className={css.imgWrapper}>
        <img src={gallery[0].original} alt={name} className={css.img} />
      </div>
      <div className={css.contentWrapper}>
        <h3 className={css.cardTitle}>{name}</h3>
        <div className={css.reviewAndLocationWrapper}>
          <div className={css.rating}>
            <StarYellow />
            {rating}
            {`(${reviews.length} Reviews)`}
          </div>
          <div className={css.locationWrapper}>
            <Location className={css.locationSvg} />
            {location}
          </div>
        </div>
        <p className={css.textAbout}>{description} </p>
        {/* <FeaturesList value={value} /> */}
        <FeaturesList itemData={value} variant="catalog" />

        <div>
          <Link to={`/campers/${id}`} className={css.showMoreBtn}>
            Show more
          </Link>
        </div>
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

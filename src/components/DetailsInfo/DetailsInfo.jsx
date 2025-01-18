import { useSelector } from "react-redux";
import { selectCarsDetails } from "../../redux/campers/selectors";
import StarYellow from "../Icons/StarYellow";
import Location from "../Icons/Location";
import css from "./DetailsInfo.module.css";
import { NavLink, Outlet } from "react-router-dom";
import UnderLine from "../Icons/UnderLine";

export default function DetailsInfo() {
  const detailsInfo = useSelector(selectCarsDetails);
  // const image = detailsInfo.gallery;

  return (
    <div className={css.detailsWrapper}>
      <h3 className={css.mainTitle}>{detailsInfo.name}</h3>
      <div className={css.reviewAndLocationWrapper}>
        <div className={css.rating}>
          <StarYellow />
          {detailsInfo.rating}
        </div>
        <div className={css.locationWrapper}>
          <Location className={css.locationSvg} />
          {detailsInfo.location}
        </div>
      </div>
      <div className={css.price}>€{detailsInfo.price}</div>
      <ul className={css.imgList}>
        {detailsInfo.gallery &&
          detailsInfo.gallery.map((item, index) => {
            return (
              <li key={item.id || index}>
                <img
                  src={item.original}
                  alt={item.name}
                  className={css.imgCollection}
                />
              </li>
            );
          })}
      </ul>
      <p className={css.description}>{detailsInfo.description}</p>
      <ul className={css.listReviewAndFeatures}>
        <li>
          <NavLink to="features" className={css.navigation}>
            Features
          </NavLink>
        </li>
        <li>
          <NavLink to="reviews" className={css.navigation}>
            Reviews
          </NavLink>
        </li>
      </ul>
      <UnderLine />
      <Outlet />
    </div>
  );
}

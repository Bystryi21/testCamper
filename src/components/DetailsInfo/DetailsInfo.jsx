import { useSelector } from "react-redux";
import { selectCarsDetails } from "../../redux/selectors";
import StarYellow from "../Icons/StarYellow";
import Location from "../Icons/Location";
import css from "./DetailsInfo.module.css";
import { NavLink, Outlet } from "react-router-dom";

export default function DetailsInfo() {
  const detailsInfo = useSelector(selectCarsDetails);

  return (
    <div className={css.detailsWrapper}>
      <h3>{detailsInfo.name}</h3>
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
      <div>€{detailsInfo.price}</div>
      <img src={detailsInfo.gallery} alt={detailsInfo.name} />
      <p>{detailsInfo.description}</p>
      <ul className={css.listReviewAndFeatures}>
        <li>
          <NavLink to="features">Features</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

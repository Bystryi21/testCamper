import { NavLink } from "react-router-dom";
import css from "./About.module.css";

export default function About() {
  return (
    <div className={css.wrapper}>
      <div className={css.firstP}>Campers of your dreams</div>
      <div className={css.secondP}>
        You can find everything you want in our catalog
      </div>
      <NavLink to="/catalog" type="button" className={css.btn}>
        View Now
      </NavLink>
    </div>
  );
}

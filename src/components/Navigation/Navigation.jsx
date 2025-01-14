import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

export default function Navigation() {
  return (
    <div className={css.wrapper}>
      <NavLink to="/" className={css.navigation}>
        Home
      </NavLink>
      <NavLink to="/catalog" className={css.navigation}>
        Catalog
      </NavLink>
    </div>
  );
}

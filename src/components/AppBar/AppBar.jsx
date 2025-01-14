import IconHeader from "../Icons/IconHeader";
import Navigation from "../Navigation/Navigation";
import css from "./AppBar.module.css";

export default function AppBar() {
  return (
    <header className={css.container}>
      <div className={css.wrapperNavigation}>
        <IconHeader className={css.icon} />
        <Navigation />
      </div>
    </header>
  );
}

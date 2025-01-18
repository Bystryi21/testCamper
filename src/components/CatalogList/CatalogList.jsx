import { useSelector } from "react-redux";
import { selectCars } from "../../redux/campers/selectors";
import CatalogCard from "../CatalogCard/CatalogCard";
import css from "./CatalogList.module.css";

export default function CatalogList() {
  const allCars = useSelector(selectCars);

  return (
    <>
      <ul className={css.cardWrapper}>
        {allCars.map((item) => (
          <li className={css.cardItem} key={item.id}>
            <CatalogCard value={item} />
          </li>
        ))}
      </ul>
    </>
  );
}

import css from "./FeaturesList.module.css";
import Bathroom from "../Icons/Batchroom";
import AC from "../Icons/AC";
import Kitchen from "../Icons/Kitchen";
import TV from "../Icons/TV";

import Gas from "../Icons/Gas";
import Automatic from "../Icons/Automatic";
import Water from "../Icons/Water";
import { useSelector } from "react-redux";
import { selectCars, selectCarsDetails } from "../../redux/campers/selectors";

export default function FeaturesList({ variant = "catalog", itemData = null }) {
  const catalogData = useSelector(selectCars);
  const detailsData = useSelector(selectCarsDetails);

  const value = itemData
    ? itemData
    : variant === "catalog"
    ? catalogData
    : detailsData;

  if (!value) return null;

  return (
    <ul className={css.comfortList}>
      {value.AC && (
        <li className={css.comfortItem}>
          <AC />
          AC
        </li>
      )}
      {value.bathroom && (
        <li className={css.comfortItem}>
          <Bathroom />
          Bathroom
        </li>
      )}
      {value.kitchen && (
        <li className={css.comfortItem}>
          <Kitchen />
          Kitchen
        </li>
      )}
      {value.TV && (
        <li className={css.comfortItem}>
          <TV />
          TV
        </li>
      )}

      {value.gas && (
        <li className={css.comfortItem}>
          <Gas />
          Gas
        </li>
      )}
      {value.transmission === "automatic" && (
        <li className={css.comfortItem}>
          <Automatic />
          Automatic
        </li>
      )}
      {value.transmission === "manual" && (
        <li className={css.comfortItem}>
          <Automatic />
          Manual
        </li>
      )}
      {value.water && (
        <li className={css.comfortItem}>
          <Water />
          Water
        </li>
      )}
    </ul>
  );
}

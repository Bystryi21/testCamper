import { useSelector } from "react-redux";
// import FeaturesList from "../FeaturesList/FeaturesList";
import css from "./Futures.module.css";
import { selectCarsDetails } from "../../redux/campers/selectors";
import FeaturesLine from "../Icons/FeaturesLine";
import FeaturesList from "../FeaturesList/FeaturesList";
import Forma from "../Forma/Forma";

export default function Features() {
  const values = useSelector(selectCarsDetails);
  return (
    <div className={css.wrapperTwoBlocks}>
      <div className={css.container}>
        <div>
          <div>
            <FeaturesList variant="details" />
          </div>
          <div className={css.wrapper}>
            <p className={css.title}>Vehicle details</p>
            <FeaturesLine />
            <div className={css.infoWrapper}>
              <p className={css.textIn}>Form</p>
              <p className={css.textIn}>{values.form}</p>
            </div>
            <div className={css.infoWrapper}>
              <p className={css.textIn}>Length</p>
              <p className={css.textIn}>{values.length}</p>
            </div>
            <div className={css.infoWrapper}>
              <p className={css.textIn}>Width</p>
              <p className={css.textIn}>{values.width}</p>
            </div>
            <div className={css.infoWrapper}>
              <p className={css.textIn}>Height</p>
              <p className={css.textIn}>{values.height}</p>
            </div>
            <div className={css.infoWrapper}>
              <p className={css.textIn}>Tank</p>
              <p className={css.textIn}>{values.tank}</p>
            </div>
            <div className={css.infoWrapper}>
              <p className={css.textIn}>Consumption</p>
              <p className={css.textIn}>{values.consumption}</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Forma />
      </div>
    </div>
  );
}

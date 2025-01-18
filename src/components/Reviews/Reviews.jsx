import { useSelector } from "react-redux";
import Forma from "../Forma/Forma";
import { selectCarsDetails } from "../../redux/campers/selectors";
import css from "./Reviews.module.css";
import RaitingStar from "../RaitingStar/RaitingStar";

export default function Reviews() {
  const values = useSelector(selectCarsDetails);

  if (!values || !values.reviews) {
    return <div>Loading...</div>;
  }
  return (
    <div className={css.wrapperTwoBlocks}>
      <div className={css.firstBlock}>
        <ul className={css.list}>
          {values.reviews.map((item, index) => (
            <li key={index}>
              <div className={css.wrapperNameAndRaiting}>
                <div className={css.img}>
                  {item.reviewer_name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <div>{item.reviewer_name}</div>
                  <div>
                    <RaitingStar value={item.reviewer_rating} />
                  </div>
                </div>
              </div>
              <p>{item.comment}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Forma />
      </div>
    </div>
  );
}

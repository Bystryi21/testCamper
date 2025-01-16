import { useSelector } from "react-redux";
import { selectCars } from "../../redux/selectors";
import CatalogCard from "../CatalogCard/CatalogCard";
import css from "./CatalogList.module.css";

export default function CatalogList() {
  const allCars = useSelector(selectCars);
  console.log(allCars);

  return (
    <>
      <ul className={css.cardWrapper}>
        {allCars.map((item) => (
          <li className={css.cardItem} key={item.id}>
            <CatalogCard
              // name={item.name}
              // rating={item.rating}
              // location={item.location}
              // description={item.description}
              // price={item.price}
              // img={item.gallery[0]?.thumb}
              // reviews={item.reviews}
              // id={item.id}
              value={item}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

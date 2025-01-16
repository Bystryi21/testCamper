import AC from "../Icons/AC";
import Automatic from "../Icons/Automatic";
import Bathroom from "../Icons/Batchroom";
import Fully from "../Icons/Fully";
import Kitchen from "../Icons/Kitchen";
import Line from "../Icons/Line";
import Location from "../Icons/Location";
import Tv from "../Icons/TV";
import Van from "../Icons/Van";
import css from "./CatalogItems.module.css";
import Alcove from "../Icons/Alcove";
import { Formik, Form } from "formik";
import CatalogCard from "../CatalogCard/CatalogCard";
import { useSelector } from "react-redux";
import { selectCars } from "../../redux/selectors";

export default function CatalogItems() {
  const allCars = useSelector(selectCars);
  console.log(allCars);

  return (
    <div className={css.container}>
      <Formik>
        <Form>
          <div className={css.locationWrapper}>
            <p className={css.titleLocation}>Location</p>
            <div className={css.locationSvg}>
              <Location />
            </div>

            <input
              type="text"
              placeholder="Kyiv, Ukraine"
              className={css.locationInput}
            />
          </div>
          <div>
            <h3 className={css.filtersTitle}>Filters</h3>
            <h3 className={css.vahicleTitle}>Vehicle equipment</h3>
            <Line />
            <div>
              <div className={css.wrapperAmenities}>
                <button type="button" className={css.filterAmenities}>
                  <AC />
                  AC
                </button>
                <button type="button" className={css.filterAmenities}>
                  <Automatic />
                  Automatic
                </button>
                <button type="button" className={css.filterAmenities}>
                  <Kitchen />
                  Kitchen
                </button>
                <button type="button" className={css.filterAmenities}>
                  <Tv />
                  TV
                </button>
                <button type="button" className={css.filterAmenities}>
                  <Bathroom />
                  Bathroom
                </button>
              </div>

              <h3 className={css.vehicleTypeTitle}>Vehicle Type</h3>
              <Line />
              <div className={css.typeWrapper}>
                <button type="button" className={css.filterType}>
                  <Van />
                  Van
                </button>
                <button type="button" className={css.filterType}>
                  <Fully />
                  Fully Integrated
                </button>
                <button type="button" className={css.filterType}>
                  <Alcove />
                  Alcove
                </button>
              </div>
            </div>
          </div>
          <button type="submit" className={css.searchBtn}>
            Search
          </button>
        </Form>
      </Formik>

      <ul className={css.cardWrapper}>
        {allCars.map((item) => (
          <li className={css.cardItem} key={item.id}>
            <CatalogCard
              name={item.name}
              rating={item.rating}
              location={item.location}
              description={item.description}
              price={item.price}
              img={item.gallery}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

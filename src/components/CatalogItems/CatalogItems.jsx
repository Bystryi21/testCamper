import AC from "../Icons/AC";
// import Automatic from "../Icons/Automatic";
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

import CatalogList from "../CatalogList/CatalogList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../redux/campers/operations";
import { resetFilters, setLocation } from "../../redux/filters/slice";
import { toggleEquipment } from "../../redux/filters/slice";
import { selectForm } from "../../redux/filters/slice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CatalogItems() {
  const dispatch = useDispatch();
  const location = useSelector((state) => state.filters.location);
  const filters = useSelector((state) => state.filters);
  const { form } = useSelector((state) => state.filters);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const handleSubmit = async (values, action) => {
    try {
      await dispatch(fetchCars()).unwrap();
      // dispatch(setLocation(""));
      dispatch(resetFilters());
      // dispatch(selectForm(""));
      // dispatch(toggleEquipment([]));

      action.resetForm();
      toast.success("Results found");
    } catch {
      toast.error("Nothing found on request");
    }
  };

  const handleLocationChange = (e) => {
    dispatch(setLocation(e.target.value));
  };

  const handleVehicleTypeChange = (type) => {
    if (form === type) {
      dispatch(selectForm(""));
    } else {
      dispatch(selectForm(type));
    }
  };

  return (
    <div className={css.container}>
      <Formik initialValues={{ location: location }} onSubmit={handleSubmit}>
        <Form>
          <div className={css.locationWrapper}>
            <p className={css.titleLocation}>Location</p>
            <div className={css.locationSvg}>
              <Location />
            </div>

            <input
              type="text"
              name="location"
              placeholder="Kyiv, Ukraine"
              className={css.locationInput}
              value={location}
              onChange={handleLocationChange}
            />
          </div>
          <div>
            <h3 className={css.filtersTitle}>Filters</h3>
            <h3 className={css.vahicleTitle}>Vehicle equipment</h3>
            <Line />
            <div>
              <div className={css.wrapperAmenities}>
                <button
                  type="button"
                  className={`${css.filterAmenities} ${
                    filters.equipment.includes("AC") ? css.active : ""
                  }`}
                  onClick={() => dispatch(toggleEquipment("AC"))}
                >
                  <AC />
                  AC
                </button>
                <button
                  type="button"
                  className={`${css.filterAmenities} ${
                    filters.equipment.includes("Kitchen") ? css.active : ""
                  }`}
                  onClick={() => dispatch(toggleEquipment("Kitchen"))}
                >
                  <Kitchen />
                  Kitchen
                </button>
                <button
                  type="button"
                  className={`${css.filterAmenities} ${
                    filters.equipment.includes("Bathroom") ? css.active : ""
                  }`}
                  onClick={() => dispatch(toggleEquipment("Bathroom"))}
                >
                  <Bathroom />
                  Bathroom
                </button>
                <button
                  type="button"
                  className={`${css.filterAmenities} ${
                    filters.equipment.includes("TV") ? css.active : ""
                  }`}
                  onClick={() => dispatch(toggleEquipment("TV"))}
                >
                  <Tv />
                  TV
                </button>
              </div>

              <h3 className={css.vehicleTypeTitle}>Vehicle Type</h3>
              <Line />
              <div className={css.typeWrapper}>
                <button
                  type="button"
                  className={`${css.filterType} ${
                    form === "panelTruck" ? css.active : ""
                  }`}
                  onClick={() => handleVehicleTypeChange("panelTruck")}
                >
                  <Van />
                  Van
                </button>
                <button
                  type="button"
                  className={`${css.filterType} ${
                    form === "fullyIntegrated" ? css.active : ""
                  }`}
                  onClick={() => handleVehicleTypeChange("fullyIntegrated")}
                >
                  <Fully />
                  Fully
                </button>
                <button
                  type="button"
                  className={`${css.filterType} ${
                    form === "alcove" ? css.active : ""
                  }`}
                  onClick={() => handleVehicleTypeChange("alcove")}
                >
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
      <ToastContainer />
      <CatalogList />
    </div>
  );
}

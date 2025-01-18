// import { useDispatch } from "react-redux";
import AppBar from "../../components/AppBar/AppBar";
import CatalogItems from "../../components/CatalogItems/CatalogItems";
// import { useEffect } from "react";
// import { fetchCars } from "../../redux/campers/operations";

export default function Catalog() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchCars());
  // }, [dispatch]);
  return (
    <>
      <AppBar />
      <CatalogItems />
    </>
  );
}

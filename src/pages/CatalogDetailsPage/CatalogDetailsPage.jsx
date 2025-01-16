import { useParams } from "react-router-dom";
import AppBar from "../../components/AppBar/AppBar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchById } from "../../redux/operations";
import DetailsInfo from "../../components/DetailsInfo/DetailsInfo";

export default function CatalogDetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchById(id));
  }, [dispatch, id]);
  return (
    <>
      <AppBar />
      <DetailsInfo />
    </>
  );
}

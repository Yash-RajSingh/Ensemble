import { useParams } from "react-router-dom";
import List from "../../components/lists/lists";
import Preloader from "../../components/preloader/preloader";

const ListsPage = () => {
  const {buid} = useParams();
  return (
    <>
    <Preloader />
    <List buid={buid} />
    </>
  );
};

export default ListsPage;

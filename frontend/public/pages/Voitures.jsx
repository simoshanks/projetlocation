import { useLocation } from "react-router-dom";
import Listvoitures from "../composant/Listvoitures";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Voitures() {
  const query = useQuery();
  const searchTerm = query.get("search") || "";

  return (
    <div>
      <h1>Voitures</h1>
      <Listvoitures searchTerm={searchTerm} />
    </div>
  );
}

export default Voitures;
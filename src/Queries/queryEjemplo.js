import { useQuery } from "react-query";
import axios from "axios";

export function 
useBuscarInfoQuery(params) {
  return useQuery(
    ["buscarInfoQuery", params],
     buscarInfoQuery, {
    retry: 0,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    keepPreviousData: false,
    enabled: true,
  });
}

export const buscarInfoQuery = async (params) => {
  const [queryName, paramsFilter] = params.queryKey;
  let urlBase = "https://pokeapi.co/api/v2";
  const { data } = await axios.get(
    urlBase + "/pokemon?limit=" + paramsFilter.limit
  );

  const resumen = data.results.map((item, index) => {
    return { label: item.name, id: index+1 };
  });
  return resumen;
};


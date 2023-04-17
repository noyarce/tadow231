
axios.get("https://pokeapi.co/api/v2/pokemon?limit=151").then(
      (response) => {setListado(response.data.results)});

useEffect(() => {
    if (buscador.trim() !== "") {
      let result = listadoOriginal.filter((item) =>
        item.name.toString().includes(buscador.toString().trim())
      );
      setListaAux(result);
    }
}, [buscador]);



    function nombreRandom(){
        let res = '';
        for(let i = 0; i < 4; i++){
            const random = Math.floor(Math.random() * 25);
            res += String.fromCharCode(97 + random);
        };
        return res;
    }





import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const queryClient = new QueryClient();

function App() {
  return (
      <QueryClientProvider client={queryClient}>
        
      </QueryClientProvider>
  );
}
export default App;

const {
    data: nuevoListado,
    isLoading: cargando,
    refetch: recargar,
    isError: errors,
  } = useBuscarInfoQuery(params);

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
const baseUrl = 'https://pokeapi.co/api/v2/pokemon'

interface RequestInterface {
    id?: string | null;
}

const makeAPIRequest = async ({ id }: RequestInterface) => {
    try {
        const res = await fetch(`${baseUrl}${id ? `/${id}` : "?limit=878"}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await res.json();
        return id ? data : data.results;
    } catch (error) {
        console.log("base", error)
    }
}

export const getAllPokemons = async () => {
    return await makeAPIRequest({id: null});
}

export const getPokemonData = async (id: string) => {
    return await makeAPIRequest({id})
}
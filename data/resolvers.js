const findAllBands = () => {
    fetch("https://taller-api.vercel.app/band", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          query,
        }),
      })
        .then((respuesta) => respuesta.json())
        .then((result)=>{
            result.data
        })
    };   
const resolvers = {
    Query: {
        getAllBands: async () => {
            const band = await findAllBands()
            return band;
        },
        
    },
}

module.exports = { resolvers }
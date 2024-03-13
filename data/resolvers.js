const findAllBands = () => {
    return fetch("https://taller-api.vercel.app/band", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        }
    })
        .then((respuesta) => respuesta.json())
        .then((result) => {
            console.log(result);
            return result.data;
        })
        .catch((error) => {
            console.error("Error fetching bands:", error);
            throw error;
        });
};

const findBandId = (id) => {
    return fetch(`https://taller-api.vercel.app/band/id/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        }
    })
        .then((respuesta) => respuesta.json())
        .then((result) => {
            console.log(result.data);
            return result.data[0];
        })
        .catch((error) => {
            console.error("Error fetching bands:", error);
            throw error;
        });
};

const resolvers = {
    Query: {
        getAllBands: async () => {
            const band = await findAllBands()
            return band;
        },

        getBandByID: async (_, args) => {
            const id = args.id
            const band = await findBandId(id)
            console.log(band.name);
            return band
        }

    },
}

module.exports = { resolvers }
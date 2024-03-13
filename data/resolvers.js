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
            return result.data[0];
        })
        .catch((error) => {
            console.error("Error fetching bands:", error);
            throw error;
        });
};
const findAllMembers = () => {
    return fetch("https://taller-api.vercel.app/member", {
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
const findMemberById = (id) => {
    return fetch(`https://taller-api.vercel.app/member/id/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        }
    })
        .then((respuesta) => respuesta.json())
        .then((result) => {
            return result.data[0];
        })
        .catch((error) => {
            console.error("Error fetching bands:", error);
            throw error;
        });
};

const createBand = (band) => {
    return fetch(`https://taller-api.vercel.app/band`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(band),
    })
        .then((respuesta) => respuesta.json())
        .then((result) => {
            return result.data;
        })
        .catch((error) => {
            console.error("Error fetching bands:", error);
            throw error;
        });
}

const updateBand = (id, band) => {
    return fetch(`https://taller-api.vercel.app/band/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(band),
    })
        .then((respuesta) => respuesta.json())
        .then((result) => {
            return result.data;
        })
        .catch((error) => {
            console.error("Error fetching bands:", error);
            throw error;
        });
}



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
        },
        getAllMembers: async () => {
            const member = await findAllMembers();
            return member;
        },
        getMemberByID: async (_, args) => {
            const id = args.id
            const member = await findMemberById(id)
            console.log(member);
            return member
        },
    },
    Mutation: {
        createBand: async (_, args) => {
            const band = {
                "id": args.id,
                "name": args.name,
                "genre": args.genre,
                "country": args.country
            }
            const Band = await createBand(band)
            return Band
        },

        updateBand: async (_, args) => {
            const existBand = await findBandId(args.id)
            const band = {
                "id": args.id,
                "name": args.name != null ? args.name : existBand.name,
                "genre": args.genre != null ? args.genre : existBand.genre,
                "country": args.country != null ? args.country : existBand.country
            }
            console.log(existBand);
            const Band = await updateBand(existBand._id, band)
            return Band
        }
    }
}

module.exports = { resolvers }
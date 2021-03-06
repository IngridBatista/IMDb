import client from "./client";

const film = {
	list: () => client.get("/film"),
	add: film => client.post("/film", film)
};

const evaluation = {
	list: () => client.get("/evaluation"),
	add: evaluation => client.post("/evaluation", evaluation)
};

export default {
	film,
	evaluation
};

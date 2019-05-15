// This file is the used to connect to the remote DB and
// gives us the ability to CRUD it in JavaScript
const { Prisma } = require("prisma-binding");

const db = new Prisma({
	typeDefs: "src/generated/prisma.graphql",
	endpoint: process.env.PRISMA_ENDPOINT,
	secret: process.env.PRISMA_SECRET,
	debug: false
});

module.exports = db;

const Mutations = {
	createCow(parent, args, ctx, info) {
		global.cows = global.cows || [];
		// create a cow
		const newCow = { name: args.name };
		global.cows.push(newCow);
		return newCow;
	}
};

module.exports = Mutations;

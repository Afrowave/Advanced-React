const Query = {
	cows(parent, args, ctx, info) {
		global.cows = global.cows || [];
		return global.cows;
	}
};

module.exports = Query;

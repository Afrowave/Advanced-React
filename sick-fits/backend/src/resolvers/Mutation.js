const Mutations = {
	async createItem(parent, args, ctx, info) {
		// Check if they are logged in

		const item = await ctx.db.mutation.createItem(
			{
				data: { ...args }
			},
			info
		);
		return item;
	},
	updateItem(parent, args, ctx, info) {
		// First, take a copy of the updates
		const updates = { ...args };
		// Remove the ID
		delete updates.id;
		// run the update method
		return ctx.db.mutation.updateItem(
			{
				data: updates,
				where: {
					id: args.id
				}
			},
			info
		);
	},
	deleteItem(parent, args, ctx, info) {
		const where = { id: args.id };
		// 1. Find the item
		const item = ctx.db.query.item({ where }, `{id title}`);
		// 2. Check if the User owns the item or has permissions
		// To Do
		// 3. Delete it!
		return ctx.db.mutation.deleteItem({ where }, info);
	}
};

module.exports = Mutations;

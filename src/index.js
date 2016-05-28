module.exports =
	( context,
		{exclude = [],
		 include = [],
		 append = []
		} = {}
	) =>
{

		let methodsToBind = ( _ => {
			return !Object.is.apply([], include)
				? include
				: Array.of( ...Reflect.ownKeys(context.constructor.prototype, ...append) )
					.filter(f => {
						return !Array.of( ...EXCLUDE_METHODS,...exclude ).includes(f)
					})

		})()

		bindMethods.call(context, methodsToBind)
	}

	function bindMethods(methods) {
		methods.filter(prop => typeof this[prop] === 'function')
			.forEach(m => {
				this[m] = this[m].bind(this)
			}
	)
}
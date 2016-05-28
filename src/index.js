// MIT dean sacramone @2016

// These are React methods we don't want to bind up
const EXCLUDE_METHODS = [
	"componentWillReceiveProps",
	"shouldComponentUpdate",
	"componentWillUnmount",
	"componentWillUpdate",
	"componentDidUpdate",
	"componentWillMount",
	"componentDidMount",
	"getChildContext",
	"constructor",
	"render"
]

/*
 @autoBindMethods

 @exclude [array] => remove method(s) you don't want to bind
 @include [array] => bind only specific methods, over rides "Reflect.ownKeys" && append
 @append [array]  => you want to "add" to the class methods (perhaps third party etc..)
 'append' would assume 'include' is empty.

 note: there is no real type checking, we assume you are awesome! :-) enough to follow
 directions :-) and  not pass things in it doesn't expect. Be good!

 example 1: I want to exclude method "omitMeMethod"
 autoBindMethods(this, {exclude: ['omitMeMethod']})

 example 2: I want to only bind the following methods.
 autoBindMethods(this, {include: ['methodOneInclude','methodTwoInclude']})

 */


function bindMethods(methods) {
	methods.filter(prop => typeof this[prop] === 'function')
		.forEach(m => {
			this[m] = this[m].bind(this)
		})
}

module.exports =
	( context,
		{ exclude = [],
		  include = [],
		  append = []
		} = {} ) =>

		{
			let methodsToBind = ( _ => {
					return !Object.is.apply([], include)
						? include
						: Array.of( ...Reflect.ownKeys(context.constructor.prototype, ...append) )
							.filter(f => {
								return !Array.of( ...EXCLUDE_METHODS, ...exclude ).includes(f)
							})

			})()

			bindMethods.call(context, methodsToBind)
		}

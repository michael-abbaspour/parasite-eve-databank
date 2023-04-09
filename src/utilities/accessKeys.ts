/**
 * Utility function(s) and/or method(s) for accessing keys and properties.
 */

export const propertyOf = function<TObj>(name: keyof TObj) {
	return name;
};
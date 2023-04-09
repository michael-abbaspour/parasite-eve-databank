/**
 * Utility function(s) for using the Fetch API and its various methods.
 */

export const getJsonFetch = function<TData>(url: string): Promise<TData> {
	return fetch(url).then((response) => response.json());
};
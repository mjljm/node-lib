import { inspect } from 'node:util';

export const fullInspect = (object: unknown) =>
	inspect(object, {
		depth: Infinity,
		maxArrayLength: Infinity,
		maxStringLength: Infinity,
		breakLength: Infinity,
		compact: false,
		sorted: true,
		numericSeparator: true
	});

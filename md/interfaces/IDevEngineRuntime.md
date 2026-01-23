[**package-json-type**](../README.md)

***

[package-json-type](../globals.md) / IDevEngineRuntime

# Interface: IDevEngineRuntime

Defined in: [index.ts:182](https://github.com/ajaxlab/package-json-type/blob/44b7b1d8e2c534bb3c6eadf0eee5fa4ec56f31af/src/index.ts#L182)

Runtime specification for devEngines field.

## See

https://docs.npmjs.com/cli/v10/configuring-npm/package-json#devengines

## Properties

### name?

> `optional` **name**: `string`

Defined in: [index.ts:186](https://github.com/ajaxlab/package-json-type/blob/44b7b1d8e2c534bb3c6eadf0eee5fa4ec56f31af/src/index.ts#L186)

The name of the runtime (e.g., "node", "bun", "deno").

***

### onFail?

> `optional` **onFail**: `"error"` \| `"warn"` \| `"ignore"`

Defined in: [index.ts:197](https://github.com/ajaxlab/package-json-type/blob/44b7b1d8e2c534bb3c6eadf0eee5fa4ec56f31af/src/index.ts#L197)

An error to show when the engine doesn't match.
If true, mismatches will cause an error. If false, only a warning.

***

### version?

> `optional` **version**: `string`

Defined in: [index.ts:191](https://github.com/ajaxlab/package-json-type/blob/44b7b1d8e2c534bb3c6eadf0eee5fa4ec56f31af/src/index.ts#L191)

The version range of the runtime.

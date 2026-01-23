[**package-json-type**](../README.md)

***

[package-json-type](../globals.md) / IDevEnginePackageManager

# Interface: IDevEnginePackageManager

Defined in: [index.ts:204](https://github.com/ajaxlab/package-json-type/blob/b079c269fd789de45d0c3206fdcd6decbf5d8209/src/index.ts#L204)

Package manager specification for devEngines field.

## See

https://docs.npmjs.com/cli/v10/configuring-npm/package-json#devengines

## Properties

### name?

> `optional` **name**: `string`

Defined in: [index.ts:208](https://github.com/ajaxlab/package-json-type/blob/b079c269fd789de45d0c3206fdcd6decbf5d8209/src/index.ts#L208)

The name of the package manager (e.g., "npm", "yarn", "pnpm").

***

### onFail?

> `optional` **onFail**: `"error"` \| `"warn"` \| `"ignore"`

Defined in: [index.ts:219](https://github.com/ajaxlab/package-json-type/blob/b079c269fd789de45d0c3206fdcd6decbf5d8209/src/index.ts#L219)

An error to show when the package manager doesn't match.
If true, mismatches will cause an error. If false, only a warning.

***

### version?

> `optional` **version**: `string`

Defined in: [index.ts:213](https://github.com/ajaxlab/package-json-type/blob/b079c269fd789de45d0c3206fdcd6decbf5d8209/src/index.ts#L213)

The version range of the package manager.

[**package-json-type**](../README.md)

***

[package-json-type](../globals.md) / IWorkspaces

# Interface: IWorkspaces

Defined in: [index.ts:506](https://github.com/ajaxlab/package-json-type/blob/44b7b1d8e2c534bb3c6eadf0eee5fa4ec56f31af/src/index.ts#L506)

Workspaces configuration for monorepos.
Allows defining glob patterns for workspace packages.

```json
{
  "workspaces": {
    "packages": ["packages/*"],
    "nohoist": ["**/react-native"]
  }
}
```

## See

 - https://docs.npmjs.com/cli/v10/configuring-npm/package-json#workspaces
 - https://yarnpkg.com/features/workspaces

## Properties

### nohoist?

> `optional` **nohoist**: `string`[]

Defined in: [index.ts:515](https://github.com/ajaxlab/package-json-type/blob/44b7b1d8e2c534bb3c6eadf0eee5fa4ec56f31af/src/index.ts#L515)

Packages that should not be hoisted to the root node_modules (Yarn only).

***

### packages?

> `optional` **packages**: `string`[]

Defined in: [index.ts:510](https://github.com/ajaxlab/package-json-type/blob/44b7b1d8e2c534bb3c6eadf0eee5fa4ec56f31af/src/index.ts#L510)

Glob patterns of workspace packages.

[**package-json-type**](../README.md)

***

[package-json-type](../globals.md) / IWorkspaces

# Interface: IWorkspaces

Defined in: [index.ts:364](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L364)

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

Defined in: [index.ts:373](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L373)

Packages that should not be hoisted to the root node_modules (Yarn only).

***

### packages?

> `optional` **packages**: `string`[]

Defined in: [index.ts:368](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L368)

Glob patterns of workspace packages.

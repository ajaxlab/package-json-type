[**package-json-type**](../README.md)

***

[package-json-type](../globals.md) / IImportsMap

# Interface: IImportsMap

Defined in: [index.ts:401](https://github.com/ajaxlab/package-json-type/blob/b079c269fd789de45d0c3206fdcd6decbf5d8209/src/index.ts#L401)

Package imports map for the `imports` field.
Allows defining internal import aliases within the package.
All entries must start with `#`.

```json
{
  "imports": {
    "#utils": "./src/utils/index.js",
    "#internal/*": "./src/internal/*.js"
  }
}
```

## See

 - https://nodejs.org/api/packages.html#imports
 - https://nodejs.org/api/packages.html#subpath-imports

## Indexable

\[`path`: `string`\]: `string` \| [`IConditionalExport`](IConditionalExport.md)

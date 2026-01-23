[**package-json-type**](../README.md)

***

[package-json-type](../globals.md) / IImportsMap

# Interface: IImportsMap

Defined in: [index.ts:259](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L259)

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

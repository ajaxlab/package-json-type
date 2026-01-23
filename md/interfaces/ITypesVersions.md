[**package-json-type**](../README.md)

***

[package-json-type](../globals.md) / ITypesVersions

# Interface: ITypesVersions

Defined in: [index.ts:485](https://github.com/ajaxlab/package-json-type/blob/44b7b1d8e2c534bb3c6eadf0eee5fa4ec56f31af/src/index.ts#L485)

TypeScript types version map.
Allows providing different type definitions for different TypeScript versions.

```json
{
  "typesVersions": {
    ">=4.0": {
      "*": ["ts4.0/*"]
    },
    ">=3.0": {
      "*": ["ts3.0/*"]
    }
  }
}
```

## See

https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html#version-selection-with-typesversions

## Indexable

\[`version`: `string`\]: `object`

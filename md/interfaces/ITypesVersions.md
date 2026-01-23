[**package-json-type**](../README.md)

***

[package-json-type](../globals.md) / ITypesVersions

# Interface: ITypesVersions

Defined in: [index.ts:343](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L343)

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

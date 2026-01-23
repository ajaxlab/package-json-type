[**package-json-type**](../README.md)

***

[package-json-type](../globals.md) / IOverrides

# Interface: IOverrides

Defined in: [index.ts:392](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L392)

Dependency overrides configuration.
Allows overriding versions of nested dependencies.

```json
{
  "overrides": {
    "foo": "1.0.0",
    "bar": {
      "baz": "2.0.0"
    }
  }
}
```

## See

https://docs.npmjs.com/cli/v10/configuring-npm/package-json#overrides

## Indexable

\[`packageName`: `string`\]: `string` \| `IOverrides`

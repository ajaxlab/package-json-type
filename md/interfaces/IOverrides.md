[**package-json-type**](../README.md)

***

[package-json-type](../globals.md) / IOverrides

# Interface: IOverrides

Defined in: [index.ts:534](https://github.com/ajaxlab/package-json-type/blob/44b7b1d8e2c534bb3c6eadf0eee5fa4ec56f31af/src/index.ts#L534)

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

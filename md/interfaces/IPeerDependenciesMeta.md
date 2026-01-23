[**package-json-type**](../README.md)

***

[package-json-type](../globals.md) / IPeerDependenciesMeta

# Interface: IPeerDependenciesMeta

Defined in: [index.ts:321](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L321)

Metadata for peer dependencies.
Allows specifying additional information about peer dependencies,
such as marking them as optional.

```json
{
  "peerDependencies": {
    "react": "^18.0.0",
    "typescript": "^5.0.0"
  },
  "peerDependenciesMeta": {
    "typescript": {
      "optional": true
    }
  }
}
```

## See

https://docs.npmjs.com/cli/v10/configuring-npm/package-json#peerdependenciesmeta

## Indexable

\[`packageName`: `string`\]: [`IPeerDependencyMeta`](IPeerDependencyMeta.md)

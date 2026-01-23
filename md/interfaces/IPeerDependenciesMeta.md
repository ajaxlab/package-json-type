[**package-json-type**](../README.md)

***

[package-json-type](../globals.md) / IPeerDependenciesMeta

# Interface: IPeerDependenciesMeta

Defined in: [index.ts:463](https://github.com/ajaxlab/package-json-type/blob/b079c269fd789de45d0c3206fdcd6decbf5d8209/src/index.ts#L463)

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

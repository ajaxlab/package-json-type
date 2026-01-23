[**package-json-type**](../README.md)

***

[package-json-type](../globals.md) / IBrowserMap

# Interface: IBrowserMap

Defined in: [index.ts:49](https://github.com/ajaxlab/package-json-type/blob/b079c269fd789de45d0c3206fdcd6decbf5d8209/src/index.ts#L49)

Browser field replacement map.
Maps module paths to browser-specific alternatives or `false` to ignore.

```json
{
  "browser": {
    "./lib/server.js": "./lib/browser.js",
    "fs": false
  }
}
```

## See

https://github.com/defunctzombie/package-browser-field-spec

## Indexable

\[`modulePath`: `string`\]: `string` \| `false`

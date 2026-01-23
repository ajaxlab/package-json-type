[**package-json-type**](../README.md)

***

[package-json-type](../globals.md) / IBinMap

# Interface: IBinMap

Defined in: [index.ts:31](https://github.com/ajaxlab/package-json-type/blob/b079c269fd789de45d0c3206fdcd6decbf5d8209/src/index.ts#L31)

An executable file which will be installed into the PATH
with a package install. `npm` will symlink that file into
`prefix/bin` for global installs, or `./node_modules/.bin/`
for local installs.

```json
{
  "bin" : {
    "myapp" : "./cli.js"
  }
}
```

For example, with linux if you install `myapp`,
it'll create a symlink from the `cli.js` script
to `/usr/local/bin/myapp`.

## See

https://docs.npmjs.com/files/package.json#bin

## Indexable

\[`commandName`: `string`\]: `string`

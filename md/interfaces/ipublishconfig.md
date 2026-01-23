[**package-json-type**](../README.md)

***

[package-json-type](../globals.md) / IPublishConfig

# Interface: IPublishConfig

Defined in: [index.ts:1350](https://github.com/ajaxlab/package-json-type/blob/44b7b1d8e2c534bb3c6eadf0eee5fa4ec56f31af/src/index.ts#L1350)

This is a set of config values that will be used at publish-time.
It's especially handy if you want to set the `tag`, `registry` or `access`,
so that you can ensure that a given package is not tagged with `“latest”`,
published to the global public registry or that a scoped module is private by default.
Any config values can be overridden, but only "`tag`", "`registry`" and
"`access`" probably matter for the purposes of publishing.
See npm-config to see the list of config options that can be overridden.
* Public Registry

```json
{
  "publishConfig":{
    "registry":"https://registry.npmjs.org"
  }
}
```

* Your Private Registry

```json
{
  "publishConfig":{
    "registry":"http://your-registry.local"
  }
}
```

## See

 - https://docs.npmjs.com/files/package.json#publishconfig
 - https://yarnpkg.com/en/docs/package-json#toc-publishconfig

## Properties

### access?

> `optional` **access**: `"public"` \| `"restricted"`

Defined in: [index.ts:1354](https://github.com/ajaxlab/package-json-type/blob/44b7b1d8e2c534bb3c6eadf0eee5fa4ec56f31af/src/index.ts#L1354)

Access level for scoped packages: "public" or "restricted".

***

### bin?

> `optional` **bin**: `string` \| [`IBinMap`](IBinMap.md)

Defined in: [index.ts:1408](https://github.com/ajaxlab/package-json-type/blob/44b7b1d8e2c534bb3c6eadf0eee5fa4ec56f31af/src/index.ts#L1408)

Override the bin field for publishing.

***

### browser?

> `optional` **browser**: `string` \| [`IBrowserMap`](IBrowserMap.md)

Defined in: [index.ts:1413](https://github.com/ajaxlab/package-json-type/blob/44b7b1d8e2c534bb3c6eadf0eee5fa4ec56f31af/src/index.ts#L1413)

Override the browser field for publishing.

***

### directory?

> `optional` **directory**: `string`

Defined in: [index.ts:1370](https://github.com/ajaxlab/package-json-type/blob/44b7b1d8e2c534bb3c6eadf0eee5fa4ec56f31af/src/index.ts#L1370)

The subdirectory to publish. Useful for monorepos where
the build output is in a subdirectory.

***

### executableFiles?

> `optional` **executableFiles**: `string`[]

Defined in: [index.ts:1376](https://github.com/ajaxlab/package-json-type/blob/44b7b1d8e2c534bb3c6eadf0eee5fa4ec56f31af/src/index.ts#L1376)

Files to mark as executable after extraction.
Only relevant for pnpm.

***

### exports?

> `optional` **exports**: `string` \| [`IConditionalExport`](IConditionalExport.md) \| [`IExportsMap`](IExportsMap.md) \| `null`

Defined in: [index.ts:1403](https://github.com/ajaxlab/package-json-type/blob/44b7b1d8e2c534bb3c6eadf0eee5fa4ec56f31af/src/index.ts#L1403)

Override the exports field for publishing.

***

### linkDirectory?

> `optional` **linkDirectory**: `boolean`

Defined in: [index.ts:1383](https://github.com/ajaxlab/package-json-type/blob/44b7b1d8e2c534bb3c6eadf0eee5fa4ec56f31af/src/index.ts#L1383)

When set to true, the local package will be linked
to the virtual store instead of being copied.
Only relevant for pnpm.

***

### main?

> `optional` **main**: `string`

Defined in: [index.ts:1388](https://github.com/ajaxlab/package-json-type/blob/44b7b1d8e2c534bb3c6eadf0eee5fa4ec56f31af/src/index.ts#L1388)

Override the main entry point for publishing.

***

### module?

> `optional` **module**: `string`

Defined in: [index.ts:1393](https://github.com/ajaxlab/package-json-type/blob/44b7b1d8e2c534bb3c6eadf0eee5fa4ec56f31af/src/index.ts#L1393)

Override the module entry point for publishing.

***

### provenance?

> `optional` **provenance**: `boolean`

Defined in: [index.ts:1419](https://github.com/ajaxlab/package-json-type/blob/44b7b1d8e2c534bb3c6eadf0eee5fa4ec56f31af/src/index.ts#L1419)

Provenance attestation for the package.
When true, npm generates and publishes provenance statements.

***

### registry?

> `optional` **registry**: `string`

Defined in: [index.ts:1359](https://github.com/ajaxlab/package-json-type/blob/44b7b1d8e2c534bb3c6eadf0eee5fa4ec56f31af/src/index.ts#L1359)

The npm registry URL to publish to.

***

### tag?

> `optional` **tag**: `string`

Defined in: [index.ts:1364](https://github.com/ajaxlab/package-json-type/blob/44b7b1d8e2c534bb3c6eadf0eee5fa4ec56f31af/src/index.ts#L1364)

The distribution tag to publish to.

***

### types?

> `optional` **types**: `string`

Defined in: [index.ts:1398](https://github.com/ajaxlab/package-json-type/blob/44b7b1d8e2c534bb3c6eadf0eee5fa4ec56f31af/src/index.ts#L1398)

Override the types entry point for publishing.

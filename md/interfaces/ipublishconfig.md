[**package-json-type**](../README.md)

***

[package-json-type](../globals.md) / IPublishConfig

# Interface: IPublishConfig

Defined in: [index.ts:1088](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L1088)

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

> `optional` **access**: `string`

Defined in: [index.ts:1089](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L1089)

***

### registry?

> `optional` **registry**: `string`

Defined in: [index.ts:1090](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L1090)

***

### tag?

> `optional` **tag**: `string`

Defined in: [index.ts:1091](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L1091)

> # Interface: IPublishConfig

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

**`see`** https://docs.npmjs.com/files/package.json#publishconfig

**`see`** https://yarnpkg.com/en/docs/package-json#toc-publishconfig

## Hierarchy

* **IPublishConfig**

## Index

### Properties

* [access](ipublishconfig.md#optional-access)
* [registry](ipublishconfig.md#optional-registry)
* [tag](ipublishconfig.md#optional-tag)

## Properties

### `Optional` access

• **access**? : *undefined | string*

*Defined in [index.ts:608](https://github.com/ajaxlab/package-json-type/blob/5df272e/src/index.ts#L608)*

___

### `Optional` registry

• **registry**? : *undefined | string*

*Defined in [index.ts:609](https://github.com/ajaxlab/package-json-type/blob/5df272e/src/index.ts#L609)*

___

### `Optional` tag

• **tag**? : *undefined | string*

*Defined in [index.ts:610](https://github.com/ajaxlab/package-json-type/blob/5df272e/src/index.ts#L610)*
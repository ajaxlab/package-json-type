

This is a set of config values that will be used at publish-time. It's especially handy if you want to set the tag, registry or access, so that you can ensure that a given package is not tagged with “latest”, published to the global public registry or that a scoped module is private by default. Any config values can be overridden, but only "tag", "registry" and "access" probably matter for the purposes of publishing. See npm-config to see the list of config options that can be overridden.

*   Public Registry

```json
{
  "publishConfig":{
    "registry":"https://registry.npmjs.org"
  }
}
```

*   Your Private Registry

```json
{
  "publishConfig":{
    "registry":"http://your-registry.local"
  }
}
```

*__see__*: [https://docs.npmjs.com/files/package.json#publishconfig](https://docs.npmjs.com/files/package.json#publishconfig)

*__see__*: [https://yarnpkg.com/en/docs/package-json#toc-publishconfig](https://yarnpkg.com/en/docs/package-json#toc-publishconfig)

# Hierarchy

**IPublishConfig**

# Properties

<a id="access"></a>

## `<Optional>` access

**● access**: *`undefined` \| `string`*

*Defined in [index.ts:607](https://github.com/ajaxlab/package-json-type/blob/a3cfb07/src/index.ts#L607)*

___
<a id="registry"></a>

## `<Optional>` registry

**● registry**: *`undefined` \| `string`*

*Defined in [index.ts:608](https://github.com/ajaxlab/package-json-type/blob/a3cfb07/src/index.ts#L608)*

___
<a id="tag"></a>

## `<Optional>` tag

**● tag**: *`undefined` \| `string`*

*Defined in [index.ts:609](https://github.com/ajaxlab/package-json-type/blob/a3cfb07/src/index.ts#L609)*

___




Specify the place where your code lives. This is helpful for people who want to contribute.

*   Git

```json
{
  "repository": {
    "type": "git",
    "url": "https://github.com/ajaxlab/package-json-type.git"
  }
}
```

*   Svn

```json
{
  "repository": {
    "type": "svn",
    "url": "https://v8.googlecode.com/svn/trunk/"
  }
}
```

*   Monorepo

```json
{
  "repository": {
    "type": "git",
    "url": "https://github.com/facebook/react.git",
    "directory": "packages/react-dom"
  }
}
```

*__see__*: [https://yarnpkg.com/en/docs/package-json#toc-repository](https://yarnpkg.com/en/docs/package-json#toc-repository)

*__see__*: [https://docs.npmjs.com/files/package.json#repository](https://docs.npmjs.com/files/package.json#repository)

# Hierarchy

**IRepository**

# Properties

<a id="directory"></a>

## `<Optional>` directory

**● directory**: *`undefined` \| `string`*

*Defined in [index.ts:653](https://github.com/ajaxlab/package-json-type/blob/a3cfb07/src/index.ts#L653)*

___
<a id="type"></a>

##  type

**● type**: *`string`*

*Defined in [index.ts:654](https://github.com/ajaxlab/package-json-type/blob/a3cfb07/src/index.ts#L654)*

___
<a id="url"></a>

##  url

**● url**: *`string`*

*Defined in [index.ts:655](https://github.com/ajaxlab/package-json-type/blob/a3cfb07/src/index.ts#L655)*

___


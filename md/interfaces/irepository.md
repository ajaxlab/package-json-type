[**package-json-type**](../README.md)

***

[package-json-type](../globals.md) / IRepository

# Interface: IRepository

Defined in: [index.ts:1134](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L1134)

Specify the place where your code lives.
This is helpful for people who want to contribute.

* Git

```json
{
  "repository": {
    "type": "git",
    "url": "https://github.com/ajaxlab/package-json-type.git"
  }
}
```

* Svn

```json
{
  "repository": {
    "type": "svn",
    "url": "https://v8.googlecode.com/svn/trunk/"
  }
}
```

* Monorepo

```json
{
  "repository": {
    "type": "git",
    "url": "https://github.com/facebook/react.git",
    "directory": "packages/react-dom"
  }
}
```

## See

 - https://yarnpkg.com/en/docs/package-json#toc-repository
 - https://docs.npmjs.com/files/package.json#repository

## Properties

### directory?

> `optional` **directory**: `string`

Defined in: [index.ts:1135](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L1135)

***

### type

> **type**: `string`

Defined in: [index.ts:1136](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L1136)

***

### url

> **url**: `string`

Defined in: [index.ts:1137](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L1137)

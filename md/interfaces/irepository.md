[**package-json-type**](../README.md)

***

[package-json-type](../globals.md) / IRepository

# Interface: IRepository

Defined in: [index.ts:1462](https://github.com/ajaxlab/package-json-type/blob/b079c269fd789de45d0c3206fdcd6decbf5d8209/src/index.ts#L1462)

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

Defined in: [index.ts:1463](https://github.com/ajaxlab/package-json-type/blob/b079c269fd789de45d0c3206fdcd6decbf5d8209/src/index.ts#L1463)

***

### type

> **type**: `string`

Defined in: [index.ts:1464](https://github.com/ajaxlab/package-json-type/blob/b079c269fd789de45d0c3206fdcd6decbf5d8209/src/index.ts#L1464)

***

### url

> **url**: `string`

Defined in: [index.ts:1465](https://github.com/ajaxlab/package-json-type/blob/b079c269fd789de45d0c3206fdcd6decbf5d8209/src/index.ts#L1465)

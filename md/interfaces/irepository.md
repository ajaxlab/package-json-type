> # Interface: IRepository

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

**`see`** https://yarnpkg.com/en/docs/package-json#toc-repository

**`see`** https://docs.npmjs.com/files/package.json#repository

## Hierarchy

* **IRepository**

## Index

### Properties

* [directory](irepository.md#optional-directory)
* [type](irepository.md#type)
* [url](irepository.md#url)

## Properties

### `Optional` directory

• **directory**? : *undefined | string*

*Defined in [index.ts:654](https://github.com/ajaxlab/package-json-type/blob/5df272e/src/index.ts#L654)*

___

###  type

• **type**: *string*

*Defined in [index.ts:655](https://github.com/ajaxlab/package-json-type/blob/5df272e/src/index.ts#L655)*

___

###  url

• **url**: *string*

*Defined in [index.ts:656](https://github.com/ajaxlab/package-json-type/blob/5df272e/src/index.ts#L656)*
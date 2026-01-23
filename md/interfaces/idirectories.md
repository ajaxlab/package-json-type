[**package-json-type**](../README.md)

***

[package-json-type](../globals.md) / IDirectories

# Interface: IDirectories

Defined in: [index.ts:102](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L102)

You can specify exact locations to put binary files, man pages,
documentation, examples, etc. Package manager tools must use
these directory definitions to find various package components.
```
{
  "directories": {
    "lib": "path/to/lib/",
    "bin": "path/to/bin/",
    "man": "path/to/man/",
    "doc": "path/to/doc/",
    "example": "path/to/example/"
  }
}
```

## See

 - http://wiki.commonjs.org/wiki/Packages/1.0
 - https://docs.npmjs.com/files/package.json#directories
 - https://yarnpkg.com/en/docs/package-json#toc-directories

## Properties

### bin?

> `optional` **bin**: `string`

Defined in: [index.ts:113](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L113)

If you specify a bin directory in directories.bin,
all the files in that folder will be added.
Because of the way the bin directive works,
specifying both a bin path and setting directories.bin
is an error. If you want to specify individual files,
use bin, and for all the files in an existing bin directory,
use directories.bin.

***

### doc?

> `optional` **doc**: `string`

Defined in: [index.ts:118](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L118)

Put markdown doc files in here.

***

### example?

> `optional` **example**: `string`

Defined in: [index.ts:123](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L123)

Put example scripts in here.

***

### lib?

> `optional` **lib**: `string`

Defined in: [index.ts:130](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L130)

Tell people where the bulk of your library is.
Nothing special is done with the `lib` folder
in any way, but it's useful meta info.

***

### man?

> `optional` **man**: `string`

Defined in: [index.ts:136](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L136)

A folder that is full of man pages. Sugar to generate
a `man` array by walking the folder.

***

### test?

> `optional` **test**: `string`

Defined in: [index.ts:141](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L141)

Put your tests in here.

[**package-json-type**](../README.md)

***

[package-json-type](../globals.md) / IDirectories

# Interface: IDirectories

Defined in: [index.ts:120](https://github.com/ajaxlab/package-json-type/blob/b079c269fd789de45d0c3206fdcd6decbf5d8209/src/index.ts#L120)

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

Defined in: [index.ts:131](https://github.com/ajaxlab/package-json-type/blob/b079c269fd789de45d0c3206fdcd6decbf5d8209/src/index.ts#L131)

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

Defined in: [index.ts:136](https://github.com/ajaxlab/package-json-type/blob/b079c269fd789de45d0c3206fdcd6decbf5d8209/src/index.ts#L136)

Put markdown doc files in here.

***

### example?

> `optional` **example**: `string`

Defined in: [index.ts:141](https://github.com/ajaxlab/package-json-type/blob/b079c269fd789de45d0c3206fdcd6decbf5d8209/src/index.ts#L141)

Put example scripts in here.

***

### lib?

> `optional` **lib**: `string`

Defined in: [index.ts:148](https://github.com/ajaxlab/package-json-type/blob/b079c269fd789de45d0c3206fdcd6decbf5d8209/src/index.ts#L148)

Tell people where the bulk of your library is.
Nothing special is done with the `lib` folder
in any way, but it's useful meta info.

***

### man?

> `optional` **man**: `string`

Defined in: [index.ts:154](https://github.com/ajaxlab/package-json-type/blob/b079c269fd789de45d0c3206fdcd6decbf5d8209/src/index.ts#L154)

A folder that is full of man pages. Sugar to generate
a `man` array by walking the folder.

***

### test?

> `optional` **test**: `string`

Defined in: [index.ts:159](https://github.com/ajaxlab/package-json-type/blob/b079c269fd789de45d0c3206fdcd6decbf5d8209/src/index.ts#L159)

Put your tests in here.

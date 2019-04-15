

You can specify exact locations to put binary files, man pages, documentation, examples, etc. Package manager tools must use these directory definitions to find various package components.

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

*__see__*: [http://wiki.commonjs.org/wiki/Packages/1.0](http://wiki.commonjs.org/wiki/Packages/1.0)

*__see__*: [https://docs.npmjs.com/files/package.json#directories](https://docs.npmjs.com/files/package.json#directories)

*__see__*: [https://yarnpkg.com/en/docs/package-json#toc-directories](https://yarnpkg.com/en/docs/package-json#toc-directories)

# Hierarchy

**IDirectories**

# Properties

<a id="bin"></a>

## `<Optional>` bin

**● bin**: *`undefined` \| `string`*

*Defined in [index.ts:113](https://github.com/ajaxlab/package-json-type/blob/a3cfb07/src/index.ts#L113)*

If you specify a bin directory in directories.bin, all the files in that folder will be added. Because of the way the bin directive works, specifying both a bin path and setting directories.bin is an error. If you want to specify individual files, use bin, and for all the files in an existing bin directory, use directories.bin.

___
<a id="doc"></a>

## `<Optional>` doc

**● doc**: *`undefined` \| `string`*

*Defined in [index.ts:118](https://github.com/ajaxlab/package-json-type/blob/a3cfb07/src/index.ts#L118)*

Put markdown doc files in here.

___
<a id="example"></a>

## `<Optional>` example

**● example**: *`undefined` \| `string`*

*Defined in [index.ts:123](https://github.com/ajaxlab/package-json-type/blob/a3cfb07/src/index.ts#L123)*

Put example scripts in here.

___
<a id="lib"></a>

## `<Optional>` lib

**● lib**: *`undefined` \| `string`*

*Defined in [index.ts:130](https://github.com/ajaxlab/package-json-type/blob/a3cfb07/src/index.ts#L130)*

Tell people where the bulk of your library is. Nothing special is done with the lib folder in any way, but it's useful meta info.

___
<a id="man"></a>

## `<Optional>` man

**● man**: *`undefined` \| `string`*

*Defined in [index.ts:136](https://github.com/ajaxlab/package-json-type/blob/a3cfb07/src/index.ts#L136)*

A folder that is full of man pages. Sugar to generate a "man" array by walking the folder.

___
<a id="test"></a>

## `<Optional>` test

**● test**: *`undefined` \| `string`*

*Defined in [index.ts:141](https://github.com/ajaxlab/package-json-type/blob/a3cfb07/src/index.ts#L141)*

Put your tests in here.

___


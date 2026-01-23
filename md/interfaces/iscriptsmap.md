[**package-json-type**](../README.md)

***

[package-json-type](../globals.md) / IScriptsMap

# Interface: IScriptsMap

Defined in: [index.ts:1486](https://github.com/ajaxlab/package-json-type/blob/44b7b1d8e2c534bb3c6eadf0eee5fa4ec56f31af/src/index.ts#L1486)

The "`scripts`" property is a dictionary containing script commands
that are run at various times in the lifecycle of your package.
The key is the lifecycle event, and the value is the command to run at that point.
```json
{
  "scripts": {
    "install": "install.js",
    "uninstall": "uninstall.js",
    "build": "build.js",
    "doc": "make-doc.js",
    "test": "test.js",
  }
}
```

## See

 - https://docs.npmjs.com/misc/scripts
 - https://yarnpkg.com/en/docs/package-json#toc-scripts

## Properties

### install

> **install**: `string`

Defined in: [index.ts:1487](https://github.com/ajaxlab/package-json-type/blob/44b7b1d8e2c534bb3c6eadf0eee5fa4ec56f31af/src/index.ts#L1487)

***

### postinstall

> **postinstall**: `string`

Defined in: [index.ts:1488](https://github.com/ajaxlab/package-json-type/blob/44b7b1d8e2c534bb3c6eadf0eee5fa4ec56f31af/src/index.ts#L1488)

***

### postpack

> **postpack**: `string`

Defined in: [index.ts:1489](https://github.com/ajaxlab/package-json-type/blob/44b7b1d8e2c534bb3c6eadf0eee5fa4ec56f31af/src/index.ts#L1489)

***

### postrestart

> **postrestart**: `string`

Defined in: [index.ts:1490](https://github.com/ajaxlab/package-json-type/blob/44b7b1d8e2c534bb3c6eadf0eee5fa4ec56f31af/src/index.ts#L1490)

***

### postshrinkwrap

> **postshrinkwrap**: `string`

Defined in: [index.ts:1491](https://github.com/ajaxlab/package-json-type/blob/44b7b1d8e2c534bb3c6eadf0eee5fa4ec56f31af/src/index.ts#L1491)

***

### poststart

> **poststart**: `string`

Defined in: [index.ts:1492](https://github.com/ajaxlab/package-json-type/blob/44b7b1d8e2c534bb3c6eadf0eee5fa4ec56f31af/src/index.ts#L1492)

***

### poststop

> **poststop**: `string`

Defined in: [index.ts:1493](https://github.com/ajaxlab/package-json-type/blob/44b7b1d8e2c534bb3c6eadf0eee5fa4ec56f31af/src/index.ts#L1493)

***

### posttest

> **posttest**: `string`

Defined in: [index.ts:1494](https://github.com/ajaxlab/package-json-type/blob/44b7b1d8e2c534bb3c6eadf0eee5fa4ec56f31af/src/index.ts#L1494)

***

### postuninstall

> **postuninstall**: `string`

Defined in: [index.ts:1495](https://github.com/ajaxlab/package-json-type/blob/44b7b1d8e2c534bb3c6eadf0eee5fa4ec56f31af/src/index.ts#L1495)

***

### postversion

> **postversion**: `string`

Defined in: [index.ts:1496](https://github.com/ajaxlab/package-json-type/blob/44b7b1d8e2c534bb3c6eadf0eee5fa4ec56f31af/src/index.ts#L1496)

***

### preinstall

> **preinstall**: `string`

Defined in: [index.ts:1497](https://github.com/ajaxlab/package-json-type/blob/44b7b1d8e2c534bb3c6eadf0eee5fa4ec56f31af/src/index.ts#L1497)

***

### prepack

> **prepack**: `string`

Defined in: [index.ts:1498](https://github.com/ajaxlab/package-json-type/blob/44b7b1d8e2c534bb3c6eadf0eee5fa4ec56f31af/src/index.ts#L1498)

***

### prepare

> **prepare**: `string`

Defined in: [index.ts:1499](https://github.com/ajaxlab/package-json-type/blob/44b7b1d8e2c534bb3c6eadf0eee5fa4ec56f31af/src/index.ts#L1499)

***

### prepublish

> **prepublish**: `string`

Defined in: [index.ts:1500](https://github.com/ajaxlab/package-json-type/blob/44b7b1d8e2c534bb3c6eadf0eee5fa4ec56f31af/src/index.ts#L1500)

***

### prepublishOnly

> **prepublishOnly**: `string`

Defined in: [index.ts:1501](https://github.com/ajaxlab/package-json-type/blob/44b7b1d8e2c534bb3c6eadf0eee5fa4ec56f31af/src/index.ts#L1501)

***

### prerestart

> **prerestart**: `string`

Defined in: [index.ts:1502](https://github.com/ajaxlab/package-json-type/blob/44b7b1d8e2c534bb3c6eadf0eee5fa4ec56f31af/src/index.ts#L1502)

***

### preshrinkwrap

> **preshrinkwrap**: `string`

Defined in: [index.ts:1503](https://github.com/ajaxlab/package-json-type/blob/44b7b1d8e2c534bb3c6eadf0eee5fa4ec56f31af/src/index.ts#L1503)

***

### prestart

> **prestart**: `string`

Defined in: [index.ts:1504](https://github.com/ajaxlab/package-json-type/blob/44b7b1d8e2c534bb3c6eadf0eee5fa4ec56f31af/src/index.ts#L1504)

***

### prestop

> **prestop**: `string`

Defined in: [index.ts:1505](https://github.com/ajaxlab/package-json-type/blob/44b7b1d8e2c534bb3c6eadf0eee5fa4ec56f31af/src/index.ts#L1505)

***

### pretest

> **pretest**: `string`

Defined in: [index.ts:1506](https://github.com/ajaxlab/package-json-type/blob/44b7b1d8e2c534bb3c6eadf0eee5fa4ec56f31af/src/index.ts#L1506)

***

### preuninstall

> **preuninstall**: `string`

Defined in: [index.ts:1507](https://github.com/ajaxlab/package-json-type/blob/44b7b1d8e2c534bb3c6eadf0eee5fa4ec56f31af/src/index.ts#L1507)

***

### preversion

> **preversion**: `string`

Defined in: [index.ts:1508](https://github.com/ajaxlab/package-json-type/blob/44b7b1d8e2c534bb3c6eadf0eee5fa4ec56f31af/src/index.ts#L1508)

***

### publish

> **publish**: `string`

Defined in: [index.ts:1509](https://github.com/ajaxlab/package-json-type/blob/44b7b1d8e2c534bb3c6eadf0eee5fa4ec56f31af/src/index.ts#L1509)

***

### restart

> **restart**: `string`

Defined in: [index.ts:1510](https://github.com/ajaxlab/package-json-type/blob/44b7b1d8e2c534bb3c6eadf0eee5fa4ec56f31af/src/index.ts#L1510)

***

### shrinkwrap

> **shrinkwrap**: `string`

Defined in: [index.ts:1511](https://github.com/ajaxlab/package-json-type/blob/44b7b1d8e2c534bb3c6eadf0eee5fa4ec56f31af/src/index.ts#L1511)

***

### start

> **start**: `string`

Defined in: [index.ts:1512](https://github.com/ajaxlab/package-json-type/blob/44b7b1d8e2c534bb3c6eadf0eee5fa4ec56f31af/src/index.ts#L1512)

***

### stop

> **stop**: `string`

Defined in: [index.ts:1513](https://github.com/ajaxlab/package-json-type/blob/44b7b1d8e2c534bb3c6eadf0eee5fa4ec56f31af/src/index.ts#L1513)

***

### test

> **test**: `string`

Defined in: [index.ts:1514](https://github.com/ajaxlab/package-json-type/blob/44b7b1d8e2c534bb3c6eadf0eee5fa4ec56f31af/src/index.ts#L1514)

***

### uninstall

> **uninstall**: `string`

Defined in: [index.ts:1515](https://github.com/ajaxlab/package-json-type/blob/44b7b1d8e2c534bb3c6eadf0eee5fa4ec56f31af/src/index.ts#L1515)

***

### version

> **version**: `string`

Defined in: [index.ts:1516](https://github.com/ajaxlab/package-json-type/blob/44b7b1d8e2c534bb3c6eadf0eee5fa4ec56f31af/src/index.ts#L1516)

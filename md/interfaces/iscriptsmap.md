[**package-json-type**](../README.md)

***

[package-json-type](../globals.md) / IScriptsMap

# Interface: IScriptsMap

Defined in: [index.ts:1158](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L1158)

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

Defined in: [index.ts:1159](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L1159)

***

### postinstall

> **postinstall**: `string`

Defined in: [index.ts:1160](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L1160)

***

### postpack

> **postpack**: `string`

Defined in: [index.ts:1161](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L1161)

***

### postrestart

> **postrestart**: `string`

Defined in: [index.ts:1162](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L1162)

***

### postshrinkwrap

> **postshrinkwrap**: `string`

Defined in: [index.ts:1163](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L1163)

***

### poststart

> **poststart**: `string`

Defined in: [index.ts:1164](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L1164)

***

### poststop

> **poststop**: `string`

Defined in: [index.ts:1165](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L1165)

***

### posttest

> **posttest**: `string`

Defined in: [index.ts:1166](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L1166)

***

### postuninstall

> **postuninstall**: `string`

Defined in: [index.ts:1167](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L1167)

***

### postversion

> **postversion**: `string`

Defined in: [index.ts:1168](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L1168)

***

### preinstall

> **preinstall**: `string`

Defined in: [index.ts:1169](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L1169)

***

### prepack

> **prepack**: `string`

Defined in: [index.ts:1170](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L1170)

***

### prepare

> **prepare**: `string`

Defined in: [index.ts:1171](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L1171)

***

### prepublish

> **prepublish**: `string`

Defined in: [index.ts:1172](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L1172)

***

### prepublishOnly

> **prepublishOnly**: `string`

Defined in: [index.ts:1173](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L1173)

***

### prerestart

> **prerestart**: `string`

Defined in: [index.ts:1174](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L1174)

***

### preshrinkwrap

> **preshrinkwrap**: `string`

Defined in: [index.ts:1175](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L1175)

***

### prestart

> **prestart**: `string`

Defined in: [index.ts:1176](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L1176)

***

### prestop

> **prestop**: `string`

Defined in: [index.ts:1177](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L1177)

***

### pretest

> **pretest**: `string`

Defined in: [index.ts:1178](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L1178)

***

### preuninstall

> **preuninstall**: `string`

Defined in: [index.ts:1179](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L1179)

***

### preversion

> **preversion**: `string`

Defined in: [index.ts:1180](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L1180)

***

### publish

> **publish**: `string`

Defined in: [index.ts:1181](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L1181)

***

### restart

> **restart**: `string`

Defined in: [index.ts:1182](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L1182)

***

### shrinkwrap

> **shrinkwrap**: `string`

Defined in: [index.ts:1183](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L1183)

***

### start

> **start**: `string`

Defined in: [index.ts:1184](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L1184)

***

### stop

> **stop**: `string`

Defined in: [index.ts:1185](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L1185)

***

### test

> **test**: `string`

Defined in: [index.ts:1186](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L1186)

***

### uninstall

> **uninstall**: `string`

Defined in: [index.ts:1187](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L1187)

***

### version

> **version**: `string`

Defined in: [index.ts:1188](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L1188)

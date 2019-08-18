> # Interface: IScriptsMap

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

**`see`** https://docs.npmjs.com/misc/scripts

**`see`** https://yarnpkg.com/en/docs/package-json#toc-scripts

## Hierarchy

* **IScriptsMap**

## Index

### Properties

* [install](iscriptsmap.md#install)
* [postinstall](iscriptsmap.md#postinstall)
* [postpack](iscriptsmap.md#postpack)
* [postrestart](iscriptsmap.md#postrestart)
* [postshrinkwrap](iscriptsmap.md#postshrinkwrap)
* [poststart](iscriptsmap.md#poststart)
* [poststop](iscriptsmap.md#poststop)
* [posttest](iscriptsmap.md#posttest)
* [postuninstall](iscriptsmap.md#postuninstall)
* [postversion](iscriptsmap.md#postversion)
* [preinstall](iscriptsmap.md#preinstall)
* [prepack](iscriptsmap.md#prepack)
* [prepare](iscriptsmap.md#prepare)
* [prepublish](iscriptsmap.md#prepublish)
* [prepublishOnly](iscriptsmap.md#prepublishonly)
* [prerestart](iscriptsmap.md#prerestart)
* [preshrinkwrap](iscriptsmap.md#preshrinkwrap)
* [prestart](iscriptsmap.md#prestart)
* [prestop](iscriptsmap.md#prestop)
* [pretest](iscriptsmap.md#pretest)
* [preuninstall](iscriptsmap.md#preuninstall)
* [preversion](iscriptsmap.md#preversion)
* [publish](iscriptsmap.md#publish)
* [restart](iscriptsmap.md#restart)
* [shrinkwrap](iscriptsmap.md#shrinkwrap)
* [start](iscriptsmap.md#start)
* [stop](iscriptsmap.md#stop)
* [test](iscriptsmap.md#test)
* [uninstall](iscriptsmap.md#uninstall)
* [version](iscriptsmap.md#version)

## Properties

###  install

• **install**: *string*

*Defined in [index.ts:678](https://github.com/ajaxlab/package-json-type/blob/5df272e/src/index.ts#L678)*

___

###  postinstall

• **postinstall**: *string*

*Defined in [index.ts:679](https://github.com/ajaxlab/package-json-type/blob/5df272e/src/index.ts#L679)*

___

###  postpack

• **postpack**: *string*

*Defined in [index.ts:680](https://github.com/ajaxlab/package-json-type/blob/5df272e/src/index.ts#L680)*

___

###  postrestart

• **postrestart**: *string*

*Defined in [index.ts:681](https://github.com/ajaxlab/package-json-type/blob/5df272e/src/index.ts#L681)*

___

###  postshrinkwrap

• **postshrinkwrap**: *string*

*Defined in [index.ts:682](https://github.com/ajaxlab/package-json-type/blob/5df272e/src/index.ts#L682)*

___

###  poststart

• **poststart**: *string*

*Defined in [index.ts:683](https://github.com/ajaxlab/package-json-type/blob/5df272e/src/index.ts#L683)*

___

###  poststop

• **poststop**: *string*

*Defined in [index.ts:684](https://github.com/ajaxlab/package-json-type/blob/5df272e/src/index.ts#L684)*

___

###  posttest

• **posttest**: *string*

*Defined in [index.ts:685](https://github.com/ajaxlab/package-json-type/blob/5df272e/src/index.ts#L685)*

___

###  postuninstall

• **postuninstall**: *string*

*Defined in [index.ts:686](https://github.com/ajaxlab/package-json-type/blob/5df272e/src/index.ts#L686)*

___

###  postversion

• **postversion**: *string*

*Defined in [index.ts:687](https://github.com/ajaxlab/package-json-type/blob/5df272e/src/index.ts#L687)*

___

###  preinstall

• **preinstall**: *string*

*Defined in [index.ts:688](https://github.com/ajaxlab/package-json-type/blob/5df272e/src/index.ts#L688)*

___

###  prepack

• **prepack**: *string*

*Defined in [index.ts:689](https://github.com/ajaxlab/package-json-type/blob/5df272e/src/index.ts#L689)*

___

###  prepare

• **prepare**: *string*

*Defined in [index.ts:690](https://github.com/ajaxlab/package-json-type/blob/5df272e/src/index.ts#L690)*

___

###  prepublish

• **prepublish**: *string*

*Defined in [index.ts:691](https://github.com/ajaxlab/package-json-type/blob/5df272e/src/index.ts#L691)*

___

###  prepublishOnly

• **prepublishOnly**: *string*

*Defined in [index.ts:692](https://github.com/ajaxlab/package-json-type/blob/5df272e/src/index.ts#L692)*

___

###  prerestart

• **prerestart**: *string*

*Defined in [index.ts:693](https://github.com/ajaxlab/package-json-type/blob/5df272e/src/index.ts#L693)*

___

###  preshrinkwrap

• **preshrinkwrap**: *string*

*Defined in [index.ts:694](https://github.com/ajaxlab/package-json-type/blob/5df272e/src/index.ts#L694)*

___

###  prestart

• **prestart**: *string*

*Defined in [index.ts:695](https://github.com/ajaxlab/package-json-type/blob/5df272e/src/index.ts#L695)*

___

###  prestop

• **prestop**: *string*

*Defined in [index.ts:696](https://github.com/ajaxlab/package-json-type/blob/5df272e/src/index.ts#L696)*

___

###  pretest

• **pretest**: *string*

*Defined in [index.ts:697](https://github.com/ajaxlab/package-json-type/blob/5df272e/src/index.ts#L697)*

___

###  preuninstall

• **preuninstall**: *string*

*Defined in [index.ts:698](https://github.com/ajaxlab/package-json-type/blob/5df272e/src/index.ts#L698)*

___

###  preversion

• **preversion**: *string*

*Defined in [index.ts:699](https://github.com/ajaxlab/package-json-type/blob/5df272e/src/index.ts#L699)*

___

###  publish

• **publish**: *string*

*Defined in [index.ts:700](https://github.com/ajaxlab/package-json-type/blob/5df272e/src/index.ts#L700)*

___

###  restart

• **restart**: *string*

*Defined in [index.ts:701](https://github.com/ajaxlab/package-json-type/blob/5df272e/src/index.ts#L701)*

___

###  shrinkwrap

• **shrinkwrap**: *string*

*Defined in [index.ts:702](https://github.com/ajaxlab/package-json-type/blob/5df272e/src/index.ts#L702)*

___

###  start

• **start**: *string*

*Defined in [index.ts:703](https://github.com/ajaxlab/package-json-type/blob/5df272e/src/index.ts#L703)*

___

###  stop

• **stop**: *string*

*Defined in [index.ts:704](https://github.com/ajaxlab/package-json-type/blob/5df272e/src/index.ts#L704)*

___

###  test

• **test**: *string*

*Defined in [index.ts:705](https://github.com/ajaxlab/package-json-type/blob/5df272e/src/index.ts#L705)*

___

###  uninstall

• **uninstall**: *string*

*Defined in [index.ts:706](https://github.com/ajaxlab/package-json-type/blob/5df272e/src/index.ts#L706)*

___

###  version

• **version**: *string*

*Defined in [index.ts:707](https://github.com/ajaxlab/package-json-type/blob/5df272e/src/index.ts#L707)*
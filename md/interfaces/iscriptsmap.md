

The "scripts" property is a dictionary containing script commands that are run at various times in the lifecycle of your package. The key is the lifecycle event, and the value is the command to run at that point.

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

*__see__*: [https://docs.npmjs.com/misc/scripts](https://docs.npmjs.com/misc/scripts)

*__see__*: [https://yarnpkg.com/en/docs/package-json#toc-scripts](https://yarnpkg.com/en/docs/package-json#toc-scripts)

# Hierarchy

**IScriptsMap**

# Properties

<a id="install"></a>

##  install

**● install**: *`string`*

*Defined in [index.ts:677](https://github.com/ajaxlab/package-json-type/blob/ad7a0e6/src/index.ts#L677)*

___
<a id="postinstall"></a>

##  postinstall

**● postinstall**: *`string`*

*Defined in [index.ts:678](https://github.com/ajaxlab/package-json-type/blob/ad7a0e6/src/index.ts#L678)*

___
<a id="postpack"></a>

##  postpack

**● postpack**: *`string`*

*Defined in [index.ts:679](https://github.com/ajaxlab/package-json-type/blob/ad7a0e6/src/index.ts#L679)*

___
<a id="postrestart"></a>

##  postrestart

**● postrestart**: *`string`*

*Defined in [index.ts:680](https://github.com/ajaxlab/package-json-type/blob/ad7a0e6/src/index.ts#L680)*

___
<a id="postshrinkwrap"></a>

##  postshrinkwrap

**● postshrinkwrap**: *`string`*

*Defined in [index.ts:681](https://github.com/ajaxlab/package-json-type/blob/ad7a0e6/src/index.ts#L681)*

___
<a id="poststart"></a>

##  poststart

**● poststart**: *`string`*

*Defined in [index.ts:682](https://github.com/ajaxlab/package-json-type/blob/ad7a0e6/src/index.ts#L682)*

___
<a id="poststop"></a>

##  poststop

**● poststop**: *`string`*

*Defined in [index.ts:683](https://github.com/ajaxlab/package-json-type/blob/ad7a0e6/src/index.ts#L683)*

___
<a id="posttest"></a>

##  posttest

**● posttest**: *`string`*

*Defined in [index.ts:684](https://github.com/ajaxlab/package-json-type/blob/ad7a0e6/src/index.ts#L684)*

___
<a id="postuninstall"></a>

##  postuninstall

**● postuninstall**: *`string`*

*Defined in [index.ts:685](https://github.com/ajaxlab/package-json-type/blob/ad7a0e6/src/index.ts#L685)*

___
<a id="postversion"></a>

##  postversion

**● postversion**: *`string`*

*Defined in [index.ts:686](https://github.com/ajaxlab/package-json-type/blob/ad7a0e6/src/index.ts#L686)*

___
<a id="preinstall"></a>

##  preinstall

**● preinstall**: *`string`*

*Defined in [index.ts:687](https://github.com/ajaxlab/package-json-type/blob/ad7a0e6/src/index.ts#L687)*

___
<a id="prepack"></a>

##  prepack

**● prepack**: *`string`*

*Defined in [index.ts:688](https://github.com/ajaxlab/package-json-type/blob/ad7a0e6/src/index.ts#L688)*

___
<a id="prepare"></a>

##  prepare

**● prepare**: *`string`*

*Defined in [index.ts:689](https://github.com/ajaxlab/package-json-type/blob/ad7a0e6/src/index.ts#L689)*

___
<a id="prepublish"></a>

##  prepublish

**● prepublish**: *`string`*

*Defined in [index.ts:690](https://github.com/ajaxlab/package-json-type/blob/ad7a0e6/src/index.ts#L690)*

___
<a id="prepublishonly"></a>

##  prepublishOnly

**● prepublishOnly**: *`string`*

*Defined in [index.ts:691](https://github.com/ajaxlab/package-json-type/blob/ad7a0e6/src/index.ts#L691)*

___
<a id="prerestart"></a>

##  prerestart

**● prerestart**: *`string`*

*Defined in [index.ts:692](https://github.com/ajaxlab/package-json-type/blob/ad7a0e6/src/index.ts#L692)*

___
<a id="preshrinkwrap"></a>

##  preshrinkwrap

**● preshrinkwrap**: *`string`*

*Defined in [index.ts:693](https://github.com/ajaxlab/package-json-type/blob/ad7a0e6/src/index.ts#L693)*

___
<a id="prestart"></a>

##  prestart

**● prestart**: *`string`*

*Defined in [index.ts:694](https://github.com/ajaxlab/package-json-type/blob/ad7a0e6/src/index.ts#L694)*

___
<a id="prestop"></a>

##  prestop

**● prestop**: *`string`*

*Defined in [index.ts:695](https://github.com/ajaxlab/package-json-type/blob/ad7a0e6/src/index.ts#L695)*

___
<a id="pretest"></a>

##  pretest

**● pretest**: *`string`*

*Defined in [index.ts:696](https://github.com/ajaxlab/package-json-type/blob/ad7a0e6/src/index.ts#L696)*

___
<a id="preuninstall"></a>

##  preuninstall

**● preuninstall**: *`string`*

*Defined in [index.ts:697](https://github.com/ajaxlab/package-json-type/blob/ad7a0e6/src/index.ts#L697)*

___
<a id="preversion"></a>

##  preversion

**● preversion**: *`string`*

*Defined in [index.ts:698](https://github.com/ajaxlab/package-json-type/blob/ad7a0e6/src/index.ts#L698)*

___
<a id="publish"></a>

##  publish

**● publish**: *`string`*

*Defined in [index.ts:699](https://github.com/ajaxlab/package-json-type/blob/ad7a0e6/src/index.ts#L699)*

___
<a id="restart"></a>

##  restart

**● restart**: *`string`*

*Defined in [index.ts:700](https://github.com/ajaxlab/package-json-type/blob/ad7a0e6/src/index.ts#L700)*

___
<a id="shrinkwrap"></a>

##  shrinkwrap

**● shrinkwrap**: *`string`*

*Defined in [index.ts:701](https://github.com/ajaxlab/package-json-type/blob/ad7a0e6/src/index.ts#L701)*

___
<a id="start"></a>

##  start

**● start**: *`string`*

*Defined in [index.ts:702](https://github.com/ajaxlab/package-json-type/blob/ad7a0e6/src/index.ts#L702)*

___
<a id="stop"></a>

##  stop

**● stop**: *`string`*

*Defined in [index.ts:703](https://github.com/ajaxlab/package-json-type/blob/ad7a0e6/src/index.ts#L703)*

___
<a id="test"></a>

##  test

**● test**: *`string`*

*Defined in [index.ts:704](https://github.com/ajaxlab/package-json-type/blob/ad7a0e6/src/index.ts#L704)*

___
<a id="uninstall"></a>

##  uninstall

**● uninstall**: *`string`*

*Defined in [index.ts:705](https://github.com/ajaxlab/package-json-type/blob/ad7a0e6/src/index.ts#L705)*

___
<a id="version"></a>

##  version

**● version**: *`string`*

*Defined in [index.ts:706](https://github.com/ajaxlab/package-json-type/blob/ad7a0e6/src/index.ts#L706)*

___


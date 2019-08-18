> # Interface: IPackageJson

A TypeScript definition for the package descriptor file.

**`see`** http://wiki.commonjs.org/wiki/Packages/1.0

**`see`** https://docs.npmjs.com/files/package.json

**`see`** https://yarnpkg.com/en/docs/package-json

## Hierarchy

* **IPackageJson**

## Indexable

* \[ **field**: *string*\]: any

A TypeScript definition for the package descriptor file.

## Index

### Properties

* [author](ipackagejson.md#optional-author)
* [bin](ipackagejson.md#optional-bin)
* [browser](ipackagejson.md#optional-browser)
* [bugs](ipackagejson.md#optional-bugs)
* [bundledDependencies](ipackagejson.md#optional-bundleddependencies)
* [config](ipackagejson.md#optional-config)
* [contributors](ipackagejson.md#optional-contributors)
* [cpu](ipackagejson.md#optional-cpu)
* [dependencies](ipackagejson.md#optional-dependencies)
* [description](ipackagejson.md#optional-description)
* [devDependencies](ipackagejson.md#optional-devdependencies)
* [directories](ipackagejson.md#optional-directories)
* [engines](ipackagejson.md#optional-engines)
* [files](ipackagejson.md#optional-files)
* [flat](ipackagejson.md#optional-flat)
* [homepage](ipackagejson.md#optional-homepage)
* [keywords](ipackagejson.md#optional-keywords)
* [license](ipackagejson.md#optional-license)
* [main](ipackagejson.md#optional-main)
* [man](ipackagejson.md#optional-man)
* [name](ipackagejson.md#optional-name)
* [optionalDependencies](ipackagejson.md#optional-optionaldependencies)
* [os](ipackagejson.md#optional-os)
* [peerDependencies](ipackagejson.md#optional-peerdependencies)
* [preferGlobal](ipackagejson.md#optional-preferglobal)
* [private](ipackagejson.md#optional-private)
* [publishConfig](ipackagejson.md#optional-publishconfig)
* [repository](ipackagejson.md#optional-repository)
* [resolutions](ipackagejson.md#optional-resolutions)
* [scripts](ipackagejson.md#optional-scripts)
* [types](ipackagejson.md#optional-types)
* [version](ipackagejson.md#optional-version)

## Properties

### `Optional` author

• **author**? : *string | [IAuthor](iauthor.md)*

*Defined in [index.ts:178](https://github.com/ajaxlab/package-json-type/blob/5df272e/src/index.ts#L178)*

Package author information. An author is one person.
* Shorthand expression
```
your-name <account@your-domain> (http://your-url)
```

**`see`** https://docs.npmjs.com/files/package.json#people-fields-author-contributors

**`see`** https://yarnpkg.com/en/docs/package-json#toc-author

___

### `Optional` bin

• **bin**? : *string | [IBinMap](ibinmap.md)*

*Defined in [index.ts:199](https://github.com/ajaxlab/package-json-type/blob/5df272e/src/index.ts#L199)*

An executable file which will be installed into the PATH
with a package install. `npm` will symlink that file into
`prefix/bin` for global installs, or `./node_modules/.bin/`
for local installs.

```json
{
  "bin" : {
    "myapp" : "./cli.js"
  }
}
```

For example, with linux if you install `myapp`,
it'll create a symlink from the `cli.js` script
to `/usr/local/bin/myapp`.

**`see`** https://docs.npmjs.com/files/package.json#bin

___

### `Optional` browser

• **browser**? : *undefined | string*

*Defined in [index.ts:207](https://github.com/ajaxlab/package-json-type/blob/5df272e/src/index.ts#L207)*

This is a hint to the module which is meant to be
used "client-side" instead of "nodejs".

**`see`** https://github.com/defunctzombie/package-browser-field-spec

**`see`** http://2ality.com/2017/04/setting-up-multi-platform-packages.html#browser-browser-specific-code

___

### `Optional` bugs

• **bugs**? : *string | [IBugs](ibugs.md)*

*Defined in [index.ts:216](https://github.com/ajaxlab/package-json-type/blob/5df272e/src/index.ts#L216)*

The url to your project's issue tracker and (or) the email
address to which issues should be reported. These are helpful
for people who encounter issues with your package.

**`see`** https://docs.npmjs.com/files/package.json#bugs

**`see`** https://yarnpkg.com/en/docs/package-json#toc-bugs

___

### `Optional` bundledDependencies

• **bundledDependencies**? : *string[]*

*Defined in [index.ts:224](https://github.com/ajaxlab/package-json-type/blob/5df272e/src/index.ts#L224)*

Bundled dependencies are an array of package names that
will be bundled together when publishing your package.

**`see`** https://docs.npmjs.com/files/package.json#bundleddependencies

**`see`** https://yarnpkg.com/en/docs/package-json#toc-bundleddependencies

___

### `Optional` config

• **config**? : *[IConfig](iconfig.md)*

*Defined in [index.ts:243](https://github.com/ajaxlab/package-json-type/blob/5df272e/src/index.ts#L243)*

A "`config`" object can be used to set configuration parameters
used in package scripts that persist across upgrades.
For instance, if a package had the following:
```json
{
  "config" : {
    "port" : "8080"
  }
}
```
and then had a "`start`" command that then referenced the
npm_package_config_port environment variable,
then the user could override that by doing npm config set foo:port 8001.

**`see`** https://docs.npmjs.com/files/package.json#config

**`see`** https://yarnpkg.com/en/docs/package-json#toc-config

___

### `Optional` contributors

• **contributors**? : *`Array<IAuthor | string>`*

*Defined in [index.ts:253](https://github.com/ajaxlab/package-json-type/blob/5df272e/src/index.ts#L253)*

If there is an `AUTHORS` file in the root of your package,
npm will treat each line as a Name <email> (url) format,
where email and url are optional. Lines which start with a # or are blank,
will be ignored.

**`see`** https://docs.npmjs.com/files/package.json#people-fields-author-contributors

**`see`** https://yarnpkg.com/en/docs/package-json#toc-contributors

___

### `Optional` cpu

• **cpu**? : *[CPU](../globals.md#cpu)[]*

*Defined in [index.ts:262](https://github.com/ajaxlab/package-json-type/blob/5df272e/src/index.ts#L262)*

If your code only runs on certain cpu architectures, you can specify which ones.
This checks against `process.arch`.

**`see`** https://docs.npmjs.com/files/package.json#cpu

**`see`** https://yarnpkg.com/en/docs/package-json#toc-cpu

**`see`** https://nodejs.org/api/process.html#process_process_arch

___

### `Optional` dependencies

• **dependencies**? : *[IDependencyMap](idependencymap.md)*

*Defined in [index.ts:273](https://github.com/ajaxlab/package-json-type/blob/5df272e/src/index.ts#L273)*

Dependencies are specified in a simple object that maps a package name
to a version range. The version range is a string which has one or
more space-separated descriptors. Dependencies can also be
identified with a tarball or git URL.

**`see`** http://wiki.commonjs.org/wiki/Packages/1.0

**`see`** https://docs.npmjs.com/files/package.json#dependencies

**`see`** https://yarnpkg.com/en/docs/package-json#toc-dependencies

___

### `Optional` description

• **description**? : *undefined | string*

*Defined in [index.ts:283](https://github.com/ajaxlab/package-json-type/blob/5df272e/src/index.ts#L283)*

A brief description of the package.
By convention, the first sentence (up to the first ". ")
should be usable as a package title in listings.

**`see`** https://docs.npmjs.com/files/package.json#description-1

**`see`** http://wiki.commonjs.org/wiki/Packages/1.0

**`see`** https://yarnpkg.com/en/docs/package-json#toc-description

___

### `Optional` devDependencies

• **devDependencies**? : *[IDependencyMap](idependencymap.md)*

*Defined in [index.ts:294](https://github.com/ajaxlab/package-json-type/blob/5df272e/src/index.ts#L294)*

If someone is planning on downloading and using your module
in their program, then they probably don't want or need
to download and build the external test or documentation
framework that you use. In this case, it's best to map
these additional items in a devDependencies object.

**`see`** https://docs.npmjs.com/files/package.json#devdependencies

**`see`** https://yarnpkg.com/en/docs/package-json#toc-devdependencies

___

### `Optional` directories

• **directories**? : *[IDirectories](idirectories.md)*

*Defined in [index.ts:315](https://github.com/ajaxlab/package-json-type/blob/5df272e/src/index.ts#L315)*

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

**`see`** http://wiki.commonjs.org/wiki/Packages/1.0

**`see`** https://docs.npmjs.com/files/package.json#directories

**`see`** https://yarnpkg.com/en/docs/package-json#toc-directories

___

### `Optional` engines

• **engines**? : *[IEngines](iengines.md)*

*Defined in [index.ts:324](https://github.com/ajaxlab/package-json-type/blob/5df272e/src/index.ts#L324)*

You can specify the version of node that your stuff works on.
You can also specify which versions of `npm` are capable
of properly installing your program.

**`see`** https://docs.npmjs.com/files/package.json#engines

**`see`** https://yarnpkg.com/en/docs/package-json#toc-engines

___

### `Optional` files

• **files**? : *string[]*

*Defined in [index.ts:333](https://github.com/ajaxlab/package-json-type/blob/5df272e/src/index.ts#L333)*

Files that are included in your project described
as a glob pattern. Omitting the field will make it default
to `["*"]`, as it will include all files.

**`see`** https://docs.npmjs.com/files/package.json#files

**`see`** https://yarnpkg.com/en/docs/package-json#toc-files

___

### `Optional` flat

• **flat**? : *undefined | false | true*

*Defined in [index.ts:341](https://github.com/ajaxlab/package-json-type/blob/5df272e/src/index.ts#L341)*

If your package only allows one version of a given dependency,
and you'd like to enforce the same behavior as `yarn install --flat`
on the command line, set this to true.

**`see`** https://yarnpkg.com/en/docs/package-json#toc-flat

___

### `Optional` homepage

• **homepage**? : *undefined | string*

*Defined in [index.ts:348](https://github.com/ajaxlab/package-json-type/blob/5df272e/src/index.ts#L348)*

The url to the project homepage.

**`see`** https://docs.npmjs.com/files/package.json#homepage

**`see`** https://yarnpkg.com/en/docs/package-json#toc-homepage

___

### `Optional` keywords

• **keywords**? : *string[]*

*Defined in [index.ts:355](https://github.com/ajaxlab/package-json-type/blob/5df272e/src/index.ts#L355)*

An array of string keywords to assist users searching for the package in catalogs.

**`see`** https://docs.npmjs.com/files/package.json#keywords

**`see`** https://yarnpkg.com/en/docs/package-json#toc-keywords

___

### `Optional` license

• **license**? : *[SPDXLicenseID](../globals.md#spdxlicenseid) | [SPDXLicenseIDApproved](../globals.md#spdxlicenseidapproved)*

*Defined in [index.ts:367](https://github.com/ajaxlab/package-json-type/blob/5df272e/src/index.ts#L367)*

A license for your package so that people know how they are permitted
to use it, and any restrictions you're placing on it.
If you're using a common license such as `BSD-2-Clause` or `MIT`,
add a current https://spdx.org/licenses/ .

**`see`** https://docs.npmjs.com/files/package.json#license

**`see`** https://yarnpkg.com/en/docs/package-json#toc-license

**`see`** https://spdx.org/licenses/

**`see`** https://help.github.com/en/articles/licensing-a-repository

___

### `Optional` main

• **main**? : *undefined | string*

*Defined in [index.ts:378](https://github.com/ajaxlab/package-json-type/blob/5df272e/src/index.ts#L378)*

The main field is a module ID that is the primary entry point to your package.
That is, if your package is named `foo`, and a user installs it, and then
does `require("foo")`, then your main module's exports object will be returned.
This should be a module ID relative to the root of your package folder.
For most modules, it makes the most sense to have a main script and often not much else.

**`see`** https://docs.npmjs.com/files/package.json#main

**`see`** https://yarnpkg.com/en/docs/package-json#toc-main

___

### `Optional` man

• **man**? : *string | string[]*

*Defined in [index.ts:384](https://github.com/ajaxlab/package-json-type/blob/5df272e/src/index.ts#L384)*

A single file (or an array of filenames) for the man program.

**`see`** https://docs.npmjs.com/files/package.json#man

___

### `Optional` name

• **name**? : *undefined | string*

*Defined in [index.ts:394](https://github.com/ajaxlab/package-json-type/blob/5df272e/src/index.ts#L394)*

The name of your package.
The name and version together should form a unique identifier accoss a project.
The name and version fields are optional if you don't want to publish your package.
A name can be optionally prefixed by a scope, e.g. `@types/lodash`.

**`see`** https://docs.npmjs.com/files/package.json#name

**`see`** https://yarnpkg.com/en/docs/package-json#toc-name

___

### `Optional` optionalDependencies

• **optionalDependencies**? : *[IDependencyMap](idependencymap.md)*

*Defined in [index.ts:406](https://github.com/ajaxlab/package-json-type/blob/5df272e/src/index.ts#L406)*

If a dependency can be used, but you would like npm to proceed
if it cannot be found or fails to install, then you may put it
in the `optionalDependencies` object. This is a map of package name
to version or url, just like the `dependencies` object.
The difference is that build failures do not cause installation to fail.
It is still your program's responsibility to handle the lack of the dependency.

**`see`** https://docs.npmjs.com/files/package.json#optionaldependencies

**`see`** https://yarnpkg.com/en/docs/package-json#toc-optionaldependencies

___

### `Optional` os

• **os**? : *[OS](../globals.md#os)[]*

*Defined in [index.ts:414](https://github.com/ajaxlab/package-json-type/blob/5df272e/src/index.ts#L414)*

You can specify which operating systems your module will run on

**`see`** https://docs.npmjs.com/files/package.json#os

**`see`** https://yarnpkg.com/en/docs/package-json#toc-os

**`see`** https://nodejs.org/api/process.html#process_process_platform

___

### `Optional` peerDependencies

• **peerDependencies**? : *[IDependencyMap](idependencymap.md)*

*Defined in [index.ts:425](https://github.com/ajaxlab/package-json-type/blob/5df272e/src/index.ts#L425)*

In some cases, you want to express the compatibility of your package
with a host tool or library, while not necessarily doing a require
of this host. This is usually referred to as a plugin. Notably,
your module may be exposing a specific interface, expected
and specified by the host documentation.

**`see`** https://docs.npmjs.com/files/package.json#peerdependencies

**`see`** https://yarnpkg.com/en/docs/package-json#toc-peerdependencies

___

### `Optional` preferGlobal

• **preferGlobal**? : *undefined | false | true*

*Defined in [index.ts:433](https://github.com/ajaxlab/package-json-type/blob/5df272e/src/index.ts#L433)*

This option used to trigger an npm warning, but it will no longer warn.
It is purely there for informational purposes. It is now recommended
that you install any binaries as local `devDependencies` wherever possible.

**`deprecated`** 

___

### `Optional` private

• **private**? : *undefined | false | true*

*Defined in [index.ts:445](https://github.com/ajaxlab/package-json-type/blob/5df272e/src/index.ts#L445)*

If you set "`private`": true in your `package.json`, then `npm` will refuse to publish it.
This is a way to prevent accidental publication of private repositories.
If you would like to ensure that a given package is only ever published to
a specific registry (for example, an internal registry),
then use the [publishConfig](ipackagejson.md#optional-publishconfig) dictionary described below to override
the registry config param at publish-time.

**`see`** https://docs.npmjs.com/files/package.json#private

**`see`** https://yarnpkg.com/en/docs/package-json#toc-private

___

### `Optional` publishConfig

• **publishConfig**? : *[IPublishConfig](ipublishconfig.md)*

*Defined in [index.ts:478](https://github.com/ajaxlab/package-json-type/blob/5df272e/src/index.ts#L478)*

This is a set of config values that will be used at publish-time.
It's especially handy if you want to set the `tag`, `registry` or `access`,
so that you can ensure that a given package is not tagged with `“latest”`,
published to the global public registry or that a scoped module is private by default.
Any config values can be overridden, but only "`tag`", "`registry`" and
"`access`" probably matter for the purposes of publishing.
See npm-config to see the list of config options that can be overridden.
* Public Registry

```json
{
  "publishConfig":{
    "registry":"https://registry.npmjs.org"
  }
}
```

* Your Private Registry

```json
{
  "publishConfig":{
    "registry":"http://your-registry.local"
  }
}
```

**`see`** https://docs.npmjs.com/files/package.json#publishconfig

**`see`** https://yarnpkg.com/en/docs/package-json#toc-publishconfig

___

### `Optional` repository

• **repository**? : *string | [IRepository](irepository.md)*

*Defined in [index.ts:520](https://github.com/ajaxlab/package-json-type/blob/5df272e/src/index.ts#L520)*

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

___

### `Optional` resolutions

• **resolutions**? : *undefined | object*

*Defined in [index.ts:529](https://github.com/ajaxlab/package-json-type/blob/5df272e/src/index.ts#L529)*

Allows you to override a version of a particular nested dependency.
See the Selective Versions Resolutions RFC for the full spec.
Note that installing dependencies via `[yarn install --flat]` will
automatically add a resolutions block to your package.json file.

**`see`** https://yarnpkg.com/en/docs/package-json#toc-resolutions

___

### `Optional` scripts

• **scripts**? : *[IScriptsMap](iscriptsmap.md) | object*

*Defined in [index.ts:549](https://github.com/ajaxlab/package-json-type/blob/5df272e/src/index.ts#L549)*

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

___

### `Optional` types

• **types**? : *undefined | string*

*Defined in [index.ts:566](https://github.com/ajaxlab/package-json-type/blob/5df272e/src/index.ts#L566)*

Indicate the main declaration file in your package.json.
Set the `types` property to point to your bundled declaration file.
```json
{
  "name": "some-package",
  "version": "1.0.0",
  "main": "./lib/main.js",
  "types": "./lib/main.d.ts"
}
```

**`see`** https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html

___

### `Optional` version

• **version**? : *undefined | string*

*Defined in [index.ts:573](https://github.com/ajaxlab/package-json-type/blob/5df272e/src/index.ts#L573)*

A version string conforming to the Semantic Versioning requirements.

**`see`** https://docs.npmjs.com/files/package.json#version

**`see`** https://yarnpkg.com/en/docs/package-json#toc-version
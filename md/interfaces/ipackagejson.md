

A TypeScript definition for the package descriptor file.

*__see__*: [http://wiki.commonjs.org/wiki/Packages/1.0](http://wiki.commonjs.org/wiki/Packages/1.0)

*__see__*: [https://docs.npmjs.com/files/package.json](https://docs.npmjs.com/files/package.json)

*__see__*: [https://yarnpkg.com/en/docs/package-json](https://yarnpkg.com/en/docs/package-json)

# Hierarchy

**IPackageJson**

# Indexable

\[field: `string`\]:&nbsp;`any`
A TypeScript definition for the package descriptor file.

# Properties

<a id="author"></a>

## `<Optional>` author

**● author**: *`string` \| [IAuthor](iauthor.md)*

*Defined in [index.ts:177](https://github.com/ajaxlab/package-json-type/blob/a5fe63f/src/index.ts#L177)*

Package author information. An author is one person.

*   Shorthand expression
    
    ```
    your-name <account@your-domain> (http://your-url)
    ```

*__see__*: [https://docs.npmjs.com/files/package.json#people-fields-author-contributors](https://docs.npmjs.com/files/package.json#people-fields-author-contributors)

*__see__*: [https://yarnpkg.com/en/docs/package-json#toc-author](https://yarnpkg.com/en/docs/package-json#toc-author)

___
<a id="bin"></a>

## `<Optional>` bin

**● bin**: *`string` \| [IBinMap](ibinmap.md)*

*Defined in [index.ts:198](https://github.com/ajaxlab/package-json-type/blob/a5fe63f/src/index.ts#L198)*

An executable file which will be installed into the PATH with a package install. `npm` will symlink that file into `prefix/bin` for global installs, or `./node_modules/.bin/` for local installs.

```json
{
  "bin" : {
    "myapp" : "./cli.js"
  }
}
```

For example, with linux if you install `myapp`, it'll create a symlink from the `cli.js` script to `/usr/local/bin/myapp`.

*__see__*: [https://docs.npmjs.com/files/package.json#bin](https://docs.npmjs.com/files/package.json#bin)

___
<a id="browser"></a>

## `<Optional>` browser

**● browser**: *`undefined` \| `string`*

*Defined in [index.ts:206](https://github.com/ajaxlab/package-json-type/blob/a5fe63f/src/index.ts#L206)*

This is a hint to the module which is meant to be used "client-side" instead of "nodejs".

*__see__*: [https://github.com/defunctzombie/package-browser-field-spec](https://github.com/defunctzombie/package-browser-field-spec)

*__see__*: [http://2ality.com/2017/04/setting-up-multi-platform-packages.html#browser-browser-specific-code](http://2ality.com/2017/04/setting-up-multi-platform-packages.html#browser-browser-specific-code)

___
<a id="bugs"></a>

## `<Optional>` bugs

**● bugs**: *`string` \| [IBugs](ibugs.md)*

*Defined in [index.ts:215](https://github.com/ajaxlab/package-json-type/blob/a5fe63f/src/index.ts#L215)*

The url to your project's issue tracker and (or) the email address to which issues should be reported. These are helpful for people who encounter issues with your package.

*__see__*: [https://docs.npmjs.com/files/package.json#bugs](https://docs.npmjs.com/files/package.json#bugs)

*__see__*: [https://yarnpkg.com/en/docs/package-json#toc-bugs](https://yarnpkg.com/en/docs/package-json#toc-bugs)

___
<a id="bundleddependencies"></a>

## `<Optional>` bundledDependencies

**● bundledDependencies**: *`string`[]*

*Defined in [index.ts:223](https://github.com/ajaxlab/package-json-type/blob/a5fe63f/src/index.ts#L223)*

Bundled dependencies are an array of package names that will be bundled together when publishing your package.

*__see__*: [https://docs.npmjs.com/files/package.json#bundleddependencies](https://docs.npmjs.com/files/package.json#bundleddependencies)

*__see__*: [https://yarnpkg.com/en/docs/package-json#toc-bundleddependencies](https://yarnpkg.com/en/docs/package-json#toc-bundleddependencies)

___
<a id="config"></a>

## `<Optional>` config

**● config**: *[IConfig](iconfig.md)*

*Defined in [index.ts:242](https://github.com/ajaxlab/package-json-type/blob/a5fe63f/src/index.ts#L242)*

A "`config`" object can be used to set configuration parameters used in package scripts that persist across upgrades. For instance, if a package had the following:

```json
{
  "config" : {
    "port" : "8080"
  }
}
```

and then had a "`start`" command that then referenced the npm\_package\_config\_port environment variable, then the user could override that by doing npm config set foo:port 8001.

*__see__*: [https://docs.npmjs.com/files/package.json#config](https://docs.npmjs.com/files/package.json#config)

*__see__*: [https://yarnpkg.com/en/docs/package-json#toc-config](https://yarnpkg.com/en/docs/package-json#toc-config)

___
<a id="contributors"></a>

## `<Optional>` contributors

**● contributors**: *`Array`<[IAuthor](iauthor.md) \| `string`>*

*Defined in [index.ts:252](https://github.com/ajaxlab/package-json-type/blob/a5fe63f/src/index.ts#L252)*

If there is an `AUTHORS` file in the root of your package, npm will treat each line as a Name (url) format, where email and url are optional. Lines which start with a # or are blank, will be ignored.

*__see__*: [https://docs.npmjs.com/files/package.json#people-fields-author-contributors](https://docs.npmjs.com/files/package.json#people-fields-author-contributors)

*__see__*: [https://yarnpkg.com/en/docs/package-json#toc-contributors](https://yarnpkg.com/en/docs/package-json#toc-contributors)

___
<a id="cpu"></a>

## `<Optional>` cpu

**● cpu**: *[CPU](../#cpu)[]*

*Defined in [index.ts:261](https://github.com/ajaxlab/package-json-type/blob/a5fe63f/src/index.ts#L261)*

If your code only runs on certain cpu architectures, you can specify which ones. This checks against `process.arch`.

*__see__*: [https://docs.npmjs.com/files/package.json#cpu](https://docs.npmjs.com/files/package.json#cpu)

*__see__*: [https://yarnpkg.com/en/docs/package-json#toc-cpu](https://yarnpkg.com/en/docs/package-json#toc-cpu)

*__see__*: [https://nodejs.org/api/process.html#process\_process\_arch](https://nodejs.org/api/process.html#process_process_arch)

___
<a id="dependencies"></a>

## `<Optional>` dependencies

**● dependencies**: *[IDependencyMap](idependencymap.md)*

*Defined in [index.ts:272](https://github.com/ajaxlab/package-json-type/blob/a5fe63f/src/index.ts#L272)*

Dependencies are specified in a simple object that maps a package name to a version range. The version range is a string which has one or more space-separated descriptors. Dependencies can also be identified with a tarball or git URL.

*__see__*: [http://wiki.commonjs.org/wiki/Packages/1.0](http://wiki.commonjs.org/wiki/Packages/1.0)

*__see__*: [https://docs.npmjs.com/files/package.json#dependencies](https://docs.npmjs.com/files/package.json#dependencies)

*__see__*: [https://yarnpkg.com/en/docs/package-json#toc-dependencies](https://yarnpkg.com/en/docs/package-json#toc-dependencies)

___
<a id="description"></a>

## `<Optional>` description

**● description**: *`undefined` \| `string`*

*Defined in [index.ts:282](https://github.com/ajaxlab/package-json-type/blob/a5fe63f/src/index.ts#L282)*

A brief description of the package. By convention, the first sentence (up to the first ". ") should be usable as a package title in listings.

*__see__*: [https://docs.npmjs.com/files/package.json#description-1](https://docs.npmjs.com/files/package.json#description-1)

*__see__*: [http://wiki.commonjs.org/wiki/Packages/1.0](http://wiki.commonjs.org/wiki/Packages/1.0)

*__see__*: [https://yarnpkg.com/en/docs/package-json#toc-description](https://yarnpkg.com/en/docs/package-json#toc-description)

___
<a id="devdependencies"></a>

## `<Optional>` devDependencies

**● devDependencies**: *[IDependencyMap](idependencymap.md)*

*Defined in [index.ts:293](https://github.com/ajaxlab/package-json-type/blob/a5fe63f/src/index.ts#L293)*

If someone is planning on downloading and using your module in their program, then they probably don't want or need to download and build the external test or documentation framework that you use. In this case, it's best to map these additional items in a devDependencies object.

*__see__*: [https://docs.npmjs.com/files/package.json#devdependencies](https://docs.npmjs.com/files/package.json#devdependencies)

*__see__*: [https://yarnpkg.com/en/docs/package-json#toc-devdependencies](https://yarnpkg.com/en/docs/package-json#toc-devdependencies)

___
<a id="directories"></a>

## `<Optional>` directories

**● directories**: *[IDirectories](idirectories.md)*

*Defined in [index.ts:314](https://github.com/ajaxlab/package-json-type/blob/a5fe63f/src/index.ts#L314)*

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

___
<a id="engines"></a>

## `<Optional>` engines

**● engines**: *[IEngines](iengines.md)*

*Defined in [index.ts:323](https://github.com/ajaxlab/package-json-type/blob/a5fe63f/src/index.ts#L323)*

You can specify the version of node that your stuff works on. You can also specify which versions of `npm` are capable of properly installing your program.

*__see__*: [https://docs.npmjs.com/files/package.json#engines](https://docs.npmjs.com/files/package.json#engines)

*__see__*: [https://yarnpkg.com/en/docs/package-json#toc-engines](https://yarnpkg.com/en/docs/package-json#toc-engines)

___
<a id="files"></a>

## `<Optional>` files

**● files**: *`string`[]*

*Defined in [index.ts:332](https://github.com/ajaxlab/package-json-type/blob/a5fe63f/src/index.ts#L332)*

Files that are included in your project described as a glob pattern. Omitting the field will make it default to `["*"]`, as it will include all files.

*__see__*: [https://docs.npmjs.com/files/package.json#files](https://docs.npmjs.com/files/package.json#files)

*__see__*: [https://yarnpkg.com/en/docs/package-json#toc-files](https://yarnpkg.com/en/docs/package-json#toc-files)

___
<a id="flat"></a>

## `<Optional>` flat

**● flat**: *`undefined` \| `false` \| `true`*

*Defined in [index.ts:340](https://github.com/ajaxlab/package-json-type/blob/a5fe63f/src/index.ts#L340)*

If your package only allows one version of a given dependency, and you'd like to enforce the same behavior as `yarn install --flat` on the command line, set this to true.

*__see__*: [https://yarnpkg.com/en/docs/package-json#toc-flat](https://yarnpkg.com/en/docs/package-json#toc-flat)

___
<a id="homepage"></a>

## `<Optional>` homepage

**● homepage**: *`undefined` \| `string`*

*Defined in [index.ts:347](https://github.com/ajaxlab/package-json-type/blob/a5fe63f/src/index.ts#L347)*

The url to the project homepage.

*__see__*: [https://docs.npmjs.com/files/package.json#homepage](https://docs.npmjs.com/files/package.json#homepage)

*__see__*: [https://yarnpkg.com/en/docs/package-json#toc-homepage](https://yarnpkg.com/en/docs/package-json#toc-homepage)

___
<a id="keywords"></a>

## `<Optional>` keywords

**● keywords**: *`string`[]*

*Defined in [index.ts:354](https://github.com/ajaxlab/package-json-type/blob/a5fe63f/src/index.ts#L354)*

An array of string keywords to assist users searching for the package in catalogs.

*__see__*: [https://docs.npmjs.com/files/package.json#keywords](https://docs.npmjs.com/files/package.json#keywords)

*__see__*: [https://yarnpkg.com/en/docs/package-json#toc-keywords](https://yarnpkg.com/en/docs/package-json#toc-keywords)

___
<a id="license"></a>

## `<Optional>` license

**● license**: *[SPDXLicenseID](../#spdxlicenseid) \| [SPDXLicenseIDApproved](../#spdxlicenseidapproved)*

*Defined in [index.ts:366](https://github.com/ajaxlab/package-json-type/blob/a5fe63f/src/index.ts#L366)*

A license for your package so that people know how they are permitted to use it, and any restrictions you're placing on it. If you're using a common license such as `BSD-2-Clause` or `MIT`, add a current [SPDX license identifier](https://spdx.org/licenses/ ).

*__see__*: [https://docs.npmjs.com/files/package.json#license](https://docs.npmjs.com/files/package.json#license)

*__see__*: [https://yarnpkg.com/en/docs/package-json#toc-license](https://yarnpkg.com/en/docs/package-json#toc-license)

*__see__*: [https://spdx.org/licenses/](https://spdx.org/licenses/)

*__see__*: [https://help.github.com/en/articles/licensing-a-repository](https://help.github.com/en/articles/licensing-a-repository)

___
<a id="main"></a>

## `<Optional>` main

**● main**: *`undefined` \| `string`*

*Defined in [index.ts:377](https://github.com/ajaxlab/package-json-type/blob/a5fe63f/src/index.ts#L377)*

The main field is a module ID that is the primary entry point to your package. That is, if your package is named `foo`, and a user installs it, and then does `require("foo")`, then your main module's exports object will be returned. This should be a module ID relative to the root of your package folder. For most modules, it makes the most sense to have a main script and often not much else.

*__see__*: [https://docs.npmjs.com/files/package.json#main](https://docs.npmjs.com/files/package.json#main)

*__see__*: [https://yarnpkg.com/en/docs/package-json#toc-main](https://yarnpkg.com/en/docs/package-json#toc-main)

___
<a id="man"></a>

## `<Optional>` man

**● man**: *`string` \| `string`[]*

*Defined in [index.ts:383](https://github.com/ajaxlab/package-json-type/blob/a5fe63f/src/index.ts#L383)*

A single file (or an array of filenames) for the man program.

*__see__*: [https://docs.npmjs.com/files/package.json#man](https://docs.npmjs.com/files/package.json#man)

___
<a id="name"></a>

## `<Optional>` name

**● name**: *`undefined` \| `string`*

*Defined in [index.ts:393](https://github.com/ajaxlab/package-json-type/blob/a5fe63f/src/index.ts#L393)*

The name of your package. The name and version together should form a unique identifier accoss a project. The name and version fields are optional if you don't want to publish your package. A name can be optionally prefixed by a scope, e.g. `@types/lodash`.

*__see__*: [https://docs.npmjs.com/files/package.json#name](https://docs.npmjs.com/files/package.json#name)

*__see__*: [https://yarnpkg.com/en/docs/package-json#toc-name](https://yarnpkg.com/en/docs/package-json#toc-name)

___
<a id="optionaldependencies"></a>

## `<Optional>` optionalDependencies

**● optionalDependencies**: *[IDependencyMap](idependencymap.md)*

*Defined in [index.ts:405](https://github.com/ajaxlab/package-json-type/blob/a5fe63f/src/index.ts#L405)*

If a dependency can be used, but you would like npm to proceed if it cannot be found or fails to install, then you may put it in the `optionalDependencies` object. This is a map of package name to version or url, just like the `dependencies` object. The difference is that build failures do not cause installation to fail. It is still your program's responsibility to handle the lack of the dependency.

*__see__*: [https://docs.npmjs.com/files/package.json#optionaldependencies](https://docs.npmjs.com/files/package.json#optionaldependencies)

*__see__*: [https://yarnpkg.com/en/docs/package-json#toc-optionaldependencies](https://yarnpkg.com/en/docs/package-json#toc-optionaldependencies)

___
<a id="os"></a>

## `<Optional>` os

**● os**: *[OS](../#os)[]*

*Defined in [index.ts:413](https://github.com/ajaxlab/package-json-type/blob/a5fe63f/src/index.ts#L413)*

You can specify which operating systems your module will run on

*__see__*: [https://docs.npmjs.com/files/package.json#os](https://docs.npmjs.com/files/package.json#os)

*__see__*: [https://yarnpkg.com/en/docs/package-json#toc-os](https://yarnpkg.com/en/docs/package-json#toc-os)

*__see__*: [https://nodejs.org/api/process.html#process\_process\_platform](https://nodejs.org/api/process.html#process_process_platform)

___
<a id="peerdependencies"></a>

## `<Optional>` peerDependencies

**● peerDependencies**: *[IDependencyMap](idependencymap.md)*

*Defined in [index.ts:424](https://github.com/ajaxlab/package-json-type/blob/a5fe63f/src/index.ts#L424)*

In some cases, you want to express the compatibility of your package with a host tool or library, while not necessarily doing a require of this host. This is usually referred to as a plugin. Notably, your module may be exposing a specific interface, expected and specified by the host documentation.

*__see__*: [https://docs.npmjs.com/files/package.json#peerdependencies](https://docs.npmjs.com/files/package.json#peerdependencies)

*__see__*: [https://yarnpkg.com/en/docs/package-json#toc-peerdependencies](https://yarnpkg.com/en/docs/package-json#toc-peerdependencies)

___
<a id="preferglobal"></a>

## `<Optional>` preferGlobal

**● preferGlobal**: *`undefined` \| `false` \| `true`*

*Defined in [index.ts:432](https://github.com/ajaxlab/package-json-type/blob/a5fe63f/src/index.ts#L432)*

This option used to trigger an npm warning, but it will no longer warn. It is purely there for informational purposes. It is now recommended that you install any binaries as local `devDependencies` wherever possible.

*__deprecated__*: 

___
<a id="private"></a>

## `<Optional>` private

**● private**: *`undefined` \| `false` \| `true`*

*Defined in [index.ts:444](https://github.com/ajaxlab/package-json-type/blob/a5fe63f/src/index.ts#L444)*

If you set "`private`": true in your `package.json`, then `npm` will refuse to publish it. This is a way to prevent accidental publication of private repositories. If you would like to ensure that a given package is only ever published to a specific registry (for example, an internal registry), then use the [publishConfig](ipackagejson.md#publishconfig) dictionary described below to override the registry config param at publish-time.

*__see__*: [https://docs.npmjs.com/files/package.json#private](https://docs.npmjs.com/files/package.json#private)

*__see__*: [https://yarnpkg.com/en/docs/package-json#toc-private](https://yarnpkg.com/en/docs/package-json#toc-private)

___
<a id="publishconfig"></a>

## `<Optional>` publishConfig

**● publishConfig**: *[IPublishConfig](ipublishconfig.md)*

*Defined in [index.ts:477](https://github.com/ajaxlab/package-json-type/blob/a5fe63f/src/index.ts#L477)*

This is a set of config values that will be used at publish-time. It's especially handy if you want to set the `tag`, `registry` or `access`, so that you can ensure that a given package is not tagged with `“latest”`, published to the global public registry or that a scoped module is private by default. Any config values can be overridden, but only "`tag`", "`registry`" and "`access`" probably matter for the purposes of publishing. See npm-config to see the list of config options that can be overridden.

*   Public Registry

```json
{
  "publishConfig":{
    "registry":"https://registry.npmjs.org"
  }
}
```

*   Your Private Registry

```json
{
  "publishConfig":{
    "registry":"http://your-registry.local"
  }
}
```

*__see__*: [https://docs.npmjs.com/files/package.json#publishconfig](https://docs.npmjs.com/files/package.json#publishconfig)

*__see__*: [https://yarnpkg.com/en/docs/package-json#toc-publishconfig](https://yarnpkg.com/en/docs/package-json#toc-publishconfig)

___
<a id="repository"></a>

## `<Optional>` repository

**● repository**: *`string` \| [IRepository](irepository.md)*

*Defined in [index.ts:519](https://github.com/ajaxlab/package-json-type/blob/a5fe63f/src/index.ts#L519)*

Specify the place where your code lives. This is helpful for people who want to contribute.

*   Git

```json
{
  "repository": {
    "type": "git",
    "url": "https://github.com/ajaxlab/package-json-type.git"
  }
}
```

*   Svn

```json
{
  "repository": {
    "type": "svn",
    "url": "https://v8.googlecode.com/svn/trunk/"
  }
}
```

*   Monorepo

```json
{
  "repository": {
    "type": "git",
    "url": "https://github.com/facebook/react.git",
    "directory": "packages/react-dom"
  }
}
```

*__see__*: [https://yarnpkg.com/en/docs/package-json#toc-repository](https://yarnpkg.com/en/docs/package-json#toc-repository)

*__see__*: [https://docs.npmjs.com/files/package.json#repository](https://docs.npmjs.com/files/package.json#repository)

___
<a id="resolutions"></a>

## `<Optional>` resolutions

**● resolutions**: *`undefined` \| `object`*

*Defined in [index.ts:528](https://github.com/ajaxlab/package-json-type/blob/a5fe63f/src/index.ts#L528)*

Allows you to override a version of a particular nested dependency. See the Selective Versions Resolutions RFC for the full spec. Note that installing dependencies via `[yarn install --flat]` will automatically add a resolutions block to your package.json file.

*__see__*: [https://yarnpkg.com/en/docs/package-json#toc-resolutions](https://yarnpkg.com/en/docs/package-json#toc-resolutions)

___
<a id="scripts"></a>

## `<Optional>` scripts

**● scripts**: *[IScriptsMap](iscriptsmap.md) \| `object`*

*Defined in [index.ts:548](https://github.com/ajaxlab/package-json-type/blob/a5fe63f/src/index.ts#L548)*

The "`scripts`" property is a dictionary containing script commands that are run at various times in the lifecycle of your package. The key is the lifecycle event, and the value is the command to run at that point.

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
<a id="types"></a>

## `<Optional>` types

**● types**: *`undefined` \| `string`*

*Defined in [index.ts:565](https://github.com/ajaxlab/package-json-type/blob/a5fe63f/src/index.ts#L565)*

Indicate the main declaration file in your package.json. Set the `types` property to point to your bundled declaration file.

```json
{
  "name": "some-package",
  "version": "1.0.0",
  "main": "./lib/main.js",
  "types": "./lib/main.d.ts"
}
```

*__see__*: [https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html](https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html)

___
<a id="version"></a>

## `<Optional>` version

**● version**: *`undefined` \| `string`*

*Defined in [index.ts:572](https://github.com/ajaxlab/package-json-type/blob/a5fe63f/src/index.ts#L572)*

A version string conforming to the Semantic Versioning requirements.

*__see__*: [https://docs.npmjs.com/files/package.json#version](https://docs.npmjs.com/files/package.json#version)

*__see__*: [https://yarnpkg.com/en/docs/package-json#toc-version](https://yarnpkg.com/en/docs/package-json#toc-version)

___


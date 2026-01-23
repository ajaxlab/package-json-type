[**package-json-type**](../README.md)

***

[package-json-type](../globals.md) / IPackageJson

# Interface: IPackageJson

Defined in: [index.ts:402](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L402)

A TypeScript definition for the package descriptor file.

## See

 - http://wiki.commonjs.org/wiki/Packages/1.0
 - https://docs.npmjs.com/files/package.json
 - https://yarnpkg.com/en/docs/package-json

## Indexable

\[`field`: `string`\]: `any`

## Properties

### author?

> `readonly` `optional` **author**: `string` \| [`IAuthor`](IAuthor.md)

Defined in: [index.ts:415](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L415)

Package author information. An author is one person.
* Shorthand expression
```
your-name <account@your-domain> (http://your-url)
```

#### See

 - https://docs.npmjs.com/files/package.json#people-fields-author-contributors
 - https://yarnpkg.com/en/docs/package-json#toc-author

***

### bin?

> `readonly` `optional` **bin**: `string` \| [`IBinMap`](IBinMap.md)

Defined in: [index.ts:436](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L436)

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

#### See

https://docs.npmjs.com/files/package.json#bin

***

### browser?

> `readonly` `optional` **browser**: `string`

Defined in: [index.ts:444](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L444)

This is a hint to the module which is meant to be
used "client-side" instead of "nodejs".

#### See

 - https://github.com/defunctzombie/package-browser-field-spec
 - http://2ality.com/2017/04/setting-up-multi-platform-packages.html#browser-browser-specific-code

***

### bugs?

> `readonly` `optional` **bugs**: `string` \| [`IBugs`](IBugs.md)

Defined in: [index.ts:453](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L453)

The url to your project's issue tracker and (or) the email
address to which issues should be reported. These are helpful
for people who encounter issues with your package.

#### See

 - https://docs.npmjs.com/files/package.json#bugs
 - https://yarnpkg.com/en/docs/package-json#toc-bugs

***

### bundledDependencies?

> `readonly` `optional` **bundledDependencies**: `string`[]

Defined in: [index.ts:461](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L461)

Bundled dependencies are an array of package names that
will be bundled together when publishing your package.

#### See

 - https://docs.npmjs.com/files/package.json#bundleddependencies
 - https://yarnpkg.com/en/docs/package-json#toc-bundleddependencies

***

### config?

> `readonly` `optional` **config**: [`IConfig`](IConfig.md)

Defined in: [index.ts:480](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L480)

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

#### See

 - https://docs.npmjs.com/files/package.json#config
 - https://yarnpkg.com/en/docs/package-json#toc-config

***

### contributors?

> `readonly` `optional` **contributors**: (`string` \| [`IAuthor`](IAuthor.md))[]

Defined in: [index.ts:490](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L490)

If there is an `AUTHORS` file in the root of your package,
npm will treat each line as a Name <email> (url) format,
where email and url are optional. Lines which start with a # or are blank,
will be ignored.

#### See

 - https://docs.npmjs.com/files/package.json#people-fields-author-contributors
 - https://yarnpkg.com/en/docs/package-json#toc-contributors

***

### cpu?

> `readonly` `optional` **cpu**: [`CPU`](../type-aliases/CPU.md)[]

Defined in: [index.ts:499](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L499)

If your code only runs on certain cpu architectures, you can specify which ones.
This checks against `process.arch`.

#### See

 - https://docs.npmjs.com/files/package.json#cpu
 - https://yarnpkg.com/en/docs/package-json#toc-cpu
 - https://nodejs.org/api/process.html#process_process_arch

***

### dependencies?

> `readonly` `optional` **dependencies**: [`IDependencyMap`](IDependencyMap.md)

Defined in: [index.ts:510](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L510)

Dependencies are specified in a simple object that maps a package name
to a version range. The version range is a string which has one or
more space-separated descriptors. Dependencies can also be
identified with a tarball or git URL.

#### See

 - http://wiki.commonjs.org/wiki/Packages/1.0
 - https://docs.npmjs.com/files/package.json#dependencies
 - https://yarnpkg.com/en/docs/package-json#toc-dependencies

***

### description?

> `readonly` `optional` **description**: `string`

Defined in: [index.ts:520](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L520)

A brief description of the package.
By convention, the first sentence (up to the first ". ")
should be usable as a package title in listings.

#### See

 - https://docs.npmjs.com/files/package.json#description-1
 - http://wiki.commonjs.org/wiki/Packages/1.0
 - https://yarnpkg.com/en/docs/package-json#toc-description

***

### devDependencies?

> `readonly` `optional` **devDependencies**: [`IDependencyMap`](IDependencyMap.md)

Defined in: [index.ts:531](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L531)

If someone is planning on downloading and using your module
in their program, then they probably don't want or need
to download and build the external test or documentation
framework that you use. In this case, it's best to map
these additional items in a devDependencies object.

#### See

 - https://docs.npmjs.com/files/package.json#devdependencies
 - https://yarnpkg.com/en/docs/package-json#toc-devdependencies

***

### directories?

> `readonly` `optional` **directories**: [`IDirectories`](IDirectories.md)

Defined in: [index.ts:552](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L552)

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

#### See

 - http://wiki.commonjs.org/wiki/Packages/1.0
 - https://docs.npmjs.com/files/package.json#directories
 - https://yarnpkg.com/en/docs/package-json#toc-directories

***

### engines?

> `readonly` `optional` **engines**: [`IEngines`](IEngines.md)

Defined in: [index.ts:561](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L561)

You can specify the version of node that your stuff works on.
You can also specify which versions of `npm` are capable
of properly installing your program.

#### See

 - https://docs.npmjs.com/files/package.json#engines
 - https://yarnpkg.com/en/docs/package-json#toc-engines

***

### exports?

> `readonly` `optional` **exports**: `string` \| [`IConditionalExport`](IConditionalExport.md) \| [`IExportsMap`](IExportsMap.md) \| `string`[] \| `null`

Defined in: [index.ts:582](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L582)

The `exports` field allows defining entry points of a package
when imported by name. It takes precedence over the `main` field
and allows restricting access to internal modules.

```json
{
  "exports": {
    ".": {
      "import": "./dist/esm/index.js",
      "require": "./dist/cjs/index.js"
    },
    "./utils": "./dist/utils.js"
  }
}
```

#### See

 - https://nodejs.org/api/packages.html#exports
 - https://nodejs.org/api/packages.html#conditional-exports

***

### files?

> `readonly` `optional` **files**: `string`[]

Defined in: [index.ts:591](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L591)

Files that are included in your project described
as a glob pattern. Omitting the field will make it default
to `["*"]`, as it will include all files.

#### See

 - https://docs.npmjs.com/files/package.json#files
 - https://yarnpkg.com/en/docs/package-json#toc-files

***

### flat?

> `readonly` `optional` **flat**: `boolean`

Defined in: [index.ts:599](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L599)

If your package only allows one version of a given dependency,
and you'd like to enforce the same behavior as `yarn install --flat`
on the command line, set this to true.

#### See

https://yarnpkg.com/en/docs/package-json#toc-flat

***

### funding?

> `readonly` `optional` **funding**: `string` \| [`IFunding`](IFunding.md) \| [`IFunding`](IFunding.md)[]

Defined in: [index.ts:626](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L626)

Funding information for the package.
Provides details on how to financially support the package maintainers.

```json
{
  "funding": {
    "type": "github",
    "url": "https://github.com/sponsors/user"
  }
}
```

Can also be an array for multiple funding sources:

```json
{
  "funding": [
    { "type": "github", "url": "https://github.com/sponsors/user" },
    { "type": "opencollective", "url": "https://opencollective.com/project" }
  ]
}
```

#### See

https://docs.npmjs.com/cli/v10/configuring-npm/package-json#funding

***

### homepage?

> `readonly` `optional` **homepage**: `string`

Defined in: [index.ts:633](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L633)

The url to the project homepage.

#### See

 - https://docs.npmjs.com/files/package.json#homepage
 - https://yarnpkg.com/en/docs/package-json#toc-homepage

***

### imports?

> `readonly` `optional` **imports**: [`IImportsMap`](IImportsMap.md)

Defined in: [index.ts:651](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L651)

Package imports field for creating internal module aliases.
Allows defining import paths that only work within the package itself.
All entries must start with `#` to distinguish them from package specifiers.

```json
{
  "imports": {
    "#utils": "./src/utils/index.js",
    "#internal/*": "./src/internal/*.js"
  }
}
```

#### See

 - https://nodejs.org/api/packages.html#imports
 - https://nodejs.org/api/packages.html#subpath-imports

***

### keywords?

> `readonly` `optional` **keywords**: `string`[]

Defined in: [index.ts:658](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L658)

An array of string keywords to assist users searching for the package in catalogs.

#### See

 - https://docs.npmjs.com/files/package.json#keywords
 - https://yarnpkg.com/en/docs/package-json#toc-keywords

***

### license?

> `readonly` `optional` **license**: [`SPDXLicenseID`](../type-aliases/SPDXLicenseID.md) \| [`SPDXLicenseIDApproved`](../type-aliases/SPDXLicenseIDApproved.md)

Defined in: [index.ts:670](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L670)

A license for your package so that people know how they are permitted
to use it, and any restrictions you're placing on it.
If you're using a common license such as `BSD-2-Clause` or `MIT`,
add a current [SPDX license identifier](https://spdx.org/licenses/).

#### See

 - https://docs.npmjs.com/files/package.json#license
 - https://yarnpkg.com/en/docs/package-json#toc-license
 - https://spdx.org/licenses/
 - https://help.github.com/en/articles/licensing-a-repository

***

### main?

> `readonly` `optional` **main**: `string`

Defined in: [index.ts:681](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L681)

The main field is a module ID that is the primary entry point to your package.
That is, if your package is named `foo`, and a user installs it, and then
does `require("foo")`, then your main module's exports object will be returned.
This should be a module ID relative to the root of your package folder.
For most modules, it makes the most sense to have a main script and often not much else.

#### See

 - https://docs.npmjs.com/files/package.json#main
 - https://yarnpkg.com/en/docs/package-json#toc-main

***

### man?

> `readonly` `optional` **man**: `string` \| `string`[]

Defined in: [index.ts:687](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L687)

A single file (or an array of filenames) for the man program.

#### See

https://docs.npmjs.com/files/package.json#man

***

### module?

> `readonly` `optional` **module**: `string`

Defined in: [index.ts:703](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L703)

The `module` field is used by bundlers like webpack and Rollup
to detect the ES module entry point of a package.
This is an unofficial field but widely adopted by the ecosystem.

```json
{
  "main": "./dist/cjs/index.js",
  "module": "./dist/esm/index.js"
}
```

#### See

 - https://github.com/rollup/rollup/wiki/pkg.module
 - https://webpack.js.org/guides/author-libraries/#final-steps

***

### name?

> `readonly` `optional` **name**: `string`

Defined in: [index.ts:713](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L713)

The name of your package.
The name and version together should form a unique identifier accoss a project.
The name and version fields are optional if you don't want to publish your package.
A name can be optionally prefixed by a scope, e.g. `@types/lodash`.

#### See

 - https://docs.npmjs.com/files/package.json#name
 - https://yarnpkg.com/en/docs/package-json#toc-name

***

### optionalDependencies?

> `readonly` `optional` **optionalDependencies**: [`IDependencyMap`](IDependencyMap.md)

Defined in: [index.ts:725](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L725)

If a dependency can be used, but you would like npm to proceed
if it cannot be found or fails to install, then you may put it
in the `optionalDependencies` object. This is a map of package name
to version or url, just like the `dependencies` object.
The difference is that build failures do not cause installation to fail.
It is still your program's responsibility to handle the lack of the dependency.

#### See

 - https://docs.npmjs.com/files/package.json#optionaldependencies
 - https://yarnpkg.com/en/docs/package-json#toc-optionaldependencies

***

### os?

> `readonly` `optional` **os**: [`OS`](../type-aliases/OS.md)[]

Defined in: [index.ts:753](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L753)

You can specify which operating systems your module will run on

#### See

 - https://docs.npmjs.com/files/package.json#os
 - https://yarnpkg.com/en/docs/package-json#toc-os
 - https://nodejs.org/api/process.html#process_process_platform

***

### overrides?

> `readonly` `optional` **overrides**: [`IOverrides`](IOverrides.md)

Defined in: [index.ts:745](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L745)

Allows overriding versions of nested dependencies.
This is useful when you need to fix a security vulnerability
or bug in a transitive dependency without waiting for the
direct dependency to update.

```json
{
  "overrides": {
    "foo": "1.0.0",
    "bar": {
      "baz": "2.0.0"
    }
  }
}
```

#### See

https://docs.npmjs.com/cli/v10/configuring-npm/package-json#overrides

***

### packageManager?

> `readonly` `optional` **packageManager**: `string`

Defined in: [index.ts:777](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L777)

Defines which package manager is expected to be used when working
on the current project. This field is managed by Corepack.
Setting this field causes Corepack to ensure the specified package
manager version is available and to run it transparently.

```json
{
  "packageManager": "npm@10.2.0"
}
```

Or with yarn or pnpm:

```json
{
  "packageManager": "pnpm@8.10.0"
}
```

#### See

 - https://nodejs.org/api/corepack.html
 - https://nodejs.org/api/packages.html#packagemanager

***

### peerDependencies?

> `readonly` `optional` **peerDependencies**: [`IDependencyMap`](IDependencyMap.md)

Defined in: [index.ts:788](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L788)

In some cases, you want to express the compatibility of your package
with a host tool or library, while not necessarily doing a require
of this host. This is usually referred to as a plugin. Notably,
your module may be exposing a specific interface, expected
and specified by the host documentation.

#### See

 - https://docs.npmjs.com/files/package.json#peerdependencies
 - https://yarnpkg.com/en/docs/package-json#toc-peerdependencies

***

### peerDependenciesMeta?

> `readonly` `optional` **peerDependenciesMeta**: [`IPeerDependenciesMeta`](IPeerDependenciesMeta.md)

Defined in: [index.ts:810](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L810)

Provides metadata about peer dependencies, such as marking them as optional.
When a peer dependency is marked as optional, npm will not automatically
install it and will not emit a warning if it's missing.

```json
{
  "peerDependencies": {
    "react": "^18.0.0",
    "typescript": "^5.0.0"
  },
  "peerDependenciesMeta": {
    "typescript": {
      "optional": true
    }
  }
}
```

#### See

https://docs.npmjs.com/cli/v10/configuring-npm/package-json#peerdependenciesmeta

***

### ~~preferGlobal?~~

> `readonly` `optional` **preferGlobal**: `boolean`

Defined in: [index.ts:818](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L818)

This option used to trigger an npm warning, but it will no longer warn.
It is purely there for informational purposes. It is now recommended
that you install any binaries as local `devDependencies` wherever possible.

#### Deprecated

***

### private?

> `readonly` `optional` **private**: `boolean`

Defined in: [index.ts:830](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L830)

If you set "`private`": true in your `package.json`, then `npm` will refuse to publish it.
This is a way to prevent accidental publication of private repositories.
If you would like to ensure that a given package is only ever published to
a specific registry (for example, an internal registry),
then use the [[publishConfig]] dictionary described below to override
the registry config param at publish-time.

#### See

 - https://docs.npmjs.com/files/package.json#private
 - https://yarnpkg.com/en/docs/package-json#toc-private

***

### publishConfig?

> `readonly` `optional` **publishConfig**: [`IPublishConfig`](IPublishConfig.md)

Defined in: [index.ts:863](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L863)

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

#### See

 - https://docs.npmjs.com/files/package.json#publishconfig
 - https://yarnpkg.com/en/docs/package-json#toc-publishconfig

***

### repository?

> `readonly` `optional` **repository**: `string` \| [`IRepository`](IRepository.md)

Defined in: [index.ts:905](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L905)

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

#### See

 - https://yarnpkg.com/en/docs/package-json#toc-repository
 - https://docs.npmjs.com/files/package.json#repository

***

### resolutions?

> `readonly` `optional` **resolutions**: `object`

Defined in: [index.ts:914](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L914)

Allows you to override a version of a particular nested dependency.
See the Selective Versions Resolutions RFC for the full spec.
Note that installing dependencies via `[yarn install --flat]` will
automatically add a resolutions block to your package.json file.

#### Index Signature

\[`dependencyName`: `string`\]: `string`

#### See

https://yarnpkg.com/en/docs/package-json#toc-resolutions

***

### scripts?

> `readonly` `optional` **scripts**: [`IScriptsMap`](IScriptsMap.md) \| \{\[`scriptName`: `string`\]: `string`; \}

Defined in: [index.ts:934](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L934)

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

***

### sideEffects?

> `readonly` `optional` **sideEffects**: `boolean` \| `string`[]

Defined in: [index.ts:961](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L961)

Indicates whether the package has side effects for tree-shaking purposes.
When set to `false`, bundlers like webpack can safely remove
unused exports from the bundle.

```json
{
  "sideEffects": false
}
```

Can also be an array of files that have side effects:

```json
{
  "sideEffects": [
    "./src/polyfills.js",
    "*.css"
  ]
}
```

#### See

https://webpack.js.org/guides/tree-shaking/#mark-the-file-as-side-effect-free

***

### type?

> `readonly` `optional` **type**: `"module"` \| `"commonjs"`

Defined in: [index.ts:975](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L975)

Defines the module format for `.js` files in the package scope.
When set to `"module"`, `.js` files are treated as ES modules.
When set to `"commonjs"` (default), `.js` files are treated as CommonJS.

```json
{
  "type": "module"
}
```

#### See

https://nodejs.org/api/packages.html#type

***

### types?

> `readonly` `optional` **types**: `string`

Defined in: [index.ts:990](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L990)

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

#### See

https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html

***

### typesVersions?

> `readonly` `optional` **typesVersions**: [`ITypesVersions`](ITypesVersions.md)

Defined in: [index.ts:1018](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L1018)

Allows providing different type definitions for different TypeScript versions.
This is useful when your package uses features that are only available
in newer TypeScript versions.

```json
{
  "typesVersions": {
    ">=4.0": {
      "*": ["ts4.0/*"]
    },
    ">=3.0": {
      "*": ["ts3.0/*"]
    }
  }
}
```

#### See

https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html#version-selection-with-typesversions

***

### typings?

> `readonly` `optional` **typings**: `string`

Defined in: [index.ts:997](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L997)

Alias for `types`. Used to indicate the main TypeScript declaration file.
This is the older name for the field, but is still widely supported.

#### See

https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html

***

### version?

> `readonly` `optional` **version**: `string`

Defined in: [index.ts:1025](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L1025)

A version string conforming to the Semantic Versioning requirements.

#### See

 - https://docs.npmjs.com/files/package.json#version
 - https://yarnpkg.com/en/docs/package-json#toc-version

***

### workspaces?

> `readonly` `optional` **workspaces**: `string`[] \| [`IWorkspaces`](IWorkspaces.md)

Defined in: [index.ts:1054](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L1054)

Workspaces allow you to manage multiple packages within
a single repository (monorepo). Define the workspace packages
using glob patterns.

```json
{
  "workspaces": [
    "packages/*",
    "apps/*"
  ]
}
```

Can also be an object with more options:

```json
{
  "workspaces": {
    "packages": ["packages/*"],
    "nohoist": ["**/react-native"]
  }
}
```

#### See

 - https://docs.npmjs.com/cli/v10/configuring-npm/package-json#workspaces
 - https://yarnpkg.com/features/workspaces

export interface IAuthor {
  email?: string;
  name: string;
  url?: string;
}

export interface IBinMap {
  [commandName: string]: string;
}

export interface IBugs {
  email?: string;
  url?: string;
}

export interface IConfig {
  [key: string]: string;
}

export interface IDependencyMap {
  [packageName: string]: string;
}

export interface IDirectories {

  /**
   * If you specify a bin directory in directories.bin,
   * all the files in that folder will be added.
   * Because of the way the bin directive works,
   * specifying both a bin path and setting directories.bin
   * is an error. If you want to specify individual files,
   * use bin, and for all the files in an existing bin directory,
   * use directories.bin.
   */
  bin?: string;

  /**
   * Put markdown doc files in here.
   */
  doc?: string;

  /**
   * Put example scripts in here.
   */
  example?: string;

  /**
   * Tell people where the bulk of your library is.
   * Nothing special is done with the lib folder
   * in any way, but it’s useful meta info.
   */
  lib?: string;

  /**
   * A folder that is full of man pages. Sugar to generate
   * a "man" array by walking the folder.
   */
  man?: string;

  /**
   * Put your tests in here.
   */
  test?: string;
}

export interface IEngines {
  node?: string;
  npm?: string;
}

/**
 * A TypeScript definition for the CommonJS package descriptor file.
 * @see http://wiki.commonjs.org/wiki/Packages/1.0
 */
export interface IPackageJson {
  /**
   * You can shorten that all into a single string.
   *
   * ```your-name <account@your-domain> (http://your-url)```
   *
   * @see https://docs.npmjs.com/files/package.json#people-fields-author-contributors
   */
  readonly author?: string | IAuthor;

  /**
   * A lot of packages have one or more executable files that
   * they’d like to install into the PATH. On install, npm will
   * symlink that file into prefix/bin for global installs,
   * or ./node_modules/.bin/ for local installs.
   * For example, myapp could have this:
   *
   * ``` { "bin" : { "myapp" : "./cli.js" } } ```
   *
   * So, when you install myapp, it’ll create a symlink
   * from the cli.js script to /usr/local/bin/myapp.
   * @see https://docs.npmjs.com/files/package.json#bin
   */
  readonly bin?: string | IBinMap;

  /**
   * If your module is meant to be used client-side the browser field
   * should be used instead of the main field. This is helpful to hint
   * users that it might rely on primitives that aren’t available
   * in Node.js modules. (e.g. window)
   */
  readonly browser?: string;

  /**
   * The url to your project’s issue tracker and (or) the email
   * address to which issues should be reported. These are helpful
   * for people who encounter issues with your package.
   * @see https://docs.npmjs.com/files/package.json#bugs
   */
  readonly bugs?: string | IBugs;

  /**
   * This defines an array of package names that will be bundled
   * when publishing the package. In cases where you need to preserve
   * npm packages locally or have them available through a single file
   * download, you can bundle the packages in a tarball file by
   * specifying the package names in the bundledDependencies
   * array and executing npm pack.
   * @see https://docs.npmjs.com/files/package.json#bundleddependencies
   */
  readonly bundledDependencies?: string[];

  /**
   * A "config" object can be used to set configuration parameters
   * used in package scripts that persist across upgrades.
   * For instance, if a package had the following:
   * ``` "config" : { "port" : "8080" } ```
   * and then had a “start” command that then referenced the
   * npm_package_config_port environment variable,
   * then the user could override that by doing npm config set foo:port 8001.
   */
  readonly config?: IConfig;

  /**
   * If there is an AUTHORS file in the root of your package,
   * npm will treat each line as a Name <email> (url) format,
   * where email and url are optional. Lines which start with a # or are blank,
   * will be ignored.
   * @see https://docs.npmjs.com/files/package.json#default-values
   */
  readonly contributors?: string[] | IAuthor[];

  /**
   * If your code only runs on certain cpu architectures, you can specify which ones.
   * @see https://docs.npmjs.com/files/package.json#cpu
   */
  readonly cpu?: CPU[] | string[];

  /**
   * Dependencies are specified in a simple object that maps a package name
   * to a version range. The version range is a string which has one or
   * more space-separated descriptors. Dependencies can also be
   * identified with a tarball or git URL.
   * @see https://docs.npmjs.com/files/package.json#dependencies
   * @see http://wiki.commonjs.org/wiki/Packages/1.0
   */
  readonly dependencies?: IDependencyMap;

  /**
   * A brief description of the package.
   * By convention, the first sentence (up to the first ". ")
   * should be usable as a package title in listings.
   * @see https://docs.npmjs.com/files/package.json#description-1
   * @see http://wiki.commonjs.org/wiki/Packages/1.0
   */
  readonly description?: string;

  /**
   * If someone is planning on downloading and using your module
   * in their program, then they probably don’t want or need
   * to download and build the external test or documentation
   * framework that you use. In this case, it’s best to map
   * these additional items in a devDependencies object.
   * @see https://docs.npmjs.com/files/package.json#devdependencies
   */
  readonly devDependencies?: IDependencyMap;

  /**
   * Object hash of package directories. Typical directories include
   * "lib", "src", "doc", "jars", "test" and "bin". Package manager
   * tools must use these directory definitions to find various package components.
   * @see https://docs.npmjs.com/files/package.json#directories
   * @see http://wiki.commonjs.org/wiki/Packages/1.0
   */
  readonly directories?: IDirectories;

  /**
   * You can specify the version of node that your stuff works on.
   * You can also specify which versions of npm are capable
   * of properly installing your program.
   * @see https://docs.npmjs.com/files/package.json#engines
   */
  readonly engines?: IEngines;

  /**
   * The optional files field is an array of file patterns that describes
   * the entries to be included when your package is installed as a dependency.
   * File patterns follow a similar syntax to .gitignore, but reversed: including
   * a file, directory, or glob pattern will make it so that file is included
   * in the tarball when it’s packed. Omitting the field will make it default
   * to ["*"], which means it will include all files.
   * @see https://docs.npmjs.com/files/package.json#files
   */
  readonly files?: string[];

  /**
   * The url to the project homepage.
   */
  readonly homepage?: string;

  /**
   * An array of string keywords to assist users searching for the package in catalogs.
   * @see https://docs.npmjs.com/files/package.json#keywords
   */
  readonly keywords?: string[];

  /**
   * A license for your package so that people know how they are permitted
   * to use it, and any restrictions you’re placing on it.
   * If you’re using a common license such as BSD-2-Clause or MIT,
   * add a current SPDX license identifier.
   * @see https://docs.npmjs.com/files/package.json#license
   * @see https://spdx.org/licenses/
   * @see https://help.github.com/en/articles/licensing-a-repository
   */
  readonly license?: SPDXLicenseID | string;

  /**
   * The main field is a module ID that is the primary entry point to your package.
   * That is, if your package is named foo, and a user installs it, and then
   * does require("foo"), then your main module’s exports object will be returned.
   * This should be a module ID relative to the root of your package folder.
   * For most modules, it makes the most sense to have a main script and often not much else.
   */
  readonly main?: string;

  /**
   * Specify either a single file or an array of filenames
   * to put in place for the man program to find.
   * @see https://docs.npmjs.com/files/package.json#man
   */
  readonly man?: string | string[];

  /**
   * The name and version together form an identifier that is assumed to be
   * completely unique. If you don’t plan to publish your package, the name
   * and version fields are optional. A name can be optionally prefixed by
   * a scope, e.g. @myorg/mypackage.
   * @see https://docs.npmjs.com/files/package.json#name
   */
  readonly name?: string;

  /**
   * If a dependency can be used, but you would like npm to proceed
   * if it cannot be found or fails to install, then you may put it
   * in the optionalDependencies object. This is a map of package name
   * to version or url, just like the dependencies object.
   * The difference is that build failures do not cause installation to fail.
   * It is still your program’s responsibility to handle the lack of the dependency.
   * @see https://docs.npmjs.com/files/package.json#optionaldependencies
   */
  readonly optionalDependencies?: IDependencyMap;

  /**
   * You can specify which operating systems your module will run on
   * @see https://docs.npmjs.com/files/package.json#os
   */
  readonly os?: OS[] | string[];

  /**
   * In some cases, you want to express the compatibility of your package
   * with a host tool or library, while not necessarily doing a require
   * of this host. This is usually referred to as a plugin. Notably,
   * your module may be exposing a specific interface, expected
   * and specified by the host documentation.
   * @see https://docs.npmjs.com/files/package.json#peerdependencies
   */
  readonly peerDependencies?: IDependencyMap;

  /**
   * This option used to trigger an npm warning, but it will no longer warn.
   * It is purely there for informational purposes. It is now recommended
   * that you install any binaries as local devDependencies wherever possible.
   * @deprecated
   */
  readonly preferGlobal?: boolean;

  /**
   * If you set "private": true in your package.json, then npm will refuse to publish it.
   * This is a way to prevent accidental publication of private repositories.
   * If you would like to ensure that a given package is only ever published to
   * a specific registry (for example, an internal registry),
   * then use the [[publishConfig]] dictionary described below to override
   * the registry config param at publish-time.
   * @see https://docs.npmjs.com/files/package.json#private
   */
  readonly private?: boolean;

  /**
   * This is a set of config values that will be used at publish-time.
   * It’s especially handy if you want to set the tag, registry or access,
   * so that you can ensure that a given package is not tagged with “latest”,
   * published to the global public registry or that a scoped module is private by default.
   * Any config values can be overridden, but only "tag", "registry" and
   * "access" probably matter for the purposes of publishing.
   * See npm-config to see the list of config options that can be overridden.
   * @see https://docs.npmjs.com/files/package.json#publishconfig
   */
  readonly publishConfig?: IPublishConfig;

  /**
   * Specify the place where your code lives.
   * This is helpful for people who want to contribute.
   * ```json
   * "repository": {
   *   "type" : "git",
   *   "url" : "https://github.com/ajaxlab/package-json-type.git"
   * }
   * "repository": {
   *   "type" : "svn",
   *   "url" : "https://v8.googlecode.com/svn/trunk/"
   * }
   * ```
   * For monorepo, you can specify like this
   * ```json
   * "repository": {
   *   "type" : "git",
   *   "url" : "https://github.com/facebook/react.git",
   *   "directory": "packages/react-dom"
   * }
   * ```
   */
  readonly repository?: string | IRepository;

  /**
   * The "scripts" property is a dictionary containing script commands
   * that are run at various times in the lifecycle of your package.
   * The key is the lifecycle event, and the value is the command to run at that point.
   * ```json
   * "scripts": {
   *   "install": "install.js",
   *   "uninstall": "uninstall.js",
   *   "build": "build.js",
   *   "doc": "make-doc.js",
   *   "test": "test.js",
   * }
   * ```
   */
  readonly scripts?: IScriptsMap;

  /**
   * A version string conforming to the Semantic Versioning requirements.
   * @see https://docs.npmjs.com/files/package.json#version
   */
  readonly version?: string;
}

export interface IPublishConfig {
  registry?: string;
}

export interface IRepository {
  type: string;
  url: string;
}

export interface IScriptsMap {
  [scriptName: string]: string;
}

export type CPU = 'arm' | 'ia32' | 'mips' | 'x64';

export type OS = 'darwin' | 'linux' | 'win32';

export type SPDXLicenseID = 'AFL-3.0'
  | 'APACHE-2.0' | 'ARTISTIC-2.0' | 'BSL-1.0' | 'BSD-2-CLAUSE' | 'BSD-3-CLAUSE'
  | 'BSD-3-CLAUSE-CLEAR' | 'CC' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0'
  | 'WTFPL' | 'ECL-2.0' | 'EPL-1.0' | 'EUPL-1.1'
  | 'AGPL-3.0' | 'GPL' | 'GPL-2.0' | 'GPL-3.0' | 'LGPL' | 'LGPL-2.1' | 'LGPL-3.0'
  | 'ISC' | 'LPPL-1.3C' | 'MS-PL' | 'MIT' | 'MPL-2.0' | 'OSL-3.0' | 'POSTGRESQL'
  | 'OFL-1.1' | 'NCSA' | 'UNLICENSE' | 'ZLIB';

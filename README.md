# package-json-type

[![npm](https://img.shields.io/npm/v/package-json-type.svg)](https://www.npmjs.com/package/package-json-type)

A TypeScript definition for package.json file

## Usages

### Install

```bash
npm install -S package-json-type
```

```bash
yarn add package-json-type
```

### Import

```typescript
import {
  IDependencyMap,
  IEngines,
  IPackageJson,
  SPDXLicenseIDApproved,
} from "package-json-type";

const dependency: IDependencyMap = {
  bar: "^1.0.0",
  baz: "^2.1.0",
  qux: "file:../src/qux",
};

const engines: IEngines = {
  node: ">=6.0.1 <11.0.0",
  yarn: "^1.15.0",
  zlib: "^0.14.0",
};

const license: SPDXLicenseIDApproved = "MIT";

const pkg: IPackageJson = {
  name: "foo",
  version: "1.2.3",
  dependency,
  description: "This is awesome foo",
  engines,
  license,
};
```

## Types

```ts
interface IPackageJson {
  author?: string | IAuthor;
  bin?: string | IBinMap;
  browser?: string | IBrowserMap;
  bugs?: string | IBugs;
  bundledDependencies?: string[];
  bundleDependencies?: string[];
  config?: IConfig;
  contributors?: (string | IAuthor)[];
  cpu?: CPU[];
  dependencies?: IDependencyMap;
  deprecated?: string;
  description?: string;
  devDependencies?: IDependencyMap;
  devEngines?: IDevEngines;
  directories?: IDirectories;
  engines?: IEngines;
  exports?: string | IConditionalExport | IExportsMap | string[] | null;
  files?: string[];
  flat?: boolean;
  funding?: string | IFunding | IFunding[];
  homepage?: string;
  imports?: IImportsMap;
  jsdelivr?: string;
  keywords?: string[];
  libc?: Libc[];
  license?: SPDXLicenseID | SPDXLicenseIDApproved;
  main?: string;
  maintainers?: (string | IAuthor)[];
  man?: string | string[];
  module?: string;
  name?: string;
  optionalDependencies?: IDependencyMap;
  os?: OS[];
  overrides?: IOverrides;
  packageManager?: string;
  peerDependencies?: IDependencyMap;
  peerDependenciesMeta?: IPeerDependenciesMeta;
  preferGlobal?: boolean;
  private?: boolean;
  publishConfig?: IPublishConfig;
  repository?: string | IRepository;
  resolutions?: { [dependencyName: string]: string };
  scripts?: IScriptsMap | { [scriptName: string]: string };
  sideEffects?: boolean | string[];
  type?: "module" | "commonjs";
  types?: string;
  typesVersions?: ITypesVersions;
  typings?: string;
  unpkg?: string;
  version?: string;
  workspaces?: string[] | IWorkspaces;
  [field: string]: any;
}
```

- [IAuthor](https://ajaxlab.github.io/package-json-type/interfaces/IAuthor.html)
- [IBinMap](https://ajaxlab.github.io/package-json-type/interfaces/IBinMap.html)
- [IBrowserMap](https://ajaxlab.github.io/package-json-type/interfaces/IBrowserMap.html)
- [IBugs](https://ajaxlab.github.io/package-json-type/interfaces/IBugs.html)
- [IConditionalExport](https://ajaxlab.github.io/package-json-type/interfaces/IConditionalExport.html)
- [IConfig](https://ajaxlab.github.io/package-json-type/interfaces/IConfig.html)
- [IDependencyMap](https://ajaxlab.github.io/package-json-type/interfaces/IDependencyMap.html)
- [IDevEnginePackageManager](https://ajaxlab.github.io/package-json-type/interfaces/IDevEnginePackageManager.html)
- [IDevEngineRuntime](https://ajaxlab.github.io/package-json-type/interfaces/IDevEngineRuntime.html)
- [IDevEngines](https://ajaxlab.github.io/package-json-type/interfaces/IDevEngines.html)
- [IDirectories](https://ajaxlab.github.io/package-json-type/interfaces/IDirectories.html)
- [IEngines](https://ajaxlab.github.io/package-json-type/interfaces/IEngines.html)
- [IExportsMap](https://ajaxlab.github.io/package-json-type/interfaces/IExportsMap.html)
- [IFunding](https://ajaxlab.github.io/package-json-type/interfaces/IFunding.html)
- [IImportsMap](https://ajaxlab.github.io/package-json-type/interfaces/IImportsMap.html)
- [IOverrides](https://ajaxlab.github.io/package-json-type/interfaces/IOverrides.html)
- [IPackageJson](https://ajaxlab.github.io/package-json-type/interfaces/IPackageJson.html)
- [IPeerDependenciesMeta](https://ajaxlab.github.io/package-json-type/interfaces/IPeerDependenciesMeta.html)
- [IPeerDependencyMeta](https://ajaxlab.github.io/package-json-type/interfaces/IPeerDependencyMeta.html)
- [IPublishConfig](https://ajaxlab.github.io/package-json-type/interfaces/IPublishConfig.html)
- [IRepository](https://ajaxlab.github.io/package-json-type/interfaces/IRepository.html)
- [IScriptsMap](https://ajaxlab.github.io/package-json-type/interfaces/IScriptsMap.html)
- [ITypesVersions](https://ajaxlab.github.io/package-json-type/interfaces/ITypesVersions.html)
- [IWorkspaces](https://ajaxlab.github.io/package-json-type/interfaces/IWorkspaces.html)
- [CPU](https://ajaxlab.github.io/package-json-type/types/CPU.html)
- [Libc](https://ajaxlab.github.io/package-json-type/types/Libc.html)
- [OS](https://ajaxlab.github.io/package-json-type/types/OS.html)
- [SPDXLicenseID](https://ajaxlab.github.io/package-json-type/types/SPDXLicenseID.html)
- [SPDXLicenseIDApproved](https://ajaxlab.github.io/package-json-type/types/SPDXLicenseIDApproved.html)

## Documents

- [TS Doc](http://ajaxlab.github.io/package-json-type/)

- [Markdown](https://github.com/ajaxlab/package-json-type/blob/master/md/interfaces/ipackagejson.md)

## Issues

If you have any problems, please let us know on github [issues](https://github.com/ajaxlab/package-json-type/issues).

## Contributing

Contributions are always welcome :)

1. If you'd like to contribute, please fork the repository
2. run `npm i` or `yarn` inside the project
3. run `npm run dev` to run in dev mode
4. Make changes as you'd like
5. To test run `npm test` or `yarn test`
6. For clean code run `npm run lint` or `yarn lint`
7. And send us your pull requests!

## License

This project is licensed under [MIT](./LICENSE) license.

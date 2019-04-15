# package-json-type

[![npm](https://img.shields.io/npm/v/package-json-type.svg)](https://www.npmjs.com/package/package-json-type)

A TypeScript definition for package.json file

## Usages

* Install

  ```bash
  npm install -S package-json-type
  ```

  ```bash
  yarn add package-json-type
  ```

* Import

  ```typescript
  import { IDependencyMap, IPackageJson, SPDXLicenseIDApproved } from 'package-json-type';

  const dependency: IDependencyMap = {
    bar: '^1.0.0',
    baz: '^2.1.0',
    qux: 'file:../src/qux'
  };

  const license: SPDXLicenseIDApproved = 'MIT';

  const pkg: IPackageJson = {
    name: 'foo',
    version: '1.2.3',
    dependency,
    description: 'This is awesome foo',
    license
  };
  ```

## Documents

* [TS Doc](http://ajaxlab.github.io/package-json-type/)

* [Markdown](https://github.com/ajaxlab/package-json-type/blob/master/md/interfaces/ipackagejson.md)

## Issues

* If you have any issues, please report to us posting [issues](https://github.com/ajaxlab/package-json-type/issues) on GitHub.

## License

* [MIT](./LICENSE)

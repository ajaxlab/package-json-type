[**package-json-type**](../README.md)

***

[package-json-type](../globals.md) / IDevEngines

# Interface: IDevEngines

Defined in: [index.ts:245](https://github.com/ajaxlab/package-json-type/blob/b079c269fd789de45d0c3206fdcd6decbf5d8209/src/index.ts#L245)

Development engine requirements.
Allows specifying runtime and package manager requirements
that only apply during development.

```json
{
  "devEngines": {
    "runtime": {
      "name": "node",
      "version": ">=20.0.0",
      "onFail": "error"
    },
    "packageManager": {
      "name": "npm",
      "version": ">=10.0.0",
      "onFail": "warn"
    }
  }
}
```

## See

https://docs.npmjs.com/cli/v10/configuring-npm/package-json#devengines

## Properties

### packageManager?

> `optional` **packageManager**: [`IDevEnginePackageManager`](IDevEnginePackageManager.md) \| [`IDevEnginePackageManager`](IDevEnginePackageManager.md)[]

Defined in: [index.ts:254](https://github.com/ajaxlab/package-json-type/blob/b079c269fd789de45d0c3206fdcd6decbf5d8209/src/index.ts#L254)

Package manager requirements for development.

***

### runtime?

> `optional` **runtime**: [`IDevEngineRuntime`](IDevEngineRuntime.md) \| [`IDevEngineRuntime`](IDevEngineRuntime.md)[]

Defined in: [index.ts:249](https://github.com/ajaxlab/package-json-type/blob/b079c269fd789de45d0c3206fdcd6decbf5d8209/src/index.ts#L249)

Runtime requirements for development.

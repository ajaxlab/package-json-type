[**package-json-type**](../README.md)

***

[package-json-type](../globals.md) / IConditionalExport

# Interface: IConditionalExport

Defined in: [index.ts:280](https://github.com/ajaxlab/package-json-type/blob/b079c269fd789de45d0c3206fdcd6decbf5d8209/src/index.ts#L280)

Conditional export entry for the `exports` field.
Allows specifying different entry points based on conditions
like `import`, `require`, `node`, `browser`, etc.

```json
{
  "exports": {
    ".": {
      "import": {
        "types": "./dist/esm/index.d.ts",
        "default": "./dist/esm/index.js"
      },
      "require": {
        "types": "./dist/cjs/index.d.ts",
        "default": "./dist/cjs/index.js"
      }
    }
  }
}
```

## See

https://nodejs.org/api/packages.html#conditional-exports

## Indexable

\[`condition`: `string`\]: `string` \| `IConditionalExport` \| `undefined`

Allows custom conditions.

## Properties

### browser?

> `optional` **browser**: `string` \| `IConditionalExport`

Defined in: [index.ts:314](https://github.com/ajaxlab/package-json-type/blob/b079c269fd789de45d0c3206fdcd6decbf5d8209/src/index.ts#L314)

Entry point for browser environments.

***

### bun?

> `optional` **bun**: `string` \| `IConditionalExport`

Defined in: [index.ts:326](https://github.com/ajaxlab/package-json-type/blob/b079c269fd789de45d0c3206fdcd6decbf5d8209/src/index.ts#L326)

Entry point for Bun runtime.

#### See

https://bun.sh/docs/runtime/modules#resolution

***

### default?

> `optional` **default**: `string` \| `IConditionalExport`

Defined in: [index.ts:304](https://github.com/ajaxlab/package-json-type/blob/b079c269fd789de45d0c3206fdcd6decbf5d8209/src/index.ts#L304)

Generic fallback that always matches. Must be the last condition.

***

### deno?

> `optional` **deno**: `string` \| `IConditionalExport`

Defined in: [index.ts:320](https://github.com/ajaxlab/package-json-type/blob/b079c269fd789de45d0c3206fdcd6decbf5d8209/src/index.ts#L320)

Entry point for Deno runtime.

#### See

https://deno.land/manual/node/package_json

***

### development?

> `optional` **development**: `string` \| `IConditionalExport`

Defined in: [index.ts:347](https://github.com/ajaxlab/package-json-type/blob/b079c269fd789de45d0c3206fdcd6decbf5d8209/src/index.ts#L347)

Entry point for development builds.
Used by bundlers to provide development-specific code.

***

### electron?

> `optional` **electron**: `string` \| `IConditionalExport`

Defined in: [index.ts:336](https://github.com/ajaxlab/package-json-type/blob/b079c269fd789de45d0c3206fdcd6decbf5d8209/src/index.ts#L336)

Entry point for Electron main process.

***

### import?

> `optional` **import**: `string` \| `IConditionalExport`

Defined in: [index.ts:284](https://github.com/ajaxlab/package-json-type/blob/b079c269fd789de45d0c3206fdcd6decbf5d8209/src/index.ts#L284)

Entry point when loaded via `import` or `import()`.

***

### node?

> `optional` **node**: `string` \| `IConditionalExport`

Defined in: [index.ts:294](https://github.com/ajaxlab/package-json-type/blob/b079c269fd789de45d0c3206fdcd6decbf5d8209/src/index.ts#L294)

Entry point for any Node.js environment.

***

### node-addons?

> `optional` **node-addons**: `string` \| `IConditionalExport`

Defined in: [index.ts:299](https://github.com/ajaxlab/package-json-type/blob/b079c269fd789de45d0c3206fdcd6decbf5d8209/src/index.ts#L299)

Entry point for Node.js addon modules.

***

### production?

> `optional` **production**: `string` \| `IConditionalExport`

Defined in: [index.ts:353](https://github.com/ajaxlab/package-json-type/blob/b079c269fd789de45d0c3206fdcd6decbf5d8209/src/index.ts#L353)

Entry point for production builds.
Used by bundlers to provide production-optimized code.

***

### react-native?

> `optional` **react-native**: `string` \| `IConditionalExport`

Defined in: [index.ts:341](https://github.com/ajaxlab/package-json-type/blob/b079c269fd789de45d0c3206fdcd6decbf5d8209/src/index.ts#L341)

Entry point for React Native.

***

### require?

> `optional` **require**: `string` \| `IConditionalExport`

Defined in: [index.ts:289](https://github.com/ajaxlab/package-json-type/blob/b079c269fd789de45d0c3206fdcd6decbf5d8209/src/index.ts#L289)

Entry point when loaded via `require()`.

***

### types?

> `optional` **types**: `string`

Defined in: [index.ts:309](https://github.com/ajaxlab/package-json-type/blob/b079c269fd789de45d0c3206fdcd6decbf5d8209/src/index.ts#L309)

TypeScript type definitions entry point.

***

### worker?

> `optional` **worker**: `string` \| `IConditionalExport`

Defined in: [index.ts:331](https://github.com/ajaxlab/package-json-type/blob/b079c269fd789de45d0c3206fdcd6decbf5d8209/src/index.ts#L331)

Entry point for Worker environments (Web Workers, Service Workers).

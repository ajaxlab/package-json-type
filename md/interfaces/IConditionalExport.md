[**package-json-type**](../README.md)

***

[package-json-type](../globals.md) / IConditionalExport

# Interface: IConditionalExport

Defined in: [index.ts:182](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L182)

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

Defined in: [index.ts:211](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L211)

Entry point for browser environments.

***

### default?

> `optional` **default**: `string` \| `IConditionalExport`

Defined in: [index.ts:201](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L201)

Generic fallback that always matches. Must be the last condition.

***

### import?

> `optional` **import**: `string` \| `IConditionalExport`

Defined in: [index.ts:186](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L186)

Entry point when loaded via `import` or `import()`.

***

### node?

> `optional` **node**: `string` \| `IConditionalExport`

Defined in: [index.ts:196](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L196)

Entry point for any Node.js environment.

***

### require?

> `optional` **require**: `string` \| `IConditionalExport`

Defined in: [index.ts:191](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L191)

Entry point when loaded via `require()`.

***

### types?

> `optional` **types**: `string`

Defined in: [index.ts:206](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L206)

TypeScript type definitions entry point.

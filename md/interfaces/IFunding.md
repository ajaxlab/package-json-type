[**package-json-type**](../README.md)

***

[package-json-type](../globals.md) / IFunding

# Interface: IFunding

Defined in: [index.ts:419](https://github.com/ajaxlab/package-json-type/blob/b079c269fd789de45d0c3206fdcd6decbf5d8209/src/index.ts#L419)

Funding information for a package.
Provides details on how to financially support the package.

```json
{
  "funding": {
    "type": "opencollective",
    "url": "https://opencollective.com/webpack"
  }
}
```

## See

https://docs.npmjs.com/cli/v10/configuring-npm/package-json#funding

## Properties

### type?

> `optional` **type**: `string`

Defined in: [index.ts:423](https://github.com/ajaxlab/package-json-type/blob/b079c269fd789de45d0c3206fdcd6decbf5d8209/src/index.ts#L423)

The type of funding (e.g., "opencollective", "github", "patreon").

***

### url

> **url**: `string`

Defined in: [index.ts:428](https://github.com/ajaxlab/package-json-type/blob/b079c269fd789de45d0c3206fdcd6decbf5d8209/src/index.ts#L428)

The URL to the funding page.

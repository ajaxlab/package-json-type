[**package-json-type**](../README.md)

***

[package-json-type](../globals.md) / IFunding

# Interface: IFunding

Defined in: [index.ts:277](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L277)

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

Defined in: [index.ts:281](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L281)

The type of funding (e.g., "opencollective", "github", "patreon").

***

### url

> **url**: `string`

Defined in: [index.ts:286](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L286)

The URL to the funding page.

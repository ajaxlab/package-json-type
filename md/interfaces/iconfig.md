[**package-json-type**](../README.md)

***

[package-json-type](../globals.md) / IConfig

# Interface: IConfig

Defined in: [index.ts:64](https://github.com/ajaxlab/package-json-type/blob/caff02b677277957703a01fc439db9c263653d61/src/index.ts#L64)

A `config` object can be used to set configuration parameters
used in package scripts that persist across upgrades.
For instance, if a package had the following:
```json
{
  "config" : {
    "port" : "8080"
  }
}
```
and then had a `start` command that then referenced the
`npm_package_config_port` environment variable,
then the user could override that by doing npm config set `foo:port 8001`.

## See

 - https://docs.npmjs.com/files/package.json#config
 - https://yarnpkg.com/en/docs/package-json#toc-config

## Indexable

\[`key`: `string`\]: `string`

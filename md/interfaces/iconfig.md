> # Interface: IConfig

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

**`see`** https://docs.npmjs.com/files/package.json#config

**`see`** https://yarnpkg.com/en/docs/package-json#toc-config

## Hierarchy

* **IConfig**

## Indexable

* \[ **key**: *string*\]: string

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
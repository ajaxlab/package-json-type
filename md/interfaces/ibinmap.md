

An executable file which will be installed into the PATH with a package install. npm will symlink that file into prefix/bin for global installs, or ./node\_modules/.bin/ for local installs.

```json
{
  "bin" : {
    "myapp" : "./cli.js"
  }
}
```

For example, with linux if you install myapp, it'll create a symlink from the cli.js script to /usr/local/bin/myapp.

*__see__*: [https://docs.npmjs.com/files/package.json#bin](https://docs.npmjs.com/files/package.json#bin)

# Hierarchy

**IBinMap**

# Indexable

\[commandName: `string`\]:&nbsp;`string`
An executable file which will be installed into the PATH with a package install. npm will symlink that file into prefix/bin for global installs, or ./node\_modules/.bin/ for local installs.

```json
{
  "bin" : {
    "myapp" : "./cli.js"
  }
}
```

For example, with linux if you install myapp, it'll create a symlink from the cli.js script to /usr/local/bin/myapp.


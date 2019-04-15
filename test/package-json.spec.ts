import { IPackageJson } from '../src';

const empty: IPackageJson = {};

const free: IPackageJson = {
  free1: 'free field',
  free2: {
    someKey: 'some value'
  },
  free3: [
    'some value'
  ]
};

const authorPkg1: IPackageJson = {
  author: {
    email: 'hello@world',
    name: 'hello'
  }
};

const authorPkg2: IPackageJson = {
  author: 'your-name <account@your-domain> (http://your-url)'
};

const binPkg1: IPackageJson = {
  bin: {
    app: 'bin/app.js'
  }
};

const binPkg2: IPackageJson = {
  bin: 'bin/app.js'
};

const browserPkg: IPackageJson = {
  browser: './dist/index.amd.js'
};

const bugsPkg: IPackageJson = {
  bugs: 'https://some-homepage'
};

const bundledDependencies: IPackageJson = {
  bundledDependencies: [
    'abc', 'def'
  ]
};

const configPkg: IPackageJson = {
  config: {
    host: 'some-host',
    port: '8080'
  }
};

const contributorsPkg1: IPackageJson = {
  contributors: [
    'hello1 <hello1@world>',
    {
      email: 'hello2@world',
      name: 'hello2'
    }
  ]
};

const contributorsPkg2: IPackageJson = {
  contributors: [
    'hello1 <hello1@world>',
    'hello2 <hello2@world>'
  ]
};

const contributorsPkg3: IPackageJson = {
  contributors: [
    {
      email: 'hello1@world',
      name: 'hello1'
    },
    {
      email: 'hello2@world',
      name: 'hello2'
    }
  ]
};

const cpuPkg1: IPackageJson = {
  cpu: []
};

const cpuPkg2: IPackageJson = {
  cpu: [
    'arm'
  ]
};

const dependenciesPkg1: IPackageJson = {
  dependencies: {}
};

const dependenciesPkg2: IPackageJson = {
  dependencies: {
    abc: '^0.1.0'
  }
};

const dependenciesPkg3: IPackageJson = {
  dependencies: {
    abc: '^0.1.0',
    def: '^0.1.0'
  }
};

const dependenciesPkg4: IPackageJson = {
  dependencies: {
    abc: '^0.1.0',
    def: '^0.1.0',
    ghi: 'file:src/ghi'
  }
};

const descriptionPkg1: IPackageJson = {
  description: 'some description'
};

const descriptionPkg2: IPackageJson = {
  description: ''
};

const devDependenciesPkg1: IPackageJson = {
  devDependencies: {}
};

const devDependenciesPkg2: IPackageJson = {
  devDependencies: {
    abc: '^0.1.0'
  }
};

const devDependenciesPkg3: IPackageJson = {
  devDependencies: {
    abc: '^0.1.0',
    def: '^0.1.0'
  }
};

const devDependenciesPkg4: IPackageJson = {
  devDependencies: {
    abc: '^0.1.0',
    def: '^0.1.0',
    ghi: 'file:src/ghi'
  }
};

const directoriesPkg1: IPackageJson = {
  directories: {
    bin: '',
    doc: '',
    example: '',
    lib: '',
    man: '',
    test: ''
  }
};

const directoriesPkg2: IPackageJson = {
  directories: {
    bin: 'bin',
    doc: 'doc',
    example: 'example',
    lib: 'lib',
    man: 'man',
    test: 'test'
  }
};

const directoriesPkg3: IPackageJson = {
  directories: {
  }
};

const enginesPkg1: IPackageJson = {
  engines: {}
};

const enginesPkg2: IPackageJson = {
  engines: {
    node: '>=0.10.3 <0.12'
  }
};

const enginesPkg3: IPackageJson = {
  engines: {
    npm: '^5.2.0'
  }
};

const enginesPkg4: IPackageJson = {
  engines: {
    node: '>=0.10.3 <0.12',
    npm: '^5.2.0'
  }
};

const enginesPkg5: IPackageJson = {
  engines: {
    npm: '^5.2.0',
    yarn: '^0.14.0'
  }
};

const enginesPkg6: IPackageJson = {
  engines: {
    node: '>=6.0.1 <8.0.0',
    yarn: '^0.14.0',
    zlib: '^0.14.0'
  }
};

const filesPkg1: IPackageJson = {
  files: []
};

const filesPkg2: IPackageJson = {
  files: [
    'dist'
  ]
};

const homepagePkg1: IPackageJson = {
  homepage: ''
};

const homepagePkg2: IPackageJson = {
  homepage: 'https://some-homepage'
};

const keywordsPkg1: IPackageJson = {
  keywords: []
};

const keywordsPkg2: IPackageJson = {
  keywords: [
    'key1', 'key2'
  ]
};

const licensePkg1: IPackageJson = {
  license: 'MIT'
};

const licensePkg2: IPackageJson = {
  license: 'MPL-2.0-no-copyleft-exception'
};

const mainPkg: IPackageJson = {
  main: 'dist/index.js'
};

const manPkg1: IPackageJson = {
  man: '/dist/man'
};

const manPkg2: IPackageJson = {
  man: [
    '/dist/man1', '/dist/man2'
  ]
};

const namePkg1: IPackageJson = {
  name: 'some-name'
};

const namePkg2: IPackageJson = {
  name: ''
};

const optionalDependenciesPkg1: IPackageJson = {
  optionalDependencies: {
  }
};

const optionalDependenciesPkg2: IPackageJson = {
  optionalDependencies: {
    'package-5': '^1.6.1'
  }
};

const osPkg1: IPackageJson = {
  os: []
};

const osPkg2: IPackageJson = {
  os: [
    'aix', 'android', 'darwin', 'freebsd', 'linux', 'openbsd', 'sunos', 'win32', 'cygwin'
  ]
};

const peerDependenciesPkg1: IPackageJson = {
  peerDependencies: {}
};

const peerDependenciesPkg2: IPackageJson = {
  peerDependencies: {
    abc: '^0.1.0'
  }
};

const privatePkg: IPackageJson = {
  private: true
};

const publishConfigPkg1: IPackageJson = {
  publishConfig: {
    access: 'public',
    registry: 'https://registry.npmjs.org/',
    tag: 'next'
  }
};

const publishConfigPkg2: IPackageJson = {
  publishConfig: {
    registry: 'https://registry.npmjs.org/'
  }
};

const repositoryPkg1: IPackageJson = {
  repository: {
    type: 'git',
    url: 'https://github.com/user/repo.git'
  }
};

const repositoryPkg2: IPackageJson = {
  repository: 'github:user/repo'
};

const repositoryPkg3: IPackageJson = {
  repository: {
    directory: 'packages/react-dom',
    type: 'git',
    url: 'https://github.com/facebook/react.git'
  }
};

const resolutionsPkg1: IPackageJson = {
  resolutions: {
    'dependencies-package-1/transitive-package-3': '^2.1.1',
    'transitive-package-1': '0.0.29',
    'transitive-package-2': 'file:./local-forks/transitive-package-2'
  }
};

const scriptsPkg1: IPackageJson = {
  scripts: {
    custom: 'custom'
  }
};

const scriptsPkg2: IPackageJson = {
  scripts: {
    install: 'some script',
    postinstall: 'some script',
    postpack: 'some script',
    postrestart: 'some script',
    postshrinkwrap: 'some script',
    poststart: 'some script',
    poststop: 'some script',
    posttest: 'some script',
    postuninstall: 'some script',
    postversion: 'some script',
    preinstall: 'some script',
    prepack: 'some script',
    prepare: 'some script',
    prepublish: 'some script',
    prepublishOnly: 'some script',
    prerestart: 'some script',
    preshrinkwrap: 'some script',
    prestart: 'some script',
    prestop: 'some script',
    pretest: 'some script',
    preuninstall: 'some script',
    preversion: 'some script',
    publish: 'some script',
    restart: 'some script',
    shrinkwrap: 'some script',
    start: 'some script',
    stop: 'some script',
    test: 'some script',
    uninstall: 'some script',
    version: 'some script'
  }
};

const typesPkg1: IPackageJson = {
  types: ''
};

const typesPkg2: IPackageJson = {
  types: 'types/index.d.ts'
};

const versionPkg1: IPackageJson = {
  version: ''
};

const versionPkg2: IPackageJson = {
  version: '1.0.1'
};

const allInOne1: IPackageJson = {
  author: {
    email: 'hello@world',
    name: 'hello'
  },
  dependencies: {
    abc: '^1.0.0'
  },
  description: 'This is a test package 1',
  name: 'test1',
  types: 'types/main.d.ts',
  version: '0.1.0',
};

const allInOne2: IPackageJson = {
  author: 'your-name <account@your-domain> (http://your-url)',
  dependencies: {
    abc: 'file:src/def'
  },
  description: 'This is a test package 2',
  name: 'test2',
  version: '0.1.0',
};

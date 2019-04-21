
package-json-type
=================

[![npm](https://img.shields.io/npm/v/package-json-type.svg)](https://www.npmjs.com/package/package-json-type)

A TypeScript definition for package.json file

Usages
------

### Install

```bash
  npm install -S package-json-type
```

```bash
  yarn add package-json-type
```

### Import

```typescript
  import {
    IDependencyMap,
    IEngines,
    IPackageJson,
    SPDXLicenseIDApproved
  } from 'package-json-type';

  const dependency: IDependencyMap = {
    bar: '^1.0.0',
    baz: '^2.1.0',
    qux: 'file:../src/qux'
  };

  const engines: IEngines = {
    node: '>=6.0.1 <11.0.0',
    yarn: '^1.15.0',
    zlib: '^0.14.0'
  };

  const license: SPDXLicenseIDApproved = 'MIT';

  const pkg: IPackageJson = {
    name: 'foo',
    version: '1.2.3',
    dependency,
    description: 'This is awesome foo',
    engines,
    license
  };
```

Types
-----

*   [IAuthor](https://ajaxlab.github.io/package-json-type/interfaces/iauthor.html)
*   [IBinMap](https://ajaxlab.github.io/package-json-type/interfaces/ibinmap.html)
*   [IBugs](https://ajaxlab.github.io/package-json-type/interfaces/ibugs.html)
*   [IConfig](https://ajaxlab.github.io/package-json-type/interfaces/iconfig.html)
*   [IDependencyMap](https://ajaxlab.github.io/package-json-type/interfaces/idependencymap.html)
*   [IDirectories](https://ajaxlab.github.io/package-json-type/interfaces/idirectories.html)
*   [IEngines](https://ajaxlab.github.io/package-json-type/interfaces/iengines.html)
*   [IPackageJson](https://ajaxlab.github.io/package-json-type/interfaces/ipackagejson.html)
*   [IPublishConfig](https://ajaxlab.github.io/package-json-type/interfaces/ipublishconfig.html)
*   [IRepository](https://ajaxlab.github.io/package-json-type/interfaces/irepository.html)
*   [IScriptsMap](https://ajaxlab.github.io/package-json-type/interfaces/iscriptsmap.html)
*   [CPU](https://ajaxlab.github.io/package-json-type/globals.html#cpu)
*   [OS](https://ajaxlab.github.io/package-json-type/globals.html#os)
*   [SPDXLicenseID](https://ajaxlab.github.io/package-json-type/globals.html#spdxlicenseid)
*   [SPDXLicenseIDApproved](https://ajaxlab.github.io/package-json-type/globals.html#spdxlicenseidapproved)

Documents
---------

*   [TS Doc](http://ajaxlab.github.io/package-json-type/)
    
*   [Markdown](https://github.com/ajaxlab/package-json-type/blob/master/md/interfaces/ipackagejson.md)
    

Issues
------

If you have any problems, please let us know on github [issues](https://github.com/ajaxlab/package-json-type/issues).

Contributing
------------

Contributions are always welcome :)

1.  If you'd like to contribute, please fork the repository
2.  run `npm i` or `yarn` inside the project
3.  run `npm run dev` to run in dev mode
4.  Make changes as you'd like
5.  To test run `npm test` or `yarn test`
6.  For clean code run `npm run lint` or `yarn lint`
7.  And send us your pull requests!

License
-------

This project is licensed under [MIT](./LICENSE) license.

# Type aliases

<a id="cpu"></a>

##  CPU

**Ƭ CPU**: *"arm" \| "arm64" \| "ia32" \| "mips" \| "mipsel" \| "ppc" \| "ppc64" \| "s390" \| "s390x" \| "x32" \| "x64"*

*Defined in [index.ts:716](https://github.com/ajaxlab/package-json-type/blob/9e707da/src/index.ts#L716)*

It checks against `process.arc`.

*__see__*: [https://docs.npmjs.com/files/package.json#cpu](https://docs.npmjs.com/files/package.json#cpu)

*__see__*: [https://yarnpkg.com/en/docs/package-json#toc-cpu](https://yarnpkg.com/en/docs/package-json#toc-cpu)

*__see__*: [https://nodejs.org/api/process.html#process\_process\_arch](https://nodejs.org/api/process.html#process_process_arch)

___
<a id="os"></a>

##  OS

**Ƭ OS**: *"aix" \| "android" \| "darwin" \| "freebsd" \| "linux" \| "openbsd" \| "sunos" \| "win32" \| "cygwin"*

*Defined in [index.ts:734](https://github.com/ajaxlab/package-json-type/blob/9e707da/src/index.ts#L734)*

You can specify which operating systems your module will run on

*__see__*: [https://docs.npmjs.com/files/package.json#os](https://docs.npmjs.com/files/package.json#os)

*__see__*: [https://yarnpkg.com/en/docs/package-json#toc-os](https://yarnpkg.com/en/docs/package-json#toc-os)

*__see__*: [https://nodejs.org/api/process.html#process\_process\_platform](https://nodejs.org/api/process.html#process_process_platform)

___
<a id="spdxlicenseid"></a>

##  SPDXLicenseID

**Ƭ SPDXLicenseID**: *"Abstyles" \| "Adobe-2006" \| "Adobe-Glyph" \| "ADSL" \| "Afmparse" \| "AGPL-1.0-only" \| "AGPL-1.0-or-later" \| "Aladdin" \| "AMDPLPA" \| "AML" \| "AMPAS" \| "ANTLR-PD" \| "Apache-1.0" \| "APAFML" \| "Bahyph" \| "Barr" \| "Beerware" \| "BitTorrent-1.0" \| "BitTorrent-1.1" \| "Borceux" \| "BSD-1-Clause" \| "BSD-2-Clause-FreeBSD" \| "BSD-2-Clause-NetBSD" \| "BSD-3-Clause-Attribution" \| "BSD-3-Clause-Clear" \| "BSD-3-Clause-LBNL" \| "BSD-3-Clause-No-Nuclear-License" \| "BSD-3-Clause-No-Nuclear-License-2014" \| "BSD-3-Clause-No-Nuclear-Warranty" \| "BSD-4-Clause" \| "BSD-4-Clause-UC" \| "BSD-Protection" \| "BSD-Source-Code" \| "bzip2-1.0.5" \| "bzip2-1.0.6" \| "Caldera" \| "CC-BY-1.0" \| "CC-BY-2.0" \| "CC-BY-2.5" \| "CC-BY-3.0" \| "CC-BY-4.0" \| "CC-BY-NC-1.0" \| "CC-BY-NC-2.0" \| "CC-BY-NC-2.5" \| "CC-BY-NC-3.0" \| "CC-BY-NC-4.0" \| "CC-BY-NC-ND-1.0" \| "CC-BY-NC-ND-2.0" \| "CC-BY-NC-ND-2.5" \| "CC-BY-NC-ND-3.0" \| "CC-BY-NC-ND-4.0" \| "CC-BY-NC-SA-1.0" \| "CC-BY-NC-SA-2.0" \| "CC-BY-NC-SA-2.5" \| "CC-BY-NC-SA-3.0" \| "CC-BY-NC-SA-4.0" \| "CC-BY-ND-1.0" \| "CC-BY-ND-2.0" \| "CC-BY-ND-2.5" \| "CC-BY-ND-3.0" \| "CC-BY-ND-4.0" \| "CC-BY-SA-1.0" \| "CC-BY-SA-2.0" \| "CC-BY-SA-2.5" \| "CC-BY-SA-3.0" \| "CC-BY-SA-4.0" \| "CC0-1.0" \| "CDDL-1.1" \| "CDLA-Permissive-1.0" \| "CDLA-Sharing-1.0" \| "CECILL-1.0" \| "CECILL-1.1" \| "CECILL-2.0" \| "CECILL-B" \| "CECILL-C" \| "CERN-OHL-1.1" \| "CERN-OHL-1.2" \| "ClArtistic" \| "CNRI-Jython" \| "CNRI-Python-GPL-Compatible" \| "Condor-1.1" \| "copyleft-next-0.3.0" \| "copyleft-next-0.3.1" \| "CPOL-1.02" \| "Crossword" \| "CrystalStacker" \| "Cube" \| "curl" \| "D-FSL-1.0" \| "diffmark" \| "DOC" \| "Dotseqn" \| "DSDP" \| "dvipdfm" \| "eGenix" \| "ErlPL-1.1" \| "EUPL-1.0" \| "Eurosym" \| "FreeImage" \| "FSFAP" \| "FSFUL" \| "FSFULLR" \| "FTL" \| "GFDL-1.1-only" \| "GFDL-1.1-or-later" \| "GFDL-1.2-only" \| "GFDL-1.2-or-later" \| "GFDL-1.3-only" \| "GFDL-1.3-or-later" \| "Giftware" \| "GL2PS" \| "Glide" \| "Glulxe" \| "gnuplot" \| "GPL-1.0-only" \| "GPL-1.0-or-later" \| "gSOAP-1.3b" \| "HaskellReport" \| "HPND-sell-variant" \| "IBM-pibs" \| "ICU" \| "IJG" \| "ImageMagick" \| "iMatix" \| "Imlib2" \| "Info-ZIP" \| "Intel-ACPI" \| "Interbase-1.0" \| "JasPer-2.0" \| "JPNIC" \| "JSON" \| "LAL-1.2" \| "LAL-1.3" \| "Latex2e" \| "Leptonica" \| "LGPLLR" \| "Libpng" \| "libpng-2.0" \| "libtiff" \| "Linux-OpenIB" \| "LPPL-1.0" \| "LPPL-1.1" \| "LPPL-1.2" \| "LPPL-1.3a" \| "MakeIndex" \| "MIT-advertising" \| "MIT-CMU" \| "MIT-enna" \| "MIT-feh" \| "MITNFA" \| "mpich2" \| "MTLL" \| "Mup" \| "NBPL-1.0" \| "Net-SNMP" \| "NetCDF" \| "Newsletr" \| "NLOD-1.0" \| "NLPL" \| "NOSL" \| "Noweb" \| "NPL-1.0" \| "NPL-1.1" \| "NRL" \| "OCCT-PL" \| "ODbL-1.0" \| "ODC-By-1.0" \| "OFL-1.0" \| "OGL-UK-1.0" \| "OGL-UK-2.0" \| "OGL-UK-3.0" \| "OLDAP-1.1" \| "OLDAP-1.2" \| "OLDAP-1.3" \| "OLDAP-1.4" \| "OLDAP-2.0" \| "OLDAP-2.0.1" \| "OLDAP-2.1" \| "OLDAP-2.2" \| "OLDAP-2.2.1" \| "OLDAP-2.2.2" \| "OLDAP-2.3" \| "OLDAP-2.4" \| "OLDAP-2.5" \| "OLDAP-2.6" \| "OLDAP-2.7" \| "OLDAP-2.8" \| "OML" \| "OpenSSL" \| "OPL-1.0" \| "OSL-1.1" \| "PDDL-1.0" \| "PHP-3.01" \| "Plexus" \| "psfrag" \| "psutils" \| "Qhull" \| "Rdisc" \| "RHeCos-1.1" \| "RSA-MD" \| "Ruby" \| "SAX-PD" \| "Saxpath" \| "SCEA" \| "Sendmail" \| "Sendmail-8.23" \| "SGI-B-1.0" \| "SGI-B-1.1" \| "SGI-B-2.0" \| "SISSL-1.2" \| "SMLNJ" \| "SMPPL" \| "SNIA" \| "Spencer-86" \| "Spencer-94" \| "Spencer-99" \| "SugarCRM-1.1.3" \| "SWL" \| "TAPR-OHL-1.0" \| "TCL" \| "TCP-wrappers" \| "TMate" \| "TORQUE-1.1" \| "TOSL" \| "TU-Berlin-1.0" \| "TU-Berlin-2.0" \| "Unicode-DFS-2015" \| "Unicode-DFS-2016" \| "Unicode-TOU" \| "Unlicense" \| "Vim" \| "VOSTROM" \| "W3C-19980720" \| "W3C-20150513" \| "Wsuipa" \| "WTFPL" \| "X11" \| "Xerox" \| "XFree86-1.1" \| "xinetd" \| "xpp" \| "XSkat" \| "YPL-1.0" \| "YPL-1.1" \| "Zed" \| "Zend-2.0" \| "Zimbra-1.3" \| "Zimbra-1.4" \| "zlib-acknowledgement" \| "ZPL-1.1" \| "ZPL-2.1"*

*Defined in [index.ts:748](https://github.com/ajaxlab/package-json-type/blob/9e707da/src/index.ts#L748)*

SPDX License IDs which are not OSI approved.

*__see__*: [https://spdx.org/licenses/](https://spdx.org/licenses/)

___
<a id="spdxlicenseidapproved"></a>

##  SPDXLicenseIDApproved

**Ƭ SPDXLicenseIDApproved**: *"0BSD" \| "AAL" \| "AFL-1.1" \| "AFL-1.2" \| "AFL-2.0" \| "AFL-2.1" \| "AFL-3.0" \| "AGPL-3.0-only" \| "AGPL-3.0-or-later" \| "Apache-1.1" \| "Apache-2.0" \| "APL-1.0" \| "APSL-1.0" \| "APSL-1.1" \| "APSL-1.2" \| "APSL-2.0" \| "Artistic-1.0" \| "Artistic-1.0-cl8" \| "Artistic-1.0-Perl" \| "Artistic-2.0" \| "BSD-2-Clause" \| "BSD-2-Clause-Patent" \| "BSD-3-Clause" \| "BSL-1.0" \| "CATOSL-1.1" \| "CDDL-1.0" \| "CECILL-2.1" \| "CNRI-Python" \| "CPAL-1.0" \| "CPL-1.0" \| "CUA-OPL-1.0" \| "ECL-1.0" \| "ECL-2.0" \| "EFL-1.0" \| "EFL-2.0" \| "Entessa" \| "EPL-1.0" \| "EPL-2.0" \| "EUDatagrid" \| "EUPL-1.1" \| "EUPL-1.2" \| "Fair" \| "Frameworx-1.0" \| "GPL-2.0-only" \| "GPL-2.0-or-later" \| "GPL-3.0-only" \| "GPL-3.0-or-later" \| "HPND" \| "Intel" \| "IPA" \| "IPL-1.0" \| "ISC" \| "LGPL-2.0-only" \| "LGPL-2.0-or-later" \| "LGPL-2.1-only" \| "LGPL-2.1-or-later" \| "LGPL-3.0-only" \| "LGPL-3.0-or-later" \| "LiLiQ-P-1.1" \| "LiLiQ-R-1.1" \| "LiLiQ-Rplus-1.1" \| "LPL-1.0" \| "LPL-1.02" \| "LPPL-1.3c" \| "MirOS" \| "MIT" \| "MIT-0" \| "Motosoto" \| "MPL-1.0" \| "MPL-1.1" \| "MPL-2.0" \| "MPL-2.0-no-copyleft-exception" \| "MS-PL" \| "MS-RL" \| "Multics" \| "NASA-1.3" \| "Naumen" \| "NCSA" \| "NGPL" \| "Nokia" \| "NPOSL-3.0" \| "NTP" \| "OCLC-2.0" \| "OFL-1.1" \| "OGTSL" \| "OSET-PL-2.1" \| "OSL-1.0" \| "OSL-2.0" \| "OSL-2.1" \| "OSL-3.0" \| "PHP-3.0" \| "PostgreSQL" \| "Python-2.0" \| "QPL-1.0" \| "RPL-1.1" \| "RPL-1.5" \| "RPSL-1.0" \| "RSCPL" \| "SimPL-2.0" \| "SISSL" \| "Sleepycat" \| "SPL-1.0" \| "UPL-1.0" \| "VSL-1.0" \| "W3C" \| "Watcom-1.0" \| "Xnet" \| "Zlib" \| "ZPL-2.0"*

*Defined in [index.ts:804](https://github.com/ajaxlab/package-json-type/blob/9e707da/src/index.ts#L804)*

SPDX License IDs which are approved by OSI.

*__see__*: [https://spdx.org/licenses/](https://spdx.org/licenses/)

___


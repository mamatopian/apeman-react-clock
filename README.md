apeman-react-clock
==========

<!---
This file is generated by ape-tmpl. Do not update manually.
--->

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![Code Climate][bd_codeclimate_shield_url]][bd_codeclimate_url]
[![Code Coverage][bd_codeclimate_coverage_shield_url]][bd_codeclimate_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]
[![JS Standard][bd_standard_shield_url]][bd_standard_url]

[bd_repo_url]: https://github.com/apeman-react-labo/apeman-react-clock
[bd_travis_url]: http://travis-ci.org/apeman-react-labo/apeman-react-clock
[bd_travis_shield_url]: http://img.shields.io/travis/apeman-react-labo/apeman-react-clock.svg?style=flat
[bd_license_url]: https://github.com/apeman-react-labo/apeman-react-clock/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/apeman-react-labo/apeman-react-clock
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/apeman-react-labo/apeman-react-clock.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/apeman-react-labo/apeman-react-clock.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/apeman-react-labo/apeman-react-clock
[bd_gemnasium_shield_url]: https://gemnasium.com/apeman-react-labo/apeman-react-clock.svg
[bd_npm_url]: http://www.npmjs.org/package/apeman-react-clock
[bd_npm_shield_url]: http://img.shields.io/npm/v/apeman-react-clock.svg?style=flat
[bd_standard_url]: http://standardjs.com/
[bd_standard_shield_url]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

apeman react package for clock components.

<!-- Description End -->


<!-- Overview Start -->
<a name="overview"></a>



<!-- Overview End -->


<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/guides/01.Installation.md.hbs" Start -->

<a name="section-doc-guides-01-installation-md"></a>
Installation
-----

```bash
$ npm install apeman-react-clock --save
```


<!-- Section from "doc/guides/01.Installation.md.hbs" End -->

<!-- Section from "doc/guides/02.Demo.md.hbs" Start -->

<a name="section-doc-guides-02-demo-md"></a>
Demo
-----

[Live demo][demo_url] is hosted on GitHub Pages.

[![Demo Image](./doc/images/screenshot.png)][demo_url]

[demo_url]: http://apeman-react-labo.github.io/apeman-react-clock/demo/demo.html


<!-- Section from "doc/guides/02.Demo.md.hbs" End -->

<!-- Section from "doc/guides/03.Usage.md.hbs" Start -->

<a name="section-doc-guides-03-usage-md"></a>
Usage
---------

```jsx
'use strict'

import React from 'react'
import {ApAnalogClock, ApAnalogClockStyle} from 'apeman-react-clock'

const ExampleComponent = React.createClass({
  render () {
    return (
      <div>
        <ApAnalogClockStyle scoped />
        <ApAnalogClock />
      </div>
    )
  }
})

```



<!-- Section from "doc/guides/03.Usage.md.hbs" End -->

<!-- Section from "doc/guides/04.Components.md.hbs" Start -->

<a name="section-doc-guides-04-components-md"></a>
Components
-----


### ApAnalogClockHand

**Props**

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| angle | number | 0 |  |
| width | number | 24 |  |
| heightRate | number | 1 |  |

### ApAnalogClockLetter

**Props**

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| angle | number | 0 |  |
| letter | string | '' |  |

### ApAnalogClockStyle

**Props**

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| scoped | bool | false |  |
| style | object | {} |  |
| width | number | 320 |  |
| height | number | 240 |  |
| color | string | '#333' |  |
| accentColor | string | '#F33' |  |
| backgroundColor | string | '#FFF' |  |

### ApAnalogClock

**Props**

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| boardLetters | array | '12,1,2,3,4,5,6,7,8,9,10,11'.split(',') |  |

### ApClockStyle

**Props**

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| scoped | bool | false |  |
| style | object | {} |  |

### ApClock

**Props**

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |

### ApDigitalClockMainDisplay

**Props**

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| hours | string |  |  |
| minutes | string |  |  |
| seconds | string |  |  |
| fontSize | number |  |  |
| onSizeChange | func |  |  |

### ApDigitalClockStyle

**Props**

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| scoped | bool | false |  |
| style | object | {} |  |
| width | number | 340 |  |
| height | number | 240 |  |
| color | string | '#333' |  |
| backgroundColor | string | '#FFF' |  |

### ApDigitalClockSubDisplay

**Props**

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| day | string |  |  |
| fontSize | number |  |  |
| width | number |  |  |

### ApDigitalClock

**Props**

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| showSeconds | bool | true |  |



<!-- Section from "doc/guides/04.Components.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/apeman-react-labo/apeman-react-clock/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------

+ [apeman](https://github.com/apeman-labo/apeman)
+ [apeman-react-labo](https://github.com/apeman-react-labo)
+ [React](https://facebook.github.io/react/)

<!-- Links End -->

'use strict'

import React from 'react'
import pkg from '../../package.json'
import links from '../links.json'
import fs from 'fs'
import {highlightJsx} from 'ape-highlighting'
import stylesheets from 'apeman-asset-stylesheets'

import Demo from './demo.component.js'
import ApClockStyle from '../../lib/ap_clock_style'
import ApAnalogClockStyle from '../../lib/ap_analog_clock_style'
import ApDigitalClockStyle from '../../lib/ap_digital_clock_style'

import {ApStyle, ApIonIconStyle, ApFaIconStyle, ApHead, ApBody, ApLinks, ApHtml} from 'apeman-react-basic'

const FAVICON_URL = 'https://raw.githubusercontent.com/apeman-asset-labo/apeman-asset-images/master/dist/favicon/react-favicon.png'

module.exports = (
  <ApHtml className="react-demo">
    <ApHead charset="UTF-8"
            js={ ['demo.external.cc.js', 'demo.js' ]}
            title={ `${ pkg.name } Demo` }
            icon={ FAVICON_URL }>
      <ApStyle data={fs.readFileSync(stylesheets.reactDemo).toString() }></ApStyle>
      <ApClockStyle/>
      <ApAnalogClockStyle/>
      <ApDigitalClockStyle/>
      <ApStyle data={
`
@font-face {
    font-family: digital-clock;
    src: url(./digital-clock.ttf)
}
.ap-digital-clock {
    font-family: digital-clock;
}
`

            }>
      </ApStyle>
    </ApHead>
    <body>
    <div id="demo-style"></div>
    <header className="react-demo-header">
      <div className="react-demo-container">
        <h1>
          <a href={ pkg.homepage }>{ pkg.name }</a>
        </h1>
      </div>
    </header>
    <main>
      <div>
        <div className="react-demo-playground">
          <div className="react-demo-container">
            <div id="demo-wrap">
              <Demo></Demo>
            </div>
          </div>
        </div>
      </div>
      <div className="react-demo-container">
        <div>
<pre className="react-demo-src" dangerouslySetInnerHTML={
{ __html: highlightJsx.fromFile(require.resolve('./demo.component.jsx')) }
}>
</pre>
        </div>
      </div>

    </main>
    <footer>
      <div className="react-demo-container">
        <ApLinks links={ links }></ApLinks>
      </div>
    </footer>
    </body>
  </ApHtml>
)

#!/usr/bin/env node

/**
 * Build the project.
 */

'use strict'

process.chdir(`${__dirname}/..`)

const { runTasks } = require('ape-tasking')
const ababel = require('ababel')
const abrowserify = require('abrowserify')
const fs = require('fs')
const filelink = require('filelink')
const co = require('co')
const coz = require('coz')

let isForked = process.send

runTasks('build', [
  () => coz.render([
    '.*.bud',
    'lib/.*.bud',
    'test/.*.bud'
  ]),
  () => {
    let libDir = `${__dirname}/../lib`
    return ababel('*.jsx', {
      cwd: libDir,
      out: libDir,
      presets: [ 'es2015', 'react' ]
    })
  },
  () => {
    let demoDir = `${__dirname}/../doc/demo`
    return co(function * () {
      if (!fs.existsSync(demoDir)) {
        return
      }
      yield ababel('*.jsx', {
        cwd: demoDir,
        out: demoDir,
        presets: [ 'es2015', 'react' ],
        minified: true
      })
      yield coz.render(demoDir + '/.*.bud')
      yield abrowserify(
        `${demoDir}/demo.entrypoint.js`,
        `${demoDir}/demo.js`,
        {
          debug: true,
          external: require('apeman-asset-javascripts/src/demo.external.json')
        })
      yield filelink(
        require.resolve('apeman-asset-javascripts/dist/demo.external.cc.js'),
        `${demoDir}/demo.external.cc.js`,
        {
          force: true,
          mkdirp: true
        }
      )
    })
  }
], !isForked)

process.on('message', (message) => {
  if (message.rerun) {
    runTasks.rerun()
  }
})

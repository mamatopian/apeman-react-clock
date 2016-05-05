/**
 * apeman react package for clock components.
 * @module apeman-react-clock
 */

'use strict'

let d = (module) => module.default || module

module.exports = {
  get ApAnalogClockHand () { return d(require('./ap_analog_clock_hand')) },
  get ApAnalogClockLetter () { return d(require('./ap_analog_clock_letter')) },
  get ApAnalogClockStyle () { return d(require('./ap_analog_clock_style')) },
  get ApAnalogClock () { return d(require('./ap_analog_clock')) },
  get ApClockStyle () { return d(require('./ap_clock_style')) },
  get ApClock () { return d(require('./ap_clock')) },
  get ApDigitalClockMainDisplay () { return d(require('./ap_digital_clock_main_display')) },
  get ApDigitalClockStyle () { return d(require('./ap_digital_clock_style')) },
  get ApDigitalClockSubDisplay () { return d(require('./ap_digital_clock_sub_display')) },
  get ApDigitalClock () { return d(require('./ap_digital_clock')) },
  get Fonts () { return d(require('./fonts')) }
}

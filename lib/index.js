/**
 * apeman react package for clock components.
 * @module apeman-react-clock
 */

"use strict";

module.exports = {
    get apAnalogClockHand() { return require('./ap_analog_clock_hand'); },
    get apAnalogClockLetter() { return require('./ap_analog_clock_letter'); },
    get apAnalogClockStyle() { return require('./ap_analog_clock_style'); },
    get apAnalogClock() { return require('./ap_analog_clock'); },
    /**
     * @name ApClockStyle
     */
    get ApClockStyle() { return require('./ap_clock_style'); },
    /**
     * @name ApClock
     */
    get ApClock() { return require('./ap_clock'); }
};
/**
 * apeman react package for clock components.
 * @module apeman-react-clock
 */

"use strict";

module.exports = {
    /**
     * @name ApAnalogClockHand
     */
    get ApAnalogClockHand() { return require('./ap_analog_clock_hand'); },
    /**
     * @name ApAnalogClockLetter
     */
    get ApAnalogClockLetter() { return require('./ap_analog_clock_letter'); },
    /**
     * @name ApAnalogClockStyle
     */
    get ApAnalogClockStyle() { return require('./ap_analog_clock_style'); },
    /**
     * @name ApAnalogClock
     */
    get ApAnalogClock() { return require('./ap_analog_clock'); },
    /**
     * @name ApClockStyle
     */
    get ApClockStyle() { return require('./ap_clock_style'); },
    /**
     * @name ApClock
     */
    get ApClock() { return require('./ap_clock'); },
    get apDigitalClockNumberBar() { return require('./ap_digital_clock_number_bar'); },
    get apDigitalClockNumber() { return require('./ap_digital_clock_number'); },
    get apDigitalClockStyle() { return require('./ap_digital_clock_style'); },
    get apDigitalClock() { return require('./ap_digital_clock'); },
    get fonts() { return require('./fonts'); }
};
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
    /**
     * @name ApDigitalClockMainDisplay
     */
    get ApDigitalClockMainDisplay() { return require('./ap_digital_clock_main_display'); },
    /**
     * @name ApDigitalClockStyle
     */
    get ApDigitalClockStyle() { return require('./ap_digital_clock_style'); },
    /**
     * @name ApDigitalClockSubDisplay
     */
    get ApDigitalClockSubDisplay() { return require('./ap_digital_clock_sub_display'); },
    /**
     * @name ApDigitalClock
     */
    get ApDigitalClock() { return require('./ap_digital_clock'); },
    get fonts() { return require('./fonts'); }
};
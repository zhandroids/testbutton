/**
 * Blocks for driving the Kitronik :GAME Controller
 */
//% weight=100 color=#00A654 icon="\uf55b" block=":GAME Controller"
namespace test_button{

    let buttonEventId = 3600

    //% block="onButtonClick %pin"
    //% vocabulary.fieldEditor="gridpicker" vocabulary.fieldOptions.columns=3
    //% weight=60 
    export function onButtonClick(pin: DigitalPin, handler: () => void) {
        control.onEvent(buttonEventId, pin, handler)
        control.inBackground(function () {
            while (true) {
                pins.setPull(pin, PinPullMode.PullUp);
                if (pins.digitalReadPin(pin) == 0){
                   control.raiseEvent(buttonEventId, pin);
                }
                basic.pause(100);
            }
        })

    }


}
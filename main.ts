let ruido = 0
pins.servoWritePin(AnalogPin.P1, 0)
basic.forever(function () {
    ruido += smarthome.ReadNoise(AnalogPin.P1)
    if (ruido > 70) {
        pins.servoWritePin(AnalogPin.P1, 0)
        basic.pause(1000)
    } else {
        pins.servoWritePin(AnalogPin.P1, 1000)
        basic.pause(1000)
    }
})

basic.showIcon(IconNames.Heart)
basic.forever(function () {
    servos.P2.setAngle(180)
    basic.pause(2000)
    servos.P2.setAngle(0)
    basic.pause(2000)
})

bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Happy)
    midi.useRawSerial()
    bluetooth.startButtonService()
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.StickFigure)
    basic.clearScreen()
    midi.toneOn(_this)
})
let _this = 0
_this = 10
basic.forever(function () {
	
})

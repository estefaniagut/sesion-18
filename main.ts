let aleatorio = 0
basic.forever(function () {
    aleatorio = randint(5, 10)
    basic.showNumber(aleatorio)
    basic.pause(200)
    for (let contador = 0; contador <= aleatorio; contador++) {
        basic.showNumber(contador)
        for (let index = 0; index < 4; index++) {
            music.playTone(262, music.beat(BeatFraction.Whole))
            basic.pause(200)
        }
    }
    basic.showString("A buscar!!!")
    music.playMelody("B G A F A E A D ", 120)
    basic.clearScreen()
})

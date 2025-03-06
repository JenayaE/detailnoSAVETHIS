scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.dissolve)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.bubbles)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (star.vy == 0) {
        star.vy = -200
    }
})
let star: Sprite = null
scene.setBackgroundColor(7)
star = sprites.create(assets.image`evllarry`, SpriteKind.Player)
controller.moveSprite(star, 100, 0)
tiles.setCurrentTilemap(tilemap`level2`)
star.ay = 400
scene.cameraFollowSprite(star)
game.onUpdate(function () {
	
})

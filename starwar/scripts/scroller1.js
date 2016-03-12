"use strict";

var renderer;
var stage;
var width;
var height;

var logoTexture = null;
var logoSprite  = null;

var color = '#e8a20d';
var scrollingText =   "你\n\n"
					+ "是\n\n"
					+ "一\n\n"
					+ "个\n\n"
					+ "大\n\n"
					+ "笨\n\n"
					+ "蛋\n";


PIXI.DisplayObject.prototype.updateTransform = function() {
  // TODO OPTIMIZE THIS!! with dirty
	if(this.rotation != this.rotationCache)
	{
		this.rotationCache = this.rotation;
		this._sr =  Math.sin(this.rotation);
		this._cr =  Math.cos(this.rotation);
	}

	var localTransform = this.localTransform;
	var parentTransform = this.parent.worldTransform;
	var worldTransform = this.worldTransform;
	//console.log(localTransform)
	//z-axis or 2D transformation
	/*
	localTransform[0] = this._cr;
	localTransform[1] = this._sr;
	localTransform[3] = -this._sr;
	localTransform[4] = this._cr;
	*/

	//x - axis
	localTransform[4] = this._cr;
	localTransform[5] = -this._sr + this.position.y;
	localTransform[7] = this._sr;
	localTransform[8] = this._cr;

	///AAARR GETTER SETTTER!
	localTransform[2] = this.position.x;
	//localTransform[5] = this.position.y;

    // Cache the matrix values (makes for huge speed increases!)
    var a00 = localTransform[0], a01 = localTransform[1], a02 = localTransform[2],
        a10 = localTransform[3], a11 = localTransform[4], a12 = localTransform[5],

        b00 = parentTransform[0], b01 = parentTransform[1], b02 = parentTransform[2],
        b10 = parentTransform[3], b11 = parentTransform[4], b12 = parentTransform[5];

    worldTransform[0] = b00 * a00 + b01 * a10;
    worldTransform[1] = b00 * a01 + b01 * a11;
    worldTransform[2] = b00 * a02 + b01 * a12 + b02;

    worldTransform[3] = b10 * a00 + b11 * a10;
    worldTransform[4] = b10 * a01 + b11 * a11;
    worldTransform[5] = b10 * a02 + b11 * a12 + b12;

	// because we are using affine transformation, we can optimise the matrix concatenation process.. wooo!
	// mat3.multiply(this.localTransform, this.parent.worldTransform, this.worldTransform);
	this.worldAlpha = this.alpha * this.parent.worldAlpha;
}

// var textSprites  = [];

var logoBaseWidth   = 1000;
var logoBaseHeight  = 428;
var pixelRatio  = 1;
var screenRatio = 1;

// var capturer = new CCapture( {
//     format: 'ffmpegserver',
//     framerate: 30,
//     verbose: true,
//     name: "foobar",     // videos will be named foobar-#.mp4, untitled if not set.
//     extension: ".mp4",  // extension for file. default = ".mp4"
//     codec: "mpeg4",     // this is an valid ffmpeg codec "mpeg4", "libx264", "flv1", etc...
//                         // if not set ffmpeg guesses based on extension.
// } );
//
// capturer.start();


function init() {
	renderer = PIXI.autoDetectRenderer(600, 600, {
		backgroundColor : 0x4080a0,
        transparent : true
	});
	document.body.appendChild(renderer.view);
	stage = new PIXI.Container();
	var starTexture = PIXI.Texture.fromImage("assets/images/stars.png");
	var starSprite = new PIXI.Sprite(starTexture);

	stage.addChild(starSprite);
};


function resizeStage() {
	pixelRatio  = (window.devicePixelRatio ? window.devicePixelRatio : window.screen.deviceXDPI / window.screen.logicalXDPI) || 1;
	pixelRatio  = (window.devicePixelRatio ? window.devicePixelRatio : window.screen.deviceXDPI / window.screen.logicalXDPI) || 1;
	width       = window.innerWidth  * pixelRatio;
	height      = window.innerHeight * pixelRatio;

	if (width > height) {
		screenRatio = width / height;
	} else {
		screenRatio = height / width;
	}

	renderer.resize(width, height);
	renderer.view.style.width  = width  / pixelRatio + 'px';
	renderer.view.style.height = height / pixelRatio + 'px';
};


function animate(time) {
    requestAnimationFrame(animate);
		TWEEN.update(time);
    renderer.render(stage);
		// capturer.capture(renderer.view);
};

// function createStarWarsLogo() {
// 	var scale = width / logoBaseWidth;
// 	var logo = new Logo(scale);
// 	logo.draw();
// 	logoTexture = PIXI.Texture.fromCanvas(logo.canvas);
// 	logo.destroy();
//
// 	logoSprite = new PIXI.Sprite(logoTexture);
// 	logoSprite.anchor.x = 0.5;
// 	logoSprite.anchor.y = 0.5;
// 	logoSprite.position.x = width  / 2;
// 	logoSprite.position.y = height / 2;
// 	logoSprite.scale.x = logoSprite.scale.y = 1.33;
//
// 	stage.addChild(logoSprite);
// };

function createScrollingText(text) {
	var style = {
		font : Math.floor(width / 5) + 'px myFont',
		fill : color,
		align : 'center'
	};

	var textSprite = new PIXI.Text(text, style);
	textSprite.anchor.x = 0.5;
	textSprite.anchor.y = 0;
	textSprite.position.x = width / 2;
	textSprite.position.y = height;

	stage.addChild(textSprite);
	return textSprite;
};

//
// function saveVideo() {
// 	capturer.stop();
// 	capturer.save(function(url, size){
// 		console.log(url, size)
// 	})
// }
//

function animateScrollingText(textSprites) {

	var preTween = null;
	var headTween = null;
	var tweens = []

	textSprites.forEach(function(textSprite, i){
		var f = {
			posY : height
		}
		var t = {
			posY : 0 - textSprite.height * 4
		}
		// console.log(f.posY, t.posY)

		var updateCallback = (function(ts) {
			return function() {
				// console.log(ts);
				ts.position.y = f.posY;
			}
		}(textSprite))

		var tween = new TWEEN.Tween(f)
			.delay(5000 + 1000 * i)
			.to(t, 5000)
			.easing(TWEEN.Easing.Linear.None)
			// .repeat( Infinity )
			.onUpdate(updateCallback)
			.start();
			// .start();
		// if (tweens.length > 0) {
		// 	tweens[tweens.length - 1].chain(tween);
		// }
		// if (i == textSprites.length - 1) {
		// 		tween.onComplete(saveVideo);
		// }
		tweens.push(tween);
	})

	// tweens.forEach(function(t) {
	// 	t.start();
	// })
	// capturer.start();
	// tweens[0].start();


};

function setCanvasPerspective(a, b) {
	var str = "perspective(" + a + "px)" + " rotateX(" + b + "deg)";

	renderer.view.style.transform       = str;
	renderer.view.style.webkitTransform = str;
	renderer.view.style.MozTransform    = str;
	renderer.view.style.msTransform     = str;
	renderer.view.style.OTransform      = str;
};

function loadFont(fntUrl, fntName) {
	var font = new Font();
	font.fontFamily = fntName;

	font.onload = function() {
		console.log('Font loaded');
		onAssetsLoaded();
	};
	font.onerror = function(msg) {
		console.log(msg);
		onAssetsLoaded();
	};

	font.src = fntUrl;
};

function onAssetsLoaded() {
	// createStarWarsLogo();
	var data = "Happy Birthday to you".split(" ")

	var textSprites = [];

	animate();

	// animateStarWarsLogo(function() {
	setCanvasPerspective(0.2, screenRatio / ( (width > height) ? (height / width)  : (width / height ) ) / 50 * screenRatio );

	for(var i = 0; i < data.length; i++) {
		var textSprite = createScrollingText(data[i])
		textSprites.push(textSprite);

	}

	animateScrollingText(textSprites);


};

window.onload = function() {
	init();
	resizeStage();
	// setCanvasPerspective(0, 0);

	loadFont('assets/fonts/leaguegothic.ttf', 'myFont');
}

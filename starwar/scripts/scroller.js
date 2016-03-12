var renderer;
var stage;
var width;
var height;

var logoTexture = null;
var logoSprite  = null;

var color = '#e8a20d';
// var scrollingText =   "Happy";

// var textSprite  = null;

var logoBaseWidth   = 1000;
var logoBaseHeight  = 428;
var pixelRatio  = 1;
var screenRatio = 1;

function init() {
	renderer = PIXI.autoDetectRenderer(600, 600, {
		backgroundColor : 0x4080a0,
        transparent : true
	});
	document.body.appendChild(renderer.view);

	stage = new PIXI.Container();
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

	width = height = 480

	renderer.resize(width, height);
	renderer.view.style.width  = width + 'px';//width  / pixelRatio + 'px';
	renderer.view.style.height = height + 'px';//height / pixelRatio + 'px';
};

function animate(time) {
    requestAnimationFrame(animate);
	TWEEN.update(time);
    renderer.render(stage);
};



function createScrollingText(text) {
	var style = {
		font : Math.floor(width / 3) + 'px myFont',
		fill : color,
		align : 'center'
	};

	textSprite = new PIXI.Text(text, style);
	textSprite.anchor.x = 0.5;
	textSprite.anchor.y = 0;
	textSprite.position.x = width / 2;
	textSprite.position.y = height;

	stage.addChild(textSprite);
	return textSprite;
};


function animateScrollingText(textSprite, delayTime) {
	var f = {
		posY : height
	}
	var t = {
		posY : 0 - textSprite.height
	}

	var tween = new TWEEN.Tween(f)
		.to(t, 3000)
		.delay(delayTime)
		.easing(TWEEN.Easing.Linear.None)
		.repeat( 1 )
		.onUpdate(function() {
			textSprite.position.y = f.posY;
		})
		.start();
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
	var wordTime = [2320, 3558, 4663, 5252];

	var textSprites = [];

	setCanvasPerspective(screenRatio, screenRatio / ( (width > height) ? (height / width)  : (width / height ) ) / 8 * screenRatio );

	data.forEach(function(text) {
		textSprites.push(createScrollingText(text));
	});


	// animateStarWarsLogo(function() {
	textSprites.forEach(function(textSprite, i) {
		animateScrollingText(textSprite, wordTime[i]);
	});
	// });
	animate();

};

window.onload = function() {
	init();
	resizeStage();
	setCanvasPerspective(0, 0);

	loadFont('assets/fonts/leaguegothic.ttf', 'myFont');
}

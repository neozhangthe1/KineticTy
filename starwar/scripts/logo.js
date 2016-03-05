function Logo(scale) {
	this.canvas               = document.createElement('canvas');
	this.canvas.id            = 'tempCanvas';
	this.canvas.width         = logoBaseWidth  * scale;
	this.canvas.height        = logoBaseHeight * scale;
	this.canvas.style.display = 'none';
	
	document.body.appendChild(this.canvas);

	this.scale   = scale;
	this.color   = color;
	this.context = this.canvas.getContext("2d");
}

Logo.prototype.draw = function () {
	this.context.save();
	this.context.translate(0 * this.scale,-624.36217 * this.scale);
	this.context.save();
	this.context.fillStyle = "rgba(0, 0, 0, 0)";
	this.context.strokeStyle = this.color;
	this.context.lineWidth = 10 * this.scale;
	this.context.lineCap = "butt";
	this.context.lineJoin = "miter";
	this.context.miterLimit = 4 * this.scale;
	this.context.translate(0 * this.scale,624.36217 * this.scale);
	this.context.beginPath();
	this.context.moveTo(166 * this.scale,8.375 * this.scale);
	this.context.bezierCurveTo(125.34083 * this.scale,8.375 * this.scale,75.246152 * this.scale,50.76704 * this.scale,161.25 * this.scale,122.5 * this.scale);
	this.context.bezierCurveTo(168.96718 * this.scale,129.62984 * this.scale,192.54823 * this.scale,145.07718 * this.scale,150.1875 * this.scale,143.34375 * this.scale);
	this.context.lineTo(9.53125 * this.scale,143.34375 * this.scale);
	this.context.lineTo(9.53125 * this.scale,201.46875 * this.scale);
	this.context.lineTo(221.59375 * this.scale,201.46875 * this.scale);
	this.context.bezierCurveTo(242.02417 * this.scale,201.46875 * this.scale,323.79658 * this.scale,167.95085 * this.scale,221.59375 * this.scale,84.25 * this.scale);
	this.context.bezierCurveTo(217.70994 * this.scale,79.992478 * this.scale,189.3551 * this.scale,64.65625 * this.scale,233.625 * this.scale,64.65625 * this.scale);
	this.context.lineTo(321.125 * this.scale,64.65625 * this.scale);
	this.context.lineTo(321.125 * this.scale,201.46875 * this.scale);
	this.context.lineTo(393.8125 * this.scale,201.46875 * this.scale);
	this.context.lineTo(393.8125 * this.scale,64.65625 * this.scale);
	this.context.lineTo(464.59375 * this.scale,64.65625 * this.scale);
	this.context.lineTo(464.59375 * this.scale,8.375 * this.scale);
	this.context.lineTo(166 * this.scale,8.375 * this.scale);
	this.context.closePath();
	this.context.moveTo(506.03125 * this.scale,8.375 * this.scale);
	this.context.lineTo(432.40625 * this.scale,201.46875 * this.scale);
	this.context.lineTo(512.34375 * this.scale,201.46875 * this.scale);
	this.context.lineTo(526.875 * this.scale,165.75 * this.scale);
	this.context.lineTo(592.625 * this.scale,165.75 * this.scale);
	this.context.lineTo(606.84375 * this.scale,201.46875 * this.scale);
	this.context.lineTo(691.1875 * this.scale,201.46875 * this.scale);
	this.context.lineTo(616.96875 * this.scale,8.375 * this.scale);
	this.context.lineTo(506.03125 * this.scale,8.375 * this.scale);
	this.context.closePath();
	this.context.moveTo(704.8125 * this.scale,8.375 * this.scale);
	this.context.lineTo(704.8125 * this.scale,201.46875 * this.scale);
	this.context.lineTo(785.375 * this.scale,201.46875 * this.scale);
	this.context.lineTo(785.375 * this.scale,137.34375 * this.scale);
	this.context.lineTo(856.15625 * this.scale,201.46875 * this.scale);
	this.context.lineTo(990.46875 * this.scale,201.46875 * this.scale);
	this.context.lineTo(990.46875 * this.scale,143.34375 * this.scale);
	this.context.lineTo(877.34375 * this.scale,143.34375 * this.scale);
	this.context.lineTo(860.59375 * this.scale,124.6875 * this.scale);
	this.context.bezierCurveTo(940.38495 * this.scale,124.6875 * this.scale,948.74103 * this.scale,8.375 * this.scale,849.53125 * this.scale,8.375 * this.scale);
	this.context.lineTo(704.8125 * this.scale,8.375 * this.scale);
	this.context.closePath();
	this.context.moveTo(9.53125 * this.scale,226.78125 * this.scale);
	this.context.lineTo(92 * this.scale,420.46875 * this.scale);
	this.context.lineTo(164.40625 * this.scale,420.46875 * this.scale);
	this.context.lineTo(188.71875 * this.scale,338.34375 * this.scale);
	this.context.lineTo(216.84375 * this.scale,420.46875 * this.scale);
	this.context.lineTo(289.53125 * this.scale,420.46875 * this.scale);
	this.context.lineTo(362.875 * this.scale,226.78125 * this.scale);
	this.context.lineTo(284.46875 * this.scale,226.78125 * this.scale);
	this.context.lineTo(252.25 * this.scale,310.21875 * this.scale);
	this.context.lineTo(221.3125 * this.scale,226.78125 * this.scale);
	this.context.lineTo(148.25 * this.scale,226.78125 * this.scale);
	this.context.lineTo(127.40625 * this.scale,310.21875 * this.scale);
	this.context.lineTo(87.9375 * this.scale,226.78125 * this.scale);
	this.context.lineTo(9.53125 * this.scale,226.78125 * this.scale);
	this.context.closePath();
	this.context.moveTo(378 * this.scale,226.78125 * this.scale);
	this.context.lineTo(304.40625 * this.scale,420.46875 * this.scale);
	this.context.lineTo(384.6875 * this.scale,420.46875 * this.scale);
	this.context.lineTo(398.5625 * this.scale,385.40625 * this.scale);
	this.context.lineTo(464.59375 * this.scale,385.40625 * this.scale);
	this.context.lineTo(478.84375 * this.scale,420.46875 * this.scale);
	this.context.lineTo(562.90625 * this.scale,420.46875 * this.scale);
	this.context.lineTo(488.625 * this.scale,226.78125 * this.scale);
	this.context.lineTo(378 * this.scale,226.78125 * this.scale);
	this.context.closePath();
	this.context.moveTo(566.40625 * this.scale,227.375 * this.scale);
	this.context.lineTo(566.40625 * this.scale,420.46875 * this.scale);
	this.context.lineTo(646.96875 * this.scale,420.46875 * this.scale);
	this.context.lineTo(646.96875 * this.scale,356.34375 * this.scale);
	this.context.lineTo(717.75 * this.scale,420.46875 * this.scale);
	this.context.lineTo(925.34375 * this.scale,420.46875 * this.scale);
	this.context.bezierCurveTo(945.77415 * this.scale,420.46875 * this.scale,1027.5466 * this.scale,386.9509 * this.scale,925.34375 * this.scale,303.25 * this.scale);
	this.context.bezierCurveTo(921.45995 * this.scale,298.9925 * this.scale,893.1051 * this.scale,283.65625 * this.scale,937.375 * this.scale,283.65625 * this.scale);
	this.context.lineTo(990.46875 * this.scale,283.65625 * this.scale);
	this.context.lineTo(990.46875 * this.scale,227.375 * this.scale);
	this.context.lineTo(869.75 * this.scale,227.375 * this.scale);
	this.context.bezierCurveTo(829.0909 * this.scale,227.375 * this.scale,778.9962 * this.scale,269.767 * this.scale,865 * this.scale,341.5 * this.scale);
	this.context.bezierCurveTo(872.7172 * this.scale,348.6298 * this.scale,896.2983 * this.scale,364.07715 * this.scale,853.9375 * this.scale,362.34375 * this.scale);
	this.context.lineTo(738.9375 * this.scale,363.59375 * this.scale);
	this.context.lineTo(722.1875 * this.scale,343.6875 * this.scale);
	this.context.bezierCurveTo(801.9787 * this.scale,343.6875 * this.scale,810.33473 * this.scale,227.375 * this.scale,711.125 * this.scale,227.375 * this.scale);
	this.context.lineTo(566.40625 * this.scale,227.375 * this.scale);
	this.context.closePath();
	this.context.fill();
	this.context.stroke();
	this.context.restore();
	this.context.save();
	this.context.fillStyle = "rgba(0, 0, 0, 0)";
	this.context.strokeStyle = this.color;
	this.context.lineWidth = 10 * this.scale;
	this.context.lineCap = "butt";
	this.context.lineJoin = "miter";
	this.context.miterLimit = 4 * this.scale;
	this.context.translate(0 * this.scale,624.36217 * this.scale);
	this.context.beginPath();
	this.context.moveTo(560.6875 * this.scale,52.9375 * this.scale);
	this.context.lineTo(528.78125 * this.scale,129.4375 * this.scale);
	this.context.lineTo(590.0625 * this.scale,129.4375 * this.scale);
	this.context.lineTo(560.6875 * this.scale,52.9375 * this.scale);
	this.context.closePath();
	this.context.moveTo(784.125 * this.scale,54.53125 * this.scale);
	this.context.lineTo(784.125 * this.scale,90.25 * this.scale);
	this.context.lineTo(840.375 * this.scale,90.25 * this.scale);
	this.context.bezierCurveTo(860.85498 * this.scale,90.25 * this.scale,860.72142 * this.scale,54.53125 * this.scale,840.375 * this.scale,54.53125 * this.scale);
	this.context.lineTo(784.125 * this.scale,54.53125 * this.scale);
	this.context.closePath();
	this.context.moveTo(434.28125 * this.scale,271.34375 * this.scale);
	this.context.lineTo(401.75 * this.scale,348.125 * this.scale);
	this.context.lineTo(463.65625 * this.scale,348.125 * this.scale);
	this.context.lineTo(434.28125 * this.scale,271.34375 * this.scale);
	this.context.closePath();
	this.context.moveTo(646.96875 * this.scale,273.21875 * this.scale);
	this.context.lineTo(646.96875 * this.scale,308.90625 * this.scale);
	this.context.lineTo(703.21875 * this.scale,308.90625 * this.scale);
	this.context.bezierCurveTo(723.69873 * this.scale,308.90625 * this.scale,723.56517 * this.scale,273.21875 * this.scale,703.21875 * this.scale,273.21875 * this.scale);
	this.context.lineTo(646.96875 * this.scale,273.21875 * this.scale);
	this.context.closePath();
	this.context.fill();
	this.context.stroke();
	this.context.restore();
	this.context.restore();	
}

Logo.prototype.destroy = function() {
	this.canvas.parentNode.removeChild(this.canvas);
};

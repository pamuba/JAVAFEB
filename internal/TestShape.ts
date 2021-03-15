/// <reference path="IShape.ts" />
/// <reference path="Circle.ts" />
/// <reference path="Triangle.ts" />

function drawAllShapes(shapeToDraw:Drawing.IShape){
    shapeToDraw.draw();
}

drawAllShapes(new Drawing.Circle())
drawAllShapes(new Drawing.Triangle())
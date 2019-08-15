
var Engine = Matter.Engine,
	Render = Matter.Render,
	World = Matter.World,
	Bodies = Matter.Bodies,
	MouseConstraint = Matter.MouseConstraint;

var engine = Engine.create();

var render = Render.create({
	element:document.getElementById("canvas"),
	engine: engine,
	options:{
		width: 1080,
		height: 1080,
		// pixelRadio: 2,
		background: "rgba(255,255,255,0)",
		wireframes: false

	}
});
// document.write('<img src="../images/buttom1.png" alt="")>');

// var gazou1;
// gazou1 = loadImage("../images/buttom1.png");
// image(gazou1,150,150,100,100);

Bodies.circle(100,100,100);
Bodies.rectangle(300,300,300,300);
var u = document.documentElement.scrollTop || document.body.scrollTop;

// var gazou1 = '.Buttom1'(100,100,100,{
// 	density:0.005,
// 	frictionAir:0.06,
// 	restitution:1,
// 	friction:0.01,
// });

// var ball = Bodies.circle(100,50,50,{
// 	density:0.005,
// 	frictionAir:0.06,
// 	restitution:1,
// 	friction:0.01,



// });

for(var i = 0;i<5;i++){
	var rnd = parseInt(Math.random()*10);
	var x = 0 + rnd * 100;
	var y = 0 -rnd *200;
	rnd2 = parseInt(Math.random() * 640);
	var x2 = rnd2;
	var y2 = 0 - rnd2 *2;

	World.add(engine.world,[Bodies.rectangle(x,y,360,360,{
		density: 0.0005,
		frictionAir: 0.02,
		restitution: 1,
		friction:0.08,
		render:{
			sprite:{
				texture: '../images/buttom1.png'
				
			}
		}
	})])
	x = 0;
}
// Bodies.circle(100,100,100);
Bodies.rectangle(300,300,300,300);
var u = document.documentElement.scrollTop || document.body.scrollTop;

// var ball2 = Bodies.circle(100,0,50,{
// 	density:0.005,
// 	frictionAir:0.06,
// 	restitution:1,
// 	friction:0.01,



// });
// Bodies.circle(100,100,100);
Bodies.rectangle(300,300,300,300);
var u = document.documentElement.scrollTop || document.body.scrollTop;

// var ball3 = Bodies.circle(120,100,50,{
// 	density:0.005,
// 	frictionAir:0.06,
// 	restitution:1,
// 	friction:0.01,





// });
// World.add(engine.world,ball);
// World.add(engine.world,ball2);
// World.add(engine.world,ball3);

// World.add(engine.world,gazou1);
// World.add(engine.world,)


World.add(engine.world,[Bodies.rectangle(0,u+1180,2000,100,{

	isStatic: true,

})]);
// var c = canvas.getContext("2d");
World.add(engine.world,[Bodies.rectangle(-100,0,100,2000,{
	// c.rotate(30 * Math.PI/180),
	isStatic: true,


})]);
World.add(engine.world,[Bodies.rectangle(1180,0,100,2000,{
	isStatic: true,

})]);

engine.world.gravity.y = 3;

Engine.run(engine);

Render.run(render);
// console.log("ok");
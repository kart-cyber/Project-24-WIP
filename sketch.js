
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	var ground_options = {
		isStatic: true
	}

	var paper_options = {
		restitution: 0.3,
		density: 1.2,
		friction: 0.5,
		isStatic: false

	}

	ground = Bodies.rectangle(width / 2, 700, 800, 20, ground_options);
	fill("white");
	World.add(world, ground);

	paper = Bodies.circle(200, 600, 20, paper_options);
	World.add(world, paper);




	Engine.run(engine);

	baseBlock = new Bblock(400, 640, 100, 10);
	leftBlock = new Sblock(200, 200, 10, 10);
	rightBlock = new Sblock(300, 400, 10, 10);

}


function draw() {
	rectMode(CENTER);
	background(0);
	rect(ground.position.x, ground.position.y, 800, 20);
	ellipse(paper.position.x, paper.position.y, 20, 20);



	baseBlock.display();
	leftBlock.display();
	rightBlock.display();

	//drawSprites();
	keyPressed();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Body.applyForce(paper.body,paper.body.position,{ x: 85, y: -85 });
	}
}




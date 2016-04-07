// Enemies our player must avoid
var Enemy = function(pos_y,vel_coef) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
	
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
	this.sprite = 'images/enemy-bug.png';
	//initial position
	this.x = 0;
	this.y = pos_y *83;
	//speed --
	this.velocity = vel_coef;
	
		   
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
	
	//enemy location
	this.x += this.velocity*dt;

	//reach the end of the "game space"
	if (this.x>505)
		{
			this.x = 0;
		}
	
	//collision with the player
	
	if ((Math.abs(player.x - this.x) < 101) && (player.y === this.y))
		{
			this.x = 0;
			player.x = 2*101;
			player.y = 5*83;
		}	
	
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


var Player = function(pos_x,pos_y) {

    // The image/sprite for the player
	this.sprite = 'images/char-boy.png';
	//initial position
	this.x = 101*pos_x;
	this.y = 83*pos_y;
	this.mov_x = 0;
	this.mov_y=0;
		   
};


Player.prototype.update = function() {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

	
	//movement update
	this.x +=this.mov_x*101;
	this.y +=this.mov_y*83;
	this.mov_x = 0;
	this.mov_y=0;


	//reach the end of the "game space"
	if (this.x>404)
		{
			this.x = 404;
		}
	else if (this.x<0)
		{
			this.x=0;
		}
	else if (this.y>5*83)
		{
			this.y = 5*83;
		}
	else if (this.y<83)
		{
			this.y = 5*83;
		}	




};

// Draw the player on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(movement){
	

	switch (movement){
		case 'left':
			this.mov_x= -1;
			this.mov_y= 0;
			break;
		case 'up':
			this.mov_x= 0;
			this.mov_y= -1;
			break;
		case 'right':
			this.mov_x= 1;
			this.mov_y= 0;
			break;
		case 'down':
			this.mov_x= 0;
			this.mov_y= 1;
			break;
		default:
			this.mov_x= 0;
			this.mov_y= 0;
		}

};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies

	var allEnemies=[];
	allEnemies[0] = new Enemy(1,30);
	allEnemies[1] = new Enemy(2,50);
	allEnemies[2] = new Enemy(3,100);
	
// Place the player object in a variable called player
	
	var player = new Player(2,5);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

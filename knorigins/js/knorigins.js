/*  ==================================================
 *  CMSI 185 - Final Project - K'norigins
 *  ==================================================
 *  Author 2: [Damian Browne]
 *  Author 3: [Michael Reza]
 */


// ---------------------------------------------------
// PAGE ELEMENT CONFIGURATION
// Store the relevant HTML entities for reference here
// ---------------------------------------------------
    // General Selectors
let lobbyCont  = document.querySelector("#lobby-container"),
    gameCont   = document.querySelector("#game-container"),
    loading    = document.querySelector("#loading"),

    // Lobby Selectors
    configButt = document.querySelector("#config-launch"),
    playerSelect = "[name=player-select]:checked",
    charSelect = "[name=char-select]:checked",
    diffSelect = "[name=diff-select]:checked",

    // Game Selectors
    timeLeft   = document.querySelector("#game-timer"),
    healthLeft = document.querySelector("#game-health"),
    healthLeftPlayer2 = document.querySelector("#game-health-player-2"),
    cureProgress = document.querySelector("#game-cure"),
    p2HealthText = document.querySelector("#P2-health"),
    currRound  = document.querySelector("#game-round"),
    currScore = document.querySelector("#game-score"),
    mazeCont   = document.querySelector("#game-maze"),
    buildSelect = document.querySelector("#char-builder"),
    trapSelect = document.querySelector("#char-trapper"),
    // singleplayer vs multiplayer selectors
    singleSelect = document.querySelector("#player-1"),
    multiSelect = document.querySelector("#player-2"),
    // builder is P1 and trapper is P2
    charCombination1 = document.querySelector('#hidden-div-1'),
    // builder is P2 and trapper is P1
    charCombination2 = document.querySelector('#hidden-div-2'),
    // selectors for player 1 and player 2 text underneath selection
    p1 = document.querySelector('#player-1-indicator'),
    p2 = document.querySelector('#player-2-indicator'),
    pFirst = document.querySelector('#first-player-indicator'),
    pSecond = document.querySelector('#second-player-indicator'),
    // selectors to manipulate styles of character selection boxes
    builderBox = document.querySelector('#builder-sqr'),
    trapperBox = document.querySelector('#trapper-sqr');


    buildSelect.addEventListener("click", function() {
      builderBox.style = "border: 4px solid red";
      trapperBox.style = "border: 4px solid black";
      charCombination1.style.display = "inline";
      charCombination2.style.display = "none";
    });
    trapSelect.addEventListener("click", function() {
      builderBox.style = "border: 4px solid black";
      trapperBox.style = "border: 4px solid red";
      pFirst.style.display = "inline";
      pSecond.style.display = "inline";
      pSecond.style.opacity = "0";
      charCombination1.style.display = "none";
      charCombination2.style.display = "inline";
    });
    // singleplayer selection character toggle options
  let singlePlayerMode = singleSelect.addEventListener("click", function() {
    p1.style.display = "inline";
    p2.style.display = "none";
    if (trapperBox.style.border === "4px solid red") {
      builderBox.style = "border: 4px solid black";
      trapperBox.style = "border: 4px solid red";
      charCombination1.style.display = "none";
      charCombination2.style.display = "inline";
      pSecond.style.opacity = "0";
    } else {
      charCombination1.style.display = "inline";
      charCombination2.style.display = "none";
      trapperBox.style.border = "4px solid black";
    }
    buildSelect.addEventListener("click", function() {
      builderBox.style = "border: 4px solid red";
      trapperBox.style = "border: 4px solid black";
      charCombination1.style.display = "inline";
      charCombination2.style.display = "none";
    });
    trapSelect.addEventListener("click", function() {
      builderBox.style = "border: 4px solid black";
      trapperBox.style = "border: 4px solid red";
      pFirst.style.display = "inline";
      pSecond.style.display = "inline";
      pSecond.style.opacity = "0";
      charCombination1.style.display = "none";
      charCombination2.style.display = "inline";
    });
  });
    // multiplayer selection character toggle options
  let multiPlayerMode = multiSelect.addEventListener("click", function() {
    p1.style.display = "inline";
    p2.style.display = "inline";
    if (trapperBox.style.border === "4px solid red") {
      pSecond.style.opacity = "1";
      builderBox.style = "border: 4px solid blue";
      charCombination1.style.display = "none";
      charCombination2.style.display = "inline";
    } else {
      trapperBox.style = "border: 4px solid blue";
      builderBox.style = "border: 4px solid red";
      charCombination1.style.display = "inline";
      charCombination2.style.display = "none";
    }
    buildSelect.addEventListener("click", function() {
      builderBox.style = "border: 4px solid red";
      trapperBox.style = "border: 4px solid blue";
      charCombination1.style.display = "inline";
      charCombination2.style.display = "none";
    });
    trapSelect.addEventListener("click", function() {
      trapperBox.style = "border: 4px solid red";
      builderBox.style = "border: 4px solid blue";
      pFirst.style.display = "inline";
      pSecond.style.display = "inline";
      pSecond.style.opacity = "1";
      charCombination1.style.display = "none";
      charCombination2.style.display = "inline";
    });
  })

    // Any relative paths to game assets, including images,
    // sounds, etc.
    let assets = {
      images: {
        builder: "./assets/images/builder.png",
        zombie: "./assets/images/zombie.png",
        bloodyzombie: "./assets/images/bloodyzombie.png",
        trappedzombie: "./assets/images/trappedzombie.png",
        smartzombie: "./assets/images/smartzombie.png",
        bloodysmartzombie: "./assets/images/bloodysmartzombie.png",
        trappedsmartzombie: "./assets/images/trappedsmartzombie.png",
        wall: "./assets/images/wall.png",
        wall1: "./assets/images/wall1.png",
        wall2: "./assets/images/wall2.png",
        wall3: "./assets/images/wall3.png",
        wall4: "./assets/images/wall4.png",
        trapper: "./assets/images/trapper.png",
        trap: "./assets/images/trap.png",
        sprungtrap: "./assets/images/sprungtrap.png",
        healthpotion: "./assets/images/healthpotion.png",
        cure: "./assets/images/cure.png",
      },
      sounds: {
        hammer: "./assets/sounds/hammer.mp3",
        trapclose: "./assets/sounds/trapclose.mp3",
        healthdrink: "./assets/sounds/healthdrink.mp3",
        curedrink: "./assets/sounds/curedrink.mp3",
        trapdeath: "./assets/sounds/trapdeath.mp3",
        //ambience: "./assets/sounds/ambience.mp3",
        //music: "./assets/sounds/music.mp3",
        bite: "./assets/sounds/bite.mp3",
        grunt: "./assets/sounds/grunt.mp3",
        grunt2: "./assets/sounds/grunt2.mp3",
        zGrowl: "./assets/sounds/zGrowl.mp3",
        wallbreak: "./assets/sounds/wallbreak.mp3",
      },
    },

    // Global objects
    activeGame,
    activeP5,
    message,

    // Default maze in the case where there is no user-
    // specifiable arena
    possibleMazes = [
      // 3 EASY difficulty mazes (2S, 3Z)
      ["XXXXXXXXXXXXXX",
       "XZ...S..X....X",
       "X..X.....T...X",
       "X..........P.X",
       "X...X...X....X",
       "X......Z.....X",
       "X..Z.........X",
       "X.........X..X",
       "X...X........X",
       "X.X...X.X..S.X",
       "XXXXXXXXXXXXXX"],

       ["XXXXXXXXXXXXXX",
        "XZ...S.......X",
        "X........T...X",
        "X..........P.X",
        "X............X",
        "X..Z.........X",
        "X............X",
        "X............X",
        "X............X",
        "X..Z.......S.X",
        "XXXXXXXXXXXXXX"],

       ["XXXXXXXXXXXXXXX",
        "XZ.....S.....ZX",
        "X.XXX.X.X.XXX.X",
        "X.X...X.X...X.X",
        "X.X.XXX.XXX.X.X",
        "X.X.X..T..X.X.X",
        "X.X.X..P..X.X.X",
        "X.X.XXX.XXX.X.X",
        "X.X...X.X...X.X",
        "XZ.....S......X",
        "XXXXXXXXXXXXXXX"],
       // 3 MEDIUM difficulty mazes (3S, 4Z)
       ["XXXXXXXXXXXXXXXXXXX",
        "X...Z..X...X.Z....X",
        "X......X...X......X",
        "X..XXXXXX.XXXXXX..X",
        "X..X.....S....ZX..X",
        "X..X...........X..X",
        "X..X...........X..X",
        "X..X...P.T...Z.X..X",
        "X..XX.XXXXXXX.XX..X",
        "X.......XXX..S....X",
        "X........X........X",
        "X..XXXX.....XXXX..X",
        "X........X.....S..X",
        "XXXXXXXXXXXXXXXXXXX"],

       ["XXXXXXXXXXXXXXXXXXX",
        "X...Z....S....Z...X",
        "X.X.XX.XXX.X.X.XX.X",
        "X.X.X...X.......X.X",
        "X.X.X.X.X.X.X.X.X.X",
        "X.X.X.X.X.X.X.X.X.X",
        "X.X.X.X.XPX.X.X.X.X",
        "X.X.X.X.XTX.X.X.XZX",
        "X.X.XZX.X.X.X.X.X.X",
        "X.X.X.X.X.X.XSX.X.X",
        "X.X...X.......X.X.X",
        "X.XX.X.X.X.X.XX.X.X",
        "X..............S..X",
        "XXXXXXXXXXXXXXXXXXX"],

       ["XXXXXXXXXXXXXXXXXXX",
        "X........S....Z...X",
        "X...X.XXX.XXX.X...X",
        "X..P....X.X.......X",
        "X.X.....X.X.....X.X",
        "X.......X.X.......X",
        "X..Z..........Z...X",
        "X...XXX..X..XXX...X",
        "X...X.X.....X.X...X",
        "X.X....X.S.X....X.X",
        "X..............T..X",
        "X.....XXXXXXX.....X",
        "X....S......Z.....X",
        "XXXXXXXXXXXXXXXXXXX"],
        // 3 HARD difficulty mazes (4S, 5Z)
       ["XXXXXXXXXXXXXXXXXXX",
        "XX.Z.......X...Z..X",
        "XSX....X.Z..X.....X",
        "X..X....X....X...SX",
        "X...X....X....X...X",
        "X....X....X....X..X",
        "X.....X.PT.X....X.X",
        "X.X....X....X.....X",
        "X..X....X....X....X",
        "X...X.Z..X....X...X",
        "X....X....X.Z..X..X",
        "X.....X....X....X.X",
        "X..S...X.......S.XX",
        "XXXXXXXXXXXXXXXXXXX"],

       ["XXXXXXXXXXXXXXXXXXX",
        "X.................X",
        "X....S......Z.....X",
        "X.................X",
        "X............Z....X",
        "X...Z.............X",
        "X.......P.T.......X",
        "X.............S...X",
        "X.................X",
        "X.................X",
        "X........S........X",
        "X..............S..X",
        "X....Z.........Z..X",
        "XXXXXXXXXXXXXXXXXXX"],

       ["XXXXXXXXXXXXXXXXXXX",
        "X..Z.....S........X",
        "X.XXXXXXXXXXXXXXX.X",
        "X.X...Z...Z.....X.X",
        "X.X.XXXXXXXXXXX.X.X",
        "X.X.X.........X.X.X",
        "X.X.X...P.T...X.X.X",
        "X.X.X.........X.XSX",
        "X.X.X......Z..X.X.X",
        "X.X.XXXXXXXXXXX.X.X",
        "X.X....Z........X.X",
        "X.XXXXXXXXXXXXXXX.X",
        "X........S......S.X",
        "XXXXXXXXXXXXXXXXXXX"]
    ],
    // Size of each cell rendered by p5; shrink to make
    // larger maps fit on the screen!
    cellDims = 60;


// ---------------------------------------------------
// GRAPHICS CONFIGURATION
// We'll use the following Graphics functions to
// configure p5
// ---------------------------------------------------

/*
 * Configures an "on demand" version of p5 that begins
 * executing its draw loop when a new game is started,
 * rather than when the page loads (the default use)
 * NOTE: This means all interfacing with p5 is done
 * through the global activeP5 variable
 */
function setupP5 (p) {

  p.setup = function () {
    let canvasHeight = activeGame.rows * cellDims,
        canvasWidth  = activeGame.cols * cellDims;
        p.createCanvas(canvasWidth, canvasHeight);
        //playSound(assets.sounds.ambience);
        //playSound(assets.sounds.music);

    // Setup assets as p5 image handles
    assets.p5Images = {};
    for (let im in assets.images) {
      assets.p5Images[im] = p.loadImage(assets.images[im]);
    }
    p.textAlign(p.CENTER, p.CENTER);
  }

  p.draw = function () {
    if (!activeGame) { return; }
    p.background(0);
    p.drawKnotbjects();
    p.writeMessage();
  }

  p.writeMessage = function () {
    if (message) {
      p.fill("white");
      p.textSize(40);
      p.text(message, p.width/2, p.height/4);
    }
  }

  p.drawKnotbjects = function () {
    activeGame.forEachKnotbject((k, r, c) => {
      p.image(assets.p5Images[k.asset], c*cellDims, r*cellDims, cellDims, cellDims);
    });
  }

}

// play sound function
function playSound (sound) {
  let a = new Audio(sound);
  a.play();
}


// function repeatSound(sound) {

// ---------------------------------------------------
// INTERFACE CONFIGURATION
// We'll use the following functions to communicate
// with the user and collect their input
// ---------------------------------------------------

function beginGameLoad () {
  lobbyCont.style.display = "none";
  loading.style.display = "";
  mazeCont.innerHTML = "";
  timeLeft.value = 100;
  healthLeft.value = 100;
  healthLeftPlayer2.value = 100;
  cureProgress.value = 0;
//  clearInterval(playerIdChange);
}

function endGameLoad () {
  loading.style.display = "none";
  gameCont.style.display = "";
}

function updateHealth (percentage) {
  healthLeft.value = Math.floor(percentage * 100);
}

function updatePlayer2Health (percentage) {
  healthLeftPlayer2.value = Math.floor(percentage * 100);
}

function updateCureProgress (percentage) {
  cureProgress.value = Math.floor(percentage * 100);
}

function updateTimer (percentage) {
  timeLeft.value = Math.floor(percentage * 100);
}

function updateRound (round) {
  currRound.innerHTML = round;
}

function updateScore (score) {
  //score is multiplied by 100 to make it a nice big number and the diffMultiplier is factored in to encourage players to play on harder difficulties
  currScore.innerHTML = Math.floor(score);
}

function getCookie(cname) {
   var name = cname + "=";
   var decodedCookie = decodeURIComponent(document.cookie);
   var ca = decodedCookie.split(';');
   for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
   }
   return "ERR: Login Failure";
 }

function endGame () {
  gameCont.style.display = "none";
  lobbyCont.style.display = "";
  mazeCont.innerHTML = "";
}


function _key_listener_Pause (event) {
  event.preventDefault();
  switch (event.key) {
    case " ": activeGame.isPaused = !activeGame.isPaused;
    if (activeGame.isPaused) { activeGame.setPause(); };
    if (!activeGame.isPaused) { activeGame.removePause(); };
    break;
  }
}

function combinedKeyPress (event, button, row, col) {
  event.preventDefault();
  let player = activeGame.player,
      r = player.r,
      c = player.c;
  switch (event.key) {
    case button: player.facing = {r: r + row, c: c + col}; break
  }
}

function _key_listener_Player_1 (event) {
  event.preventDefault();
  let player = activeGame.player,
      r = player.r,
      c = player.c;
  switch (event.key) {
    case "ArrowLeft": c--; break; //ArrowLeft //a
    case "ArrowDown": r++; break; //ArrowDown //s
    case "ArrowRight": c++; break; //ArrowRight //d
    case "ArrowUp": r--; break; //ArrowUp //w
    //directional ability use Player 1
/*    let numOfTests = 0;
    let test = setInterval(function () {
      player.facing = {r: -1, c: 0};
      if ( === "l") {
        player.facing = {r: -1, c: -1};
        console.log("ayye");
      }
      numOfTests++;
      if (numOfTests >= 3) {
        clearInterval(test);
      };
    }, 50);
*/
    case "t":
    player.facing = {r: -1, c: 0};
    player.useAbility();
    break;
    case "f": player.facing = {r: 0, c: -1}; player.useAbility(); break;
    case "g": player.facing = {r: 1, c: 0}; player.useAbility(); break;
    case "h": player.facing = {r: 0, c: 1}; player.useAbility(); break;
  //  case " ": activeGame.player.useAbility(); return;

  }
  player.moveTo(r, c);
}

function _key_listener_Player_2 (event) {
  event.preventDefault();
  let player2 = activeGame.player2,
      r2 = player2.r,
      c2 = player2.c;
  switch (event.key) {
    //movement for player 2
    case "w": c2--; break;
    case "a": r2++; break;
    case "s": c2++; break;
    case "d": r2--; break;
    //directional ability use Player 2
    case "p": player2.facing = {r: -1, c: 0}; player2.useAbility(); break;
    case "l": player2.facing = {r: 0, c: -1}; player2.useAbility(); break;
    case ";": player2.facing = {r: 1, c: 0}; player2.useAbility(); break;
    case "'": player2.facing = {r: 0, c: 1}; player2.useAbility(); break;
  //  case " ": activeGame.player.useAbility(); return
  }
  player2.moveTo(r2, c2);
}

/*
 * Configures the keyboard event handlers for the player;
 * we'll use the standard up down left right movement
 */
function bindPauseKeys () {
   document.addEventListener("keydown", _key_listener_Pause)
 }

function removePauseKeys () {
  document.removeEventListener("keydown", _key_listener_Pause)
}

function bindPlayer1Keys () {
  document.addEventListener("keydown", _key_listener_Player_1);
}

/*
 * Removes the keybindings for the player controls
 */
function removePlayer1Keys () {
  document.removeEventListener("keydown", _key_listener_Player_1);
}

function bindPlayer2Keys () {
  document.addEventListener("keydown", _key_listener_Player_2);
}

function removePlayer2Keys () {
  document.removeEventListener("keydown", _key_listener_Player_2);
}

// ---------------------------------------------------
// LOBBY CONFIGURATION
// We'll handle all setup options here
// ---------------------------------------------------

// Configure the game initialization
function initGame (config) {
  beginGameLoad();
  activeGame = new Game(config);
  activeP5 = new p5(setupP5, "game-maze");
  endGameLoad();
};

// Configure the launch button below:
configButt.onclick = function () {
  let totalPlayers = document.querySelector(playerSelect).value,
      character = document.querySelector(charSelect).value,
      difficulty = document.querySelector(diffSelect).value,
      maze;
  switch (difficulty) {
    case "easy": maze = possibleMazes[Math.floor(Math.random()*3)]; break;
    case "medium": maze = possibleMazes[Math.floor(Math.random()*3) + 3]; break;
    case "hard": maze = possibleMazes[Math.floor(Math.random()*3) + 6]; break;
  }

  if (!isValidMaze(maze)) {
    alert("[X] Your maze is malformed. Please see the requirements for a valid maze to play.");
    return;
  }

  // If we make it here, then the game is good to go! Create a
  // new game object in our global activeGame to start
  initGame({
    maze: maze,
    players: totalPlayers,
    char: character,
    diff: difficulty
  });
}


// ---------------------------------------------------
// KTAHBJECT SUPERCLASS
// The following classes will represent all of our
// interactive objects in the game itself
// ---------------------------------------------------

class Knotbject {
  constructor (r, c, game) {
    // TODO Knotbjects have 4 properties:
    // r: the row of the knotbject
    // c: the column of the knotbject
    // game: a reference to the game in which it's housed
    // health: by default, 100
    // Set these properties here

    this.r = r;
    this.c = c;
    this.game = game;
    this.health = 100;
  }

  /*
   * Moves the current Knotbject from its current location
   * to the one at the given row and col
   */
  moveTo (row, col) {
    // TODO Create a variable called target that gets the
    // object(s) at the requested row, col
    // [!] see Game's getKnotbjectsAt method
    // let target = ???;
    let target = this.game.getKnotbjectsAt(row, col);
    this.facing = {r: row - this.r, c: col - this.c};

    // TODO set a property called facing on this object
    // that is an object with 2 properties: r and c
    // This property represents which way the moved
    // knotbject is facing. For example, if it just moved
    // left, then this.facing = {r: 0, c: -1}; if it just
    // moved up, then this.facing = {r: -1, c: 0}, etc.
    // this.facing = {r: ???, c: ???};
    //
    // We'll use the facing property when a player uses
    // their ability, and that ability must occur in a given
    // direction compared to where they're facing


    // TODO Only move if the spot is open; check to see if
    // the target is an empty location; if it is, then
    // we can move to the requested spot; if it isn't, then
    // do nothing!
     if (target.length === 0) {
         // Uncomment and leave the following two lines as-is:
         this.game.addAt(this, row, col);
         this.game.eraseAt(this, this.r, this.c);

         // TODO set this knotbject's r to row and c to col
         // ???
         // ???
         this.r = row;
         this.c = col;
     } else /*target[0].length > 0 === "healthpotion")*/ {
      let playerType = this.game.getKnotbjectsAt(this.r, this.c);
       switch (target[0].asset) {
         case "healthpotion":
  //       let playerType = this.game.getKnotbjectsAt(this.r, this.c);
  //      this.game.eraseAt(target[0], target[0].r, target[0].c);
  //      this.game.addAt(this, row, col);
  //      this.game.eraseAt(this, this.r, this.c);

          switch (playerType[0].asset) {
            case this.game.player.asset:
              playSound(assets.sounds.healthdrink);
              this.game.score += (100 - this.game.player.health) * 0.15 * this.game.scoreMultiplier;
              updateScore(this.game.score);
              this.game.player.health += 100;
              this.game.player.health = Math.min(100,this.game.player.health);
              updateHealth(this.game.player.health/100);
              this.game.eraseAt(target[0], target[0].r, target[0].c);
              this.game.addAt(this, row, col);
              this.game.eraseAt(this, this.r, this.c);
              break;
            case this.game.player2.asset:
              playSound(assets.sounds.healthdrink);
              this.game.player2.health += 100;
              this.game.player2.health = Math.min(100,this.game.player2.health);
              updatePlayer2Health(this.game.player2.health/100);
              this.game.eraseAt(target[0], target[0].r, target[0].c);
              this.game.addAt(this, row, col);
              this.game.eraseAt(this, this.r, this.c);
              break;
         }
         this.r = row;
         this.c = col;
         break;
         case "cure":
    //     let playerType = this.game.getKnotbjectsAt(this.r, this.c);
   //      this.game.eraseAt(target[0], target[0].r, target[0].c);
   //      this.game.addAt(this, row, col);
   //      this.game.eraseAt(this, this.r, this.c);
         switch (playerType[0].asset) {
           case this.game.player.asset:
            this.game.score += (Math.min(100, this.game.cureProgress + 10) - this.game.cureProgress)  * this.game.scoreMultiplier ;//originally +30
            this.game.cureProgress = Math.min(100, this.game.cureProgress + 19) ;//originally +30
            updateScore(this.game.score);
            updateCureProgress(this.game.cureProgress/100);
            this.game.eraseAt(target[0], target[0].r, target[0].c);
            this.game.addAt(this, row, col);
            this.game.eraseAt(this, this.r, this.c);
            playSound(assets.sounds.curedrink);
            break;
           case this.game.player2.asset:
            this.game.score += (Math.min(100, this.game.cureProgress + 10) - this.game.cureProgress)  * this.game.scoreMultiplier ;//originally +30
            this.game.cureProgress = Math.min(100, this.game.cureProgress + 10) ;//originally +30
            //this.game.cureProgress = Math.min(100,this.game.cureProgress);
            updateScore(this.game.score);
            updateCureProgress(this.game.cureProgress/100);
            this.game.eraseAt(target[0], target[0].r, target[0].c);
            this.game.addAt(this, row, col);
            this.game.eraseAt(this, this.r, this.c);
            playSound(assets.sounds.curedrink);
            break;
          }
          this.r = row;
          this.c = col;
          break;
       }
     }
  }
}


// ---------------------------------------------------
// PLAYER CLASS
// The Player object will be used to track the Player's
// state during the game, including its used abilities
// ---------------------------------------------------

// TODO Change the Player class definition to inherit from Knotbject

class Player extends Knotbject {
  constructor (r, c, game) {
    // TODO Since Player is a subclass of Knotbject, call the superclass'
    // constructor with the same parameters here:
    // ???
    super(r, c, game)
    // Leave these lines as-is:
    this.asset = this.character = this.game.character;
    this.facing = {r: -1, c: 0}; // Default: facing up
    this.cooldown = 0;
    this.trapCooldown = 0;
    this.isAlive = true;
  }

  /*
   * Players who are adjacent to a Zombie at a game tick
   * will take damage proportional to the difficulty of
   * the game. If the player's health is reduced below 0,
   * then the game will end.
   * All damage updates the health bar of the player using
   * the updateHealth function.
   */
  getEaten () {
    // TODO reduce this player's health property by the amount
    // decided in the game instance's playerDamage property
    // ???

    this.health -= this.game.playerDamage;
    this.game.score -= this.game.playerDamage * 0.2 * this.game.scoreMultiplier;
    updateScore(this.game.score);

    //different sounds for players taking damage
    switch (Math.floor(Math.random()*2)) {
      case 0: playSound(assets.sounds.grunt); break;
      case 1: playSound(assets.sounds.grunt2); break;
    }

    // TODO update the health bar with the percentage of the player's
    // remaining health, out of a maximum 100
    // [!] updateHealth(percentage)
    // ???

    updateHealth(this.health/100);

    // TODO if the player's health is <= 0, then have the game end
    // in defeat
    // if (???) {
    //   [!] See Game class methods for how to end the game!
    // }

    if (this.health <= 0) {
      this.game.eraseAt(this, this.r, this.c);
      this.isAlive = false;
      removePlayer1Keys();
      if (!this.isAlive && !this.game.player2.isAlive) {
        this.game.end();
      }
    }
  }

  /*
   * Players can use their character's ability as long as it
   * isn't on cooldown, which lasts some number of difficulty-
   * adjusted ticks
   */
  useAbility () {
    let triggerWallCooldown = false,
        triggerTrapCooldown = false;
    this.game.score -= 1 * this.game.scoreMultiplier;
    updateScore(this.game.score);
      switch (this.character) {
        case "trapper":
          if (this.trapCooldown === 0) {
            let trapLoc = {r: this.r + this.facing.r, c: this.c + this.facing.c},
                objectsAtLoc = this.game.getKnotbjectsAt(trapLoc.r, trapLoc.c);
            if (objectsAtLoc.length === 0) {
              this.game.addAt(new Trap(trapLoc.r, trapLoc.c, this.game), trapLoc.r, trapLoc.c);
              triggerTrapCooldown = true;
            } else if (objectsAtLoc[0].asset === "trap") {
              objectsAtLoc[0].asset = "sprungtrap";
              playSound(assets.sounds.trapclose);
              objectsAtLoc[0].health -= 98;
            }
            }
          break;
        case "builder":
          if (this.cooldown === 0) {
            let wallLoc = {r: this.r + this.facing.r, c: this.c + this.facing.c},
                objsAtLoc = this.game.getKnotbjectsAt(wallLoc.r, wallLoc.c);

            // TODO if there's nothing in objsAtLoc, then it's clear and
            // ready to have a wall placed in it!
              if (objsAtLoc.length === 0) {
                playSound(assets.sounds.hammer);
                // TODO create a new Wall object at the given wallLoc
                // let newWall = new Wall( ??? );
                //  let newWall = new Wall(wallLoc.r, wallLoc.c, game, this.permanent = false);

                // TODO add the newWall to the game's knotbjects:
                // [!] this.game.knotbjects
                // ???
                this.game.addAt(new Wall(wallLoc.r, wallLoc.c, this.game/*, false*/), wallLoc.r, wallLoc.c);
                //    this.game.knotbjects
                // Uncomment, then leave this line as-is:
                triggerWallCooldown = true;
              } else {
              if (objsAtLoc[0].r !== 0 &&
                objsAtLoc[0].r !== this.game.rows - 1 &&
                objsAtLoc[0].c !== 0 &&
                objsAtLoc[0].c !== this.game.cols - 1) {
                if (objsAtLoc[0].asset === "wall" ||
                  objsAtLoc[0].asset === "wall1" ||
                  objsAtLoc[0].asset === "wall2" ||
                  objsAtLoc[0].asset === "wall3" ||
                  objsAtLoc[0].asset === "wall4") {
                    playSound(assets.sounds.hammer)
                    this.game.eraseAt(objsAtLoc[0], objsAtLoc[0].r, objsAtLoc[0].c);
                }
              }
            } break;
          }
        }
        if (triggerWallCooldown) { this.cooldown += this.game.cooldown; }
        if (triggerTrapCooldown) { this.trapCooldown += this.game.trapCooldown; }
      }

  /*
   * A player's act on a given tick reduces their cooldown by
   * 1, but to a min of 0
   */
  act () {

    // TODO simple: set this Player's cooldown to
    // the max of 0 and this.cooldown - 1
    // [!] Math.max
    // this.cooldown = ???;
    this.cooldown = Math.max(0, this.cooldown - 1);
    this.trapCooldown = Math.max(0, this.trapCooldown - 1);
//    if (!this.isAlive) {
//      this.r = null;
//      this.c = null;
//    }
    if (!this.isAlive && !this.game.player2.isAlive) {
      this.game.end();
    }
  }
}

class Player2 extends Knotbject {
  constructor (r, c, game) {
    // TODO Since Player is a subclass of Knotbject, call the superclass'
    // constructor with the same parameters here:
    // ???
    super(r, c, game)
    // Leave these lines as-is:
    this.asset = this.character = this.game.character2;
    this.facing = {r: -1, c: 0}; // Default: facing up
    this.cooldown = 0;
    this.trapCooldown = 0;
    this.isAlive = true;
  }

  /*
   * Players who are adjacent to a Zombie at a game tick
   * will take damage proportional to the difficulty of
   * the game. If the player's health is reduced below 0,
   * then the game will end.
   * All damage updates the health bar of the player using
   * the updateHealth function.
   */
  getEaten () {
    // TODO reduce this player's health property by the amount
    // decided in the game instance's playerDamage property
    // ???

    this.health -= this.game.playerDamage;
    this.game.score -= this.game.playerDamage * 0.2 * this.game.scoreMultiplier;
    updateScore(this.game.score);

    //different sounds for players taking damage
    switch (Math.floor(Math.random()*2)) {
      case 0: playSound(assets.sounds.grunt); break;
      case 1: playSound(assets.sounds.grunt2); break;
    }

    //different sounds for players taking damage
    switch (Math.floor(Math.random()*2)) {
      case 0: playSound(assets.sounds.grunt); break;
      case 1: playSound(assets.sounds.grunt2); break;
    }



    // TODO update the health bar with the percentage of the player's
    // remaining health, out of a maximum 100
    // [!] updateHealth(percentage)
    // ???

    updatePlayer2Health(this.health/100);

    // TODO if the player's health is <= 0, then have the game end
    // in defeat
    // if (???) {
    //   [!] See Game class methods for how to end the game!
    // }

    if (this.health <= 0) {
      this.game.eraseAt(this, this.r, this.c);
      this.isAlive = false;
      if (!this.isAlive && !this.game.player.isAlive) {
        this.game.end();
      }
    }
  }

  /*
   * Players can use their character's ability as long as it
   * isn't on cooldown, which lasts some number of difficulty-
   * adjusted ticks
   */
  useAbility () {
    let triggerWallCooldown = false,
        triggerTrapCooldown = false;
    this.game.score -= 1 * this.game.scoreMultiplier;
    if (this.cooldown === 0) { //this whole thing seems like it wouldn't work if we were to add cooldowns bacl
      switch (this.character) {
        case "trapper":
          if (this.trapCooldown === 0) {
            let trapLoc = {r: this.r + this.facing.r, c: this.c + this.facing.c},
                objectsAtLoc = this.game.getKnotbjectsAt(trapLoc.r, trapLoc.c);
              if (objectsAtLoc.length === 0) {
              this.game.addAt(new Trap(trapLoc.r, trapLoc.c, this.game), trapLoc.r, trapLoc.c);
              triggerTrapCooldown = true;
            } else if (objectsAtLoc[0].asset === "trap") {
              objectsAtLoc[0].asset = "sprungtrap";
              objectsAtLoc[0].health -= 98;
            }
          }
           break;
        case "builder":
          let wallLoc = {r: this.r + this.facing.r, c: this.c + this.facing.c},
              objsAtLoc = this.game.getKnotbjectsAt(wallLoc.r, wallLoc.c);

          // TODO if there's nothing in objsAtLoc, then it's clear and
          // ready to have a wall placed in it!
            if (objsAtLoc.length === 0) {
            // TODO create a new Wall object at the given wallLoc
            // let newWall = new Wall( ??? );
            //  let newWall = new Wall(wallLoc.r, wallLoc.c, game, this.permanent = false);

            // TODO add the newWall to the game's knotbjects:
            // [!] this.game.knotbjects
            // ???
              this.game.addAt(new Wall(wallLoc.r, wallLoc.c, this.game/*, false*/), wallLoc.r, wallLoc.c);
          //    this.game.knotbjects
            // Uncomment, then leave this line as-is:
              triggerWallCooldown = true;
            } else {
              if (objsAtLoc[0].r !== 0 &&
                objsAtLoc[0].r !== this.game.rows - 1 &&
                objsAtLoc[0].c !== 0 &&
                objsAtLoc[0].c !== this.game.cols - 1) {
                if (objsAtLoc[0].asset === "wall" ||
                objsAtLoc[0].asset === "wall1" ||
                objsAtLoc[0].asset === "wall2" ||
                objsAtLoc[0].asset === "wall3" ||
                objsAtLoc[0].asset === "wall4") {
                  this.game.eraseAt(objsAtLoc[0], objsAtLoc[0].r, objsAtLoc[0].c);
              //  objsAtLoc[0].health -= 34;
                }
              }
            }
            break;
      }
    }
    if (triggerWallCooldown) { this.cooldown += this.game.cooldown; }
    if (triggerTrapCooldown) { this.trapCooldown += this.game.trapCooldown; }
  }

  /*
   * A player's act on a given tick reduces their cooldown by
   * 1, but to a min of 0
   */
  act () {

    // TODO simple: set this Player's cooldown to
    // the max of 0 and this.cooldown - 1
    // [!] Math.max
    // this.cooldown = ???;
    this.cooldown = Math.max(0, this.cooldown - 1);
    this.trapCooldown = Math.max(0, this.trapCooldown - 1);
//    if (!this.isAlive) {
  //    this.game.player2.r = this.game.player.r;
//      this.game.player2.c = this.game.player.c;
//    }
    if (!this.isAlive && !this.game.player.isAlive) {
      this.game.end();
    }
    if (!this.isAlive) {
      this.game.eraseAt(this, this.r, this.c);
      removePlayer2Keys();
    }
  }
}

// ---------------------------------------------------
// ZOMBIE CLASS
// The Knotmbies themselves! All state related to each
// Zombie in the game will be templated here
// ---------------------------------------------------

// TODO Change the Zombie class definition to inherit from Knotbject
class Zombie extends Knotbject {
  constructor (r, c, game) {
    // TODO Since Zombie is a subclass of Knotbject, call the superclass'
    // constructor with the same parameters here:
    // ???
    super(r, c, game)
    // Leave this line as-is:
    this.asset = "zombie";
  }

  /*
   * A Zombie acts at every tick, performing the following:
   * 1) Ensure that the zombie is removed if its health is <= 0
   * 2) Checks if a player is adjacent to them, if so, the
   *    player will take damage
   * 3) If the player is NOT adjacent, the Zombie moves in
   *    a random direction: up, down, left, or right; if the
   *    direction chosen is blocked (by a wall or zombie),
   *    then this Zombie does nothing for this tick
   */
  act () {
    if (this.health <= 0) {
      // TODO Satisfy act requirement #1:
      // If this Zombie is dead, then remove it from the game,
      // and then return from this function
      // [!] this.game.eraseAt
      // ???
      this.game.eraseAt(this, this.r, this.c);
    }

    let r = this.r,
        c = this.c,
        // Lists all of the putative directions the Zombie can move
        dirs = [{r:0, c:1}, {r:0, c:-1}, {r:1, c:0}, {r:-1, c:0}],
        openDirs = [];
        //iterates through each possible move and finds open
        //spaces to select from
        for (let i = 0; i < dirs.length; i++) {
          let spaces = this.game.getKnotbjectsAt(r + dirs[i].r, c + dirs[i].c);
          if (spaces.length === 0 ||
            spaces[0].asset === this.game.player.asset ||
            spaces[0].asset === this.game.player2.asset ||
            spaces[0].asset === "trap") {
            openDirs.push(dirs[i]);
          }
        }
        // Chooses one of those at random
        let chosenDir = /*dirs*/openDirs[Math.floor(Math.random()*openDirs.length)];
        // if array of movements is empty, default to stay put
        if (openDirs.length === 0) {
          chosenDir = {r: 0, c: 0};
        }
        // Provides a row, col coordinate of the desired location to move
        let toMoveTo = {r: r + chosenDir.r, c: c + chosenDir.c},
            target = this.game.getKnotbjectsAt(toMoveTo.r, toMoveTo.c);

        if (target.length > 0 && target[0].asset !== "healthpotion") {
          if (target[0].asset === "trap") {
            playSound(assets.sounds.trapdeath)
            target[0].asset = "trappedzombie";
            this.game.eraseAt(this, this.r, this.c);
            target[0].health -= 98;
          }
        }



    // TODO Satisfy act requirement #2: check if the Player is
    // in any of the adjacent cells to the Zombie, and if so,
    // have the Player get eaten and *return* from this function
    // immediately after
    // [!] this.game.player
    // [!] this.game.player.getEaten
    // [!] activeP5.dist  // p5's dist method!
    // ??? (this will be an if statement with stuff inside)

    //syntax of p5 distance function: dist(x1,y1,x2,y2)
    if (activeP5.dist(r, c, this.game.player.r, this.game.player.c) <= 1 && this.game.player.isAlive) {
      this.game.player.getEaten();
      playSound(assets.sounds.bite);
      //randomized zombie growl while eating (50% chance)
      switch (Math.floor(Math.random()*2)) {
        case 1: playSound(assets.sounds.zGrowl); break;
      };

      return;
    }
    if (activeP5.dist(r, c, this.game.player2.r, this.game.player2.c) <= 1 && this.game.player2.isAlive) {
      this.game.player2.getEaten();
      playSound(assets.sounds.bite);
      //randomized zombie growl while eating (50% chance)
      switch (Math.floor(Math.random()*2)) {
        case 1: playSound(assets.sounds.zGrowl); break;
      };

      return;
    }

    // vv for testing distance function
    //console.log(activeP5.dist(r,c,this.game.player.r,this.game.player.c))

    // TODO Satisfy act requirement #3: move the Zombie. If we
    // reach here, then we know the Player is not adjacent to the
    // Zombie, and it is still alive, so move it to the location
    // we made in toMoveTo above
    // [!] this.moveTo
    // ???
    this.moveTo(toMoveTo.r, toMoveTo.c);
    openDirs = [];
  }
}

class SmartZombie extends Knotbject {
  constructor (r, c, game) {
    super (r, c, game)
    this.asset = "smartzombie";
  }
  act() {
    if (this.health <= 0) {
      this.game.eraseAt(this, this.r, this.c);
    }
        // Lists all of the putative directions the Zombie can move
    let dirs = [{r:0, c:1}, {r:0, c:-1}, {r:1, c:0}, {r:-1, c:0}],
        zRow = this.r,
        zCol = this.c,
        pRow,
        pCol,
        chosenDirSmart,
        toMoveToSmart,
        target;
/* DAMINS FIX TO THE ZOMBIE MOVEMEB
if (this.game.player.isAlive && this.game.player2.isAlive) {
  if (activeP5.dist(zRow, zCol, this.game.player.r, this.game.player.c) < activeP5.dist(zRow, zCol, this.game.player2.r, this.game.player2.c)) {
    pRow = this.game.player.r,
    pCol = this.game.player.c;
  } else if (activeP5.dist(zRow, zCol, this.game.player.r, this.game.player.c) >= activeP5.dist(zRow, zCol, this.game.player2.r, this.game.player2.c)) {
    pRow = this.game.player2.r,
    pCol = this.game.player2.c;
  }
}
if (this.game.player.isAlive && !this.game.player2.isAlive) {
  pRow = this.game.player.r,
  pCol = this.game.player.c;
} else if (!this.game.player.isAlive && this.game.player2.isAlive) {
  pRow = this.game.player2.r,
  pCol = this.game.player2.c;
}
*/

    if (activeP5.dist(zRow, zCol, this.game.player.r, this.game.player.c) < activeP5.dist(zRow, zCol, this.game.player2.r, this.game.player2.c) && this.game.player.isAlive) {
      pRow = this.game.player.r,
      pCol = this.game.player.c;
    } else if (activeP5.dist(zRow, zCol, this.game.player.r, this.game.player.c) >= activeP5.dist(zRow, zCol, this.game.player2.r, this.game.player2.c) && this.game.player2.isAlive) {
      pRow = this.game.player2.r,
      pCol = this.game.player2.c;
    }
    if (!this.game.player.isAlive && this.game.player2.isAlive) {
      pRow = this.game.player2.r;
      pCol = this.game.player2.c;
    } else if (!this.game.player2.isAlive && this.game.player.isAlive) {
      pRow = this.game.player.r;
      pCol = this.game.player.c;
    }

    if (Math.abs(pCol - zCol) > Math.abs(pRow - zRow)) {
      if ((pCol - zCol) > 0) {
        //right
        chosenDirSmart = dirs[0]
      } else {
        //left
        chosenDirSmart = dirs[1]
      }
    } else {
      if ((pRow - zRow) > 0) {
        //down
        chosenDirSmart = dirs[2]
      } else {
        //up
        chosenDirSmart = dirs[3]
      }
    }
  /*  if (target.length === 1) {
      chosenDirSmart.r, chosenDirSmart.c
    }*/
    //chosenDirDumb = dirs[Math.floor(Math.random()*4)],
    //toMoveToDumb = {r: zRow + chosenDirDumb.r, c: zCol + chosenDirDumb.c};

    toMoveToSmart = {r: zRow + chosenDirSmart.r, c: zCol + chosenDirSmart.c};
    target = this.game.getKnotbjectsAt(toMoveToSmart.r, toMoveToSmart.c);

    if (activeP5.dist(zRow,zCol,this.game.player.r,this.game.player.c) <= 1 && this.game.player.isAlive) {
      this.game.player.getEaten();
      playSound(assets.sounds.bite);
      //randomized zombie growl while eating (50% chance)
      switch (Math.floor(Math.random()*2)) {
        case 1: playSound(assets.sounds.zGrowl); break;
      };

      return;
    }
    if (activeP5.dist(zRow,zCol,this.game.player2.r,this.game.player2.c) <= 1 && this.game.player2.isAlive) {
      this.game.player2.getEaten();
      playSound(assets.sounds.bite);
      //randomized zombie growl while eating (50% chance)
      switch (Math.floor(Math.random()*2)) {
        case 1: playSound(assets.sounds.zGrowl); break;
      };

      return;
    }

    if (target.length === 0) {
      this.moveTo(toMoveToSmart.r, toMoveToSmart.c);
    } else if (target[0].asset === "wall" ||
    target[0].asset === "wall1" ||
    target[0].asset === "wall2" ||
    target[0].asset === "wall3" ||
    target[0].asset === "wall4") {
      target[0].health -= this.game.playerDamage;

    } else if (target[0].asset === "trap") {
      this.asset = "bloodysmartzombie";
      playSound(assets.sounds.trapdeath)
      this.game.eraseAt(this, this.r, this.c);
      target[0].asset = "trappedsmartzombie";
      target[0].health -= 98;
    }
  }
}

// ---------------------------------------------------
// WALL CLASS
// Used to model the game's boundaries and impassable
// barriers... can also be used for builder's walls!
// ---------------------------------------------------

// TODO Change the Wall class definition to inherit from Knotbject
class Wall extends Knotbject {
  // [!] Below, permanent is an *optional* parameter, meaning
  // that it will have the value given (true) if the user does
  // not specify it, otherwise, it attains the value of an
  // entered argument; use this parameter to distinguish permanent
  // walls from those constructed by the builder
  constructor (r, c, game/*, permanent = true*/) {
    super(r, c, game)
    this.asset = "wall";
  //  this.permanent = permanent;
  }

  /*
   * Walls "act" by losing 1 health every tick IF
   * they are not permanent. This allows us to make
   * temporary ones via the builder. Kill the wall
   * if its health is <= 0
   */
  act () {
     if (this.health >= 100) {
      this.asset = "wall";
    }
    if (this.health < 100 && this.health >= 75) {
      this.asset = "wall1";
    }
    if (this.health < 75 && this.health >= 50) {
      this.asset = "wall2";
    }
    if (this.health < 50 && this.health >= 25) {
      this.asset = "wall3";
    }
    if (this.health < 25) {
      this.asset = "wall4";
    }
    if (this.health <= 0) {
      this.game.eraseAt(this, this.r, this.c);
      playSound(assets.sounds.wallbreak);
    }
  /*  if (this.health <= 0) {
      this.game.eraseAt(this, this.r, this.c);
    }  */
  }
}

class Trap extends Knotbject {
  constructor (r, c, game) {
    super (r, c, game)
    this.asset = "trap";
  }
  act () {
    if (this.asset !== "trap") {
      this.health--;
    }
    if (this.health <= 0) {
      this.game.eraseAt(this, this.r, this.c)
    }
  }
}

class HealthPotion extends Knotbject {
  constructor (r, c, game) {
    super (r, c, game)
    this.asset = "healthpotion";
  }
  act () {
    if (this.health <= 0) {
      this.game.eraseAt(this, this.r, this.c);
    }
  }
}

class Cure extends Knotbject {
  constructor (r, c, game) {
    super (r, c, game)
    this.asset = "cure";
  }
  act() {

  }
}


// ---------------------------------------------------
// GAME CLASS CONFIGURATION
// We'll use the following Game class to configure all
// of our setup and gameplay
// ---------------------------------------------------

class Game {
  /*
   * A Game instance will be passed a configuration, which
   * is a JS Object containing properties needed for
   * setup. These properties include:
   *   - maze: the user's input Maze, to be parsed into
   *           individual Knotbjects
   *   - char: the character class selected by the user
   *   - diff: the difficulty setting chosen by the user
   *
   * All property values in the config param are assumed
   * to be valid. Any invalid input will be handled by
   * our lobby configuration below
   */
  constructor (config) {
    let maze = config.maze,
        diffs = ["easy", "medium", "hard"],
        diffMultiplier,
        game = this;
    // We'll save each K'notbject in the Game's state;
    // Important: knotbjects is an array of arrays of arrays,
    // structured as: knotbjects[rows][cols][objects]
    this.knotbjects = [];
    this.player = null;
    this.player2 = null;
    this.difficulty = config.diff;
    this.character = config.char;
    this.character2;
    this.rows = maze.length;
    this.cols = maze[0].length;
    this.round = 1;
    this.nZoms = 0;
    this.cureProgress = 0;
    this.isPaused = false;
    this.score = 0; //new score keeping variable
    this.username ; //username variable which is referenced when the game
    this.endMsg ;
    this.highscoreForm = document.forms["highscore-form"];
    this.userInfo = document.forms["user-info"];

    // check character selection for player 1 and set
    // player 2 character to be the opposite
    switch (this.character) {
      case "builder": this.character2 = "trapper"; break;
      case "trapper": this.character2 = "builder"; break;
    }

    // Save the amount of damage a player takes from
    // getting eaten, the length of a tick, and the
    // amount of time needed to survive based on difficulty
    diffMultiplier      = diffs.indexOf(this.difficulty);
    this.playerDamage   = (diffMultiplier + 2) * 5;
    this.cooldown       = 0; //(diffMultiplier + 2) * 2;
    this.trapCooldown   = 0; //(diffMultiplier + 2) * 2;
    this.tickLength     = (3 - diffMultiplier) * 200 + 500;
    this.surviveTime    = (diffMultiplier + 1) * 5 + 10; //originally at *15 //then at *5
    this.timerMax       = this.surviveTime;
    this.diffMultiplier = diffMultiplier;
    //score is multiplied by 100 to make it a nice big number
    //score is a linear function with respect to the diffMultiplier
    //so that it is 1.25x higher score for medium Difficulty
    //and 1.5x higher for hard difficulty
    this.scoreMultiplier = 100 * (0.25 * diffMultiplier + 1);


    // Configure the newly created Player's movement
    bindPlayer1Keys();
    bindPlayer2Keys();
    bindPauseKeys();
    updateRound(this.round);
    updateScore(this.score);

    // test to see if two players are playing and remove health bar
    // and text if singleplayer mode has been selected
    if (config.players === "one") {
      healthLeftPlayer2.remove();
      p2HealthText.remove();
    }

    // Parse each cell's contents to create a new
    // Knotbject of the given type
    for (let r = 0; r < this.rows; r++) {
      let knotbjectRow = this.knotbjects[r] = [],
          mazeRow = maze[r];
      for (let c = 0; c < this.cols; c++) {
        let knotbjectCol = knotbjectRow[c] = [],
            mazeCell = mazeRow[c];

        switch (mazeCell) {
          case "P":
            // We'll track the player separately for
            // convenience, but they'll also be in the
            // knotbjects array

            // TODO Create a new Player instance and save it
            // within the game's player property
            // ???
            this.player = new Player(r, c, game);


            // TODO add that newly created player object to the
            // knotbjects array
            // [!] this.addAt
            this.addAt(this.player, r, c)

            break;
          case "T":
              // We'll track the player separately for
              // convenience, but they'll also be in the
              // knotbjects array

              // TODO Create a new Player instance and save it
              // within the game's player property
              // ???
              this.player2 = new Player2(r, c, game);
              if (config.players === "two") {
                this.addAt(this.player2, r, c);
              } else {
                this.player2.isAlive = false;
                removePlayer2Keys();
                this.killAll(Player2);
              }


              // TODO add that newly created player object to the
              // knotbjects array
              // [!] this.addAt

              break;
          case "Z":
            // TODO Create a new Zombie instance and push it into
            // the game's knotbjects array, and increments
            // [!] this.addAt
            // [!] this.nZoms
            // ???
            this.nZoms++;
            this.addAt(new Zombie(r, c, game), r, c)
            break;
          case "X":
            // TODO Create a new Wall instance and push it into
            // the game's knotbjects array
            // [!] this.addAt
            // ???
            this.wall = new Wall(r, c, game)
            this.addAt(this.wall, r, c)
            break;
          case "S":
          //  this.nSmartZoms++;
            this.nZoms++;
            this.addAt(new SmartZombie(r, c, game), r, c)
            break;
      //    case "H":
      //      this.addAt(new healthpotion(r, c, game), r, c)
      //      break;
        }
      }
    }

//    // Configure the newly created Player's movement
//    bindPlayer1Keys();
//    bindPlayer2Keys();
//    updateRound(this.round);

    // Start the game!
    this.ticking = setInterval(function () { game.doTick(); }, this.tickLength);

  }

  /*
   * Adds the given knotbject to the maze in the position specified;
   * useful for moving knotbjects from one location to another,
   * or for creating them for the first time
   */
  addAt (knotbject, row, col) {
    this.knotbjects[row][col].push(knotbject);
  }

  setPause () {
    message = "Game Paused";
    removePlayer1Keys();
    removePlayer2Keys();
    //this.ticking = 0;
    clearInterval(this.ticking);
  };

  removePause () {
    message = "";
    this.isPaused = false;
    bindPlayer1Keys();
    bindPlayer2Keys();
    this.ticking = setInterval(function() { activeGame.doTick(); }, this.tickLength);
  //  this.ticklength = (3 - this.diffMultiplier) * 200 + 500;
  };


  /*
   * Erases the given knotbject in the position specified;
   * useful for moving knotbjects from one location to another
   * when you know their origin.
   */
  eraseAt (knotbject, row, col) {
    let index = this.knotbjects[row][col].indexOf(knotbject);
    if (index !== -1) {
      this.knotbjects[row][col].splice(index, 1);
    }
    return index !== -1;
  }

  /*
   * Kills all objects of a particular ClassType, as specified by
   * the parameter. Useful for cleaning up zombies in between
   * rounds.
   */
  killAll (Type) {
    this.forEachKnotbject((k, r, c) => {
      if (k instanceof Type) {
        this.eraseAt(k, r, c);
      }
    });
  }

  /*
   * Returns the knotbjects at the requested row and col
   */
  getKnotbjectsAt (row, col) {
    return this.knotbjects[row][col];
  }

  /*
   * Helper to iterate over all Knotbjects currently stored
   * in the game; will call the given function specified
   * by the behavior parameter with each Knotbject
   */
  forEachKnotbject (behavior) {
    for (let row in this.knotbjects) {
      for (let col in this.knotbjects[row]) {
        for (let k of this.knotbjects[row][col]) {
          behavior(k, row, col);
        }
      }
    }
  }

  /*
   * The main control for zombies and game mechanics, the
   * game will periodically (depending on the difficulty)
   * instruct zombies to move, and check if the player has
   * survived / died yet
   */
  doTick () {
    if (!activeGame) { return; }
    let actors = new Set();
    this.forEachKnotbject((k) => actors.add(k));
    actors.forEach((k) => k.act());
    this.surviveTime--;
    //score increases every tick, but by a smaller-and-smaller amount until round 10
    //this means the player will get a higher score as long as he is surviving
    //but by round 10, he should be able to get the cure, so this value will go to zero
    this.score += ((-1/9) * this.round + (10/9)) * this.scoreMultiplier
    if (this.cureProgress >= 100) {
      this.win();
    } else if (this.cureProgress > 0) { // else if (this.round % 2 === 0 || this.round % 2 === 1)
      //originally (2/3) --ended in about 7 rounds min, then 4/9--ended in about 12 rounds min
      //we used to subject cureprogress from here, but maybe that is not fun
      //this.cureProgress -= (5/8) //*this.diffMultiplier
      //this.score -= (5/8) * this.scoreMultiplier // this.diffMultiplier * vv

      //originally (2/3) ||
      // this.cureProgress = Math.max(0, this.cureProgress - this.diffMultiplier * (2/3));
    }
    updateScore(this.score);
    updateCureProgress(this.cureProgress / 100);
    updateTimer(this.surviveTime / this.timerMax);
    if (this.surviveTime <= 0) {
      this.nextRound();
    }
  }

  /*
   * Called after a player survives a round; will kill all
   * remaining zombies and respawn them after a short delay,
   * thus beginning the next round
   */
  nextRound () {
    this.killAll(Zombie);
    this.killAll(SmartZombie);
    this.killAll(Trap);
    this.killAll(HealthPotion);
    this.killAll(Cure);
    this.playerDamage++;
    this.nZoms += 0.5 * this.diffMultiplier + 1;
    this.timerMax++;
    this.round++;
    this.surviveTime = this.timerMax;
    message = "K'not sleeps... for now...";
    updateRound(this.round);
  //};

/*
  setPause () {
    message = "Game Paused";
    removePlayer1Keys();
    removePlayer2Keys();
    this.ticklength = 0;
    if (!this.isPaused) {
      this.game.isPaused = false;
      bindPlayer1Keys();
      bindPlayer2Keys();
      this.ticklength = (3 - diffMultiplier) * 200 + 500;
    }
  };
  */

    // Dramatic delay before next round
    setTimeout(() => {
      message = "";
      // TODO: Respawn this.nZoms in random locations
      // around the map -- the shock factor that only
      // K'not! can deliver
      // [!] this.addAt

      let numZoms = Math.floor(this.nZoms);
      // if easy difficulty is NOT selected, add the
      // designated number of regular zombies as defined by numZoms
      // as well as one new smart zombie each round
      if (this.diffMultiplier !== 0) {
        while (numZoms > this.round /*&& numZoms > 0*/) {
          let zRow,
              zCol,
              possibleSpace = ["occupied"];
          while (possibleSpace.length !== 0) {
            zRow = Math.floor(Math.random()*this.rows);
            zCol = Math.floor(Math.random()*this.cols);
            possibleSpace = this.getKnotbjectsAt(zRow,zCol);
          }
          this.addAt(new Zombie(zRow,zCol,this), zRow, zCol);
          numZoms--;
        }
        while (numZoms <= this.round && numZoms > 0) {
          let zRow,
              zCol,
              possibleSpace = ["occupied"];
          while (possibleSpace.length !== 0) {
            zRow = Math.floor(Math.random()*this.rows);
            zCol = Math.floor(Math.random()*this.cols);
            possibleSpace = this.getKnotbjectsAt(zRow,zCol);
          }
          this.addAt(new SmartZombie(zRow, zCol, this), zRow, zCol);
          numZoms--;
        }
        // if the easy difficulty is selected, maintain
        // 2 smart zombies and add the designated number of
        // regular zombies as set by numZoms
      } else {
        for (let i = 0; i < 2; i++) {
          let zRow,
              zCol,
              possibleSpace = ["occupied"];
          while (possibleSpace.length !== 0) {
            zRow = Math.floor(Math.random()*this.rows);
            zCol = Math.floor(Math.random()*this.cols);
            possibleSpace = this.getKnotbjectsAt(zRow,zCol);
          }
          this.addAt(new SmartZombie(zRow, zCol, this), zRow, zCol);
        }
        while (numZoms > 2) {
          let zRow,
              zCol,
              possibleSpace = ["occupied"];
          while (possibleSpace.length !== 0) {
            zRow = Math.floor(Math.random()*this.rows);
            zCol = Math.floor(Math.random()*this.cols);
            possibleSpace = this.getKnotbjectsAt(zRow,zCol);
          }
          this.addAt(new Zombie(zRow,zCol,this), zRow, zCol);
          numZoms--;
        }
      }

      if (this.round % 2 === 1 || this.round % 2 === 0) {
        let hRow,
            hCol,
            possibleSpace = ["occupied"];
        while (possibleSpace.length !== 0) {
          //we need to find the correct syntax for a new zombie with addAt and the new Zombie function
          hRow = Math.floor(Math.random()*this.rows),
          hCol = Math.floor(Math.random()*this.cols);
          possibleSpace = this.getKnotbjectsAt(hRow,hCol);
        }
        this.addAt(new HealthPotion(hRow, hCol), hRow, hCol);
        while (possibleSpace.length !== 0) {
          //we need to find the correct syntax for a new zombie with addAt and the new Zombie function
          hRow = Math.floor(Math.random()*this.rows),
          hCol = Math.floor(Math.random()*this.cols);
          possibleSpace = this.getKnotbjectsAt(hRow,hCol);
        }
        this.cure = new Cure(hRow, hCol);
        this.addAt(this.cure, hRow, hCol);
      }
      // ???
    }, 4000);
  }

  /*
   * Terminates the current game with a score summary
   */


   end () {
     removePauseKeys();
     removePlayer1Keys();
     removePlayer2Keys();
     clearInterval(this.ticking);
     //while (username || username.length < 10) {
     alert(`
       ${getCookie("username")} survived ${this.round} rounds. \n
       Score: ${Math.floor(this.score)}
     `);
     let form = document.forms["highscore-form"]; //shoudl return the first form found in the document
     form["username"].value = getCookie("username") ;
     form["final-score"].value = Math.floor(this.score) ;
     form.submit();

     endGame();
   }

   win () {
     removePauseKeys();
     removePlayer1Keys();
     removePlayer2Keys();
     clearInterval(this.ticking);

     alert(`
       ${getCookie("username")} found the cure after ${this.round} rounds. \n
       Score: ${Math.floor(this.score)}
       `);
       let form = document.forms["highscore-form"]; //should return the first form found in the document
       form["username"].value = getCookie("username") ;
       form["final-score"].value = Math.floor(this.score) ;
       form.submit();

       endGame();
   }

}


// ---------------------------------------------------
// HELPER FUNCTIONS
// Any functions that make your life easier here!
// ---------------------------------------------------

/*
 * isValidMaze checks to make sure a given maze (as
 * described in the spec) meets a variety of validity
 * criteria, and returns true if all are met:
 *   1. All rows have same number of cols
 *   2. First and last rows are all "X"
 *   3. First and last cols of every row are "X"
 *   4. Exactly 1 player starting location
 *   5. At least 1 zombie starting location
 *   6. No invalid cell contents
 */
function isValidMaze (maze) {
  // Helper function: returns true if and only if the
  // given row contains only the "X" character
  let isAllXRow = function (row) {
        if (!row) { return false; }
        for (let r of row) {
          if (r !== "X") { return false; }
        }
        return true;
      },

      // Helper function: returns true if and only if the
      // given row's first and last cell are "X"
      hasXBorder = function (row) {
        return row[0] === "X" && row[row.length - 1] === "X";
      },

      playerCount = 0,
      zombieCount = 0,
      columnCount = maze[0] && maze[0].length;

  // [Criteria 2 Check]
  if (!(isAllXRow(maze[0]) && isAllXRow(maze[maze.length - 1]))) {
    return false;
  }

  for (let currRow of maze) {
    // [Criteria 1 Check]
    if (currRow.length !== columnCount) { return false; }

    // [Criteria 3 Check]
    if (!hasXBorder(currRow)) { return false; }

    for (let cell of currRow) {
      switch (cell) {
        case "P":
          playerCount++;
          // [Criteria 4 Check]
          if (playerCount > 2) { return false; }
          break;
        case "T":
          playerCount++;
          // [Criteria 4 Check]
          if (playerCount > 2) { return false; }
          break;
        case "Z":
          zombieCount++;
          break;
        case "S":
          zombieCount++;
          break;
        case "X":
        case ".":
          break;
        // [Criteria 6 Check]
        default:
          return false;
      }
    }
  }

  // [Criteria 4, 5 Check]
  return zombieCount >= 1 && playerCount <= 2;
}

/*

<!DOCTYPE html>
<html>

  <head>
    <title>K'norigins!</title>
    <link href="./css/kstyles.css" rel="stylesheet" type="text/css">
    <script src="./js/p5.js" defer></script>
    <script src="./js/knorigins.js" defer></script>
    <meta charset="utf-8"/>
  </head>

  <body>
    <div id="wrapper">

      <!-- LOADING -->
      <div id="loading" style="display:none;">
        <h1>Loading...</h1>
        <img src="https://media.giphy.com/media/137uPqnSre7ORq/giphy.gif">
      </div>

      <!-- LOBBY -->
      <div id="lobby-container">

        <div id="logo" class="fant-font">
          <img src="http://knot.cs.lmu.edu/assets/site-accents/knotLogo.png">
          <p>[ ORIGINS ]</p>
        </div>
        <br/>

        <div id="lobby-options">
          <h2>Where the Horror Began!</h2>
          <hr/>
          <br/>
          <p>K'not! Origins (Project Name: K'norigins) takes us back to the beginning of the outbreak... before our heroes met, before the giant boulder became sentient, and before a 3rd dimension was
            added to reality. In K'norigins, you play as one of our isolated heroes scrambling to survive the onslought of the zombie horde... in 2D!</p>
          <br/>

          <h3>Prepare Your Adventure</h3>
          <hr/>
          <br/>
          <p>Configure your game settings below. When you are ready, click the K'norigins! button at the bottom.</p>
          <br/>

          <p><b>Choose a Character:</b> your character will have a special ability to fend off the hordes.</p>
          <div id="character-grid">
            <input type='radio' name='char-select' value='builder' id="char-builder" checked="checked"/><label for="char-builder"></label>
            <input type='radio' name='char-select' value='trapper' id="char-trapper" checked="checked"/><label for="char-trapper"></label>
          </div>
          <br/>

          <p><b>Choose a Difficulty:</b> higher difficulty means more zombies that bite harder and faster!</p>
          <div id="character-grid" class='fant-font'>
            <input type='radio' name='diff-select' value='hard' id="diff-trivial"/><label for="diff-trivial">I</label>
            <input type='radio' name='diff-select' value='medium' id="diff-tolerable" checked="checked"/><label for="diff-tolerable">II</label>
            <input type='radio' name='diff-select' value='hard' id="diff-terrible"/><label for="diff-terrible">III</label>
          </div>
          <br/>
          <hr/>
          <br/>

          <div id="config-launch-holder">
            <button id="config-launch" class='fant-font'>K'norigins Awaits...</button>
          </div>
        </div>

      <!-- End lobby -->
      </div>


      <!-- GAME -->
      <div id="game-container" class='fant-font' style="display: none;">

        <div id="health-cont">
          <p>HEALTH</p>
          <progress id="game-health" max="100" value="100"></progress>
        </div>
        <div id="round-cont">
          <h2>Round</h2>
          <h2 id="game-round">0</h2>
        </div>
        <div id="survive-cont">
          <p>SURVIVE</p>
          <progress id="game-timer" max="100" value="100"></progress>
        </div>

        <div id="game-maze"></div>

      <!-- End game -->
      </div>

    <!-- End Wrapper -->
    </div>
  </body>
</html>
*/

class Game {
  constructor(players, turns, scoreLimit, cpStart) {
    this.players = players;
    this.turns = turns;
    this.scoreLimit = scoreLimit;
    this.cpMax = cpStart;
  }
}

class Player {
  constructor(number, commandPoints) {
    this.number = number;
    this.commandPoints = commandPoints;
    this.score = 0;
  }
}

class UI {
  static getStartingInfo (numPlayers, numCP, numScore, numTurn) {  
    if (numPlayers < 1 || numCP < 0 || numScore < 1 || numTurn < 3) {
      return 'Invalid starting values';
    }
    
    let players = [];

    for(let i = 1; i <= numPlayers; i++) {
      players.push(new Player(i, numCP));
    }

    this.game = new Game(players, numTurn, numScore, numCP);
    return 'Game start.';
  }

  static clearStartForm() {
    let children = this.startMenuEle.children;

    for(let i = 0; i < children.length; i++) {
      let inputEle = children[i]['lastElementChild'];

      if(inputEle.type !== 'submit') {
        inputEle.value = '';
      }
    }
  }

  constructor() {
    this.startMenuEle = document.querySelector('.start-menu');
    this.playerNumEle = this.startMenuEle.querySelector('#starting-players');
    this.cpNumEle = this.startMenuEle.querySelector('#starting-cp');
    this.scoreLimitEle = this.startMenuEle.querySelector('#score-limit');
    this.turnLimitEle = this.startMenuEle.querySelector('#turn-limit');

    this.game;
  
    this.startMenuEle.addEventListener("submit", e => {
      e.preventDefault();

      alert(UI.getStartingInfo(this.playerNumEle.value, this.cpNumEle.value,
        this.scoreLimitEle.value, this.turnLimitEle.value));

      UI.clearStartForm();
    });
  }
}

let theRealUI = new UI();



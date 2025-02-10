var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,

  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};

var game = new Phaser.Game(config);

var passarinho;

function preload() {
  this.load.image("bg", "assets/bg_space.png");
  this.load.spritesheet("bird", "assets/bird-purple.png", {
    frameWidth: 75,
    frameHeight: 75,
  });
}

function create() {
  this.add.image(400, 300, "bg").setScale(1.2);
  passarinho = this.add.sprite(100, 300, "bird").setScale(1.3);
  passarinho.y = 100;

  this.anims.create({
    key: "fly",
    frames: this.anims.generateFrameNumbers("bird", { start: 0, end: 7 }),
    frameRate: 10,
    repeat: -1,
  });

  passarinho.anims.play("fly", true);
}

function update() {
  //MOVIMENTAÇÃO HORIZONTAL

  //Verifica se o pássaro está na posição inicial para ir
  if (passarinho.x === 100) {
    passarinho.setFlip(false, false);
    passarinho.ida = true;
  }

  //Movimenta o pássaro para a direita caso ele siga a verificação acima
  while (passarinho.x < 700 && passarinho.ida === true) {
    passarinho.x += 5;
    break;
  }

  //Verifica se o pássaro está na posição inicial para voltar
  if (passarinho.x === 700) {
    passarinho.setFlip(true, false);
    passarinho.ida = false;
  }

  //Movimenta o pássaro para a esquerda caso ele siga a verificação acima
  while (passarinho.x > 100 && passarinho.ida === false) {
    passarinho.x -= 5;
    break;
  }

  //MOVIMENTAÇÃO VERTICAL

  //Verifica se o pássaro está na posição inicial para descer
  if (passarinho.y === 100) {
    passarinho.sobe = true;
  }

  //Movimenta o pássaro para baixo caso ele siga a verificação acima
  while (passarinho.y < 500 && passarinho.sobe === true) {
    passarinho.y += 5;
    break;
  }

  //Verifica se o pássaro está na posição inicial para subir
  if (passarinho.y === 500) {
    passarinho.sobe = false;
  }

  //Movimenta o pássaro para cima caso ele siga a verificação acima
  while (passarinho.y > 100 && passarinho.sobe === false) {
    passarinho.y -= 5;
    break;
  }
}

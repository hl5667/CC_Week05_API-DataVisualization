class APIarc {
  constructor(n, name) {

    this.price = 0;
    this.marketcap = 0;
    this.n = n
    this.name = name
  }

  async APIrequest() {

      let response = await fetch("https://api.coincap.io/v2/assets");

      let data = await response.json();
    
      this.price = data.data[this.n].priceUsd;
      console.log(this.price);

      this.marketcap = data.data[this.n].marketCapUsd;
      console.log(this.marketcap)
  }

  drawArc(spacing) {

    let price_d = map(this.price, 0, 0.6, 0, 360);
    let marketcap_r = map(this.marketcap, 0, 30000000000, windowWidth/2, windowHeight/2);
    noStroke();
    fill(0, 0, 0, 80)
    arc(windowWidth*5/7, windowHeight / 2, marketcap_r, marketcap_r, 0,radians(price_d), PIE);
    
    let spaceprice = spacing * 40 + 60;
    let spacemarket = spacing * 40 + 60;

      fill(0);
      textAlign(LEFT);
      textSize(18);
      text(this.name + "   " + "Price Usd:   " + this.price, windowWidth/20, spaceprice);
      text(this.name + "   " + "MarketCap Usd:   " + this.marketcap, windowWidth/20, spacemarket-20);
    
      
  }
}

let USDC;
let XRP;
let SOL;
let ADA;
let DOGE;
let TRX;

function setup() {
  createCanvas(windowWidth, windowHeight);
  USDC = new APIarc(5, "USDC");
  USDC.APIrequest();
  XRP = new APIarc(6, "XRP");
  XRP.APIrequest();
  SOL = new APIarc(7, "SOL");
  SOL.APIrequest();
  ADA = new APIarc(8, "ADA");
  ADA.APIrequest();
  DOGE = new APIarc(9, "DOGE");
  DOGE.APIrequest();
  TRX = new APIarc(10, "TRX" );
  TRX.APIrequest();
}

function draw() {
  background(232, 230, 225);
  USDC.drawArc(6);
  XRP.drawArc(8);
  SOL.drawArc(10);
  ADA.drawArc(12);
  DOGE.drawArc(14);
  TRX.drawArc(16);

//Framing
  push();

    stroke(0);
    strokeWeight(1.5);
    line(0, 50, windowWidth, 50);
    line(windowWidth*3/7, 50, windowWidth*3/7,windowHeight)

  pop();
    textSize(30)
    textAlign(LEFT)
    text("Real-time Crypto Currency Market Price", 80, 40)

    
}
  
function mouseClicked() {
  USDC.APIrequest();
  XRP.APIrequest();
  SOL.APIrequest();
  ADA.APIrequest();
  DOGE.APIrequest();
  TRX.APIrequest();
}

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    document.getElementById("start-button").onclick = function() {
      startGame();
    };
  }

  create: function () {
        // Change the background color of the game to match fullstackfest
        game.add.tileSprite(0, 0, 800, 600, 'background');
        this.labelBrand = game.add.text(230, 150, " ------------\n| PUSHY BIRD |\n ------------", { font: "60px VT323", fill: "#ffffff" });
        this.labelStart = game.add.text(260, 400, "Press button to start", { font: "30px VT323", fill: "#ffffff" });
        this.labelFooter = game.add.text(320, 550, "@rgalindo33 2016", { font: "20px VT323", fill: "#ffffff" });

};
}

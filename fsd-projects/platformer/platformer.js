$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(500, 650, canvas.width + 50, 10);
    createPlatform(1100, 150, 10, 400);
    createPlatform(1100, 500, 10, 10);
    createPlatform(1100, 550, 100, 10);
    createPlatform(1300, 500, 100, 10);
    createPlatform(1100, 400, 100, 10);
    createPlatform(1300, 300, 100, 10);
    createPlatform(1100, 200, 100, 10);
    createPlatform(200, 150, 900, 10);
    createPlatform(100, 400, 100, 10);
    createPlatform(100, 100, 10, 300);
    createPlatform(200, 150, 10, 260);
    createPlatform(700, 520, 100, 10);
    createPlatform(900, 400, 100, 10);
    createPlatform(600, 300, 200, 10);




    // TODO 3 - Create Collectables
    createCollectable("pngdiamond", 680, 250);
    createCollectable("pngdiamond", 680, 100);
    createCollectable("pngdiamond", 135, 340);
    createCollectable("pngdiamond", 1330, 250);



    
    // TODO 4 - Create Cannons
    createCannon("bottom", 1290, 1500);
    createCannon("left", 200, 2000);
    createCannon("right", 200, 3000);


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});

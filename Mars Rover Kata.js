// Rover Object Goes Here
// ======================

let rover = {
    directon: 'N',
    x: 0,
    y: 0,
    path: [{x: 0, y:0}]
  }
  let grid = [
      ['0', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '']];
  
  
  // ======================
  function turnLeft(rover){
    console.log("turnLeft was called!");
    switch (rover.direction) {
        case 'N': rover.direction = 'W';
        break;
        case 'W': rover.direction = 'S';
        break;
        case 'S': rover.direction = 'E';
        break;
        case 'E': rover.direction = 'N';
        break;
        default: break
   }
    console.log('Rover Direction: ${rover.direction}');
  }
  
  function turnRight(rover){
    console.log("turnRight was called!");
    switch(rover.direction){
       case 'N': rover.direction = 'E';
       break;
       case 'W': rover.direction = 'N';
       break;
       case 'S': rover.direction = 'W';
       break;
       case 'E': rover.direction = 'S';
       break;
       default: break
      }
        console.log(`Rover Direction: ${rover.direction}`)
  }
  
  function moveForward(rover){
    console.log("moveForward was called")
    switch(rover.direction){ 
        case 'N':moveVertical(rover,'Up');
        break;
        case'W': moveHorizontal(rover, 'Left');
        break;
        case 'S': moveVertical(rover, 'Down');
        break;
        case 'E': moveHorizontal(rover, 'Right');
        break;
        default: break
    }
  }
  
  function moveBackward(rover){
    console.log('moveBackward was called')
    switch (rover.direction){
       case 'N': moveVertical(rover, 'Down');
       break;
       case 'W': moveHorizontal(rover, 'Right');
       break;
       case 'S': moveVertical(rover, 'Up');
       break;
       case 'E': moveHorizontal(rover, 'Left');
       break;
       default: break
    }
  }
  
  function moveHorizontal (rover, command){
    if (rover.x >= 0 && rover.x < 9){
      if (command ==='Left'){
        rover.x--
        if(rover.x < 0) {
          rover.x = 0
          console.log("You can't run outside of the grid")
         } 
      } else if (command === 'Right'){
          rover.x++
        }
        console.log('Mars Rover has position: x= ${rover.x},y= ${rover.y}')
        
    let newPosition = {x: rover.x, y: rover.y}
    rover.path.push(newPosition)
    printPathGrid(rover)
      } else {
        console.log("You can't run outside of the grid")
      }
    }
  
  function printPathGrid(rover){
    if (rover.path.length > 1){
      let currentPath = rover.path[rover.path.length -1]
      let lastPath = rover.path[rover.path.length -2]
      if (currentPath.y >= 0 && currentPath.y <= 9){
        if (currentPath.x >= 0 && currentPath.x <= 9){
          grid[lastPath.y][lastPath.x] = ' '
          grid[currentPath.y][currentPath.x] = '0'
          console.log(currentPath)
          console.log(lastPath)
        }
      }
    }
    console.log(grid.join('\n')+'\n\n')
  }
  
  function command(rover, orders){
    for (let i = 0; i < order.length; i++){
      let order = orders[i]
      if(orders[i] === 'l'|| orders[i] === 'r'|| orders[i] === 'f' || orders[i] === 'b'){
        switch (order){
          case 'l': turnLeft(rover);
          break;
           case 'r': turnRight(rover);
          break;
           case 'f': turnForward(rover);
          break;
           case 'b': turnBackward(rover);
          break;
        }
      } else {
        console.log("You inserted an invalid command: ${
          order = orders[i]}
          Valid command list:
          l: to turn Left
          r: to turn Right
          f: to move Forward
          b: to move Backward")
        } 
      }
  console.log('Complete Path: ')
  console.log(rover.path)
    }
   command(rover, 'fbrllf') // insert commands here ''
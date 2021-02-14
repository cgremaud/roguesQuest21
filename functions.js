//I should probably make this a folder and give each function its own module. 

function initialPrompt(){

}
//exitRoom takes the currentRoom object, the user's input of "exit" (i.e. "NORTH", "SOUTH", etc.), and the userInventory array. Then, if the inventory includes the itemToExit && the exitsFrom array includes "NORTH" or "South" or w/e, it then returns the matching roomId from the exitsTo array. 
function exitRoom(currentRoom, userExit, userInventory){
  if (currentRoom.exitsFrom.includes(userExit) && userInventory.includes(currentRoom.itemToExit)){
    return currentRoom.exitsTo(exitsFrom.indexOf(userExit))
  } else {
    return "You cannot exit that way."
  }
}

function getItem(){

}

function investigateObject(obj, currentRoom){

}

function mainMenu(){

}

function talkNPC(){

}

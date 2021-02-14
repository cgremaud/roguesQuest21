//storing exitsFrom and exitsTo make it more difficult to have 2 conditions to meet for exiting. 

class Room {
  constructor(roomId, exitsFrom, exitsTo, itemToExit, introText, lookText, mainText, investigateObjects, items, itemDescriptions enemies){
    this.roomId = roomId;
    this.exitsFrom = exitsFrom;
    this.exitsTo = exitsTo;
    this.itemToExit = itemToExit;
    this.introText = introText;
    this.lookText = lookText;
    this.mainText = mainText;
    this.investigateObjects = investigateObjects;
    this.items = items,
    this.itemDescriptions = itemDescriptions;
    this.enemies = enemies
    this.enteredOnce = false
  }
}

module.exports = Room
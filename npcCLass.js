class npc {
  constructor (name, hp, inventory, dialogueTree, attackable = false){
    this.name = name;
    this.hp = hp;
    this.inventory = inventory;
    this.dialogueTree = dialogueTree;
    this.attackable = attackable
  }
}
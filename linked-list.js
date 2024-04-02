class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    // Your code here
    this.head = null;
    this.length = 0;
    this.tail = undefined;

  }

  addToHead(val) {
    // Your code here
    const newNode = new LinkedListNode(val);

    newNode.next = this.head;
    this.length++
    this.head = newNode;
    //if (!this.tail) this.tail = this.head;
  }

  addToTail(val) {
    // Your code here
    const newNode = new LinkedListNode(val);

    if(this.head === null){
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

   this.length++

  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = LinkedList;

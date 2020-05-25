class LinkList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };

    // the tail is a reference to head, so when tail change, the head will update
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value: value,
      next: null,
    };

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    this.printList();
  }

  prepend(value) {
    const newNode = {
      value: value,
      next: null,
    };

    newNode.next = this.head;
    this.head = newNode;
    this.length--;

    this.printList();
  }

  insert(index, value) {
    const newNode = {
      value: value,
      next: null,
    };

    if (index >= this.length) {
      this.append(value);
      return this.printList();
    }

    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }

    const prevNode = this.traverseToIndex(index - 1);
    const nextNode = prevNode.next;

    prevNode.next = newNode;
    newNode.next = nextNode;
    this.length++;

    this.printList();
  }

  remove(index) {
    const prevNode = this.traverseToIndex(index - 1);
    const unwantedNode = prevNode.next;

    prevNode.next = unwantedNode.next;
    this.length--;

    this.printList()
  }

  traverseToIndex(index) {
    let currentNode = this.head;
    let counter = 0;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  printList() {
    const list = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      list.push(currentNode.value);
      currentNode = currentNode.next;
    }

    console.log(list);
  }
}

const myLinkList = new LinkList(10);
myLinkList.append(19);
myLinkList.append(30);
myLinkList.append(5);
myLinkList.append(10);
myLinkList.prepend(37);
myLinkList.insert(1, 55);
myLinkList.remove(2)


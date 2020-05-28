import LinkList from './link-list-implementation'

class DoubleLinkList extends LinkList {
    constructor(value) {
        this.head = {
          value: value,
          next: null,
          prev: null,
        };
    
        // the tail is a reference to head, so when tail change, the head will update
        this.tail = this.head;
        this.length = 1;
      }
    
      append(value) {
        const newNode = {
          value: value,
          next: null,
          prev: null,
        };
    
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    
        this.printList();
      }
    
      prepend(value) {
        const newNode = {
          value: value,
          next: null,
          prev: null,
        };
    
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length--;
    
        this.printList();
      }
    
      insert(index, value) {
        const newNode = {
          value: value,
          next: null,
          prev: null,
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
        newNode.prev = prevNode;
        newNode.next = nextNode;
        nextNode.prev = newNode;
        this.length++;
    
        this.printList();
      }
    
      remove(index) {
        const prevNode = this.traverseToIndex(index - 1);
        const unwantedNode = prevNode.next;
    
        prevNode.next = unwantedNode.next;
        unwantedNode.next.prev = prevNode
        this.length--;
    
        this.printList();
      }
}
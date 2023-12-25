class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // function to add data to linked list
    add(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    //function to add data to tail
    addToTail(data) {
        let newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    }

    // function to insert data to linked list at a particular index
    addAtPosition(data, position) {
        let newNode = new Node(data);
        if (position === 1) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }
        let current = this.head;
        let i = 1;
        while (i < position - 1 && current) {
            current = current.next;
            i++;
        }
        if (current) {
            newNode.next = current.next;
            current.next = newNode;
        }
    }

    // this function is used to iterate over the entire linkedlist and print it
    printAll() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}
const list = new LinkedList();

// add elements to the linkedlist
list.add("node1");
list.add("node2");
list.add("node3");
list.add("node4");
// console.log("Initial List:");
// list.printAll();
// console.log("List after adding nodex at position 2");
list.addAtPosition("nodex", 2);
// list.printAll();
// console.log("List after adding nodey to tail");
list.addToTail("nodey");
list.printAll();
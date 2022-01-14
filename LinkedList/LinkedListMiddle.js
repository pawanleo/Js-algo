class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    add(data) {
        let node = new Node(data);

        if (this.head == null)
            this.head = node;
        else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
    }

    findMiddle() {
        let pointer = this.head;
        let fastPointer = this.head;

        while (pointer.next != null && fastPointer.next && fastPointer.next.next != null) {
            pointer = pointer.next;
            fastPointer = fastPointer.next.next
        }

        return pointer.data;
    }
}

let myLinkedList = new LinkedList();

myLinkedList.add(10);
myLinkedList.add(20);
myLinkedList.add(30);
myLinkedList.add(40);
myLinkedList.add(50);
myLinkedList.add(60);
myLinkedList.add(70);
let middle = myLinkedList.findMiddle();
console.log(middle);
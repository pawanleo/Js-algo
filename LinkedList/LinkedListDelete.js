var head;

class Node
{
    constructor(val)
    {
        this.data = val;
        this.next = null;
    }
}

function push(new_data)
{
     
    var new_node = new Node(new_data);

    new_node.next = head;
 
    head = new_node;
}

function deleteNode(position)
{

    if (head == null)
        return;

    var temp = head;

    if (position == 0)
    {
         
        // Change head
        head = temp.next;
        return;
    }

    for(i = 0; temp != null && i < position - 1; i++)
        temp = temp.next;

    if (temp == null || temp.next == null)
    return;

    var next = temp.next.next;

    temp.next = next;
}

function printList()
{
    var tnode = head;
    while (tnode != null)
    {
        console.log(tnode.data + " ");
        tnode = tnode.next;
    }
}

push(7);
push(1);
push(3);
push(2);
push(8);
 
console.log("Created Linked list is:");
printList();
 
deleteNode(4);
 
console.log("Linked List after " +
               "Deletion at position 4:");
printList();
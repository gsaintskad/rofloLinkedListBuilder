// Define the Node class for individual nodes in the linked list
class Node<T> {
  value: T;
  next: Node<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

// Define the LinkedList class for handling nodes
class LinkedList<T> {
  private head: Node<T> | null = null;
  private size: number = 0;

  // Method to push a new node to the end of the list
  push(value: T): void {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current: Node<T> | null = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  // Method to insert a new node at a specified index
  insertAt(index: number, value: T): boolean {
    if (index < 0 || index > this.size) return false;

    const newNode = new Node(value);

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let current: Node<T> | null = this.head;
      let previous: Node<T> | null = null;
      let i = 0;

      while (i < index && current) {
        previous = current;
        current = current.next;
        i++;
      }
      if (previous) {
        newNode.next = current;
        previous.next = newNode;
      }
    }

    this.size++;
    return true;
  }

  // Method to search for a value and return its index (or -1 if not found)
  search(value: T): number {
    let current: Node<T> | null = this.head;
    let index = 0;

    while (current) {
      if (current.value === value) return index;
      current = current.next;
      index++;
    }
    return -1;
  }

  // Method to delete a node at a specified index
  deleteAt(index: number): boolean {
    if (index < 0 || index >= this.size || !this.head) return false;

    if (index === 0) {
      this.head = this.head.next;
    } else {
      let current: Node<T> | null = this.head;
      let previous: Node<T> | null = null;
      let i = 0;

      while (i < index && current) {
        previous = current;
        current = current.next;
        i++;
      }
      if (previous && current) {
        previous.next = current.next;
      }
    }

    this.size--;
    return true;
  }

  // Method to get the value of the node at a specified index
  getNodeValue(index: number): T | null {
    if (index < 0 || index >= this.size) return null;

    let current: Node<T> | null = this.head;
    let i = 0;

    while (current && i < index) {
      current = current.next;
      i++;
    }

    return current ? current.value : null;
  }

  // Helper method to get all node values (for display or testing)
  toArray(): T[] {
    const values: T[] = [];
    let current: Node<T> | null = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }
}

export default LinkedList;
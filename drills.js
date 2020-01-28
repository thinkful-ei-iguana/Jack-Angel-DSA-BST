class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }
  insert(key, value) {
    if (this.key === null) {
      this.key = key;
      this.value = value;
    } else if (key < this.key) {
      if(this.left === null) {
        this.left = new BinarySearchTree(key, value, this)
      } else {
        this.left.insert(key, value)
      }
    } else {
      if (this.right === null) {
        this.right = new BinarySearchTree(key, value, this)
      } else {
        this.right.insert(key, value)
      }
    }
  }
  remove (key) {
    if(this.key === key) {
      if(this.left && this.right) {
        const successor = this.right._findMin();
        this.key = successor.key;
        this.value = successor.value;
        successor.remove(successor.key);
      } else if (this.left) {
        this._replaceWith(this.left) 
      } else if (this.right) {
        this._replaceWith(this.right)
      } else {
        this._replaceWith(null)
      }
    } else {
      throw new Error ('Key Error')
    }
  }
  find (key) {
    if (this.key === key) {
      return this.value;
    } else if(key < this.key && this.left) {
      return this.left.find(key)
    } else {
      throw new Error('No key found')
    }
  }
}

function main () {
  let BST = new BinarySearchTree();
  // BST.insert(3,3)
  // BST.insert(1,1)
  // BST.insert(4,4)
  // BST.insert(6,6)
  // BST.insert(9,9)
  // BST.insert(2,2)
  // BST.insert(5,5)
  // BST.insert(7,7)

  function tree(t){
    if(!t){
        return ' ';
    }
    return tree(t.left) + t.value + tree(t.right)
}

  BST.insert('E', 'E')
  BST.insert('A', 'A')
  BST.insert('S', 'S')
  BST.insert('Y','Y')
  BST.insert('Q','Q')
  BST.insert('U','U')
  BST.insert('T','T')
  BST.insert('I','I')
  BST.insert('O','O')
  BST.insert('N','N') 
  //console.log(BST.right.left);
  //console.log(BST.right.right);
  console.log(tree(BST));
  console.log(findHeight(BST));
}

main()

function findHeight(tree){
  if(!tree){
    return 0;
  }

  const heightLeft = 1 + findHeight(tree.left);
  const heightRight = 1 + findHeight(tree.right);

  if(heightLeft > heightRight){
    return heightLeft;
  }
  return heightRight;
}


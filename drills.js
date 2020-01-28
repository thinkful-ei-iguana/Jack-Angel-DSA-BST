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
      if (this.left === null) {
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
  remove(key) {
    if (this.key === key) {
      if (this.left && this.right) {
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
      throw new Error('Key Error')
    }
  }
  find(key) {
    if (this.key === key) {
      return this.value;
    } else if (key < this.key && this.left) {
      return this.left.find(key)
    } else {
      throw new Error('No key found')
    }
  }
}

function main() {
  // let BST = new BinarySearchTree();
  // BST.insert(3, 3)
  // BST.insert(1, 1)
  // BST.insert(4, 4)
  // BST.insert(6, 6)
  // BST.insert(9, 9)
  // BST.insert(2, 2)
  // BST.insert(5, 5)
  // BST.insert(7, 7)



  /*BST.insert('E', 'E')
  BST.insert('A', 'A')
  BST.insert('S', 'S')
  BST.insert('Y', 'Y')
  BST.insert('Q', 'Q')
  BST.insert('U', 'U')
  BST.insert('T', 'T')
  BST.insert('I', 'I')
  BST.insert('O', 'O')
  BST.insert('N', 'N')*/
 //console.log(BST);
  //console.log('3rd big is ', find3rdBiggest(BST));
  //console.log('third big is ', findThirdBiggest(BST));
  //console.log(tree(BST));
  //console.log(findHeight(BST));
}

main()

//drill 4
//this function returns the sum of the values in the binary tree
function tree(t) {
  if (!t) {
    return '';
  }
  return tree(t.left) + t.value + tree(t.right)
}

//drill 5
function findHeight(tree) {
  if (!tree) {
    return 0;
  }

  const heightLeft = 1 + findHeight(tree.left);
  const heightRight = 1 + findHeight(tree.right);

  if (heightLeft > heightRight) {
    return heightLeft;
  }
  return heightRight;
}

//drill 6
function isItBsTree(tree) {
  if(!tree){
    return false;
  }
  if(tree.right) {
    if(tree.right.key > tree.key) {
      isItBsTree(tree.right)
    } else {
      return false;
    }
  }
  return true;
}



  //drill 7
function find3rdBiggest(input){
  const res = tree(input).split('');
  return res[res.length -3];
}

//drill 8

let BST = new BinarySearchTree();
  BST.insert(3, 3)
  BST.insert(1, 1)
  BST.insert(4, 4)
  BST.insert(6, 6)
  BST.insert(9, 9)
  BST.insert(2, 2)
  BST.insert(5, 5)
  BST.insert(7, 7)
  
function shortest(tree) {
  if(!tree) {
    return 0;
  } else {
    return Math.min(shortest(tree.right), shortest(tree.left)) + 1
  }
}
function longest(tree) {
  if(!tree) {
    return 0;
  } else {
    return Math.max(longest(tree.right), longest(tree.left)) + 1
  }
}

function isBalanced(tree) {
  let short = shortest(tree)
  let long = longest(tree)

  if (long- short > 1) {
    return false;
  } else {
    return true;
  }
}
//console.log(isBalanced(BST))


function arrToBSTComp(arr1, arr2){
  if(arr1.length !== arr2.length || arr1[0] !== arr2[0]){
    return false;
  }
  if(arr1.length === 0){
    return true;
  }
  if(arr1.length === 1){
    if(arr1[0] === arr2[0]){
      return true;
    }
    return false;
  }
  
  let arr11 = [];
  let arr12 = [];
  let arr21  = [];
  let arr22  = [];
  for(let i = 1; i < arr1.length; i++){
    if(arr1[i] > arr1[0]){
      arr11 = [...arr11, arr1[i]];
    } else {
      arr12 = [...arr12, arr1[i]];
    }
    if(arr2[i] > arr2[0]){
      arr21 = [...arr21, arr2[i]];
    } else {
      arr22 = [...arr22, arr2[i]];
    }
  }
  return (arrToBSTComp(arr11, arr21) && arrToBSTComp(arr12, arr22));
}

console.log(arrToBSTComp([3, 5, 4, 6, 1, 0, 2], [3, 1, 5, 2, 4, 6, 0]));
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    if(!root){
        return []
    }

    const stack = []

    const result = []

    let previousNode = null

    stack.push(root)

    while(stack.length){
        const currentNode = stack[stack.length - 1];

        // console.log('currentNode ', currentNode)
        // console.log('stack', stack)
        // console.log('previousNode', previousNode)


        // console.log('currentNode.left', currentNode.left)
        // console.log('currentNode.right', currentNode.right)

        // console.log('previousNode.left', previousNode ? previousNode.left : '')
        // console.log('previousNode.right', previousNode ? previousNode.right : '')


        if(!previousNode || previousNode.left ===currentNode || previousNode.right === currentNode){
            if(currentNode.left){
                stack.push(currentNode.left)
            } else if(currentNode.right){
                stack.push(currentNode.right)
            } else{
                result.push(stack.pop().val)
            }
        } else if(currentNode.left === previousNode){
            if(currentNode.right){
                stack.push(currentNode.right)
            }else {
                result.push(stack.pop().val)
            }
        } else if(currentNode.right === previousNode){
            result.push(stack.pop().val)
        }

        previousNode = currentNode

        console.log('result', result)

        console.log('----')

    }

    // console.log('result', result)

    return result
};
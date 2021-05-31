// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const widths = []

  let nodes = [root]
  while (nodes.length) {
    widths.push(nodes.length)

    const children = []
    for (let child of nodes) {
      children.push(...child.children)
    }

    nodes = children
  }

  return widths
  // const STOP = 'stop'
  // let levels = [0]
  // let nodes = [root, STOP]

  // while (nodes.length) {
  //   const node = nodes.shift()

  //   if (node === STOP) {
  //     if (nodes.length === 0) return levels
  //   }

  //   const lastIndex = levels.length - 1
  //   levels[lastIndex]++

  //   if (node.children.length > 0) {
  //     levels.push(0)
  //     nodes.unshift(...node.children)
  //   }
  // }
}

module.exports = levelWidth;

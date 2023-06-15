class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex)
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    for (let vertex of vertexArray) {
      this.nodes.add(vertex)
    }
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    for (let vert of vertex.adjacent) {
      vert.adjacent.delete(vertex)
    }
    this.nodes.delete(vertex)
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {
    const stack = [start];
    const visited = new Set();

    while (stack.length > 0) {
      const current = stack.pop();

      if (!visited.has(current)) {
        visited.add(current);

        for (const neighbor of current.adjacent) {
          stack.push(neighbor);
        }
      }
    }

    const result = [];
    for (const node of visited) {
      result.push(node.value);
    }
    console.log(result);
    return result;
  }

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
    const stack = [start];
    const visited = new Set();

    while (stack.length > 0) {
      const current = stack.shift();

      if (!visited.has(current)) {
        visited.add(current);

        for (const neighbor of current.adjacent) {
          stack.push(neighbor);
        }
      }
    }

    const result = [];
    for (const node of visited) {
      result.push(node.value);
    }
    console.log(result);
    return result;
  }
}

module.exports = {Graph, Node}
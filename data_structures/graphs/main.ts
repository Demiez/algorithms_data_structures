import { GraphAL } from './graph.adjacency.list';

const graph01 = new GraphAL(5);
graph01.addVertices([1, 2, 3, 4, 5]);
graph01.addEdge(1, 2); // a
graph01.addEdge(2, 3); // b
graph01.addEdge(3, 5); // c
graph01.addEdge(4, 5); // d
graph01.addEdge(1, 5); // e
graph01.addEdge(3, 4); // f
graph01.addEdge(1, 4); // g

graph01.printGraph();
graph01.bfs(2);

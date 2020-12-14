// Graph adjacency list
import { Queue } from '../queue/queue';

export class GraphAL {
  private noOfVertices: number;
  private adjList: Map<number, number[]>;

  constructor(noOfVertices: number) {
    this.noOfVertices = noOfVertices;
    this.adjList = new Map();
  }

  private addVertex(v: number) {
    this.adjList.set(v, [] as number[]);
  }

  private printTraverseInfo(visited: number[], traverseType: string) {
    if (visited.length === this.noOfVertices) {
      console.info(
        `${traverseType.toUpperCase()}: ALL vertices visited in graph in order >  ${visited.join(
          ','
        )}`
      );
      return;
    }

    console.info(
      `${traverseType.toUpperCase()}: SOME vertices visited in graph in order >  ${visited.join(
        ','
      )}`
    );
  }

  public addVertices(arr: number[]) {
    if (this.noOfVertices !== arr.length) {
      throw new Error('Wrong number of vertices');
    }

    arr.forEach((vertex) => this.addVertex(vertex));
  }

  public addEdge(v: number, w: number) {
    const listofVeticesV = this.adjList.get(v) as number[];
    listofVeticesV.push(w);

    const listofVeticesW = this.adjList.get(w) as number[];
    listofVeticesW.push(v);
  }

  public printGraph(): void {
    for (const [key, value] of this.adjList) {
      console.info(key, value.sort().join(','));
    }
  }

  public bfs(startingVertex: number) {
    const queue = new Queue();
    const visited: number[] = [];

    queue.enqueue(startingVertex);

    while (!queue.isEmpty()) {
      const elementFromQueue = queue.dequeue();

      if (visited.includes(elementFromQueue as number)) {
        continue;
      }

      console.info('Visited vertex: ' + elementFromQueue);
      visited.push(elementFromQueue as number);

      const adjacentListForElement: number[] = this.adjList.get(
        elementFromQueue as number
      )!;

      for (const vertex of adjacentListForElement) {
        if (!visited.includes(vertex)) {
          queue.enqueue(vertex);
        }
      }
    }

    this.printTraverseInfo(visited, 'bfs');
  }

  public dfs(startingVertex: number) {
    const visited: number[] = [];

    const traverse = (vertex: number) => {
      visited.push(vertex);

      const adjacentListForElement: number[] = this.adjList.get(vertex)!;

      if (adjacentListForElement.length !== 0) {
        for (const vertex of adjacentListForElement) {
          if (!visited.includes(vertex)) {
            traverse(vertex);
          }
        }
      }

      console.info('Visited vertex: ' + vertex);
    };

    traverse(startingVertex);

    this.printTraverseInfo(visited, 'dfs');
  }
}

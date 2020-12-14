// Graph adjacency list
import { Queue } from '../queue/queue';

export class GraphAL<T> {
  private noOfVertices: number;
  private adjList: Map<T, T[]>;

  constructor(noOfVertices: number) {
    this.noOfVertices = noOfVertices;
    this.adjList = new Map();
  }

  private addVertex(v: T) {
    this.adjList.set(v, [] as T[]);
  }

  private printTraverseInfo(visited: T[], traverseType: string) {
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

  public addVertices(arr: T[]) {
    if (this.noOfVertices !== arr.length) {
      throw new Error('Wrong number of vertices');
    }

    arr.forEach((vertex) => this.addVertex(vertex));
  }

  public addEdge(v: T, w: T) {
    const listofVeticesV = this.adjList.get(v) as Array<T>;
    listofVeticesV.push(w);

    const listofVeticesW = this.adjList.get(w) as Array<T>;
    listofVeticesW.push(v);
  }

  public printGraph(): void {
    for (const [key, value] of this.adjList) {
      console.info(key, value.sort().join(','));
    }
  }

  public bfs(startingVertex: T) {
    const queue = new Queue<T>();
    const visited: T[] = [];

    queue.enqueue(startingVertex);

    while (!queue.isEmpty()) {
      const elementFromQueue = queue.dequeue();

      if (visited.includes(elementFromQueue as T)) {
        continue;
      }

      console.info('Visited vertex: ' + elementFromQueue);
      visited.push(elementFromQueue as T);

      const adjacentListForElement: T[] = this.adjList.get(
        elementFromQueue as T
      )!;

      for (const vertex of adjacentListForElement) {
        if (!visited.includes(vertex)) {
          queue.enqueue(vertex);
        }
      }
    }

    this.printTraverseInfo(visited, 'bfs');
  }

  public dfs(startingVertex: T) {
    const visited: T[] = [];

    const traverse = (vertex: T) => {
      visited.push(vertex);

      const adjacentListForElement: T[] = this.adjList.get(vertex)!;

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

// Graph adjacency list
export class GraphAL {
  private noOfVertices: number;
  private adjList: Map<number, number[]>;

  constructor(noOfVertices: number) {
    this.noOfVertices = noOfVertices;
    this.adjList = new Map();
  }

  public addVertex(v: number) {
    this.adjList.set(v, [] as number[]);
  }

  public addVertices(arr: number[]) {
    arr.forEach((vertex) => this.adjList.set(vertex, [] as number[]));
  }

  public addEdge(v: number, w: number) {
    this.adjList.get(v).push(w);

    this.adjList.get(w).push(v);
  }
}

export class Queue<T> {
  private elements: Array<T> = [];

  public enqueue(el: T): void {
    this.elements.push(el);
  }

  public dequeue(): T | undefined {
    return this.elements.shift();
  }

  public peek(): T | undefined {
    return !this.isEmpty ? this.elements[0] : undefined;
  }

  public length(): number {
    return this.elements.length;
  }

  public isEmpty(): boolean {
    return this.elements.length === 0;
  }
}

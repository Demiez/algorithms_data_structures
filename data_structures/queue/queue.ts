export class Queue {
  private elements: Array<number | string> = [];

  public enqueue(el: number | string): void {
    this.elements.push(el);
  }

  public dequeue(): number | string {
    return this.elements.shift();
  }

  public peek(): number | string | undefined {
    return !this.isEmpty ? this.elements[0] : undefined;
  }

  public length(): number {
    return this.elements.length;
  }

  public isEmpty(): boolean {
    return this.elements.length === 0;
  }
}

import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  //title = "week9angtute";
  items = [];
  name: string = "";
  quantity: number = 0;
  price: number = 0;
  private THRESHOLD: number = 30;
  saveItem(): void {
    console.log(this.items);
    this.items.push({
      name: this.name,
      quantity: this.quantity,
      price: this.price
    });
  }
  get threshold(): number {
    return this.THRESHOLD;
  }

  getNumCheapItems(): number {
    let count: number = 0;
    for (let index = 0; index < this.items.length; index++) {
      const item = this.items[index];
      if (item.price < this.THRESHOLD) {
        count++;
      }
      return count;
    }
  }

  deleteCheap() {
    let i: number = 0;
    while (i < this.items.length) {
      if (this.items[i].price < this.THRESHOLD) {
        this.items.splice(i, 1);
      } else {
        i++;
      }
    }
  }
  deleteItem(index: number): void {
    this.items.splice(index, 1);
  }
}

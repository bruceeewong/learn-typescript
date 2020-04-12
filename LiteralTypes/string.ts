type Easing = "ease-in" | "ease-out" | "ease-in-out";

class UIElement {
  animate(dx: number, dy: number, easing: Easing) {
    if (easing === "ease-in") {
      return;
    } else if (easing === "ease-out") {
      return;
    } else if (easing == "ease-in-out") {
      return;
    } else {
      return;
    }
  }
}

let button = new UIElement();
button.animate(0, 0, "ease-in");
// button.animate(0, 0, "unease"); // Error

// Numeric Literal
type num = 1 | 2 | 99;
function testNumber(num: num): number {
  return num;
}
// testNumber(3);

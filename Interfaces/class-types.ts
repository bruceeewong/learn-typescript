// Class Types
interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
  currentTime: Date;
  setTime(d: Date): void;
}
class Clock implements ClockInterface {
  currentTime: Date = new Date();
  constructor(hour: number, minute: number) {}
  setTime(d: Date) {
    this.currentTime = d;
  }
}

function createClock(
  ctor: ClockConstructor,
  hour: number,
  minute: number
): ClockInterface {
  return new ctor(hour, minute);
}

let clock: Clock = createClock(Clock, 12, 17);

// Another simple way
interface ClockConstructor2 {
  new (hour: number, minute: number);
}
interface ClockInterface2 {
  tick();
}
const Clock2: ClockConstructor2 = class Clock2 implements ClockInterface2 {
  constructor(h: number, m: number) {}
  tick() {
    console.log("beep");
  }
};
let clock2 = new Clock2(12, 16);
clock2.tick();

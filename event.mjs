import { EventEmitter } from "events";

const emitter = new EventEmitter();

emitter.addListener("hello", (name) => {
    console.log(`Hello ${name}`);
})
emitter.addListener("hello", (name) => {
    console.log(`Woy ${name}`);
})

emitter.emit("hello", "Febri");
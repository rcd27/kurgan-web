// Поток ядра «Кургана»: Kotlin/Wasm (mound.js, шов — mods/mound/src/wasmJsMain/kotlin/mound/Main.kt) слушает мост по
// проводу (mods/mound/wire). Модуль Wasm грузится асинхронно — сообщения моста до его готовности копятся здесь, ядро
// заберёт их первым делом.
globalThis.pending = [];
onmessage = (e) => globalThis.pending.push(e.data);
importScripts('mound.js');

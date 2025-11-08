# Nano React

A minimal, blazing-fast UI primitives library for React — tiny runtime, modern API, and ergonomic primitives for building reactive components.

Status: WIP (ongoing development)

---

## Table of Contents
- Summary
- Goals
- Features
- Quick Install
- Quick Start
- Project Structure
- Development
- Testing
- Contributing
- Roadmap
- License

---

## Summary
Nano React provides a small set of composable utilities and components to build reactive interfaces with minimal bundle impact. Ideal for micro-frontends, widgets, and performance-sensitive apps.

## Goals
- Keep bundle size extremely small
- Minimal and predictable re-render semantics
- Easy-to-learn API inspired by modern React patterns
- Plug-and-play interoperability with React ecosystem

## Features
- Tiny core primitives (state, effects, context)
- Lightweight component wrappers
- Selective reactivity for fine-grained updates
- TypeScript-first with strong typings
- Zero runtime dependencies except React

## Quick Start (example)
`<script src="./utilities/nano-react.js"></script>`

```js
 const { useState, initNanoReactComponent } = MiniReact;

initNanoReactComponent('counter', function () {
    const [count, setCount] = useState(0);
    document.getElementById('count').textContent = count;
    document.getElementById('incBtn').onclick = () => setCount(count + 1);
    document.getElementById('decBtn').onclick = () => setCount(count - 1);
});
```

## Project Structure
- utilities/ — source code
- index.html/ — runnable example apps

## Roadmap (short)
- Core API stabilization
- Devtools + profiler integration
- Server-side rendering support
- Small set of official UI primitives

## License
Specify a license (e.g. MIT) in LICENSE file.

---

For questions or to collaborate, open an issue or PR in the repository.
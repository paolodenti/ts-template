# Basic node/typescript template

With nodemon and ts-node for dev.

With eslint, prettier, husky, mocha.

## Typescript VSCode Debug

a) Add the following configuration to launch.json.

```json
{
    "name": "Attach",
    "port": 9229,
    "request": "attach",
    "skipFiles": ["<node_internals>/**"],
    "type": "pwa-node"
}
```

b) Launch app with `npm run debug` (automatic breakpoint on start).

c) Launch `Attach` debug configuration.

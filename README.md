# Temporal demo for eLife Tech unconf July 2023

This is a small demo code of a subset of Temporal workflows features. For the demo, it was written around the say command, which is macos only, but you can still run the examples by altering the say.sh to run something else.

## Setup

Install:
- [Temporal CLI](https://docs.temporal.io/dev-guide/typescript/foundations#run-a-development-server)
- [tctl](https://docs.temporal.io/tctl-v1/#install)
- nvm
- yarn
- make

then run:

```
make start-temporal
```

in another session run:
```
make start-worker
```

then visit http://localhost:8223/ to view the temporal dashboard.

## Workflow 1

Kick off the first simple monolog workflow using:

```
make run-monolog
```

Interrupt the worker, break the `say.sh` script and inspect via the dashboard and worker logs to understand how these components fit together.

## Workflow 2

Kick off the workflow demo'ing queries and and signals simulating an interactive workflow (i.e. inspect and set state from an external system):

```
make run-monolog
```

Then inspect the workflow in the dashboard, especially the queries tab. You can also send a signal from the workflow inspect page on the dashboard (signal: "respond", value: should include double quotes (i.e. a JSON string)), or via running:
```
make send-name
```

setup:
	# Typescript
	yarn add @types/node typescript
	yarn add -D ts-node
	yarn tsc --init --rootDir src --outDir ./bin --esModuleInterop

	# temporal libraries
	yarn add @temporalio/client @temporalio/worker @temporalio/workflow @temporalio/activity

	# nodemon
	yarn add -D nodemon

reset:
	rm store.db

start-temporal:
	temporal server start-dev --db-filename store.db

start-worker:
	yarn nodemon src/worker.ts

open-dashboard:
	open http://localhost:8233/



run-monologue:
	tctl wf run -tq demo -wt monologue -wid monologue

run-conversation:
	tctl wf run -tq demo -wt conversation -wid conversation

send-name:
	tctl wf signal -wid conversation -n respond -i '"Scott"'

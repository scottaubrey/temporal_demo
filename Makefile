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
	temporal workflow execute -t demo -type monologue -w monologue

run-conversation:
	temporal workflow execute -t demo -type conversation -w conversation

send-name:
	temporal workflow signal -w conversation --name respond -i '"Scott"'



run-memory-in-workflow:
	temporal workflow execute -t demo -type useMemoryInWorkflow -w useMemoryInWorkflow

run-memory-in-activity:
	temporal workflow execute -t demo -type useMemoryInActivity -w useMemoryInActivity

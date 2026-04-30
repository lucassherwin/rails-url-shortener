.PHONY: help build up down clean restart logs console shell migrate test routes

export RAILS_MASTER_KEY ?= $(shell cat config/master.key 2>/dev/null)

.DEFAULT_GOAL := help

help: ## Show available targets
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | \
		awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-12s\033[0m %s\n", $$1, $$2}'

build: ## Rebuild the Docker image (run after Gemfile or package.json changes)
	docker compose build

up: ## Start all services and stream logs
	@rm -f tmp/pids/server.pid
	docker compose up

down: ## Stop all services (volumes and database are preserved)
	docker compose down

clean: ## Stop all services and delete all volumes including the database
	docker compose down -v

restart: ## Restart the app container without touching the database
	docker compose restart app

logs: ## Follow logs for all services
	docker compose logs -f

console: ## Open a Rails console (requires running container)
	docker compose exec app bin/rails console

shell: ## Open a bash shell in the app container (requires running container)
	docker compose exec app bash

migrate: ## Run pending database migrations (requires running container)
	docker compose exec app bin/rails db:migrate

test: ## Run the test suite (requires running container)
	docker compose exec app bin/rails test

routes: ## Print Rails routes (requires running container)
	docker compose exec app bin/rails routes

run_dev_db:
	docker-compose up postit_db
run_dev_backend:
	cd backend && ../mvnw clean spring-boot:run
run_dev_frontend:
	cd frontend && npm run build-dev
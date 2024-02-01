rn:
	go run main.go

build:
	 go install main.go
migrateup:
	./bin/migrate -path pkg/db/schema -database "mysql://root:32HAFf5EHde66f-AfG1eADb5E5hCe1eC@monorail.proxy.rlwy.net:13209/railway"  -verbose up

migratedown:
	./bin/migrate -path pkg/db/schema -database "mysql://root:32HAFf5EHde66f-AfG1eADb5E5hCe1eC@mysql.railway.internal:3306/railway" -verbose drop 

generate:
	sqlc generate

run:
	go run main.go

build:
	 go install main.go
	
migrateup:
	migrate -path pkg/db/schema -database "mysql://root:fDCsOsfNSduADQ6I5evG@tcp(containers-us-west-34.railway.app:6940)/railway" -verbose up

migratedown:
	migrate -path pkg/db/schema -database "mysql://root:fDCsOsfNSduADQ6I5evG@tcp(containers-us-west-34.railway.app:6940)/railway" -verbose drop 

generate:
	.\sqlc.exe generate

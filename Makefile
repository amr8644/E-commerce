rn:
	go run main.go

build:
	 go build -o build/main main.go

generate:
	sqlc generate

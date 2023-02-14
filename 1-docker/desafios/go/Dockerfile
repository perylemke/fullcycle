FROM golang:1.20-alpine as build
WORKDIR /app
COPY main.go .
RUN go build -o ./fullcycle main.go

FROM scratch
COPY --from=build /app/fullcycle /fullcycle
ENTRYPOINT [ "/fullcycle" ]
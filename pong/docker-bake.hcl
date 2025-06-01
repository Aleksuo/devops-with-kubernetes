variable "TAG" {
    default = "latest"
}

group "default" {
    targets = ["pong"]
}
target "pong" {
    dockerfile = "Dockerfile"
    context = "."
    tags = ["dev-registry.localhost:5000/pong:${TAG}"]
}
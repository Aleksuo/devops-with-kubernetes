variable "TAG" {
    default = "latest"
}

group "default" {
    targets = ["pong", "log-output-server", "log-output-generator"]
}
target "pong" {
    dockerfile = "Dockerfile"
    context = "pong"
    tags = ["dev-registry.localhost:5000/pong:${TAG}"]
}

target "log-output-server" {
    dockerfile = "Dockerfile"
    context = "log-output-server"
    tags = ["dev-registry.localhost:5000/log-output-server:${TAG}"]
}

target "log-output-generator" {
    dockerfile = "Dockerfile"
    context = "log-output-generator"
    tags = ["dev-registry.localhost:5000/log-output-generator:${TAG}"]
}
variable "TAG" {
    default = "latest"
}

variable "REGISTRY" {
    default = "registry.digitalocean.com/exercises"
}

group "default" {
    targets = ["pong", "log-output-server", "log-output-generator", "migrations"]
}
target "pong" {
    dockerfile = "Dockerfile"
    context = "pong"
    tags = ["${REGISTRY}/pong:${TAG}"]
}

target "log-output-server" {
    dockerfile = "Dockerfile"
    context = "log-output-server"
    tags = ["${REGISTRY}/log-output-server:${TAG}"]
}

target "log-output-generator" {
    dockerfile = "Dockerfile"
    context = "log-output-generator"
    tags = ["${REGISTRY}/log-output-generator:${TAG}"]
}

target "migrations" {
    dockerfile = "Dockerfile"
    context = "migrations"
    tags = ["${REGISTRY}/migrations:${TAG}"]
}
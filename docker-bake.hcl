variable "TAG" {
    default = "latest"
}

group "default" {
    targets = ["pong", "log-output"]
}
target "pong" {
    dockerfile = "Dockerfile"
    context = "pong"
    tags = ["dev-registry.localhost:5000/pong:${TAG}"]
}

target "log-output" {
    dockerfile = "Dockerfile"
    context = "log-output"
    tags = ["dev-registry.localhost:5000/log-output:${TAG}"]
}
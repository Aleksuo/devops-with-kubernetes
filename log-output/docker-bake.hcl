variable "TAG" {
    default = "latest"
}

group "default" {
    targets = ["log-output"]
}
target "log-output" {
    dockerfile = "Dockerfile"
    context = "."
    tags = ["dev-registry.localhost:5000/log-output:${TAG}"]
}
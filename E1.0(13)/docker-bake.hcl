variable "TAG" {
    default = "latest"
}

group "default" {
    targets = ["app"]
}
target "app" {
    dockerfile = "Dockerfile"
    context = "."
    tags = ["dev-registry.localhost:5000/ex1-app:${TAG}"]
}
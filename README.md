K3d cluster creation:
``` bash
k3d cluster create dev --port 8082:30080@agent:0 -p 8081:80@loadbalancer --agents 2 --registry-create dev-registry.localhost:5000
```
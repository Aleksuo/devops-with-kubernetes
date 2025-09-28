{ pkgs, lib, config, inputs, ... }:

{
  # https://devenv.sh/basics/
  env.GREET = "devenv";

  # https://devenv.sh/packages/
    packages = [ 
    pkgs.git
    pkgs.k3d
    pkgs.kubectl
    pkgs.k9s
    pkgs.kubectx
    pkgs.kubernetes-helm
  ];

  languages.javascript = {
    enable = true;
    npm = {
      enable = true;
      install.enable = true;
    };
  };

  # https://devenv.sh/languages/
  # languages.rust.enable = true;

  # https://devenv.sh/processes/
  # processes.cargo-watch.exec = "cargo-watch";

  # https://devenv.sh/services/
  # services.postgres.enable = true;

  # https://devenv.sh/scripts/
  scripts.cluster-recreate.exec=''
    k3d cluster delete -c cluster-config.yaml
    k3d cluster create -c cluster-config.yaml
  '';
  scripts.up.exec = ''
    docker bake --push
    kubectl apply -k ./infra/k8s/overlays/dev
  '';
  scripts.down.exec = ''
    kubectl delete namespace exercises
  '';

  scripts.up-do.exec = ''
    docker bake -f docker-bake.do.hcl --push
    kubectl kustomize ./infra/k8s/overlays/do --enable-helm | kubectl apply -f -
  '';

  enterShell = ''
    git --version
  '';

  # https://devenv.sh/tasks/
  # tasks = {
  #   "myproj:setup".exec = "mytool build";
  #   "devenv:enterShell".after = [ "myproj:setup" ];
  # };

  # https://devenv.sh/tests/
  enterTest = ''
    echo "Running tests"
    git --version | grep --color=auto "${pkgs.git.version}"
  '';

  # https://devenv.sh/git-hooks/
  # git-hooks.hooks.shellcheck.enable = true;

  # See full reference at https://devenv.sh/reference/options/
}

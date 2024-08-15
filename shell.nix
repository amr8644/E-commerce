# shell.nix
let
  pkgs = import <nixpkgs> {};
in
  pkgs.mkShell {
    packages = [
     pkgs.go
     pkgs.sqlite
     pkgs.nodejs_22
];
  }

{ pkgs ? import <nixpkgs> { } }:

let
  nodejs = pkgs.nodejs-16_x;
  yarn = pkgs.yarn.override { inherit nodejs; };
  nodejs-env = [ nodejs yarn ];
  nix-env = with pkgs; [ rnix-lsp nixpkgs-fmt ];

in
pkgs.mkShell {
  buildInputs = nodejs-env ++ nix-env;
  shellHook = ''
    export NODE_ENV="test"
    export PATH="$PWD/node_modules/.bin/:$PATH"
  '';
}

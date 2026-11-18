flake: {pkgs ? import <nixpkgs> {}}: let
  system = pkgs.stdenv.hostPlatform.system;

  base = flake.packages.${system}.default;
in
  pkgs.mkShell {
    inputsFrom = [base];

    buildInputs = with pkgs; [
      nixd
      statix
      deadnix
      alejandra
    ];

    shellHook = ''
      printf "Installing pnpm dependencies\n"
      pnpm install

      printf "Adding node_modules to PATH\n"
      export PATH="$PWD/node_modules/.bin/:$PATH"

      printf "Adding necessary aliases\n"
      alias scripts='jq ".scripts" package.json'
    '';
  }

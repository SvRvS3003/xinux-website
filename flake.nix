{
  description = "The official website of Xinux";

  inputs = {

    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";

    flake-parts.url = "github:hercules-ci/flake-parts";
  };

  outputs = {
    self,
    flake-parts,
    ...
  } @ inputs:
    flake-parts.lib.mkFlake {inherit inputs;} ({...}: {
      systems = [
        "x86_64-linux"
        "aarch64-linux"
        "aarch64-darwin"
      ];
      flake = {
        nixosModules.server = import ./module.nix self;

        hydraJobs = self.packages.x86_64-linux;
      };
      perSystem = {pkgs, ...}: {
        formatter = pkgs.alejandra;

        devShells.default = import ./shell.nix self {inherit pkgs;};

        packages.default = pkgs.callPackage ./. {inherit pkgs;};
        packages.ssr = pkgs.callPackage ./. {inherit pkgs;};
      };
    });
}

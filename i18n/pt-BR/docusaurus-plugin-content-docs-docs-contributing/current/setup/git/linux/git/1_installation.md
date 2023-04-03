# Installation

This'll be a long one, just CTRL + F your distro or look it up online lmao.

### Debian/Debian-based/Ubuntu/Ubuntu-based/Linux Mint/Pop! OS

1. Update your system
```sh
sudo apt-get update
```
2. Install Git using apt
```sh
sudo apt-get install git
```
3. Verify the installation was successful
```sh
git --version
```

### Fedora
1. Install Git using dnf
```sh
sudo dnf install git
```
2. Verify the installation was successful
```sh
git --version
```

### Arch Linux/Arch-based/Manjaro/EndeavourOS
You probably already have git installed but:
1. Install Git using pacman
```sh
sudo pacman -Syu git
```
2. Verify the installation was successful
```sh
git --version
```

### RHEL/CentOS
1. Install Git using yum
```sh
yum install git
```
2. Verify the installation was successful
```sh
git --version
```

### Gentoo
why are you even reading this.


## Cloning the repository
1. Open your fork on GitHub.
2. Follow the image below to copy the link of your fork.

![copy](../../assets/cloning.png)

3. After copying, Run the command below
```sh
git clone THE_LINK_YOU_COPIED_HERE
```

Now continue on to [Installing Unity](/docs-contributing/setup/unity/linux/installation).

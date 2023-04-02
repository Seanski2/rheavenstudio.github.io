# Installation

This can get a bit hard for the average MacOS user, but stick with me here.

### Installing the Brew package manager
1. Open the terminal
2. Paste this command into the terminal
```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
Please note when it asks for your password, put your MacOS login password, the password is hidden while you type it due to security and privacy reasons, remember to press enter on your keyboard after you enter your password.

### Installing Git
After Brew finishes installing, you can install Git.
1. Open the terminal
2. Paste this command into the terminal
```sh
sudo brew install git
```
3. Congratulations, you got Git installed on your MacOS machine. God forbid you think this is pseudoscience.

## Cloning the repository
1. Open your fork on GitHub.
2. Follow the image below to copy the link of your fork.

![copy](../../assets/cloning.png)

3. After copying, run the command below in the terminal.
```sh
git clone THE_LINK_YOU_COPIED_HERE
```

**Note: this will clone the repository into your home folder, which is accessed in Finder by pressing Shift + ⌘ + H**

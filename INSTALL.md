# Installation
This file outlines the installation procedure for this application. In most cases, this app will already be installed. To check if it is installed already, [click here](README.md#installation)

# Vocabulary
This software is designed to be used in a 2 computer set-up.

* *Computer P*, in this documentation will be the computer running ProPresenter.
* *Computer S*, in this documentation will be the computer running SCS 11.

This program has been tested in an environment in which *Computer P* is a computer running MacOS and *Computer S* is a computer running Windows 10. Other configurations may work, but have not been tested.

# *Computer P* Installation
1. Open ProPresenter
1. Open ProPresenter's settings window. __(Command + Comma on MacOS)__
1. Select the __Network__ tab
1. Mark the following checkboxes as __checked__
   1. Enable Network
   1. Enable ProPresenter Remote
   1. Controller
1. Set a password in the controller field.
1. Write down the "*Network Name*, *Port*, and *Password*--you'll need these to set-up *Computer S*

# *Computer S* Installation
1. Download __Node.JS__ from [here](https://nodejs.org/en/download/). It is recommended you use the __Windows Installer__ for a quick and easy installation.
1. Download this repository from [here](https://github.com/AndrewWilson214/CTH-Pro-Link/archive/master.zip). It is recommended you store it in the *Documents folder* as a folder named *ProPresenter* for consistency.
1. In the folder you downloaded from this repository, there is a file named "setup.bat" Double-click this file, and when prompted enter the *Network Name, Port, and Password* that you configured on *Computer P*

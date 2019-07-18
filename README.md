# CTH-Pro-Link
Controls ProPresenter effortlessly through SCS 11 or any application that can run a Windows Batch file, allowing you to control your music and your slides all in the same place.

# Guide

# Required Hardware/Software
This software is designed to be used in a 2 computer set-up.

* *Computer P*, in this documentation will be the computer running ProPresenter.
* *Computer S*, in this documentation will be the computer running SCS 11.

This program has been tested in an environment in which *Computer P* is a computer running MacOS and *Computer S* is a computer running Windows 10. Other configurations may work, but have not been tested.

# [create an anchor](#installation) Installation
Unless a computer system change has occurred recently, the necessary programs should already be installed and you may skip this section. However, if you have reason to believe this program is not already installed, [click here]()

>On Windows, you can check if it is installed by seeing if there is a folder named __ProPresenter__ in the __Documents__ folder.

>On MacOS, you can check if it is installed by seeing if __ProPresenter Remote__ is configured in the ProPresenter settings.

# Installation
Installation steps are involved for *Computer P* and *Computer S*.

> NOTE: These installation steps should only be necessary if either *Computer P* or *Computer S* has been erased, __meaning the software has not already been installed.__ If you're a tech director and are not sure whether the software has been installed or not, check to see if there is a ProPresenter folder in the Documents folder on *Computer S*. If there is, you may skip these installation steps. 

### *Computer P* Installation
1. Open ProPresenter
1. Open ProPresenter's settings window. __(Command + Comma on MacOS)
1. Select the "Network" tab
1. Mark the following checkboxes as __checked__
   1. Enable Network
   1. Enable ProPresenter Remote
   1. Controller
1. Set a password in the controller field.
1. Write down the "Network Name", "Port", and "Password"--you'll need these to set-up *Computer S*

### *Computer S* Installation
1. Download __Node.JS__ from [here](https://nodejs.org/en/download/). It is recommended you use the "Windows Installer" for a quick and easy installation.
1. Download this repository. It is recommended you store it in the Documents folder as a folder named ProPresenter so that it matches what will be specified later in this documentation.
1. In the folder you downloaded from this repository, there is a file named "setup.bat" Double-click this file, and when prompted enter the "Network Name", "Port", and "Password" that you configured on *Computer P*

# Creating a ProPresenter Slideshow
This program acts as a remote control for ProPresenter which runs on a separate computer from SCS 11. Therefore, as a pre-requisite you must have a slideshow configured in ProPresenter. The steps involved in creating a slideshow are the same regardless of whether you are using this repository's software or not.

# Creating Projector Cues in SCS 11
1. Open your SCS 11 show file and navigate to the SCS 11 "Editor" window.
1. In the toolbar, select "Cue". A dropdown will appear, where you will select "Run External Program"
1. Select the __...__ button next to the "File or Program to Run" textfield. Navigate to where the __change-slide.bat__ file is and select it. If installed properly, this should be located at C:\Users\{home dir}\Documents\ProPresenter\change-slide.bat
1. In "Command Line Parameters", simply type the slide number as it appears in ProPresenter.
1. Save the cue and test it--everything should work.*

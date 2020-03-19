# PsychoPy Sandwich Demo and Guide
This is an online PsychoPy experiment I built recently using the PsychoPy builder, and hosted online with pavlovia.org. I've attempted to document all the steps needed in building the experiment, and getting it to work online, but if there are other unanswered questions I recommend jumping over to the PsychoPy discourse: https://discourse.psychopy.org/

NOTE: I built this experiment using PsychoPy 3.2.4, they have since updated to PsychoPy 2020.1.3. This update includes a lot of great new features (mainly automatically translating your python code components to JS code components), but I believe that my experiment attached here does not run online if using this most recent update, because some of my manual JS code got overridden by the auto translated JS code. It should still run fine locally (run through PsychoPy, not online), if you would like to demo it. Hopefully that won't affect the usefulness of this guide too much

## Contents
### There are two main written guides, either as pdf files in this repository, or the more up to date link to the google docs:
#### 1. SandwichStudy Experiment Guide
Google Doc Link: https://docs.google.com/document/d/1pkxK4HhtlI7hbQRagUdD7TlA44icQ22SSKe3GJvNU1k/edit?usp=sharing
- This guide gives a walkthrough of every routine and component in the PsychoPy experiment SandwichStudy.psyexp. This guide does not go into any of the details about how to get a study like this working online, and is intended more as an explanation of all the components in the study and explanations for why I built it in this way. This is probably not a great beginners guide to building PsychoPy experiments using the builder interface, but might have some nice tools and tricks I have picked up in designing studies that might be valuable to intermediate users of PsychoPy. I would recommend actually running through the PsychoPy experiment first, seeing if there is any feature you want to learn more about, and jumping to that portion of the guide.

#### 2. Walkthrough to uploading and running experiments on Pavlovia.org
Google Doc Link: https://docs.google.com/document/d/1UF1_bwU_khExq4POibTx9qpfpYZxF3l-1So8bDycVEo/edit?usp=sharing
- This guide is my attempt to document all the steps I had to take in order to go from having a complete study in the PsychoPy builder to actually having a working study on pavlovia.org. I tried to make this as general of a guide as possible, that should hopefully be applicable regardless of what your experiment looks like, but of course this is just a documentation of what I had to do for my study and yours might run into other hurdles (thats what the discourse link above is for!). This guide refers to different aspects of my experiment, and I tried to link to different parts of the Experiment guide when I refer to it.

### Exp Folder
- The folder, Exp, contains the actual PsychoPy builder experiment, as well as all the necessary components for running it (such as the condition files, and html files). I include this folder so you can actually compare it to your local experiment folder, or demo my experiment. Definitions and descriptions of these files are within the written guides above.


Please feel free to copy, share, use, or distribute any: code, builder components, or written descriptons in this repository.
I would mainly direct any further questions about building expeirments in general to the PsychoPy discourse forum: https://discourse.psychopy.org/
but if you have any questions specifically about this guide or any of my components I will do my best to reply to any questions sent to roberjt1 at uci dot edu.

Best of luck!

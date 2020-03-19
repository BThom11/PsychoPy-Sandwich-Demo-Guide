#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v3.2.4),
    on March 19, 2020, at 10:24
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

from __future__ import absolute_import, division

import psychopy
psychopy.useVersion('3.2')


from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard

# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)

# Store info about the experiment session
psychopyVersion = '3.2.4'
expName = 'trial'  # from the Builder filename that created this script
expInfo = {'participant': ''}
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s' % (expInfo['participant'], expName)

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='C:\\Users\\rjtho\\OneDrive\\Documents\\Sandwich DM Project\\Exp\\SandwichStudy_lastrun.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.EXP)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run before the window creation

# Setup the Window
win = visual.Window(
    size=[1280, 720], fullscr=True, screen=0, 
    winType='pyglet', allowGUI=True, allowStencil=False,
    monitor='testMonitor', color=[1.000,1.000,1.000], colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='height')
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard()

# Initialize components for Routine "Study_Info_Sheet"
Study_Info_SheetClock = core.Clock()
#Copy straight to JS
TrialCount=0
NumOfTrials=80
#Trial Parameters, copy to JS
#Positions
ListX=.43
ListY=-.17
LabelX=.43
LabelY=.16
InstructionsMain=[0,.35]
InstructionsFinished=[0,.25]
OrPos=[0,LabelY]
LeftList=[-ListX,ListY]
RightList=[ListX,ListY]
Label1=[-LabelX,LabelY]
Label2=[LabelX,LabelY]
CounterPos=[.75,-.47]
WrapAmount=1.55
VegLoops=100
#Other Text Param
TextColor=[-1.000,-1.000,-1.000]
InstrSize=.06
IngSize=.06
SandLabelSize=.07
OrSize=.06



#Requires translation
import numpy
Flip=numpy.random.choice([0,1],size=NumOfTrials)

Info_Cont = keyboard.Keyboard()
TextHeader = visual.TextStim(win=win, name='TextHeader',
    text="Read through the Study Information on the following page and press 'space' to continue if you agree to participate.\nIf the edges of your screen are cutting off any of the text, press 'esc' once to leave full screen mode.\nIf you want to leave this study at any time, press 'esc' twice to leave full screen and be redirected to the SONA site. You will not receive credit if you leave early, but you can attempt the study again by emailing roberjt1@uci.edu\nPress 'space' to view the Study Information sheet\n",
    font='Arial',
    pos=(0, .25), height=0.038, wrapWidth=1.7, ori=0, 
    color=[-1.000,-1.000,-1.000], colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);

# Initialize components for Routine "Full_Info_Sheet"
Full_Info_SheetClock = core.Clock()
InfoSheetTxt = visual.TextStim(win=win, name='InfoSheetTxt',
    text="Inferring preferences in multiattribute decision making.\nLead Researcher: Robert Thomas Cognitive Sciences, (303)-250-4134, roberjt1@uci.edu\nFaculty Sponsor: Michael Lee, Professor, Cognitive Sciences, (949)-689-0864, mdlee@uci.edu \n• Please read the information below and ask questions about anything that you do not understand.  A researcher listed above will be available to answer your questions.\n• You are being asked to participate in a research study. Participation in this study is voluntary.  You may choose to skip a question or a study procedure. You may refuse to participate or discontinue your involvement at any time without penalty or loss of benefits.  You are free to withdraw from this study at any time. If you decide to withdraw from this study you should notify the research team immediately.\nWe would like you to complete an online questionnaire to learn more about how to measure individual’s preferences from the decisions they make. The questionnaire will last about 30 minutes or less. The questionnaire involves making a series of decisions about preferences for different prepared foods. You will be asked to select your preferred choice from the descriptions of two different options. The trial will begin with only a single ingredient presented, and you can either select one of the two options, or get more information by looking at another ingredient. After doing so two new options will be presented and this process will repeat for approximately 100 trials. After this series of trials, we will also ask you to rate 15 of the ingredients you saw in the questionnaire on a scale from 1 to 10 based on your preference for the ingredient.\n• Possible risks/discomforts associated with the study include getting bored or tired during the tasks. When you are halfway through the questionnaire you will be shown a screen indicating you can take a break for up to 3 minutes, although you are not required to take this break and can continue with the questionnaire at any time. \n• There are no direct benefits from participation in the study. However, this study may help to develop new models and methods for measuring individuals’ preferences, and a better understanding of how these preferences guide decision making.\n• All research data collected will be stored securely and confidentially. No audio tapes, video tapes, or pictures will be recorded or stored. All decision and response time data will be stored on secure servers hosted by https://pavlovia.org/docs/legal/terms and the Lead Researcher’s (Robert Thomas) password protected computer.  \n• Researchers will use your information to conduct this study. Once the study is done using your information, we may share them with other researchers so they can use them for other studies in the future. We will not share your name or any other private identifiable information that would let the researchers know who you are. We will not ask you for additional permission to share this information.\n• You will receive extra course credit for an eligible course through the UCI Social Ecology human subjects pool. You will receive a ½ unit of course credit for each ½ hour of participation in this study. Total amount of credit you may earn for this study is ½ credit. The course instructor offering extra course credit for participation in research must provide alternatives to earn extra course credit. The alternative assignment must require equal or less time and effort for the amount of extra credit that can be earned through participation in research. \n• Questions? If you have any comments, concerns, or questions regarding this study please contact the researchers listed at the top of this form. \n• If you have questions or concerns about your rights as a research participant, you can contact the UCI Institutional Review Board by phone, (949) 824-6662, by e-mail at IRB@research.uci.edu or at 141 Innovation, Suite 250, Irvine, CA 92697.\nWhat is an IRB?  An Institutional Review Board (IRB) is a committee made up of scientists and non-scientists. The IRB’s role is to protect the rights and welfare of human subjects involved in research. The IRB also assures that the research complies with applicable regulations, laws, and institutional policies. \n\nPress 'space' if you agree to participate and continue with the study.\n\n",
    font='Arial',
    pos=(0, -.02), height=0.023, wrapWidth=1.7, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
key_resp_4 = keyboard.Keyboard()

# Initialize components for Routine "Instructions"
InstructionsClock = core.Clock()
MainInstruction = visual.TextStim(win=win, name='MainInstruction',
    text='Main Instructions:\nIn this study you will be asked about your preferences for different sandwiches!\n\nOn each trial you will be presented with the ingredients for two different sandwiches, and asked to indicate which sandwich you would prefer to order and eat. You cannot add or remove any ingredients from any of the sandwiches. The ingredients will only be the ingredients in the sandwich, not the bread the sandwich is on, so you can imagine that these sandwiches are on any type of bread you would like.\n\nThere will be 80 trials which involve making selections between these sandwiches, and there is a trial counter in the bottom right corner of the screen. When you are halfway through there will be an option for a 3 minute break if needed.\n\nThere are 40 different sandwiches, so you will only ever see the same sandwich two times in the whole study.\n\nPress "space" to continue\n',
    font='Arial',
    pos=(0, 0), height=0.04, wrapWidth=WrapAmount, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
Past_Instr = keyboard.Keyboard()

# Initialize components for Routine "Instructions2"
Instructions2Clock = core.Clock()
MainInstruction_2 = visual.TextStim(win=win, name='MainInstruction_2',
    text='On each trial, you will be presented only with the first ingredient of the two sandwiches. You can press "space" to get the next ingredient for each sandwich, or you can press "A" if you would prefer to eat Sandwich 1, or "L" if you would prefer to eat Sandwich 2.\n\nYou can continue to press "space" to reveal as many ingredients as you would like on each trial. A message will appear once all ingredients are shown on a trial. Every time you reveal a new ingredient, there will be a 1 second delay before you can reveal another ingredient or make your decision.\n\nYou are NOT required to view all ingredients for every sandwich, and may choose between the sandwiches with any number of ingredients presented. We encourage you to make a decision before viewing all ingredients if you strongly believe one sandwich is better than another, even if this is based on only a few ingredients. \n\nWhen you are ready to begin the study press "space".',
    font='Arial',
    pos=(0, 0), height=0.04, wrapWidth=WrapAmount, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
Past_Instr_2 = keyboard.Keyboard()

# Initialize components for Routine "VegQuestion"
VegQuestionClock = core.Clock()
VegQuestionText = visual.TextStim(win=win, name='VegQuestionText',
    text="Before trials begin, are you a vegetarian? Press 'Y' if you are a vegetarian, or press 'N' if you are NOT a vegetarian.\n\n(If you are a vegetarian we will only show you sandwiches without meat)",
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=WrapAmount, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
VegResp = keyboard.Keyboard()

# Initialize components for Routine "VegConfirm"
VegConfirmClock = core.Clock()
text = visual.TextStim(win=win, name='text',
    text='default text',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=WrapAmount, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
ConfirmResp = keyboard.Keyboard()

# Initialize components for Routine "Initialize"
InitializeClock = core.Clock()

# Initialize components for Routine "PresentSandMain"
PresentSandMainClock = core.Clock()
Decision = keyboard.Keyboard()
Sandwich1 = visual.TextStim(win=win, name='Sandwich1',
    text='Sandwich 1',
    font='Arial',
    pos=[0,0], height=1.0, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);
Or = visual.TextStim(win=win, name='Or',
    text='or',
    font='Arial',
    pos=[0,0], height=1.0, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-3.0);
Sandwich2 = visual.TextStim(win=win, name='Sandwich2',
    text='Sandwich 2',
    font='Arial',
    pos=[0,0], height=1.0, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-4.0);
Instr = visual.TextStim(win=win, name='Instr',
    text='default text',
    font='Arial',
    pos=[0,0], height=1.0, wrapWidth=WrapAmount, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-5.0);
Ingredients1 = visual.TextStim(win=win, name='Ingredients1',
    text='default text',
    font='Arial',
    pos=[0,0], height=1.0, wrapWidth=100, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-6.0);
Ingredients2 = visual.TextStim(win=win, name='Ingredients2',
    text='default text',
    font='Arial',
    pos=[0,0], height=1.0, wrapWidth=100, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-7.0);
InstructionEndOfTrial = visual.TextStim(win=win, name='InstructionEndOfTrial',
    text='default text',
    font='Arial',
    pos=[0,0], height=1.0, wrapWidth=1.65, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-8.0);
TrialCounter = visual.TextStim(win=win, name='TrialCounter',
    text='default text',
    font='Arial',
    pos=[0,0], height=0.03, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-9.0);

# Initialize components for Routine "MidwayBreak"
MidwayBreakClock = core.Clock()
BreakText = visual.TextStim(win=win, name='BreakText',
    text="This is an optional break that will last for 3 minutes.\nIf you feel you don't need a break press space to continue with the experiment.",
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=WrapAmount, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
BreakContinue = keyboard.Keyboard()

# Initialize components for Routine "RatingInstr"
RatingInstrClock = core.Clock()
RatingInstrText = visual.TextStim(win=win, name='RatingInstrText',
    text='You are almost done!\nWe have 10 more quick questions asking you to rate some of the ingredients you just saw on those sandwiches.\nFor each ingredient, please use your mouse to rate it on a scale of 1 to 7, with 1 meaning you really do not like that ingredient, and 7 meaning you really like that ingredient.\nPress "space" to begin',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=WrapAmount, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
key_resp_2 = keyboard.Keyboard()

# Initialize components for Routine "Initialize_rating"
Initialize_ratingClock = core.Clock()

# Initialize components for Routine "IngredientRating"
IngredientRatingClock = core.Clock()
SliderDescription = visual.TextStim(win=win, name='SliderDescription',
    text='default text',
    font='Arial',
    pos=(0, .1), height=0.05, wrapWidth=WrapAmount, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
slider = visual.Slider(win=win, name='slider',
    size=(1.0, .1), pos=(0, -0.2), units=None,
    labels=['1','2','3','4','5','6','7'], ticks=(1, 2, 3, 4, 5, 6, 7),
    granularity=1, style=['rating'],
    color=[-1.000,-1.000,-1.000], font='HelveticaBold',
    flip=True)
key_resp_3 = keyboard.Keyboard()

# Initialize components for Routine "End"
EndClock = core.Clock()
text_2 = visual.TextStim(win=win, name='text_2',
    text="You must hit ENTER for your data to save and for you to automatically receive credit on SONA.\n\nIf you do not automatically receive credit for this study it will be granted to you within 3 business days.\n\nIf you have any follow up comments or questions please email roberjt1@uci.edu\n\nYou are now finished with this study and may hit enter to save your data. Once data is saved hit 'ok' on the box to be redirected to SONA.\n",
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=1.65, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
key_resp = keyboard.Keyboard()

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "Study_Info_Sheet"-------
# update component parameters for each repeat
Info_Cont.keys = []
Info_Cont.rt = []
# keep track of which components have finished
Study_Info_SheetComponents = [Info_Cont, TextHeader]
for thisComponent in Study_Info_SheetComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
Study_Info_SheetClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1
continueRoutine = True

# -------Run Routine "Study_Info_Sheet"-------
while continueRoutine:
    # get current time
    t = Study_Info_SheetClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=Study_Info_SheetClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *Info_Cont* updates
    waitOnFlip = False
    if Info_Cont.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Info_Cont.frameNStart = frameN  # exact frame index
        Info_Cont.tStart = t  # local t and not account for scr refresh
        Info_Cont.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Info_Cont, 'tStartRefresh')  # time at next scr refresh
        Info_Cont.status = STARTED
        # keyboard checking is just starting
    if Info_Cont.status == STARTED and not waitOnFlip:
        theseKeys = Info_Cont.getKeys(keyList=['space'], waitRelease=False)
        if len(theseKeys):
            theseKeys = theseKeys[0]  # at least one key was pressed
            
            # check for quit:
            if "escape" == theseKeys:
                endExpNow = True
            # a response ends the routine
            continueRoutine = False
    
    # *TextHeader* updates
    if TextHeader.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        TextHeader.frameNStart = frameN  # exact frame index
        TextHeader.tStart = t  # local t and not account for scr refresh
        TextHeader.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(TextHeader, 'tStartRefresh')  # time at next scr refresh
        TextHeader.setAutoDraw(True)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Study_Info_SheetComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Study_Info_Sheet"-------
for thisComponent in Study_Info_SheetComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('TextHeader.started', TextHeader.tStartRefresh)
thisExp.addData('TextHeader.stopped', TextHeader.tStopRefresh)
# the Routine "Study_Info_Sheet" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "Full_Info_Sheet"-------
# update component parameters for each repeat
InfoSheetTxt.setColor(TextColor, colorSpace='rgb')
key_resp_4.keys = []
key_resp_4.rt = []
# keep track of which components have finished
Full_Info_SheetComponents = [InfoSheetTxt, key_resp_4]
for thisComponent in Full_Info_SheetComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
Full_Info_SheetClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1
continueRoutine = True

# -------Run Routine "Full_Info_Sheet"-------
while continueRoutine:
    # get current time
    t = Full_Info_SheetClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=Full_Info_SheetClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *InfoSheetTxt* updates
    if InfoSheetTxt.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        InfoSheetTxt.frameNStart = frameN  # exact frame index
        InfoSheetTxt.tStart = t  # local t and not account for scr refresh
        InfoSheetTxt.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(InfoSheetTxt, 'tStartRefresh')  # time at next scr refresh
        InfoSheetTxt.setAutoDraw(True)
    
    # *key_resp_4* updates
    waitOnFlip = False
    if key_resp_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_4.frameNStart = frameN  # exact frame index
        key_resp_4.tStart = t  # local t and not account for scr refresh
        key_resp_4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_4, 'tStartRefresh')  # time at next scr refresh
        key_resp_4.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_4.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_4.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_4.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_4.getKeys(keyList=['space'], waitRelease=False)
        if len(theseKeys):
            theseKeys = theseKeys[0]  # at least one key was pressed
            
            # check for quit:
            if "escape" == theseKeys:
                endExpNow = True
            key_resp_4.keys = theseKeys.name  # just the last key pressed
            key_resp_4.rt = theseKeys.rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Full_Info_SheetComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Full_Info_Sheet"-------
for thisComponent in Full_Info_SheetComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('InfoSheetTxt.started', InfoSheetTxt.tStartRefresh)
thisExp.addData('InfoSheetTxt.stopped', InfoSheetTxt.tStopRefresh)
# check responses
if key_resp_4.keys in ['', [], None]:  # No response was made
    key_resp_4.keys = None
thisExp.addData('key_resp_4.keys',key_resp_4.keys)
if key_resp_4.keys != None:  # we had a response
    thisExp.addData('key_resp_4.rt', key_resp_4.rt)
thisExp.addData('key_resp_4.started', key_resp_4.tStartRefresh)
thisExp.addData('key_resp_4.stopped', key_resp_4.tStopRefresh)
thisExp.nextEntry()
# the Routine "Full_Info_Sheet" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "Instructions"-------
# update component parameters for each repeat
MainInstruction.setColor(TextColor, colorSpace='rgb')
Past_Instr.keys = []
Past_Instr.rt = []
# keep track of which components have finished
InstructionsComponents = [MainInstruction, Past_Instr]
for thisComponent in InstructionsComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
InstructionsClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1
continueRoutine = True

# -------Run Routine "Instructions"-------
while continueRoutine:
    # get current time
    t = InstructionsClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=InstructionsClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *MainInstruction* updates
    if MainInstruction.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        MainInstruction.frameNStart = frameN  # exact frame index
        MainInstruction.tStart = t  # local t and not account for scr refresh
        MainInstruction.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(MainInstruction, 'tStartRefresh')  # time at next scr refresh
        MainInstruction.setAutoDraw(True)
    
    # *Past_Instr* updates
    waitOnFlip = False
    if Past_Instr.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
        # keep track of start time/frame for later
        Past_Instr.frameNStart = frameN  # exact frame index
        Past_Instr.tStart = t  # local t and not account for scr refresh
        Past_Instr.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Past_Instr, 'tStartRefresh')  # time at next scr refresh
        Past_Instr.status = STARTED
        # keyboard checking is just starting
        win.callOnFlip(Past_Instr.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if Past_Instr.status == STARTED and not waitOnFlip:
        theseKeys = Past_Instr.getKeys(keyList=['space'], waitRelease=False)
        if len(theseKeys):
            theseKeys = theseKeys[0]  # at least one key was pressed
            
            # check for quit:
            if "escape" == theseKeys:
                endExpNow = True
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in InstructionsComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Instructions"-------
for thisComponent in InstructionsComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('MainInstruction.started', MainInstruction.tStartRefresh)
thisExp.addData('MainInstruction.stopped', MainInstruction.tStopRefresh)
# the Routine "Instructions" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "Instructions2"-------
# update component parameters for each repeat
MainInstruction_2.setColor(TextColor, colorSpace='rgb')
Past_Instr_2.keys = []
Past_Instr_2.rt = []
# keep track of which components have finished
Instructions2Components = [MainInstruction_2, Past_Instr_2]
for thisComponent in Instructions2Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
Instructions2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1
continueRoutine = True

# -------Run Routine "Instructions2"-------
while continueRoutine:
    # get current time
    t = Instructions2Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=Instructions2Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *MainInstruction_2* updates
    if MainInstruction_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        MainInstruction_2.frameNStart = frameN  # exact frame index
        MainInstruction_2.tStart = t  # local t and not account for scr refresh
        MainInstruction_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(MainInstruction_2, 'tStartRefresh')  # time at next scr refresh
        MainInstruction_2.setAutoDraw(True)
    
    # *Past_Instr_2* updates
    waitOnFlip = False
    if Past_Instr_2.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
        # keep track of start time/frame for later
        Past_Instr_2.frameNStart = frameN  # exact frame index
        Past_Instr_2.tStart = t  # local t and not account for scr refresh
        Past_Instr_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Past_Instr_2, 'tStartRefresh')  # time at next scr refresh
        Past_Instr_2.status = STARTED
        # keyboard checking is just starting
        win.callOnFlip(Past_Instr_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if Past_Instr_2.status == STARTED and not waitOnFlip:
        theseKeys = Past_Instr_2.getKeys(keyList=['space'], waitRelease=False)
        if len(theseKeys):
            theseKeys = theseKeys[0]  # at least one key was pressed
            
            # check for quit:
            if "escape" == theseKeys:
                endExpNow = True
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Instructions2Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Instructions2"-------
for thisComponent in Instructions2Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('MainInstruction_2.started', MainInstruction_2.tStartRefresh)
thisExp.addData('MainInstruction_2.stopped', MainInstruction_2.tStopRefresh)
# the Routine "Instructions2" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
VegQuestionLoop = data.TrialHandler(nReps=VegLoops, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='VegQuestionLoop')
thisExp.addLoop(VegQuestionLoop)  # add the loop to the experiment
thisVegQuestionLoop = VegQuestionLoop.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisVegQuestionLoop.rgb)
if thisVegQuestionLoop != None:
    for paramName in thisVegQuestionLoop:
        exec('{} = thisVegQuestionLoop[paramName]'.format(paramName))

for thisVegQuestionLoop in VegQuestionLoop:
    currentLoop = VegQuestionLoop
    # abbreviate parameter names if possible (e.g. rgb = thisVegQuestionLoop.rgb)
    if thisVegQuestionLoop != None:
        for paramName in thisVegQuestionLoop:
            exec('{} = thisVegQuestionLoop[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "VegQuestion"-------
    # update component parameters for each repeat
    VegQuestionText.setColor(TextColor, colorSpace='rgb')
    VegResp.keys = []
    VegResp.rt = []
    # keep track of which components have finished
    VegQuestionComponents = [VegQuestionText, VegResp]
    for thisComponent in VegQuestionComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    VegQuestionClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    continueRoutine = True
    
    # -------Run Routine "VegQuestion"-------
    while continueRoutine:
        # get current time
        t = VegQuestionClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=VegQuestionClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *VegQuestionText* updates
        if VegQuestionText.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            VegQuestionText.frameNStart = frameN  # exact frame index
            VegQuestionText.tStart = t  # local t and not account for scr refresh
            VegQuestionText.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(VegQuestionText, 'tStartRefresh')  # time at next scr refresh
            VegQuestionText.setAutoDraw(True)
        
        # *VegResp* updates
        waitOnFlip = False
        if VegResp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            VegResp.frameNStart = frameN  # exact frame index
            VegResp.tStart = t  # local t and not account for scr refresh
            VegResp.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(VegResp, 'tStartRefresh')  # time at next scr refresh
            VegResp.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(VegResp.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(VegResp.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if VegResp.status == STARTED and not waitOnFlip:
            theseKeys = VegResp.getKeys(keyList=['y', 'n'], waitRelease=False)
            if len(theseKeys):
                theseKeys = theseKeys[0]  # at least one key was pressed
                
                # check for quit:
                if "escape" == theseKeys:
                    endExpNow = True
                VegResp.keys = theseKeys.name  # just the last key pressed
                VegResp.rt = theseKeys.rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in VegQuestionComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "VegQuestion"-------
    for thisComponent in VegQuestionComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    VegQuestionLoop.addData('VegQuestionText.started', VegQuestionText.tStartRefresh)
    VegQuestionLoop.addData('VegQuestionText.stopped', VegQuestionText.tStopRefresh)
    # check responses
    if VegResp.keys in ['', [], None]:  # No response was made
        VegResp.keys = None
    VegQuestionLoop.addData('VegResp.keys',VegResp.keys)
    if VegResp.keys != None:  # we had a response
        VegQuestionLoop.addData('VegResp.rt', VegResp.rt)
    VegQuestionLoop.addData('VegResp.started', VegResp.tStartRefresh)
    VegQuestionLoop.addData('VegResp.stopped', VegResp.tStopRefresh)
    #Translate, just if statement, True to lower case
    if (VegResp.keys[0]=='y'):
        ConfirmText=str("You said you are a vegetarian, if this is correct press 'P', if you need to edit your selection press 'Q'")
    
    if(VegResp.keys[0]=='n'):
        ConfirmText=str("You said you are NOT a vegetarian, if this is correct press 'P', if you need to edit your selection press 'Q'")
    
    
    
    # the Routine "VegQuestion" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "VegConfirm"-------
    # update component parameters for each repeat
    text.setColor(TextColor, colorSpace='rgb')
    text.setText(ConfirmText)
    ConfirmResp.keys = []
    ConfirmResp.rt = []
    # keep track of which components have finished
    VegConfirmComponents = [text, ConfirmResp]
    for thisComponent in VegConfirmComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    VegConfirmClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    continueRoutine = True
    
    # -------Run Routine "VegConfirm"-------
    while continueRoutine:
        # get current time
        t = VegConfirmClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=VegConfirmClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text* updates
        if text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text.frameNStart = frameN  # exact frame index
            text.tStart = t  # local t and not account for scr refresh
            text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text, 'tStartRefresh')  # time at next scr refresh
            text.setAutoDraw(True)
        
        # *ConfirmResp* updates
        waitOnFlip = False
        if ConfirmResp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            ConfirmResp.frameNStart = frameN  # exact frame index
            ConfirmResp.tStart = t  # local t and not account for scr refresh
            ConfirmResp.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(ConfirmResp, 'tStartRefresh')  # time at next scr refresh
            ConfirmResp.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(ConfirmResp.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(ConfirmResp.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if ConfirmResp.status == STARTED and not waitOnFlip:
            theseKeys = ConfirmResp.getKeys(keyList=['p', 'q'], waitRelease=False)
            if len(theseKeys):
                theseKeys = theseKeys[0]  # at least one key was pressed
                
                # check for quit:
                if "escape" == theseKeys:
                    endExpNow = True
                ConfirmResp.keys = theseKeys.name  # just the last key pressed
                ConfirmResp.rt = theseKeys.rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in VegConfirmComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "VegConfirm"-------
    for thisComponent in VegConfirmComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    VegQuestionLoop.addData('text.started', text.tStartRefresh)
    VegQuestionLoop.addData('text.stopped', text.tStopRefresh)
    # check responses
    if ConfirmResp.keys in ['', [], None]:  # No response was made
        ConfirmResp.keys = None
    VegQuestionLoop.addData('ConfirmResp.keys',ConfirmResp.keys)
    if ConfirmResp.keys != None:  # we had a response
        VegQuestionLoop.addData('ConfirmResp.rt', ConfirmResp.rt)
    VegQuestionLoop.addData('ConfirmResp.started', ConfirmResp.tStartRefresh)
    VegQuestionLoop.addData('ConfirmResp.stopped', ConfirmResp.tStopRefresh)
    if (ConfirmResp.keys[0]== 'p'):
        if(VegResp.keys[0]=='y'):
            ConditionFile='CleanDataVeggie.csv'
            ConditionFile2='Top10IngsVeggie.csv'
        if(VegResp.keys[0]=='n'):
            ConditionFile='CleanDataMoreIng.csv'
            ConditionFile2='Top10IngsLong.csv'
        VegLoops=0
        VegQuestionLoop.finished=True 
    
    
    # the Routine "VegConfirm" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed VegLoops repeats of 'VegQuestionLoop'


# set up handler to look after randomisation of conditions etc
trials = data.TrialHandler(nReps=1, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions(ConditionFile),
    seed=None, name='trials')
thisExp.addLoop(trials)  # add the loop to the experiment
thisTrial = trials.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
if thisTrial != None:
    for paramName in thisTrial:
        exec('{} = thisTrial[paramName]'.format(paramName))

for thisTrial in trials:
    currentLoop = trials
    # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
    if thisTrial != None:
        for paramName in thisTrial:
            exec('{} = thisTrial[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "Initialize"-------
    # update component parameters for each repeat
    #Copy to JS
    MaxIng=IngsInRow
    Count=0
    TrialCount=TrialCount+1
    TakeBreak=0
    
    #Requires translation, see side
    if TrialCount== (NumOfTrials/2):
        TakeBreak=1
    
    #Requires changes, remove str
    filler=str('________________\n')
    tabs=str(' ')
    SandwichText1=[filler+str(tabs+s11)+str('\n')*7,filler+str(tabs+s11)+str('\n'+tabs)+str(s12)+str('\n')*6,filler+str(tabs+s11)+str('\n'+tabs)+str(s12)+str('\n'+tabs)+str(s13)+str('\n')*5,filler+str(tabs+s11)+str('\n'+tabs)+str(s12)+str('\n'+tabs)+str(s13)+str('\n'+tabs)+str(s14)+str('\n')*4,filler+str(tabs+s11)+str('\n'+tabs)+str(s12)+str('\n'+tabs)+str(s13)+str('\n'+tabs)+str(s14)+str('\n'+tabs)+str(s15)+str('\n')*3,filler+str(tabs+s11)+str('\n'+tabs)+str(s12)+str('\n'+tabs)+str(s13)+str('\n'+tabs)+str(s14)+str('\n'+tabs)+str(s15)+str('\n'+tabs)+str(s16)+str('\n')*2,filler+str(tabs+s11)+str('\n'+tabs)+str(s12)+str('\n'+tabs)+str(s13)+str('\n'+tabs)+str(s14)+str('\n'+tabs)+str(s15)+str('\n'+tabs)+str(s16)+str('\n'+tabs)+str(s17)+str('\n'+tabs),filler+str(tabs+s11)+str('\n'+tabs)+str(s12)+str('\n'+tabs)+str(s13)+str('\n'+tabs)+str(s14)+str('\n'+tabs)+str(s15)+str('\n'+tabs)+str(s16)+str('\n'+tabs)+str(s17)+str('\n'+tabs)+str(s18)]
    SandwichText2=[filler+str(tabs+s21)+str('\n')*7,filler+str(tabs+s21)+str('\n'+tabs)+str(s22)+str('\n')*6,filler+str(tabs+s21)+str('\n'+tabs)+str(s22)+str('\n'+tabs)+str(s23)+str('\n')*5,filler+str(tabs+s21)+str('\n'+tabs)+str(s22)+str('\n'+tabs)+str(s23)+str('\n'+tabs)+str(s24)+str('\n')*4,filler+str(tabs+s21)+str('\n'+tabs)+str(s22)+str('\n'+tabs)+str(s23)+str('\n'+tabs)+str(s24)+str('\n'+tabs)+str(s25)+str('\n')*3,filler+str(tabs+s21)+str('\n'+tabs)+str(s22)+str('\n'+tabs)+str(s23)+str('\n'+tabs)+str(s24)+str('\n'+tabs)+str(s25)+str('\n'+tabs)+str(s26)+str('\n')*2,filler+str(tabs+s21)+str('\n'+tabs)+str(s22)+str('\n'+tabs)+str(s23)+str('\n'+tabs)+str(s24)+str('\n'+tabs)+str(s25)+str('\n'+tabs)+str(s26)+str('\n'+tabs)+str(s27)+str('\n'+tabs),filler+str(tabs+s21)+str('\n'+tabs)+str(s22)+str('\n'+tabs)+str(s23)+str('\n'+tabs)+str(s24)+str('\n'+tabs)+str(s25)+str('\n'+tabs)+str(s26)+str('\n'+tabs)+str(s27)+str('\n'+tabs)+str(s28)]
    
    CountText='Trial: '+str(TrialCount)+' of '+str(NumOfTrials)
    
    
    # keep track of which components have finished
    InitializeComponents = []
    for thisComponent in InitializeComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    InitializeClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    continueRoutine = True
    
    # -------Run Routine "Initialize"-------
    while continueRoutine:
        # get current time
        t = InitializeClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=InitializeClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in InitializeComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "Initialize"-------
    for thisComponent in InitializeComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "Initialize" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    Iter = data.TrialHandler(nReps=1000, method='random', 
        extraInfo=expInfo, originPath=-1,
        trialList=[None],
        seed=None, name='Iter')
    thisExp.addLoop(Iter)  # add the loop to the experiment
    thisIter = Iter.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisIter.rgb)
    if thisIter != None:
        for paramName in thisIter:
            exec('{} = thisIter[paramName]'.format(paramName))
    
    for thisIter in Iter:
        currentLoop = Iter
        # abbreviate parameter names if possible (e.g. rgb = thisIter.rgb)
        if thisIter != None:
            for paramName in thisIter:
                exec('{} = thisIter[paramName]'.format(paramName))
        
        # ------Prepare to start Routine "PresentSandMain"-------
        # update component parameters for each repeat
        #Copy straight
        Count=Count+1
        
        #Translate to JS
        if Count <= MaxIng:
            InstructionText="Which of these two sandwiches would you rather order?\n"+"Press 'space' to see more ingredients.\nPress 'A' for Sandwich 1, press 'L' for Sandwich 2"+str('\n')
            InstructionAllIng=""
            if Flip[TrialCount-1]==0:
                if Count <= IngIn1:
                    IngText1=SandwichText1[Count-1]
                else:
                    IngText1=SandwichText1[IngIn1-1]
                if Count<=IngIn2:
                    IngText2=SandwichText2[Count-1]
                else:
                    IngText2=SandwichText2[IngIn2-1]
            else:
                if Count <= IngIn2:
                    IngText1=SandwichText2[Count-1]
                else:
                    IngText1=SandwichText2[IngIn2-1]
                if Count<=IngIn1:
                    IngText2=SandwichText1[Count-1]
                else:
                    IngText2=SandwichText1[IngIn1-1]
        
        
        if Count >= MaxIng:
            InstructionAllIng="All Ingredients presented"
        
        Decision.keys = []
        Decision.rt = []
        Sandwich1.setColor(TextColor, colorSpace='rgb')
        Sandwich1.setPos(Label1)
        Sandwich1.setHeight(SandLabelSize)
        Or.setColor(TextColor, colorSpace='rgb')
        Or.setPos(OrPos)
        Or.setHeight(OrSize)
        Sandwich2.setColor(TextColor, colorSpace='rgb')
        Sandwich2.setPos(Label2)
        Sandwich2.setHeight(SandLabelSize)
        Instr.setColor(TextColor, colorSpace='rgb')
        Instr.setPos(InstructionsMain)
        Instr.setText(InstructionText)
        Instr.setHeight(InstrSize)
        Ingredients1.setColor(TextColor, colorSpace='rgb')
        Ingredients1.setPos(LeftList)
        Ingredients1.setText(IngText1)
        Ingredients1.setHeight(IngSize)
        Ingredients2.setColor(TextColor, colorSpace='rgb')
        Ingredients2.setPos(RightList)
        Ingredients2.setText(IngText2)
        Ingredients2.setHeight(IngSize)
        InstructionEndOfTrial.setColor([1.000,-1.000,-1.000], colorSpace='rgb')
        InstructionEndOfTrial.setPos(InstructionsFinished)
        InstructionEndOfTrial.setText(InstructionAllIng)
        InstructionEndOfTrial.setHeight(InstrSize)
        TrialCounter.setColor(TextColor, colorSpace='rgb')
        TrialCounter.setPos(CounterPos)
        TrialCounter.setText(CountText)
        # keep track of which components have finished
        PresentSandMainComponents = [Decision, Sandwich1, Or, Sandwich2, Instr, Ingredients1, Ingredients2, InstructionEndOfTrial, TrialCounter]
        for thisComponent in PresentSandMainComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        PresentSandMainClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        continueRoutine = True
        
        # -------Run Routine "PresentSandMain"-------
        while continueRoutine:
            # get current time
            t = PresentSandMainClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=PresentSandMainClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *Decision* updates
            waitOnFlip = False
            if Decision.status == NOT_STARTED and tThisFlip >= .8-frameTolerance:
                # keep track of start time/frame for later
                Decision.frameNStart = frameN  # exact frame index
                Decision.tStart = t  # local t and not account for scr refresh
                Decision.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(Decision, 'tStartRefresh')  # time at next scr refresh
                Decision.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(Decision.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(Decision.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if Decision.status == STARTED and not waitOnFlip:
                theseKeys = Decision.getKeys(keyList=['a', 'l', 'space'], waitRelease=False)
                if len(theseKeys):
                    theseKeys = theseKeys[0]  # at least one key was pressed
                    
                    # check for quit:
                    if "escape" == theseKeys:
                        endExpNow = True
                    Decision.keys.append(theseKeys.name)  # storing all keys
                    Decision.rt.append(theseKeys.rt)
                    # a response ends the routine
                    continueRoutine = False
            
            # *Sandwich1* updates
            if Sandwich1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                Sandwich1.frameNStart = frameN  # exact frame index
                Sandwich1.tStart = t  # local t and not account for scr refresh
                Sandwich1.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(Sandwich1, 'tStartRefresh')  # time at next scr refresh
                Sandwich1.setAutoDraw(True)
            
            # *Or* updates
            if Or.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                Or.frameNStart = frameN  # exact frame index
                Or.tStart = t  # local t and not account for scr refresh
                Or.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(Or, 'tStartRefresh')  # time at next scr refresh
                Or.setAutoDraw(True)
            
            # *Sandwich2* updates
            if Sandwich2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                Sandwich2.frameNStart = frameN  # exact frame index
                Sandwich2.tStart = t  # local t and not account for scr refresh
                Sandwich2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(Sandwich2, 'tStartRefresh')  # time at next scr refresh
                Sandwich2.setAutoDraw(True)
            
            # *Instr* updates
            if Instr.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                Instr.frameNStart = frameN  # exact frame index
                Instr.tStart = t  # local t and not account for scr refresh
                Instr.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(Instr, 'tStartRefresh')  # time at next scr refresh
                Instr.setAutoDraw(True)
            
            # *Ingredients1* updates
            if Ingredients1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                Ingredients1.frameNStart = frameN  # exact frame index
                Ingredients1.tStart = t  # local t and not account for scr refresh
                Ingredients1.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(Ingredients1, 'tStartRefresh')  # time at next scr refresh
                Ingredients1.setAutoDraw(True)
            
            # *Ingredients2* updates
            if Ingredients2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                Ingredients2.frameNStart = frameN  # exact frame index
                Ingredients2.tStart = t  # local t and not account for scr refresh
                Ingredients2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(Ingredients2, 'tStartRefresh')  # time at next scr refresh
                Ingredients2.setAutoDraw(True)
            
            # *InstructionEndOfTrial* updates
            if InstructionEndOfTrial.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                InstructionEndOfTrial.frameNStart = frameN  # exact frame index
                InstructionEndOfTrial.tStart = t  # local t and not account for scr refresh
                InstructionEndOfTrial.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(InstructionEndOfTrial, 'tStartRefresh')  # time at next scr refresh
                InstructionEndOfTrial.setAutoDraw(True)
            
            # *TrialCounter* updates
            if TrialCounter.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                TrialCounter.frameNStart = frameN  # exact frame index
                TrialCounter.tStart = t  # local t and not account for scr refresh
                TrialCounter.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(TrialCounter, 'tStartRefresh')  # time at next scr refresh
                TrialCounter.setAutoDraw(True)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in PresentSandMainComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "PresentSandMain"-------
        for thisComponent in PresentSandMainComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        #Translate, just if statement, True to lower case
        if (Decision.keys[0]=='a') or (Decision.keys[0]=='l'):
                Iter.finished=True
        
        
        
        # check responses
        if Decision.keys in ['', [], None]:  # No response was made
            Decision.keys = None
        Iter.addData('Decision.keys',Decision.keys)
        if Decision.keys != None:  # we had a response
            Iter.addData('Decision.rt', Decision.rt)
        Iter.addData('Decision.started', Decision.tStartRefresh)
        Iter.addData('Decision.stopped', Decision.tStopRefresh)
        Iter.addData('Sandwich1.started', Sandwich1.tStartRefresh)
        Iter.addData('Sandwich1.stopped', Sandwich1.tStopRefresh)
        Iter.addData('Or.started', Or.tStartRefresh)
        Iter.addData('Or.stopped', Or.tStopRefresh)
        Iter.addData('Sandwich2.started', Sandwich2.tStartRefresh)
        Iter.addData('Sandwich2.stopped', Sandwich2.tStopRefresh)
        Iter.addData('Instr.started', Instr.tStartRefresh)
        Iter.addData('Instr.stopped', Instr.tStopRefresh)
        Iter.addData('Ingredients1.started', Ingredients1.tStartRefresh)
        Iter.addData('Ingredients1.stopped', Ingredients1.tStopRefresh)
        Iter.addData('Ingredients2.started', Ingredients2.tStartRefresh)
        Iter.addData('Ingredients2.stopped', Ingredients2.tStopRefresh)
        Iter.addData('InstructionEndOfTrial.started', InstructionEndOfTrial.tStartRefresh)
        Iter.addData('InstructionEndOfTrial.stopped', InstructionEndOfTrial.tStopRefresh)
        Iter.addData('TrialCounter.started', TrialCounter.tStartRefresh)
        Iter.addData('TrialCounter.stopped', TrialCounter.tStopRefresh)
        # the Routine "PresentSandMain" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
    # completed 1000 repeats of 'Iter'
    
    
    # set up handler to look after randomisation of conditions etc
    BreakConditional = data.TrialHandler(nReps=TakeBreak, method='random', 
        extraInfo=expInfo, originPath=-1,
        trialList=[None],
        seed=None, name='BreakConditional')
    thisExp.addLoop(BreakConditional)  # add the loop to the experiment
    thisBreakConditional = BreakConditional.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisBreakConditional.rgb)
    if thisBreakConditional != None:
        for paramName in thisBreakConditional:
            exec('{} = thisBreakConditional[paramName]'.format(paramName))
    
    for thisBreakConditional in BreakConditional:
        currentLoop = BreakConditional
        # abbreviate parameter names if possible (e.g. rgb = thisBreakConditional.rgb)
        if thisBreakConditional != None:
            for paramName in thisBreakConditional:
                exec('{} = thisBreakConditional[paramName]'.format(paramName))
        
        # ------Prepare to start Routine "MidwayBreak"-------
        routineTimer.add(181.000000)
        # update component parameters for each repeat
        BreakText.setColor(TextColor, colorSpace='rgb')
        BreakContinue.keys = []
        BreakContinue.rt = []
        # keep track of which components have finished
        MidwayBreakComponents = [BreakText, BreakContinue]
        for thisComponent in MidwayBreakComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        MidwayBreakClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        continueRoutine = True
        
        # -------Run Routine "MidwayBreak"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = MidwayBreakClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=MidwayBreakClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *BreakText* updates
            if BreakText.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                BreakText.frameNStart = frameN  # exact frame index
                BreakText.tStart = t  # local t and not account for scr refresh
                BreakText.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(BreakText, 'tStartRefresh')  # time at next scr refresh
                BreakText.setAutoDraw(True)
            if BreakText.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > BreakText.tStartRefresh + 180-frameTolerance:
                    # keep track of stop time/frame for later
                    BreakText.tStop = t  # not accounting for scr refresh
                    BreakText.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(BreakText, 'tStopRefresh')  # time at next scr refresh
                    BreakText.setAutoDraw(False)
            
            # *BreakContinue* updates
            waitOnFlip = False
            if BreakContinue.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
                # keep track of start time/frame for later
                BreakContinue.frameNStart = frameN  # exact frame index
                BreakContinue.tStart = t  # local t and not account for scr refresh
                BreakContinue.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(BreakContinue, 'tStartRefresh')  # time at next scr refresh
                BreakContinue.status = STARTED
                # keyboard checking is just starting
                win.callOnFlip(BreakContinue.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if BreakContinue.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > BreakContinue.tStartRefresh + 180-frameTolerance:
                    # keep track of stop time/frame for later
                    BreakContinue.tStop = t  # not accounting for scr refresh
                    BreakContinue.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(BreakContinue, 'tStopRefresh')  # time at next scr refresh
                    BreakContinue.status = FINISHED
            if BreakContinue.status == STARTED and not waitOnFlip:
                theseKeys = BreakContinue.getKeys(keyList=['space'], waitRelease=False)
                if len(theseKeys):
                    theseKeys = theseKeys[0]  # at least one key was pressed
                    
                    # check for quit:
                    if "escape" == theseKeys:
                        endExpNow = True
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in MidwayBreakComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "MidwayBreak"-------
        for thisComponent in MidwayBreakComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        BreakConditional.addData('BreakText.started', BreakText.tStartRefresh)
        BreakConditional.addData('BreakText.stopped', BreakText.tStopRefresh)
    # completed TakeBreak repeats of 'BreakConditional'
    
# completed 1 repeats of 'trials'


# ------Prepare to start Routine "RatingInstr"-------
# update component parameters for each repeat
RatingInstrText.setColor(TextColor, colorSpace='rgb')
key_resp_2.keys = []
key_resp_2.rt = []
# keep track of which components have finished
RatingInstrComponents = [RatingInstrText, key_resp_2]
for thisComponent in RatingInstrComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
RatingInstrClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1
continueRoutine = True

# -------Run Routine "RatingInstr"-------
while continueRoutine:
    # get current time
    t = RatingInstrClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=RatingInstrClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *RatingInstrText* updates
    if RatingInstrText.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        RatingInstrText.frameNStart = frameN  # exact frame index
        RatingInstrText.tStart = t  # local t and not account for scr refresh
        RatingInstrText.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(RatingInstrText, 'tStartRefresh')  # time at next scr refresh
        RatingInstrText.setAutoDraw(True)
    
    # *key_resp_2* updates
    waitOnFlip = False
    if key_resp_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_2.frameNStart = frameN  # exact frame index
        key_resp_2.tStart = t  # local t and not account for scr refresh
        key_resp_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_2, 'tStartRefresh')  # time at next scr refresh
        key_resp_2.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_2.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_2.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_2.getKeys(keyList=['space'], waitRelease=False)
        if len(theseKeys):
            theseKeys = theseKeys[0]  # at least one key was pressed
            
            # check for quit:
            if "escape" == theseKeys:
                endExpNow = True
            key_resp_2.keys = theseKeys.name  # just the last key pressed
            key_resp_2.rt = theseKeys.rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in RatingInstrComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "RatingInstr"-------
for thisComponent in RatingInstrComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('RatingInstrText.started', RatingInstrText.tStartRefresh)
thisExp.addData('RatingInstrText.stopped', RatingInstrText.tStopRefresh)
# check responses
if key_resp_2.keys in ['', [], None]:  # No response was made
    key_resp_2.keys = None
thisExp.addData('key_resp_2.keys',key_resp_2.keys)
if key_resp_2.keys != None:  # we had a response
    thisExp.addData('key_resp_2.rt', key_resp_2.rt)
thisExp.addData('key_resp_2.started', key_resp_2.tStartRefresh)
thisExp.addData('key_resp_2.stopped', key_resp_2.tStopRefresh)
thisExp.nextEntry()
# the Routine "RatingInstr" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
RatingLoop = data.TrialHandler(nReps=1, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions(ConditionFile2),
    seed=None, name='RatingLoop')
thisExp.addLoop(RatingLoop)  # add the loop to the experiment
thisRatingLoop = RatingLoop.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisRatingLoop.rgb)
if thisRatingLoop != None:
    for paramName in thisRatingLoop:
        exec('{} = thisRatingLoop[paramName]'.format(paramName))

for thisRatingLoop in RatingLoop:
    currentLoop = RatingLoop
    # abbreviate parameter names if possible (e.g. rgb = thisRatingLoop.rgb)
    if thisRatingLoop != None:
        for paramName in thisRatingLoop:
            exec('{} = thisRatingLoop[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "Initialize_rating"-------
    # update component parameters for each repeat
    # keep track of which components have finished
    Initialize_ratingComponents = []
    for thisComponent in Initialize_ratingComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    Initialize_ratingClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    continueRoutine = True
    
    # -------Run Routine "Initialize_rating"-------
    while continueRoutine:
        # get current time
        t = Initialize_ratingClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=Initialize_ratingClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in Initialize_ratingComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "Initialize_rating"-------
    for thisComponent in Initialize_ratingComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    SlideDescr="Rate your preference for "+str(ingredientforslider)+"\nfrom 1 (Strongly Dislike) to 4 (Neutral) to 7 (Strongly Like). Press space to confirm your choice."
    
    # the Routine "Initialize_rating" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "IngredientRating"-------
    # update component parameters for each repeat
    SliderDescription.setColor(TextColor, colorSpace='rgb')
    SliderDescription.setText(SlideDescr)
    slider.reset()
    key_resp_3.keys = []
    key_resp_3.rt = []
    # keep track of which components have finished
    IngredientRatingComponents = [SliderDescription, slider, key_resp_3]
    for thisComponent in IngredientRatingComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    IngredientRatingClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    continueRoutine = True
    
    # -------Run Routine "IngredientRating"-------
    while continueRoutine:
        # get current time
        t = IngredientRatingClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=IngredientRatingClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *SliderDescription* updates
        if SliderDescription.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            SliderDescription.frameNStart = frameN  # exact frame index
            SliderDescription.tStart = t  # local t and not account for scr refresh
            SliderDescription.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(SliderDescription, 'tStartRefresh')  # time at next scr refresh
            SliderDescription.setAutoDraw(True)
        
        # *slider* updates
        if slider.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            slider.frameNStart = frameN  # exact frame index
            slider.tStart = t  # local t and not account for scr refresh
            slider.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(slider, 'tStartRefresh')  # time at next scr refresh
            slider.setAutoDraw(True)
        
        # *key_resp_3* updates
        waitOnFlip = False
        if key_resp_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_3.frameNStart = frameN  # exact frame index
            key_resp_3.tStart = t  # local t and not account for scr refresh
            key_resp_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_3, 'tStartRefresh')  # time at next scr refresh
            key_resp_3.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_3.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_3.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_3.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_3.getKeys(keyList=['space'], waitRelease=False)
            if len(theseKeys):
                theseKeys = theseKeys[0]  # at least one key was pressed
                
                # check for quit:
                if "escape" == theseKeys:
                    endExpNow = True
                key_resp_3.keys = theseKeys.name  # just the last key pressed
                key_resp_3.rt = theseKeys.rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in IngredientRatingComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "IngredientRating"-------
    for thisComponent in IngredientRatingComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    RatingLoop.addData('SliderDescription.started', SliderDescription.tStartRefresh)
    RatingLoop.addData('SliderDescription.stopped', SliderDescription.tStopRefresh)
    RatingLoop.addData('slider.response', slider.getRating())
    RatingLoop.addData('slider.rt', slider.getRT())
    RatingLoop.addData('slider.started', slider.tStartRefresh)
    RatingLoop.addData('slider.stopped', slider.tStopRefresh)
    # check responses
    if key_resp_3.keys in ['', [], None]:  # No response was made
        key_resp_3.keys = None
    RatingLoop.addData('key_resp_3.keys',key_resp_3.keys)
    if key_resp_3.keys != None:  # we had a response
        RatingLoop.addData('key_resp_3.rt', key_resp_3.rt)
    RatingLoop.addData('key_resp_3.started', key_resp_3.tStartRefresh)
    RatingLoop.addData('key_resp_3.stopped', key_resp_3.tStopRefresh)
    # the Routine "IngredientRating" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1 repeats of 'RatingLoop'


# ------Prepare to start Routine "End"-------
# update component parameters for each repeat
text_2.setColor(TextColor, colorSpace='rgb')
key_resp.keys = []
key_resp.rt = []
# keep track of which components have finished
EndComponents = [text_2, key_resp]
for thisComponent in EndComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
EndClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1
continueRoutine = True

# -------Run Routine "End"-------
while continueRoutine:
    # get current time
    t = EndClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=EndClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_2* updates
    if text_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_2.frameNStart = frameN  # exact frame index
        text_2.tStart = t  # local t and not account for scr refresh
        text_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_2, 'tStartRefresh')  # time at next scr refresh
        text_2.setAutoDraw(True)
    
    # *key_resp* updates
    waitOnFlip = False
    if key_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp.frameNStart = frameN  # exact frame index
        key_resp.tStart = t  # local t and not account for scr refresh
        key_resp.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp, 'tStartRefresh')  # time at next scr refresh
        key_resp.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp.status == STARTED and not waitOnFlip:
        theseKeys = key_resp.getKeys(keyList=['return'], waitRelease=False)
        if len(theseKeys):
            theseKeys = theseKeys[0]  # at least one key was pressed
            
            # check for quit:
            if "escape" == theseKeys:
                endExpNow = True
            if key_resp.keys == []:  # then this was the first keypress
                key_resp.keys = theseKeys.name  # just the first key pressed
                key_resp.rt = theseKeys.rt
                # a response ends the routine
                continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in EndComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "End"-------
for thisComponent in EndComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_2.started', text_2.tStartRefresh)
thisExp.addData('text_2.stopped', text_2.tStopRefresh)
# check responses
if key_resp.keys in ['', [], None]:  # No response was made
    key_resp.keys = None
thisExp.addData('key_resp.keys',key_resp.keys)
if key_resp.keys != None:  # we had a response
    thisExp.addData('key_resp.rt', key_resp.rt)
thisExp.addData('key_resp.started', key_resp.tStartRefresh)
thisExp.addData('key_resp.stopped', key_resp.tStopRefresh)
thisExp.nextEntry()
# the Routine "End" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()
thisExp.addData('sequence',Flip)

# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()

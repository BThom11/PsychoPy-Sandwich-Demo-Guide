/********************** 
 * Sandwichstudy Test *
 **********************/

// init psychoJS:
var psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([1.0, 1.0, 1.0]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'SandwichStudy';  // from the Builder filename that created this script
let expInfo = {'participant': ''};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(Study_Info_SheetRoutineBegin);
flowScheduler.add(Study_Info_SheetRoutineEachFrame);
flowScheduler.add(Study_Info_SheetRoutineEnd);
flowScheduler.add(Full_Info_SheetRoutineBegin);
flowScheduler.add(Full_Info_SheetRoutineEachFrame);
flowScheduler.add(Full_Info_SheetRoutineEnd);
flowScheduler.add(InstructionsRoutineBegin);
flowScheduler.add(InstructionsRoutineEachFrame);
flowScheduler.add(InstructionsRoutineEnd);
flowScheduler.add(Instructions2RoutineBegin);
flowScheduler.add(Instructions2RoutineEachFrame);
flowScheduler.add(Instructions2RoutineEnd);
const VegQuestionLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(VegQuestionLoopLoopBegin, VegQuestionLoopLoopScheduler);
flowScheduler.add(VegQuestionLoopLoopScheduler);
flowScheduler.add(VegQuestionLoopLoopEnd);
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin, trialsLoopScheduler);
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(RatingInstrRoutineBegin);
flowScheduler.add(RatingInstrRoutineEachFrame);
flowScheduler.add(RatingInstrRoutineEnd);
const RatingLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(RatingLoopLoopBegin, RatingLoopLoopScheduler);
flowScheduler.add(RatingLoopLoopScheduler);
flowScheduler.add(RatingLoopLoopEnd);
flowScheduler.add(EndRoutineBegin);
flowScheduler.add(EndRoutineEachFrame);
flowScheduler.add(EndRoutineEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({expName, expInfo});

var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '3.2.4';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0/Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0/60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  psychoJS.setRedirectUrls(('https://uci.sona-systems.com/webstudy_credit.aspx?experiment_id=984&credit_token=79a52fb4afd94c29a4977992b5dbd297&survey_code=' + expInfo['participant']), 'https://uci.sona-systems.com/default.aspx?p_return_experiment_id=984');

  return Scheduler.Event.NEXT;
}

var Study_Info_SheetClock;
var TrialCount;
var NumOfTrials;
var ListX;
var ListY;
var LabelX;
var LabelY;
var InstructionsMain;
var InstructionsFinished;
var OrPos;
var LeftList;
var RightList;
var Label1;
var Label2;
var CounterPos;
var WrapAmount;
var VegLoops;
var TextColor;
var InstrSize;
var IngSize;
var SandLabelSize;
var OrSize;
var Flip;
var i;
var Info_Cont;
var TextHeader;
var Full_Info_SheetClock;
var InfoSheetTxt;
var key_resp_4;
var InstructionsClock;
var MainInstruction;
var Past_Instr;
var Instructions2Clock;
var MainInstruction_2;
var Past_Instr_2;
var VegQuestionClock;
var VegQuestionText;
var VegResp;
var VegConfirmClock;
var text;
var ConfirmResp;
var InitializeClock;
var PresentSandMainClock;
var Decision;
var Sandwich1;
var Or;
var Sandwich2;
var Instr;
var Ingredients1;
var Ingredients2;
var InstructionEndOfTrial;
var TrialCounter;
var MidwayBreakClock;
var BreakText;
var BreakContinue;
var RatingInstrClock;
var RatingInstrText;
var key_resp_2;
var Initialize_ratingClock;
var IngredientRatingClock;
var SliderDescription;
var slider;
var key_resp_3;
var EndClock;
var text_2;
var key_resp;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "Study_Info_Sheet"
  Study_Info_SheetClock = new util.Clock();
  TrialCount = 0;
  NumOfTrials = 80;
  ListX = 0.43;
  ListY = (- 0.17);
  LabelX = 0.43;
  LabelY = 0.16;
  InstructionsMain = [0, 0.35];
  InstructionsFinished = [0, 0.25];
  OrPos = [0, LabelY];
  LeftList = [(- ListX), ListY];
  RightList = [ListX, ListY];
  Label1 = [(- LabelX), LabelY];
  Label2 = [LabelX, LabelY];
  CounterPos = [0.75, (- 0.47)];
  WrapAmount = 1.55;
  VegLoops = 100;
  TextColor = [(- 1.0), (- 1.0), (- 1.0)];
  InstrSize = 0.06;
  IngSize = 0.06;
  SandLabelSize = 0.07;
  OrSize = 0.06;
  Flip=[]
  i=0
  for(i=0; i<NumOfTrials;i++){
      Flip[i]=Math.round(Math.random())
      psychoJS.experiment.addData('sequence', Flip)
      }
  Info_Cont = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
  
  TextHeader = new visual.TextStim({
    win: psychoJS.window,
    name: 'TextHeader',
    text: "Read through the Study Information on the following page and press 'space' to continue if you agree to participate.\nIf the edges of your screen are cutting off any of the text, press 'esc' once to leave full screen mode.\nIf you want to leave this study at any time, press 'esc' twice to leave full screen and be redirected to the SONA site. You will not receive credit if you leave early, but you can attempt the study again by emailing roberjt1@uci.edu\nPress 'space' to view the Study Information sheet\n",
    font: 'Arial',
    units : undefined, 
    pos: [0, 0.25], height: 0.038,  wrapWidth: 1.7, ori: 0,
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: 1,
    depth: -2.0 
  });
  
  // Initialize components for Routine "Full_Info_Sheet"
  Full_Info_SheetClock = new util.Clock();
  InfoSheetTxt = new visual.TextStim({
    win: psychoJS.window,
    name: 'InfoSheetTxt',
    text: "Inferring preferences in multiattribute decision making.\nLead Researcher: Robert Thomas Cognitive Sciences, (303)-250-4134, roberjt1@uci.edu\nFaculty Sponsor: Michael Lee, Professor, Cognitive Sciences, (949)-689-0864, mdlee@uci.edu \n• Please read the information below and ask questions about anything that you do not understand.  A researcher listed above will be available to answer your questions.\n• You are being asked to participate in a research study. Participation in this study is voluntary.  You may choose to skip a question or a study procedure. You may refuse to participate or discontinue your involvement at any time without penalty or loss of benefits.  You are free to withdraw from this study at any time. If you decide to withdraw from this study you should notify the research team immediately.\nWe would like you to complete an online questionnaire to learn more about how to measure individual’s preferences from the decisions they make. The questionnaire will last about 30 minutes or less. The questionnaire involves making a series of decisions about preferences for different prepared foods. You will be asked to select your preferred choice from the descriptions of two different options. The trial will begin with only a single ingredient presented, and you can either select one of the two options, or get more information by looking at another ingredient. After doing so two new options will be presented and this process will repeat for approximately 100 trials. After this series of trials, we will also ask you to rate 15 of the ingredients you saw in the questionnaire on a scale from 1 to 10 based on your preference for the ingredient.\n• Possible risks/discomforts associated with the study include getting bored or tired during the tasks. When you are halfway through the questionnaire you will be shown a screen indicating you can take a break for up to 3 minutes, although you are not required to take this break and can continue with the questionnaire at any time. \n• There are no direct benefits from participation in the study. However, this study may help to develop new models and methods for measuring individuals’ preferences, and a better understanding of how these preferences guide decision making.\n• All research data collected will be stored securely and confidentially. No audio tapes, video tapes, or pictures will be recorded or stored. All decision and response time data will be stored on secure servers hosted by https://pavlovia.org/docs/legal/terms and the Lead Researcher’s (Robert Thomas) password protected computer.  \n• Researchers will use your information to conduct this study. Once the study is done using your information, we may share them with other researchers so they can use them for other studies in the future. We will not share your name or any other private identifiable information that would let the researchers know who you are. We will not ask you for additional permission to share this information.\n• You will receive extra course credit for an eligible course through the UCI Social Ecology human subjects pool. You will receive a ½ unit of course credit for each ½ hour of participation in this study. Total amount of credit you may earn for this study is ½ credit. The course instructor offering extra course credit for participation in research must provide alternatives to earn extra course credit. The alternative assignment must require equal or less time and effort for the amount of extra credit that can be earned through participation in research. \n• Questions? If you have any comments, concerns, or questions regarding this study please contact the researchers listed at the top of this form. \n• If you have questions or concerns about your rights as a research participant, you can contact the UCI Institutional Review Board by phone, (949) 824-6662, by e-mail at IRB@research.uci.edu or at 141 Innovation, Suite 250, Irvine, CA 92697.\nWhat is an IRB?  An Institutional Review Board (IRB) is a committee made up of scientists and non-scientists. The IRB’s role is to protect the rights and welfare of human subjects involved in research. The IRB also assures that the research complies with applicable regulations, laws, and institutional policies. \n\nPress 'space' if you agree to participate and continue with the study.\n\n",
    font: 'Arial',
    units : undefined, 
    pos: [0, (- 0.02)], height: 0.023,  wrapWidth: 1.7, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_4 = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Instructions"
  InstructionsClock = new util.Clock();
  MainInstruction = new visual.TextStim({
    win: psychoJS.window,
    name: 'MainInstruction',
    text: 'Main Instructions:\nIn this study you will be asked about your preferences for different sandwiches!\n\nOn each trial you will be presented with the ingredients for two different sandwiches, and asked to indicate which sandwich you would prefer to order and eat. You cannot add or remove any ingredients from any of the sandwiches. The ingredients will only be the ingredients in the sandwich, not the bread the sandwich is on, so you can imagine that these sandwiches are on any type of bread you would like.\n\nThere will be 80 trials which involve making selections between these sandwiches, and there is a trial counter in the bottom right corner of the screen. When you are halfway through there will be an option for a 3 minute break if needed.\n\nThere are 40 different sandwiches, so you will only ever see the same sandwich two times in the whole study.\n\nPress "space" to continue\n',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: WrapAmount, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  Past_Instr = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Instructions2"
  Instructions2Clock = new util.Clock();
  MainInstruction_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'MainInstruction_2',
    text: 'On each trial, you will be presented only with the first ingredient of the two sandwiches. You can press "space" to get the next ingredient for each sandwich, or you can press "A" if you would prefer to eat Sandwich 1, or "L" if you would prefer to eat Sandwich 2.\n\nYou can continue to press "space" to reveal as many ingredients as you would like on each trial. A message will appear once all ingredients are shown on a trial. Every time you reveal a new ingredient, there will be a 1 second delay before you can reveal another ingredient or make your decision.\n\nYou are NOT required to view all ingredients for every sandwich, and may choose between the sandwiches with any number of ingredients presented. We encourage you to make a decision before viewing all ingredients if you strongly believe one sandwich is better than another, even if this is based on only a few ingredients. \n\nWhen you are ready to begin the study press "space".',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: WrapAmount, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  Past_Instr_2 = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "VegQuestion"
  VegQuestionClock = new util.Clock();
  VegQuestionText = new visual.TextStim({
    win: psychoJS.window,
    name: 'VegQuestionText',
    text: "Before trials begin, are you a vegetarian? Press 'Y' if you are a vegetarian, or press 'N' if you are NOT a vegetarian.\n\n(If you are a vegetarian we will only show you sandwiches without meat)",
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: WrapAmount, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  VegResp = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "VegConfirm"
  VegConfirmClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'default text',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: WrapAmount, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  ConfirmResp = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Initialize"
  InitializeClock = new util.Clock();
  // Initialize components for Routine "PresentSandMain"
  PresentSandMainClock = new util.Clock();
  Decision = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
  
  Sandwich1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Sandwich1',
    text: 'Sandwich 1',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  Or = new visual.TextStim({
    win: psychoJS.window,
    name: 'Or',
    text: 'or',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  Sandwich2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Sandwich2',
    text: 'Sandwich 2',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  Instr = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instr',
    text: 'default text',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: WrapAmount, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -5.0 
  });
  
  Ingredients1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Ingredients1',
    text: 'default text',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: 100, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -6.0 
  });
  
  Ingredients2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Ingredients2',
    text: 'default text',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: 100, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -7.0 
  });
  
  InstructionEndOfTrial = new visual.TextStim({
    win: psychoJS.window,
    name: 'InstructionEndOfTrial',
    text: 'default text',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: 1.65, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -8.0 
  });
  
  TrialCounter = new visual.TextStim({
    win: psychoJS.window,
    name: 'TrialCounter',
    text: 'default text',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -9.0 
  });
  
  // Initialize components for Routine "MidwayBreak"
  MidwayBreakClock = new util.Clock();
  BreakText = new visual.TextStim({
    win: psychoJS.window,
    name: 'BreakText',
    text: "This is an optional break that will last for 3 minutes.\nIf you feel you don't need a break press space to continue with the experiment.",
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: WrapAmount, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  BreakContinue = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "RatingInstr"
  RatingInstrClock = new util.Clock();
  RatingInstrText = new visual.TextStim({
    win: psychoJS.window,
    name: 'RatingInstrText',
    text: 'You are almost done!\nWe have 10 more quick questions asking you to rate some of the ingredients you just saw on those sandwiches.\nFor each ingredient, please use your mouse to rate it on a scale of 1 to 7, with 1 meaning you really do not like that ingredient, and 7 meaning you really like that ingredient.\nPress "space" to begin',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: WrapAmount, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Initialize_rating"
  Initialize_ratingClock = new util.Clock();
  // Initialize components for Routine "IngredientRating"
  IngredientRatingClock = new util.Clock();
  SliderDescription = new visual.TextStim({
    win: psychoJS.window,
    name: 'SliderDescription',
    text: 'default text',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0.1], height: 0.05,  wrapWidth: WrapAmount, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  slider = new visual.Slider({
    win: psychoJS.window, name: 'slider',
    size: [1.0, 0.1], pos: [0, (- 0.2)], units: 'height',
    labels: ['1', '2', '3', '4', '5', '6', '7'], ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 1, style: [visual.Slider.Style.RATING],
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), 
    fontFamily: 'HelveticaBold', bold: true, italic: false, 
    flip: true,
  });
  
  key_resp_3 = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "End"
  EndClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: "You must hit ENTER for your data to save and for you to automatically receive credit on SONA.\n\nIf you do not automatically receive credit for this study it will be granted to you within 3 business days.\n\nIf you have any follow up comments or questions please email roberjt1@uci.edu\n\nYou are now finished with this study and may hit enter to save your data. Once data is saved hit 'ok' on the box to be redirected to SONA.\n",
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: 1.65, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}

var t;
var frameN;
var Study_Info_SheetComponents;
function Study_Info_SheetRoutineBegin() {
  //------Prepare to start Routine 'Study_Info_Sheet'-------
  t = 0;
  Study_Info_SheetClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  Info_Cont.keys = undefined;
  Info_Cont.rt = undefined;
  // keep track of which components have finished
  Study_Info_SheetComponents = [];
  Study_Info_SheetComponents.push(Info_Cont);
  Study_Info_SheetComponents.push(TextHeader);
  
  Study_Info_SheetComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
     });
  
  return Scheduler.Event.NEXT;
}

var continueRoutine;
function Study_Info_SheetRoutineEachFrame() {
  //------Loop for each frame of Routine 'Study_Info_Sheet'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = Study_Info_SheetClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *Info_Cont* updates
  if (t >= 0.0 && Info_Cont.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    Info_Cont.tStart = t;  // (not accounting for frame time here)
    Info_Cont.frameNStart = frameN;  // exact frame index
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { Info_Cont.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { Info_Cont.start(); }); // start on screen flip
  }

  if (Info_Cont.status === PsychoJS.Status.STARTED) {
    let theseKeys = Info_Cont.getKeys({keyList: ['space'], waitRelease: false});
    
    // check for quit:
    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      // a response ends the routine
      continueRoutine = false;
    }
  }
  
  
  // *TextHeader* updates
  if (t >= 0.0 && TextHeader.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    TextHeader.tStart = t;  // (not accounting for frame time here)
    TextHeader.frameNStart = frameN;  // exact frame index
    TextHeader.setAutoDraw(true);
  }

  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  Study_Info_SheetComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
    }});
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function Study_Info_SheetRoutineEnd() {
  //------Ending Routine 'Study_Info_Sheet'-------
  Study_Info_SheetComponents.forEach( function(thisComponent) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }});
  // the Routine "Study_Info_Sheet" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var Full_Info_SheetComponents;
function Full_Info_SheetRoutineBegin() {
  //------Prepare to start Routine 'Full_Info_Sheet'-------
  t = 0;
  Full_Info_SheetClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  InfoSheetTxt.setColor(new util.Color(TextColor));
  key_resp_4.keys = undefined;
  key_resp_4.rt = undefined;
  // keep track of which components have finished
  Full_Info_SheetComponents = [];
  Full_Info_SheetComponents.push(InfoSheetTxt);
  Full_Info_SheetComponents.push(key_resp_4);
  
  Full_Info_SheetComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
     });
  
  return Scheduler.Event.NEXT;
}


function Full_Info_SheetRoutineEachFrame() {
  //------Loop for each frame of Routine 'Full_Info_Sheet'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = Full_Info_SheetClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *InfoSheetTxt* updates
  if (t >= 0.0 && InfoSheetTxt.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    InfoSheetTxt.tStart = t;  // (not accounting for frame time here)
    InfoSheetTxt.frameNStart = frameN;  // exact frame index
    InfoSheetTxt.setAutoDraw(true);
  }

  
  // *key_resp_4* updates
  if (t >= 0.0 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    key_resp_4.tStart = t;  // (not accounting for frame time here)
    key_resp_4.frameNStart = frameN;  // exact frame index
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { key_resp_4.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { key_resp_4.start(); }); // start on screen flip
    psychoJS.window.callOnFlip(function() { key_resp_4.clearEvents(); });
  }

  if (key_resp_4.status === PsychoJS.Status.STARTED) {
    let theseKeys = key_resp_4.getKeys({keyList: ['space'], waitRelease: false});
    
    // check for quit:
    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      key_resp_4.keys = theseKeys[0].name;  // just the last key pressed
      key_resp_4.rt = theseKeys[0].rt;
      // a response ends the routine
      continueRoutine = false;
    }
  }
  
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  Full_Info_SheetComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
    }});
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function Full_Info_SheetRoutineEnd() {
  //------Ending Routine 'Full_Info_Sheet'-------
  Full_Info_SheetComponents.forEach( function(thisComponent) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }});
  psychoJS.experiment.addData('key_resp_4.keys', key_resp_4.keys);
  if (typeof key_resp_4.keys !== undefined) {  // we had a response
      psychoJS.experiment.addData('key_resp_4.rt', key_resp_4.rt);
      routineTimer.reset();
      }
  
  key_resp_4.stop();
  // the Routine "Full_Info_Sheet" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var InstructionsComponents;
function InstructionsRoutineBegin() {
  //------Prepare to start Routine 'Instructions'-------
  t = 0;
  InstructionsClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  MainInstruction.setColor(new util.Color(TextColor));
  Past_Instr.keys = undefined;
  Past_Instr.rt = undefined;
  // keep track of which components have finished
  InstructionsComponents = [];
  InstructionsComponents.push(MainInstruction);
  InstructionsComponents.push(Past_Instr);
  
  InstructionsComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
     });
  
  return Scheduler.Event.NEXT;
}


function InstructionsRoutineEachFrame() {
  //------Loop for each frame of Routine 'Instructions'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = InstructionsClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *MainInstruction* updates
  if (t >= 0.0 && MainInstruction.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    MainInstruction.tStart = t;  // (not accounting for frame time here)
    MainInstruction.frameNStart = frameN;  // exact frame index
    MainInstruction.setAutoDraw(true);
  }

  
  // *Past_Instr* updates
  if (t >= 0 && Past_Instr.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    Past_Instr.tStart = t;  // (not accounting for frame time here)
    Past_Instr.frameNStart = frameN;  // exact frame index
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { Past_Instr.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { Past_Instr.start(); }); // start on screen flip
    psychoJS.window.callOnFlip(function() { Past_Instr.clearEvents(); });
  }

  if (Past_Instr.status === PsychoJS.Status.STARTED) {
    let theseKeys = Past_Instr.getKeys({keyList: ['space'], waitRelease: false});
    
    // check for quit:
    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      // a response ends the routine
      continueRoutine = false;
    }
  }
  
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  InstructionsComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
    }});
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function InstructionsRoutineEnd() {
  //------Ending Routine 'Instructions'-------
  InstructionsComponents.forEach( function(thisComponent) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }});
  // the Routine "Instructions" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var Instructions2Components;
function Instructions2RoutineBegin() {
  //------Prepare to start Routine 'Instructions2'-------
  t = 0;
  Instructions2Clock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  MainInstruction_2.setColor(new util.Color(TextColor));
  Past_Instr_2.keys = undefined;
  Past_Instr_2.rt = undefined;
  // keep track of which components have finished
  Instructions2Components = [];
  Instructions2Components.push(MainInstruction_2);
  Instructions2Components.push(Past_Instr_2);
  
  Instructions2Components.forEach( function(thisComponent) {
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
     });
  
  return Scheduler.Event.NEXT;
}


function Instructions2RoutineEachFrame() {
  //------Loop for each frame of Routine 'Instructions2'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = Instructions2Clock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *MainInstruction_2* updates
  if (t >= 0.0 && MainInstruction_2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    MainInstruction_2.tStart = t;  // (not accounting for frame time here)
    MainInstruction_2.frameNStart = frameN;  // exact frame index
    MainInstruction_2.setAutoDraw(true);
  }

  
  // *Past_Instr_2* updates
  if (t >= 0 && Past_Instr_2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    Past_Instr_2.tStart = t;  // (not accounting for frame time here)
    Past_Instr_2.frameNStart = frameN;  // exact frame index
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { Past_Instr_2.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { Past_Instr_2.start(); }); // start on screen flip
    psychoJS.window.callOnFlip(function() { Past_Instr_2.clearEvents(); });
  }

  if (Past_Instr_2.status === PsychoJS.Status.STARTED) {
    let theseKeys = Past_Instr_2.getKeys({keyList: ['space'], waitRelease: false});
    
    // check for quit:
    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      // a response ends the routine
      continueRoutine = false;
    }
  }
  
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  Instructions2Components.forEach( function(thisComponent) {
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
    }});
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function Instructions2RoutineEnd() {
  //------Ending Routine 'Instructions2'-------
  Instructions2Components.forEach( function(thisComponent) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }});
  // the Routine "Instructions2" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var VegQuestionLoop;
var currentLoop;
var trialIterator;
function VegQuestionLoopLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  VegQuestionLoop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: VegLoops, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'VegQuestionLoop'});
  psychoJS.experiment.addLoop(VegQuestionLoop); // add the loop to the experiment
  currentLoop = VegQuestionLoop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trialIterator = VegQuestionLoop[Symbol.iterator]();
  while(true) {
    let result = trialIterator.next();
    if (result.done);
      break;
    let thisVegQuestionLoop = result.value;
    thisScheduler.add(importConditions(VegQuestionLoop));
    thisScheduler.add(VegQuestionRoutineBegin);
    thisScheduler.add(VegQuestionRoutineEachFrame);
    thisScheduler.add(VegQuestionRoutineEnd);
    thisScheduler.add(VegConfirmRoutineBegin);
    thisScheduler.add(VegConfirmRoutineEachFrame);
    thisScheduler.add(VegConfirmRoutineEnd);
    thisScheduler.add(endLoopIteration({thisScheduler, isTrials : true}));
  }

  return Scheduler.Event.NEXT;
}


function VegQuestionLoopLoopEnd() {
  psychoJS.experiment.removeLoop(VegQuestionLoop);

  return Scheduler.Event.NEXT;
}

var trials;
function trialsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: ConditionFile,
    seed: undefined, name: 'trials'});
  psychoJS.experiment.addLoop(trials); // add the loop to the experiment
  currentLoop = trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trialIterator = trials[Symbol.iterator]();
  while(true) {
    let result = trialIterator.next();
    if (result.done);
      break;
    let thisTrial = result.value;
    thisScheduler.add(importConditions(trials));
    thisScheduler.add(InitializeRoutineBegin);
    thisScheduler.add(InitializeRoutineEachFrame);
    thisScheduler.add(InitializeRoutineEnd);
    const IterLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(IterLoopBegin, IterLoopScheduler);
    thisScheduler.add(IterLoopScheduler);
    thisScheduler.add(IterLoopEnd);
    const BreakConditionalLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(BreakConditionalLoopBegin, BreakConditionalLoopScheduler);
    thisScheduler.add(BreakConditionalLoopScheduler);
    thisScheduler.add(BreakConditionalLoopEnd);
    thisScheduler.add(endLoopIteration({thisScheduler, isTrials : false}));
  }

  return Scheduler.Event.NEXT;
}

var Iter;
function IterLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  Iter = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1000, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'Iter'});
  psychoJS.experiment.addLoop(Iter); // add the loop to the experiment
  currentLoop = Iter;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trialIterator = Iter[Symbol.iterator]();
  while(true) {
    let result = trialIterator.next();
    if (result.done);
      break;
    let thisIter = result.value;
    thisScheduler.add(importConditions(Iter));
    thisScheduler.add(PresentSandMainRoutineBegin);
    thisScheduler.add(PresentSandMainRoutineEachFrame);
    thisScheduler.add(PresentSandMainRoutineEnd);
    thisScheduler.add(endLoopIteration({thisScheduler, isTrials : true}));
  }

  return Scheduler.Event.NEXT;
}


function IterLoopEnd() {
  psychoJS.experiment.removeLoop(Iter);

  return Scheduler.Event.NEXT;
}

var BreakConditional;
function BreakConditionalLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  BreakConditional = new TrialHandler({
    psychoJS: psychoJS,
    nReps: TakeBreak, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'BreakConditional'});
  psychoJS.experiment.addLoop(BreakConditional); // add the loop to the experiment
  currentLoop = BreakConditional;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trialIterator = BreakConditional[Symbol.iterator]();
  while(true) {
    let result = trialIterator.next();
    if (result.done);
      break;
    let thisBreakConditional = result.value;
    thisScheduler.add(importConditions(BreakConditional));
    thisScheduler.add(MidwayBreakRoutineBegin);
    thisScheduler.add(MidwayBreakRoutineEachFrame);
    thisScheduler.add(MidwayBreakRoutineEnd);
    thisScheduler.add(endLoopIteration({thisScheduler, isTrials : false}));
  }

  return Scheduler.Event.NEXT;
}


function BreakConditionalLoopEnd() {
  psychoJS.experiment.removeLoop(BreakConditional);

  return Scheduler.Event.NEXT;
}


function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}

var RatingLoop;
function RatingLoopLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  RatingLoop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: ConditionFile2,
    seed: undefined, name: 'RatingLoop'});
  psychoJS.experiment.addLoop(RatingLoop); // add the loop to the experiment
  currentLoop = RatingLoop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trialIterator = RatingLoop[Symbol.iterator]();
  while(true) {
    let result = trialIterator.next();
    if (result.done);
      break;
    let thisRatingLoop = result.value;
    thisScheduler.add(importConditions(RatingLoop));
    thisScheduler.add(Initialize_ratingRoutineBegin);
    thisScheduler.add(Initialize_ratingRoutineEachFrame);
    thisScheduler.add(Initialize_ratingRoutineEnd);
    thisScheduler.add(IngredientRatingRoutineBegin);
    thisScheduler.add(IngredientRatingRoutineEachFrame);
    thisScheduler.add(IngredientRatingRoutineEnd);
    thisScheduler.add(endLoopIteration({thisScheduler, isTrials : true}));
  }

  return Scheduler.Event.NEXT;
}


function RatingLoopLoopEnd() {
  psychoJS.experiment.removeLoop(RatingLoop);

  return Scheduler.Event.NEXT;
}

var VegQuestionComponents;
function VegQuestionRoutineBegin() {
  //------Prepare to start Routine 'VegQuestion'-------
  t = 0;
  VegQuestionClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  VegQuestionText.setColor(new util.Color(TextColor));
  VegResp.keys = undefined;
  VegResp.rt = undefined;
  // keep track of which components have finished
  VegQuestionComponents = [];
  VegQuestionComponents.push(VegQuestionText);
  VegQuestionComponents.push(VegResp);
  
  VegQuestionComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
     });
  
  return Scheduler.Event.NEXT;
}


function VegQuestionRoutineEachFrame() {
  //------Loop for each frame of Routine 'VegQuestion'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = VegQuestionClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *VegQuestionText* updates
  if (t >= 0.0 && VegQuestionText.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    VegQuestionText.tStart = t;  // (not accounting for frame time here)
    VegQuestionText.frameNStart = frameN;  // exact frame index
    VegQuestionText.setAutoDraw(true);
  }

  
  // *VegResp* updates
  if (t >= 0.0 && VegResp.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    VegResp.tStart = t;  // (not accounting for frame time here)
    VegResp.frameNStart = frameN;  // exact frame index
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { VegResp.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { VegResp.start(); }); // start on screen flip
    psychoJS.window.callOnFlip(function() { VegResp.clearEvents(); });
  }

  if (VegResp.status === PsychoJS.Status.STARTED) {
    let theseKeys = VegResp.getKeys({keyList: ['y', 'n'], waitRelease: false});
    
    // check for quit:
    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      VegResp.keys = theseKeys[0].name;  // just the last key pressed
      VegResp.rt = theseKeys[0].rt;
      // a response ends the routine
      continueRoutine = false;
    }
  }
  
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  VegQuestionComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
    }});
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}

var ConfirmText;
function VegQuestionRoutineEnd() {
  //------Ending Routine 'VegQuestion'-------
  VegQuestionComponents.forEach( function(thisComponent) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }});
  psychoJS.experiment.addData('VegResp.keys', VegResp.keys);
  if (typeof VegResp.keys !== undefined) {  // we had a response
      psychoJS.experiment.addData('VegResp.rt', VegResp.rt);
      routineTimer.reset();
      }
  
  VegResp.stop();
  if ((VegResp.keys[0] === "y")) {
      ConfirmText = "You said you are a vegetarian, if this is correct press 'P', if you need to edit your selection press 'Q'".toString();
  }
  if ((VegResp.keys[0] === "n")) {
      ConfirmText = "You said you are NOT a vegetarian, if this is correct press 'P', if you need to edit your selection press 'Q'".toString();
  }
  
  // the Routine "VegQuestion" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var VegConfirmComponents;
function VegConfirmRoutineBegin() {
  //------Prepare to start Routine 'VegConfirm'-------
  t = 0;
  VegConfirmClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  text.setColor(new util.Color(TextColor));
  text.setText(ConfirmText);
  ConfirmResp.keys = undefined;
  ConfirmResp.rt = undefined;
  // keep track of which components have finished
  VegConfirmComponents = [];
  VegConfirmComponents.push(text);
  VegConfirmComponents.push(ConfirmResp);
  
  VegConfirmComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
     });
  
  return Scheduler.Event.NEXT;
}


function VegConfirmRoutineEachFrame() {
  //------Loop for each frame of Routine 'VegConfirm'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = VegConfirmClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *text* updates
  if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text.tStart = t;  // (not accounting for frame time here)
    text.frameNStart = frameN;  // exact frame index
    text.setAutoDraw(true);
  }

  
  // *ConfirmResp* updates
  if (t >= 0.0 && ConfirmResp.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    ConfirmResp.tStart = t;  // (not accounting for frame time here)
    ConfirmResp.frameNStart = frameN;  // exact frame index
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { ConfirmResp.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { ConfirmResp.start(); }); // start on screen flip
    psychoJS.window.callOnFlip(function() { ConfirmResp.clearEvents(); });
  }

  if (ConfirmResp.status === PsychoJS.Status.STARTED) {
    let theseKeys = ConfirmResp.getKeys({keyList: ['p', 'q'], waitRelease: false});
    
    // check for quit:
    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      ConfirmResp.keys = theseKeys[0].name;  // just the last key pressed
      ConfirmResp.rt = theseKeys[0].rt;
      // a response ends the routine
      continueRoutine = false;
    }
  }
  
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  VegConfirmComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
    }});
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}

var ConditionFile;
var ConditionFile2;
function VegConfirmRoutineEnd() {
  //------Ending Routine 'VegConfirm'-------
  VegConfirmComponents.forEach( function(thisComponent) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }});
  psychoJS.experiment.addData('ConfirmResp.keys', ConfirmResp.keys);
  if (typeof ConfirmResp.keys !== undefined) {  // we had a response
      psychoJS.experiment.addData('ConfirmResp.rt', ConfirmResp.rt);
      routineTimer.reset();
      }
  
  ConfirmResp.stop();
  if (ConfirmResp.keys[0]== 'p'){
      VegLoops=0
      if(VegResp.keys[0]=='y'){
          ConditionFile='CleanDataVeggie.csv'
          ConditionFile2='Top10IngsVeggie.csv'
          }
      if(VegResp.keys[0]=='n'){
          ConditionFile='CleanDataMoreIng.csv'
          ConditionFile2='Top10IngsLong.csv'
          }
      VegQuestionLoop.finished=true
      }
  
  
  // the Routine "VegConfirm" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var MaxIng;
var Count;
var TakeBreak;
var filler;
var tabs;
var SandwichText1;
var SandwichText2;
var CountText;
var InitializeComponents;
function InitializeRoutineBegin() {
  //------Prepare to start Routine 'Initialize'-------
  t = 0;
  InitializeClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  
  MaxIng=IngsInRow
  Count=0
  TrialCount=TrialCount+1
  TakeBreak=0
  
  if (TrialCount==(NumOfTrials/2)){
      TakeBreak=1
      }
  
  filler='________________\n'
  tabs=' '
  SandwichText1=[filler+tabs+s11+'\n\n\n\n\n\n\n',filler+tabs+s11+'\n'+tabs+s12+'\n\n\n\n\n\n',filler+tabs+s11+'\n'+tabs+s12+'\n'+tabs+s13+'\n\n\n\n\n',filler+tabs+s11+'\n'+tabs+s12+'\n'+tabs+s13+'\n'+tabs+s14+'\n\n\n\n',filler+tabs+s11+'\n'+tabs+s12+'\n'+tabs+s13+'\n'+tabs+s14+'\n'+tabs+s15+'\n\n\n',filler+tabs+s11+'\n'+tabs+s12+'\n'+tabs+s13+'\n'+tabs+s14+'\n'+tabs+s15+'\n'+tabs+s16+'\n\n',filler+tabs+s11+'\n'+tabs+s12+'\n'+tabs+s13+'\n'+tabs+s14+'\n'+tabs+s15+'\n'+tabs+s16+'\n'+tabs+s17+'\n'+tabs,filler+tabs+s11+'\n'+tabs+s12+'\n'+tabs+s13+'\n'+tabs+s14+'\n'+tabs+s15+'\n'+tabs+s16+'\n'+tabs+s17+'\n'+tabs+s18]
  SandwichText2=[filler+tabs+s21+'\n\n\n\n\n\n\n',filler+tabs+s21+'\n'+tabs+s22+'\n\n\n\n\n\n',filler+tabs+s21+'\n'+tabs+s22+'\n'+tabs+s23+'\n\n\n\n\n',filler+tabs+s21+'\n'+tabs+s22+'\n'+tabs+s23+'\n'+tabs+s24+'\n\n\n\n',filler+tabs+s21+'\n'+tabs+s22+'\n'+tabs+s23+'\n'+tabs+s24+'\n'+tabs+s25+'\n\n\n',filler+tabs+s21+'\n'+tabs+s22+'\n'+tabs+s23+'\n'+tabs+s24+'\n'+tabs+s25+'\n'+tabs+s26+'\n\n',filler+tabs+s21+'\n'+tabs+s22+'\n'+tabs+s23+'\n'+tabs+s24+'\n'+tabs+s25+'\n'+tabs+s26+'\n'+tabs+s27+'\n'+tabs,filler+tabs+s21+'\n'+tabs+s22+'\n'+tabs+s23+'\n'+tabs+s24+'\n'+tabs+s25+'\n'+tabs+s26+'\n'+tabs+s27+'\n'+tabs+s28]
  
  CountText='Trial: '+TrialCount+' of '+NumOfTrials
  
  // keep track of which components have finished
  InitializeComponents = [];
  
  InitializeComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
     });
  
  return Scheduler.Event.NEXT;
}


function InitializeRoutineEachFrame() {
  //------Loop for each frame of Routine 'Initialize'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = InitializeClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  InitializeComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
    }});
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function InitializeRoutineEnd() {
  //------Ending Routine 'Initialize'-------
  InitializeComponents.forEach( function(thisComponent) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }});
  // the Routine "Initialize" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var InstructionText;
var InstructionAllIng;
var IngText1;
var IngText2;
var PresentSandMainComponents;
function PresentSandMainRoutineBegin() {
  //------Prepare to start Routine 'PresentSandMain'-------
  t = 0;
  PresentSandMainClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  Count=Count+1
  
  if (Count <= MaxIng){
      InstructionText="Which of these two sandwiches would you rather order?\n"+"Press 'space' to see more ingredients.\nPress 'A' for Sandwich 1, press 'L' for Sandwich 2"+'\n'
      InstructionAllIng=""
      if (Flip[TrialCount-1]==0){
          if (Count <= IngIn1){
              IngText1=SandwichText1[Count-1]
          }else{
              IngText1=SandwichText1[IngIn1-1]
          }if (Count<=IngIn2){
              IngText2=SandwichText2[Count-1]
          }else {
              IngText2=SandwichText2[IngIn2-1]
              }
          }
      else {
          if (Count <= IngIn2){
              IngText1=SandwichText2[Count-1]
          }else{
              IngText1=SandwichText2[IngIn2-1]
              }
          if (Count<=IngIn1){
              IngText2=SandwichText1[Count-1]
          }else {
              IngText2=SandwichText1[IngIn1-1]
              }
          }
      }
  
  if (Count >= MaxIng){
      InstructionAllIng="All Ingredients presented"
      }
  
  
  Decision.keys = undefined;
  Decision.rt = undefined;
  Sandwich1.setColor(new util.Color(TextColor));
  Sandwich1.setPos(Label1);
  Sandwich1.setHeight(SandLabelSize);
  Or.setColor(new util.Color(TextColor));
  Or.setPos(OrPos);
  Or.setHeight(OrSize);
  Sandwich2.setColor(new util.Color(TextColor));
  Sandwich2.setPos(Label2);
  Sandwich2.setHeight(SandLabelSize);
  Instr.setColor(new util.Color(TextColor));
  Instr.setPos(InstructionsMain);
  Instr.setText(InstructionText);
  Instr.setHeight(InstrSize);
  Ingredients1.setColor(new util.Color(TextColor));
  Ingredients1.setPos(LeftList);
  Ingredients1.setText(IngText1);
  Ingredients1.setHeight(IngSize);
  Ingredients2.setColor(new util.Color(TextColor));
  Ingredients2.setPos(RightList);
  Ingredients2.setText(IngText2);
  Ingredients2.setHeight(IngSize);
  InstructionEndOfTrial.setColor(new util.Color([1.0, (- 1.0), (- 1.0)]));
  InstructionEndOfTrial.setPos(InstructionsFinished);
  InstructionEndOfTrial.setText(InstructionAllIng);
  InstructionEndOfTrial.setHeight(InstrSize);
  TrialCounter.setColor(new util.Color(TextColor));
  TrialCounter.setPos(CounterPos);
  TrialCounter.setText(CountText);
  // keep track of which components have finished
  PresentSandMainComponents = [];
  PresentSandMainComponents.push(Decision);
  PresentSandMainComponents.push(Sandwich1);
  PresentSandMainComponents.push(Or);
  PresentSandMainComponents.push(Sandwich2);
  PresentSandMainComponents.push(Instr);
  PresentSandMainComponents.push(Ingredients1);
  PresentSandMainComponents.push(Ingredients2);
  PresentSandMainComponents.push(InstructionEndOfTrial);
  PresentSandMainComponents.push(TrialCounter);
  
  PresentSandMainComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
     });
  
  return Scheduler.Event.NEXT;
}


function PresentSandMainRoutineEachFrame() {
  //------Loop for each frame of Routine 'PresentSandMain'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = PresentSandMainClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *Decision* updates
  if (t >= 0.8 && Decision.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    Decision.tStart = t;  // (not accounting for frame time here)
    Decision.frameNStart = frameN;  // exact frame index
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { Decision.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { Decision.start(); }); // start on screen flip
    psychoJS.window.callOnFlip(function() { Decision.clearEvents(); });
  }

  if (Decision.status === PsychoJS.Status.STARTED) {
    let theseKeys = Decision.getKeys({keyList: ['a', 'l', 'space'], waitRelease: false});
    
    // check for quit:
    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      Decision.keys = [].concat(Decision.keys, theseKeys[0].name).filter((i) => i !== undefined);  // storing all keys
      Decision.rt = [].concat(Decision.rt, theseKeys[0].rt).filter((i) => i !== undefined);
      // a response ends the routine
      continueRoutine = false;
    }
  }
  
  
  // *Sandwich1* updates
  if (t >= 0.0 && Sandwich1.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    Sandwich1.tStart = t;  // (not accounting for frame time here)
    Sandwich1.frameNStart = frameN;  // exact frame index
    Sandwich1.setAutoDraw(true);
  }

  
  // *Or* updates
  if (t >= 0.0 && Or.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    Or.tStart = t;  // (not accounting for frame time here)
    Or.frameNStart = frameN;  // exact frame index
    Or.setAutoDraw(true);
  }

  
  // *Sandwich2* updates
  if (t >= 0.0 && Sandwich2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    Sandwich2.tStart = t;  // (not accounting for frame time here)
    Sandwich2.frameNStart = frameN;  // exact frame index
    Sandwich2.setAutoDraw(true);
  }

  
  // *Instr* updates
  if (t >= 0.0 && Instr.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    Instr.tStart = t;  // (not accounting for frame time here)
    Instr.frameNStart = frameN;  // exact frame index
    Instr.setAutoDraw(true);
  }

  
  // *Ingredients1* updates
  if (t >= 0.0 && Ingredients1.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    Ingredients1.tStart = t;  // (not accounting for frame time here)
    Ingredients1.frameNStart = frameN;  // exact frame index
    Ingredients1.setAutoDraw(true);
  }

  
  // *Ingredients2* updates
  if (t >= 0.0 && Ingredients2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    Ingredients2.tStart = t;  // (not accounting for frame time here)
    Ingredients2.frameNStart = frameN;  // exact frame index
    Ingredients2.setAutoDraw(true);
  }

  
  // *InstructionEndOfTrial* updates
  if (t >= 0.0 && InstructionEndOfTrial.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    InstructionEndOfTrial.tStart = t;  // (not accounting for frame time here)
    InstructionEndOfTrial.frameNStart = frameN;  // exact frame index
    InstructionEndOfTrial.setAutoDraw(true);
  }

  
  // *TrialCounter* updates
  if (t >= 0.0 && TrialCounter.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    TrialCounter.tStart = t;  // (not accounting for frame time here)
    TrialCounter.frameNStart = frameN;  // exact frame index
    TrialCounter.setAutoDraw(true);
  }

  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  PresentSandMainComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
    }});
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function PresentSandMainRoutineEnd() {
  //------Ending Routine 'PresentSandMain'-------
  PresentSandMainComponents.forEach( function(thisComponent) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }});
  if (Decision.keys[0]=='a' || Decision.keys[0]=='l'){
      Iter.finished=true
      }
  psychoJS.experiment.addData('Decision.keys', Decision.keys);
  if (typeof Decision.keys !== undefined) {  // we had a response
      psychoJS.experiment.addData('Decision.rt', Decision.rt);
      routineTimer.reset();
      }
  
  Decision.stop();
  // the Routine "PresentSandMain" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var MidwayBreakComponents;
function MidwayBreakRoutineBegin() {
  //------Prepare to start Routine 'MidwayBreak'-------
  t = 0;
  MidwayBreakClock.reset(); // clock
  frameN = -1;
  routineTimer.add(181.000000);
  // update component parameters for each repeat
  BreakText.setColor(new util.Color(TextColor));
  BreakContinue.keys = undefined;
  BreakContinue.rt = undefined;
  // keep track of which components have finished
  MidwayBreakComponents = [];
  MidwayBreakComponents.push(BreakText);
  MidwayBreakComponents.push(BreakContinue);
  
  MidwayBreakComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
     });
  
  return Scheduler.Event.NEXT;
}

var frameRemains;
function MidwayBreakRoutineEachFrame() {
  //------Loop for each frame of Routine 'MidwayBreak'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = MidwayBreakClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *BreakText* updates
  if (t >= 0.0 && BreakText.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    BreakText.tStart = t;  // (not accounting for frame time here)
    BreakText.frameNStart = frameN;  // exact frame index
    BreakText.setAutoDraw(true);
  }

  frameRemains = 0.0 + 180 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (BreakText.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    BreakText.setAutoDraw(false);
  }
  
  // *BreakContinue* updates
  if (t >= 1 && BreakContinue.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    BreakContinue.tStart = t;  // (not accounting for frame time here)
    BreakContinue.frameNStart = frameN;  // exact frame index
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { BreakContinue.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { BreakContinue.start(); }); // start on screen flip
    psychoJS.window.callOnFlip(function() { BreakContinue.clearEvents(); });
  }

  frameRemains = 1 + 180 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (BreakContinue.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    BreakContinue.status = PsychoJS.Status.FINISHED;
  }

  if (BreakContinue.status === PsychoJS.Status.STARTED) {
    let theseKeys = BreakContinue.getKeys({keyList: ['space'], waitRelease: false});
    
    // check for quit:
    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      // a response ends the routine
      continueRoutine = false;
    }
  }
  
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  MidwayBreakComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
    }});
  
  // refresh the screen if continuing
  if (continueRoutine && routineTimer.getTime() > 0) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function MidwayBreakRoutineEnd() {
  //------Ending Routine 'MidwayBreak'-------
  MidwayBreakComponents.forEach( function(thisComponent) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }});
  return Scheduler.Event.NEXT;
}

var RatingInstrComponents;
function RatingInstrRoutineBegin() {
  //------Prepare to start Routine 'RatingInstr'-------
  t = 0;
  RatingInstrClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  RatingInstrText.setColor(new util.Color(TextColor));
  key_resp_2.keys = undefined;
  key_resp_2.rt = undefined;
  // keep track of which components have finished
  RatingInstrComponents = [];
  RatingInstrComponents.push(RatingInstrText);
  RatingInstrComponents.push(key_resp_2);
  
  RatingInstrComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
     });
  
  return Scheduler.Event.NEXT;
}


function RatingInstrRoutineEachFrame() {
  //------Loop for each frame of Routine 'RatingInstr'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = RatingInstrClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *RatingInstrText* updates
  if (t >= 0.0 && RatingInstrText.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    RatingInstrText.tStart = t;  // (not accounting for frame time here)
    RatingInstrText.frameNStart = frameN;  // exact frame index
    RatingInstrText.setAutoDraw(true);
  }

  
  // *key_resp_2* updates
  if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    key_resp_2.tStart = t;  // (not accounting for frame time here)
    key_resp_2.frameNStart = frameN;  // exact frame index
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
    psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
  }

  if (key_resp_2.status === PsychoJS.Status.STARTED) {
    let theseKeys = key_resp_2.getKeys({keyList: ['space'], waitRelease: false});
    
    // check for quit:
    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      key_resp_2.keys = theseKeys[0].name;  // just the last key pressed
      key_resp_2.rt = theseKeys[0].rt;
      // a response ends the routine
      continueRoutine = false;
    }
  }
  
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  RatingInstrComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
    }});
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function RatingInstrRoutineEnd() {
  //------Ending Routine 'RatingInstr'-------
  RatingInstrComponents.forEach( function(thisComponent) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }});
  psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
  if (typeof key_resp_2.keys !== undefined) {  // we had a response
      psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
      routineTimer.reset();
      }
  
  key_resp_2.stop();
  // the Routine "RatingInstr" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var Initialize_ratingComponents;
function Initialize_ratingRoutineBegin() {
  //------Prepare to start Routine 'Initialize_rating'-------
  t = 0;
  Initialize_ratingClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  // keep track of which components have finished
  Initialize_ratingComponents = [];
  
  Initialize_ratingComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
     });
  
  return Scheduler.Event.NEXT;
}


function Initialize_ratingRoutineEachFrame() {
  //------Loop for each frame of Routine 'Initialize_rating'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = Initialize_ratingClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  Initialize_ratingComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
    }});
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}

var holder;
var SlideDescr;
function Initialize_ratingRoutineEnd() {
  //------Ending Routine 'Initialize_rating'-------
  Initialize_ratingComponents.forEach( function(thisComponent) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }});
  holder=[ingredientforslider]
  SlideDescr="Rate your preference for "+ holder[0] +"\nfrom 1 (Strongly Dislike) to 4 (Neutral) to 7 (Strongly Like). Press space to confirm your choice"
  
  // the Routine "Initialize_rating" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var IngredientRatingComponents;
function IngredientRatingRoutineBegin() {
  //------Prepare to start Routine 'IngredientRating'-------
  t = 0;
  IngredientRatingClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  SliderDescription.setColor(new util.Color(TextColor));
  SliderDescription.setText(SlideDescr);
  slider.reset()
  key_resp_3.keys = undefined;
  key_resp_3.rt = undefined;
  // keep track of which components have finished
  IngredientRatingComponents = [];
  IngredientRatingComponents.push(SliderDescription);
  IngredientRatingComponents.push(slider);
  IngredientRatingComponents.push(key_resp_3);
  
  IngredientRatingComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
     });
  
  return Scheduler.Event.NEXT;
}


function IngredientRatingRoutineEachFrame() {
  //------Loop for each frame of Routine 'IngredientRating'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = IngredientRatingClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *SliderDescription* updates
  if (t >= 0.0 && SliderDescription.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    SliderDescription.tStart = t;  // (not accounting for frame time here)
    SliderDescription.frameNStart = frameN;  // exact frame index
    SliderDescription.setAutoDraw(true);
  }

  
  // *slider* updates
  if (t >= 0.0 && slider.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    slider.tStart = t;  // (not accounting for frame time here)
    slider.frameNStart = frameN;  // exact frame index
    slider.setAutoDraw(true);
  }

  
  // *key_resp_3* updates
  if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    key_resp_3.tStart = t;  // (not accounting for frame time here)
    key_resp_3.frameNStart = frameN;  // exact frame index
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
    psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
  }

  if (key_resp_3.status === PsychoJS.Status.STARTED) {
    let theseKeys = key_resp_3.getKeys({keyList: ['space'], waitRelease: false});
    
    // check for quit:
    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      key_resp_3.keys = theseKeys[0].name;  // just the last key pressed
      key_resp_3.rt = theseKeys[0].rt;
      // a response ends the routine
      continueRoutine = false;
    }
  }
  
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  IngredientRatingComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
    }});
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function IngredientRatingRoutineEnd() {
  //------Ending Routine 'IngredientRating'-------
  IngredientRatingComponents.forEach( function(thisComponent) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }});
  psychoJS.experiment.addData('slider.response', slider.getRating());
  psychoJS.experiment.addData('slider.rt', slider.getRT());
  psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
  if (typeof key_resp_3.keys !== undefined) {  // we had a response
      psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
      routineTimer.reset();
      }
  
  key_resp_3.stop();
  // the Routine "IngredientRating" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var EndComponents;
function EndRoutineBegin() {
  //------Prepare to start Routine 'End'-------
  t = 0;
  EndClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  text_2.setColor(new util.Color(TextColor));
  key_resp.keys = undefined;
  key_resp.rt = undefined;
  // keep track of which components have finished
  EndComponents = [];
  EndComponents.push(text_2);
  EndComponents.push(key_resp);
  
  EndComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
     });
  
  return Scheduler.Event.NEXT;
}


function EndRoutineEachFrame() {
  //------Loop for each frame of Routine 'End'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = EndClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *text_2* updates
  if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text_2.tStart = t;  // (not accounting for frame time here)
    text_2.frameNStart = frameN;  // exact frame index
    text_2.setAutoDraw(true);
  }

  
  // *key_resp* updates
  if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    key_resp.tStart = t;  // (not accounting for frame time here)
    key_resp.frameNStart = frameN;  // exact frame index
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
    psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
  }

  if (key_resp.status === PsychoJS.Status.STARTED) {
    let theseKeys = key_resp.getKeys({keyList: ['return'], waitRelease: false});
    
    // check for quit:
    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      if (key_resp.keys === undefined) {  // then this was the first keypress
        key_resp.keys = theseKeys[0].name;  // just the first key pressed
        key_resp.rt = theseKeys[0].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
  }
  
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  EndComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
    }});
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function EndRoutineEnd() {
  //------Ending Routine 'End'-------
  EndComponents.forEach( function(thisComponent) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }});
  psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
  if (typeof key_resp.keys !== undefined) {  // we had a response
      psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
      routineTimer.reset();
      }
  
  key_resp.stop();
  // the Routine "End" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}


function endLoopIteration({thisScheduler, isTrials=true}) {
  // ------Prepare for next entry------
  return function () {
    // ------Check if user ended loop early------
    if (currentLoop.finished) {
      // Check for and save orphaned data
      if (Object.keys(psychoJS.experiment._thisEntry).length > 0) {
        psychoJS.experiment.nextEntry();
      }
      thisScheduler.stop();
    } else if (isTrials) {
      psychoJS.experiment.nextEntry();
    }
  return Scheduler.Event.NEXT;
  };
}


function importConditions(loop) {
  const trialIndex = loop.getTrialIndex();
  return function () {
    loop.setTrialIndex(trialIndex);
    psychoJS.importAttributes(loop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (Object.keys(psychoJS.experiment._thisEntry).length > 0) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});

  return Scheduler.Event.QUIT;
}

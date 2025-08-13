import React, { useState } from 'react';
import './App.css';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { Progress } from './components/ui/progress';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './components/ui/dialog';
import { RadioGroup, RadioGroupItem } from './components/ui/radio-group';
import { Label } from './components/ui/label';
import { CheckCircle, XCircle, Monitor, Smartphone, Server, Cpu, HardDrive, MemoryStick, Zap, BookOpen, Trophy, Play } from 'lucide-react';

// Import images
import supercomputerImg from './assets/images/supercomputer.jpg';
import mainframeImg from './assets/images/mainframe_computer.jpg';
import minicomputerImg from './assets/images/minicomputer.jpg';
import workstationImg from './assets/images/workstation_computer.jpg';
import personalComputerImg from './assets/images/personal_computer.jpeg';
import laptopImg from './assets/images/laptop_computer.jpg';
import smartphoneImg from './assets/images/smartphone.jpg';
import tabletImg from './assets/images/tablet_computer.jpg';
import embeddedImg from './assets/images/embedded_system.jpg';
import analogImg from './assets/images/analog_computer.jpg';
import digitalImg from './assets/images/digital_computer.webp';
import hybridImg from './assets/images/hybrid_computer.jpg';
import cpuImg from './assets/images/cpu.jpg';
import ramImg from './assets/images/ram.png';
import hddImg from './assets/images/hard_drive.jpg';
import ssdImg from './assets/images/ssd.jpg';
import gpuImg from './assets/images/gpu.jpg';
import systemDiagramImg from './assets/images/computer_system_diagram.png';

const computerTypes = [
  {
    id: 'supercomputer',
    name: 'Supercomputer',
    image: supercomputerImg,
    description: 'Fastest and most expensive computers, capable of trillions of calculations per second.',
    uses: ['Scientific research', 'Weather forecasting', 'Cryptocurrency mining', 'Space exploration'],
    characteristics: ['Extremely fast processing', 'Very expensive', 'Used for complex calculations']
  },
  {
    id: 'mainframe',
    name: 'Mainframe Computer',
    image: mainframeImg,
    description: 'Large computers that support hundreds or thousands of users simultaneously.',
    uses: ['Banking systems', 'Airline reservations', 'Government databases', 'Large corporations'],
    characteristics: ['High storage capacity', 'Great performance', 'Supports many users', 'Runs 24/7']
  },
  {
    id: 'minicomputer',
    name: 'Minicomputer',
    image: minicomputerImg,
    description: 'Medium-sized multiprocessing computers that support 4 to 200 users.',
    uses: ['Department computing', 'Billing systems', 'Accounting', 'Inventory management'],
    characteristics: ['Medium size', 'Multiple processors', 'Less expensive than mainframes', 'Easy to carry']
  },
  {
    id: 'workstation',
    name: 'Workstation Computer',
    image: workstationImg,
    description: 'High-performance computers designed for technical and scientific applications.',
    uses: ['CAD design', 'Video editing', '3D modeling', 'Scientific simulations'],
    characteristics: ['High-performance CPU', 'Large RAM', 'Professional graphics', 'Single user']
  },
  {
    id: 'personal',
    name: 'Personal Computer',
    image: personalComputerImg,
    description: 'General-purpose computers designed for individual use.',
    uses: ['Home computing', 'Office work', 'Gaming', 'Education'],
    characteristics: ['Affordable', 'Easy to use', 'Compact size', 'Versatile']
  },
  {
    id: 'laptop',
    name: 'Laptop Computer',
    image: laptopImg,
    description: 'Portable personal computers with built-in screen, keyboard, and battery.',
    uses: ['Mobile computing', 'Business travel', 'Student work', 'Remote work'],
    characteristics: ['Portable', 'Built-in battery', 'Integrated components', 'Wireless connectivity']
  },
  {
    id: 'smartphone',
    name: 'Smartphone',
    image: smartphoneImg,
    description: 'Pocket-sized computers with communication capabilities.',
    uses: ['Communication', 'Internet browsing', 'Apps', 'Photography'],
    characteristics: ['Touch screen', 'Wireless communication', 'Multiple sensors', 'App ecosystem']
  },
  {
    id: 'tablet',
    name: 'Tablet Computer',
    image: tabletImg,
    description: 'Flat, portable computers with touch screen interfaces.',
    uses: ['Media consumption', 'Reading', 'Light productivity', 'Gaming'],
    characteristics: ['Large touch screen', 'Portable', 'Long battery life', 'App-based']
  }
];

const components = [
  {
    id: 'cpu',
    name: 'CPU (Central Processing Unit)',
    image: cpuImg,
    description: 'The "brain" of the computer that executes instructions and performs calculations.',
    specs: ['Clock Speed (GHz)', 'Number of Cores', 'Cache Size'],
    analogy: 'Like a chef in a kitchen - the speed of the chef (clock speed), number of hands (cores), and quick-access pantry (cache).',
    importance: 'Determines how fast your computer can process information and run programs.'
  },
  {
    id: 'ram',
    name: 'RAM (Random Access Memory)',
    image: ramImg,
    description: 'Temporary storage for data that the CPU is actively using.',
    specs: ['Capacity (GB)', 'Speed (MHz)', 'Type (DDR4, DDR5)'],
    analogy: 'Like a workbench - more space (capacity) means you can work on more projects, and faster access (speed) means you can grab tools quicker.',
    importance: 'More RAM allows you to run more programs simultaneously without slowing down.'
  },
  {
    id: 'storage',
    name: 'Storage Devices',
    image: hddImg,
    description: 'Permanent storage for your operating system, applications, and files.',
    specs: ['Capacity (GB/TB)', 'Type (HDD/SSD)', 'Speed (RPM for HDD)'],
    analogy: 'Like a filing cabinet - traditional filing (HDD) vs. digital filing system (SSD) that\'s much faster.',
    importance: 'Determines how much data you can store and how quickly your computer starts up and loads programs.'
  },
  {
    id: 'gpu',
    name: 'GPU (Graphics Processing Unit)',
    image: gpuImg,
    description: 'Specialized processor for rendering images, videos, and graphics.',
    specs: ['VRAM (GB)', 'Clock Speed', 'Processing Cores'],
    analogy: 'Like an artist - dedicated art studio (discrete GPU) vs. shared kitchen table (integrated GPU).',
    importance: 'Essential for gaming, video editing, and any graphics-intensive tasks.'
  }
];

const quizQuestions = [
  {
    id: 1,
    question: "Which component is known as the 'brain' of the computer?",
    options: ["RAM", "CPU", "GPU", "Hard Drive"],
    correct: 1,
    explanation: "The CPU (Central Processing Unit) is called the 'brain' because it executes instructions and performs calculations."
  },
  {
    id: 2,
    question: "What does RAM stand for?",
    options: ["Random Access Memory", "Rapid Access Memory", "Read Access Memory", "Real Access Memory"],
    correct: 0,
    explanation: "RAM stands for Random Access Memory, which provides temporary storage for active programs and data."
  },
  {
    id: 3,
    question: "Which storage type is faster?",
    options: ["HDD", "SSD", "Both are same", "Depends on brand"],
    correct: 1,
    explanation: "SSD (Solid State Drive) is much faster than HDD (Hard Disk Drive) because it uses flash memory instead of spinning disks."
  },
  {
    id: 4,
    question: "What is the main purpose of a GPU?",
    options: ["Store data", "Process graphics", "Connect to internet", "Cool the system"],
    correct: 1,
    explanation: "GPU (Graphics Processing Unit) is specialized for processing graphics, images, and videos."
  },
  {
    id: 5,
    question: "Which computer type supports the most users simultaneously?",
    options: ["Personal Computer", "Workstation", "Minicomputer", "Mainframe"],
    correct: 3,
    explanation: "Mainframe computers are designed to support hundreds or thousands of users simultaneously."
  }
];

function App() {
  const [activeTab, setActiveTab] = useState('introduction');
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleQuizAnswer = (questionId, answerIndex) => {
    setQuizAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };

  const submitQuiz = () => {
    let correctAnswers = 0;
    quizQuestions.forEach(question => {
      if (quizAnswers[question.id] === question.correct) {
        correctAnswers++;
      }
    });
    setScore(correctAnswers);
    setQuizSubmitted(true);
  };

  const resetQuiz = () => {
    setQuizAnswers({});
    setQuizSubmitted(false);
    setScore(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3">
            <Monitor className="text-blue-600" />
            Computer System Specifications
            <Cpu className="text-green-600" />
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Interactive Learning Platform for 10th Grade Students
          </p>
          <Badge variant="secondary" className="mt-2">
            Learn • Explore • Practice
          </Badge>
        </header>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="introduction" className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Introduction
            </TabsTrigger>
            <TabsTrigger value="types" className="flex items-center gap-2">
              <Server className="w-4 h-4" />
              Computer Types
            </TabsTrigger>
            <TabsTrigger value="components" className="flex items-center gap-2">
              <Cpu className="w-4 h-4" />
              Components
            </TabsTrigger>
            <TabsTrigger value="performance" className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Performance
            </TabsTrigger>
            <TabsTrigger value="quiz" className="flex items-center gap-2">
              <Trophy className="w-4 h-4" />
              Quiz
            </TabsTrigger>
          </TabsList>

          <TabsContent value="introduction" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Play className="text-blue-600" />
                  What is a Computer System?
                </CardTitle>
                <CardDescription>
                  Understanding the basics of computer systems and why specifications matter
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Definition</h3>
                    <p className="text-gray-700 leading-relaxed">
                      A computer system is an electronic device that processes data according to a set of instructions. 
                      It consists of hardware (physical components) and software (programs and applications) working together 
                      to perform various tasks.
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <img 
                      src={systemDiagramImg} 
                      alt="Computer System Diagram" 
                      className="max-w-full h-auto rounded-lg shadow-md"
                    />
                  </div>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-blue-800">Why Learn About Computer Specs?</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Make informed decisions when buying a computer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Understand why some computers are faster than others</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Choose the right computer for specific tasks (gaming, work, study)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Build a foundation for future technology learning</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="types" className="space-y-6">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Types of Computer Systems</CardTitle>
                  <CardDescription>
                    Computers come in various sizes and types, each designed for specific purposes
                  </CardDescription>
                </CardHeader>
              </Card>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {computerTypes.map((computer) => (
                  <Dialog key={computer.id}>
                    <DialogTrigger asChild>
                      <Card className="cursor-pointer hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform">
                        <CardHeader className="pb-3">
                          <div className="w-full h-48 overflow-hidden rounded-lg mb-3">
                            <img 
                              src={computer.image} 
                              alt={computer.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <CardTitle className="text-lg">{computer.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-600 line-clamp-3">
                            {computer.description}
                          </p>
                        </CardContent>
                      </Card>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle className="flex items-center gap-2">
                          <img 
                            src={computer.image} 
                            alt={computer.name}
                            className="w-12 h-12 object-cover rounded"
                          />
                          {computer.name}
                        </DialogTitle>
                        <DialogDescription className="text-base">
                          {computer.description}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Common Uses:</h4>
                          <div className="flex flex-wrap gap-2">
                            {computer.uses.map((use, index) => (
                              <Badge key={index} variant="outline">{use}</Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Key Characteristics:</h4>
                          <ul className="space-y-1">
                            {computer.characteristics.map((char, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                <span className="text-sm">{char}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="components" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Key Computer Components & Specifications</CardTitle>
                <CardDescription>
                  Understanding the main parts of a computer and their specifications
                </CardDescription>
              </CardHeader>
            </Card>

            <div className="grid gap-6">
              {components.map((component) => (
                <Card key={component.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-3 gap-0">
                      <div className="md:col-span-1">
                        <img 
                          src={component.image} 
                          alt={component.name}
                          className="w-full h-64 md:h-full object-cover"
                        />
                      </div>
                      <div className="md:col-span-2 p-6">
                        <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                          {component.id === 'cpu' && <Cpu className="text-blue-600" />}
                          {component.id === 'ram' && <MemoryStick className="text-green-600" />}
                          {component.id === 'storage' && <HardDrive className="text-purple-600" />}
                          {component.id === 'gpu' && <Monitor className="text-red-600" />}
                          {component.name}
                        </h3>
                        <p className="text-gray-700 mb-4">{component.description}</p>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold mb-2">Key Specifications:</h4>
                            <ul className="space-y-1">
                              {component.specs.map((spec, index) => (
                                <li key={index} className="flex items-center gap-2">
                                  <Badge variant="secondary" className="text-xs">{spec}</Badge>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Why It Matters:</h4>
                            <p className="text-sm text-gray-600">{component.importance}</p>
                          </div>
                        </div>
                        
                        <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                          <h4 className="font-semibold mb-1 text-yellow-800">Simple Analogy:</h4>
                          <p className="text-sm text-yellow-700">{component.analogy}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="performance" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>How Specs Affect Performance</CardTitle>
                <CardDescription>
                  Understanding which components matter for different tasks
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="border-2 border-red-200 bg-red-50">
                    <CardHeader>
                      <CardTitle className="text-red-800 flex items-center gap-2">
                        <Play className="w-5 h-5" />
                        Gaming
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">GPU Importance</span>
                            <span className="text-sm">95%</span>
                          </div>
                          <Progress value={95} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">CPU Importance</span>
                            <span className="text-sm">75%</span>
                          </div>
                          <Progress value={75} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">RAM Importance</span>
                            <span className="text-sm">70%</span>
                          </div>
                          <Progress value={70} className="h-2" />
                        </div>
                        <p className="text-xs text-gray-600 mt-2">
                          Gaming requires a powerful GPU for smooth graphics, fast CPU for game logic, and sufficient RAM.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-blue-200 bg-blue-50">
                    <CardHeader>
                      <CardTitle className="text-blue-800 flex items-center gap-2">
                        <Monitor className="w-5 h-5" />
                        Video Editing
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">CPU Importance</span>
                            <span className="text-sm">90%</span>
                          </div>
                          <Progress value={90} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">RAM Importance</span>
                            <span className="text-sm">85%</span>
                          </div>
                          <Progress value={85} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">SSD Importance</span>
                            <span className="text-sm">80%</span>
                          </div>
                          <Progress value={80} className="h-2" />
                        </div>
                        <p className="text-xs text-gray-600 mt-2">
                          Video editing needs powerful CPU for processing, lots of RAM for large files, and fast SSD storage.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-green-200 bg-green-50">
                    <CardHeader>
                      <CardTitle className="text-green-800 flex items-center gap-2">
                        <BookOpen className="w-5 h-5" />
                        Everyday Use
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">SSD Importance</span>
                            <span className="text-sm">80%</span>
                          </div>
                          <Progress value={80} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">RAM Importance</span>
                            <span className="text-sm">60%</span>
                          </div>
                          <Progress value={60} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">CPU Importance</span>
                            <span className="text-sm">50%</span>
                          </div>
                          <Progress value={50} className="h-2" />
                        </div>
                        <p className="text-xs text-gray-600 mt-2">
                          For browsing, documents, and basic tasks, an SSD makes the biggest difference in responsiveness.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="quiz" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="text-yellow-600" />
                  Test Your Knowledge
                </CardTitle>
                <CardDescription>
                  Take this quiz to see how much you've learned about computer specifications
                </CardDescription>
              </CardHeader>
              <CardContent>
                {!quizSubmitted ? (
                  <div className="space-y-6">
                    {quizQuestions.map((question) => (
                      <Card key={question.id} className="border-l-4 border-l-blue-500">
                        <CardHeader>
                          <CardTitle className="text-lg">
                            Question {question.id}: {question.question}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <RadioGroup
                            value={quizAnswers[question.id]?.toString()}
                            onValueChange={(value) => handleQuizAnswer(question.id, parseInt(value))}
                          >
                            {question.options.map((option, index) => (
                              <div key={index} className="flex items-center space-x-2">
                                <RadioGroupItem value={index.toString()} id={`q${question.id}-${index}`} />
                                <Label htmlFor={`q${question.id}-${index}`} className="cursor-pointer">
                                  {option}
                                </Label>
                              </div>
                            ))}
                          </RadioGroup>
                        </CardContent>
                      </Card>
                    ))}
                    
                    <div className="flex justify-center">
                      <Button 
                        onClick={submitQuiz}
                        disabled={Object.keys(quizAnswers).length !== quizQuestions.length}
                        className="px-8 py-2"
                      >
                        Submit Quiz
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">
                        {score}/{quizQuestions.length}
                      </div>
                      <div className="text-xl mb-4">
                        You scored {Math.round((score / quizQuestions.length) * 100)}%!
                      </div>
                      <Progress value={(score / quizQuestions.length) * 100} className="w-64 mx-auto mb-4" />
                      <Badge variant={score >= 4 ? "default" : score >= 3 ? "secondary" : "destructive"} className="text-lg px-4 py-1">
                        {score >= 4 ? "Excellent!" : score >= 3 ? "Good Job!" : "Keep Learning!"}
                      </Badge>
                    </div>

                    <div className="space-y-4">
                      {quizQuestions.map((question) => {
                        const userAnswer = quizAnswers[question.id];
                        const isCorrect = userAnswer === question.correct;
                        
                        return (
                          <Card key={question.id} className={`border-l-4 ${isCorrect ? 'border-l-green-500 bg-green-50' : 'border-l-red-500 bg-red-50'}`}>
                            <CardHeader>
                              <CardTitle className="text-lg flex items-center gap-2">
                                {isCorrect ? (
                                  <CheckCircle className="text-green-600" />
                                ) : (
                                  <XCircle className="text-red-600" />
                                )}
                                Question {question.id}: {question.question}
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="space-y-2">
                                <p className="font-medium">
                                  Your answer: <span className={isCorrect ? 'text-green-700' : 'text-red-700'}>
                                    {question.options[userAnswer]}
                                  </span>
                                </p>
                                {!isCorrect && (
                                  <p className="font-medium">
                                    Correct answer: <span className="text-green-700">
                                      {question.options[question.correct]}
                                    </span>
                                  </p>
                                )}
                                <p className="text-sm text-gray-600 bg-white p-2 rounded">
                                  <strong>Explanation:</strong> {question.explanation}
                                </p>
                              </div>
                            </CardContent>
                          </Card>
                        );
                      })}
                    </div>

                    <div className="flex justify-center">
                      <Button onClick={resetQuiz} variant="outline">
                        Take Quiz Again
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <footer className="mt-12 text-center text-gray-600">
          <p className="text-sm">
            Interactive Computer Specifications Learning Platform • Designed for 10th Grade Students
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;

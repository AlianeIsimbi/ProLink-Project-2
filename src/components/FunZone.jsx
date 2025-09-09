import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Gamepad2, 
  Puzzle, 
  Trophy, 
  Star, 
  RotateCcw, 
  CheckCircle, 
  XCircle,
  Lightbulb,
  Target,
  Zap,
  Brain,
  Award
} from 'lucide-react';

export function FunZone() {
  const [activeGame, setActiveGame] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [gameActive, setGameActive] = useState(false);

  const games = [
    {
      id: 'memory',
      name: 'Memory Match',
      description: 'Test your memory with TVET-related cards',
      icon: Brain,
      color: 'bg-gradient-to-r from-blue-500 to-blue-600',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=200&fit=crop',
      bgColor: 'from-blue-50 to-blue-100'
    },
    {
      id: 'quiz',
      name: 'TVET Quiz',
      description: 'Answer questions about technical education',
      icon: Puzzle,
      color: 'bg-gradient-to-r from-green-500 to-green-600',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop',
      bgColor: 'from-green-50 to-green-100'
    },
    {
      id: 'typing',
      name: 'Speed Typing',
      description: 'Type technical terms as fast as you can',
      icon: Zap,
      color: 'bg-gradient-to-r from-purple-500 to-purple-600',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85b504dc?w=400&h=200&fit=crop',
      bgColor: 'from-purple-50 to-purple-100'
    },
    {
      id: 'wordsearch',
      name: 'Word Search',
      description: 'Find TVET-related words in the grid',
      icon: Target,
      color: 'bg-gradient-to-r from-orange-500 to-orange-600',
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=200&fit=crop',
      bgColor: 'from-orange-50 to-orange-100'
    }
  ];

  const [memoryCards, setMemoryCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  const tvetTerms = [
    'Engineering', 'Technology', 'Healthcare', 'Agriculture', 'Construction',
    'Automotive', 'Electrical', 'Mechanical', 'Computer', 'Nursing',
    'Welding', 'Carpentry', 'Plumbing', 'HVAC', 'Robotics'
  ];

  const quizQuestions = [
    {
      question: "What does TVET stand for?",
      options: ["Technical and Vocational Education and Training", "Technology and Vocational Education Training", "Technical Vocational Education Technology", "Training and Vocational Education Technology"],
      correct: 0
    },
    {
      question: "Which field is NOT typically part of TVET?",
      options: ["Software Development", "Advanced Theoretical Physics", "Automotive Repair", "Healthcare Assistance"],
      correct: 1
    },
    {
      question: "What is the main goal of TVET programs?",
      options: ["Academic Research", "Practical Skills for Employment", "Theoretical Knowledge", "General Education"],
      correct: 1
    }
  ];

  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const [typingText, setTypingText] = useState('');
  const [typingInput, setTypingInput] = useState('');
  const [typingStartTime, setTypingStartTime] = useState(null);
  const [typingWPM, setTypingWPM] = useState(0);

  const [wordSearchGrid, setWordSearchGrid] = useState([]);
  const [foundWords, setFoundWords] = useState([]);
  const [selectedCells, setSelectedCells] = useState([]);

  // Memory Game
  const initializeMemoryGame = () => {
    const pairs = tvetTerms.slice(0, 8).map((term, index) => [
      { id: `${index}-1`, term, matched: false },
      { id: `${index}-2`, term, matched: false }
    ]).flat();
    
    const shuffled = pairs.sort(() => Math.random() - 0.5);
    setMemoryCards(shuffled);
    setFlippedCards([]);
    setMatchedCards([]);
  };

  const handleCardClick = (cardId) => {
    if (flippedCards.length >= 2 || flippedCards.includes(cardId) || matchedCards.includes(cardId)) return;

    const newFlipped = [...flippedCards, cardId];
    setFlippedCards(newFlipped);

    if (newFlipped.length === 2) {
      const [first, second] = newFlipped;
      const firstCard = memoryCards.find(c => c.id === first);
      const secondCard = memoryCards.find(c => c.id === second);

      if (firstCard.term === secondCard.term) {
        setMatchedCards([...matchedCards, first, second]);
        setScore(score + 10);
        setFlippedCards([]);
      } else {
        setTimeout(() => {
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  // Quiz Game
  const startQuiz = () => {
    setCurrentQuiz(0);
    setQuizScore(0);
    setSelectedAnswer(null);
  };

  const handleQuizAnswer = (answerIndex) => {
    setSelectedAnswer(answerIndex);
    if (answerIndex === quizQuestions[currentQuiz].correct) {
      setQuizScore(quizScore + 1);
    }
  };

  const nextQuizQuestion = () => {
    if (currentQuiz < quizQuestions.length - 1) {
      setCurrentQuiz(currentQuiz + 1);
      setSelectedAnswer(null);
    } else {
      setActiveGame(null);
    }
  };

  // Typing Game
  const startTypingGame = () => {
    const randomTerm = tvetTerms[Math.floor(Math.random() * tvetTerms.length)];
    setTypingText(randomTerm);
    setTypingInput('');
    setTypingStartTime(Date.now());
  };

  const handleTypingInput = (e) => {
    const input = e.target.value;
    setTypingInput(input);
    
    if (input === typingText) {
      const timeTaken = (Date.now() - typingStartTime) / 1000 / 60; // minutes
      const wpm = Math.round((typingText.length / 5) / timeTaken);
      setTypingWPM(wpm);
      setScore(score + wpm);
      setTimeout(() => {
        startTypingGame();
      }, 1000);
    }
  };

  // Word Search Game
  const initializeWordSearch = () => {
    const words = tvetTerms.slice(0, 5);
    const gridSize = 10;
    const grid = Array(gridSize).fill().map(() => Array(gridSize).fill(''));
    
    // Place words horizontally
    words.forEach((word, index) => {
      const row = index * 2;
      const col = Math.floor(Math.random() * (gridSize - word.length));
      for (let i = 0; i < word.length; i++) {
        grid[row][col + i] = word[i].toUpperCase();
      }
    });

    // Fill empty spaces with random letters
    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        if (!grid[i][j]) {
          grid[i][j] = String.fromCharCode(65 + Math.floor(Math.random() * 26));
        }
      }
    }

    setWordSearchGrid(grid);
    setFoundWords([]);
    setSelectedCells([]);
  };

  const handleCellClick = (row, col) => {
    const newSelected = [...selectedCells, { row, col }];
    setSelectedCells(newSelected);
    
    if (newSelected.length >= 2) {
      // Check if selected cells form a word
      const word = newSelected.map(cell => grid[cell.row][cell.col]).join('');
      const foundWord = tvetTerms.find(term => term.toUpperCase() === word);
      
      if (foundWord && !foundWords.includes(foundWord)) {
        setFoundWords([...foundWords, foundWord]);
        setScore(score + 20);
      }
      setSelectedCells([]);
    }
  };

  const startGame = (gameId) => {
    setActiveGame(gameId);
    setScore(0);
    setGameActive(true);
    
    switch (gameId) {
      case 'memory':
        initializeMemoryGame();
        break;
      case 'quiz':
        startQuiz();
        break;
      case 'typing':
        startTypingGame();
        break;
      case 'wordsearch':
        initializeWordSearch();
        break;
    }
  };

  const resetGame = () => {
    setActiveGame(null);
    setGameActive(false);
    setScore(0);
    setTimeLeft(0);
  };

  const renderMemoryGame = () => (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Memory Match</h3>
        <div className="flex items-center space-x-2">
          <Trophy className="h-5 w-5 text-yellow-500" />
          <span className="font-bold">{score}</span>
        </div>
      </div>
      
      <div className="grid grid-cols-4 gap-2">
        {memoryCards.map((card) => (
          <button
            key={card.id}
            onClick={() => handleCardClick(card.id)}
            className={`h-16 w-16 rounded-lg border-2 flex items-center justify-center text-sm font-medium transition-all ${
              flippedCards.includes(card.id) || matchedCards.includes(card.id)
                ? 'bg-primary text-white border-primary'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {(flippedCards.includes(card.id) || matchedCards.includes(card.id)) && card.term}
          </button>
        ))}
      </div>
      
      {matchedCards.length === memoryCards.length && (
        <div className="text-center py-4">
          <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-2" />
          <p className="text-lg font-semibold text-green-600">Congratulations! You won!</p>
          <p className="text-gray-600">Score: {score}</p>
        </div>
      )}
    </div>
  );

  const renderQuizGame = () => (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">TVET Quiz</h3>
        <div className="flex items-center space-x-2">
          <Trophy className="h-5 w-5 text-yellow-500" />
          <span className="font-bold">{quizScore}/{quizQuestions.length}</span>
        </div>
      </div>
      
      {currentQuiz < quizQuestions.length && (
        <div>
          <p className="text-lg font-medium mb-4">{quizQuestions[currentQuiz].question}</p>
          <div className="space-y-2">
            {quizQuestions[currentQuiz].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleQuizAnswer(index)}
                className={`w-full p-3 text-left rounded-lg border-2 transition-all ${
                  selectedAnswer === index
                    ? index === quizQuestions[currentQuiz].correct
                      ? 'border-green-500 bg-green-50 text-green-700'
                      : 'border-red-500 bg-red-50 text-red-700'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
          
          {selectedAnswer !== null && (
            <Button onClick={nextQuizQuestion} className="mt-4">
              {currentQuiz < quizQuestions.length - 1 ? 'Next Question' : 'Finish Quiz'}
            </Button>
          )}
        </div>
      )}
    </div>
  );

  const renderTypingGame = () => (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Speed Typing</h3>
        <div className="flex items-center space-x-2">
          <Zap className="h-5 w-5 text-yellow-500" />
          <span className="font-bold">{typingWPM} WPM</span>
        </div>
      </div>
      
      <div className="text-center">
        <p className="text-2xl font-mono mb-4">{typingText}</p>
        <input
          type="text"
          value={typingInput}
          onChange={handleTypingInput}
          className="w-full p-3 text-center text-lg border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
          placeholder="Type the word above..."
          autoFocus
        />
      </div>
    </div>
  );

  const renderWordSearch = () => (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Word Search</h3>
        <div className="flex items-center space-x-2">
          <Target className="h-5 w-5 text-yellow-500" />
          <span className="font-bold">{foundWords.length}/5</span>
        </div>
      </div>
      
      <div className="grid grid-cols-10 gap-1">
        {wordSearchGrid.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <button
              key={`${rowIndex}-${colIndex}`}
              onClick={() => handleCellClick(rowIndex, colIndex)}
              className={`w-8 h-8 text-xs font-mono border border-gray-300 hover:bg-gray-100 ${
                selectedCells.some(cell => cell.row === rowIndex && cell.col === colIndex)
                  ? 'bg-primary text-white'
                  : 'bg-white'
              }`}
            >
              {cell}
            </button>
          ))
        )}
      </div>
      
      <div className="mt-4">
        <p className="text-sm font-medium mb-2">Words to find:</p>
        <div className="flex flex-wrap gap-2">
          {tvetTerms.slice(0, 5).map((word) => (
            <Badge
              key={word}
              variant={foundWords.includes(word) ? "default" : "outline"}
              className={foundWords.includes(word) ? "bg-green-500" : ""}
            >
              {word}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      <div className="text-center">
        <div className="flex items-center justify-center mb-4">
          <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
            <Gamepad2 className="h-8 w-8 text-white" />
          </div>
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">Fun Zone 🎮</h2>
        <p className="text-lg text-gray-600">Take a break and enjoy some educational games!</p>
      </div>

      {!activeGame ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {games.map((game) => {
            const Icon = game.icon;
            return (
              <Card
                key={game.id}
                className="group cursor-pointer hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 overflow-hidden"
                onClick={() => startGame(game.id)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={game.image}
                    alt={game.name}
                    className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-3 right-3">
                    <div className={`w-10 h-10 ${game.color} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6 bg-gradient-to-b from-white to-gray-50/50">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">{game.name}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{game.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs font-medium text-gray-500">Click to play</span>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      ) : (
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Playing: {games.find(g => g.id === activeGame)?.name}</CardTitle>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" onClick={resetGame}>
                <RotateCcw className="h-4 w-4 mr-2" />
                Reset
              </Button>
              <Button variant="outline" size="sm" onClick={() => setActiveGame(null)}>
                Back to Games
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {activeGame === 'memory' && renderMemoryGame()}
            {activeGame === 'quiz' && renderQuizGame()}
            {activeGame === 'typing' && renderTypingGame()}
            {activeGame === 'wordsearch' && renderWordSearch()}
          </CardContent>
        </Card>
      )}
    </div>
  );
}

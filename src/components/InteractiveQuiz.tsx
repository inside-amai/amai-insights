import { useState } from 'react';
import { CheckCircle, XCircle, Sparkles } from 'lucide-react';

interface QuizOption {
  id: string;
  text: string;
  isCorrect: boolean;
}

interface QuizProps {
  question: string;
  options: QuizOption[];
}

export const InteractiveQuiz = ({ question, options }: QuizProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [hasAnswered, setHasAnswered] = useState(false);

  const handleAnswerSelect = (optionId: string) => {
    if (hasAnswered) return;
    
    setSelectedAnswer(optionId);
    setShowResult(true);
    setHasAnswered(true);
  };

  const resetQuiz = () => {
    setSelectedAnswer(null);
    setShowResult(false);
    setHasAnswered(false);
  };

  const selectedOption = options.find(opt => opt.id === selectedAnswer);
  const isCorrect = selectedOption?.isCorrect;

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-violet-900/20 border border-purple-500/30 backdrop-blur-lg p-8 mb-12">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-4 right-4 animate-bounce">
          <Sparkles className="text-violet-400" size={20} />
        </div>
        <div className="absolute bottom-4 left-4 animate-pulse">
          <Sparkles className="text-blue-400" size={16} />
        </div>
      </div>

      <div className="relative z-10">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-white mb-2 bg-gradient-to-r from-violet-300 via-purple-300 to-blue-300 bg-clip-text text-transparent">
            Knowledge Check
          </h3>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-400 to-blue-400 mx-auto rounded-full"></div>
        </div>

        <div className="text-center mb-8">
          <p className="text-xl font-semibold text-white leading-relaxed">
            {question}
          </p>
        </div>

        <div className="space-y-4 mb-6">
          {options.map((option, index) => {
            const isSelected = selectedAnswer === option.id;
            const showCorrectAnswer = showResult && option.isCorrect;
            const showWrongAnswer = showResult && isSelected && !option.isCorrect;
            
            return (
              <button
                key={option.id}
                onClick={() => handleAnswerSelect(option.id)}
                disabled={hasAnswered}
                className={`
                  w-full p-4 rounded-xl border-2 text-left transition-all duration-300 transform
                  ${hasAnswered ? 'cursor-not-allowed' : 'cursor-pointer hover:scale-[1.02]'}
                  ${showCorrectAnswer 
                    ? 'border-green-400 bg-green-400/20 ring-2 ring-green-400/50 animate-pulse' 
                    : showWrongAnswer
                    ? 'border-red-400 bg-red-400/20 ring-2 ring-red-400/50'
                    : isSelected && !showResult
                    ? 'border-purple-400 bg-purple-400/20'
                    : 'border-gray-600 bg-gray-800/50 hover:border-purple-400/50 hover:bg-purple-400/10'
                  }
                `}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-700 text-white font-bold text-sm">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className={`text-lg ${showCorrectAnswer ? 'text-green-300 font-semibold' : showWrongAnswer ? 'text-red-300' : 'text-white'}`}>
                      {option.text}
                    </span>
                  </div>
                  
                  {showResult && (
                    <div className="flex items-center">
                      {option.isCorrect ? (
                        <CheckCircle className="text-green-400 animate-bounce" size={24} />
                      ) : isSelected ? (
                        <XCircle className="text-red-400 animate-pulse" size={24} />
                      ) : null}
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {showResult && (
          <div className={`text-center p-6 rounded-xl border-2 transition-all duration-500 animate-fade-in ${
            isCorrect 
              ? 'border-green-400 bg-green-400/10' 
              : 'border-red-400 bg-red-400/10'
          }`}>
            <div className="flex items-center justify-center gap-3 mb-3">
              {isCorrect ? (
                <>
                  <CheckCircle className="text-green-400 animate-bounce" size={32} />
                  <span className="text-2xl font-bold text-green-300">Correct!</span>
                </>
              ) : (
                <>
                  <XCircle className="text-red-400 animate-pulse" size={32} />
                  <span className="text-2xl font-bold text-red-300">Not quite!</span>
                </>
              )}
            </div>
            
            <p className="text-lg text-gray-300 mb-4">
              {isCorrect 
                ? "Great job! Soul-Bound Tokens (SBTs) provide tamper-proof identity anchoring for agents."
                : "Soul-Bound Tokens (SBTs) permanently record an agent's identity and reputation on-chain."
              }
            </p>
            
            <button
              onClick={resetQuiz}
              className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-200 transform hover:scale-105"
            >
              Try Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
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
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-slate-900/80 border border-slate-700/50 backdrop-blur-xl shadow-2xl p-10 mb-12">
      {/* Sophisticated glass overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/3 rounded-3xl"></div>
      
      {/* Premium accent border */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-blue-400/20 p-[1px]">
        <div className="rounded-3xl bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95 w-full h-full"></div>
      </div>
      
      {/* Refined floating elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-6 right-6 animate-float">
          <Sparkles className="text-cyan-300" size={18} />
        </div>
        <div className="absolute bottom-6 left-6 animate-pulse">
          <Sparkles className="text-purple-300" size={14} />
        </div>
        <div className="absolute top-1/2 right-8 animate-bounce delay-300">
          <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
        </div>
      </div>

      <div className="relative z-20">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-cyan-200 via-white to-purple-200 bg-clip-text text-transparent">
            Knowledge Check
          </h3>
          <div className="w-24 h-0.5 bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 mx-auto rounded-full shadow-lg shadow-cyan-400/25"></div>
        </div>

        <div className="text-center mb-10">
          <p className="text-xl font-medium text-slate-100 leading-relaxed tracking-wide">
            {question}
          </p>
        </div>

        <div className="space-y-5 mb-8">
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
                  group relative w-full p-5 rounded-2xl border text-left transition-all duration-500 transform
                  ${hasAnswered ? 'cursor-not-allowed' : 'cursor-pointer hover:scale-[1.01] hover:shadow-xl'}
                  ${showCorrectAnswer 
                    ? 'border-emerald-400/60 bg-gradient-to-r from-emerald-500/10 via-emerald-400/15 to-emerald-500/10 shadow-lg shadow-emerald-400/20 quiz-shimmer bg-[length:200%_100%]' 
                    : showWrongAnswer
                    ? 'border-rose-400/60 bg-gradient-to-r from-rose-500/10 to-rose-400/15 shadow-lg shadow-rose-400/20'
                    : isSelected && !showResult
                    ? 'border-purple-400/60 bg-gradient-to-r from-purple-500/10 to-purple-400/15 shadow-lg shadow-purple-400/20'
                    : 'border-slate-600/40 bg-gradient-to-r from-slate-800/60 via-slate-700/40 to-slate-800/60 hover:border-cyan-400/50 hover:bg-gradient-to-r hover:from-cyan-500/5 hover:to-purple-500/5 hover:shadow-cyan-400/10'
                  }
                  backdrop-blur-sm
                `}
              >
                {/* Glass morphism overlay for options */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 via-transparent to-white/2"></div>
                
                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className={`
                      flex items-center justify-center w-10 h-10 rounded-xl font-bold text-sm transition-all duration-300
                      ${showCorrectAnswer 
                        ? 'bg-gradient-to-br from-emerald-500/80 to-emerald-600/80 text-white shadow-lg shadow-emerald-400/30' 
                        : showWrongAnswer
                        ? 'bg-gradient-to-br from-rose-500/80 to-rose-600/80 text-white shadow-lg shadow-rose-400/30'
                        : isSelected && !showResult
                        ? 'bg-gradient-to-br from-purple-500/80 to-purple-600/80 text-white shadow-lg shadow-purple-400/30'
                        : 'bg-gradient-to-br from-slate-700/80 to-slate-800/80 text-slate-200 group-hover:from-cyan-500/20 group-hover:to-purple-500/20'
                      }
                    `}>
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className={`
                      text-lg font-medium transition-all duration-300
                      ${showCorrectAnswer 
                        ? 'text-emerald-200 font-semibold' 
                        : showWrongAnswer 
                        ? 'text-rose-200' 
                        : isSelected && !showResult
                        ? 'text-purple-200'
                        : 'text-slate-100 group-hover:text-white'
                      }
                    `}>
                      {option.text}
                    </span>
                  </div>
                  
                  {showResult && (
                    <div className="flex items-center">
                      {option.isCorrect ? (
                        <CheckCircle className="text-emerald-400 animate-bounce drop-shadow-lg" size={26} />
                      ) : isSelected ? (
                        <XCircle className="text-rose-400 animate-pulse drop-shadow-lg" size={26} />
                      ) : null}
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {showResult && (
          <div className={`
            relative text-center p-6 sm:p-8 rounded-2xl border transition-all duration-500 animate-fade-in backdrop-blur-sm
            ${isCorrect 
              ? 'border-emerald-400/50 bg-gradient-to-br from-emerald-500/10 via-emerald-400/5 to-emerald-500/10 shadow-xl shadow-emerald-400/20' 
              : 'border-rose-400/50 bg-gradient-to-br from-rose-500/10 via-rose-400/5 to-rose-500/10 shadow-xl shadow-rose-400/20'
            }
          `}>
            {/* Result card glass overlay */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 via-transparent to-white/3"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-4">
                {isCorrect ? (
                  <>
                    <CheckCircle className="text-emerald-400 animate-bounce drop-shadow-lg" size={36} />
                    <span className="text-2xl sm:text-3xl font-bold text-emerald-200">Excellent!</span>
                  </>
                ) : (
                  <>
                    <XCircle className="text-rose-400 animate-pulse drop-shadow-lg" size={36} />
                    <span className="text-2xl sm:text-3xl font-bold text-rose-200">Not quite!</span>
                  </>
                )}
              </div>
              
              <p className="text-base sm:text-lg text-slate-200 mb-5 sm:mb-6 leading-relaxed px-2 sm:px-0">
                {isCorrect 
                  ? "Great job! Soul-Bound Tokens (SBTs) provide tamper-proof identity anchoring for agents."
                  : "Soul-Bound Tokens (SBTs) permanently record an agent's identity and reputation on-chain."
                }
              </p>
              
              <button
                onClick={resetQuiz}
                className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-purple-500/80 via-indigo-500/80 to-cyan-500/80 text-white font-semibold hover:from-purple-600/90 hover:via-indigo-600/90 hover:to-cyan-600/90 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25 backdrop-blur-sm border border-white/10"
              >
                Try Again
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
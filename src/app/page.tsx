"use client";

import { useState } from 'react';
import Image from 'next/image';
import { useFirebase } from '../hooks/useFirebase';
import { questions } from './questions';

export default function Home() {
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});
  const [showScore, setShowScore] = useState(false);
  const [showSharePrompt, setShowSharePrompt] = useState(false);
  const [score, setScore] = useState(100);
  const { saveScore } = useFirebase();

  const toggleItem = (id: number) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const calculateScore = async () => {
    const checkedCount = Object.values(checkedItems).filter(Boolean).length;
    const newScore = 100 - checkedCount;
    setScore(newScore);
    
    // Save score and question stats to Firebase
    await saveScore(newScore, checkedItems);
    
    setShowSharePrompt(true);
  };

  const showFinalScore = () => {
    setShowSharePrompt(false);
    setShowScore(true);
  };

  const shareTest = () => {
    const shareMessage = `I just took the UT Dallas Purity Test and scored ${score}! Check it out:`;
    
    if (typeof window !== 'undefined' && navigator.share) {
      navigator.share({
        title: 'UT Dallas Purity Test',
        text: shareMessage,
        url: window.location.href,
      })
      .then(showFinalScore)
      .catch(() => {
        showFinalScore();
      });
    } else {
      // Fallback for browsers that don't support navigator.share
      const url = window.location.href;
      try {
        navigator.clipboard.writeText(`${shareMessage} ${url}`);
        alert('Link copied to clipboard! Share it with your friends!');
        showFinalScore();
      } catch {
        showFinalScore();
      }
    }
  };

  const resetTest = () => {
    setCheckedItems({});
    setShowScore(false);
    setShowSharePrompt(false);
  };

  const getScoreMessage = (score: number) => {
    if (score >= 90) {
      return "Do you even go to UTD? 🤔";
    } else if (score >= 60) {
      return "You're a respectable UTD student! 📚";
    } else if (score >= 30) {
      return "You're a Comet for Life! 💀";
    } else {
      return "Nah, you're genuinely cooked. UTD runs in your blood! 🔥";
    }
  };

  return (
    <main className="min-h-screen py-8">
      <div className="content-container">
        {!showScore && !showSharePrompt ? (
          <>
            <div className="title-container">
            <Image
                src="/images/title.png"
                alt="The Official UT Dallas Purity Test"
                width={600}
                height={100}
                priority
                className="w-full max-w-[600px] h-auto px-4 sm:px-0 mx-auto mb-8"
                style={{
                  minWidth: '280px',
                  objectFit: 'contain'
                }}
              />
        </div>

            <div className="description">
              The first ever UT Dallas Purity Test. Serving as a way for students to bond and track their experiences
              throughout their time at The University of Texas at Dallas. It&apos;s a voluntary opportunity for students to reflect on
              their unique university journey.
            </div>

            <p className="caution">
              Caution: This is not a bucket list. You are beyond cooked if you complete all the items on this list.
            </p>

            <p className="instructions">
              Click on every item you have done. Your purity score will be calculated at the end.
            </p>

            <div className="question-list">
                {questions.map((question, index) => (
                <div key={index} className="question-item">
                      <input
                        type="checkbox"
                        id={`question-${index + 1}`}
                        checked={!!checkedItems[index + 1]}
                        onChange={() => toggleItem(index + 1)}
                      />
                  <label htmlFor={`question-${index + 1}`}>
                    {question}
                    </label>
                </div>
                ))}
            </div>

            <div className="text-center">
              <button onClick={calculateScore} className="button">
                Calculate My Score
              </button>
            </div>
          </>
        ) : showSharePrompt ? (
          <div className="text-center share-prompt">
            <h2 className="text-2xl font-bold mb-4">Your score is ready!</h2>
            <p className="mb-6">Help spread the word about the UT Dallas Purity Test!</p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <button onClick={shareTest} className="button share-button">
                Share with Friends
              </button>
              <button onClick={showFinalScore} className="button-secondary">
                Skip to My Score
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center results-container">
            <Image
              src="/images/title.png"
              alt="The Official UT Dallas Purity Test"
              width={600}
              height={100}
              priority
              className="w-full max-w-[600px] h-auto px-4 sm:px-0 mx-auto mb-8"
              style={{
                minWidth: '280px',
                objectFit: 'contain'
              }}
            />
            <h2 className="text-3xl font-bold mb-4">Your UT Dallas Purity Score: {score}</h2>
            <p className="mb-8 text-lg italic">{getScoreMessage(score)}</p>
            
            <button onClick={shareTest} className="button share-button">
              Share Result
            </button>
            
            <div className="mt-10">
              <button onClick={resetTest} className="button-secondary">
                Take the test again
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

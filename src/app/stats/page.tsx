"use client";

import { useState, useEffect } from 'react';
import { getStats } from '../../lib/firebase';
import { questions } from '../questions';

// Define proper types instead of using 'any'
interface QuestionStat {
  count: number;
}

interface Stats {
  totalTests: number;
  averageScore: number;
  questionStats: Record<string, QuestionStat>;
}

export default function Stats() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  // Function to check if a question is sensitive
  const isSensitiveQuestion = (question: string) => {
    const sensitiveKeywords = [
      "Cheated",
      "AI tools",
      "GPT",
      "homework",
    ];
    return sensitiveKeywords.some(keyword => 
      question.toLowerCase().includes(keyword.toLowerCase())
    );
  };

  useEffect(() => {
    const loadStats = async () => {
      const data = await getStats();
      setStats(data);
      setLoading(false);
    };

    loadStats();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen py-8">
        <div className="content-container">
          <div className="text-center">
            Loading statistics...
          </div>
        </div>
      </div>
    );
  }

  if (!stats) {
    return (
      <div className="min-h-screen py-8">
        <div className="content-container">
          <div className="text-center">
            Error loading statistics.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="content-container">
        <h1 className="text-3xl font-bold mb-8 text-center">UTD Purity Test Statistics</h1>
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Overall Statistics</h2>
          <p>Total Tests Taken: {stats.totalTests}</p>
          <p>Average Score: {stats.averageScore.toFixed(2)}</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Question Statistics</h2>
          <div className="space-y-4">
            {questions.map((question, index) => {
              const count = stats.questionStats[index + 1]?.count || 0;
              const percentage = stats.totalTests ? ((count / stats.totalTests) * 100).toFixed(1) : 0;
              
              return (
                <div key={index} className="border-b pb-2">
                  <p className="font-medium">{question}</p>
                  <p className="text-sm text-gray-600">
                    {isSensitiveQuestion(question) ? (
                      "Nice Try UTDiddy"
                    ) : (
                      `${count} people (${percentage}% of test takers)`
                    )}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
} 
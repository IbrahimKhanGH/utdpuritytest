"use client";

import { useState, useEffect } from 'react';
import { getStats } from '../../lib/firebase';
import { questions, SENSITIVE_QUESTION_IDS } from '../questions';

// Define proper types instead of using 'any'
interface QuestionStat {
  count: number;
}

interface Stats {
  allTimeTests: number;
  currentVersionTests: number;
  averageScore: number;
  questionStats: Record<string, QuestionStat>;
}

export default function Stats() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

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
          <p>Total Tests Taken: {stats.allTimeTests}</p>
          <p>Current Version Responses: {stats.currentVersionTests}</p>
          <p>Average Score: {stats.averageScore.toFixed(2)}</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Question Statistics</h2>
          <div className="space-y-4">
            {questions.map(question => {
              const count = stats.questionStats[question.id]?.count || 0;
              const percentage = stats.currentVersionTests ? ((count / stats.currentVersionTests) * 100).toFixed(1) : 0;
              
              return (
                <div key={question.id} className="border-b pb-2">
                  <p className="font-medium">{question.text}</p>
                  <p className="text-sm text-gray-600">
                    {SENSITIVE_QUESTION_IDS.has(question.id) ? (
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
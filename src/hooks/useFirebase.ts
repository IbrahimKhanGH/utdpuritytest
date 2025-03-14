import { useCallback } from 'react';
import { ref, push, increment, update } from 'firebase/database';
import { db } from '../lib/firebase';

// Define specific types
interface ScoreData {
  score: number;
  timestamp: number;
}

// Update the type to include Firebase's special types
type UpdatesObject = Record<string, number | ScoreData | object>;

export const useFirebase = () => {
  const saveScore = useCallback(async (score: number, checkedQuestions: Record<number, boolean>) => {
    try {
      // Save the score
      const scoreRef = push(ref(db, 'scores'));
      
      // Create a batch update for question statistics
      const updates: UpdatesObject = {};
      
      // Add score data
      updates[`scores/${scoreRef.key}`] = {
        score,
        timestamp: Date.now()
      };
      
      // Update question statistics
      Object.entries(checkedQuestions).forEach(([questionIndex, isChecked]) => {
        if (isChecked) {
          updates[`questionStats/${questionIndex}/count`] = increment(1);
        }
      });
      
      // Perform the batch update
      await update(ref(db), updates);
      
      return true;
    } catch (error) {
      console.error('Error saving data:', error);
      // Don't fail the app if Firebase has issues
      return true;
    }
  }, []);

  return {
    saveScore
  };
}; 
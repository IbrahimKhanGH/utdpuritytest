import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get } from 'firebase/database';
import { getAnalytics, isSupported } from 'firebase/analytics';

const firebaseConfig = {
  // Get these values from your Firebase console
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database
export const db = getDatabase(app);

// Initialize Analytics conditionally
export const initAnalytics = async () => {
  if (await isSupported()) {
    return getAnalytics(app);
  }
  return null;
};

// Function to get statistics
export const getStats = async () => {
  try {
    const scoresRef = ref(db, 'scores');
    const questionStatsRef = ref(db, 'questionStats');

    const [scoresSnapshot, questionStatsSnapshot] = await Promise.all([
      get(scoresRef),
      get(questionStatsRef)
    ]);

    const scores = scoresSnapshot.val() || {};
    const questionStats = questionStatsSnapshot.val() || {};

    // Calculate average score
    const scoreValues = Object.values(scores).map((s: any) => s.score);
    const averageScore = scoreValues.length 
      ? scoreValues.reduce((a: number, b: number) => a + b, 0) / scoreValues.length 
      : 0;

    return {
      totalTests: scoreValues.length,
      averageScore,
      questionStats
    };
  } catch (error) {
    console.error('Error fetching stats:', error);
    return null;
  }
};

export default app; 
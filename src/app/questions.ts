// Questions for the UT Dallas Purity Test.
// IDs are stable keys for Firebase stats — never renumber or reuse them.
// To retire a question, delete its entry; to add one, use the next unused ID.
export interface Question {
  id: number;
  text: string;
}

export const questions: Question[] = [
  { id: 1, text: "Learned that “Temoc” is “comet” backward?" },
  { id: 2, text: "Taken a picture with Temoc?" },
  { id: 3, text: "Done the Whoosh unironically?" },
  { id: 4, text: "Hung out at the Plinth?" },
  { id: 5, text: "Taken a fountain photo?" },
  { id: 6, text: "Corrected someone who thought UTD was in Dallas?" },
  { id: 7, text: "Called UTD the “MIT of the South”?" },
  { id: 8, text: "Complained about not having a football team?" },
  { id: 9, text: "Trashed UTD, then defended it from an outsider?" },
  { id: 10, text: "Seen or painted the Spirit Rocks?" },
  { id: 11, text: "Praised Enarc during campus construction?" },
  { id: 12, text: "Called a delivery robot “Tobor”?" },
  { id: 13, text: "Watched a delivery robot lose to a curb?" },
  { id: 14, text: "Been approached or threatened by a campus squirrel?" },
  { id: 15, text: "Seen a furry on campus?" },
  { id: 16, text: "Seen someone riding a unicycle?" },
  { id: 17, text: "Seen cosplay on an ordinary school day?" },
  { id: 18, text: "Stopped for an unexpectedly good SU piano performance?" },
  { id: 19, text: "Been on campus after midnight?" },
  { id: 20, text: "Gotten lost because of UTD building abbreviations?" },
  { id: 21, text: "Used UTD Grades to choose a professor?" },
  { id: 22, text: "Rejected a professor because of Rate My Professors?" },
  { id: 23, text: "Registered the second your appointment opened?" },
  { id: 24, text: "Gambled on a professor listed as “STAFF”?" },
  { id: 25, text: "Refreshed Orion waiting for one seat?" },
  { id: 26, text: "Found a required class completely full?" },
  { id: 27, text: "Discovered a registration hold too late?" },
  { id: 28, text: "Been ghosted by academic advising?" },
  { id: 29, text: "Confused Galaxy, Orion, CourseBook and eLearning?" },
  { id: 30, text: "Had a registered class missing from eLearning?" },
  { id: 31, text: "Joined and immediately muted a class group chat?" },
  { id: 32, text: "Asked for or shared homework answers there?" },
  { id: 33, text: "Submitted an assignment at 11:59?" },
  { id: 34, text: "Used AI where the syllabus prohibited it?" },
  { id: 35, text: "Cheated on an exam or quiz?" },
  { id: 36, text: "Signed attendance for someone else?" },
  { id: 37, text: "Skipped class while remaining on campus?" },
  { id: 38, text: "Pulled an all-nighter for school?" },
  { id: 39, text: "Slept in a study room, library or car?" },
  { id: 40, text: "Considered dropping out or transferring?" },
  { id: 41, text: "Paid for parking and still found no space?" },
  { id: 42, text: "Circled a lot for at least 20 minutes?" },
  { id: 43, text: "Followed someone walking toward their car?" },
  { id: 44, text: "Noticed old parking colors under new paint?" },
  { id: 45, text: "Received a parking ticket?" },
  { id: 46, text: "Forgotten where you parked?" },
  { id: 47, text: "Made the pilgrimage from Lot U?" },
  { id: 48, text: "Arrived early and still entered class late?" },
  { id: 49, text: "Ridden the 883?" },
  { id: 50, text: "Watched the bus leave without you?" },
  { id: 51, text: "Had a commute longer than your class?" },
  { id: 52, text: "Stayed on campus to avoid traffic?" },
  { id: 53, text: "Sat in your car until class started?" },
  { id: 54, text: "Been rerouted by campus construction?" },
  { id: 55, text: "Dressed incorrectly for Dallas weather?" },
  { id: 56, text: "Regretted a Dining Hall West meal?" },
  { id: 57, text: "Planned your day around a meal exchange?" },
  { id: 58, text: "Endured the campus Chick-fil-A line?" },
  { id: 59, text: "Developed a strong Halal Shack opinion?" },
  { id: 60, text: "Survived UV maintenance or a Northside fire alarm?" },
  { id: 61, text: "Complained about UTD’s social life, then defended it?" },
  { id: 62, text: "Said, “UTD is what you make of it”?" },
  { id: 63, text: "Collected club flyers you never looked at again?" },
  { id: 64, text: "Joined a club Discord but never attended?" },
  { id: 65, text: "Attended an event mainly for free food?" },
  { id: 66, text: "Collected the free merch and immediately left?" },
  { id: 67, text: "Attended a Weeks of Welcome event?" },
  { id: 68, text: "Attended a silent disco or Sex Bowl?" },
  { id: 69, text: "Made a friend through class, a club or Discord?" },
  { id: 70, text: "Exchanged Instagrams and never spoke again?" },
  { id: 71, text: "Pretended not to see someone you knew on campus?" },
  { id: 72, text: "Had a study session where nobody studied?" },
  { id: 73, text: "Spent a Friday night in the library?" },
  { id: 74, text: "Attended a Northside party?" },
  { id: 75, text: "Attended or hosted a UV apartment gathering?" },
  { id: 76, text: "Attended a UTD fraternity or sorority party?" },
  { id: 77, text: "Attended a UTD sports game?" },
  { id: 78, text: "Attended a campus concert or festival?" },
  { id: 79, text: "Appeared on or submitted to UTD Bruh Moments?" },
  { id: 80, text: "Doomscrolled r/utdallas during class?" },
  { id: 81, text: "Drank at Northside or in UV?" },
  { id: 82, text: "Pregamed a campus event?" },
  { id: 83, text: "Gone to class hungover?" },
  { id: 84, text: "Gone to class drunk or high?" },
  { id: 85, text: "Smoked or vaped on campus?" },
  { id: 86, text: "Snuck alcohol into campus housing?" },
  { id: 87, text: "Had a party shut down?" },
  { id: 88, text: "Used a fake ID around Richardson?" },
  { id: 89, text: "Held hands with someone on campus?" },
  { id: 90, text: "Kissed someone on campus?" },
  { id: 91, text: "Hooked up in campus housing?" },
  { id: 92, text: "Kicked out a roommate for romantic reasons?" },
  { id: 93, text: "Been kicked out by a roommate for the same reason?" },
  { id: 94, text: "Matched with someone you recognized from class?" },
  { id: 95, text: "Had a crush on a TA or professor?" },
  { id: 96, text: "Dated a classmate or project partner?" },
  { id: 97, text: "Flirted through a class GroupMe or Discord?" },
  { id: 98, text: "Had a UTD situationship end before the semester?" },
  { id: 99, text: "Lied about finishing your group-project work?" },
  { id: 100, text: "Done something in a parking garage besides park?" },
];

// Stats for these question IDs are hidden on the stats page.
export const SENSITIVE_QUESTION_IDS = new Set<number>([
  34, 35, 36, 99, // academic dishonesty
  81, 82, 83, 84, 85, 86, 87, 88, // substances / illegal activity
  91, 92, 93, 100, // sexual / private activity
]);

export interface ScoreTier {
  min: number;
  name: string;
  tagline: string;
}

// Ordered highest first; the first tier whose min <= score wins.
export const scoreTiers: ScoreTier[] = [
  { min: 90, name: "Orientation NPC", tagline: "Temoc hasn’t noticed you yet." },
  { min: 75, name: "Casual Comet", tagline: "You attend UTD and occasionally remain afterward." },
  { min: 60, name: "Certified Comet", tagline: "The campus has begun changing you." },
  { min: 40, name: "Temoc’s Chosen", tagline: "You understand the smell discourse." },
  { min: 20, name: "Enarc Cultist", tagline: "Construction only strengthens your faith." },
  { min: 0, name: "Campus Cryptid", tagline: "You are somebody else’s purity-test question." },
];

export const getScoreTier = (score: number): ScoreTier =>
  scoreTiers.find(tier => score >= tier.min) ?? scoreTiers[scoreTiers.length - 1];

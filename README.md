*Solo Sparks: Self-Care Journal App*

*A mobile-first self-care journal built with React Native (Expo), Node.js (Express), and MongoDB Atlas. Solo Sparks helps users cultivate emotional well-being through daily quests and reflections, storing personal data on the device and in the cloud.*

Features

1. Welcome & Onboarding
   - Welcome screen introducing Solo Sparks.
   - User enters name and current mood.
   - User ID is generated, saved to device storage (AsyncStorage), and stored in MongoDB.

2. Daily Quest
   - Explore screen displays a personalized daily quest (e.g., “Spend 10 minutes quietly under the sky”).
   - Users tap "I Did It!" to proceed to reflection.

3. Reflection Submission
   - Reflect screen allows users to write how the quest made them feel.
   - Reflections are posted to the backend with the same persistent userId.
   - Users are returned to the Daily Quest screen after submission.

4. Journal View
   - Journal screen fetches all reflections for the logged-in user.
   - Reflections are displayed oldest to newest, showing date and content.

5. Persistent User Session
   - User ID stored on device to skip onboarding on subsequent app launches.
   - All screens retrieve userId from AsyncStorage.

6. Clean Navigation
   - Expo Router Tabs for smooth switching between Quest, Reflect, and Journal.
   - Auto-redirect on app start based on existing userId.

Tech Stack

- Frontend: React Native with Expo, Expo Router, AsyncStorage
- Backend: Node.js, Express, Mongoose
- Database: MongoDB Atlas

Project Structure

SelfCare_Journal/
├─ backend/
│  ├─ models/
│  │  ├─ User.js
│  │  └─ Reflection.js
│  ├─ routes/
│  │  ├─ userRoutes.js
│  │  └─ reflectionRoutes.js
│  ├─ server.js
│  └─ .env
├─ selfcare-app/
│  ├─ app/
│  │  ├─ index.tsx         # Splash & auto-redirect
│  │  ├─ (tabs)/_layout.tsx
│  │  ├─ (tabs)/onboarding.tsx
│  │  ├─ (tabs)/explore.tsx
│  │  ├─ (tabs)/reflect.tsx
│  │  └─ (tabs)/journal.tsx
│  ├─ utils/
│  │  └─ auth.ts
│  └─ package.json
└─ README.md

Installation & Running Locally

1. Backend Setup:
   ```
   cd backend
   npm install
   # set MONGO_URI in .env
   node server.js
   ```
2. Frontend Setup:
   ```
   cd selfcare-app
   npm install
   expo install @react-native-async-storage/async-storage
   npx expo start
   ```
   - In DevTools, set Connection to Tunnel.
   - Scan QR code with Expo Go on your mobile device.

Usage

1. Launch the app on your device.
2. On first run, enter your name and mood to onboard.
3. Complete the daily quest and submit your reflection.
4. View all past reflections in the Journal tab.
5. Close and reopen the app to skip onboarding automatically.

Future Improvements

- Add ability to delete or edit reflections.
- Introduce Spark Points and rewards system.
- Visualize mood trends with charts.
- Deploy backend to a public cloud service.

*Final Screenshots Of Working App*

*Built with ❤️ by Sneha.*

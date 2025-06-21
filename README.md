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
![Image](https://github.com/user-attachments/assets/fc057cbc-ee59-4029-8f0f-e67730e1c90b)

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
![Image](https://github.com/user-attachments/assets/dd36f491-1d02-4607-96f0-3cb709ec1c94)
![Image](https://github.com/user-attachments/assets/c1314bd6-d24e-4bf5-9819-9c6dfadfcbe0)
![Image](https://github.com/user-attachments/assets/1c828eaa-b98b-4837-af3c-d4be032f26c4)
![Image](https://github.com/user-attachments/assets/66833f64-0a5e-46eb-8a46-51f909a24309)
![Image](https://github.com/user-attachments/assets/3b8ec4ab-160a-4989-9c0e-75a8bd77a2c0)
![Image](https://github.com/user-attachments/assets/11787a55-d160-4f15-8d60-d670e8975278)
![Image](https://github.com/user-attachments/assets/a987f138-6e99-469a-ac8c-c791c214935b)
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*Built with ❤️ by Sneha.*

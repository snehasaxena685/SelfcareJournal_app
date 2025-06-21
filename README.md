#Solo Sparks: Self-Care Journal App

A mobile-first self-care journal built with React Native (Expo), Node.js (Express), and MongoDB Atlas. Solo Sparks helps users cultivate emotional well-being through daily quests and reflections, storing personal data on the device and in the cloud.

Features

Welcome & Onboarding

Welcome screen introducing Solo Sparks.

User enters name and current mood.

User ID is generated, saved to device storage (AsyncStorage), and stored in MongoDB.

Daily Quest

Explore screen displays a personalized daily quest (e.g., “Spend 10 minutes quietly under the sky”).

Users tap "I Did It!" to proceed to reflection.

Reflection Submission

Reflect screen allows users to write how the quest made them feel.

Reflections are posted to the backend with the same persistent userId.

Users are returned to the Daily Quest screen after submission.

Journal View

Journal screen fetches all reflections for the logged-in user.

Reflections are displayed oldest to newest, showing date and content.

Persistent User Session

User ID stored on device to skip onboarding on subsequent app launches.

All screens retrieve userId from AsyncStorage.

Clean Navigation

Expo Router Tabs for smooth switching between Quest, Reflect, and Journal.

Auto-redirect on app start based on existing userId.

Tech Stack

Frontend: React Native with Expo, Expo Router, AsyncStorage

Backend: Node.js, Express, Mongoose

Database: MongoDB Atlas

Project Structure

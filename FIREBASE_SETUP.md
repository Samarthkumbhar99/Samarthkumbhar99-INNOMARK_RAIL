# Firebase Firestore Permission Fix

## Problem
You're getting this error: `FirebaseError: [code=permission-denied]: Missing or insufficient permissions.`

## Solution Options

### Option 1: Deploy Firestore Rules (Recommended for Development)

1. **Login to Firebase CLI:**
   ```bash
   firebase login
   ```

2. **Initialize Firebase in your project:**
   ```bash
   firebase init firestore
   ```
   - Select your existing project: `innomarkrv`
   - Use the existing `firestore.rules` file
   - Use the existing `firestore.indexes.json` file

3. **Deploy the rules:**
   ```bash
   firebase deploy --only firestore:rules
   ```

### Option 2: Manual Firebase Console Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: `innomarkrv`
3. Navigate to **Firestore Database** → **Rules**
4. Replace the existing rules with:

```javascript
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read/write access to all documents for development
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

5. Click **Publish**

### Option 3: Use Firestore Emulator (Local Development)

1. **Start the Firestore emulator:**
   ```bash
   firebase emulators:start --only firestore
   ```

2. **The app will automatically connect to the emulator in development mode**

## Security Note

⚠️ **Important**: The current rules allow unrestricted access for development purposes. 
For production, implement proper authentication and authorization rules.

## Files Created

- `firebase.json` - Firebase project configuration
- `firestore.rules` - Firestore security rules (development-friendly)
- `firestore.indexes.json` - Database indexes for better performance

## Next Steps

1. Choose one of the options above
2. Restart your development server
3. The permission error should be resolved

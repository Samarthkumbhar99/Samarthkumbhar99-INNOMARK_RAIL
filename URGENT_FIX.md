# 🚨 URGENT: Fix Firebase Permission Error

## The Error You're Seeing:
```
FirebaseError: [code=permission-denied]: Missing or insufficient permissions
```

## ⚡ FASTEST FIX (2 minutes):

### Step 1: Open Firebase Console
1. Go to: https://console.firebase.google.com/
2. Click on your project: **innomarkrv**

### Step 2: Update Firestore Rules
1. In the left sidebar, click **"Firestore Database"**
2. Click the **"Rules"** tab at the top
3. You'll see something like:
   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /{document=**} {
         allow read, write: if false;
       }
     }
   }
   ```

### Step 3: Replace with This Code
```javascript
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read/write access for development
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

### Step 4: Publish
1. Click the **"Publish"** button
2. Wait for "Rules published successfully" message

### Step 5: Refresh Your App
1. Go back to your browser with the app
2. Press **Ctrl+F5** to hard refresh
3. The error should be gone!

## ✅ Expected Result:
- No more permission errors in console
- Dashboard loads with data
- All Firestore operations work

## 🔒 Security Note:
This allows full access for development. For production, implement proper authentication rules.

---

**If you still see errors after this, restart your development server:**
```bash
npm run dev
```

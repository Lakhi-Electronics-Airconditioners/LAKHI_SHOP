import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { getFirestore, doc, onSnapshot } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyC-16u2n4IaGRmg88nsPmMYCGKp2jjL9Bg",
    authDomain: "lakhi-airconditioners.firebaseapp.com",
    projectId: "lakhi-airconditioners",
    storageBucket: "lakhi-airconditioners.firebasestorage.app",
    messagingSenderId: "284430318185",
    appId: "1:284430318185:web:ad09598be7a16ab46a0a09598be7a16ab46a00f8", // Using the one from your previous context
    measurementId: "G-LB63B1FRYC"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const authMenu = document.getElementById('auth-menu');
const authmenutext = document.getElementById('auth-menu-text');
const closeAuthMenuBtn = document.getElementById('close-auth-menu-btn');

// Function to close the auth menu

closeAuthMenuBtn.addEventListener('click', () => {
    authMenu.style.display = 'none';
});


// Listen for authentication state changes
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in
        console.log('User is signed in:',user.uid, user.email , user.displayName);
        const appIdFromConfig = firebaseConfig.projectId;
        const userId = user.uid;
        const userProfileRef = doc(db, "artifacts", appIdFromConfig, "users", userId, "user_profiles", "profile");
        onSnapshot(userProfileRef, (docSnap) => {
            if (docSnap.exists()) {
                console.log("User profile document data rendered successfully.");
                const userData = docSnap.data();
                const userName = userData.name || "User";
                authmenutext.innerHTML = `
                    
                    <h1 style="color: firebrick">Welcome,</h1>
                    <h4>${userName}</h4>

                `;
                authMenu.style.display = "block";
            } else {
                console.log("No user profile document found for UID:", userId);
            }
        });
    } else {
        // User is not signed in
        console.log('No user is signed in.');
        authmenutext.innerHTML = `
            <h1>Welcome, Guest!</h1>
            <h4>Please sign in or sign up to see your data</h4>
            <a href="https://shop.lakhiairconditioners.com/ls/signin">Sign In</a> |
            <a href="https://shop.lakhiairconditioners.com/ls/signup">Sign Up</a>
            <p>email us for support: <a href="mailto:help.database@lakhiairconditioners.com">help.database@lakhiairconditioners.com</a></p>
        `;
    }
});

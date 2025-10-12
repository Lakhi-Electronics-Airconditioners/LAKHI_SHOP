// Firebase SDK imports - UNIFIED TO 11.6.1 FOR ALL FIRESTORE FUNCTIONS
    import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
    import {
        getAuth,
        onAuthStateChanged
    } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
    import {
        getFirestore,
        doc,
        getDoc, // Explicitly import getDoc
        onSnapshot,
        getDocs,
        collection,
        query
    } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

    // IMPORTANT: Replace with your actual Firebase config
    const firebaseConfig = {
        apiKey: "AIzaSyC-16u2n4IaGRmg88nsPmMYCGKp2jjL9Bg",
        authDomain: "lakhi-airconditioners.firebaseapp.com",
        projectId: "lakhi-airconditioners",
        storageBucket: "lakhi-airconditioners.firebasestorage.app",
        messagingSenderId: "284430318185",
        appId: "1:284430318185:web:ad09598be7a16ab46a00f8",
        measurementId: "G-LB63B1FRYC"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const db = getFirestore(app);

    let userId = null; // Variable to store the current user's UID
    const appIdFromConfig = firebaseConfig.projectId; // Get projectId for consistent use in Firestore paths

    // Helper function to show/hide sections
    function showSection(sectionId) {
        const allSections = ['notLoggedInMessage', 'profileIncompleteMessage', 'userProfileContent', 'customerDataSection'];
        allSections.forEach(id => {
            const el = document.getElementById(id);
            if (el) el.classList.add('hidden');
        });

        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.remove('hidden');
        } else {
            console.error(`Section with ID '${sectionId}' not found.`);
        }
    }

    // Function to load and display customer data and all bills
    async function loadCustomerData(customerCode) {
        console.log("Attempting to load customer data for:", customerCode);
        try {
            const customerDocRef = doc(db, "artifacts", appIdFromConfig, "customers", customerCode);
            const customerDocSnap = await getDoc(customerDocRef);

            if (customerDocSnap.exists()) {
                const customerData = customerDocSnap.data();
                console.log("Customer profile loaded:", customerData);
                if(document.getElementById('customerName')) document.getElementById('customerName').textContent = customerData.NAME || 'N/A'
                if(document.getElementById('customerAddress')) document.getElementById('customerAddress').textContent = customerData.addr || 'N/A'
                if(document.getElementById('customerCity')) document.getElementById('customerCity').textContent = customerData.ct || 'N/A'
                if(document.getElementById('customerPincode')) document.getElementById('customerPincode').textContent = customerData.pincode || 'N/A'

            } else {
                console.log("No customer document found for code:", customerCode);
            }
        } catch (error) {
            console.error("Error loading customer data or bills:", error);
            if (customerDetailsDiv) customerDetailsDiv.innerHTML = `<p class="error-message">Error loading customer data. Please try again.</p>`;
        }
    }


    // --- Authentication and Initial Data Load ---
    onAuthStateChanged(auth, (user) => {
        const notLoggedInMessage = document.getElementById('notLoggedInMessage');
        const profileIncompleteMessage = document.getElementById('profileIncompleteMessage');
        const userProfileContent = document.getElementById('userProfileContent');
        const customerDataSection = document.getElementById('customerDataSection');
        const displayEmailStatus = document.getElementById('displayEmailStatus');

        if (user) {
            userId = user.uid;
            console.log("User logged in:", userId);
            // Display email verification status
            if (user.emailVerified) {
                if (displayEmailStatus) displayEmailStatus.innerHTML = `<b style="color:green">Verified <i class="fa-solid fa-check"></i></b>`;
                console.log("Email is verified.");
            } else {
                if (displayEmailStatus) displayEmailStatus.innerHTML = `<b style="color:red">Not Verified <i class="fa-solid fa-xmark"></i></b>`;
                console.log("Email is not verified.");
            }
            // Fetch user_profiles data using onSnapshot for real-time updates
            const userProfileRef = doc(db, "artifacts", appIdFromConfig, "users", userId, "user_profiles", "profile");
            onSnapshot(userProfileRef, (docSnap) => {
                if (docSnap.exists()) {
                    const profileData = docSnap.data();
                    console.log("User profile loaded:", profileData);

                    const customerCode = profileData.customerCode || userId;
                    window.currentUserCustomerCode = customerCode;

                    if (document.getElementById('displayUserId')) document.getElementById('displayUserId').textContent = userId;
                    if (document.getElementById('displayUserEmail')) document.getElementById('displayUserEmail').textContent = profileData.email || user.email || 'N/A';
                    if (document.getElementById('displayName')) document.getElementById('displayName').textContent = profileData.name || 'N/A';
                    if (document.getElementById('displayPhoneNumber')) document.getElementById('displayPhoneNumber').textContent = profileData.phoneNumber || 'N/A';
                    if (document.getElementById('displayCustomerCode')) document.getElementById('displayCustomerCode').textContent = profileData.customerCode || 'N/A';

                    if (document.getElementById('displayHouseAndFlatNumber')) document.getElementById('displayHouseAndFlatNumber').textContent = profileData.address?.houseAndFlatNumber || 'N/A';
                    if (document.getElementById('displayHousingAreaAndFlatName')) document.getElementById('displayHousingAreaAndFlatName').textContent = profileData.address?.housingAreaAndFlatName || 'N/A';
                    if (document.getElementById('displayAreaName')) document.getElementById('displayAreaName').textContent = profileData.address?.areaName || 'N/A';
                    if (document.getElementById('displayCity')) document.getElementById('displayCity').textContent = profileData.address?.city || 'N/A';
                    if (document.getElementById('displayState')) document.getElementById('displayState').textContent = profileData.address?.state || 'N/A';
                    if (document.getElementById('displayPincode')) document.getElementById('displayPincode').textContent = profileData.address?.pincode || 'N/A';

                    showSection('userProfileContent');
                    loadCustomerData(profileData.customerCode)

                } else {
                    console.log("No user profile document found for UID:", userId);
                    showSection('profileIncompleteMessage');
                    if (profileIncompleteMessage) {
                        profileIncompleteMessage.innerHTML = `
                            <h2>Profile Access Denied</h2>
                            <p>It seems you're logged in but don't have permission to view your profile or it's incomplete.</p>
                            <button class="btn" onclick="window.location.href='https://shop.lakhiairconditioners.com/ls/su2'">Complete Profile</button>
                        `;
                    }
                }
            }, (error) => {
                console.error("Error fetching user profile:", error);
                if (error.code === 'permission-denied') {
                    showSection('profileIncompleteMessage');
                    if (profileIncompleteMessage) {
                        profileIncompleteMessage.innerHTML = `
                            <h2>Profile Access Denied</h2>
                            <p>It seems you're logged in but don't have permission to view your profile or it's incomplete.</p>
                            <button class="btn" onclick="window.location.href='https://shop.lakhiairconditioners.com/ls/su2'">Complete Profile</button>
                        `;
                    }
                } else {
                    if (userProfileContent) userProfileContent.innerHTML = `<p class="error-message">Error loading user profile: ${error.message}</p>`;
                    showSection('userProfileContent');
                }
            });

        } else {
            userId = null;
            console.log("User not logged in.");
            showSection('notLoggedInMessage');
            if (document.getElementById('displayUserId')) document.getElementById('displayUserId').textContent = '';
            if (document.getElementById('displayUserEmail')) document.getElementById('displayUserEmail').textContent = '';
            if (document.getElementById('displayEmailStatus')) document.getElementById('displayEmailStatus').textContent = '';
            if (document.getElementById('displayName')) document.getElementById('displayName').textContent = '';
            if (document.getElementById('displayPhoneNumber')) document.getElementById('displayPhoneNumber').textContent = '';
            if (document.getElementById('displayCustomerCode')) document.getElementById('displayCustomerCode').textContent = '';
            if (document.getElementById('displayHouseAndFlatNumber')) document.getElementById('displayHouseAndFlatNumber').textContent = '';
            if (document.getElementById('displayHousingAreaAndFlatName')) document.getElementById('displayHousingAreaAndFlatName').textContent = '';
            if (document.getElementById('displayAreaName')) document.getElementById('displayAreaName').textContent = '';
            if (document.getElementById('displayCity')) document.getElementById('displayCity').textContent = '';
            if (document.getElementById('displayState')) document.getElementById('displayState').textContent = '';
            if (document.getElementById('displayPincode')) document.getElementById('displayPincode').textContent = '';
            const customerDetailsDiv = document.getElementById('customerDetails');
            if (customerDetailsDiv) customerDetailsDiv.innerHTML = '';
        }
    });
    document.getElementById('Share-info').addEventListener('click', function () {
                    // The userId is set in the onAuthStateChanged listener above.
                    // We check for its existence.
                    const currentUserId = userId;
                    if (currentUserId) {
                        const element = document.getElementById('share-section');
                        html2canvas(element).then(function (canvas) {
                            const imgData = canvas.toDataURL('image/png');
                            const pdf = new jsPDF('p', 'mm', 'a5'); // Create PDF in portrait, mm units, A4 size
                            const pdfWidth = pdf.internal.pageSize.getWidth();
                            const pdfHeight = pdf.internal.pageSize.getHeight();
                            
                            const canvasWidth = canvas.width;
                            const canvasHeight = canvas.height;
                            const canvasAspectRatio = canvasWidth / canvasHeight;

                            // Set image dimensions to fit page width with a margin
                            const margin = 15; // 15mm margin
                            let imgWidth = pdfWidth - 2 * margin;
                            let imgHeight = imgWidth / canvasAspectRatio;

                            // If the image height is too large for the page, scale by height instead
                            if (imgHeight > pdfHeight - 2 * margin) {
                                imgHeight = pdfHeight - 2 * margin;
                                imgWidth = imgHeight * canvasAspectRatio;
                            }

                            // Calculate x and y coordinates to center the image
                            const x = (pdfWidth - imgWidth) / 2;
                            const y = (pdfHeight - imgHeight) / 2;
                            pdf.addImage(imgData, 'PNG', x, y, imgWidth, imgHeight);
                            pdf.save(`${userId || 'UID'}_account_customer-info.pdf`);
                        });          
                    } else {
                        alert('You must be logged in to download your information.');
                    }
                });
         document.getElementById('Copy-info').addEventListener('click', function () {
                    const shareSection = document.getElementById('share-section');
                    if (shareSection) {
                        // Select all <p> tags within the share-section, excluding titles
                        const infoElements = shareSection.querySelectorAll('p');
                        let textToCopy = [];

                        // Extract text from each <p> element
                        infoElements.forEach(p => {
                            textToCopy.push(p.innerText.trim());
                        });

                        // Join the lines with a newline character
                        const finalString = textToCopy.join('\n');

                        // Use the Clipboard API to copy the text
                        navigator.clipboard.writeText(finalString).then(() => {
                            // Optional: Provide feedback to the user
                            const originalText = this.innerHTML;
                            this.innerHTML = 'Copied! <i class="fa-solid fa-check"></i>';
                            setTimeout(() => {
                                this.innerHTML = originalText;
                            }, 2000);
                        }).catch(err => {
                            console.error('Failed to copy text: ', err);
                            alert('Failed to copy information. Please try again.');
                        });
                    } else {
                        alert('Could not find the information section to copy.');
                    }
                });
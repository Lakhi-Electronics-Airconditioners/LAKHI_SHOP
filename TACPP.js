 // --- Terms and Conditions Modal Logic ---
        const currentTermsVersion = '4'; // Define the current version of your TAC/PP

        // Function for Close Button of initial TACPP modal
        function closeModal() {
            // User did not agree to initial terms, redirect them
            window.location.href = "https://shop.lakhiairconditioners.com/NOTAGR";
        }
    
        // Function for Continue Button of initial TACPP modal
        function continueAction(event) {
            event.preventDefault(); // Prevent form submission
            var isChecked = document.getElementById("agree").checked;
            if (isChecked) {
                localStorage.setItem('hasAgreedToTerms', 'true'); // Set initial agreement flag
                localStorage.setItem('agreedTermsVersion', currentTermsVersion); // Store the version agreed to
                document.getElementById("tacpp").style.display = "none";
            } else {
                alert("Please tick the checkbox to agree to the Terms and Conditions and Privacy Policy before proceeding.");
            }
        }

        // Function for Close Button of the update TACPP modal
        function closeUpdateModal() {
            // If user closes update modal without agreeing, redirect them.
            window.location.href = "https://shop.lakhiairconditioners.com/NOTAGR";
        }
        
        // Function for Agree to Update Button of the update TACPP modal
        function continueUpdateAction(event) {
            event.preventDefault();
            var isChecked = document.getElementById("agreeUpdate").checked;
            if (isChecked) {
                localStorage.setItem('agreedTermsVersion', currentTermsVersion); // Update version in localStorage
                document.getElementById("updateTacppModal").style.display = "none";
            } else {
                alert("Please tick the checkbox to agree to the updated Terms and Conditions and Privacy Policy before proceeding.");
            }
        }


        // Check localStorage on page load for both initial agreement and version
        document.addEventListener('DOMContentLoaded', function() {
            const hasAgreed = localStorage.getItem('hasAgreedToTerms');
            const agreedVersion = localStorage.getItem('agreedTermsVersion');
            
            const tacppModal = document.getElementById("tacpp");
            const updateTacppModal = document.getElementById("updateTacppModal");

            console.log('DOMContentLoaded: hasAgreed:', hasAgreed, 'agreedVersion:', agreedVersion, 'currentTermsVersion:', currentTermsVersion);

            if (hasAgreed !== 'true') {
                // User has NEVER agreed before, show initial modal
                console.log('Showing initial TACPP modal.');
                tacppModal.style.display = "block";
                updateTacppModal.style.display = "none"; // Ensure update modal is hidden
            } else {
                // User HAS agreed before, now check version
                // Use parseFloat for numerical comparison, provide fallback for invalid values
                const parsedAgreedVersion = parseFloat(agreedVersion) || 0; // Treat invalid/missing as 0
                const parsedCurrentTermsVersion = parseFloat(currentTermsVersion) || 0;

                if (parsedAgreedVersion < parsedCurrentTermsVersion) {
                    // Version is old or missing, show update modal
                    console.log('Showing TACPP update modal.');
                    updateTacppModal.style.display = "block";
                    tacppModal.style.display = "none"; // Ensure initial modal is hidden
                } else {
                    // All good, user has agreed to current version
                    console.log('User has agreed to current TACPP version. Hiding all modals.');
                    tacppModal.style.display = "none";
                    updateTacppModal.style.display = "none";
                }
            }
        });
        // --- End Terms and Conditions Modal Logic ---
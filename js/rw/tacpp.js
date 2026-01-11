const tacppElement = document.getElementById('tacpp-el')

const tacppContent = `
    <!-- Terms and Conditions Modal (Initial Agreement) -->
    <div id="tacpp" class="w3-modal-content">
        <div class="w3-center" style="margin-bottom:20px;">
            <span 
                onclick="closeModal()" 
                class="close-button" 
                title="Close Modal">
                Close ×
            </span>
            <h2>Please Agree to Proceed</h2>
        </div>
        <form class="w3-container">
            <!-- Agreement Checkbox -->
            <div class="w3-section" style="margin-bottom:20px; text-align:left;">
                <input type="checkbox" id="agree" title="Agree to the updated Terms and Conditions and Privacy Policy">
                <label for="agree">
                    I agree to the updated 
                    <a href="https://shop.lakhiairconditioners.com/info/TAC">
                        Terms and Conditions
                    </a> 
                    and 
                    <a href="https://shop.lakhiairconditioners.com/info/PP">
                        Privacy Policy
                    </a>.
                </label>
            </div>
            <!-- Disclaimer Section -->
            <p style="font-size:14px; margin-bottom:20px;">
                * Prices may not be accurate, and not all products are listed.<br>
                *product may not be in stock or may not even be buyable anymore
            </p>
            <!-- Continue Button -->
            <div class="w3-center">
                <button 
                    type="button"
                    class="btn-modal" 
                    onclick="continueAction(event)">
                    Continue
                </button>
            </div>
        </form>
    </div>

    <!-- Terms and Conditions Update Modal -->
    <div id="updateTacppModal" class="w3-modal-content">
        <div class="w3-center" style="margin-bottom:20px;">
            <span 
                onclick="closeUpdateModal()" 
                class="close-button" 
                title="Close Modal">
                Close ×
            </span>
            <h2>Terms and Conditions Updated</h2>
        </div>
        <form class="w3-container">
            <!-- Update Agreement Checkbox -->
            <div class="w3-section" style="margin-bottom:20px; text-align:left;">
                <p>Our Terms and Conditions and Privacy Policy have been updated. Please review the changes and agree to continue.</p>
                <input type="checkbox" id="agreeUpdate">
                <label for="agreeUpdate">
                    I agree to the updated 
                    <a href="https://shop.lakhiairconditioners.com/info/TAC">
                        Terms and Conditions
                    </a> 
                    and 
                    <a href="https://shop.lakhiairconditioners.com/info/PP">
                        Privacy Policy
                    </a>.
                </label>
            </div>
            <!-- Continue Button for Update -->
            <div class="w3-center">
                <button 
                    type="button"
                    class="btn-modal" 
                    onclick="continueUpdateAction(event)">
                    Agree to Update
                </button>
            </div>
        </form>
    </div>
    `
if (tacppElement) {
    tacppElement.innerHTML = tacppContent;
}

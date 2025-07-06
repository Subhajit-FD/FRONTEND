let btn = document.getElementById("generate");
let otpDisplay = document.querySelectorAll(".slot")

btn.addEventListener('click',()=>{
    let otp = "";
    for (let i = 0; i < 5; i++) {
        otp += Math.floor(Math.random() * 10);
    }
    otpDisplay.forEach((slot, index) => {
        slot.textContent = otp[index];
    });
})
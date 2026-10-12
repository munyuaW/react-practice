import { useState, useEffect } from "react";

const OTPGenerator = () => {
  const [otp, setOtp] = useState(null);
  const [count, setCount] = useState(0);
  const handleClick = () => {
    const randomNum = Math.floor(Math.random() * 900000) + 100000;
    setOtp(randomNum);
    setCount(5);
  };

  useEffect(() => {
    let timerId;
    if (count > 0) {
      timerId = setInterval(() => setCount(count - 1), 1000);
    }

    return () => clearInterval(timerId);
  }, [count]);

  return (
    <div>
      <h2 id="otp-display">
        {otp ? otp : "Click 'Generate OTP' to get a code"}
      </h2>
      <p id="otp-timer" aria-live="polite">
        {count > 0
          ? `Expires in: ${count} seconds`
          : otp && "OTP expired. Click the button to generate a new OTP."}
      </p>
      <button
        id="generate-otp-button"
        onClick={handleClick}
        disabled={count > 0}>
        Generate OTP
      </button>
    </div>
  );
};

export default OTPGenerator;

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Live Match Updates</title>
    <style>
        /* Styling for the image card1 container */
        .card1 {
            width: 100%;
            margin: 0px;
            border: 2px solid #ddd; /* Border around the card1 */
            border-radius: 10px; /* Rounded corners */
            overflow: hidden;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.7);
            position: relative;
            background-color: white;
            transition: transform 0.3s ease;
        }

        .card1:hover {
            transform: translateY(-10px); /* Slightly raise card1 on hover */
        }

        /* Styling for hoverable images */
        .card1 img {
            width: 100%;
            height: auto;
            display: block;
            transition: opacity 0.3s ease;
        }

        /* caption1 styling */
        .caption1 {
            padding: 10px;
            text-align: center;
            font-size: 23px;
            color: green;
            background-color: black;
            border-top: 1px solid #ddd;
            font-weight: bold; /* Make the title bold */
        }

        /* description1 styling */
        .description1 {
            font-size: 15px;
            color: yellow; /* Slightly gray color for description1 */
            margin-top: 5px;
        }

        /* Countdown Timer Styling */
        .countdown-timer {
            position: absolute;
            bottom: 10px;
            right: 10px; /* Align the countdown timer to the top right corner */
            background-color: rgba(0, 0, 0, 0.7);
            color: white;
            font-size: 14px;
            padding: 0px 0px;
            border-radius: 5px;
        }

        /* Styling for blinking "Live Now" button */
        .blink-button1 {
            position: absolute;
            bottom: 10px;
            right: 10px;
            padding: 2px 5px;
            background-color: red;
            color: white;
            font-size: 16px;
            font-weight: bold;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            display: none; /* Hidden by default */
        }

        .blink-button1:hover {
            background-color: darkred;
        }

        /* Blinking animation */
        @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
        }

        .blink-button1 {
            animation: blink 0.5s infinite; /* Faster blinking effect (0.5s) */
        }
 /* Hide underline in links */
        .card1 a {
            text-decoration: none;
        }
        /* Ensure responsiveness */
        @media (max-width: 600px) {
            .card1 {
                width: 100%; /* Adjust card1 width on small screens */
            }
        }
    </style>
    <script>
        // Set the future event time (adjust the date and time)
        const eventTime = new Date('Mar 22, 2025 13:30:00'); // Set the event date and time

        // Function to update the countdown timer
        function updateCountdownTimer() {
            const currentTime = new Date();
            const timeRemaining = eventTime - currentTime;

            if (timeRemaining <= 0) {
                // Hide countdown timer and show the "Live Now" button
                document.getElementById('countdown-timer').style.display = 'none'; // Hide countdown timer
                document.getElementById('live-button').style.display = 'inline-block'; // Show Live Now button
                return;
            }

            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            document.getElementById('countdown-timer').innerHTML = 
                days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
        }

        // Run the check function every second to update countdown in real time
        setInterval(updateCountdownTimer, 1000); // Update every second (1000 ms)

        // Run the check function on page load
        window.onload = function() {
            updateCountdownTimer(); // Update timer immediately on page load
        }

        // Function to open a link in a new tab
        function openLink(url) {
            window.open(url, '_blank'); // Open the link in a new tab
        }
    </script>
</head>
<body>
    <!-- Image card1 with caption1, Bold Title, and description1 -->
    <div class="card1"><a href="https://bindaaslinks.com/36B3zMu">
        <img src="https://iili.io/3Fw7LmP.md.jpg" 
             alt="INDIA vs ENGLAND" >
        <div class="caption1">
         KKR vs RCB
            <p class="description1">
              India Premier Ieague  🏆| Match no. 1 |
            </p>
        </div>
        <div class="countdown-timer" id="countdown-timer"></div> <!-- Countdown Timer -->
        <button class="blink-button1" id="live-button">Live Now</button> </a><!-- Live Now Button -->
    </div>
</body>
</html>


<!------->



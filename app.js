// Set the date we're counting down to
const countDownDate = new Date('Nov 5, 2021 15:37:25').getTime();

// Update the count down every 1 second
const x = setInterval(function() {

  // Get today's date and time
  const now = new Date().getTime();

  // Find the distance between now and the count down date
  const distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"

  let snippet = `
                
                <div class="wrapper">

                    <div class="box">

                        <h3>${days}</h3>
                        <p>days</p>

                    </div>

                    <div class="box">

                        <h3>${hours}</h3>
                        <p>hours</p>

                    </div>

                    <div class="box">

                        <h3>${minutes}</h3>
                        <p>minutes</p>

                    </div>


                    <div class="box">

                        <h3>${seconds}</h3>
                        <p>seconds</p>

                    </div>

                </div>
                
                
                `;

  document.querySelector('.timer-section').innerHTML = snippet;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.querySelector('.timexpire-text').style.display = 'block';
    document.querySelector('.timer-section').style.display = 'none'
  }
}, 1000);
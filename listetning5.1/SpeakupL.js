  const answers = {
      q1: ["minibus", "by minibus", "a minibus"],
      q2: ["15", "15 people"],
      q3: ["april 18th", "18th april", "april the 18th"],
      q4: ["palisades", "pallisades"],
      q5: ["B", "D"],
      q7: ["280"],
      q8: ["14"],
      q9: ["20%", "20 percent"],
      q10: ["39745T"]
    };

    const highlights = {
      q1: "by <span class='highlight'>minibus</span>",
      q2: "only take up to <span class='highlight'>fifteen people</span>",
      q3: "which is <span class='highlight'>April the 18th</span>",
      q4: "called The <span class='highlight'>Pallisades</span>",
      q5: "<span class='highlight'>guided bushwalk</span> or <span class='highlight'>table tennis</span>",
      q7: "actually $<span class='highlight'>280</span>",
      q8: "made at least <span class='highlight'>fourteen</span> days",
      q9: "pay a <span class='highlight'>20%</span> deposit",
      q10: "it's <span class='highlight'>three nine seven, four five, T</span>"
    };

    function submitAnswers() {
      let correct = 0;
      const selected = [];
      ["a", "b", "c", "d", "e"].forEach(letter => {
        if (document.getElementById(`q5${letter}`).checked) {
          selected.push(document.getElementById(`q5${letter}`).value);
        }
      });

      for (let i = 1; i <= 4; i++) {
        const ans = document.getElementById(`q${i}`).value.toLowerCase().trim();
        if (answers[`q${i}`].includes(ans)) correct++;
      }

      if (JSON.stringify(selected.sort()) === JSON.stringify(answers.q5.sort())) correct += 2;

      if (answers.q7.includes(document.getElementById("q7").value.trim())) correct++;
      if (answers.q8.includes(document.getElementById("q8").value.trim())) correct++;
      if (answers.q9.includes(document.getElementById("q9").value.toLowerCase().trim())) correct++;
      if (answers.q10.includes(document.getElementById("q10").value.toUpperCase().trim())) correct++;

      // Show script with highlighted answers
      const scriptBox = document.getElementById("scriptBox");
      scriptBox.style.display = "block";
      scriptBox.innerHTML = `
<strong>RECEPTIONIST:</strong> Good afternoon, Dream Time Travel. How can I help you?<br>
<strong>CUSTOMER:</strong> Oh hello. I’m interested in the holidays you offer along the coast near here.<br>
<strong>RECEPTIONIST:</strong> Yes. We operate several tours up the coast. Where in particular did you want to go?<br>
<strong>CUSTOMER:</strong> Well, I like the sound of the holiday that mentioned whales. Was it ‘Whale Watching’?<br>
<strong>RECEPTIONIST:</strong> Oh, that’s our <span class="highlight">Whale Watch Experience</span>. It’s very popular and it’s based in a lovely little town with nice beaches.<br>
<strong>CUSTOMER:</strong> Oh right, and how long does it last?<br>
<strong>RECEPTIONIST:</strong> It’s two days – that includes four hours’ travel time each way from here.<br>
<strong>CUSTOMER:</strong> Good, I don’t want to be away any longer than that. So is that by coach?<br>
<strong>RECEPTIONIST:</strong> Actually it’s <span class="highlight">by minibus</span>. We like to keep those tours small and personal so we don’t take a whole coachload of people. In fact, we only take up to <span class="highlight">15 people</span> on this tour, although we do run it with just twelve or thirteen.<br>
<strong>CUSTOMER:</strong> Oh, right. So do you run these tours often?<br>
<strong>RECEPTIONIST:</strong> Well it depends on the time of year. Of course, in peak times like the summer holidays, we do them every weekend, but at the moment it’s usually once a month at most.<br>
<strong>CUSTOMER:</strong> And when is the next one going?<br>
<strong>RECEPTIONIST:</strong> Mmm, let me see. Um, there’s one in <span class="highlight">April the 18th</span>, and then we don’t have another one until June the 2nd.<br>
<strong>CUSTOMER:</strong> All right, and is April a good time to go?<br>
<strong>RECEPTIONIST:</strong> Pretty good. Though the really good time is later in the year. I have to say though that the whale sighting is only one of the many things offered.<br>
<strong>CUSTOMER:</strong> Really?<br>
<strong>RECEPTIONIST:</strong> Yes. The hotel itself where you stay has great facilities. It’s called <span class="highlight">Palisades</span>.<br>
<strong>CUSTOMER:</strong> The Paris what?<br>
<strong>RECEPTIONIST:</strong> No, it’s actually The Pallisades, P-A-L-L-I-S-A-D-E-S. It’s right on the main beach there.<br>
<strong>CUSTOMER:</strong> Oh, I see.<br>
<strong>RECEPTIONIST:</strong> All of the rooms have nice views and the food is really good there too.<br>
<strong>CUSTOMER:</strong> Oh right.<br>
<strong>CUSTOMER:</strong> And what about the other things? You know, that are included in the price.<br>
<strong>RECEPTIONIST:</strong> Oh, there are lots of things. If you don’t want to do the whale watch cruise, your guide will take anyone who is interested either on a <span class="highlight">bushwalk</span> through the national park near the hotel, and there’s no extra charge for that, or on a fishing trip. That’s an extra $12 I think. And there’s also a reptile park in town – that costs more or less the same.<br>
<strong>CUSTOMER:</strong> No, I think I’d prefer whales to snakes.<br>
<strong>RECEPTIONIST:</strong> Yeah. And if you just want to relax you are free to sit by the hotel pool or go down the beach. Oh, and they also have tennis courts at the hotel, but you have to pay for those by the hour. But there are <span class="highlight">table tennis</span> tables downstairs and they’re part of the accommodation package. Just speak to your guide.<br>
<strong>CUSTOMER:</strong> Well that sounds good. So how much is the basic tour price?<br>
<strong>RECEPTIONIST:</strong> At this time of year it’s usually around $300 but let me check. Er…oh, it’s actually <span class="highlight">280</span>.<br>
<strong>CUSTOMER:</strong> And the next tour, are there any places on that one?<br>
<strong>RECEPTIONIST:</strong> HOW many people is it for?<br>
<strong>CUSTOMER:</strong> There are two of us.<br>
<strong>RECEPTIONIST:</strong> Yes, that should be fine. Can I just mention that we require all bookings to be made at least <span class="highlight">14</span> days before you travel to avoid cancellations of tours? And if you cancel within seven days of departure you will have to pay 50% of your total booking.<br>
<strong>CUSTOMER:</strong> OK.<br>
<strong>RECEPTIONIST:</strong> And you also need to pay a <span class="highlight">20%</span> deposit at the time of booking.<br>
<strong>CUSTOMER:</strong> Can I pay that by credit card?<br>
<strong>RECEPTIONIST:</strong> Yes, you can.<br>
<strong>CUSTOMER:</strong> All right, what I’ll do is I’ll talk to my partner and get back to you.<br>
<strong>RECEPTIONIST:</strong> Fine. So I’ll make a provisional booking, shall I? – two for the Whale Watch Experience. Let me issue you with a customer reference number for when you call back. Do you have a pen?<br>
<strong>CUSTOMER:</strong> Yes.<br>
<strong>RECEPTIONIST:</strong> OK, it’s <span class="highlight">39745T</span>. That’s T for tango. When you call back, ask to speak to the Tour Manager, that’s me, Tracy.<br>
<strong>CUSTOMER:</strong> Fine, I will.<br>
        `;

      alert(`You got ${correct} out of 10 correct!`);
    }

    // Auto-move to next input on Enter
    document.querySelectorAll("input[type='text']").forEach((el, i, arr) => {
      el.addEventListener("keydown", function(e) {
        if (e.key === "Enter") {
          e.preventDefault();
          if (i + 1 < arr.length) arr[i + 1].focus();
          else document.getElementById("submitBtn").focus();
        }
      });
    });
      // Load theme from localStorage or system preference
    (function () {
      const savedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const theme = savedTheme || (prefersDark ? 'dark' : 'light');
      document.documentElement.setAttribute('data-theme', theme);
      document.getElementById('theme-icon').textContent = theme === 'dark' ? '☀️' : '🌙';
    })();

    // Toggle theme manually
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  document.getElementById('theme-icon').textContent = newTheme === 'dark' ? '☀️' : '🌙';
}

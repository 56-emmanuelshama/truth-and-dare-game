const truths = [
    "What's your biggest fear?",
    "Have you ever lied to your best friend?",
    "What's the most embarrassing thing you've done?",
    "If you could be invisible, what would you do first?",
    "What's one secret you've never told anyone?"
  ];
  
  const dares = [
    "Do 10 pushups right now.",
    "Sing the chorus of your favorite song.",
    "Do a funny dance for 10 seconds.",
    "Talk in a cartoon voice for one round.",
    "Pretend to be a cat for 30 seconds."
  ];
  
  const questionBox = document.getElementById('question-box');
  
  function getTruth() {
    const index = Math.floor(Math.random() * truths.length);
    questionBox.textContent = "🟡 Truth: " + truths[index];
  }
  
  function getDare() {
    const index = Math.floor(Math.random() * dares.length);
    questionBox.textContent = "🔴 Dare: " + dares[index];
  }
  
  function resetGame() {
    questionBox.textContent = "Click below to play!";
  }
  
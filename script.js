const storyText = document.getElementById("story-text");
const audioPlayer = document.getElementById("audio-player");
const storySection = document.getElementById("story-section");

const sampleStories = {
  motivation: {
    text: `The alarm blared at 5:00 AM. You stared at the ceiling, tempted to hit snooze. Just five more minutes, you told yourself. But then something changed. You remembered your goals — the ones that kept you awake late at night. The dreams you promised yourself you'd chase. A fire ignited deep inside your chest.

You stood up. Tired, yes. But determined. You laced your shoes, stepped outside, and breathed in the cold morning air. Each breath reminded you: success isn’t just about talent — it’s about showing up when no one else does.

Today, you choose discipline over comfort. Today, you fight the excuses. Today, you become the version of yourself that you once admired from afar. And even if no one claps for you, you’ll keep going. Because greatness begins in silence — and you're ready to roar.`,
    audio: "https://media.vocaroo.com/mp3/1ndfOfWWqNea"
  },

  romance: {
    text: `She was running late again, hair in a messy bun, shoes unmatched, coffee in one hand and a novel in the other. He watched from the cafe window — the same window seat he took every Saturday at 10:03 AM — pretending to read, but really waiting.

They'd never spoken. Just exchanged glances. A smile. Sometimes a polite nod. But today, something was different. She dropped her coffee, embarrassed. He stood up instinctively, handing her tissues with a grin that said, “It’s okay.”

She laughed. He laughed. That moment stretched longer than it should have. One word led to two, then ten, and soon their empty Saturday mornings were filled with shared playlists, awkward jokes, and late-night calls. Love didn’t arrive like a thunderstorm. It crept in like a sunrise — warm, slow, and impossible to ignore.`,
    audio: "https://media.vocaroo.com/mp3/1cdEa4lD9Knq"
  },

  thriller: {
    text: `It started with a single message: "I see you." You laughed it off. Probably a prank. But then your phone buzzed again — your name, your location, even the color of your shirt.

You looked around. Empty street. Streetlights flickering. The kind of quiet that makes your skin crawl. You ran. Footsteps followed. You stopped. They stopped. Panic wrapped itself around your chest. You ducked into a narrow alley, heart pounding.

That’s when you saw the shadow. Tall. Still. Watching. A phone in his hand… your photo on the screen.

You screamed. But no one came.

The next morning, the alley was empty. No footprints. No trace. Just your phone on the ground — with a new photo. Of you… sleeping in your bed.`,
    audio: "https://media.vocaroo.com/mp3/1mOb3FC16UOe"
  }
};


function generateStory() {
  const genre = document.getElementById("genre").value;
  const story = sampleStories[genre];

  storyText.innerText = story.text;
  audioPlayer.src = story.audio;
  audioPlayer.classList.remove("hidden");
  storySection.classList.remove("hidden");

  audioPlayer.load();
  audioPlayer.play().catch(error => {
    console.log("Autoplay blocked, user interaction required.", error);
  });
}

function giveFeedback(feedbackType) {
  alert("Thanks for your feedback: " + feedbackType + " ❤️");
}

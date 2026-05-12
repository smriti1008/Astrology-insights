const ZodiacSigns=[
    "Capricorn", "Aquarius", "Pisces", "Aries", "Tauras", "Gemini",
    "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius"
];

//Based on Date, size 31
const compliments = [ 
    "you have a great sense of humor.",
    "your smile lights up the room.",
    "you bring out the best in people.",
    "you have a heart of gold.",
    "your kindness is contagious.",
    "you're a great listener.",
    "you make the world a better place.",
    "you have an eye for detail.",
    "your creativity is inspiring.",
    "your determination is admirable.",
    "you make people feel seen and valued.",
"your positivity is refreshing.",
"you have such a calming presence.",
"you make ordinary moments special.",
"your energy is uplifting.",
"you inspire people without even trying.",
"you’re effortlessly thoughtful.",
"you have a beautiful way with words.",
"you make people feel comfortable instantly.",
"your laugh is genuinely contagious.",
"you bring light wherever you go.",
"you have a naturally kind soul.",
"you make people believe in themselves.",
"your presence feels like home.",
"you handle things with such grace.",
"you’re stronger than you realize.",
"you have an amazing way of understanding people.",
"you make conversations feel easy.",
"your vibe is unmatched.",
"you leave a positive mark on everyone you meet."
];

//size 20
const victimCardCompliments = [ 
    "you always do good for people, but they don't reciprocrate it.",
    "you give so much, but rarely get anything in return.",
    "you always put others first, even when they don't deserve it.",
    "you sacrifice so much, yet people rarely acknowledge it.",
    "you have a heart of gold, but others take it for granted.",
    "you work so hard, yet your efforts often go unnrecognised.",
    "you give your all, yet people barely notice the effort behind it.",
"you’re always there for others, but no one seems to ask if you’re okay.",
"you carry so much silently, and still show up every day.",
"you put others first, even when you’re the one who needs care.",
"you keep going, even when no one sees how tired you are.",
"you forgive easily, even when people don’t deserve it.",
"you stay strong for everyone, but rarely get the same in return.",
"you pour love into people who don’t always value it.",
"you hide your struggles just to keep others comfortable.",
"you give more than you ever receive, and still don’t complain.",
"you’re overlooked, even when you’re doing your absolute best.",
"you support everyone else’s dreams, while yours take a back seat.",
"you hold everything together, even when you feel like falling apart.",
"you deserve appreciation that you rarely get."
];

//size 30
const recommendations = [
    "find a street dog and spread kindness.",
    "plant a tree and rupture it.",
    "read a book that inspires you to grow.",
    "donate clothes you don't wear in charity.",
    "smile at strangers and brighten their day.",
    "learn a new skill or hobby.",
    "feed a hungry animal and show compassion.",
"plant a tree and nurture it as it grows.",
"write a kind note to someone who needs it.",
"help a friend without expecting anything in return.",
"call your parents and check on them.",
"compliment someone genuinely today.",
"volunteer for a cause you care about.",
"pick up litter and keep your surroundings clean.",
"support a local business or creator.",
"practice gratitude and appreciate little things.",
"listen to someone without interrupting.",
"forgive someone and free your heart.",
"encourage someone who feels like giving up.",
"share your knowledge with someone eager to learn.",
"take care of your mental health.",
"drink enough water and stay healthy.",
"step out of your comfort zone and grow.",
"spend time with nature and recharge yourself.",
"be patient even when it’s difficult.",
"spread positivity through your words.",
"help someone in need, even in small ways.",
"believe in yourself a little more each day.",
"create something that makes you happy.",
"end your day by reflecting on what went right.",

];


const predictions = [
    "you will become a crorepati.",
    "success is just around the corner for you.",
    "a surprising adventure is coming your way.",
    "your hardwork will pay off.",
    "you will get great success.",
    "your dream job is closer to you.",
    "your efforts are about to bring amazing results.",
"something big is about to change your life for the better.",
"you are on the path to achieving your biggest goals.",
"great opportunities are waiting for you.",
"your patience will soon be rewarded.",
"you are closer to success than you think.",
"your future is filled with abundance and growth.",
"everything you’ve been working for is aligning.",
"you will achieve something you once thought was impossible.",
"your consistency will lead you to greatness.",
"you are destined for something extraordinary.",
"your goals are turning into reality step by step.",
"you will soon celebrate a major win.",
"good news is on its way to you.",
];


const form = document.getElementById('Astroform');
form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);

    const text = `Hi ${name} ${surname}, Your Zodiac sign is ${ZodiacSigns[month-1]}
    . ${compliments[day-1]}. ${victimCardCompliments[year%20]}. ${recommendations[(day*month)%30]}.
    ${predictions[(name.length*surname.length)%20]}`;

    document.getElementById('result').textContent = text;
})

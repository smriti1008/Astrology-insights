const quotes = [
    "Keep faith, it will work anyhow",
    "Just one more step",
    "You are almost there"
]

function GenerateQuote(){
    const randomIndex = Math.floor(Math.random()*quotes.length)
    document.getElementById("quote").innerText = `${quotes[randomIndex]}`
}
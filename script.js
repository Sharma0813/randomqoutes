const btn = document.getElementById("btn");
const output= document.querySelector(".output");

let quote= [
    " Almost everything will work again if you unplug it for a few minutes, including you." , "Time you enjoy wasting is not wasted time." , "Self-care is how you take your power back." , "Being happy never goes out of style." , "No one can make you feel inferior without your consent." , "Action expresses priorities" , "The key is not to prioritize what's on your schedule, but to schedule your priorities." , "The only way you're going to reach places you've never gone is if you trust God's direction to do things you've never done" , "For I know the plans I have for you, declares the LORD, plans to prosper you and not to harm you, plans to give you hope and a future." ,
    "Perhaps you were born for such a time as this." , "God’s plan may take time, but His timing is always perfect." , "Patience is not just about waiting; it’s about trusting God's timing." ,
]

btn.addEventListener("click",()=>{
    let random = Math.floor(Math.random()*quote.length)
    output.textContent = quote[random];
})
let TextEl = document.getElementById("text")
let SpeedEl = document.getElementById("speed")
let text = "Ne volimo skolu jer je skola dosadnaaaaaaaaaaaaaaaaaa"
let textPosition = 1
let speed = 500 / SpeedEl.value

WriteText()

function WriteText(){
    TextEl.innerText = text.slice(0, textPosition)
    textPosition++
    if (textPosition > text.length){
        textPosition = 1
    }
    setTimeout(WriteText, speed)
}
SpeedEl.addEventListener('input',(e)=>{
    speed = 500 / e.target.value
})
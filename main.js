
// OnClick
const button1 = document.getElementById("button1")
button1.addEventListener("click", (event) => {
    console.log(event)
    document.querySelector("#output1").innerHTML += "You clicked me! "
})

//OnMouseOver
const button2 = document.getElementById("button2")
button2.addEventListener("mouseover", (event) => {
    console.log(event)
    document.querySelector("#output2").innerHTML += "You hovered over me! "
})

// OnFocus & OnBlur 
const input1 = document.getElementById("input1")
input1.addEventListener("focus", onFocusFunction)
input1.addEventListener("blur", onBlurFunction)

function onFocusFunction() {
    document.getElementById("input1").style.backgroundColor="pink";
}

function onBlurFunction() {
    document.getElementById("input1").style.backgroundColor="yellow";
}

// KeyUp
const input2 = document.getElementById("input2")
input2.addEventListener("keyup", (event => {
    console.log(event)
    const content = document.getElementById("input2").value 
    document.getElementById("output3").innerHTML = "KeyUp output: " + content;
}))

// OnCopy
const input3 = document.getElementById("input3")
input3.addEventListener("copy", (event) => {
    alert("You copied me!")
})

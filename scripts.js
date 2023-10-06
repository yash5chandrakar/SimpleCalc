function handleInput(item){
    let outputItem = document.getElementById("output")
    let currentOutput = outputItem.innerHTML
    let changeOutput = ["clear","calculate"]
    if(!changeOutput.includes(item)){
        if(currentOutput === "0"){
            outputItem.innerHTML = item
        }
        else{
            outputItem.innerHTML += item
        }
    }
    else{
        if(item==="clear"){
            outputItem.innerHTML = "0"
        }
        else{
            outputItem.innerHTML = eval(currentOutput).toFixed(2).replace(/[.,]00$/, "")
        }
    }
}
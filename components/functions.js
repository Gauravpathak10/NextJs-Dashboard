export function isChecked() {
    const Toggle = document.getElementById('look')
    if (Toggle.checked) {
        document.body.style.background = "white"
        document.body.style.color= "black"
    }
    else {
        document.body.style.background = "black"
        document.body.style.color= "white"
        
    }

}

export function clicked() {
    document.getElementById('demo').style.displfirstContainery = "none"
}

export function seened() {
    const firstContainer = document.getElementById('one')
    const secondContainer = document.getElementById('Two')
    const BtnOne = document.getElementById('btnOne').addEventListener('click', () => {
        secondContainer.style.display = "none"
        firstContainer.style.display = "block"
    })
    const BtnTwo = document.getElementById('btnTwo').addEventListener('click', () => {
        firstContainer.style.display = "none"
        secondContainer.style.display = "block"
    })


}


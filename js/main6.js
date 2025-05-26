const input = document.getElementById("input")



const handleSubmit = () => {

    if (!input.value.includes("@")) {
        document.getElementById("error").innerText = "لطفا یک ایمیل وارد کنید"
    } 
}
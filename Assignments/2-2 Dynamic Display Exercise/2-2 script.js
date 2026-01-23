document.getElementById("contactType").addEventListener("change", (event) => {
    const value = event.currentTarget.value;

    document.getElementById("T").style.display = "none";
    document.getElementById("C").style.display = "none";
    document.getElementById("P").style.display = "none";

    if (value !== "") {
        document.getElementById(value).style.display = "block";
    }
});
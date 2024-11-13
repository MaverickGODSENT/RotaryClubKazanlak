function loadNav(){
    fetch('navLayout.html')
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector('#nav').innerHTML = data;
    })
}
loadNav();
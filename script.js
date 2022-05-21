function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }

;(() => {
    const searchParams = new URLSearchParams(window.location.search)
    const name = searchParams.get('email')
    console.log(name)
    const domName = document.querySelector('[data-name]')
    console.log(domName)
  
    if(domName) {
      domName.textContent = 'We will send you an email on ' + email
    }
})()

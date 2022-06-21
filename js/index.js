const routes = {
  "/": "/pages/home.html",
  "/universe": "/pages/universe.html",
  "/exploration": "/pages/exploration.html",
  404: "/pages/404.html"
}

function changeBackground() {
  let { pathname } = window.location
  let route = routes[pathname] 

  switch(route) {
    case "/pages/home.html":
      document.body.style.backgroundImage = "url('/assets/mountains-universe-1\ 1.png')"
      break;
    case "/pages/universe.html":
      document.body.style.backgroundImage = "url('/assets/mountains-universe-2.png')"
      break;
    case "/pages/exploration.html":
      document.body.style.backgroundImage = "url('/assets/mountains-universe-3.png')"
      break;  
      default:
        document.body.style.backgroundImage = "url('/assets/mountains-universe-1.png')"
  }
}

function route(event) {
  event = event || window.event
  event.preventDefault()
  
  window.history.pushState({}, "", event.target.href)
  
  handle()
  changeBackground()
}

function handle() {
  const { pathname } = window.location
  const route = routes[pathname] || routes[404]
  fetch(route)
  .then(data => data.text())
  .then(html => {
    document.querySelector('#app').innerHTML = html
  })

  
}

handle()

window.onpopstate = () => handle()
window.route = () => route()




<!-- ASYNCHRONOUS JS -->

  const request = new XMLHttpRequest();

new XMLHttpRequest(); ==> will create a new request which enables for data fetching methods like GET Send etc to work

=> response.open('GET', 'url from which the data is fetched')

=> response.send(); ==> will send data but will wait for an         eventListener to fire
that is the 'load' eventListener!

=>  request.addEventListener("load", function () {})

const [data] = JSON.parse(this.responseText); => for converting recieved Json data into proper Accessible Object. 



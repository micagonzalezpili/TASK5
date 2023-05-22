const { createApp } = Vue; // ACCEDL A LA PROP DEL OBJETO

const app = createApp({

    data() { // PROP REACTIVAS
        return {
            infoData: [],
            events: [],
           eventsId: [],
           params: [],
           dataParams: []
            
           


        }
    },

    created() { // LO QUE EJECUTO MIENTRAS LA APP ESTE CREADA
        const url = "https://mindhub-xj03.onrender.com/api/amazing"
        fetch(url)
            .then(res => res.json())
            .then(data => {
                this.infoData = data
                this.events = data.events
                console.log(this.events);
                this.params = new URLSearchParams(location.search)
                this.dataParams = this.params.get("_id")
                this.eventsId = this.events.find(event => event._id == this.dataParams)
                console.log(this.eventsId);
                console.log(this.dataParams);
                console.log(this.params);



            })
            .catch(error => { console.log(error) })
    },

    methods: { // FN DE MI APP 

    },

    computed: {
               
       

    }

})
app.mount("#app")


/* fetch("https://mindhub-xj03.onrender.com/api/amazing")
  .then(res => res.json())
  .then(data => {
    const allEvents = data.events
    console.log(allEvents);
    const contenedorDetails = document.getElementById("contedorDetails")
    let params = new URLSearchParams(location.search)
    const datosParams = params.get("_id") // me devuelve el ID de c evento
    const evento = allEvents.find(events => events._id == datosParams) // retorna el elemento q encuentra en el array de events y si coinciden lo guarda
    console.log(allEvents);
    console.log(params);
    console.log(evento);

    contenedorDetails.innerHTML = crearDetail(evento)
  })



// funcion para imprimir la card en html

function crearDetail(events) {
  return `  <div class="card mb-3 ms-4 d-flex col-12 justify-content-center align-items-center" style="max-width: 800px; height: 500px; background-color:  #d3c3f1;">
    <div class="row g-0">
    <div class="col-md-4 align-self-center">
      <img src="${events.image}" class="img-fluid rounded-start ms-3" alt="festival">
    </div>
    <div class="col-md-8 d-flex justify-content-evenly" style=" height: 500px">
      <div class="card-body align-self-center ms-3">
        <h5 class="card-title text-center mb-3">${events.name}</h5>
        <p class="card-text">Date: "${events.date}"<br>
          Description: "${events.description}"<br>
          Category:"${events.category}"<br>
          Place: "${events.place}"<br>
          Capacity: ${events.capacity} <br>
          Price: $${events.price}</p>
          <p class="card-text ms-5"> ${events.assistance ? `<p>Assistance: ${events.assistance}</p>` : `<p>Estimate: ${events.estimate} </p>`}</p> 
      </div>
    </div>  
  </div>
  </div>`

} */


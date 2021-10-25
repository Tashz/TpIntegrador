let seccion = document.getElementById("seccionuwu");
const comprarTickets=()=>{
    seccion.innerHTML=`
        <div class="container">
            <div class="row">
                <div class="col col-md-10 offset-md-1 col-lg-8 offset-lg-2 pt-2" >
                    <div class="card-group">
                        <div class="card">
                            <div class="card-body border border-primary mr-2">
                                <h5 class="card-title text-center"> Estudiante </h5>
                                <p class="card-text text-center"> Tienen un descuento </p>
                                <p class="card-title text-center font-weight-bold"> 80% </p>
                                <p class="card-text text-center"><small class="text-muted"> *Presentar documentación </small></p>

                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body border border-info mr-2">
                                <h5 class="card-title text-center"> Trainee </h5>
                                <p class="card-text text-center"> Tienen un descuento </p>
                                <p class="card-title text-center font-weight-bold"> 50% </p>
                                <p class="card-text text-center"><small class="text-muted"> *Presentar documentación </small></p>

                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body border border-warning mr-2">
                                <h5 class="card-title text-center"> Junior </h5>
                                <p class="card-text text-center"> Tienen un descuento </p>
                                <p class="card-title text-center font-weight-bold"> 15% </p>
                                <p class="card-text text-center"><small class="text-muted"> *Presentar documentación </small></p>

                            </div>
                        </div>
                        
                    </div>
                </div>
            
            </div> 
            <div class="row">
                <div class="col text-uppercase text-center">
                    <small>Venta</small>
                    <h2> valor de ticket $200</h2>
                </div>
            </div>  
            <div class="row">
                <div class="col col-md-10 offset-md-1 col-lg-8 offset-lg-2 pt-2 " >    
                    <form class="row g-4  ">
                        <div class="form">
                            <div class="d-flex ">
                                <div class="form-group col-12 col-md-6 py-1 px-1 ">
                                    <input type="text" class="form-control" placeholder="Nombre">
                                </div>
                                <div class="form-group col-12 col-md-6 py-1 px-1  ">
                                    <input type="text" class="form-control" placeholder="Apellido">
                                </div>
                            </div>
                            <div class="form-group col-12 col-md-12 py-1 px-1 ">
                                <input type="email" class="form-control" placeholder="Correo">
                            </div>
                            <div class="d-flex">
                                <div class="form-group col-12 col-md-6  px-1 ">
                                    <label for="">Cantidad</label>
                                    <input id="cantidadEntradas"type="text" class="form-control" placeholder="Cantidad">
                                </div>
                                <div class="form-group col-12 col-md-6  px-1  ">
                                    <label for="categoria">Categoría</label>
                                    <select class="form-select" id="inputState">
                                        <option value="estudiante">Estudiante</option>
                                        <option value="trainee">Trainee</option>
                                        <option value="junior">Junior</option>
                                    
                                    </select>
                                </div>
                            </div>    
                        </div>
                        <div class="form-row">
                            <div class="form-group col">
                                <div id="total" class="alert alert-primary " role="alert">
                                    Total a pagar : $
                                </div>
                            
                            </div>
                        </div>
                        
                        <div class="form-row d-flex">
                             <div class="form-group col col-12 col-md-6 px-1 ">
                                <button type="reset" onclick="limpiar()" class="btn btn-success GrBtn  btn-block">Borrar</button>
                            </div>
                            <div class="form-group col col-12 col-md-6 px-1 ">
                                <button type="button" id="botonCalc" class="btn btn btn-primary btn-success GrBtn  btn-block" data-bs-toggle="modal" data-bs-target="#exampleModal">Resumen</button>
                                <!-- Modal -->
                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Ticket de compra N°</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                       ...
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar/Revisar monto</button>
                                        <button type="button" class="btn btn-primary">Confirmar compra</button>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>           
                        </div>
        
                    </form>
                </div>
            </div>

        </div>
    
    `;
    document.querySelector("#botonCalc").addEventListener('click',()=>{
        let inputs = document.querySelectorAll("input");
        let descuento = document.querySelector("#inputState").value;
        
        
        let comprador = {
            nombre:inputs[0].value,
            apellido:inputs[1].value,
            correo:inputs[2].value,
            cantidad:inputs[3].value,

        };
        calculoTotal(descuento,comprador.cantidad,comprador);
    });

};
const calculoTotal=(desc,cantEnt,comp)=>{
    let resultado = 0;
    let descuento = 0;
    let numT = document.querySelector("#exampleModalLabel")
    for (let index=0 ; index<8;index ++ ){
        numT.innerHTML+=NdTAl();
    }
    let modal=document.querySelector(".modal-body");
    let alert = document.querySelector("#total");
    if (desc=="estudiante"){
        resultado=(cantEnt * 200)*0.2;
        descuento = (cantEnt * 200)*0.8;
        alert.innerHTML="Total a pagar : $";
        alert.innerHTML+=resultado;

    }else if (desc=="trainee"){
        resultado=(cantEnt * 200)*0.5;
        descuento=(cantEnt * 200)*0.5;
        alert.innerHTML="Total a pagar : $";
        alert.innerHTML+=resultado;
    }else{
        resultado=(cantEnt * 200)*0.85;
        descuento=(cantEnt * 200)*0.15;
        alert.innerHTML="Total a pagar : $";
        alert.innerHTML+=resultado;

    };
    modal.innerHTML=`
    <p>Nombre/s: ${comp.nombre}</p>
    <p>Apellido/s: ${comp.apellido}</p>
    <p>Correo: ${comp.correo}</p>
    <p>Cantidad de entradas: ${comp.cantidad}</p>
    <p>Categoría : ${desc}</p>
    <p>Descuento por categoría: ${descuento} pesos.</p>
    <p> Total a pagar: ${resultado} pesos.</p>

`
};
const NdTAl=()=>{
    return Math.floor(Math.random()*9);

};
const limpiar=()=> {
    let alert = document.querySelector("#total");
    alert.innerHTML="Total a pagar : $"


}
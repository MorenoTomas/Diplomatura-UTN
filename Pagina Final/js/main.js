let UbicacionPrincipal = window.pageYOffset;

window.addEventListener("scroll", function(){
let DesplazamientoActual = window.pageYOffset;
if(UbicacionPrincipal>=DesplazamientoActual){
        this.document.getElementsByTagName("nav")[0].style.top = "0px"
 }else{ 
     this.document.getElementsByTagName("nav")[0].style.top = "-100px"
}
UbicacionPrincipal=DesplazamientoActual
})
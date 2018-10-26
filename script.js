window.onload = init;

 function init() {
     let todoList = {
         listHTML: document.getElementById("todoList"),
         listTask: [],
         add(task, priority = false) {
             let element = document.createElement("li");
             let marcar = document.createElement("button");
             marcar.innerText = "Marcar";
             let eliminar = document.createElement("button");
             eliminar.innerText ="eliminar";

            element.innerText = task;
            element.appendChild(marcar);
            element.appendChild(eliminar);

             // Añadir un boton para marcar de marcar
             marcar.addEventListener("click", () => { 
                element.style.textDecoration = "line-through";
                
             });

             // Elmine de la lista
            eliminar.addEventListener("click", function(){
                let parent = element.parentNode;
                if(parent){
                    parent.removeChild(element);
                }
             });
            
            

             if (priority) {
                 this.listTask.unshift({
                     element,
                     task
                 });
                 this.listHTML.insertBefore(element, this.listHTML.childNodes[0]);
             } else {
                 this.listTask.push({
                     element,
                     task
                 });
                 this.listHTML.appendChild(element);
             }
             

             
         }
         
    }
     

     let form = document.managerTask;
     form.addEventListener("submit", (evt) => {
         evt.preventDefault();
         let task = form.task.value;

         let validTask = /.{2,}/;
         if (!validTask.test(task)) {
             console.log("Ingrese una descripcion clara");
             return false;
         }
         
         todoList.add(form.task.value,form.important.checked);
        
     });
 }
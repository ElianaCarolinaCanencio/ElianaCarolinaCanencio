let message = "insolito"
function checkAge(age) {
    let message;
    if (age>=60){
        message="Eres de la tercera edad";
        }
    else if (age<18){
        message = "Eres menor de edad";
    }
    else if(age > 18 && age<59){
        message="eres mayor de edad"
    }
    return message;
        
    }

    function par(num) {
        if (num%2==0) {
            message ="el numero es par"
        }else 
        message = "impar"
    }
    function sumar50() {
        let = sum;
        for (let i = 0; i<=50; i++) {
            if (i%=0) {
                sum=+i
            }   
        }
    }



    console.log(checkAge(12))
    console.log(message)

    /* 
    1. Crear funcion que procese la informacion de un estudiantes
    2. Debe tener 3 parametros o3  argumentos
    3. Determinar si su edad es mayor de 18 o no 
    4. calcular el primerio de calificaciones
    5. determinar el rango de la calificacion final
    6. devolver un objeto json con la informacion

    */

    function proccesstudent(nombre, edad, constcalificacion = [20, 30, 100, 25, 70,80]) {
        const esmayoredad = edad >=18
    
        let promedio =0
        let calificacion = 0
        for (let i= 0; i <= calificacion.length; i++) {
            calificacion+=calificacion[i]

            
            
        }
        
        promedio = calificacion / calificacion.length
        
        const rangopromedio= gradelevel(promedio)

        const informacionestudiante = {
            nombre:nombre,
            edad: esmayoredad ? "Es mayor de edad":"Es menor de edad",
            calificacion:rangopromedio,
        }
        return informacionestudiante
    }

    

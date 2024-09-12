
const body = document.querySelector("body")
const machinesContainer = document.getElementById("container-machines")


class Funcionario{

    constructor(nome){
        this.nome = nome
        this.notificacoes = []
    }

    update(infoUpdate){
       this.notificacoes.push(infoUpdate)
       showNotificatons()
    }
    

}

class Maquina {
    
    constructor(nome,painel){
        this.nome = nome,
        this.temperatura = 0,
        this.umidade = 0,
        this.ligada = false,
        this.status = "",
        this.funcionarios = [],
        this.painels = painel,
        this.info = document.createElement("p"),
        this.info.innerText = `Nome: ${this.nome} \n Temperatura: ${this.temperatura}`
        this.painels.addMachine(this.info)
        
    }

    addFuncionarios(funcionario){
        this.funcionarios.push(funcionario)
    }

    notifySubscribers(text){
        const p = document.createElement("p")
        p.innerText = text
        this.funcionarios.forEach((funcionario) =>{
            funcionario.update(p)
        })
    }

    atualizar(){
        this.temperatura = Math.floor(Math.random() * 201);
        this.notifySubscribers(`Nome: ${this.nome} \n Temperatura: ${this.temperatura}`)
        this.info.innerText =`Nome: ${this.nome} \n Temperatura: ${this.temperatura}`
        return this.info
    }


}

class Operador extends Funcionario{

}
class Gerente extends Funcionario{

}
class Painel {

    update(machine){
        body.appendChild(machine.atualizar())
    }
    addMachine(infoMachine){
        body.appendChild(infoMachine)
    }

}

f1 = new Operador()
f2 = new Gerente()
p1 = new Painel()



f1.nome ="vaipfv"
f2.nome ="vaipfv2"


m1 = new Maquina("Maquina1",p1)
m1.addFuncionarios(f1)
m1.addFuncionarios(f2)
m2 = new Maquina("Maquina2", p1)


const machineList = []

machineList.push(m1)
machineList.push(m2)

m1.temperatura = 64
m1.ligada = true
m1.umidade = 20

const showNotificatons = () =>{
  
    f1.notificacoes.forEach((notify) => {
        body.appendChild(notify)
    })
}


const buildElement = (machine) =>{

    const divContainerMachine = document.createElement("div")

    if(machine.temperatura > 60){
        divContainerMachine.classList.add("machine-container-red")
        
    }
    else{
        divContainerMachine.classList.add("machine-container-green")
    }

    const status = document.createElement("h2")

    status.classList.add("mt-6")
    status.classList.add("mb-10")
    status.classList.add("text-xl")

    if(machine.temperatura > 60){
        status.innerText = "SUPERAQUECIDA"
        status.classList.add("text-red-custom") 
    }
    else{
        status.innerText ="NORMAL"
    }        
    


    const title = document.createElement("h2")

    title.classList.add("mb-20")
    title.classList.add("text-xl")
    title.innerText = "Maquina #003"

    divContainerMachine.appendChild(status)
    divContainerMachine.appendChild(title)

    const divContainerStatus = document.createElement("div")

    divContainerStatus.classList.add("text-start")
    divContainerStatus.classList.add("ml-8")
    divContainerStatus.classList.add("mr-28")
    divContainerStatus.classList.add("mb-24")
    
    

    const estado = document.createElement("p");


    estado.classList.add("text-xl")

    estado.innerText = `Estado: ${machine.ligada}`

    divContainerStatus.appendChild(estado)
    
    const temperaturaText = document.createElement("p")
    temperaturaText.classList.add("text-xl")
    temperaturaText.classList.add("my-4")

    temperaturaText.innerText = `Temperatura: ${machine.temperatura}°C`

    divContainerStatus.appendChild(temperaturaText)

    const umidadeText = document.createElement("p")

    umidadeText.classList.add("text-xl")

    umidadeText.innerText = `Umidade: ${machine.umidade}%`

    divContainerStatus.appendChild(umidadeText)
    

    divContainerMachine.appendChild(divContainerStatus)
    
    machinesContainer.appendChild(divContainerMachine)
}

buildElement(m1)





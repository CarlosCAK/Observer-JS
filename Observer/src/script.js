
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

const showNotificatons = () =>{
  
    f1.notificacoes.forEach((notify) => {
        body.appendChild(notify)
    })
}


const buildElement = (maquina) =>{

    const divContainerMachine = document.createElement("div")

    divContainerMachine.classList.add("machine-container-red")

    const status = document.createElement("h2")

    status.classList.add("mt-6")
    status.classList.add("mb-10")
    status.classList.add("text-red-custom")
    status.classList.add("text-xl")
    status.innerText = "SUPERAQUECIDA"

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

    estado.innerText = "Estado: Ligada"

    divContainerStatus.appendChild(estado)
    
    const temperaturaText = document.createElement("p")
    temperaturaText.classList.add("text-xl")
    temperaturaText.classList.add("my-4")

    temperaturaText.innerText = "Temperatura: 100°C"

    divContainerStatus.appendChild(temperaturaText)

    const umidadeText = document.createElement("p")

    umidadeText.classList.add("text-xl")

    umidadeText.innerText = "Umidade: 20%"

    divContainerStatus.appendChild(umidadeText)
    

    divContainerMachine.appendChild(divContainerStatus)
    
    machinesContainer.appendChild(divContainerMachine)
}

buildElement()
buildElement()
buildElement()



{/* <div class="machine-container-red">
            <h2 class="mt-6 mb-10 text-red-custom text-xl">SUPERAQUECIDA</h2>
            <h2 class="mb-20 text-xl">Maquina #002</h2>
            <div class="text-start ml-8 mr-28 mb-24">
                <p class="text-xl">Estado: <span>Ligada</span></p>
                <p class="text-xl my-4">Temperatura: 75°C</p>
                <p class="text-xl">Umidade: 20%</p>
            </div>
        </div> */}

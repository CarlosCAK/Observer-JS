
const machinesContainer = document.getElementById("container-machines")
let id = 0
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
    title.innerText = `Maquina #00${machine.id}`

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
    
    return divContainerMachine;
}
const idGenerator = () => {
   
        id++;
        return id;
    
}



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
        this.id = idGenerator(),
        this.nome = nome,
        this.temperatura = 60,
        this.umidade = 20,
        this.ligada = false,
        this.status = "",
        this.funcionarios = [],
        this.painel = painel,
        this.info = buildElement(this)
        this.painel.adicionarMaquina(this)
    }

    addFuncionarios(funcionario){
        this.funcionarios.push(funcionario)
    }
    atualizar(){
        this.info = buildElement(this)
        this.painel.atualizarPainel(this)
    }

    notifySubscribers(text){
        
       
    }

    // atualizar(){
    //     this.temperatura = Math.floor(Math.random() * 201);
    //     this.notifySubscribers(`Nome: ${this.nome} \n Temperatura: ${this.temperatura}`)
    //     this.info.innerText =`Nome: ${this.nome} \n Temperatura: ${this.temperatura}`
    //     return this.info
    // }


}

class Operador extends Funcionario{
}
class Gerente extends Funcionario{
}
class Painel {

    constructor(){
        this.exibicoes = []
    }
    adicionarMaquina(machine){
        this.exibicoes.push({
             id : machine.id, 
             content : machine.info
        })
        this.adicionarNaTela()
    }

    atualizarPainel(machine){
        this.exibicoes.map( (exibicao) =>{
            if (machine.id === exibicao.id){
                exibicao.content = machine.info
            }
        })
    }
    adicionarNaTela(){
        this.exibicoes.forEach((exibicao) => {
            machinesContainer.appendChild(exibicao.content)
        })
    }
}


p1 = new Painel()



m1 = new Maquina("Maquina1",p1)
m2 = new Maquina("Maquina2", p1)
m3 = new Maquina("Maquina3",p1)


const machineList = []

machineList.push(m1)
machineList.push(m2)

m1.atualizar()

m1.temperatura = 64
m1.ligada = true
m1.umidade = 20

m1.atualizar()
m2.atualizar()
console.log(m1.id);
console.log(m2.id);





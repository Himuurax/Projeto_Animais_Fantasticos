export default class Funcionamento {
    constructor(funcionamento) {
        this.funcionamento = document.querySelector(funcionamento);
        this.activeClass = 'active';
    }

    dadosFuncionamento() {
         this.diasSemana = this.funcionamento.dataset.semana.split(',').map(Number);
         this.horarioSemana = this.funcionamento.dataset.horario.split(',').map(Number);
    }
    
    dadosAgora() {
        this.dataAgora = new Date();
        this.diaAgora = this.dataAgora.getDay();
        this.horarioAgora = this.dataAgora.getUtcHours() - 3;
    }
    
    estaAberto(){
        this.semanaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1;
    
        this.horarioAberto = (this.horarioAgora >= this.horarioSemana[0] && this.horarioAgora < this.horarioSemana[1]);
        
        return semanaAberto && horarioAberto;
    }

    ativaAberto(){
        if(this.estaAberto) {
            this.funcionamento.classList.add(this.activeClass);
        }  
    }

    init(){
        if(this.funcionamento){
            this.dadosFuncionamento();
            this.dadosAgora();
            this.ativaAberto();
        }
        return this;
    }
}

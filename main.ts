import prompt from 'prompt-sync';
import { ControleDeNota } from './Aluno';



let control: ControleDeNota = new ControleDeNota( 0, 0, 0);
let teclado = prompt();
let option: number = 0;

while (option !== 9) {
    console.log('==============Menu===============');
    console.log('1. Nota final do aluno           ');
    console.log('9. Sair               👉         ');
    console.log('=================================');

    option = +teclado('Escolha uma ação : ');

    switch (option) {
        case 1:

            let n1: number = +teclado('Digite a nota do primeiro bimestre: ');
            let n2: number = +teclado('Digite a nota do segunfo bimestre: ');

            console.log('');
           
            control.permitida(n1, n2);
            control.prova();

            
            break;
        default:
            break;
    }
}
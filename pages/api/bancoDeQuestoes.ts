import QuestaoModel from "../../model/questao";
import RespostaModel from "../../model/resposta";

const questoes: QuestaoModel[] = [
    new QuestaoModel(306, 'Qual bicho transmite a doença de Chagas?', [
        RespostaModel.errada('Abelha'),
        RespostaModel.errada('Barata'),
        RespostaModel.errada('Pulga'),
        RespostaModel.certa('Barbeiro'),
    ]),
    new QuestaoModel(202, 'Qual fruto é conhecido no Norte e Nordeste como "Jerimum"?', [
        RespostaModel.errada('Caju'),
        RespostaModel.errada('Côco'),
        RespostaModel.errada('Chuchu'),
        RespostaModel.certa('Abóbora'),
    ]),
    new QuestaoModel(203, 'Qual metal é utilizado na cunhagem de moedas?', [
        RespostaModel.errada('Hélio'),
        RespostaModel.errada('Chumbo'),
        RespostaModel.errada('Mercúrio'),
        RespostaModel.certa('Níquel'),
    ]),
    new QuestaoModel(204, 'Quem é o autor do manifesto comunista?', [
        RespostaModel.errada('Lenin'),
        RespostaModel.errada('Gorbatchov'),
        RespostaModel.errada('Allan Kardec'),
        RespostaModel.certa('Karl Marx'),
    ]),
    new QuestaoModel(205, 'Quantas letras contém a escrita da bandeira nacional?', [
        RespostaModel.errada('13'),
        RespostaModel.errada('14'),
        RespostaModel.errada('16'),
        RespostaModel.certa('15'),
    ]),
    new QuestaoModel(206, 'Quem compôs a musica do hino da independência?', [
        RespostaModel.errada('Manoel Bandeira'),
        RespostaModel.errada('Castro Alves'),
        RespostaModel.errada('Carlos Gomes'),
        RespostaModel.certa('Dom Pedro I'),
    ]),
    new QuestaoModel(207, 'Em que parte do corpo se encontra a epiglote?', [
        RespostaModel.errada('Estômago'),
        RespostaModel.errada('Pâncreas'),
        RespostaModel.errada('Rim'),
        RespostaModel.certa('Boca'),
    ]),
    new QuestaoModel(208, 'Quem é o parceiro de aventuras de Dom Quixote?', [
        RespostaModel.errada('Guilherme Tell'),
        RespostaModel.errada('Lancelot'),
        RespostaModel.errada('Sigmund Freud'),
        RespostaModel.certa('Sancho Pança'),
    ]),
    new QuestaoModel(209, 'O fígado é responsavel pela produção da?', [
        RespostaModel.errada('Insulina'),
        RespostaModel.errada('Glucagon'),
        RespostaModel.errada('Saliva'),
        RespostaModel.certa('Bílis'),
    ]),
    new QuestaoModel(210, 'Qual o triângulo que tem todos os lados diferentes?', [
        RespostaModel.errada('Equilátero'),
        RespostaModel.errada('Isóceles'),
        RespostaModel.errada('Retângulo'),
        RespostaModel.certa('Escaleno'),
    ]),
    
]

export default questoes
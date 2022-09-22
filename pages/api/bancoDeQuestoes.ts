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
    new QuestaoModel(211, 'Qual é o coletivo de cães?', [
        RespostaModel.errada('Manada'),
        RespostaModel.errada('Alcateia'),
        RespostaModel.errada('Rebanho'),
        RespostaModel.certa('Matilha'),
    ]),
    new QuestaoModel(212, 'Qual é o antônimo de "malograr"?', [
        RespostaModel.errada('Perder'),
        RespostaModel.errada('Fracassar'),
        RespostaModel.errada('Desprezar'),
        RespostaModel.certa('Conseguir'),
    ]),
    new QuestaoModel(213, 'Em que país nasceu Carmen Miranda?', [
        RespostaModel.errada('Argentina'),
        RespostaModel.errada('Espanha'),
        RespostaModel.errada('Brasil'),
        RespostaModel.certa('Portugal'),
    ]),
    new QuestaoModel(214, 'Qual foi o último Presidente do período da ditadura militar no Brasil?', [
        RespostaModel.errada('Costa e Silva'),
        RespostaModel.errada('Emílio Médici'),
        RespostaModel.errada('Ernesto Geisel'),
        RespostaModel.certa('João Figueiredo'),
    ]),
    new QuestaoModel(215, 'Seguindo a sequência do baralho, qual carta vem depois do dez?', [
        RespostaModel.errada('Ás'),
        RespostaModel.errada('Dama'),
        RespostaModel.errada('Rei'),
        RespostaModel.certa('Valete'),
    ]),
    new QuestaoModel(216, 'O adjetivo "venoso" está relacionado a:', [
        RespostaModel.errada('Veneno'),
        RespostaModel.errada('Vento'),
        RespostaModel.errada('Vênia'),
        RespostaModel.certa('Veia'),
    ]),
    new QuestaoModel(217, 'Que nome se dá à purificação por meio da água?', [
        RespostaModel.errada('Abrupção'),
        RespostaModel.errada('Abolição'),
        RespostaModel.errada('Abnegação'),
        RespostaModel.certa('Ablução'),
    ]),
    new QuestaoModel(218, 'Qual montanha se localiza entre a fronteira do Tibet com o Nepal?', [
        RespostaModel.errada('Monte Branco'),
        RespostaModel.errada('Monte Fuji'),
        RespostaModel.errada('Monte Carlo'),
        RespostaModel.certa('Monte Everest'),
    ]),
    new QuestaoModel(219, 'A compensação por perda é chamada de...', [
        RespostaModel.errada('Déficit'),
        RespostaModel.errada('Indexação'),
        RespostaModel.errada('Indébito'),
        RespostaModel.certa('Indenização'),
    ]),
    new QuestaoModel(220, 'Quem é o "patrono" do Exército Brasileiro?', [
        RespostaModel.errada('Marechal Deodoro'),
        RespostaModel.errada('Barão de Mauá'),
        RespostaModel.errada('Marquês de Pombal'),
        RespostaModel.certa('Duque de Caxias'),
    ]),
    
]

export default questoes
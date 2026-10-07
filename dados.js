/* ============================================================
   CENTRAL DE ENTREGAS — REDES DE COMPUTADORES E SEGURANÇA NA NUVEM
   Este é o ÚNICO arquivo que o professor precisa editar.

   COMO COLOCAR O PRAZO DE UMA SEMANA
   Escreva a data da AULA da semana no formato "AAAA-MM-DD".
   Exemplo:  aula: "2026-10-19"
   A central soma sozinha os dias de prazo (diasPrazo, logo abaixo) e
   mostra ao aluno até quando a entrega vale nota cheia.
   Deixe "" quando ainda não houver data: a central mostra "prazo a definir".

   COMO DESLIGAR A TAREFA SP DE UMA SEMANA
   Troque  tarefaSP: true  por  tarefaSP: false  na linha da semana.
   ============================================================ */

const CENTRAL = {
  disciplina: "Redes de Computadores e Segurança da Informação na Nuvem",

  // Endereço das atividades interativas já publicadas (não precisa mexer).
  baseAtividades: "https://olisam2303-ux.github.io/atividades-interativas/",
  apostila: "https://olisam2303-ux.github.io/apostila-redes-interativa/",
  apostilaPacketTracer: "https://olisam2303-ux.github.io/apostila-packet-tracer-interativa/",

  // Regra de prazo: dias corridos, contados a partir da data da aula.
  // Dentro do prazo vale nota cheia; depois vale metade; não entregue vale zero.
  diasPrazo: 5,

  // Como a nota do bimestre é fechada (os pesos precisam somar 100).
  pesos: [
    { id: "tarefa",   nome: "Tarefas SP",              peso: 20 },
    { id: "paulista", nome: "Prova Paulista Técnica",  peso: 30 },
    { id: "ava",      nome: "AVA (Pause e Responda + Registro de Aula)", peso: 25 },
    { id: "escrita",  nome: "Prova escrita",           peso: 25 }
  ],

  // Ferramenta de estudo para a prova escrita.
  notebookLM: "https://notebooklm.google.com/",

  // Qual bimestre abre primeiro quando o aluno entra na central (1 a 4).
  bimestreAtual: 4,

  bimestres: [
    {
      n: 1, titulo: "1º bimestre", semanas: "semanas 1 a 7",
      prova: "", provaPaulista: "",
      itens: [
        { s: 1, tema: "Introdução às topologias de rede", tarefaSP: true,
          registros: [["Projetando a rede ideal", "redes-01-rede-ideal.html"]], aula: "" },
        { s: 2, tema: "Topologia em barramento", tarefaSP: true,
          registros: [["Consultoria de redes", "redes-02-consultoria.html"]], aula: "" },
        { s: 3, tema: "Topologia em anel", tarefaSP: true,
          registros: [["Simulando problemas no Token Ring", "redes-03-token-ring.html"]], aula: "" },
        { s: 4, tema: "Meios de transmissão: importância e usos", tarefaSP: true,
          registros: [["Consultoria para CloudTech", "redes-04-cloudtech.html"]], aula: "" },
        { s: 5, tema: "Meios guiados: cabos de cobre", tarefaSP: true,
          registros: [["Projeto de cabeamento", "redes-05-cabeamento.html"]], aula: "" },
        { s: 6, tema: "Protocolos e camadas de rede", tarefaSP: true,
          registros: [["Diagnóstico de instabilidade no app", "redes-06-diagnostico-osi.html"]], aula: "" },
        { s: 7, tema: "Camada física: transmissão de dados", tarefaSP: true,
          registros: [["Entendimento do problema", "redes-07-modulacao-multiplexacao.html"]], aula: "" }
      ]
    },
    {
      n: 2, titulo: "2º bimestre", semanas: "semanas 8 a 15",
      prova: "", provaPaulista: "",
      itens: [
        { s: 8, tema: "Meios não guiados: redes sem fio", tarefaSP: true,
          registros: [["Otimizando a oficina de casa", "redes-08-s08a2.html"]], aula: "" },
        { s: 9, tema: "Fibra óptica", tarefaSP: true,
          registros: [["Chamado no Teams", "redes-09-s09a2.html"]], aula: "" },
        { s: 10, tema: "Camada de enlace e quadro Ethernet", tarefaSP: true,
          registros: [["Montando o quadro Ethernet perfeito", "redes-10-s10a1.html"]], aula: "" },
        { s: 11, tema: "Endereçamento IPv4 e máscara de sub-rede", tarefaSP: true,
          registros: [["Planejamento de rede para startup", "redes-11-s11a3.html"]], aula: "" },
        { s: 12, tema: "Camada de transporte: TCP e UDP", tarefaSP: true,
          registros: [["Cabeçalho TCP e conexão em três vias", "redes-12-s12a1.html"]], aula: "" },
        { s: 13, tema: "Segurança de redes: políticas e ameaças", tarefaSP: true,
          registros: [["Dados sensíveis e classificação segundo a LGPD", "redes-13a-s13a1.html"],
                      ["Incidente no Slack", "redes-13b-s13a2.html"]], aula: "" },
        { s: 14, tema: "Firewalls, IDS e IPS", tarefaSP: true,
          registros: [["Análise de logs: ameaça ou ruído?", "redes-14-s14a2.html"]], aula: "" },
        { s: 15, tema: "Segurança de aplicações web", tarefaSP: true,
          registros: [["Validação de entradas para um formulário web", "redes-15-s15a3.html"]], aula: "" }
      ]
    },
    {
      n: 3, titulo: "3º bimestre", semanas: "semanas 16 a 20",
      prova: "", provaPaulista: "",
      itens: [
        { s: 16, tema: "IPv4: sub-redes e CIDR", tarefaSP: true,
          registros: [["Divisão por departamentos", "redes-16-s16a2.html"]], aula: "" },
        { s: 17, tema: "Gestão de riscos de segurança", tarefaSP: true,
          registros: [["Os quatro elementos do risco", "redes-17-s17a1.html"]], aula: "" },
        { s: 18, tema: "LGPD: fundamentos e bases legais", tarefaSP: true,
          registros: [["Conformidade de um cadastro com a LGPD", "redes-18-s18a3.html"]], aula: "" },
        { s: 19, tema: "Segurança na nuvem: IAM e criptografia em trânsito", tarefaSP: true,
          registros: [["TLS 1.3 na prática", "redes-19-s19a3.html"]], aula: "" },
        { s: 20, tema: "Backup, recuperação e continuidade", tarefaSP: true,
          registros: [["Planejando o DR Test da SegurData", "redes-20-s20a3.html"]], aula: "" }
      ]
    },
    {
      n: 4, titulo: "4º bimestre", semanas: "semana 21 em diante",
      prova: "", provaPaulista: "",
      itens: [
        { s: 21, tema: "Redes definidas por software e redes na nuvem", tarefaSP: true,
          registros: [["Desenhando uma rede virtual na nuvem (VPC/VNet)", "redes-21a-s21a2.html"],
                      ["Planejando uma topologia SDN com Mininet", "redes-21b-s21a3.html"]],
          aula: "2026-10-05" }
        // Para incluir a próxima semana, copie o bloco acima, cole aqui
        // (separado por vírgula) e troque o número, o tema e o arquivo.
      ]
    }
  ]
};

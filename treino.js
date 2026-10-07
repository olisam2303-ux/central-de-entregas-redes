/* Perguntas de treino para a prova escrita, por tema.
   Chave = "bimestre-passo" do arquivo conteudo.js.
   sem = semanas da SEDUC que o tema cobre; q = perguntas dissertativas. */
var TREINO = {
  "1-1": { sem: [1, 2, 3], q: [
    "Explique o que é uma topologia de rede e cite três tipos.",
    "Por que a topologia em estrela é a mais usada hoje? Compare com o barramento.",
    "Em uma rede em barramento, o cabo principal se rompe no meio. O que acontece com a rede? E se fosse uma estrela com um cabo rompido?" ] },
  "1-2": { sem: [4, 5], q: [
    "Cite os três tipos de meio de transmissão e dê um exemplo de uso para cada um.",
    "Qual é o comprimento máximo de um trecho de cabo de par trançado? O que acontece se esse limite for ultrapassado?",
    "Qual é a diferença entre um cabo Cat5e e um Cat6a?" ] },
  "1-3": { sem: [6], q: [
    "O que é um protocolo de rede? Dê um exemplo.",
    "Por que a comunicação em rede é dividida em camadas?",
    "Um computador está com o cabo conectado e a luz da placa acesa, mas com o endereço IP de outra rede. Em qual camada está o problema? Justifique." ] },
  "1-4": { sem: [7], q: [
    "Que tipo de sinal é usado no cabo de cobre, na fibra óptica e no Wi-Fi?",
    "Explique com as suas palavras o que é modulação.",
    "O que é multiplexação? Dê um exemplo." ] },
  "2-1": { sem: [8, 9], q: [
    "Cite uma vantagem e uma desvantagem da rede sem fio em relação ao cabo.",
    "Qual é a diferença entre as faixas de 2,4 GHz e 5 GHz do Wi-Fi?",
    "Por que a fibra óptica é usada para ligar prédios e cidades?" ] },
  "2-2": { sem: [10], q: [
    "O que é um endereço MAC e para que ele serve?",
    "Quais são os campos principais de um quadro Ethernet?",
    "Como o switch decide para qual porta enviar um quadro?" ] },
  "2-3": { sem: [11], q: [
    "Para que serve a máscara de sub-rede?",
    "Para o IP 192.168.3.40 com máscara 255.255.255.0, qual é o endereço da rede e qual é o de broadcast?",
    "Por que uma rede /24 tem 254 endereços utilizáveis e não 256?" ] },
  "2-4": { sem: [12], q: [
    "Compare TCP e UDP em confiabilidade e velocidade.",
    "Descreva os três passos da abertura de uma conexão TCP.",
    "Para que servem os números de porta? Cite duas portas e os serviços delas." ] },
  "2-5": { sem: [13, 14, 15], q: [
    "Explique confidencialidade, integridade e disponibilidade, com um exemplo de ameaça para cada uma.",
    "Qual é a diferença entre firewall, IDS e IPS?",
    "Por que os dados digitados em um formulário web precisam ser validados?" ] },
  "3-1": { sem: [16], q: [
    "O que significa o /26 em 192.168.10.0/26?",
    "Divida 192.168.1.0/24 em 2 sub-redes e escreva a rede e o broadcast de cada uma.",
    "Por que uma empresa divide a rede por departamentos?" ] },
  "3-2": { sem: [17], q: [
    "Quais são os quatro elementos de um risco? Explique cada um.",
    "Como a probabilidade e o impacto são usados para priorizar riscos?",
    "Explique as quatro estratégias de tratamento de risco e dê um exemplo de mitigação." ] },
  "3-3": { sem: [18], q: [
    "Qual é a diferença entre dado pessoal e dado pessoal sensível? Dê dois exemplos de cada.",
    "O que é uma base legal para o tratamento de dados? Cite duas.",
    "Uma loja pede a religião do cliente no cadastro. Isso está de acordo com a LGPD? Justifique." ] },
  "3-4": { sem: [19], q: [
    "O que é IAM e para que serve?",
    "Explique o princípio do menor privilégio com um exemplo.",
    "O que o TLS protege e como o usuário percebe que ele está sendo usado?" ] },
  "3-5": { sem: [20], q: [
    "Explique a diferença entre RPO e RTO.",
    "O que é a regra 3-2-1 de backup?",
    "Por que um plano de recuperação de desastres precisa ser testado?" ] },
  "4-1": { sem: [21], q: [
    "Qual é a diferença entre uma rede tradicional e uma rede definida por software (SDN)?",
    "Explique o que são o plano de controle e o plano de dados.",
    "Em uma rede virtual na nuvem, por que o banco de dados fica em uma sub-rede privada?" ] }
};

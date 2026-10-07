/* Desafios do Nível avançado e perguntas do teste de preparo. */
/* quiz: [pergunta, código ou null, [alternativas], índice da correta] */
var NIVEIS = [
  { id: "n1", nome: "Nível 1 — Rede local", sub: "Montar e testar redes pequenas no Cisco Packet Tracer.",
    onde: "Usa o Cisco Packet Tracer.",
    quiz: [
      ["Qual equipamento liga vários computadores na mesma rede local?", null, ["Modem", "Switch", "Monitor", "Estabilizador"], 1],
      ["Com a máscara 255.255.255.0, qual endereço está na mesma rede que 192.168.1.10?", null, ["192.168.2.10", "10.0.0.10", "192.168.1.200", "192.169.1.10"], 2],
      ["Qual comando testa se outro computador responde na rede?", null, ["ping", "dir", "cls", "format"], 0],
      ["Qual cabo é o mais usado para ligar um computador ao switch?", null, ["Coaxial", "Serial", "Fibra óptica", "Par trançado (UTP)"], 3],
      ["Em uma rede em estrela, o cabo de um computador se rompe. O que acontece?", null, ["A rede inteira para", "Só aquele computador fica sem rede", "Metade da rede para", "O switch desliga"], 1]
    ],
    desafios: [
      { n: 1, t: "Minha primeira rede",
        missao: "Ligue dois computadores a um switch e faça um responder ao outro.",
        req: ["Dois PCs e um switch ligados com o cabo correto.", "Endereços 192.168.1.10 e 192.168.1.11, com máscara 255.255.255.0.", "Os equipamentos têm nomes que identificam cada um."],
        fogo: ["O ping do PC 1 para o PC 2 responde.", "Troque o IP do PC 2 para 192.168.2.11: o ping deixa de responder. Explique por quê.", "Volte ao IP correto e o ping responde de novo."],
        bonus: "Acrescente um terceiro PC e use o modo de simulação para ver o caminho do pacote." },
      { n: 2, t: "A rede do laboratório",
        missao: "Monte a rede de um laboratório com 6 computadores e 1 impressora no mesmo switch.",
        req: ["Uma tabela com o nome e o IP de cada equipamento.", "Todos na rede 192.168.10.0/24, sem IP repetido.", "A impressora tem um IP fixo, fora da faixa dos computadores."],
        fogo: ["Todos os computadores respondem ao ping da impressora.", "Coloque o mesmo IP em dois PCs: observe e descreva o que acontece.", "Desligue o cabo de um PC: os outros continuam se comunicando."],
        bonus: "Organize o desenho como a sala de verdade e anote o comprimento estimado de cada cabo." },
      { n: 3, t: "O Wi-Fi da casa",
        missao: "Monte uma rede doméstica sem fio com um roteador, um notebook e um celular.",
        req: ["Rede com nome (SSID) escolhido por você.", "Senha com segurança WPA2.", "Os aparelhos recebem o IP automaticamente (DHCP)."],
        fogo: ["O notebook e o celular respondem ao ping um do outro.", "Um aparelho com a senha errada não conecta.", "Os dois aparelhos receberam IPs diferentes, na mesma rede."],
        bonus: "Acrescente um computador ligado por cabo ao mesmo roteador e teste a comunicação com os aparelhos sem fio." }
    ] },
  { id: "n2", nome: "Nível 2 — Várias redes", sub: "Roteador, sub-redes e serviços de rede.",
    onde: "Usa o Cisco Packet Tracer.",
    quiz: [
      ["Quantos endereços de equipamento cabem em uma rede /24?", null, ["256", "128", "254", "255"], 2],
      ["Para que serve o gateway padrão?", null, ["Enviar os pacotes para fora da rede local", "Dar nome ao computador", "Aumentar a velocidade do cabo", "Bloquear vírus"], 0],
      ["Quantas sub-redes /26 cabem em uma rede /24?", null, ["2", "8", "16", "4"], 3],
      ["Qual serviço entrega o endereço IP automaticamente aos equipamentos?", null, ["DNS", "DHCP", "HTTP", "FTP"], 1],
      ["Qual serviço traduz o nome de um site em um endereço IP?", null, ["DHCP", "NAT", "DNS", "ARP"], 2]
    ],
    desafios: [
      { n: 4, t: "Duas redes, um roteador",
        missao: "Ligue duas redes diferentes por um roteador e faça computadores de redes distintas se comunicarem.",
        req: ["Rede A em 192.168.1.0/24 e rede B em 192.168.2.0/24, cada uma com seu switch.", "Cada interface do roteador tem o primeiro IP da sua rede.", "Cada PC tem o gateway padrão correto."],
        fogo: ["Um PC da rede A responde ao ping de um PC da rede B.", "Apague o gateway de um PC: ele alcança os vizinhos, mas não a outra rede. Explique.", "No modo de simulação, o pacote passa pelo roteador."],
        bonus: "Acrescente uma terceira rede ao mesmo roteador." },
      { n: 5, t: "A empresa em sub-redes",
        missao: "Divida a rede 192.168.10.0/24 em 4 sub-redes, uma para cada departamento: Vendas, Financeiro, RH e TI.",
        req: ["Uma tabela com rede, primeiro host, último host e broadcast de cada sub-rede.", "Máscara 255.255.255.192 (/26) em todos os equipamentos.", "Pelo menos 2 PCs por departamento, ligados ao roteador."],
        fogo: ["PCs do mesmo departamento se comunicam.", "PCs de departamentos diferentes se comunicam passando pelo roteador.", "Nenhum equipamento usa endereço de rede ou de broadcast."],
        bonus: "Refaça a divisão dando uma sub-rede maior para o departamento com mais pessoas." },
      { n: 6, t: "Servidores DHCP, DNS e web",
        missao: "Monte uma rede em que os computadores recebem IP sozinhos e abrem um site pelo nome.",
        req: ["Um servidor com DHCP distribuindo os endereços.", "Um servidor web com uma página simples.", "Um registro DNS ligando um nome (por exemplo, www.minhaempresa.com) ao servidor web."],
        fogo: ["Um PC novo, colocado na rede, recebe IP sem configuração manual.", "O navegador do PC abre o site pelo nome.", "Desligue o DNS: o site abre pelo IP, mas não pelo nome. Explique."],
        bonus: "Mude o texto da página do servidor web para a página da sua empresa fictícia." }
    ] },
  { id: "n3", nome: "Nível 3 — Rede segura", sub: "Separação de tráfego, regras de acesso e um projeto completo.",
    onde: "Usa o Cisco Packet Tracer e exige comandos no roteador e no switch.",
    quiz: [
      ["Para que serve uma VLAN?", null, ["Aumentar a velocidade da internet", "Separar a rede em grupos lógicos no mesmo switch", "Substituir o roteador", "Guardar cópias de segurança"], 1],
      ["O que uma lista de controle de acesso (ACL) faz?", null, ["Permite ou bloqueia tráfego conforme regras", "Distribui endereços IP", "Traduz nomes em endereços", "Mede a velocidade do cabo"], 0],
      ["Quais são os três pilares da segurança da informação?", null, ["Velocidade, alcance e custo", "Cabo, switch e roteador", "Confidencialidade, integridade e disponibilidade", "Backup, senha e antivírus"], 2],
      ["Quais são, na ordem, os três passos da abertura de uma conexão TCP?", null, ["ACK, SYN, FIN", "SYN, ACK, SYN-ACK", "FIN, ACK, SYN", "SYN, SYN-ACK, ACK"], 3],
      ["O que é o RTO em um plano de continuidade?", null, ["A quantidade de dados que se aceita perder", "O tempo máximo para o serviço voltar a funcionar", "O número de cópias de backup", "A velocidade da rede"], 1]
    ],
    desafios: [
      { n: 7, t: "VLANs por departamento",
        missao: "Em um único switch, separe os computadores de Vendas e do Financeiro em VLANs diferentes.",
        req: ["VLAN 10 para Vendas e VLAN 20 para o Financeiro, com nomes.", "Pelo menos 2 PCs em cada VLAN.", "Uma tabela dizendo qual porta pertence a qual VLAN."],
        fogo: ["PCs da mesma VLAN se comunicam.", "PCs de VLANs diferentes não se comunicam.", "Mude um PC de porta e explique por que ele passou a pertencer à outra VLAN."],
        bonus: "Faça as duas VLANs se comunicarem por meio de um roteador." },
      { n: 8, t: "Regras de acesso",
        missao: "Crie uma regra que impede a rede de Visitantes de acessar o servidor do Financeiro, sem bloquear os demais.",
        req: ["Três redes ligadas ao roteador: Funcionários, Visitantes e Servidores.", "Uma ACL aplicada no roteador.", "A regra escrita em português antes de ser configurada."],
        fogo: ["Um PC de Visitantes não alcança o servidor.", "Um PC de Funcionários alcança o servidor.", "Visitantes e Funcionários continuam alcançando as outras redes liberadas."],
        bonus: "Libere para os Visitantes apenas o acesso à página web do servidor e bloqueie o restante." },
      { n: 9, t: "Projeto integrador: a rede de uma pequena empresa",
        missao: "Projete, monte e documente a rede completa de uma empresa com 3 departamentos, visitantes e um servidor.",
        req: ["Plano de endereços com sub-redes.", "DHCP para os computadores e Wi-Fi com senha para os visitantes.", "Uma regra de acesso protegendo o servidor.", "Documento com um risco (ativo, ameaça, vulnerabilidade e impacto) e o plano de backup com RPO e RTO."],
        fogo: ["Todos os departamentos alcançam o servidor.", "Os visitantes não alcançam o servidor.", "Outra pessoa entende a rede lendo só o seu documento."],
        bonus: "Apresente o projeto para a turma como se fosse uma proposta para um cliente." }
    ] }
];

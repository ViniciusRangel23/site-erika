export type Treatment = {
  name: string;
  image: string;
  description: string;
};

type TreatmentSection = {
  id: string;
  label: string;
  title: string;
  description: string;
  treatments: Treatment[];
  backdrop?: string;
};

export const sections: TreatmentSection[] = [
  {
    id: "dermatologia-clinica",
    label: "Saúde da pele",
    title: "Uma pele saudável, mais bonita e protegida.",
    description: "O cuidado dermatológico ajuda a prevenir alterações, tratar condições da pele e orientar uma rotina adequada para você.",
    treatments: [
      { name: "Peelings", image: "peelings", description: "Renovação da superfície da pele para cuidar da textura e da luminosidade." },
      { name: "Fotoage", image: "fotoage", description: "Tratamento com luz para cuidar da pele, conforme avaliação dermatológica." },
      { name: "MMP", image: "mmp", description: "Microinfusão de medicamentos na pele, com indicação individualizada." },
    ],
  },
  {
    id: "dermatologia-estetica",
    label: "Rejuvenescimento e qualidade da pele",
    title: "Preserve sua beleza natural.",
    description: "Tratamentos para cuidar da textura, da firmeza e das linhas de expressão, respeitando os traços do seu rosto.",
    backdrop: "rejuvenescimento",
    treatments: [
      { name: "Toxina botulínica", image: "toxina", description: "Suavização de linhas de expressão, com planejamento individualizado." },
      { name: "Preenchimento", image: "preenchimento", description: "Abordagem para restaurar volume e definir contornos faciais." },
      { name: "Bioestimuladores de colágeno", image: "colageno", description: "Estímulo à produção de colágeno para cuidar da firmeza da pele." },
      { name: "Fios de sustentação", image: "fios", description: "Procedimento avaliado de acordo com a flacidez e os contornos do rosto." },
    ],
  },
  {
    id: "tratamentos-corporais",
    label: "Tratamentos corporais",
    title: "Cuidados também para o corpo.",
    description: "A avaliação dermatológica orienta a escolha dos tratamentos para o contorno corporal, a textura e a firmeza da pele.",
    treatments: [
      { name: "Emptiers", image: "emptiers", description: "Abordagem para gordura localizada, conforme avaliação do contorno corporal." },
      { name: "Regeneradores teciduais", image: "regeneradores", description: "Cuidados voltados à renovação e à qualidade da pele do corpo." },
    ],
  },
  {
    id: "saude-capilar",
    label: "Saúde capilar",
    title: "Cabelos saudáveis, autoestima em alta.",
    description: "A avaliação dermatológica ajuda a investigar as causas da queda e as alterações do couro cabeludo.",
    backdrop: "cabelos",
    treatments: [
      { name: "Avaliação e tratamento das alopecias", image: "alopecias", description: "Investigação das causas da queda de cabelo e orientação de tratamento." },
      { name: "MMP capilar", image: "mmp-capilar", description: "Microinfusão de medicamentos no couro cabeludo, quando indicada." },
    ],
  },
  {
    id: "cirurgia-dermatologica",
    label: "Cirurgia dermatológica",
    title: "Segurança e precisão em cada procedimento.",
    description: "Avaliação de lesões cutâneas e planejamento da abordagem cirúrgica de acordo com cada caso.",
    treatments: [
      { name: "Pintas e nevos", image: "pintas", description: "Avaliação de pintas e orientação sobre acompanhamento ou remoção." },
      { name: "Cistos e verrugas", image: "cistos", description: "Avaliação de lesões e escolha da abordagem adequada para cada caso." },
      { name: "Tumores de pele", image: "tumores", description: "Investigação de lesões suspeitas e planejamento do tratamento." },
    ],
  },
];

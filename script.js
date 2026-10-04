document.getElementById("year").textContent = new Date().getFullYear();

const whatsappWidget = document.querySelector(".whatsapp-widget");
const whatsappClose = document.querySelector(".whatsapp-close");
const whatsappReopen = document.querySelector(".whatsapp-reopen");

whatsappClose?.addEventListener("click", () => {
  whatsappWidget?.classList.add("is-closed");
});

whatsappReopen?.addEventListener("click", () => {
  whatsappWidget?.classList.remove("is-closed");
});

const practiceData = {
  familia: {
    title: "Direito de Família",
    description:
      "Atuação jurídica em questões familiares que exigem orientação segura, estratégia e atenção às particularidades de cada relação, com acompanhamento próximo e individualizado em todas as etapas.",
    articles: [
      [
        "Divórcio",
        "Orientação e acompanhamento em divórcios, incluindo questões relacionadas à partilha de bens, guarda, convivência, alimentos e demais efeitos decorrentes do término da relação.",
        "fa-heart",
        "Consensual e litigioso",
      ],
      [
        "Guarda e convivência",
        "Atuação em ações de guarda, regulamentação e revisão da convivência familiar, considerando as particularidades de cada núcleo familiar.",
        "fa-people-roof",
        "Relações parentais",
      ],
      [
        "Pensão alimentícia",
        "Atuação em demandas envolvendo alimentos, desde a fixação do valor até pedidos de revisão, exoneração e cobrança de parcelas não pagas.",
        "fa-hand-holding-dollar",
        "Fixação, revisão, exoneração e cobrança",
      ],
      [
        "União estável",
        "Orientação jurídica para reconhecimento, formalização e dissolução de união estável, inclusive quanto aos efeitos pessoais e patrimoniais da relação.",
        "fa-ring",
        "Reconhecimento e dissolução",
      ],
      [
        "Partilha de bens",
        "Atuação na definição e regularização da divisão de bens decorrente do divórcio ou da dissolução da união estável.",
        "fa-scale-balanced",
        "Organização patrimonial após a separação",
      ],
      [
        "Reconhecimento de paternidade e filiação",
        "Atuação em demandas envolvendo reconhecimento ou investigação de paternidade e demais questões relacionadas à filiação e aos seus efeitos jurídicos.",
        "fa-person-circle-question",
        "Vínculos familiares e efeitos jurídicos",
      ],
      [
        "Alienação parental",
        "Atuação em situações envolvendo possíveis atos de alienação parental, com análise do caso e adoção das medidas jurídicas cabíveis para preservação da convivência familiar e proteção da criança ou adolescente.",
        "fa-people-arrows",
        "Proteção da convivência familiar",
      ],
      [
        "Regime de bens e pacto antenupcial",
        "Orientação sobre regimes de bens, elaboração e análise de pacto antenupcial e organização patrimonial do casal antes ou durante a relação.",
        "fa-file-signature",
        "Planejamento das relações patrimoniais",
      ],
      [
        "Acordos familiares",
        "Elaboração e formalização de acordos envolvendo divórcio, guarda, convivência, alimentos, patrimônio e outras questões familiares.",
        "fa-handshake",
        "Soluções consensuais",
      ],
      [
        "Adoção",
        "Orientação e acompanhamento jurídico dos procedimentos relacionados à adoção, conforme as exigências legais aplicáveis a cada caso.",
        "fa-house-user",
        "Constituição de vínculos familiares",
      ],
      [
        "Medidas protetivas",
        "Orientação jurídica e acompanhamento em situações familiares que demandem medidas urgentes de proteção e outras providências judiciais cabíveis.",
        "fa-shield-heart",
        "Proteção em situações de vulnerabilidade",
      ],
    ],
  },
  criminal: {
    title: "Direito Criminal",
    description:
      "Atuação técnica e estratégica na defesa de direitos e garantias em procedimentos investigativos e processos criminais.",
    articles: [
      [
        "Defesa criminal",
        "Acompanhamento e defesa em ações penais, com análise individualizada dos fatos, das provas e das circunstâncias de cada caso.",
        "fa-shield-halved",
        "Atuação em processos criminais",
      ],
      [
        "Inquérito policial",
        "Assistência jurídica durante investigações policiais, depoimentos, oitivas e demais atos relacionados ao procedimento investigativo.",
        "fa-magnifying-glass",
        "Investigação e acompanhamento",
      ],
      [
        "Audiência de custódia",
        "Assistência jurídica em audiência de custódia e análise das medidas cabíveis diante da prisão e das circunstâncias do caso.",
        "fa-building-columns",
        "Atuação desde os primeiros atos",
      ],
      [
        "Medidas protetivas",
        "Atuação em situações envolvendo medidas protetivas, com orientação jurídica e acompanhamento dos procedimentos correspondentes.",
        "fa-hand",
        "Orientação e acompanhamento",
      ],
      [
        "Crimes contra a honra",
        "Orientação e atuação em situações envolvendo ofensas à honra, tanto na defesa quanto na adoção das medidas juridicamente cabíveis.",
        "fa-comment-slash",
        "Calúnia, difamação e injúria",
      ],
      [
        "Acompanhamento processual",
        "Acompanhamento dos atos processuais, audiências e demais providências necessárias ao exercício da defesa técnica.",
        "fa-scale-balanced",
        "Defesa em todas as etapas",
      ],
    ],
  },
  previdenciario: {
    title: "Direito Previdenciário",
    description:
      "Atuação administrativa e judicial em benefícios previdenciários e assistenciais, com análise individualizada do histórico contributivo, da atividade exercida e da documentação de cada caso.",
    articles: [
      [
        "Aposentadorias",
        "Avaliação do histórico contributivo, requisitos e possibilidades de aposentadoria, com orientação quanto à modalidade mais adequada ao caso.",
        "fa-person-cane",
        "Análise e planejamento previdenciário",
      ],
      [
        "Aposentadoria rural",
        "Análise e atuação em pedidos de aposentadoria rural, com avaliação da atividade exercida, período de trabalho rural e documentação necessária à comprovação do direito.",
        "fa-tractor",
        "Segurado especial e trabalhador rural",
      ],
      [
        "Aposentadoria especial",
        "Análise do tempo de atividade exercida em condições especiais e da documentação necessária, incluindo PPP e demais elementos pertinentes à comprovação da exposição.",
        "fa-hard-hat",
        "Atividades com exposição a agentes nocivos",
      ],
      [
        "Benefício por incapacidade",
        "Atuação em pedidos relacionados à incapacidade para o trabalho, com análise da documentação médica, histórico profissional e situação previdenciária.",
        "fa-wheelchair",
        "Incapacidade temporária ou permanente",
      ],
      [
        "Auxílio-acidente",
        "Análise do direito ao benefício quando houver sequela decorrente de acidente que resulte em redução da capacidade para o exercício da atividade habitual.",
        "fa-kit-medical",
        "Sequelas e redução da capacidade laboral",
      ],
      [
        "Auxílio-reclusão",
        "Orientação e atuação em pedidos de auxílio-reclusão destinados aos dependentes do segurado, mediante análise dos requisitos legais aplicáveis ao caso.",
        "fa-lock",
        "Proteção aos dependentes",
      ],
      [
        "BPC/LOAS",
        "Atuação em requerimentos de Benefício de Prestação Continuada, com análise dos requisitos pessoais, sociais e econômicos exigidos para a concessão.",
        "fa-hand-holding-heart",
        "Pessoa idosa ou com deficiência",
      ],
      [
        "Salário-maternidade",
        "Análise e acompanhamento de pedidos de salário-maternidade conforme a situação previdenciária e os requisitos aplicáveis à segurada.",
        "fa-person-pregnant",
        "Proteção previdenciária à maternidade",
      ],
      [
        "Pensão por morte",
        "Atuação em pedidos de pensão por morte, com análise da qualidade de segurado, da condição de dependente e da documentação necessária.",
        "fa-people-roof",
        "Benefício aos dependentes",
      ],
      [
        "Revisões e indeferimentos",
        "Avaliação de benefícios concedidos ou pedidos indeferidos, com estudo das medidas administrativas ou judiciais cabíveis.",
        "fa-file-circle-exclamation",
        "Análise de decisões do INSS",
      ],
    ],
  },
  trabalho: {
    title: "Direito do Trabalho",
    description:
      "Atuação na orientação e defesa de direitos decorrentes das relações de trabalho, com análise cuidadosa de cada vínculo e situação profissional.",
    articles: [
      [
        "Verbas trabalhistas",
        "Análise de valores e direitos relacionados ao vínculo empregatício, incluindo salários, férias, décimo terceiro e demais verbas trabalhistas.",
        "fa-money-bill-wave",
        "Direitos decorrentes do contrato de trabalho",
      ],
      [
        "Rescisão do contrato",
        "Orientação sobre direitos e obrigações decorrentes da rescisão contratual e análise das verbas pagas no encerramento do vínculo.",
        "fa-file-contract",
        "Encerramento da relação de emprego",
      ],
      [
        "Horas extras",
        "Análise de jornadas, intervalos e horas trabalhadas além dos limites legais ou contratuais, conforme as circunstâncias do caso.",
        "fa-clock",
        "Jornada de trabalho",
      ],
      [
        "Reconhecimento de vínculo",
        "Atuação em situações nas quais a prestação de serviços possa reunir os requisitos jurídicos para reconhecimento do vínculo empregatício.",
        "fa-user-tie",
        "Relação de emprego",
      ],
      [
        "Assédio no trabalho",
        "Orientação jurídica em situações envolvendo assédio moral, assédio sexual ou outras condutas abusivas ocorridas no ambiente de trabalho.",
        "fa-ban",
        "Ambiente profissional e proteção de direitos",
      ],
      [
        "Acidente de trabalho",
        "Orientação sobre os reflexos trabalhistas de acidentes e doenças relacionadas ao trabalho, conforme as particularidades de cada situação.",
        "fa-briefcase-medical",
        "Direitos decorrentes do acidente",
      ],
    ],
  },
  civil: {
    title: "Direito Civil",
    description:
      "Soluções jurídicas para contratos, obrigações, patrimônio e conflitos decorrentes das relações civis e de consumo.",
    articles: [
      [
        "Contratos",
        "Elaboração, análise e revisão de contratos civis, com atenção às obrigações assumidas, riscos jurídicos e interesses das partes.",
        "fa-file-signature",
        "Elaboração e revisão",
      ],
      [
        "Cobranças",
        "Atuação em situações envolvendo valores não pagos, obrigações descumpridas e demais conflitos de natureza patrimonial.",
        "fa-money-check-dollar",
        "Cumprimento de obrigações",
      ],
      [
        "Responsabilidade civil",
        "Análise e atuação em situações que possam gerar responsabilidade civil e eventual dever de reparação por danos.",
        "fa-gavel",
        "Danos materiais e morais",
      ],
      [
        "Direito do Consumidor",
        "Atuação em conflitos envolvendo produtos, serviços, cobranças, contratos e demais relações entre consumidores e fornecedores.",
        "fa-cart-shopping",
        "Relações de consumo",
      ],
      [
        "Questões imobiliárias",
        "Orientação em questões civis envolvendo imóveis, contratos, propriedade, posse e conflitos relacionados a bens imobiliários.",
        "fa-house",
        "Posse, propriedade e contratos",
      ],
      [
        "Soluções extrajudiciais",
        "Atuação na busca de soluções consensuais e negociações jurídicas antes ou durante a existência de um conflito.",
        "fa-handshake",
        "Negociação e prevenção de conflitos",
      ],
    ],
  },
};

const practiceTabs = document.querySelectorAll(".practice-tabs a");
const practiceFocus = document.querySelector(".practice-focus");
const practiceList = document.querySelector(".practice-list");

function renderPractice(category) {
  const selected = practiceData[category];
  if (!selected || !practiceFocus || !practiceList) return;

  practiceFocus.querySelector("h3").textContent = selected.title;
  practiceFocus.querySelector("p").textContent = selected.description;
  practiceList.innerHTML = selected.articles
    .map(
      ([title, description, icon, subtitle]) => `
        <article class="practice-item">
          <span class="practice-card-icon" aria-hidden="true">
            <i class="fa-solid ${icon}"></i>
          </span>
          <div>
            <h3>${title}</h3>
            <p class="practice-subtitle">${subtitle || selected.title}</p>
          </div>
          <p>${description}</p>
        </article>
      `,
    )
    .join("");
}

practiceTabs.forEach((tab) => {
  tab.addEventListener("click", (event) => {
    event.preventDefault();
    const category = tab.dataset.category;
    practiceTabs.forEach((item) => {
      item.classList.toggle("is-active", item === tab);
      item.toggleAttribute("aria-current", item === tab);
    });
    renderPractice(category);
  });
});

renderPractice("familia");

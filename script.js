document.addEventListener("DOMContentLoaded", () => {

    // Seleciona o botão Saiba Mais
    const saibaMaisBtn = document.getElementById("saibaMaisBtn");
    
    saibaMaisBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

    // Criação do modal
    const modal = document.createElement("div");
    modal.id = "modalInfo";

    modal.innerHTML = `
        <div id="modalContent">
            <button id="fecharModal">&times;</button>

            <h2>Escolha uma opção</h2>

            <div class="opcoes">
                <button id="btnCampo">Campo</button>
                <button id="btnCidade">Cidade</button>
            </div>

            <div id="conteudoTexto"></div>
        </div>
    `;

    document.body.appendChild(modal);

    // CSS do modal criado via JS
    const estilo = document.createElement("style");

    estilo.innerHTML = `
        #modalInfo{
            position:fixed;
            inset:0;
            background:rgba(0,0,0,.7);
            display:none;
            justify-content:center;
            align-items:center;
            z-index:9999;
        }

        #modalContent{
            width:85%;
            max-width:900px;
            min-height:500px;
            background:linear-gradient(135deg,#10b981,#047857);
            border-radius:25px;
            padding:30px;
            color:white;
            position:relative;
            overflow:hidden;
            box-shadow:0 0 30px rgba(0,0,0,.4);
        }

        #modalContent::before{
            content:"";
            position:absolute;
            inset:0;
            background-size:cover;
            background-position:center;
            opacity:.25;
            transition:.5s;
        }

        #fecharModal{
            position:absolute;
            top:15px;
            right:20px;
            background:none;
            border:none;
            color:white;
            font-size:35px;
            cursor:pointer;
        }

        #modalContent h2{
            text-align:center;
            margin-bottom:20px;
        }

        .opcoes{
            display:flex;
            justify-content:center;
            gap:20px;
            margin-bottom:25px;
        }

        .opcoes button{
            padding:12px 30px;
            border:none;
            border-radius:12px;
            cursor:pointer;
            font-size:18px;
            font-weight:bold;
            background:white;
            color:#047857;
            transition:.3s;
        }

        .opcoes button:hover{
            transform:scale(1.05);
        }

        #conteudoTexto{
            position:relative;
            z-index:2;
            line-height:1.7;
            max-height:350px;
            overflow-y:auto;
            padding:10px;
            background:rgba(0,0,0,.25);
            border-radius:15px;
            display:none;
        }

        .zoom{
            animation:zoom .6s ease;
        }

        @keyframes zoom{
            from{
                transform:scale(.7);
                opacity:0;
            }
            to{
                transform:scale(1);
                opacity:1;
            }
        }
    `;

    document.head.appendChild(estilo);

    const conteudoTexto = document.getElementById("conteudoTexto");
    const modalContent = document.getElementById("modalContent");

    // Abrir modal
    saibaMaisBtn.addEventListener("click", (e) => {
        e.preventDefault();
        modal.style.display = "flex";
    });

    // Fechar modal
    document.getElementById("fecharModal").addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Texto Campo
    document.getElementById("btnCampo").addEventListener("click", () => {

        modalContent.style.setProperty(
            "--bg",
            "url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80')"
        );

        modalContent.querySelector("::before");

        modalContent.style.backgroundImage =
            "linear-gradient(rgba(16,185,129,.85), rgba(4,120,87,.85)), url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80')";

        conteudoTexto.style.display = "block";
        conteudoTexto.classList.remove("zoom");

        void conteudoTexto.offsetWidth;

        conteudoTexto.classList.add("zoom");

        conteudoTexto.innerHTML = `
            <h3>🌱 Campo</h3>

            <p>
            A relação entre o campo e a cidade é de interdependência socioeconômica,
            configurando um fluxo contínuo de insumos, produtos e serviços.
            O meio rural desempenha um papel crucial na produção de commodities,
            mas sua sustentabilidade depende diretamente da infraestrutura urbana.
            </p>

            <h4>O papel da cidade no suporte ao campo</h4>

            <ul>
                <li><strong>Escoamento e Consumo:</strong> Os centros urbanos concentram o mercado consumidor final e as redes logísticas globais.</li>

                <li><strong>Complexo Agroindustrial:</strong> A cidade abriga as indústrias que processam a matéria-prima rural, agregando valor ao produto.</li>

                <li><strong>Tecnologia e Insumos:</strong> É no meio urbano que se desenvolvem e comercializam maquinários, fertilizantes e biotecnologia.</li>

                <li><strong>Serviços Especializados:</strong> O campo demanda a estrutura urbana para acesso a serviços financeiros, jurídicos e de saúde.</li>
            </ul>

            <p>
            Essa dinâmica transforma a divisão entre rural e urbano em uma cadeia integrada,
            onde o desenvolvimento de um setor impulsiona diretamente o crescimento do outro.
            </p>
        `;
    });

    // Texto Cidade
    document.getElementById("btnCidade").addEventListener("click", () => {

        modalContent.style.backgroundImage =
            "linear-gradient(rgba(16,185,129,.85), rgba(4,120,87,.85)), url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=80')";

        conteudoTexto.style.display = "block";
        conteudoTexto.classList.remove("zoom");

        void conteudoTexto.offsetWidth;

        conteudoTexto.classList.add("zoom");

        conteudoTexto.innerHTML = `
            <h3>🏙 Cidade</h3>

            <p>
            A relação de interdependência socioeconômica entre a cidade e o campo
            estabelece que os centros urbanos dependem vitalmente do meio rural para manter sua subsistência,
            dinâmica industrial e estabilidade econômica.
            </p>

            <h4>Pilares da Dependência Urbana em Relação ao Campo</h4>

            <ul>
                <li><strong>Segurança Alimentar:</strong> O campo é o fornecedor primário dos alimentos que sustentam a população urbana.</li>

                <li><strong>Fornecimento de Matérias-Primas:</strong> A produção rural provê insumos básicos como algodão, celulose, couro e biocombustíveis.</li>

                <li><strong>Balança Comercial e PIB:</strong> As exportações do agronegócio geram divisas que estabilizam a economia nacional.</li>

                <li><strong>Serviços Ecossistêmicos:</strong> As áreas rurais preservam mananciais de água e regulam o clima regional.</li>

                <li><strong>Mercado de Consumo Recíproco:</strong> O meio rural consome bens manufaturados e serviços de alta tecnologia produzidos nas cidades.</li>
            </ul>

            <p>
            Assim, o campo funciona como a base de sustentação metabólica e econômica das cidades.
            Sem a eficiência produtiva rural, os centros urbanos enfrentariam crises severas de abastecimento e inflação.
            </p>
        `;
    });

});

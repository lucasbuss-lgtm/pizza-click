Pizza Clicker

Um jogo incremental (*clicker*) divertido, responsivo e totalmente temático, desenvolvido com uma identidade visual tridimensional. 
Gerencie sua própria produção de pizzas e compre melhorias para automatizar e inflacionar o seu império gastronômico!

Demonstração

O jogo está publicado e pronto para ser jogado diretamente no seu navegador através do GitHub Pages.
👉 **[Clique aqui para jogar](https://lucasbuss-lgtm.github.io/pizza-click/)**

---

## Funcionalidades e Visual

**Design Responsivo (Fluid Design):** Interface adaptável que funciona perfeitamente tanto em computadores (Desktop) quanto em dispositivos móveis (Mobile).
**Interface Temática Customizada (*Skinned UI*):** O painel central do jogo simula uma pizza quadrada realista com bordas de massa trançada e um fundo preenchido com queijo derretido e pepperoni.
**Alta Legibilidade:** Aplicação de máscaras de contraste semi-transparentes e contornos avançados de sombreamento nos textos para neutralizar o ruído visual do fundo e garantir leitura perfeita das estatísticas.
**Mecânica de Progressão:** Sistema dinâmico de cliques com upgrades que escalam de custo geometricamente conforme o jogador progride.

---

## Arquitetura Técnica

O projeto foi construído sob o padrão clássico de desenvolvimento web dividindo a aplicação em três camadas independentes, garantindo alta performance e fácil manutenção do código:

### 1. Estrutura de Marcação (HTML5)
Uso de tags semânticas estruturadas que organizam a hierarquia do jogo dentro de um bloco principal (`.container`), funcionando como o *viewport* centralizador.
Divisão clara entre o painel de exibição de dados e os botões de interação do usuário (`Fazer Pizza` e `Comprar Melhoria`).

### 2. Estilização e Efeitos Especiais (CSS3)
**Layout Engine:** Uso extensivo de **Flexbox** para o alinhamento de componentes em colunas e centralização absoluta na tela.
**Gerenciamento de Viewport:** Uso de unidades relativas combinadas com limites de pixel (`max-width: 460px`) para impedir quebras de layout em telas menores.
**Efeitos Visuais:** Filtros de sombra alpha (`filter: drop-shadow`) que respeitam a transparência dos cantos arredondados da pizza, efeito de profundidade 3D e múltiplos vetores coordenados de `text-shadow` para contornar as fontes.

### 3. Lógica e Gerenciamento de Estado (JavaScript ES6)
**Manipulação do DOM:** Interceptação atômica e assíncrona de cliques nos elementos através de escutadores de eventos (`addEventListener`).
**State Management:** Controle em memória das variáveis de estado do jogador (`pizzasProduzidas`, `pizzasPorClique` e `custoMelhoria`).
**Algoritmo de Upgrade:** Validação condicional simples que verifica o saldo do jogador, aplica uma taxa de inflação geométrica ao custo do próximo nível e injeta os novos valores instantaneamente na interface via `.innerText`.

# Tato Padilha Team — site

Site estático (HTML, CSS e JavaScript puros, sem build). Para publicar no Netlify, basta apontar para a raiz do repositório.

## Estrutura

- `index.html` — página inicial
- `privacidade.html` — política de privacidade
- `css/style.css` — estilos (a cor de destaque é a variável `--accent`)
- `js/main.js` — grade de horários e filtro (edite a lista `AULAS`)
- `imgs/` — imagens

## Pendências antes de publicar

### Imagens demonstrativas (trocar mantendo o mesmo nome de arquivo)

| Arquivo | Uso | Tamanho sugerido |
| --- | --- | --- |
| `imgs/hero.jpg` | foto principal de treino | 1200×1400 |
| `imgs/professor.jpg` | retrato do professor | 900×1100 |
| `imgs/muaythai.jpg` | card Muaythai | 800×600 |
| `imgs/jiu-jitsu.jpg` | card Jiu-jitsu | 800×600 |
| `imgs/boxe.jpg` | card Boxe | 800×600 |
| `imgs/mma.jpg` | card MMA | 800×600 |

### Informações inventadas (corrigir)

- **Currículo do professor** (seção "Quem ensina") — marcado com o selo "Exemplo".
- **Depoimentos** (seção "A palavra dos alunos") — marcados com o selo "Exemplo".
- **Preço do personal fight** — "a partir de R$ 80 por aula".
- **Regra de Boxe e MMA nos planos**.
- **Horário de funcionamento** — "segunda a sexta, das 06:00 às 21:30".
- **Política de privacidade** — texto-base, revisar.

Ao trocar pelo conteúdo real, apague os `<span class="exemplo">` correspondentes. No código, procure por `EXEMPLO`, `INVENTADO` e `DEMONSTRATIVA` para achar todos os pontos.

# amigo-secreto-2

# Amigo Secreto - Sorteio Online

Este é um projeto simples de **Sorteio de Amigo Secreto**. O sistema permite que os usuários adicionem nomes à lista e, ao clicar em um botão, sorteiem os amigos secretos. O sorteio é feito de forma aleatória e exibe os pares de amigos secretos na tela.

## Funcionalidades

- **Adicionar Amigos**: Os usuários podem inserir nomes na lista de amigos.
- **Sortear Amigo Secreto**: A aplicação sorteia aleatoriamente os pares de amigo secreto entre os nomes adicionados.
- **Exibição dos Resultados**: Após o sorteio, o sistema exibe quem sorteou quem.

## Como Usar

### 1. Clone o repositório

Para começar, faça o clone do repositório para a sua máquina local:

```bash
git clone https://github.com/DinelliFernanda/amigo-secreto-2.git
```

### 2. Abra o arquivo `index.html` em um navegador

Após clonar o repositório, abra o arquivo `index.html` em qualquer navegador de sua preferência.

### 3. Adicione amigos e sorteie

- Digite os nomes dos amigos no campo de texto e clique no botão **"Adicionar"** para adicionar o nome à lista.
- Clique em **"Sortear amigo"** para gerar os pares de amigo secreto.

## Tecnologias Usadas

- **HTML**: Estrutura da página.
- **CSS**: Estilização da página (usado o arquivo `style.css` para o design).
- **JavaScript**: Lógica para adicionar amigos, sortear os pares e exibir os resultados.

## Estrutura do Projeto

O projeto é composto por três arquivos principais:

```
/amigo-secreto-2
├── index.html          # Arquivo HTML com a estrutura da página
├── app.js              # Arquivo JavaScript com a lógica do sorteio
├── style.css           # Arquivo CSS com o estilo da página
```

### `index.html`

O arquivo HTML contém a estrutura básica da página, com um campo de entrada para adicionar amigos e dois botões para adicionar amigos e realizar o sorteio.

### `app.js`

O arquivo JavaScript contém a lógica para:
- Adicionar amigos à lista.
- Embaralhar a lista e sortear os pares de amigo secreto.
- Exibir os resultados na página.

### `style.css`

Este arquivo contém a estilização da página, incluindo o layout dos elementos e o design do botão.

## Como Contribuir

1. Faça um fork deste repositório.
2. Crie uma nova branch para suas mudanças: `git checkout -b minha-nova-funcionalidade`.
3. Faça suas alterações e adicione os arquivos alterados: `git add .`.
4. Comite as mudanças: `git commit -m 'Adicionando uma nova funcionalidade'`.
5. Envie para o repositório remoto: `git push origin minha-nova-funcionalidade`.
6. Abra um pull request com uma descrição clara do que foi alterado.

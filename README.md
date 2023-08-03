# Boas-vindas ao repositório do exercício React Form!

<details>
  <summary><strong>👨‍💻 O que deverá ser desenvolvido</strong></summary><br />

Formulários estão presentes em todas as aplicações web. Se você já fez algum cadastro em algum site, você já preencheu um formulário.

Mas agora chegou a hora de você estar do outro lado! Nesse exercício, você desenvolverá seu próprio formulário, com regras de validação bem específicas para cada campo.

Para conseguir montar seu formulário e validar seus campos, você usará todo seu conhecimento em React: será necessário criar componentes, gerenciar estados e lidar com eventos usando `event handlers`.
</details>

<details>
  <summary><strong>:memo: Habilidades</strong></summary><br />

Neste exercício, verificamos se você é capaz de:

- Manipular estado de um component React

- Capturar eventos utilizando a sintaxe do React

- Criar formulários com React
</details>

## 1 - Crie um `<fieldset>` para dados pessoais

<details>
  <summary>Neste fieldset a pessoa usuária deverá ser capaz de informar seus dados pessoais. Para isso crie os seguintes campos:</summary><br />

  <details>
    <summary><strong>Nome</strong></summary><br />
  - **Tipo de campo**: texto.
  - **Validação**: limite de 40 caracteres.
  - **Comportamento**: todos os caracteres devem ser transformados para `UPPER CASE` assim que forem digitados.
  </details><br />

  <details>
    <summary><strong>Email</strong></summary><br />

  - **Tipo de campo**: email.
  - **Validação**: Limite de 50 caracteres.
  </details><br />

  <details>
    <summary><strong>CPF</strong></summary><br />

  - **Tipo e campo**: texto.
  - **Validação**: limite de 11 caracteres.
  </details>
</details><br />

## 2 - Crie outro `<fieldset>` para dados de endereço

<details>
  <summary>Neste fieldset a pessoa usuária deverá ser capaz de informar seus dados de endereço. Para isso crie os seguintes campos:</summary><br />

  <details>
    <summary><strong>Endereço</strong></summary><br />

  - **Tipo de campo**: texto.
  - **Validação**: limite de 200 caracteres.
  - **Comportamento**: remover qualquer caractere especial que seja digitado (exemplo: $%^'@+=).
  </details><br />

  <details>
    <summary><strong>Cidade</strong></summary><br />

  - **Tipo de campo**: texto.
  - **Validação**: limite de 28 caracteres.
  - **Comportamento**: ao remover o foco desse campo (evento onBlur), verificar se o nome da cidade começa com números. Caso comece, limpar o campo.
  </details><br />

  <details>
    <summary><strong>Estado</strong></summary><br />

  - **Tipo de campo**: comboBox.
  - **Opções**: todos os estados do Brasil.
  - **Observação**: use o arquivo `src/countryStates.ts` para preencher as opções deste campo.
  </details><br />

  <details>
    <summary><strong>Tipo</strong></summary><br />

  - **Tipo de campo**: Radio Button.
  - **Opções**: "Casa" e "Apartamento".
  </details>
</details><br />

## 3 - Crie um terceiro `<fieldset>` para dados do último emprego

<details>
  <summary>Neste fieldset a pessoa usuária deverá ser capaz de informar seus dados profissionais. Para isso crie os seguintes campos:</summary><br />

  <details>
    <summary><strong>Resumo do currículo</strong></summary><br />
  - **Tipo de campo**: TextArea.
  - **Validação**: limite de 1000 caracteres.
  </details><br />

  <details>
    <summary><strong>Cargo</strong></summary><br />

  - **Tipo de campo**: Texto.
  - **Validação**: limite de 40 caracteres.
  - **Comportamento**: quando o mouse passar por cima deste campo (evento `onMouseEnter`), exibir um alerta dizendo "Preencha com cuidado esta informação.". Exiba essa mensagem apenas uma vez.
  </details><br />

  <details>
    <summary><strong>Descrição do cargo</strong></summary><br />

  - **Tipo de campo**: TextArea.
  - **Validação**: limite de 500 caracteres .
  </details>
</details><br />

## 4 - Crie um botão que, ao ser clicado, monta uma `<div>` com o consolidado dos dados que foram inseridos no formulário

<details>
  <summary>A pessoa usuária deverá ser capaz de ver seus dados pessoais e profissionais consolidados após preencher todo o formulário e enviá-lo. Para isso crie os seguintes elementos:</summary><br />

- Um botão com o texto `Enviar` que, ao ser clicado, exibe os dados consolidados.

- O botão deverá receber o type `submit`.
> Dica: O botão deve ser filho do elemento `form`, lembre-se de utilizar o preventDefault para evitar que a página seja recarregada ao clicar no botão.

- Um elemento de texto que tem como conteúdo o `nome` informado no formulário.

- Um elemento de texto que tem como conteúdo o `email` informado no formulário.

- Um elemento de texto que tem como conteúdo o `cpf` informado no formulário.

- Um elemento de texto que tem como conteúdo o `endereço` informado no formulário.

- Um elemento de texto que tem como conteúdo a `cidade` informada no formulário.

- Um elemento de texto que tem como conteúdo o `estado` informado no formulário.

- Um elemento de texto que tem como conteúdo o `tipo de endereço` informado no formulário.

- Um elemento de texto que tem como conteúdo o `resumo do currículo` informado no formulário.

- Um elemento de texto que tem como conteúdo o `cargo` informado no formulário.

- Um elemento de texto que tem como conteúdo a `descrição do cargo` informada no formulário.
</details><br />

## 5 - Crie um botão `Limpar` que limpa todos os campos do formulário e a `<div>` com seu currículo também

<details>
  <summary>A pessoa usuária deverá ser capaz de limpar todos os campos do formulário e, consequentemente, o consolidado com as informações de seu currículo após preencher todo o formulário e enviá-lo. Para isso crie:</summary><br />

- Um botão com o texto "Limpar" que, ao ser clicado, faz com que os dados dos formulário e os dados consolidados deixem de ser exibidos
</details><br />

## Utilize regex para validar o campo email

<details>
  <summary>Para isso, considere os seguintes pontos:</summary><br />

- A validação deve acontecer no evento `onChange` do input.
- O formato esperado é `trybe@gmail.com`.
- Você pode validar a sua regex nesse [link do regextester.com](https://www.regextester.com/100026).
- Caso o campo esteja inválido, exiba uma mensagem `email is invalid`
- 💡 Dica: Para estudar como o regex funciona, utilize [esse conteúdo do site regexone.com](https://regexone.com/)
</details>

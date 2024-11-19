# Aplicativo Inova Week 2025 📱

O Aplicativo Inova Week 2025 é um projeto desenvolvido como avaliação prática da disciplina de Desenvolvimento Mobile. Ele foi criado com React Native e utiliza o Supabase como backend para gerenciamento de autenticação, banco de dados e armazenamento em nuvem. O objetivo do aplicativo é facilitar a navegação pelos grupos participantes do evento Inova Week 2025, permitindo acesso às informações e avaliações de cada projeto.

## 🛠️ Funcionalidades Principais

- **Autenticação (Login)**: Permite que os usuários acessem o aplicativo utilizando e-mail e senha. O acesso às funcionalidades principais é restrito a usuários autenticados.
- **Cadastro (Registro)**: Oferece uma funcionalidade para criação de contas, com validação por e-mail.
- **Esqueci Minha Senha**: Possibilita o envio de e-mails para redefinição de senha, utilizando os recursos do Supabase.
- **Lista de Grupos**: Exibe todos os grupos participantes do Inova Week 2025, com acesso restrito a usuários autenticados.
- **Detalhes do Grupo**: Ao selecionar um grupo, são exibidas informações detalhadas sobre o projeto, incluindo membros, avaliações e o líder do grupo.

##  📂 Estrutura do Banco de Dados

O backend do aplicativo é composto pelas seguintes tabelas principais no Supabase:

- **Grupos**: Contém informações sobre os grupos participantes, como nome, descrição e líder do grupo.
  - Atributos: `id`, `nome`, `descricao`, `descricao_detalhada`, `lider_id`.
- **Alunos**: Representa os membros dos grupos, com informações básicas e relação com os grupos.
  - Atributos: `id`, `nome`, `matricula`, `grupo_id`.
- **Avaliações**: Armazena feedbacks e pontuações atribuídas aos grupos, associando-os a membros específicos.
  - Atributos: `id`, `pontuacao`, `feedback`, `grupo_id`, `aluno_id`.

## 🚀 Como Configurar e Executar o Projeto

Para executar este projeto, é necessário ter o Node.js, npm e o Expo CLI instalados em sua máquina. Siga os passos abaixo:

1. **Clonar o repositório**: Use o Git para clonar o repositório:
    ```bash
    git clone https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
    cd SEU-REPOSITORIO
    ```

2. **Instalar as dependências**: No diretório do projeto, execute:
    ```bash
    npm install
    ```
    ```bash
    npm install @supabase/supabase-js
    ```
    

3. **Iniciar o aplicativo**: Inicie o aplicativo com:
    ```bash
    npx expo start
    ```
    Um QR Code será gerado. Utilize o Expo Go no seu dispositivo ou emulador para executar o aplicativo.

## Informações Adicionais

- O aplicativo possui design responsivo e é otimizado para funcionar tanto em dispositivos móveis quanto em navegadores.
- A integração com o Supabase foi implementada para gerenciar autenticação e manipulação de dados em tempo real.
- O projeto foi desenvolvido com foco em clareza, funcionalidade e segurança.

## Observações Finais

Este projeto foi estruturado para atender aos requisitos da avaliação prática do B2, com organização do código e design intuitivo. Caso você seja o avaliador, as tabelas e dados necessários estão configurados no Supabase para validação. Recomenda-se seguir os passos descritos para executar o projeto corretamente.

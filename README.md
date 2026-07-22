# Cine Guerreiro — Angular para GitHub Pages

Landing page mobile first e responsiva do **Cine Guerreiro Sistema P2P**, desenvolvida em Angular e preparada para publicação automática no GitHub Pages.

## Recursos

- Angular com componente standalone.
- Interface mobile first e responsiva.
- Identidade visual escura com azul, ciano, magenta e roxo.
- Menu adaptado para celular e desktop.
- Hero, benefícios, experiência, etapas, planos, FAQ, CTA e rodapé.
- Botão flutuante do WhatsApp durante toda a rolagem.
- WhatsApp configurado para `+55 81 9424-4706`.
- Mensagem personalizada para cada plano.
- Imagens locais em WebP.
- Workflow automático para GitHub Pages.
- Detecção automática do nome do repositório e do `base-href`.
- Arquivos `404.html` e `.nojekyll` gerados no deploy.

## Executar no computador

Requisitos: Node.js 22 ou superior e npm 10 ou superior.

```bash
npm install
npm start
```

Abra:

```text
http://localhost:4200
```

## Publicar no GitHub Pages

### 1. Crie o repositório

No GitHub, crie um repositório, por exemplo:

```text
cine-guerreiro
```

Com o usuário `capf01`, o endereço final será normalmente:

```text
https://capf01.github.io/cine-guerreiro/
```

### 2. Envie os arquivos

Envie **o conteúdo desta pasta** para a raiz do repositório. O arquivo abaixo deve permanecer no projeto:

```text
.github/workflows/deploy-pages.yml
```

Pelo terminal:

```bash
git init
git add .
git commit -m "Publica landing page Cine Guerreiro"
git branch -M main
git remote add origin https://github.com/capf01/cine-guerreiro.git
git push -u origin main
```

### 3. Ative o GitHub Pages

No repositório, acesse:

```text
Settings > Pages > Build and deployment > Source > GitHub Actions
```

### 4. Aguarde a publicação

Acesse a aba **Actions**. O fluxo chamado **Publicar Angular no GitHub Pages** compilará e publicará o site automaticamente após cada envio para a branch `main`.

O workflow identifica sozinho se o projeto está em:

```text
https://usuario.github.io/nome-do-repositorio/
```

ou em um repositório principal:

```text
https://usuario.github.io/
```

Por isso, não é necessário alterar manualmente o `<base href>`.

## Compilação manual para o repositório `cine-guerreiro`

```bash
npm run build:pages
```

Os arquivos finais serão gerados em:

```text
dist/cine-guerreiro/browser
```

## Alterar o WhatsApp

Edite a propriedade `whatsappNumber` em:

```text
src/app/app.component.ts
```

Número atual:

```text
558194244706
```

## Estrutura de publicação

```text
.github/workflows/deploy-pages.yml  # Compilação e deploy automático
public/assets/                      # Logos e imagens
src/app/                            # Landing page
angular.json                        # Configuração Angular
package.json                        # Dependências e scripts
```

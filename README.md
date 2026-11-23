# Erika Lucena Dermatologia

Site institucional responsivo em Next.js e Tailwind CSS.

```sh
npm install
npm run dev
```

Acesse http://localhost:3000. Para gerar a versão estática de produção na pasta `out`, use `npm run build`.

O GitHub Pages publica a versão estática pelo workflow `.github/workflows/pages.yml` a cada push para `main`. No GitHub, configure a origem do Pages como GitHub Actions. Para usar os dados oficiais no site publicado, adicione as variáveis abaixo em **Settings → Secrets and variables → Actions → Variables** e execute o workflow novamente.

Para ativar o botão de agendamento, configure `NEXT_PUBLIC_BOOKING_URL` em `.env.local` com o endereço oficial de agendamento. O conteúdo dos tratamentos está em `app/treatments.ts`.

Os artigos da página `/conteudos` estão em `app/conteudos/articles.ts`.

O rodapé exibe dados de exemplo por padrão. Para substituí-los e ativar os links das redes sociais, configure os dados oficiais em `.env.local`:

- `CLINIC_ADDRESS` para o endereço.
- `CLINIC_PHONE` para o telefone com DDD.
- `CLINIC_HOURS` para o horário de atendimento.
- `CLINIC_REGISTRATION` para o CRM e o RQE.
- `CLINIC_INSTAGRAM_URL` e `CLINIC_WHATSAPP_URL` para os links oficiais.

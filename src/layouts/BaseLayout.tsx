export const BaseLayout = (props: any) => (
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="/static/style.css" rel="stylesheet" />

      <title>{props.title}</title>
    </head>
    <body>
      {props.children}
      {import.meta.env.PROD ? (
        <>
          <script type="module" src="/static/entry-client.js"></script>
        </>
      ) : (
        <>
          <script type="module" src="/src/entry-client.tsx"></script>
        </>
      )}
    </body>
  </html>
);

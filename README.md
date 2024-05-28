# BidBuddy - A Modern Fullstack Bidding WebSite.

Built with the Next.js 14 App Router, Postgres, TypeScript, Tailwind CSS, Next-Auth, Docker, Knock, AWS S3, AWS CloudFront, Zod & Drizzle.

Credits: [Web Dev Cody](https://x.com/webdevcody)

## Features

- 🛠️ Completely built from scratch in Next.js 14
- 🖥️ Drag-and-drop file uploads
- 🛍️ Customers can purchase directly from you
- 🌟 Clean, modern UI on top of shadcn-ui
- 🔑 Authentication using Next-Auth
- ✉️ Real-time notification with Knock & WebSocket
- ⌨️ 100% written in TypeScript
- 🎁 ...much more

## Getting Started

To get started with this project, run

```bash
git clone https://github.com/nayak-nirmalya/bid-buddy.git
cd bid-buddy

pnpm install
pnpm dev
```

and copy the .env.sample variables into a separate .env file, fill them out & and that's all you need to get started!

## Available Commands

Running commands with npm `pnpm [command]`

| command       | description                              |
| :------------ | :--------------------------------------- |
| `dev`         | Starts a development instance of the app |
| `lint`        | Run typescript lint check with eslint    |
| `build`       | Start building app for deployment        |
| `start`       | Run build version of app                 |
| `db:push`     | Push changes in schema to database       |
| `db:studio`   | Run drizzle studio to view & edit data   |
| `db:generate` | Generate migration files                 |

## License

[MIT](https://choosealicense.com/licenses/mit/)

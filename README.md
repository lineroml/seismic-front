# Seismic Data Project - Front End 🗺️🌋

Hello! This is a companion project to my formal application and practical test as part for my job Application with Frogmi.
If you´re looking for the backend project, which is the main portion of the application, you can find it [here](https://github.com/lineroml/SeismicInfoFrogmi)

## 🌐💻 Technolgies used:

- React

- Next.js

## ⚡🏃 Requirements:

This project was developed using Node.js on WSL. It is recommended to have your node installation managed in WSL.

1. Node.js / NPM
2. env file

If you wish to run this project, you will need to create an `.env.local` file in the root of the project. This file should contain the following:

- `NEXT_PUBLIC_ROR_API_URL`: the URL where the backend project is running. By default, it is expected to be running on `http://localhost:8000`. As given by the [example file](https://github.com/lineroml/seismic-front/blob/7023ef03e6a80d68b064a51789cdbc771cc83e76/.env.local.example)

if you wish to run the backend on a different port, you may change the `NEXT_PUBLIC_ROR_API_URL` constant in the `.env.local` file.

You can create the `.env.local` file by copying the `.env.local.example` file and renaming it to `.env.local`. You can do this by running the following command:

```bash
mv .env.local.example .env.local
```

Or you may create the file manually and add the following content:

```bash
touch .env.local
echo "NEXT_PUBLIC_ROR_API_URL=http://localhost:8000" > .env.local
```

## Run Project

When ready to execute the project. You may use the following command:

```bash
npm run dev
```

**NOTE**: The project will run on port 3000 by default.

Please do keep in mind that this project will **ONLY** work if the backend project is running. Again, You can find the backend project [here](https://github.com/lineroml/SeismicInfoFrogmi). Also, do keep in mind that this app expects the backend to be running on port 8000. If you wish to run the backend on a different port, you may change the `NEXT_PUBLIC_ROR_API_URL` constant in the `.env.local` file.

## 📝📚 Additional Notes:

- As you may notice if you peruse the project, you may realise it was developed using minimal styling and libraries. This was done on purpose, as the main focus of the project was to demonstrate the functionality of the application and the interaction with the backend. This was also by design, as I wanted to demonstrate my ability to develop a project from scratch, without relying on pre-built components or libraries, and the instructions did not specify the use of any technologies or features. Those were left to my discretion, and would have made the development process easier and faster.

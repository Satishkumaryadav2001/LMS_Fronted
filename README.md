#LMS Fronted

### Setup instrucation
1...  Clone the Project

git clone https://github.com/Satishkumaryadav2001/LMS_Fronted.git


2....Move into the directory

cd LMS_Fronted

3...Install dependencies

  npm i


4... Run the server

   npm run dev



### Setup instrucation for Tailwind

[Tailwind official instrucation doc](https://tailwindcss.com/docs/installation)

1. Install tailwind css

npm install -D tailwindcss postcss autoprefixer

2 Create Tailwind config file

  npx tailwindcss init

3 Add file extension to tailwind config file in the contents property

    "./index.html",
     ./src/**/*.{html,js,jsx,ts,tsx}


4 Add the tailwind directives at the top of the `index.css` file

  @tailwind base;
  @tailwind components;
  @tailwind utilities;


### Adding pliging and dependencies

    npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp

### Configure auto import sort esline

1. Install simple impot sore

    npm i -D eslint-plugin-simple-import-sort

2.  Add rule in `.eslint.cjs`

     'simple-refresh-sort/import':'error',

3. add simple_import sort plugin in `.eslint.cjs`

   plugins: ['..........','simple-import-sort'],

4. To enable auto import sort on file save in vscode

  - Opne `settings.json`
  -add the following config
  
  "editor.codeActionsOnSave":{
       "source.fixAll.eslint":true
  }   
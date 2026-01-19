
👉 **CRA (Create React App)** starts the app
👉 CRA uses **Webpack internally**, NOT Rspack

So even though:

* You installed Rspack ✅
* You created `rspack.config.js` ✅

👉 **Rspack is completely ignored** ❌

---

## Why Rspack is NOT used automatically

CRA is opinionated (pre-configured).

Inside `package.json`, CRA already has this:

```json
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build"
}
```

That means:

* `react-scripts` controls everything
* Webpack is hidden inside `react-scripts`
* CRA does **not look at `rspack.config.js`**

---

## Important Beginner Note:

> Installing Rspack ≠ Using Rspack

Rspack will work **ONLY IF**:

* You explicitly tell the project to use it
* OR you replace CRA’s default build system

---

For **learning React basics**, CRA + Webpack is **perfect**.

---

## When DOES Rspack actually start working?

Rspack works only if you do ONE of these:

### Option 1 Replace CRA build system (advanced ❌ for beginners)

* Eject CRA
* Configure Rspack manually
* Risky for beginners

### Option 2 Create a custom Rspack project (recommended later ✅)

* No CRA
* Rspack controls everything

### Option 3 Use tools like CRACO / custom scripts (intermediate)

👉 **Not recommended right now**, since you’re still learning basics.

---
## **Step 1 — Create CRA with TypeScript**

1. Open terminal/command prompt.
2. Run:

```bash
npx create-react-app react-context-demo --template typescript
```

3. Go into project folder:

```bash
cd react-context-demo
```

---

## **Step 2 — Install Rspack (optional dev packages)**

1. Run:

```bash
npm install --save-dev @rspack/core @rspack/cli
```

2. Fix CRA dependency conflicts:

```bash
npm install --save-dev ajv@8 ajv-keywords@5
```

3. Delete `node_modules` and `package-lock.json`:

Windows:

```bash
rmdir /s /q node_modules
del package-lock.json
npm install
```

Mac/Linux:

```bash
rm -rf node_modules package-lock.json
npm install
```


### 3️⃣ Update scripts in package.json

Open `package.json` and **update the start, build, test scripts** to use Rspack CLI:

```json
"scripts": {
  "start": "rspack serve",
  "build": "rspack build",
  "test": "react-scripts test",
  "eject": "react-scripts eject"
}
```

* `rspack serve` → starts dev server
* `rspack build` → builds production bundle

> Note: You **keep `react-scripts`** for test/eject.

---

### 4️⃣ Optional: Add a rspack config file

Create `rspack.config.js` in project root:

```js
const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader"
      }
    ]
  }
};
```

* This tells Rspack **how to handle TS/TSX** files.
* Minimal config to make CRA TypeScript work.

---

### ✅ After this

1. You can run:

```bash
npm start
```

```
ERROR in × Unable to resolve loader ts-loader
```

And the `URI malformed` is just a secondary error caused by the server failing to compile.

---

# **Fix Step by Step**

### **Step 1 — Install ts-loader**

```bash
npm install --save-dev ts-loader typescript
```

* `ts-loader` → allows Rspack to compile `.ts` / `.tsx` files
* `typescript` → ensures TypeScript is installed

---

### **Step 2 — Check Rspack config**

If you have `rspack.config.js` like this:

```js
const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader"
      }
    ]
  }
};
```

✅ Make sure it exists in the **project root**.

---

### **Step 3 — Delete old build / cache (optional but recommended)**

Windows:

```bash
rmdir /s /q node_modules
del package-lock.json
npm install
```

Mac/Linux:

```bash
rm -rf node_modules package-lock.json
npm install
```

---

### **Step 4 — Start Rspack Dev Server**

```bash
npm start
```
page is blank. 

1. CRA normally **hides Webpack / bundling** from you.
2. When you switch to Rspack with a manual `rspack.config.js`, **the HTML does not automatically include the generated bundle**.
3. CRA’s `public/index.html` expects **Webpack / CRA dev server** to inject the JS bundle automatically.

---

## **Two ways to fix this**

### **Option 1 — Minimal Rspack Setup without manual bundle**

* Don’t create `rspack.config.js`
* Just install:

```bash
npm install --save-dev @rspack/core @rspack/cli
```

* Keep your **CRA scripts** as:

```json
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test"
}
```

* This way CRA **handles TypeScript + HTML** automatically, and Rspack dev server is not needed. ✅ Safe for demos like Props / Context.

---

### **Option 2 — Rspack with HTML injection**

If you really want **Rspack dev server**:

1. Install **HTML plugin** (newer version):

```bash
npm install --save-dev @rspack/plugin-html
```

2. Update `rspack.config.js`:

```js
const HtmlPlugin = require("@rspack/plugin-html");
const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      { test: /\.(ts|tsx)$/, loader: "ts-loader" }
    ]
  },
  plugins: [
    new HtmlPlugin({
      template: "public/index.html"
    })
  ],
  devServer: {
    port: 8080,
    static: "./public",
  }
};
```

* This will **inject the generated bundle into `index.html` automatically**
* Then `npm start` → works

---

💡 **TL;DR for Props/Context demos**

* For learning React Context & Props, it’s **easiest to stick with CRA default scripts (`react-scripts`)**.
* Don’t manually add `<script src="bundle.js">` — CRA handles it.
* Rspack is optional unless you need **faster builds or production experimentation**.

---
Blank Screen again 
and below error

```
URIError: URI malformed
```

comes from **`serve-index` used by webpack-dev-server / Rspack**. It usually happens when **Rspack is serving the `public` folder** and encounters **some file with weird characters** in the path (like spaces, `%`, or non-ASCII characters).

Basically:

* Rspack compiled ✅
* But the dev server **cannot correctly serve some file** → browser shows **blank page**

---

# **Fix Step by Step**

### 1️⃣ Check your `public` folder

* Open `C:\Training\TAL\react08-props-example1-pass-data\public`
* Look for files with unusual characters in **name or folder path**:

  * Spaces like `my file.html` → rename to `my-file.html`
  * Special symbols like `%`, `#`, `@`, `&` → remove them

> Usually the culprit is an image file or extra HTML file in `public/`

---

### 2️⃣ Start with a clean CRA public folder

Make sure `public/` contains **only standard files**:

```
index.html
favicon.ico
manifest.json
logo192.png
logo512.png
robots.txt
```

* Delete any extra files for testing

---

### 3️⃣ Clear node_modules + cache

```bash
rmdir /s /q node_modules
del package-lock.json
npm install
```

> This ensures **Rspack / webpack-dev-server** uses clean cache

---

### 4️⃣ Run dev server again

```bash
npm start
```

* It should compile ✅
* Open browser → `http://localhost:8080` → now you should **see your App**

---

### 5️⃣ Optional: Use CRA scripts instead of Rspack for simplicity

* If you don’t care about Rspack yet, just use default CRA:

```json
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test"
}
```

* CRA automatically handles HTML, TypeScript, and the dev server → no blank page errors

---

💡 **TL;DR**

* Blank page + URIError = dev server cannot serve some file in `public/`
* Fix by **cleaning `public/` folder**, removing weird filenames
* Optional: stick with CRA scripts to avoid Rspack dev server issues

---


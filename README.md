# Electronic Albania — Vite + React Website

## 🚀 Si ta nisësh lokalisht (IntelliJ / Terminal)

### 1. Instalo Node.js
Shko te https://nodejs.org dhe shkarko versionin **LTS**.

### 2. Hap projektin në IntelliJ
- File → Open → zgjidh dosjen `electronic-albania`

### 3. Instalo paketat (një herë)
Hap **Terminal** brenda IntelliJ dhe shkruaj:
```bash
npm install
```

### 4. Nis serverin lokal
```bash
npm run dev
```
Faqja do hapet te: **http://localhost:5173**

---

## 📸 Si të shtosh fotot e tua

### Opsioni 1 — Foto nga kompjuteri (Rekomandohet)
1. Kopjo fotot në `src/assets/` (p.sh. `src/assets/cctv1.jpg`)
2. Hap `src/components/Gallery.jsx`
3. Shto importin në krye:
   ```js
   import cctv1 from '../assets/cctv1.jpg'
   ```
4. Shto foton në array-in `photos`:
   ```js
   {
     src: cctv1,
     title: 'Instalim CCTV - Tiranë',
     category: 'CCTV',
   }
   ```

### Opsioni 2 — Foto nga interneti (URL)
Thjesht vendos URL-në direkt:
```js
{
  src: 'https://example.com/foto.jpg',
  title: 'Projekti im',
  category: 'Smart Home',
}
```

---

## 🌐 Deploy në Netlify

### Metoda 1 — Drag & Drop (Më e lehtë)
1. Ekzekuto: `npm run build`
2. Kjo krijon dosjen `dist/`
3. Shko te [netlify.com](https://netlify.com)
4. Drag & drop dosjen `dist/` në Netlify

### Metoda 2 — GitHub (Automatik)
1. Ngarko projektin në GitHub
2. Në Netlify: **Add new site → Import from Git**
3. Zgjidh repo-n tënd
4. Vendos:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Çdo herë që bën `git push`, faqja update-ohet automatikisht! ✅

---

## 📁 Struktura e projektit

```
electronic-albania/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/          ← Shto fotot këtu
│   ├── components/
│   │   ├── Navbar.jsx   ← Menu navigimi
│   │   ├── Hero.jsx     ← Seksioni kryesor
│   │   ├── Stats.jsx    ← Statistikat
│   │   ├── Services.jsx ← Shërbimet
│   │   ├── Gallery.jsx  ← Galeria e fotove ← EDITO KËTU PËR FOTO
│   │   ├── Contact.jsx  ← Kontakti
│   │   └── Footer.jsx   ← Footer
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── netlify.toml
└── package.json
```

---

## 🎨 Si të ndryshosh ngjyrat

Hap `src/index.css` dhe ndrysho variablat:
```css
:root {
  --accent: #e8ff00;      /* Ngjyra kryesore (e verdhë) */
  --black: #0a0a0a;       /* Sfond i zi */
  --white: #ffffff;       /* Tekst i bardhë */
}
```

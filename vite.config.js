# Legacy Exchange Journal

## Deploy to Vercel (step by step)

### 1. Upload to GitHub
1. Go to github.com → New repository → name it `lea-journal` → Create
2. On your computer, open a terminal in this folder and run:
```
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/lea-journal.git
git push -u origin main
```

### 2. Deploy on Vercel
1. Go to vercel.com → Add New Project
2. Import your `lea-journal` GitHub repo
3. Vercel auto-detects Vite — just click **Deploy**
4. Done. Your URL will be something like `lea-journal.vercel.app`

### 3. Add custom domain (optional)
- In Vercel project settings → Domains → Add `journal.legacyexchangeacademy.com`
- In your domain registrar (wherever you bought legacyexchangeacademy.com) add a CNAME record:
  - Name: `journal`
  - Value: `cname.vercel-dns.com`

### Local development
```
npm install
npm run dev
```

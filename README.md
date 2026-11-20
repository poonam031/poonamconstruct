# POONAM CONSTRUCTION – Engineers & Contractors
> Premium Architectural Luxury & Civil Engineering Website

Official website for **POONAM CONSTRUCTION – Engineers & Contractors**, based in Kolhapur, Maharashtra, India.
- **Lead Engineer:** Er. Pratik D. Chougule (B.E. Civil)
- **Direct Contact:** +91 72649 08823
- **Location:** Kolhapur, Maharashtra, India
- **Website Domain:** poonamconstruct.com

---

## 🚀 Deployment on Render (render.com)

This website is structured as an ultra-fast, modern static site with zero external build step dependencies.

### Option 1: Automatic Blueprint Deployment (Recommended)
1. Go to [dashboard.render.com](https://dashboard.render.com).
2. Click **New +** -> **Blueprint**.
3. Connect your GitHub repository: `poonam031/poonamconstruct`.
4. Render will detect `render.yaml` and configure the static site automatically.
5. Click **Apply**.

### Option 2: Manual Static Site Setup
1. On [dashboard.render.com](https://dashboard.render.com), click **New +** -> **Static Site**.
2. Connect `poonam031/poonamconstruct`.
3. Fill in:
   - **Name:** `poonamconstruct`
   - **Branch:** `main`
   - **Build Command:** *(leave empty)*
   - **Publish Directory:** `./`
4. Click **Create Static Site**.

---

## 🌐 Custom Domain Setup (`poonamconstruct.com`)

Once deployed on Render:
1. In your Render Dashboard, open your `poonamconstruct` static site.
2. Go to **Settings** -> **Custom Domains**.
3. Add:
   - `poonamconstruct.com`
   - `www.poonamconstruct.com`
4. In your Domain Registrar's DNS Management (GoDaddy, Namecheap, Cloudflare, Hostinger, etc.):
   - **Apex / Root Domain (`@`)**:
     - Type: `A` (or `ALIAS` / `ANAME`)
     - Name/Host: `@`
     - Value / IP: `216.24.57.1`
   - **Subdomain (`www`)**:
     - Type: `CNAME`
     - Name/Host: `www`
     - Value: `poonamconstruct.onrender.com`
5. Render will automatically issue and renew a free Let's Encrypt SSL/TLS Certificate.

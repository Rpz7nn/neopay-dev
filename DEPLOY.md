# 🚀 Guia de Deploy - NeoPay

Este documento contém todas as instruções para fazer deploy do projeto em produção.

## 📋 Infraestrutura

- **Back-end**: Discloud (https://neopaydev.squareweb.app)
- **Front-end**: Netlify (https://neopaydevelopment.netlify.app)

---

## 🔧 BACK-END (Discloud)

### Pré-requisitos

1. Conta na Discloud
2. MongoDB (Atlas ou local)
3. Configuração de e-mail (Nodemailer)

### Passos para Deploy

1. **Preparar o código**
   - Certifique-se de que todas as dependências estão no `package.json`
   - O servidor está configurado para rodar na porta `80`

2. **Configurar variáveis de ambiente na Discloud**
   
   Acesse o painel da Discloud e configure as seguintes variáveis:

   ```env
   PORT=80
   NODE_ENV=production
   MONGODB_URI=sua_uri_mongodb_aqui
   JWT_SECRET=seu_jwt_secret_super_seguro_aqui
   JWT_EXPIRES_IN=7d
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=seu_email@gmail.com
   EMAIL_PASS=sua_senha_de_app
   FRONTEND_URL=https://neopaydevelopment.netlify.app
   ```

3. **Fazer upload do código**
   - Compacte a pasta `back/` (sem `node_modules`)
   - Faça upload via painel da Discloud

4. **Verificar funcionamento**
   - Acesse: `https://neopaydev.squareweb.app/health`
   - Deve retornar: `{"status":"ok","timestamp":"...","ambiente":"production"}`

---

## 🌐 FRONT-END (Netlify)

### Pré-requisitos

1. Conta no Netlify
2. Repositório Git (GitHub, GitLab, etc.)

### Passos para Deploy

1. **Configurar variáveis de ambiente no Netlify**
   
   Acesse: Site settings > Environment variables

   Adicione:

   ```env
   VITE_API_URL=https://neopaydev.squareweb.app
   ```

2. **Conectar repositório**
   - No Netlify, vá em "Add new site" > "Import an existing project"
   - Conecte seu repositório Git

3. **Configurar Build Settings**
   
   O arquivo `netlify.toml` já está configurado, mas você pode verificar:
   
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`

4. **Deploy**
   - O Netlify fará deploy automaticamente após cada push
   - Ou você pode fazer deploy manual clicando em "Deploy site"

5. **Verificar funcionamento**
   - Acesse: `https://neopaydevelopment.netlify.app`
   - Teste o fluxo completo:
     - Cadastro
     - Login
     - Acesso ao Dashboard
     - Logout

---

## 🔒 Segurança

### Checklist de Segurança

- ✅ CORS configurado apenas para o domínio do Netlify
- ✅ Variáveis sensíveis apenas no `.env` (não versionadas)
- ✅ JWT com expiração configurada
- ✅ Rate limiting ativo
- ✅ Headers de segurança (Helmet)
- ✅ Sanitização de dados (MongoDB)
- ✅ Senhas hashadas (bcrypt)

### Variáveis Sensíveis

**NUNCA** commite no Git:
- `.env` (backend)
- Qualquer arquivo com credenciais
- Chaves de API
- Senhas

---

## ✅ Testes Pós-Deploy

1. **Backend**
   - [ ] Health check: `/health`
   - [ ] CORS funcionando (apenas Netlify)
   - [ ] Cadastro de usuário
   - [ ] Login
   - [ ] Verificação de código
   - [ ] Rotas protegidas

2. **Frontend**
   - [ ] Página inicial carrega
   - [ ] Cadastro funciona
   - [ ] Login funciona
   - [ ] Dashboard acessível após login
   - [ ] Logout funciona
   - [ ] Rotas protegidas redirecionam corretamente

---

## 🐛 Troubleshooting

### Backend não inicia

- Verifique se `PORT=8080` está configurado
- Verifique se `MONGODB_URI` está correto
- Verifique logs na Discloud

### Frontend não conecta com API

- Verifique se `VITE_API_URL` está configurado no Netlify
- Verifique CORS no backend
- Verifique console do navegador para erros

### CORS Error

- Verifique se `FRONTEND_URL` no backend está como `https://neopaydevelopment.netlify.app`
- Certifique-se de que não há `http://` no final da URL
- Limpe cache do navegador

---

## 📞 Suporte

Em caso de problemas, verifique:
1. Logs do backend (Discloud)
2. Logs do frontend (Netlify)
3. Console do navegador (F12)
4. Network tab (F12) para ver requisições


# 🔑 Como Configurar o Web3Forms

## Passo 1: Obter a Chave de Acesso (Access Key)

1. **Acesse:** https://web3forms.com
2. **Na página inicial, role até "Get Started"**
3. **Digite seu e-mail:** `baycontassessoria@gmail.com`
4. **Clique em "Create Access Key"**
5. **Você receberá instantaneamente uma chave como:**
   ```
   a1b2c3d4-e5f6-7890-abcd-ef1234567890
   ```
6. **COPIE essa chave!**

## Passo 2: Adicionar a Chave no Código

1. **Abra o arquivo:** `frontend/src/components/Contato.jsx`

2. **Encontre a linha 32:**
   ```javascript
   access_key: 'YOUR_ACCESS_KEY_HERE',
   ```

3. **Substitua por:**
   ```javascript
   access_key: 'SUA_CHAVE_AQUI',
   ```

**Exemplo:**
```javascript
access_key: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
```

## Passo 3: Refazer o Build

```bash
cd frontend
npm run build
```

## Passo 4: Fazer Upload Novamente

Faça upload dos arquivos da pasta `frontend/dist/` para o cPanel (public_html).

---

## ✅ Pronto!

Agora seu formulário de contato vai funcionar sem precisar de backend!

### Como funciona:
1. ✅ Cliente preenche o formulário no site
2. ✅ Web3Forms envia o email direto para `baycontassessoria@gmail.com`
3. ✅ Você recebe a mensagem na sua caixa de entrada
4. ✅ Totalmente grátis e ilimitado!

---

## 📧 Configurações Extras (Opcional)

Após criar sua chave, você pode acessar: https://web3forms.com/dashboard

Lá você pode:
- ✅ Ver estatísticas de envios
- ✅ Adicionar auto-resposta para o cliente
- ✅ Configurar redirecionamento após envio
- ✅ Adicionar mais emails de destino

---

## 🎉 Vantagens do Web3Forms

- ✅ **100% Grátis** - Ilimitado para sempre
- ✅ **Sem Backend** - Não precisa de servidor Node.js
- ✅ **Instantâneo** - Emails chegam em segundos
- ✅ **Proteção Spam** - Sistema anti-spam integrado
- ✅ **Sem Cadastro Complexo** - Só precisa do email

---

## 🔒 Segurança

Sua chave de acesso (access key) é pública e pode ficar no código do frontend.
Ela só permite ENVIAR emails para o email que você cadastrou.
Ninguém consegue usar sua chave para enviar para outros emails.

---

## 🆘 Problemas?

### "Não recebi o email"
- Verifique a pasta de SPAM
- Confirme que usou o email correto ao criar a chave
- Aguarde alguns minutos (às vezes demora)

### "Access key inválida"
- Verifique se copiou a chave completa
- Não deixe espaços antes ou depois da chave
- Mantenha as aspas: `'sua-chave-aqui'`

---

## 🚀 Próximos Passos

1. [ ] Acesse web3forms.com e obtenha sua chave
2. [ ] Substitua no arquivo Contato.jsx
3. [ ] Faça `npm run build`
4. [ ] Faça upload para a Localweb
5. [ ] Teste o formulário!

**Precisa de ajuda em algum passo? Me avise!**

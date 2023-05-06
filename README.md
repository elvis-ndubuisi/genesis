# **Genesis**

## **Projects**

### **🥕 Salesprit POS 🧺**

Platform / User specific actions

- Register new user (Admin)
- Login access + projected routes
- Create & update new products
- Add & edit employee profile

### **🤖 CryptoKet NFT Marketplace**

- Authentication access (register & login)
- Add/Upload Nft items with image data

## **Challenges**

- **📁 Folder structuring** : Since `Genesis` is supposed to serve as backend to all [my porfolil]("") projects, structuring each project raised several challenges and navigating between folders wasn't the best experience for me.
  - I either have to group all scripts to their respective folders and use a naming convention like `user.model.cryptoket.ts`
  - Each function relating to a project could be grouped into a separate sub-folder and exported using an `index.ts`

- **🔁 Repeating functions & Middleware** : Authentication strategy for each project differs. While avoiding rewriting most functions & middleware it became harder to _kill 2 🐦 birds with one stone unless the second bird had to wait for me to retrieve the stone_.

- **💾 Connecting to Databases** : 🙄 This was probably the difficult decision. Questions like _how can i connect to multiple mongoDB databases in genesis and how do i reference it ?_, 🤔 _If I use prism_ .

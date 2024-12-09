const CryptoJS = require("crypto-js");

exports.encryptString = (text, key) => {
  return CryptoJS.AES.encrypt(text, key).toString();
};

exports.decryptString = (text, key) => {
  console.log(text, key);

  const bytes = CryptoJS.AES.decrypt(String(text), key);
  const content = bytes.toString(CryptoJS.enc.Utf8);

  if (content.length === 0) {
    throw new Error("Decryption failed | The decrypted text is empty.");
  }

  return content;
};

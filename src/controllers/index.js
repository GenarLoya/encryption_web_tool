const { encryptString, decryptString } = require("../utils/encryption");
const ENV = require("../config/env");

exports.encryptController = (req, res) => {
  const { text, encryptionKey } = req.body;
  try {
    const key = encryptionKey?.length > 0 ? encryptionKey : ENV.CRYPT_KEY;

    if (!text?.length || !key?.length) {
      return res.status(400).send("Text and encryption key are required.");
    }

    const encryptedText = encryptString(text, key);
    res.render("encrypt", {
      encryptedText,
      text,
      encryptionKey,
    });
  } catch (error) {
    console.error(error);
    res.render("encrypt", {
      error: error.message,
      text,
      encryptionKey,
    });
  }
};

exports.decryptController = (req, res) => {
  const { text, encryptionKey } = req.body;
  try {
    const key = encryptionKey?.length > 0 ? encryptionKey : ENV.CRYPT_KEY;

    if (!text?.length || !key?.length) {
      return res.status(400).send("Text and decryption key are required.");
    }

    const decryptedText = decryptString(text, key);

    console.log(decryptedText);

    res.render("decrypt", {
      decryptedText,
      text,
      encryptionKey,
    });
  } catch (error) {
    console.error(error);
    res.render("decrypt", {
      error: error.message,
      text,
      encryptionKey,
    });
  }
};

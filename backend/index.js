const express = require("express");
const Moralis = require("moralis").default;
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = 4001;

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  res.send("Hello Wrldd");
});

app.get("/tokenPrice", async (req, res) => {
  try {
    const response = await Moralis.EvmApi.token.getTokenPrice({
      chain: "0x38",
      address: "0xb2f664c995B913D598A338C021311B5751dEde0A",
    });

    console.log(response.raw);
    return res.status(200).json(response);
  } catch (e) {
    console.error(e);
  }
});

Moralis.start({
  apiKey: process.env.MORALIS_API_KEY,
}).then(() => {
  app.listen(port, () => {
    console.log(`Listening for API Calls`);
  });
});

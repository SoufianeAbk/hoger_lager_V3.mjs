import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function raadHetGetal() {
  const teRadenGetal = random(1, 10);
  let geraden = false;
  let levens = 3;

  while (!geraden && levens > 0) {
    const antwoord = await rl.question(`Raad het getal tussen 1 en 10 (Levens over: ${levens}): `);
    const geradenGetal = parseInt(antwoord);

    if (isNaN(geradenGetal) || geradenGetal < 1 || geradenGetal > 10) {
      console.log('Ongeldige invoer. Voer een getal in tussen 1 en 10.');
    } else if (geradenGetal === teRadenGetal) {
      console.log('Gefeliciteerd! Je hebt het juiste getal geraden.');
      geraden = true;
    } else if (geradenGetal < teRadenGetal) {
      console.log('Het juiste getal is hoger.');
      levens--;
    } else {
      console.log('Het juiste getal is lager.');
      levens--;
    }
  }

  if (!geraden) {
    console.log('Game Over! Je hebt geen levens meer.');
  }

  rl.close();
}

raadHetGetal();

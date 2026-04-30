let bunnies = ["oreo", "lucy", "daisy", "snowball", "coco", "thumper"];

bunnies.push("mario");
bunnies = bunnies.filter((bunny) => bunny !== "lucy");

bunnies.unshift("luigi");

console.log(bunnies);

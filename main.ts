import { mkdirSync, writeFileSync } from "node:fs";

const excuse =
  "You wrote 'whenever' in message 3 and 'URGENT' in message 47, so I split the difference and aimed for Tuesday.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", excuse + "\n", "utf8");

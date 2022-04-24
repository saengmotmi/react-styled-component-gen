#!/usr/bin/env node
import * as inquirer from "inquirer";

inquirer
  .prompt([{ type: "question", name: "name", message: "What is your name?" }])
  .then((answers: any) => {
    console.log(answers);
  });

export default {};

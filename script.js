var inquirer = require('inquirer');
inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type: 'input',
        message: 'what is your trainer name?',
        name: 'trainerName'
    },
    {
        type: 'password',
        message: 'what is your password',
        name: 'trainerPassword'
    },
    {
        type: 'list',
        message: 'Choose your first Pokemon',
        choices: ['Charzard', 'Venasaur', 'Blastoie'],
        name: 'trainerChoice'
    },
    {
        type: 'input',
        message: 'Name your Pokemon',
        name: 'pokemonName'
    },
    {
        type: 'confirm',
        message: 'Do you wish to continue?',
        default: true,
        name: 'trainerConfirm'
    }    
  ])
  .then(answers => {
    // Use user feedback for... whatever!!
    if (answers.trainerConfirm == true){
        console.log(`Hello ${answers.trainerName} your pokemon ${answers.pokemonName} is ready for Battle!`)
    }else {
        console.log(`Thats ok ${answers.trainerName} come back when you're more sure.`)
    }
  })

  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });

//   let login = () => {
//       console.log('logging in');
//   };
//   login();
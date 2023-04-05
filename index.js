const Employee = require('./lib/employee'); 
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
const Intern  = require('./lib/intern');
const inquirer = require('inquirer');
var employeeDatabase = require('./test-database.json');
const fs = require('fs');
const htmlPage = require('./src/render-html.js');

//**********Variables********** */
let logMode = 1;
let debugMode = 0;
//**********Prompts************ */

const mainMenuChoices = ["Add new Manager", "Add new Engineer", "Add new Intern", "View database", "Clear database", "Finish"];

const managerQuestions = 
    {
        type: 'input',
        name: 'managerInfo',
        message: "Enter the manager's name, id, email and office number using the following format: name,id,email,office number"
    }
;
const engineerQuestions = 
    {
        type: 'input',
        name: 'engineerInfo',
        message: "Enter the engineer's name, id, email and github using the following format: name,id,email,github"
    }
;

const internQuestions = 
    {
        type: 'input',
        name: 'internInfo',
        message: "Enter the intern's name, id, email and school using the following format: name,id,email,school"
    }
;

const mainMenuQuestions = 
    {
        type: 'list',
        name: 'mainMenu',
        message: "Select an action",
        choices: mainMenuChoices
    }
;
//***********START************* */
init();

function init(){

    console.log(`\nWelcome to the Team Profile Generator!\n
    Create a profile of your team by inputting the information of 
    each member. When finished, a webpage with the team information 
    will be created and displayed.\n`);

    console.log(`\nSettings: logMode: ${logMode} debugMode: ${debugMode}`);

    if(debugMode === 0){
        employeeDatabase = {
            "managers": [],
            "engineers": [],
            "interns": [],
            "employees": []
        };
    };
    navMainMenu();
}


/************FUNCTIONS********* */

function navMainMenu(){
    const state = "mainMenu";
    applyState(state);
};

function applyState(state){
    log(`Applying State: ${state}`,"debug");

    switch (state){

        case "mainMenu":
            log("STATE: Main Menu","debug");
            promptQuestions(mainMenuQuestions);
            break;

        case "managerQuestions":
            log("STATE: Manager Questions","debug");
            promptQuestions(managerQuestions);
            break;
    
        case "engineerQuestions":
            log("STATE: Engineer Questions","debug");
            promptQuestions(engineerQuestions);
            break;
    
        case "internQuestions":
            log("STATE: Intern Questions","debug");
            promptQuestions(internQuestions);
            break;

        case "viewDatabase":
            log("STATE: View Database","debug");
            if(employeeDatabase.employees.length === 0){
                log('Database is Empty\n');
            } else {
                log('Database:');-
                console.log(employeeDatabase);
            }
            navMainMenu();
            break;
    
        case "clearDatabase":
            log("STATE: Clear Database","debug");
            employeeDatabase = {
                "managers": [],
                "engineers": [],
                "interns": [],
                "employees": []
            };
            log("Database Cleared");
            navMainMenu();
            break;
    
        case "Finish":
            log("STATE: Finish","debug");
            const databaseString = JSON.stringify(employeeDatabase)
            fs.writeFileSync('./employee-database.json', databaseString,  (err) => {
                if (err) throw err;
            });
            log('Database stored to file');
            renderHTML(employeeDatabase);
            break;
    };
}

function renderHTML(database){
    log('Rendering HTML Page...');
    const options = {
        "logMode": logMode,
        "debugMode":  debugMode
    };

    const html = new htmlPage(database,options);
    const dom = html.createDOM();
    html.clearPage();
    html.populateEmployees(dom);

    log('HTML Page Complete...');
    log(`The webpage is available under dist/main/index.html.
    Open index.html in a web browser to view the team profile.`)
};

function checkAnswers(answers){
    log(`Checking answer ${Object.keys(answers)} : ${answers[Object.keys(answers)]}`,"debug");
    if (answers[Object.keys(answers)] === "Add new Manager"){
        state = "managerQuestions";
        applyState(state);
        return;
    } else if(answers[Object.keys(answers)] === "Add new Engineer"){
        state = "engineerQuestions";
        applyState(state);
        return;
    } else if (answers[Object.keys(answers)] === "Add new Intern"){
        state = "internQuestions";
        applyState(state);
        return state;
    } else if (answers[Object.keys(answers)] === "Finish"){
        state = 'Finish';
        applyState(state);
        return state;
    } else if (Object.keys(answers).toString() === "managerInfo"){
        addManager(answers[Object.keys(answers)]);
        state = 'mainMenu';
        applyState(state);
        return;
    } else if (Object.keys(answers).toString() === 'engineerInfo'){
        addEngineer(answers[Object.keys(answers)]);
        state = 'mainMenu';
        applyState(state);
        return;
    } else if (Object.keys(answers).toString() === 'internInfo'){
        addIntern(answers[Object.keys(answers)]);
        state = 'mainMenu';
        applyState(state);
        return;
    }  else if (answers[Object.keys(answers)] === "View database"){
        state = "viewDatabase";
        applyState(state);
        return;
    } else if (answers[Object.keys(answers)] === "Clear database"){
        state = "clearDatabase";
        applyState(state);
        return;
    }
};


function addManager(data){
    const arr = data.split(',');
    const manager = new Manager(arr[0],arr[1],arr[2],arr[3]);
    employeeDatabase.managers.push(manager);
    employeeDatabase.employees.push(manager);
    log(`Added Manager ${data} to database`,"debug");
    return manager;
};

function addEngineer(data){
    const arr = data.split(',');
    const engineer = new Engineer(arr[0],arr[1],arr[2],arr[3]);
    employeeDatabase.engineers.push(engineer);
    employeeDatabase.employees.push(engineer);
    log(`Added Engineer ${data} to database`,"debug");
    return engineer;
}

function addIntern(data){
    const arr = data.split(',')
    const intern = new Intern(arr[0],arr[1],arr[2],arr[3]);
    employeeDatabase.interns.push(intern);
    employeeDatabase.employees.push(intern);
    log(`Added Intern ${data} to database`,"debug");
    return intern;
}

function promptQuestions(questions){
    log(`Prompting ${questions.name}`,"debug");
    inquirer.prompt(questions).then((answers) => {
        checkAnswers(answers);
        return answers;
      });
}

function log(message,mode){
    if (logMode === 0){
        return;
    } else if(logMode === 1 && mode === undefined){
        console.log('\n'+message);
    } else if(logMode === 1 && debugMode === 0 && mode === "debug"){
        return;
    } else if(logMode === 1 && debugMode === 1 && mode === "debug"){
        console.log('\n'+message);
        return;
    };
};

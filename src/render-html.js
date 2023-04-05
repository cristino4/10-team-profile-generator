const fs = require("fs");
const jsdom = require("jsdom");



class htmlPage {
    constructor(database,options){
        this.database = database;
        this.options = options;        
        const logMode = this.options.logMode;
        const debugMode = this.options.debugMode;
    };
    
    clearPage(){
        fs.writeFileSync('./dist/main/index.html','',(err) => {
            if (err) throw err;
        });
        this.log("HTML Page Cleared", "debug");
    };

    createDOM(){
        const htmlTemplate = fs.readFileSync('./src/main-template.html','utf8',(err, data) => {
            if (err) throw err;
            this.log(data,"debug");
        });
        const dom = new jsdom.JSDOM(htmlTemplate);
        return dom;
    }

    populateEmployees(dom){

        const $= require('jquery')(dom.window);
        const documentMain = $("main");

        for(let i = 0; i<this.database.managers.length; i++){
            const cardContainer = $("<div>",{class: "flex justify-center"});   
            const cardBody = $("<div>", {class: "block max-w-sm rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700"});
            const cardTitle = $("<p>",{class: "mb-2 text-xl font-medium"});
            const cardRole = $("<p>",{class: "mb-2 text-xl font-medium"});
            const cardId = $("<p>",{class: "mb-2 text-xl font-medium"});
            const cardEmail = $("<a>",{class: "mb-2 text-xl font-medium block",href:`mailto:${this.database.managers[i].email}`});
            const cardOfficeNumber = $("<p>",{class: "mb-2 text-xl font-medium"}); 
            
            cardTitle.text(this.database.managers[i].name);
            cardRole.text("Manager");
            cardId.text(`ID: ${this.database.managers[i].id}`);
            cardEmail.text(`Email: ${this.database.managers[i].email}`);
            cardOfficeNumber.text(`Office Number: ${this.database.managers[i].officeNumber}`);

            cardBody.append([cardTitle,cardRole,cardId, cardEmail, cardOfficeNumber]);
            cardContainer.append(cardBody);
            documentMain.append(cardContainer)
        };

        this.log("Added Managers","debug");

        for(let i = 0; i<this.database.engineers.length; i++){
            const cardContainer = $("<div>",{class: "flex justify-center"});   
            const cardBody = $("<div>", {class: "block max-w-sm rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700"});
            const cardTitle = $("<p>",{class: "mb-2 text-xl font-medium"});
            const cardRole = $("<p>",{class: "mb-2 text-xl font-medium"});
            const cardId = $("<p>",{class: "mb-2 text-xl font-medium"});
            const cardEmail = $("<a>",{class: "mb-2 text-xl font-medium block",href:`mailto:${this.database.engineers[i].email}`});
            const cardGithub = $("<a>",{class: "mb-2 text-xl font-medium block",href:`https://github.com/${this.database.engineers[i].github}`}); 
            
            cardTitle.text(this.database.engineers[i].name);
            cardRole.text("Engineer");
            cardId.text(`ID: ${this.database.engineers[i].id}`);
            cardEmail.text(`Email: ${this.database.engineers[i].email}`);
            cardGithub.text(`Github: ${this.database.engineers[i].github}`);

            cardBody.append([cardTitle,cardRole,cardId, cardEmail, cardGithub]);
            cardContainer.append(cardBody);
            documentMain.append(cardContainer)
        };

        this.log("Added Engineers", "debug");

        for(let i = 0; i<this.database.interns.length; i++){
            const cardContainer = $("<div>",{class: "flex justify-center"});   
            const cardBody = $("<div>", {class: "block max-w-sm rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700"});
            const cardTitle = $("<p>",{class: "mb-2 text-xl font-medium"});
            const cardRole = $("<p>",{class: "mb-2 text-xl font-medium"});
            const cardId = $("<p>",{class: "mb-2 text-xl font-medium"});
            const cardEmail = $("<a>",{class: "mb-2 text-xl font-medium block",href:`mailto:${this.database.interns[i].email}`});
            const cardSchool = $("<p>",{class: "mb-2 text-xl font-medium"}); 
            
            cardTitle.text(this.database.interns[i].name);
            cardRole.text("Engineer");
            cardId.text(`ID: ${this.database.interns[i].id}`);
            cardEmail.text(`Email: ${this.database.interns[i].email}`);
            cardSchool.text(`School: ${this.database.interns[i].school}`);

            cardBody.append([cardTitle,cardRole,cardId, cardEmail, cardSchool]);
            cardContainer.append(cardBody);
            documentMain.append(cardContainer)
        };        
        
        this.log("Added Interns", "debug");

        const htmlContent = dom.serialize(); 
        fs.writeFileSync('./dist/main/index.html',htmlContent,(err) => {
            if (err) throw err;
        });
        
    }

    log(message,mode){
        const logMode = this.options.logMode;
        const debugMode = this.options.debugMode;

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
};






module.exports = htmlPage;

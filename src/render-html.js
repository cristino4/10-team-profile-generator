const fs = require("fs");

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

    addHead(){
        const headData = fs.readFileSync('./src/head.html','utf8',(err, data) => {
            if (err) throw err;
            this.log(data,"debug");
        });
        fs.appendFileSync('./dist/main/index.html',headData,(err) => {
            if (err) throw err;
        });
        this.log("HTML head added to page","debug");

    };

    addHeader(){
        const headerData = fs.readFileSync('./src/header.html','utf8',(err, data) => {
            if (err) throw err;
            this.log(data,"debug");
        });
        fs.appendFileSync('./dist/main/index.html',headerData,(err) => {
            if (err) throw err;
        });
        this.log("HTML header added to page","debug");
    };

    addMainContent(){

    };

    addFooter(){
        const footerData = fs.readFileSync('./src/footer.html','utf8',(err, data) => {
            if (err) throw err;
            this.log(data,"debug");
        });
        fs.appendFileSync('./dist/main/index.html',footerData,(err) => {
            if (err) throw err;
        });
        this.log("HTML footer added to page","debug");
    };    

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
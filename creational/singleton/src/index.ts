// -------------  Good Example  -------------//
class Logger{
    private static instance: Logger;

    private constructor(){}

    static getInstance(): Logger {
        if(!Logger.instance){
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    log(message: string){
        console.log(`[LOG]: ${message}`);
    }
}
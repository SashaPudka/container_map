class ErrorRepository {
    constructor(){
        this.map = new Map();
    }

    translate(code) {
        if (this.map.has(code)) {
            return this.map.get(code);
        }
        return 'Unknown error'
    }
    
    add(number, str){
        this.map.set(number, str);
    }
}

export default ErrorRepository
var ucFirst = (function(){
    'use strict';
    function make(str){
        str = str || ""
        return str.trim()
               .charAt(0).toUpperCase() 
               + str.trim().slice(1);
    }
    return make;
})();
if (typeof module === 'object' && module.exports) {
    module.exports = ucFirst;
}
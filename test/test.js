const assert = require('chai').assert,
      ucFirst = require('../uppercase-first');

describe('Upper Case First Test',function(){
   it('Function Should Return A String.',function(){
      assert.typeOf(ucFirst('abvd'),'string'); 
   });
    
   it('Function Should Return First Chracter Uppercase Character.',function(){
      assert.equal(ucFirst('abcd'),'Abcd'); 
   });
    
   it('Function Should Trim the spaces and Uppercase the First Character.',function(){
      assert.equal(ucFirst('   abcd'),'Abcd'); 
   });
});
describe( 'App Main Module', function() {
  describe( 'Compile Section', function() {
        
    beforeEach(module('app')); 

    it( 'should pass compilation test', inject( function() {
      expect( true ).toBeTruthy();
    }));
  });
});

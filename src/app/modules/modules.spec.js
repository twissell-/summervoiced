describe( 'Modules Section', function() {
  beforeEach( module( 'app.modules' ) );

  it( 'should pass compile test', inject( function() {
    expect( true ).toBeTruthy();
  }));
});
describe( 'Test Module', function() {
  beforeEach( module( 'app.test' ) );

  it( 'should pass compile test', inject( function() {
    expect( true ).toBeTruthy();
  }));
});
describe('a thing', function () {
  it('adds', function (done) {
    if((1+1) === 2) {
      done();
    } else {
      done(new Error('oh, the agony!'));
    }
  })
})

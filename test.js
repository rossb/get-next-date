const chai = require('chai');
const expect = chai.expect;

const GetNextDate = require('./index.js');

describe('GetNextDate(dateObj)', function() {

  describe('valid Date object', function(){
    it('should return the next date set to midnight', function() {

      expect( GetNextDate( new Date(2016,5,1,12,45,500) ) ).to.deep.equal( new Date(2016,5,2,0,0,0) );
      expect( GetNextDate( new Date(1201,5,1,12,45,500) ) ).to.deep.equal( new Date(1201,5,2,0,0,0) );
      expect( GetNextDate( new Date(2525,5,1,12,45,500) ) ).to.deep.equal( new Date(2525,5,2,0,0,0) );

    });
  });

  describe('non-Date object', function(){
    it("should return 'Invalid Date'", function() {

      expect( GetNextDate('string').toString() ).to.equal('Invalid Date');
      expect( GetNextDate([]).toString() ).to.equal('Invalid Date');
      expect( GetNextDate({}).toString() ).to.equal('Invalid Date');
      expect( GetNextDate(/regex/).toString() ).to.equal('Invalid Date');
      expect( GetNextDate(function() {}).toString() ).to.equal('Invalid Date');

    });
  });

  describe('invalid Date object', function(){
    it("should return 'Invalid Date'", function() {

      expect( GetNextDate(new Date('not a date string')).toString() ).to.equal('Invalid Date');
      expect( GetNextDate(new Date([])).toString() ).to.equal('Invalid Date');
      expect( GetNextDate(new Date({})).toString() ).to.equal('Invalid Date');
      expect( GetNextDate(new Date(undefined)).toString() ).to.equal('Invalid Date');
      expect( GetNextDate(new Date('')).toString() ).to.equal('Invalid Date');

    });
  });

});
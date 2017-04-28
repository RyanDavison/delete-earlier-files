const chai = require('chai');
const expect = chai.expect;
const moment = require('moment');
const DeleteEarlierFiles = require('../index');

describe('DeleteEarlierFiles', function(){
    it('DeleteEarlierFiles.getStartTimestamp() returns the current month, day and year', function(){
        const DeleteEarlier = new DeleteEarlierFiles('./files');
        const start = moment().subtract(0, 'days').format("DD-MM-YYYY");
        console.log('start time is', start)
        expect(DeleteEarlier.getStartTimestamp()).to.equal(start);
    });
})

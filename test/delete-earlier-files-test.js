const chai = require('chai');
const expect = chai.expect;
const moment = require('moment');
const DeleteEarlierFiles = require('../index');

describe('DeleteEarlierFiles', function(){
    it(`getStartTimestamp() returns the current month, day and year when no days
        offset is passed to DeleteEarlierFiles()`, function(){
            const DeleteEarlier = new DeleteEarlierFiles('./files');
            const start = moment().subtract(0, 'days').format("DD-MM-YYYY");
            expect(DeleteEarlier.getStartTimestamp()).to.equal(start);
    });

    it(`getStartTimestamp() returns the month, day and year from two days ago
        when a days offset of 2 is passed to DeleteEarlierFiles`, function(){
            const DeleteEarlier = new DeleteEarlierFiles('./files', 2);
            const start = moment().subtract(2, 'days').format("DD-MM-YYYY");
            expect(DeleteEarlier.getStartTimestamp()).to.equal(start);
    });
})

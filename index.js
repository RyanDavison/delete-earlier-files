const moment = require('moment');

class DeleteEarlierFiles{
    constructor(dir, days, rec){
        this.dir = dir;
        this.days = days || 0;
        this.recursive = rec || false;
    }

    getStartTimestamp(){
        /*If no days are passed, startTimestamp defaults to current day. If
        a days argument is passed, the startTimestamp will be that number of
        days prior to the current day*/
        const startDate = moment().subtract(this.days, 'days').format("DD-MM-YYYY");
        return startDate;
    }
}

module.exports = DeleteEarlierFiles;

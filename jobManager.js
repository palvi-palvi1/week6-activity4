// jobManager.js
class JobManager {
    constructor() {
      this.jobs = [];
      this.nextId = 1;
    }
  
    addJob(job) {
      job.id = this.nextId++;
      this.jobs.push(job);
      return job;
    }
  
    deleteJob(id) {
      const index = this.jobs.findIndex(job => job.id === id);
      if (index !== -1) {
        return this.jobs.splice(index, 1)[0];
      }
      return false;
    }
  
    getJobs() {
      return this.jobs;
    }
  }
  
  module.exports = JobManager;
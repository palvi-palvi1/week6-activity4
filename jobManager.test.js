// jobManager.test.js
const JobManager = require('./jobManager');

describe('JobManager', () => {
  let jobManager;

  beforeEach(() => {
    jobManager = new JobManager();
  });

  it('should add a job with a unique ID', () => {
    const job = { title: 'Software Engineer', company: 'Google' };
    const addedJob = jobManager.addJob(job);
    expect(addedJob.id).toBe(1);
    expect(jobManager.getJobs()).toContain(addedJob);
  });

  it('should delete a job by ID and return the deleted job', () => {
    const job1 = jobManager.addJob({ title: 'Frontend Developer', company: 'Amazon' });
    const job2 = jobManager.addJob({ title: 'Data Scientist', company: 'Microsoft' });

    const deletedJob = jobManager.deleteJob(job1.id);
    expect(deletedJob).toEqual(job1);
    expect(jobManager.getJobs()).not.toContain(job1);
    expect(jobManager.getJobs()).toContain(job2);
  });

  it('should return false when deleting a non-existing job', () => {
    const deletedJob = jobManager.deleteJob(999);
    expect(deletedJob).toBe(false);
  });

  it('should update the array correctly after deletion', () => {
    const job1 = jobManager.addJob({ title: 'Backend Developer', company: 'Netflix' });
    const job2 = jobManager.addJob({ title: 'UX Designer', company: 'Spotify' });
    const job3 = jobManager.addJob({ title: 'Product Manager', company: 'Airbnb' });

    jobManager.deleteJob(job2.id);

    const jobs = jobManager.getJobs();
    expect(jobs).not.toContain(job2);
    expect(jobs).toContain(job1);
    expect(jobs).toContain(job3);
    expect(jobs.length).toBe(2);
  });
});
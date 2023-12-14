const [filterJobs, setFilterJobs] = useState(4);
let showJobs;
if (filterJobs === 4) {
  showJobs = jobs.slice(0, 4);
} else if (filterJobs === 8) {
  showJobs = jobs;
}

<div className="text-center mt-14">
  {filterJobs === 4 ? (
    <button onClick={() => setFilterJobs(8)} className="btn_regular">
      See All Jobs
    </button>
  ) : (
    <button onClick={() => setFilterJobs(4)} className="btn_regular">
      See Less
    </button>
  )}
</div>;

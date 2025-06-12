// Grab and format the date as before
const dateElement = document.getElementById("date");
const currentDate = new Date();
const dateOptions = { year: "numeric", month: "long", day: "numeric" };
dateElement.innerHTML = currentDate.toLocaleDateString("en-US", dateOptions);

// Set up your chart canvas reference
const ctx = document.getElementById('myChart').getContext('2d');

// Function to fetch trends and render chart
async function fetchAndRenderTrends() {
  const url = 'https://twitter-trends-by-location.p.rapidapi.com/location/f719fcd7bc333af4b3d78d0e65893e5e';
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '452ea834b6msha07555196b0312ep1ac45bjsn4a29bdb2dae3',
      'x-rapidapi-host': 'twitter-trends-by-location.p.rapidapi.com'
    }
  };

  try {
    const res = await fetch(url, options);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const payload = await res.json();
    
    // Assuming payload.trends is an array of objects like { name: "...", tweet_volume: 12345, ... }
    const trends = payload.trends || [];
    
    // Extract top N (e.g., top 5) with a defined tweet_volume
    const topTrends = trends
      .filter(t => t.tweet_volume)          // only those with a volume
      .sort((a, b) => b.tweet_volume - a.tweet_volume)
      .slice(0, 5);
    
    const labels = topTrends.map(t => t.name);
    const volumes = topTrends.map(t => t.tweet_volume);
    
    // Render Chart.js horizontal bar chart
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: '# of Tweets',
          data: volumes,
          borderWidth: 1,
          // you can remove or override backgroundColor/borderColor to suit
        }]
      },
      options: {
        indexAxis: 'y',
        scales: {
          x: { beginAtZero: true }
        }
      }
    });
    
  } catch (err) {
    console.error('Failed to fetch Twitter trends:', err);
  }
}

// Kick it off
fetchAndRenderTrends();

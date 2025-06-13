console.log("hello world");Add commentMore actions

// Current date for the title

const dateelement = document.getElementById("date");
// grabs the element with the id of date
console.log(dateelement); // checks if the element is being grabbed 
let currentDate = new Date(); // creates a JS new date object
console.log(currentDate); // checks if the current date is being created

dateelement.innerHTML = currentDate; // sets the inner HTML of the date element to the current date in a specific format

let dateOptions = {year: "numeric", month: "long", day: "numeric"}; // creates an object with the options for the date format

dateelement.innerHTML = currentDate.toLocaleDateString("en-US", dateOptions); // sets the inner HTML of the date element to the current date in a specific format 

// Twitter API call : This code is used to fetch Twitter trends using the Twitter Trends API

const url = 'https://twitter-trends5.p.rapidapi.com/twitter/request.php';
const options = {
    method: 'POST',
    headers: {
        'x-rapidapi-key': '99b2e638c2msh9324fd54bb209fbp1053e8jsn34d06d5e0a43',
        'x-rapidapi-host': 'twitter-trends5.p.rapidapi.com',
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({woeid: '23424977'})
};

// try {
// 	const response = await fetch(url, options);
//     const result = await response.text();
//     console.log(result);
// } catch (error) {
//     console.error(error);
// }

// API endpoint

// fetch(url, options)
// .then(res => response.json())
// .then(data => {
//     console.log(data);
// })

let myPost = {

	name: "Lee Sung Kyung",
	queryUrl: "search?q=%22Lee+Sung+Kyung%22",
	volume: 31799,
	followers: 3895734
}

console.log(myPost);
console.log(myPost.name);
console.log(myPost.queryUrl);
console.log(myPost.volume);
console.log(myPost.followers);

let graphData = [
	{ name: "#PorDeeReunion", queryUrl: "search?q=%23PorDeeReunion", volume: 67000},
	{ name: "#BGYO3rdAnniversary", queryUrl: "search?q=%23BGYO3rdAnniversary", volume: 27400}
];

console.log(graphData);
console.log(graphData[1]);
console.log(graphData[1].name);

// we can also add elements to the array using the push method
graphData.push(myPost);
console.log(graphData);

for(let i=0; i < 2; i++){
	console.log(graphData[i]);
	console.log(graphData[i].name);
	console.log(graphData[i].queryUrl);
	console.log(graphData[i].volume);
}

let topics = graphData.map(object=>{

	console.log(object);
	console.log(object.name);
	return object.name;

})

console.log(topics);

let volumes = graphData.map(object=>{
	return object.volume;
})

console.log(volumes);

const myChart = document.getElementById('myChart');

let barChart = new Chart(myChart, {
    type: 'bar',
    data: {
        labels: topics,
        datasets: [{
          label: '# of tweets/xeets',
          data: volumes,
          borderWidth: 2,
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(201, 203, 207, 0.2)'
          ],
          borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)',
              'rgb(201, 203, 207)'
          ],
          hoverBackgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)',
              'rgb(201, 203, 207)'
          ]
        }]
      },
    options: {
        indexAxis: 'y',
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

// Sample data

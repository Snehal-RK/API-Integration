const accessKey = "Nu9bEemzhXLMdvfLpPVY2dP3wAvHitm6yQ3LoyC81dM";
const apiURL = "https://api.unsplash.com/photos/random";
const imageContainer = document.getElementById("imageContainer");

/* For navbar elements */
const inputData = document.querySelectorAll('.inputData');
inputData.forEach(data => {
	data.addEventListener("click", fetchData);
	
	function fetchData() {
		const searchQuery = data.value;
		
		fetch(`${apiURL}?query=${searchQuery}&count=9&client_id=${accessKey}`)	/* API call */
		.then(response => response.json())
		.then(data => {
			imageContainer.innerHTML = "";
			
			data.forEach(imageData => {
				const imageURL = imageData.urls.regular;
				console.log(imageURL);
				
				const imageElement = document.createElement('img');
				imageElement.src = imageURL;
				imageElement.className = "imageThumbnail";
				
				imageContainer.appendChild(imageElement);
			})
		})
	}
})

/* For Searchbar elements */
function fetchData(event) {
	if(event.key === 'Enter') {
		const searchText = document.getElementById('searchText');
		
		const searchQuery = searchText.value.trim();
		
		fetch(`${apiURL}?query=${searchQuery}&count=9&client_id=${accessKey}`)  /* API call */
		.then(response => response.json())
		.then(data => {
			imageContainer.innerHTML = "";
			
			data.forEach(imageData => {
				const imageURL = imageData.urls.regular;
				console.log(imageURL);
				
				const imageElement = document.createElement('img');
				imageElement.src = imageURL;
				imageElement.className = "imageThumbnail";
				
				imageContainer.appendChild(imageElement);
			})
		})
	}
}
 

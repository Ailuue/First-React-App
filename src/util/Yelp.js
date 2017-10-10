const clientId = 'm49j5KkJtcb03UBZJFyV1w';
const secret = 'YhfWjNY2rAXaS61zD2UfKBJnvsjDo4bW2eRbSH5l6uEJfvsNucBNUMpizibahw6F';
let accessToken;

/*
Not a component, but instead a helper class to deal with the AJAX calls needed for the Yelp API.
Gets an access token for oauth2 using the YELP developer api secret id, and uses it to search for businesses.
*/

let Yelp = {
	getAccessToken: function () {
		if (accessToken) {
			return new Promise(resolve => resolve(accessToken));
		}
		return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/oauth2/token?grant_type=client_credentials&client_id=${clientId}&client_secret=${secret}`,
			{ method: 'POST' })
			.then(response => response.json())
			.then(jsonResponse => {
				accessToken = jsonResponse.access_Token
		});
	},
	search: function (term, location, sortBy) {
		return Yelp.getAccessToken()
			.then( () => {
				return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
					{ headers: { 
						Authorization: `Bearer ${accessToken}` 
					} 
				}
				)
				.then(response => response.json())
				.then(jsonResponse => {
					if (jsonResponse.businesses) {
						console.log(jsonResponse.businesses);
						return jsonResponse.businesses.map( business => {
							return {
								id: business.id,
								imageSrc: business.image_url,
								name: business.name,
								address: business.address,
								city: business.city,
								state: business.state,
								zipCode: business.postal_code,
								category: business.categories.category,
								rating: business.stars,
								reviewCount: business.review_count,

							}
						})
					}
				});
			})

	}

};

export { Yelp };
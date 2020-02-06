const search = instantsearch({
    indexName: 'mutual-funds-data',
    searchClient: algoliasearch('KJAV4PQGTX', '131a5f559bf25ccfeaf7c68e12732b0e')
});

search.addWidget(
    instantsearch.widgets.searchBox({
        container: '#searchbox'
    })
);

search.addWidget(
    instantsearch.widgets.hits({
        container: '#hits',
        placeholder: 'Enter fund name or keyword..',
        templates: {
            item: `
						
						<div class="mb-3 mt-2 container">
						<img src="{{imageurl}}" alt="{{fundname}}" class="previewimg d-block d-sm-none rounded mt-3" >


						<h5 class="text-left mb-3 mt-3"><a href="./fund-details.html?fundmanagercode={{fundmanagercode}}&id={{id}}" class="claimHeader">{{fundname}}</a></h5>
						<div class="d-flex mb-1" id="tags">
							<small class="font-italic text-info"><a href="./index.html" class=" ml-1 font-italic text-info">{{recommended}}</a></small>
							<small class="ml-1 font-italic text-info"><a href="./index.html" class=" ml-1 font-italic text-info">{{index}}</a></small>
							<small class="ml-1 font-italic text-info"><a href="./dollar.html" class="ml-1 font-italic text-info">{{dollar}}</a></small>
            </div>
						<small class="text-secondary">Minimum Initial Amount: {{initial}}</small>
						<br>
						<small class="text-secondary">Minimum Additional Amount: {{additional}}</small>
						<br>
						<p class="text-secondary mt-3">{{description}}</p>
						<small class="font-italic text-secondary">This fund is for you if:</small>
						<p class="text-secondary mt-3">{{ffy1}}</p>
						<a href="{{abs_url}}" class="btn btn-sm rfbtn text-white">View Fund</a>
						<hr class="mb-3">
						</div>
			
      `
        }
    })
);

// search.addWidget(
//     instantsearch.widgets.pagination({
//         container: '#pagination',
//     })
// );

search.start();
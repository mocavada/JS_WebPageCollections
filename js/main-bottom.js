document.getElementById("tableBody").addEventListener("click",
    function(e) {
        console.log("UL Clicked");
		console.log(e);
		if(e.target.tagName === 'TD')
		{
			if(this.querySelectorAll('td').length > 0 )
			{
				td = e.target;
				console.log(td);
				
				tr = td.parentNode;
				console.log(tr);
				
				tbody=tr.parentNode;
				console.log(tbody);
				
				tbody.removeChild(tr);
			}
			else
			{
				alert ("Last color image cannot be removed.");
			}
		}
		else
		{
			alert ("Click on an color image please.");
		}
    }, false);


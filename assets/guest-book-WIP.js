
 window.onload = fetchGuestBook_Entries();

function fetchGuestBook_Entries(){

// Fetching Spreadsheet JSON Data	
fetch(
    `https://opensheet.elk.sh/${Google_Form_ID}/${Google_Form_Name}`
)
    .then((res) => res.json())
    .then((data) => {

        // reversing JSON data to make things easier
         let sortedInput = (data.reverse())
             
			
	 	
	// Add 5 entries to main page
	      // ie; iterate 5 times
	for(var i = 0; i < 5 && i < sortedInput.length; i++){
		
		// Split timestamp data
		var splitTime =  sortedInput[i].Timestamp.split(' ')[0];
		var splitTime_1 =  sortedInput[i].Timestamp.split(' ').pop();

		
		 // Work in Progress - Convert to 24 Hour
		let ConvertedTime =  tConvert (splitTime_1)
		
		// Sanitize Data
		let SantizeName =  encodeHTML(sortedInput[i].Name)
		
		let SantizeResponses =  encodeHTML(sortedInput[i].Guestbook_Entry)
		
		    // Dis-allow unicode comments for spam 
		 SantizeName = SantizeName.replace(/[^\x00-\x7F]/g, "")

		SantizeResponses = SantizeResponses.replace(/[^\x00-\x7F]/g, "")
                  
		// Add Entries To Main Section
		document.getElementById("json").innerHTML += `
					 <div class="entry">
                <div class="entry-info">
                    <p><span class="author"> ${SantizeName}.</span> | <span class="date">${splitTime}</span> | <span class="time">${ConvertedTime}</span></p>
                </div>
                <div class="entry-text">
                    <p>${SantizeResponses} </p>
                </div>
            </div>`
		
}
	
	
	/// Adding all entries to all entry section
	
        data.forEach((row) => {
		
		// Sanitize Data
		let SantizeResponses =  encodeHTML(row.Guestbook_Entry)
		
		let SantizeName =  encodeHTML(row.Name)
		
		// Dis-allow unicode comments for spam 
		 SantizeName = SantizeName.replace(/[^\x00-\x7F]/g, "")

		SantizeResponses = SantizeResponses.replace(/[^\x00-\x7F]/g, "")
		
		// Split timestamp data
					var splitTime =  row.Timestamp.split(' ')[0];
		var splitTime_1 =  row.Timestamp.split(' ').pop();

		
		 // Work in Progress - Convert to 24 Hour
		let ConvertedTime =  tConvert (splitTime_1)
					
				
           document.getElementById("AllEntries_Content").innerHTML += `
					 <div class="entry">
                <div class="entry-info">
                    <p><span class="author">${SantizeName}</span> | <span class="date">${splitTime}</span> | <span class="time">${ConvertedTime}</span></p>
                </div>
                <div class="entry-text">
                    <p>${SantizeResponses}</p>
                </div>
            </div>`
          
        });
    });

	
}


$('#gform').submit(function (event) {
    event.preventDefault()
    var extraData = {}
   
	   var response = grecaptcha.getResponse();
    if (response.length === 0) { // if Captcha is not complete
    ///
    
    } else { 
  
    event.preventDefault()
    var extraData = {}
     $('#gform').ajaxSubmit({
        data: extraData,
        dataType: 'jsonp',  // This won't really work. It's just to use a GET instead of a POST to allow cookies from different domain.
        error: function () {
            // Submit of form should be successful but JSONP callback will fail because Google Forms
            // does not support it, so this is handled as a failure.
            var subscribeForm = document.getElementById("SendForm")
  var Gform = document.getElementById("gform")
  // Fade out form to make things look nice
 subscribeForm.setAttribute("style", "-webkit-animation: fadeOut 1s; animation: fadeOut 1s;  animation-fill-mode: forwards;");
// Hide the input form values	 
 Gform.setAttribute("style", "display:none;");  
 // Show the user this message + the illegal character they used.
subscribeForm.innerHTML = `<a class="close" href="#">&times;</a>
<h1 style="text-align: center;
    margin-top: 2em;">Your Guestbook Entry Has Added! It will appear shortly!</h1>`   
  // Fade message in
subscribeForm.setAttribute("style", "-webkit-animation: fadeIn 1s; animation: fadeIn 1s;  animation-fill-mode: forwards;");  
            // You can also redirect the user to a custom thank-you page:
            // window.location = 'http://www.mydomain.com/thankyoupage.html'
        }
    })
    
    }
})

function encodeHTML(sanizitedInput) {
    return sanizitedInput.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
}

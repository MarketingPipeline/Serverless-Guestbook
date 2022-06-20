  // Replacing Variables At Top Of This Document
  
  var GuestBook = document.getElementById("GuestBook") ;
GuestBook.innerHTML = GuestBook.innerHTML
                        .replace(/GOOGLE_ENTRY_ID_Name/g, GOOGLE_ENTRY_ID_Name)
	
	.replace(/GOOGLE_ENTRY_ID_Email/g, GOOGLE_ENTRY_ID_Email)
	
	.replace(/GOOGLE_ENTRY_ID_TextArea/g, GOOGLE_ENTRY_ID_Guestbook)

        .replace(/GOOGLE_Captcha_Key/g, CaptchaKey)


	

	
	
	
	
	
                         .replace(/GOOGLE_FORM_URL/g, Google_Form_Link)
  ;

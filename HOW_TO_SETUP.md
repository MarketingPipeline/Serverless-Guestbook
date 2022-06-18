# How To Setup Your Own Serveless Guestbook

1. Go to Google Forms & Sign In

2. Create a new form 

![image](https://user-images.githubusercontent.com/86180097/174424881-808ae090-ad35-47ee-b2d3-03a310842288.png)

3. Follow this exact template

![image](https://user-images.githubusercontent.com/86180097/174424940-a297dc26-3b50-4483-aa91-d06ba92ede6e.png)

4. Press the dropdown menu to the right of the "Send" button & press "Get Pre-Filled Link"

![image](https://user-images.githubusercontent.com/86180097/174424976-4ad07d02-d8de-4efc-b315-368d0f554b2d.png)

5. Enter all forms with random data & press "Get Link", a popup will appear then press "Copy Link".

![image](https://user-images.githubusercontent.com/86180097/174425028-f3d0aafa-de2c-4951-9fa7-147e92fa5d1c.png)

6. Save / copy these values from your link for later

<b> Google Link</b>

Your google link will look something like this, save & copy it for later. 

       https://docs.google.com/forms/d/e/1FAIpQLSdUSoJ72_oCxwkGN4GCx8X1LntMvonrT1Gv0W8TwSWcf7no-g/viewform?usp=pp_url&entry.1008365156=a&entry.2012867003=a&entry.1854823009=a
       


<b>Entry ID(s)</b>:

The 3 "entry" value(s) after your form id

       entry.1008365156, entry.2012867003, entry.1854823009


Save these for later. 


7. Go back to your Google Form, press on "Responses" & "Create spreadsheet"

![image](https://user-images.githubusercontent.com/86180097/174425184-aff8d5ad-ec6d-4496-8194-715a3570177f.png)


8. Once the spreadsheet has been created, make it PUBLIC & save the tab name at the bottom left corner

![image](https://user-images.githubusercontent.com/86180097/174425225-79e9a095-d241-4dba-91d4-cee0997f1940.png)

9. Copy form ID from your spreadsheet public link


<b>Form ID</b>:

Your Spreadsheet URL will look like this

        https://docs.google.com/spreadsheets/d/1D_j6S1uoBJwvIlrO8T1vGdaFrmtww0pzKKGddpLjrGc/edit?usp=sharing
      
the part that says "YOUR GOOGLE ID" will be your Google Form ID.  

        https://docs.google.com/spreadsheets/d/YOUR ID/edit?usp=sharing
       
     
          
9. Under line 67 in the file <code>index.html</code>
 
Put your Google Entry ID's you collected from earlier to the corresponding variables. 

The first entry ID is "Name", second entry ID is "Email" & third is "Textarea"

      var GOOGLE_ENTRY_ID_Name="GUESTBOOK NAME FORM ID"; 
		
      var GOOGLE_ENTRY_ID_Email="GUESTBOOK EMAIL FORM ID";		
		
      var GOOGLE_ENTRY_ID_Guestbook="GUESTBOOK TEXT AREA FORM ID";


9. Under line 74 in the same file <code>index.html</code>      

With your Google Form Link from earlier - change the final link from viewform? to formResponse?

Then put your updated Google Form Link, Google Spreadsheet Form ID & Form Name (Tab Name In Google Spreadsheets) to the corresponding variables. 

Note: for any spaces in Tab Name, replace with "+". Example - Form Responses, becomes "Form+Responses".  



      var Google_Form_Link="YOUR GOOGLE FORM LINK HERE"  
 	
	  var Google_Form_ID="YOUR GOOGLE FORM ID HERE"  
	 
	  var Google_Form_Name="YOUR FORM NAME HERE"  


10. Deploy to your hosting provider! Github Pages etc. 

Enjoy! :) 

1. Go to Google Forms & Sign In

2. Create a new form 

![image](https://user-images.githubusercontent.com/86180097/174424881-808ae090-ad35-47ee-b2d3-03a310842288.png)

3. Follow this exact template

![image](https://user-images.githubusercontent.com/86180097/174424940-a297dc26-3b50-4483-aa91-d06ba92ede6e.png)

4. Press the dropdown menu to the right of the "Send" button & press "Get Pre-Filled Link"

![image](https://user-images.githubusercontent.com/86180097/174424976-4ad07d02-d8de-4efc-b315-368d0f554b2d.png)

5. Enter all forms with random data & press "Get Link", a popup will appear then press "Copy Link".

![image](https://user-images.githubusercontent.com/86180097/174425028-f3d0aafa-de2c-4951-9fa7-147e92fa5d1c.png)

6. Copy these values from your link for later

Form ID:

Your google link will look something like this

       https://docs.google.com/forms/d/e/1FAIpQLSdUSoJ72_oCxwkGN4GCx8X1LntMvonrT1Gv0W8TwSWcf7no-g/viewform?usp=pp_url&entry.1008365156=a&entry.2012867003=a&entry.1854823009=a
       
      
the part that says "YOUR GOOGLE ID" will be your Google Link  

              https://docs.google.com/forms/d/e/YOUR FORM ID/viewform?usp=pp_url&entry.1008365156=a&entry.2012867003=a&entry.1854823009=a
       
     
Entry ID(s):

The "entry" value(s) after your form id

       entry.1008365156, entry.2012867003, entry.1854823009=a




     
     



Under line 67 in the file <code>index.html</code>
 
Put your Google Entry ID's you collected from earlier to the corresponding variables. 

      var GOOGLE_ENTRY_ID_Name="GUESTBOOK NAME FORM ID"; 
		
      var GOOGLE_ENTRY_ID_Email="GUESTBOOK EMAIL FORM ID";		
		
      var GOOGLE_ENTRY_ID_Guestbook="GUESTBOOK TEXT AREA FORM ID";


Under line 74 in the same file <code>index.html</code>      

Put your Google Form Link, Google Form ID & Form Name (Tab Name In Google Spreadsheets) to the corresponding variables. 



      var Google_Form_Link="YOUR GOOGLE FORM LINK HERE"  
 	
	  var Google_Form_ID="YOUR GOOGLE FORM ID HERE"  
	 
	  var Google_Form_Name="YOUR FORM NAME HERE"  

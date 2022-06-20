# How To Setup Your Own Serveless Guestbook

## After creating a template from this repo

1. Go to Google Forms & Sign In

2. Create a new form 

![image](https://user-images.githubusercontent.com/86180097/174424881-808ae090-ad35-47ee-b2d3-03a310842288.png)

3. Follow this exact template

![image](https://user-images.githubusercontent.com/86180097/174526875-59e5d651-e3f0-4d5b-8417-1342cba98c2a.png)



4. To help prevent illegal XSS input on iFrame set rules for your form like so. 

![image](https://user-images.githubusercontent.com/86180097/174516509-d4f5879c-0ec4-4d2d-a323-9249bb20d493.png)



![image](https://user-images.githubusercontent.com/86180097/174510199-1d136099-4c5b-483e-a42f-0b30b0aeed40.png)

Note: set the name length to your prefered length (something reasonable)

5. Press the dropdown menu to the right of the "Send" button & press "Get Pre-Filled Link"

![image](https://user-images.githubusercontent.com/86180097/174424976-4ad07d02-d8de-4efc-b315-368d0f554b2d.png)

6. Enter all forms with random data & press "Get Link", a popup will appear then press "Copy Link".

![image](https://user-images.githubusercontent.com/86180097/174425028-f3d0aafa-de2c-4951-9fa7-147e92fa5d1c.png)

7. Save / copy these values from your link for later

<b> Google Link</b>

Your google link will look something like this, save & copy it for later. 

       https://docs.google.com/forms/d/e/1FAIpQLSdUSoJ72_oCxwkGN4GCx8X1LntMvonrT1Gv0W8TwSWcf7no-g/viewform?usp=pp_url&entry.1008365156=a&entry.2012867003=a&entry.1854823009=a
       


<b>Entry ID(s)</b>:

The 3 "entry" value(s) after your form id

       entry.1008365156, entry.2012867003, entry.1854823009


Save these for later. 


8. Go back to your Google Form, press on "Responses" & "Create spreadsheet"

![image](https://user-images.githubusercontent.com/86180097/174425184-aff8d5ad-ec6d-4496-8194-715a3570177f.png)


9. Once the spreadsheet has been created, make it PUBLIC & save the tab name at the bottom left corner

![image](https://user-images.githubusercontent.com/86180097/174425225-79e9a095-d241-4dba-91d4-cee0997f1940.png)

10. Copy form ID from your spreadsheet public link


<b>Form ID</b>:

Your Spreadsheet URL will look like this

        https://docs.google.com/spreadsheets/d/12dHNazq1AW04WG8DHy0-qKsqejpT6urRY0EgGRfPxdc/edit?usp=sharing
      
the part that says "YOUR GOOGLE ID" will be your Google Form ID.  

        https://docs.google.com/spreadsheets/d/YOUR ID/edit?usp=sharing
       
     
          
11. Under line 67 in the file <code>index.html</code>
 
Put your Google Entry ID's you collected from earlier to the corresponding variables. 

The first entry ID is "Name", second entry ID is "Email" & third is "Textarea"

      var GOOGLE_ENTRY_ID_Name="GUESTBOOK NAME FORM ID"; 
		
      var GOOGLE_ENTRY_ID_Email="GUESTBOOK EMAIL FORM ID";		
		
      var GOOGLE_ENTRY_ID_Guestbook="GUESTBOOK TEXT AREA FORM ID";


12. Under line 74 in the same file <code>index.html</code>      

With your Google Form Link from earlier - change the final link from viewform? to formResponse?

Then put your updated Google Form Link, Google Spreadsheet Form ID & Form Name (Tab Name In Google Spreadsheets) to the corresponding variables. 

Note: for any spaces in Tab Name, replace with "+". Example - Form Responses, becomes "Form+Responses".  



      var Google_Form_Link="YOUR GOOGLE FORM LINK HERE"  
 	
	  var Google_Form_ID="YOUR GOOGLE FORM ID HERE"  
	 
	  var Google_Form_Name="YOUR FORM NAME HERE"  



13. Get a Recaptcha Key (V2) from Google & place your key Under line 97. 
 
 
        // Google Recaptcha Key 
      	 var CaptchaKey = "6LcmzH4gAAAAAAHKvR7hX8TkMcUsTlNzPU0m-U23" // put your Google Captcha Key here
	
	

11. Go back to your spreadsheet, go to Extensions > then press "Script Editor" (OPTIONAL)

Note - this step is OPTIONAL if you want to remove any inputs that get through via XSS input with swear words etc or that you don't want in general being shown.

![image](https://user-images.githubusercontent.com/86180097/174511021-8352e114-1872-4c38-879d-f4a99f05e865.png)

<br>
Copy this script into <code>code.gs</code> & save the changes.


<br>
<br>
<details>
	<summary> Click to view the script</summary>

## Note: Add any extra words to "delA" that you want to be automatically removed from the Spreadsheet. 	

	
	
	
         function deleteMyRows() 
    {
     var delA=["2 girls 1 cup", "2g1c", "4r5e", "5h1t", "5hit", "a55", "a_s_s", "acrotomophilia", "alabama hot pocket", "alaskan pipeline", "anal", "anilingus", "anus", "apeshit", "ar5e", "arrse", "arse", "arsehole", "ass", "ass-fucker", "ass-hat", "ass-pirate", "assbag", "assbandit", "assbanger", "assbite", "assclown", "asscock", "asscracker", "asses", "assface", "assfucker", "assfukka", "assgoblin", "asshat", "asshead", "asshole", "assholes", "asshopper", "assjacker", "asslick", "asslicker", "assmonkey", "assmunch", "assmuncher", "asspirate", "assshole", "asssucker", "asswad", "asswhole", "asswipe", "auto erotic", "autoerotic", "b!tch", "b00bs", "b17ch", "b1tch", "babeland", "baby batter", "baby juice", "ball gag", "ball gravy", "ball kicking", "ball licking", "ball sack", "ball sucking", "ballbag", "balls", "ballsack", "bampot", "bangbros", "bareback", "barely legal", "barenaked", "bastard", "bastardo", "bastinado", "bbw", "bdsm", "beaner", "beaners", "beastial", "beastiality", "beastility", "beaver cleaver", "beaver lips", "bellend", "bestial", "bestiality", "bi+ch", "biatch", "big black", "big breasts", "big knockers", "big tits", "bimbos", "birdlock", "bitch", "bitcher", "bitchers", "bitches", "bitchin", "bitching", "black cock", "blonde action", "blonde on blonde action", "bloody", "blow job", "blow your load", "blowjob", "blowjobs", "blue waffle", "blumpkin", "boiolas", "bollock", "bollocks", "bollok", "bollox", "bondage", "boner", "boob", "boobie", "boobs", "booobs", "boooobs", "booooobs", "booooooobs", "booty call", "breasts", "brown showers", "brunette action", "buceta", "bugger", "bukkake", "bulldyke", "bullet vibe", "bullshit", "bum", "bung hole", "bunghole", "bunny fucker", "busty", "butt", "butt-pirate", "buttcheeks", "butthole", "buttmunch", "buttplug", "c0ck", "c0cksucker", "camel toe", "camgirl", "camslut", "camwhore", "carpet muncher", "carpetmuncher", "cawk", "chinc", "chink", "choad", "chocolate rosebuds", "chode", "cipa", "circlejerk", "cl1t", "cleveland steamer", "clit", "clitface", "clitoris", "clits", "clover clamps", "clusterfuck", "cnut", "cock", "cock-sucker", "cockbite", "cockburger", "cockface", "cockhead", "cockjockey", "cockknoker", "cockmaster", "cockmongler", "cockmongruel", "cockmonkey", "cockmunch", "cockmuncher", "cocknose", "cocknugget", "cocks", "cockshit", "cocksmith", "cocksmoker", "cocksuck", "cocksuck", "cocksucked", "cocksucked", "cocksucker", "cocksucking", "cocksucks", "cocksuka", "cocksukka", "cok", "cokmuncher", "coksucka", "coochie", "coochy", "coon", "coons", "cooter", "coprolagnia", "coprophilia", "cornhole", "cox", "crap", "creampie", "cum", "cumbubble", "cumdumpster", "cumguzzler", "cumjockey", "cummer", "cumming", "cums", "cumshot", "cumslut", "cumtart", "cunilingus", "cunillingus", "cunnie", "cunnilingus", "cunt", "cuntface", "cunthole", "cuntlick", "cuntlick", "cuntlicker", "cuntlicker", "cuntlicking", "cuntlicking", "cuntrag", "cunts", "cyalis", "cyberfuc", "cyberfuck", "cyberfucked", "cyberfucker", "cyberfuckers", "cyberfucking", "d1ck", "dammit", "damn", "darkie", "date rape", "daterape", "deep throat", "deepthroat", "dendrophilia", "dick", "dickbag", "dickbeater", "dickface", "dickhead", "dickhole", "dickjuice", "dickmilk", "dickmonger", "dickslap", "dicksucker", "dickwad", "dickweasel", "dickweed", "dickwod", "dike", "dildo", "dildos", "dingleberries", "dingleberry", "dink", "dinks", "dipshit", "dirsa", "dirty pillows", "dirty sanchez", "dlck", "dog style", "dog-fucker", "doggie style", "doggiestyle", "doggin", "dogging", "doggy style", "doggystyle", "dolcett", "domination", "dominatrix", "dommes", "donkey punch", "donkeyribber", "doochbag", "dookie", "doosh", "double dong", "double penetration", "douche", "douchebag", "dp action", "dry hump", "duche", "dumbshit", "dumshit", "dvda", "dyke", "eat my ass", "ecchi", "ejaculate", "ejaculated", "ejaculates", "ejaculating", "ejaculatings", "ejaculation", "ejakulate", "erotic", "erotism", "escort", "eunuch", "f u c k", "f u c k e r", "f4nny", "f_u_c_k", "fag", "fagbag", "fagg", "fagging", "faggit", "faggitt", "faggot", "faggs", "fagot", "fagots", "fags", "fagtard", "fanny", "fannyflaps", "fannyfucker", "fanyy", "fart", "farted", "farting", "farty", "fatass", "fcuk", "fcuker", "fcuking", "fecal", "feck", "fecker", "felatio", "felch", "felching", "fellate", "fellatio", "feltch", "female squirting", "femdom", "figging", "fingerbang", "fingerfuck", "fingerfucked", "fingerfucker", "fingerfuckers", "fingerfucking", "fingerfucks", "fingering", "fistfuck", "fistfucked", "fistfucker", "fistfuckers", "fistfucking", "fistfuckings", "fistfucks", "fisting", "flamer", "flange", "fook", "fooker", "foot fetish", "footjob", "frotting", "fuck", "fuck buttons", "fucka", "fucked", "fucker", "fuckers", "fuckhead", "fuckheads", "fuckin", "fucking", "fuckings", "fuckingshitmotherfucker", "fuckme", "fucks", "fucktards", "fuckwhit", "fuckwit", "fudge packer", "fudgepacker", "fuk", "fuker", "fukker", "fukkin", "fuks", "fukwhit", "fukwit", "futanari", "fux", "fux0r", "g-spot", "gang bang", "gangbang", "gangbanged", "gangbanged", "gangbangs", "gay sex", "gayass", "gaybob", "gaydo", "gaylord", "gaysex", "gaytard", "gaywad", "genitals", "giant cock", "girl on", "girl on top", "girls gone wild", "goatcx", "goatse", "god damn", "god-dam", "god-damned", "goddamn", "goddamned", "gokkun", "golden shower", "goo girl", "gooch", "goodpoop", "gook", "goregasm", "gringo", "grope", "group sex", "guido", "guro", "hand job", "handjob", "hard core", "hardcore", "hardcoresex", "heeb", "hell", "hentai", "heshe", "ho", "hoar", "hoare", "hoe", "hoer", "homo", "homoerotic", "honkey", "honky", "hooker", "hore", "horniest", "horny", "hot carl", "hot chick", "hotsex", "how to kill", "how to murder", "huge fat", "humping", "incest", "intercourse", "jack off", "jack-off", "jackass", "jackoff", "jail bait", "jailbait", "jap", "jelly donut", "jerk off", "jerk-off", "jigaboo", "jiggaboo", "jiggerboo", "jism", "jiz", "jiz", "jizm", "jizm", "jizz", "juggs", "kawk", "kike", "kinbaku", "kinkster", "kinky", "kiunt", "knob", "knobbing", "knobead", "knobed", "knobend", "knobhead", "knobjocky", "knobjokey", "kock", "kondum", "kondums", "kooch", "kootch", "kum", "kumer", "kummer", "kumming", "kums", "kunilingus", "kunt", "kyke", "l3i+ch", "l3itch", "labia", "leather restraint", "leather straight jacket", "lemon party", "lesbo", "lezzie", "lmfao", "lolita", "lovemaking", "lust", "lusting", "m0f0", "m0fo", "m45terbate", "ma5terb8", "ma5terbate", "make me come", "male squirting", "masochist", "master-bate", "masterb8", "masterbat*", "masterbat3", "masterbate", "masterbation", "masterbations", "masturbate", "menage a trois", "milf", "minge", "missionary position", "mo-fo", "mof0", "mofo", "mothafuck", "mothafucka", "mothafuckas", "mothafuckaz", "mothafucked", "mothafucker", "mothafuckers", "mothafuckin", "mothafucking", "mothafuckings", "mothafucks", "mother fucker", "motherfuck", "motherfucked", "motherfucker", "motherfuckers", "motherfuckin", "motherfucking", "motherfuckings", "motherfuckka", "motherfucks", "mound of venus", "mr hands", "muff", "muff diver", "muffdiver", "muffdiving", "mutha", "muthafecker", "muthafuckker", "muther", "mutherfucker", "n1gga", "n1gger", "nambla", "nawashi", "nazi", "negro", "neonazi", "nig nog", "nigg3r", "nigg4h", "nigga", "niggah", "niggas", "niggaz", "nigger", "niggers", "niglet", "nimphomania", "nipple", "nipples", "nob", "nob jokey", "nobhead", "nobjocky", "nobjokey", "nsfw images", "nude", "nudity", "numbnuts", "nutsack", "nympho", "nymphomania", "octopussy", "omorashi", "one cup two girls", "one guy one jar", "orgasim", "orgasim", "orgasims", "orgasm", "orgasms", "orgy", "p0rn", "paedophile", "paki", "panooch", "panties", "panty", "pawn", "pecker", "peckerhead", "pedobear", "pedophile", "pegging", "penis", "penisfucker", "phone sex", "phonesex", "phuck", "phuk", "phuked", "phuking", "phukked", "phukking", "phuks", "phuq", "piece of shit", "pigfucker", "pimpis", "pis", "pises", "pisin", "pising", "pisof", "piss", "piss pig", "pissed", "pisser", "pissers", "pisses", "pissflap", "pissflaps", "pissin", "pissin", "pissing", "pissoff", "pissoff", "pisspig", "playboy", "pleasure chest", "pole smoker", "polesmoker", "pollock", "ponyplay", "poo", "poof", "poon", "poonani", "poonany", "poontang", "poop", "poop chute", "poopchute", "porn", "porno", "pornography", "pornos", "prick", "pricks", "prince albert piercing", "pron", "pthc", "pube", "pubes", "punanny", "punany", "punta", "pusies", "pusse", "pussi", "pussies", "pussy", "pussylicking", "pussys", "pusy", "puto", "queaf", "queef", "queerbait", "queerhole", "quim", "raghead", "raging boner", "rape", "raping", "rapist", "rectum", "renob", "retard", "reverse cowgirl", "rimjaw", "rimjob", "rimming", "rosy palm", "rosy palm and her 5 sisters", "ruski", "rusty trombone", "s hit", "s&m", "s.o.b.", "s_h_i_t", "sadism", "sadist", "santorum", "scat", "schlong", "scissoring", "screwing", "scroat", "scrote", "scrotum", "semen", "sex", "sexo", "sexy", "sh!+", "sh!t", "sh1t", "shag", "shagger", "shaggin", "shagging", "shaved beaver", "shaved pussy", "shemale", "shi+", "shibari", "shit", "shit-ass", "shit-bag", "shit-bagger", "shit-brain", "shit-breath", "shit-cunt", "shit-dick", "shit-eating", "shit-face", "shit-faced", "shit-fit", "shit-head", "shit-heel", "shit-hole", "shit-house", "shit-load", "shit-pot", "shit-spitter", "shit-stain", "shitass", "shitbag", "shitbagger", "shitblimp", "shitbrain", "shitbreath", "shitcunt", "shitdick", "shite", "shiteating", "shited", "shitey", "shitface", "shitfaced", "shitfit", "shitfuck", "shitfull", "shithead", "shitheel", "shithole", "shithouse", "shiting", "shitings", "shitload", "shitpot", "shits", "shitspitter", "shitstain", "shitted", "shitter", "shitters", "shittiest", "shitting", "shittings", "shitty", "shitty", "shity", "shiz", "shiznit", "shota", "shrimping", "skank", "skeet", "slanteye", "slut", "slutbag", "sluts", "smeg", "smegma", "smut", "snatch", "snowballing", "sodomize", "sodomy", "son-of-a-bitch", "spac", "spic", "spick", "splooge", "splooge moose", "spooge", "spread legs", "spunk", "strap on", "strapon", "strappado", "strip club", "style doggy", "suck", "sucks", "suicide girls", "sultry women", "swastika", "swinger", "t1tt1e5", "t1tties", "tainted love", "tard", "taste my", "tea bagging", "teets", "teez", "testical", "testicle", "threesome", "throating", "thundercunt", "tied up", "tight white", "tit", "titfuck", "tits", "titt", "tittie5", "tittiefucker", "titties", "titty", "tittyfuck", "tittywank", "titwank", "tongue in a", "topless", "tosser", "towelhead", "tranny", "tribadism", "tub girl", "tubgirl", "turd", "tushy", "tw4t", "twat", "twathead", "twatlips", "twatty", "twink", "twinkie", "two girls one cup", "twunt", "twunter", "undressing", "upskirt", "urethra play", "urophilia", "v14gra", "v1gra", "va-j-j", "vag", "vagina", "venus mound", "viagra", "vibrator", "violet wand", "vjayjay", "vorarephilia", "voyeur", "vulva", "w00se", "wang", "wank", "wanker", "wanky", "wet dream", "wetback", "white power", "whoar", "whore", "willies", "willy", "wrapping men", "wrinkled starfish", "xrated", "xx", "xxx", "yaoi", "yellow showers", "yiffy", "zoophilia", "🖕"];
     var sht = SpreadsheetApp.getActiveSheet();
     var rng = sht.getDataRange();
     var values = rng.getValues();
     for (var i = values.length-1; i > -1; i--) 
     {
       for(var j=0;j<values[i].length;j++)
       {
         for(var k=0;k<delA.length;k++)
         {
           var lcval=String(values[i][j]).toLowerCase();
           var lcdel=String(delA[k]).toLowerCase();
           if(lcval.indexOf(lcdel)>-1)
           {
             sht.deleteRow(i + 1);
             break;
           }
         }
       }
     }
    }
    

				 
</details>  	
<br>
Create a trigger for the function with this exact template

<br>
<br>
<details>
	<summary> Click to view trigger template</summary>
	
![image](https://user-images.githubusercontent.com/86180097/174510822-556a721f-6f0b-44a2-9df7-3b8335bb03fb.png)


	
<br>

</details>
	
<br>

12. Deploy to your hosting provider! Github Pages etc. 

Enjoy! :) 



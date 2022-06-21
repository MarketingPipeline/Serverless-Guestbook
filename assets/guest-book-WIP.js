

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


// On Submit - Validating Text Before Sending For Profanities
var Gform = document.getElementById("gform")
Gform.addEventListener('submit', (e) => {
  validateRecaptcha();
	
  
})

// Validate Recaptcha
function validateRecaptcha() {
    var response = grecaptcha.getResponse();
    if (response.length === 0) {
         // if Captcha not passed - do no nothing. 
        return false;
    } else {
	    // if Captcha Passed - Validate Text For Swearing Etc. 
        validate_text();
        return true;
    }
}

// Convert 24 hour timestamp to 12 hour format - Work in Progress

// https://stackoverflow.com/questions/13898423/javascript-convert-24-hour-time-of-day-string-to-12-hour-time-with-am-pm-and-no

function tConvert (time) {
  
  return time; // return adjusted time or original string
}



		 
var subscribeForm = document.getElementById("SendForm")

/// Profanity Filter

   // Enter the words to be not allowed in form submission for Profanity Filter
var swear_words_arr=new Array("2 girls 1 cup", "2g1c", "4r5e", "5h1t", "5hit", "a55", "a_s_s", "acrotomophilia", "alabama hot pocket", "alaskan pipeline", "anal", "anilingus", "anus", "apeshit", "ar5e", "arrse", "arse", "arsehole", "ass", "ass-fucker", "ass-hat", "ass-pirate", "assbag", "assbandit", "assbanger", "assbite", "assclown", "asscock", "asscracker", "asses", "assface", "assfucker", "assfukka", "assgoblin", "asshat", "asshead", "asshole", "assholes", "asshopper", "assjacker", "asslick", "asslicker", "assmonkey", "assmunch", "assmuncher", "asspirate", "assshole", "asssucker", "asswad", "asswhole", "asswipe", "auto erotic", "autoerotic", "b!tch", "b00bs", "b17ch", "b1tch", "babeland", "baby batter", "baby juice", "ball gag", "ball gravy", "ball kicking", "ball licking", "ball sack", "ball sucking", "ballbag", "balls", "ballsack", "bampot", "bangbros", "bareback", "barely legal", "barenaked", "bastard", "bastardo", "bastinado", "bbw", "bdsm", "beaner", "beaners", "beastial", "beastiality", "beastility", "beaver cleaver", "beaver lips", "bellend", "bestial", "bestiality", "bi+ch", "biatch", "big black", "big breasts", "big knockers", "big tits", "bimbos", "birdlock", "bitch", "bitcher", "bitchers", "bitches", "bitchin", "bitching", "black cock", "blonde action", "blonde on blonde action", "bloody", "blow job", "blow your load", "blowjob", "blowjobs", "blue waffle", "blumpkin", "boiolas", "bollock", "bollocks", "bollok", "bollox", "bondage", "boner", "boob", "boobie", "boobs", "booobs", "boooobs", "booooobs", "booooooobs", "booty call", "breasts", "brown showers", "brunette action", "buceta", "bugger", "bukkake", "bulldyke", "bullet vibe", "bullshit", "bum", "bung hole", "bunghole", "bunny fucker", "busty", "butt", "butt-pirate", "buttcheeks", "butthole", "buttmunch", "buttplug", "c0ck", "c0cksucker", "camel toe", "camgirl", "camslut", "camwhore", "carpet muncher", "carpetmuncher", "cawk", "chinc", "chink", "choad", "chocolate rosebuds", "chode", "cipa", "circlejerk", "cl1t", "cleveland steamer", "clit", "clitface", "clitoris", "clits", "clover clamps", "clusterfuck", "cnut", "cock", "cock-sucker", "cockbite", "cockburger", "cockface", "cockhead", "cockjockey", "cockknoker", "cockmaster", "cockmongler", "cockmongruel", "cockmonkey", "cockmunch", "cockmuncher", "cocknose", "cocknugget", "cocks", "cockshit", "cocksmith", "cocksmoker", "cocksuck", "cocksuck", "cocksucked", "cocksucked", "cocksucker", "cocksucking", "cocksucks", "cocksuka", "cocksukka", "cok", "cokmuncher", "coksucka", "coochie", "coochy", "coon", "coons", "cooter", "coprolagnia", "coprophilia", "cornhole", "cox", "crap", "creampie", "cum", "cumbubble", "cumdumpster", "cumguzzler", "cumjockey", "cummer", "cumming", "cums", "cumshot", "cumslut", "cumtart", "cunilingus", "cunillingus", "cunnie", "cunnilingus", "cunt", "cuntface", "cunthole", "cuntlick", "cuntlick", "cuntlicker", "cuntlicker", "cuntlicking", "cuntlicking", "cuntrag", "cunts", "cyalis", "cyberfuc", "cyberfuck", "cyberfucked", "cyberfucker", "cyberfuckers", "cyberfucking", "d1ck", "dammit", "damn", "darkie", "date rape", "daterape", "deep throat", "deepthroat", "dendrophilia", "dick", "dickbag", "dickbeater", "dickface", "dickhead", "dickhole", "dickjuice", "dickmilk", "dickmonger", "dickslap", "dicksucker", "dickwad", "dickweasel", "dickweed", "dickwod", "dike", "dildo", "dildos", "dingleberries", "dingleberry", "dink", "dinks", "dipshit", "dirsa", "dirty pillows", "dirty sanchez", "dlck", "dog style", "dog-fucker", "doggie style", "doggiestyle", "doggin", "dogging", "doggy style", "doggystyle", "dolcett", "domination", "dominatrix", "dommes", "donkey punch", "donkeyribber", "doochbag", "dookie", "doosh", "double dong", "double penetration", "douche", "douchebag", "dp action", "dry hump", "duche", "dumbshit", "dumshit", "dvda", "dyke", "eat my ass", "ecchi", "ejaculate", "ejaculated", "ejaculates", "ejaculating", "ejaculatings", "ejaculation", "ejakulate", "erotic", "erotism", "escort", "eunuch", "f u c k", "f u c k e r", "f4nny", "f_u_c_k", "fag", "fagbag", "fagg", "fagging", "faggit", "faggitt", "faggot", "faggs", "fagot", "fagots", "fags", "fagtard", "fanny", "fannyflaps", "fannyfucker", "fanyy", "fart", "farted", "farting", "farty", "fatass", "fcuk", "fcuker", "fcuking", "fecal", "feck", "fecker", "felatio", "felch", "felching", "fellate", "fellatio", "feltch", "female squirting", "femdom", "figging", "fingerbang", "fingerfuck", "fingerfucked", "fingerfucker", "fingerfuckers", "fingerfucking", "fingerfucks", "fingering", "fistfuck", "fistfucked", "fistfucker", "fistfuckers", "fistfucking", "fistfuckings", "fistfucks", "fisting", "flamer", "flange", "fook", "fooker", "foot fetish", "footjob", "frotting", "fuck", "fuck buttons", "fucka", "fucked", "fucker", "fuckers", "fuckhead", "fuckheads", "fuckin", "fucking", "fuckings", "fuckingshitmotherfucker", "fuckme", "fucks", "fucktards", "fuckwhit", "fuckwit", "fudge packer", "fudgepacker", "fuk", "fuker", "fukker", "fukkin", "fuks", "fukwhit", "fukwit", "futanari", "fux", "fux0r", "g-spot", "gang bang", "gangbang", "gangbanged", "gangbanged", "gangbangs", "gay sex", "gayass", "gaybob", "gaydo", "gaylord", "gaysex", "gaytard", "gaywad", "genitals", "giant cock", "girl on", "girl on top", "girls gone wild", "goatcx", "goatse", "god damn", "god-dam", "god-damned", "goddamn", "goddamned", "gokkun", "golden shower", "goo girl", "gooch", "goodpoop", "gook", "goregasm", "gringo", "grope", "group sex", "guido", "guro", "hand job", "handjob", "hard core", "hardcore", "hardcoresex", "heeb", "hell", "hentai", "heshe", "ho", "hoar", "hoare", "hoe", "hoer", "homo", "homoerotic", "honkey", "honky", "hooker", "hore", "horniest", "horny", "hot carl", "hot chick", "hotsex", "how to kill", "how to murder", "huge fat", "humping", "incest", "intercourse", "jack off", "jack-off", "jackass", "jackoff", "jail bait", "jailbait", "jap", "jelly donut", "jerk off", "jerk-off", "jigaboo", "jiggaboo", "jiggerboo", "jism", "jiz", "jiz", "jizm", "jizm", "jizz", "juggs", "kawk", "kike", "kinbaku", "kinkster", "kinky", "kiunt", "knob", "knobbing", "knobead", "knobed", "knobend", "knobhead", "knobjocky", "knobjokey", "kock", "kondum", "kondums", "kooch", "kootch", "kum", "kumer", "kummer", "kumming", "kums", "kunilingus", "kunt", "kyke", "l3i+ch", "l3itch", "labia", "leather restraint", "leather straight jacket", "lemon party", "lesbo", "lezzie", "lmfao", "lolita", "lovemaking", "lust", "lusting", "m0f0", "m0fo", "m45terbate", "ma5terb8", "ma5terbate", "make me come", "male squirting", "masochist", "master-bate", "masterb8", "masterbat*", "masterbat3", "masterbate", "masterbation", "masterbations", "masturbate", "menage a trois", "milf", "minge", "missionary position", "mo-fo", "mof0", "mofo", "mothafuck", "mothafucka", "mothafuckas", "mothafuckaz", "mothafucked", "mothafucker", "mothafuckers", "mothafuckin", "mothafucking", "mothafuckings", "mothafucks", "mother fucker", "motherfuck", "motherfucked", "motherfucker", "motherfuckers", "motherfuckin", "motherfucking", "motherfuckings", "motherfuckka", "motherfucks", "mound of venus", "mr hands", "muff", "muff diver", "muffdiver", "muffdiving", "mutha", "muthafecker", "muthafuckker", "muther", "mutherfucker", "n1gga", "n1gger", "nambla", "nawashi", "nazi", "negro", "neonazi", "nig nog", "nigg3r", "nigg4h", "nigga", "niggah", "niggas", "niggaz", "nigger", "niggers", "niglet", "nimphomania", "nipple", "nipples", "nob", "nob jokey", "nobhead", "nobjocky", "nobjokey", "nsfw images", "nude", "nudity", "numbnuts", "nutsack", "nympho", "nymphomania", "octopussy", "omorashi", "one cup two girls", "one guy one jar", "orgasim", "orgasim", "orgasims", "orgasm", "orgasms", "orgy", "p0rn", "paedophile", "paki", "panooch", "panties", "panty", "pawn", "pecker", "peckerhead", "pedobear", "pedophile", "pegging", "penis", "penisfucker", "phone sex", "phonesex", "phuck", "phuk", "phuked", "phuking", "phukked", "phukking", "phuks", "phuq", "piece of shit", "pigfucker", "pimpis", "pis", "pises", "pisin", "pising", "pisof", "piss", "piss pig", "pissed", "pisser", "pissers", "pisses", "pissflap", "pissflaps", "pissin", "pissin", "pissing", "pissoff", "pissoff", "pisspig", "playboy", "pleasure chest", "pole smoker", "polesmoker", "pollock", "ponyplay", "poo", "poof", "poon", "poonani", "poonany", "poontang", "poop", "poop chute", "poopchute", "porn", "porno", "pornography", "pornos", "prick", "pricks", "prince albert piercing", "pron", "pthc", "pube", "pubes", "punanny", "punany", "punta", "pusies", "pusse", "pussi", "pussies", "pussy", "pussylicking", "pussys", "pusy", "puto", "queaf", "queef", "queerbait", "queerhole", "quim", "raghead", "raging boner", "rape", "raping", "rapist", "rectum", "renob", "retard", "reverse cowgirl", "rimjaw", "rimjob", "rimming", "rosy palm", "rosy palm and her 5 sisters", "ruski", "rusty trombone", "s hit", "s&m", "s.o.b.", "s_h_i_t", "sadism", "sadist", "santorum", "scat", "schlong", "scissoring", "screwing", "scroat", "scrote", "scrotum", "semen", "sex", "sexo", "sexy", "sh!+", "sh!t", "sh1t", "shag", "shagger", "shaggin", "shagging", "shaved beaver", "shaved pussy", "shemale", "shi+", "shibari", "shit", "shit-ass", "shit-bag", "shit-bagger", "shit-brain", "shit-breath", "shit-cunt", "shit-dick", "shit-eating", "shit-face", "shit-faced", "shit-fit", "shit-head", "shit-heel", "shit-hole", "shit-house", "shit-load", "shit-pot", "shit-spitter", "shit-stain", "shitass", "shitbag", "shitbagger", "shitblimp", "shitbrain", "shitbreath", "shitcunt", "shitdick", "shite", "shiteating", "shited", "shitey", "shitface", "shitfaced", "shitfit", "shitfuck", "shitfull", "shithead", "shitheel", "shithole", "shithouse", "shiting", "shitings", "shitload", "shitpot", "shits", "shitspitter", "shitstain", "shitted", "shitter", "shitters", "shittiest", "shitting", "shittings", "shitty", "shitty", "shity", "shiz", "shiznit", "shota", "shrimping", "skank", "skeet", "slanteye", "slut", "slutbag", "sluts", "smeg", "smegma", "smut", "snatch", "snowballing", "sodomize", "sodomy", "son-of-a-bitch", "spac", "spic", "spick", "splooge", "splooge moose", "spooge", "spread legs", "spunk", "strap on", "strapon", "strappado", "strip club", "style doggy", "suck", "sucks", "suicide girls", "sultry women", "swastika", "swinger", "t1tt1e5", "t1tties", "tainted love", "tard", "taste my", "tea bagging", "teets", "teez", "testical", "testicle", "threesome", "throating", "thundercunt", "tied up", "tight white", "tit", "titfuck", "tits", "titt", "tittie5", "tittiefucker", "titties", "titty", "tittyfuck", "tittywank", "titwank", "tongue in a", "topless", "tosser", "towelhead", "tranny", "tribadism", "tub girl", "tubgirl", "turd", "tushy", "tw4t", "twat", "twathead", "twatlips", "twatty", "twink", "twinkie", "two girls one cup", "twunt", "twunter", "undressing", "upskirt", "urethra play", "urophilia", "v14gra", "v1gra", "va-j-j", "vag", "vagina", "venus mound", "viagra", "vibrator", "violet wand", "vjayjay", "vorarephilia", "voyeur", "vulva", "w00se", "wang", "wank", "wanker", "wanky", "wet dream", "wetback", "white power", "whoar", "whore", "willies", "willy", "wrapping men", "wrinkled starfish", "xrated", "xx", "xxx", "yaoi", "yellow showers", "yiffy", "zoophilia", "🖕");

var swear_alert_arr=new Array;
var swear_alert_count=0;
function reset_alert_count()
{
 swear_alert_count=0;
}
function validate_text()
{
 reset_alert_count();
 var compare_text=document.getElementById(GOOGLE_ENTRY_ID_Guestbook).value;
 for(var i=0; i<swear_words_arr.length; i++)
 {
  for(var j=0; j<(compare_text.length); j++)
  {
   if(swear_words_arr[i]==compare_text.substring(j,(j+swear_words_arr[i].length)).toLowerCase())
   {
    swear_alert_arr[swear_alert_count]=compare_text.substring(j,(j+swear_words_arr[i].length));
    swear_alert_count++;
   }
  }
 }
 var alert_text="";
 for(var k=1; k<=swear_alert_count; k++)
 {
  alert_text+="\n" + "(" + k + ")  " + swear_alert_arr[k-1];
 }

	// if profanity is detected - show this message	 	
 if(swear_alert_count>0)
 {
	 
  var subscribeForm = document.getElementById("SendForm")
  // Fade out form to make things look nice
 subscribeForm.setAttribute("style", "-webkit-animation: fadeOut 1s; animation: fadeOut 1s;  animation-fill-mode: forwards;");
// Hide the input form values	 
 Gform.setAttribute("style", "display:none;");  
 // Show the user this message + the illegal character they used.
subscribeForm.innerHTML = `	<a class="close" onclick="ResetSwearForm();" href="#">&times;</a>
<h1  style="text-align: center;
    margin-top: 2em;">Your message will not be added! \nThe following illegal words were found:</h1> <p>${alert_text}</p>`   
  // Fade message in
subscribeForm.setAttribute("style", "-webkit-animation: fadeIn 1s; animation: fadeIn 1s;  animation-fill-mode: forwards;");  
	 

 }
 else  // if no profanities found - check if Captcha is complete
 {
	 
	
	 
	   var response = grecaptcha.getResponse();
    if (response.length === 0) { // if Captcha is not complete
        // do nothing
   
    } else { // add values to guestbook
	
      document.gform.submit();
    
    }

	 
	   // Timeout is needed for form to properly submit with animation
	 
	 setTimeout(function(){
   
		 

  // Hide the form values 
Gform.setAttribute("style", "display:none;");  
  var subscribeForm = document.getElementById("SendForm")

  
     // Show the user message their entry has been added
subscribeForm.innerHTML = `	<a class="close" href="#">&times;</a>
<h1 style="text-align: center;
    margin-top: 2em;">Your Guestbook Entry Has Added! It will appear shortly!</h1> `   
  
},500);
 }
}
window.onload=reset_alert_count;

// After profanity message is shown - we need to reset it to allow user to try again

    /// ie : Reset form after showing user message of violation
var subscribeForm = document.getElementById("SendForm")

function ResetSwearForm(){
	
			 
                      // Fade out form to make things look nice
 subscribeForm.setAttribute("style", "-webkit-animation: fadeOut 1s; animation: fadeOut 1s;  animation-fill-mode: forwards;");
 
 
subscribeForm.innerHTML = ` <h1>Sign The Guestbook</h1>
		<a class="close" href="#">&times;</a>
		<div class="content">
      <label style="display: block;
    text-align: center;" class="aterisk_before" for="gform"> indicates a required field</label>
      <br>
		
    <form name="gform" id="gform" enctype="text/plain" action="${Google_Form_Link}" target="hidden_iframe">
    
    
    
    
     
  
    
       <label for="${GOOGLE_ENTRY_ID_Name}"  class="aterisk_after">Name </label>
      
        <input class="form-element short" type="text" name="${GOOGLE_ENTRY_ID_Name}" id="${GOOGLE_ENTRY_ID_Name}" placeholder="John Doe." style="background: #5EC6C8;" required>
      
        <label for="${GOOGLE_ENTRY_ID_Email}">GitHub Username</label>
      
   
        <input class="form-element short" type="text" name="${GOOGLE_ENTRY_ID_Email}" id="${GOOGLE_ENTRY_ID_Email}" placeholder="MarketingPip" style="background: #5EC6C8;">
      
   <label for="${GOOGLE_ENTRY_ID_Guestbook}"  class="max-length">Guestbook Entry</label>
      
      <textarea class="form-element" name="${GOOGLE_ENTRY_ID_Guestbook}" id="${GOOGLE_ENTRY_ID_Guestbook}" rows="5" cols="30" oninvalid="this.setCustomValidity('You must sign the guestbook')"
  oninput="this.setCustomValidity('')"  maxlength="50" placeholder="Enter Your Message Here" required></textarea>
      
         <label for="g-recaptcha"  class="aterisk_after">Captcha</label>      
   <div class="g-recaptcha"
       data-sitekey="${CaptchaKey}"></div> 
      
        <input class="form-button" type="submit" value="Submit">
        <input class="form-button" type="reset" value="Reset Form">
 
    </form>
		</div>
	</div>
</div> 
</div>
     
	     
`   
  
subscribeForm.setAttribute("style", "-webkit-animation: fadeIn 1s; animation: fadeIn 1s;  animation-fill-mode: forwards;");  
}

// Santize Input - Basic XSS filter 

function encodeHTML(sanizitedInput) {
    return sanizitedInput.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
}

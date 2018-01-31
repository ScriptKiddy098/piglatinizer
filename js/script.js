// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add ay to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkay.
// CREATE THE FUNCTIONS BELOW

// Document Ready Function. All of your jQuery should go in here. 
$( document ).ready(function() {
	$('#btn').click(function(){ 
		// $('#inp').append("ay")
		console.log($('#inp').val())
		sentenceToPigLatin($('#inp').val());
	
	});
	
	$('#inp').keypress(function(event) {
		if(event.keyCode === 13) {
			sentenceToPigLatin($('#inp').val());
		}	
	});

});


// Create the wordToPigLa4tin function that takes a word as a parameter and returns a transfromed word. 
// var sentence_latinized = $("input").val(); 

function sentenceToPigLatin(sentence_latinized){ 
	var sentencePieces = sentence_latinized.split(' '); 
	var vowel_s = ["a","A","e","E","i","I","o","O","u","U"];
	var word;
	// console.log(sentencePieces); 
	
	for( var i = 0; i < sentencePieces.length; i++) {
		word = sentencePieces[i] ;
		console.log('word', word)
		var char_pos1= word.charAt(0); 
				
				
		if (char_pos1 === "a" || char_pos1 === "e" || char_pos1 === "i" || char_pos1 === "o" || char_pos1 === "u"){ 
			$(".lati-n").append( word + "ay ");
		// console.log(word + "ay");
		console.assert(true, "true");

		} 
		
		else{ 
		// console.log(.substring(2)); -1 try for loop flip 
				$(".lati-n").append(word.slice(2) + word.slice(0,2) + "ay ");
			console.assert(false, "false"); 

	
		}
	}
}
 
 //var vowel_s = ["a","A","e","E","i","I","o","O","u","U"];
 
// function condition_identify(vowel,consonant){
	
// 	 if(word.charAt[0] == vowel){ 
// 		 $("lati-n").html(+ "ay"); 
// 	 }
	 
// 	 else{
	  	
// 	 }
// 	}
 
// console.log(ToPigLatin); 



// Create the sentenceToPigLatin function that takes a sentence as a parameter
	//Loops through all the words in the sentence and transforms each word
	//It should return a transfromed sentance


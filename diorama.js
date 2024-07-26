const women = ["MARTHA COREY", "JANET CORNFOOT", "JOAN GUPPIE"]

function myFunction() {
	var guess = document.getElementById("guess").value;
	var info = document.getElementById("womenInfo");
	guess = guess.toUpperCase();
	if (women.includes(guess)) {
		document.getElementById("answer").innerHTML = "INNOCENT";
		//insert audio here
		if (guess === "MARTHA COREY") {
			info.innerHTML = "This doll's story is based on the real Martha Corey who was accused during the Salem Witch Trials in 1692. During her first trials, Martha made the mistake of questioning the validity of the afflicted girls' accusations. She was seen as a defiant and shameless women, even though she was a member of the local church. On the Sunday before her arrest, Martha went to church in her Sunday Best, a public display of her defying and mocking her enemies. She was hanged on September 22nd, 1692 with seven other suspected witches. Their deaths were the last hangings of the Salem Witch Trials.";
		}
		if (guess === "JANET CORNFOOT") {
			info.innerHTML = "This doll's story is based on the real Janet Cornfoot who was accused during the Pittenweem Witch Trials of Scotland in 1704. Janet was arrested and thrown into prison with Layng and several other suspected witches. Janet managed to escape and fled back to her town but a mob of blood-thirsty villagers found her and beated her. They then dragged her to the seafront and swung her from a rope tied between a ship and the shore where she was stoned. Afterwards, they placed a door piled with heavy rocks on her to get a confession. She did not confess and was crushed to death. To make sure she was dead, a man drove his horse and cart over her body multiple times. Her corpse was thrown into a communal grave called 'Witches Corner' on January 30th, 1705. Patrick Morton was soon revealed as a liar but the mob was never brought to justice.";
		}
		if (guess === "JOAN GUPPIE") {
			info.innerHTML = "This doll's story is based on the real Joan Guppie who was accused of bewitching her neighbor, Judith Gibbs, in Dorset, England in 1606. On one June day, Judith and her siblings attacked Joan when she was riding home from the market. They tore at her, pulling her off her horse to get drops of her blood which they thought could cure Judith. After the attack, Judith called for a trial against Joan. Joan brandished a document signed by her other neighbors which claimed she was not a witch and was actually an integral part of her community. Thanks to the document, Joan was not hanged and lived on for several years after.";
		}
	}
	else {
		document.getElementById("answer").innerHTML = "That is not a valid name.";		
		info.innerHTML = "Try again.";
	}
}

var input = document.getElementById("guess");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        myFunction();
    }
});
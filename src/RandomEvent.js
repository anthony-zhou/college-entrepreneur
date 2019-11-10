import React from 'react'

class RandomEvent extends React.Component{
	var eventItems[] = {"PhoneMe Ultimate Extra OLED S Max", "SingingSam Galaxy Foldable", "Democratic Republic of Gamers 240hz Monitor", "Lazer LifeAdder Gaming Mouse", "Most Overpriced keyboard, the one and only HHKB keyboard", "very nice mug", "very nice fountain pen", "sketchy adapter", "avacado toast", "AlienWear Smart Laptop with Alexo Included", "Saturn V Lego Set", "amazing pikachonk plushie"};
	constructor(){
		this.description = "";
		this.valYes = 0;
		this.valNo = 0;
		this.cost = 0;
	}

	generate(creditScore){
		this.valYes = pullValue();
		this.valNo = pullValue() * -1;
		this.cost = pullCost(); 
		this.description = pullDescription();
		
		Event generic = {desription: this.description, valYes: this.valYes, valNo: this.valNo, cost: this.cost};
		return generic;
	}

	pullDescription(){
		randomIndex = Math.floor(Math.random() * eventItems.length);
		if(randomIndex == eventItems.length){
			randomIndex -= 1;
		}
		return "You want to purchase the " + eventItems[randomIndex] + " and it will cost " + this.cost;
	}

	pullValue(){
		return Math.floor((Math.random() * 10) + 10);
	}

	pullCost(){
		return Math.floor((Math.random() * 200) + 1);
	}

}

export default RandomEvent;

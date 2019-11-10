import React from 'react';
import Event from './Event'
const eventItems = ["PhoneMe Ultimate Extra OLED S Max", "SingingSam Galaxy Foldable", "Democratic Republic of Gamers 240hz Monitor", "Lazer LifeAdder Gaming Mouse", "Most Overpriced keyboard, the one and only HHKB keyboard", "very nice mug", "very nice fountain pen", "sketchy adapter", "avacado toast", "AlienWear Smart Laptop with Alexo Included", "Saturn V Lego Set", "amazing pikachonk plushie", "Bithub Backpack", "really expsensive cup of coffee", "book on how to code reactjs", "secret to the universe", "one banana", "love of your cat", "Planck 40% Ortholinear Keyboard", "Blueberry Pie, a great microcomputer", "advertisement spot for a popular UsTuber", "Bell XPS 13", "Boogle Pixel", "book on how to learn financial literacy", "philosopher's stone", "HAMY Safari Fountain Pen", "superpower to nap at anytime anywhere", "canned air", "bottled air", "best bud, a dog", "cute co-woker, a cat", "superpower of not getting coding errors", "LogicTech G305 Gaming Mouse", "Nintech Swap with HappyCons", "GameStation 4", "tickets to that one movie", "bundle or oranges", "very nice mechanical pencil", "MolaritySkin Notebook", "knockoff version of a Swiss watch", "limited edition cereal that disappointingly tastes the same"];

class RandomEvent {
	constructor(){
		this.description = "";
		this.valYes = 0;
		this.valNo = 0;
		this.cost = 0;
	}

	static generate(){
		this.valYes = this.pullValue();
		this.valNo = this.pullValue() * -1;
		this.cost = this.pullCost();
		this.description = this.pullDescription();

		var generic = {description: this.description, valYes: this.valYes, valNo: this.valNo, cost: this.cost};
		return generic;
	}

	static pullDescription(){
		var randomIndex = Math.floor(Math.random() * eventItems.length);
		if(randomIndex == eventItems.length){
			randomIndex -= 1;
		}
		return "You want to purchase the " + eventItems[randomIndex] + " and it will cost $" + this.cost;
	}

	static pullValue(){
		return Math.floor((Math.random() * 10) + 10);
	}

	static pullCost(){
		return Math.floor((Math.random() * 200) + 1);
	}

}

export default RandomEvent;

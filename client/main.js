import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Mongo } from 'meteor/mongo';

import './main.html';

Template.images.helpers({
	images: [
	{
		img_src: "/images/IMG_20161122_234013.jpg",
  		img_alt: "Resting cat"
  	},
  	{
      	img_src: "./images/IMG_20161125_232245.jpg",
      	img_alt: "Sleeping cat"
    },
    {
  		img_src: "./images/IMG_20161231_122656.jpg",
  		img_alt: "New year cat"
  	},
  	{
  		img_src: "./images/IMG_20170101_165055.jpg",
  		img_alt: "Cat & puzzle"
  	},
  	{
  		img_src: "./images/IMG_20170416_171334.jpg",
  		img_alt: "Cat & iron"
  	},
  	{
  		img_src: "./images/IMG_20170428_221216.jpg",
  		img_alt: "Cat on the table"
  	}
	]
});

Template.images.events({
	'click .js-image': function(event) {
		$(event.target).css("width", "50px");
	}
});


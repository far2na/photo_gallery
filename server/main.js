import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Images } from '/imports/startup.js';

Meteor.startup(() => {
  if (Images.find().count() == 0) {
  	Images.insert(
  		{
		img_src: "/images/IMG_20161122_234013.jpg",
  		img_alt: "Resting cat"
  	});
  	Images.insert(
  		{
      	img_src: "./images/IMG_20161125_232245.jpg",
      	img_alt: "Sleeping cat"
    });
  	Images.insert(
  		{
  		img_src: "./images/IMG_20161231_122656.jpg",
  		img_alt: "New year cat"
  	});
  }
});

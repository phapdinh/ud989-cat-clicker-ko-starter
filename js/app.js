var Cat = function() {
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Tabby');
  this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
  this.imgAttribution = ko.observable('https://www.flickr.com/photos/big');
  this.nicknameArray = ko.observable(['Tabtab','T-Bone','Mr. T','Tabitha Tab Tabby Catty Cat']);

  this.title = ko.computed(function() {
    if(this.clickCount() < 10) {
		return 'Newborn';
	}
	else if(this.clickCount() < 50) {
		return 'Infant';
	}
	else if(this.clickCount() < 100){
		return 'Child';
	}
	else if(this.clickCount() < 200) {
		return 'Teen';
	}
	else if(this.clickCount() < 500) {
		return 'Adult';
	}
	else {
		return 'Ninja';
	}
  },this);
}

var ViewModel = function() {
  this.currentCat = ko.observable(new Cat());
  this.incrementCounter = function() {
	this.currentCat().clickCount(this.currentCat().clickCount() + 1);  
  }; 
}

ko.applyBindings(new ViewModel());
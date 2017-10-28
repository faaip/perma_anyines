function PhotoSeries(string, imgCount){
	// Set variables
	this.path = string;
	this.imgCount = imgCount;
	this.images = [];
	this.bLoadingDone = false;

	this.setLoadingDone = function(){
		console.log('Loaded!');
	this.bLoadingDone = true;
	};

	this.isLoaded = function(){
		return this.bLoadingDone;
	}

	this.loadImages = function(){
		console.log("Loading: ", this.path);

		// Load images to list
		for(var i = 0; i < this.imgCount; i++){
		this.images.push(loadImage(this.path + 'brain_' + str(i) + '.jpg'));	
		}

		this.setLoadingDone();
	}
	 
	// Final setup of object
 this.loadImages();

};

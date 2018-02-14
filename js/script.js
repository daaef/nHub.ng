$('.flip').each(
	function(){
 var $this = $(this);
	console.log($this);
	var back = $this.find(".back");
console.log(back);
	var front = $this.find(".front");
console.log(front);
	var text = $this.find(".back>text");
	console.log(text);
	var image = $this.find(".front>image");
	console.log(image);
		$this.hover(function(){
			front.toggleClass('flipOutY');
			back.toggleClass('flipInY');
		});
		}
);
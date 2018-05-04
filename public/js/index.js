var slides = [

    // slide 1
    {

        src: '/images/barric.png', // path to image
        w: 1024, // image width
        h: 768, // image height

        ///msrc: 'path/to/small-image.jpg', // small image placeholder,
                        // main (large) image loads on top of it,
                        // if you skip this parameter - grey rectangle will be displayed,
                        // try to define this property only when small image was loaded before



        title: 'Image Caption'  // used by Default PhotoSwipe UI
                                // if you skip it, there won't be any caption


        // You may add more properties here and use them.
        // For example, demo gallery uses "author" property, which is used in the caption.
        // author: 'John Doe'

    },

    // slide 2
    {
        src: '/images/tilt.png', 
        w: 600, 
        h: 600

        // etc.
    }

    // etc.

];

$(document).ready(function() {
	// define options (if needed)
	var options = {
	    // optionName: 'option value'
	    // for example:
	    index: 0 // start at first slide
	};

	// Initializes and opens PhotoSwipe
	var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, slides, options);
	gallery.init();
}
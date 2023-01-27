function body() {
    return document.querySelector('body');
}

function links() {
    return document.querySelectorAll('a');
}

function mod(self) {
    if(self.value === 'night') {
        Fill.body('black', 'white');
        Fill.links('white');
        self.value='day';
    }
    else {
        Fill.body('white', 'black');
        Fill.links('black');
        self.value='night';
    }
}

var Fill = {
    body:function(bColor, fColor) {
        // body().style.backgroundColor = bColor;
        // body().style.color = fColor;
        $('body').css('backgroundColor', bColor);
        $('body').css('color', fColor);
    },
    
    links:function(fColor) {
        // for(var i = 0; i < links().length; i++) {
        //     links()[i].style.color = fColor;  
        // }
        $('a').css('color', fColor);

    }
}
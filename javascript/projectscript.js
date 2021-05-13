$('.carousel').carousel();
$(function() {
    moveScroller();
});

var cw = $('.work').width();
$('.work').css({
    height: cw
});
// header transformation
function headerTransform(){
    var $mainNav = $('#js-menu');
    var $height = window.innerHeight-80;
    var $navBarToggle = $('#js-navbar-toggle');
    $mainNav.toggleClass('activel');
    $mainNav.css({
        height:$height+'px',
    })
    $($navBarToggle).toggleClass('rotateon');
}

function moveScroller() {
    var $anchor = $("#scroller-anchor");
    var $scroller = $('#scroller');
    var $headerlogo = $('#headerlogo');
    var $menu = $('.menu');
    var $workhead = $('.workhead');
    var $window = $(window);
    // var $carheight = $('.starting').height();
    var $windowsize = $window.width();
    var move = function() {
        var st = $(window).scrollTop();
        var ot = $anchor.offset().top;
        if (st > ot) {
            $scroller.css({
                position: "fixed",
                top: "0px",
                marginTop: "0px",
                height: "100px",
                boxShadow: "none"
            });
            $headerlogo.show("slide", { direction: 'right', }, 500);
            if ($windowsize > 900) {
                $menu.css({
                    margin: "10px 0 0",
                })
            }  
            else{
                $menu.css({
                    margin:"100px 0 0",
                })
            } 
            $workhead.css({
                marginTop: "100px"
            })

        } else {
            if ($windowsize < 900) {
                $scroller.css({
                    position:"fixed",
                    top:"-1px",
                    height:"100px",
                })
                $headerlogo.show("slide", { direction: 'right', }, 500);
                $menu.css({
                    margin:"100px 0 0",
                })
            }
            else if($windowsize>900){
                $scroller.css({
                    position: "relative",
                    top: "",
                    height: "75px",
                    boxShadow: "0px 10px 85px 30px grey"
                });
                $headerlogo.css({
                    display: "none"
                })
                $menu.css({
                    padding: "10px 0",
                    margin:"0"
                })
                $workhead.css({
                    marginTop: "0px"
                })
            }
        }
    };
    $(window).scroll(move);
    $(window).resize(moveScroller);
    move();

}

function infodisplay(id) {
    var $galleryinfo = $(document.getElementById(id));
    $galleryinfo.show("slide", { direction: 'down' }, 400);
    // document.getElementById(id).style.display = "block";
}

function infohide(id) {
    // document.getElementById(id).style.display = "none";
    var $galleryinfo1 = $(document.getElementById(id));
    $galleryinfo1.hide("slide", { direction: 'down' }, 400);
}


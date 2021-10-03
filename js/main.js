$('#nav-content').isotope({});

$('#nav-filter').on('click','button',function(){
    var filtval= $(this).attr('data-filter');

    $('#nav-content').isotope({filter:filtval});
});

var snc=document.getElementsByClassName("card mb-4");

for(var i=0;i<snc.length;i++){
    snc[i].addEventListener('mouseover',displayacc);
    snc[i].addEventListener('mouseleave',displaykapaa);
};

function displayacc(){
    this.classList.remove("shadow-none");
    this.classList.add("shadow-lg");
    this.classList.add("border");
    this.classList.add("border-primary");
};

function displaykapaa(){
    this.classList.remove("shadow-lg");
    this.classList.remove("border");
    this.classList.remove("border-primary");
    this.classList.add("shadow-none");
};
// $(document).on('click', '[data-toggle="lightbox"]', function(event) {
//     event.preventDefault();
//     $(this).ekkoLightbox();
// });

function navToSection(section) {
    var section = "#" + section;

    // Remove 'Nav' from section name to obtain actual section name
    var sectionName = section.slice(0, section.length - 3);

    $(section).click(function (){
        var pos = $(sectionName).offset().top - 60;
        var page = $("html, body"); 

        page.animate({
            scrollTop: pos
        }, 500);
    });
};
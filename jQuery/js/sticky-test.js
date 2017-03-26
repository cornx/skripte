$(document).ready(function() {
    $("#izbornik").sticky({
        topSpacing: 0
    });
});

$("a").each(function() {
    if (this.hostname != location.hostname) {
        // The link is external
        $(this).attr('target', '_blank');
    }
});

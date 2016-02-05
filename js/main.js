$(function(){
    var $modal = $('#modal');
    var $button = $('.click');
    $button.click(showHide);

    var count = 1;

    function showHide() {
        if (count === 1) {
            $modal.toggleClass('hidden');
            count = count - 1;
        } else if (count === 0) {
            $modal.toggleClass('hidden');
            count = count + 1;
        }
    }
});
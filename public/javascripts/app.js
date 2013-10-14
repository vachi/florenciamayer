$(document).ready(function() {
    createStoryJS({
        type:       'timeline',
        width:      '100%',
        height:     '100%',
        start_at_slide:     '0',
        start_zoom_adjust:  '0',
        hash_bookmark:      false,   
        source:     '/javascripts/timeline.json',
        embed_id:   'timeline-embed',
        debug:      true,
        css:                '/stylesheets/timeline/timeline.css',
        js:                 '/javascripts/timeline/timeline.js'
    });
});
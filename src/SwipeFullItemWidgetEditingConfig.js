import * as Scrivito from 'scrivito';

Scrivito.provideEditingConfig('SwipeFullItemWidget', {
    title: 'Block',
    attributes: {

        title: {
            title: 'Title',
        },
        text: {
            title: 'Text',
        },
        backgroundImage: {
            title: 'Background image',
        },
        video: {
            title: 'Video',
            description: 'Click to select or upload video. This should be of type video/mp4.',
        },
        poster: {
            title: 'Poster image (optional)',
            description: 'This poster image is shown, until the video is loaded.' +
                ' Without an poster image, the browser may show the first frame of the video.',
        },

    },
    properties: [
        'title',
        'text',
        'backgroundImage',
        'video',
        'poster',

    ],

});
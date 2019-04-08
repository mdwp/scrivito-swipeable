import * as Scrivito from 'scrivito';

const SwipeFullItemWidget = Scrivito.provideWidgetClass('SwipeFullItemWidget', {
    onlyInside: 'SwipeFullWidget',
    attributes: {
        title: 'string',
        text: 'html',
        backgroundImage: 'reference',
        video: 'reference',
        poster: 'reference',

    },
});

export default SwipeFullItemWidget;
import * as Scrivito from 'scrivito';

const SwipeFullWidget = Scrivito.provideWidgetClass('SwipeFullWidget', {
    attributes: {
        items: ['widgetlist', { only: 'SwipeFullItemWidget' }],

    },
});

export default SwipeFullWidget;
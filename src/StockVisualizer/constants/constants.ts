import FullScreen from '../../assets/fullscreen.png';
import Compare from '../../assets/compare.png';

export const TAB_OPTIONS = [
    { id: 1, name: 'Summary' },
    { id: 2, name: 'Chart' },
    { id: 3, name: 'Statistics' },
    { id: 4, name: 'Analysis' },
    { id: 5, name: 'Settings' },
];

export const TAB_DURATIONS_OPTIONS = [
    { id: 1, name: '1d' },
    { id: 2, name: '3d' },
    { id: 3, name: '1w' },
    { id: 4, name: '1m' },
    { id: 5, name: '6m' },
    { id: 6, name: '1y' },
    { id: 7, name: 'max' },
];

export const CHART_OPTIONS = [
    {
        id: 'fullscreen',
        name: 'Fullscreen',
        icon: FullScreen
    },
    {
        id: 'compare',
        name: 'Compare',
        icon: Compare
    }
];
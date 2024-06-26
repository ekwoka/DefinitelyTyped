import * as React from "react";
import { layout, makeResponsive, SpringGrid, SpringGridProps } from "react-stonecutter";

const ResponsiveGrid: typeof SpringGrid = makeResponsive(SpringGrid, {
    maxWidth: 1920,
    minPadding: 100,
});

const gridConfig: SpringGridProps = {
    component: "ul",
    columns: 5,
    perspective: 600,
    columnWidth: 200,
    gutterWidth: 30,
    gutterHeight: 0,
    layout: layout.pinterest,
    springConfig: {
        stiffness: 100,
        damping: 12,
    },
};

const gridElems: React.JSX.Element[] = [
    <p>A</p>,
    <p>B</p>,
    <p>C</p>,
    <p>D</p>,
    <p>E</p>,
    <p>F</p>,
    <p>G</p>,
];

const StonecutterGrid: React.JSX.Element = (
    <SpringGrid {...gridConfig}>
        {gridElems}
    </SpringGrid>
);

const StonecutterGridResponsive: React.JSX.Element = (
    <ResponsiveGrid {...gridConfig}>
        {gridElems}
    </ResponsiveGrid>
);

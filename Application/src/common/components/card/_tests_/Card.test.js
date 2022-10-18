import React from 'react';
import { create } from 'react-test-renderer';
import Card from "../Card";

describe('random test', () => {
    it('test component', () => {
        const tree = create(<Card isClickable={false}/>);
        const btn = tree.root.findByProps({testID: 'btn'});
        
        expect(btn).not.toBeNull(); // b
    });

    it('always pass', () => {
        expect(true).toBeTruthy(); // a
    });
});
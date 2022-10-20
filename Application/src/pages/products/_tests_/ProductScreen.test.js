import React from 'react';
import { render, fireEvent, within } from '@testing-library/react-native';
import ProductScreen from '../ProductsScreen';

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');
jest.mock('react-native-device-info', () => {
	return {
		__esModule: true,
		default: {
			getSystemName: jest.fn(() => {}),
			getSystemVersion: jest.fn(() => {}),
			getVersion: jest.fn(() => {}),
		},
	};
});

const mockedDispatch = jest.fn();
jest.mock('@react-navigation/native', () => {
	const actualNav = jest.requireActual('@react-navigation/native');
	return {
		...actualNav,
		useNavigation: () => ({
			navigate: jest.fn(navigateTo => {
				//console.log('navigateTo', navigateTo);
				mockedDispatch(navigateTo);
			}),
			dispatch: mockedDispatch,
		}),
	};
});
jest.mock('assets/svgs/arrow_down_short_wide_solid.svg', () => () => <h1>arrow_down_short_wide_solid.svg</h1>);
jest.mock('assets/svgs/filter.svg', () => () => <h1>assets/svgs/filter.svg</h1>);
jest.mock('assets/svgs/minus_solid.svg', () => () => <h1>minus_solid.svg</h1>);
jest.mock('assets/svgs/plus_solid.svg', () => () => <h1>plus_solid.svg</h1>);

describe('Test Product Screen', () => {
	beforeEach(() => {
		mockedDispatch.mockClear();
	});

	it('Validate on click card goes to DetailsProductScreen', () => {
		const tree = render(<ProductScreen />);
		const card = tree.getAllByTestId('card');
		fireEvent.press(card[0]);

		expect(mockedDispatch).toHaveBeenCalledTimes(1);
		expect(mockedDispatch).toHaveBeenCalledWith('DetailsProductScreen');
	});

	it('Validate cards are ordered alphabetically', () => {
		const tree = render(<ProductScreen />);
		const cards = tree.getAllByTestId('cardName');
		let cardNames = [];
		cards.forEach(c => {
			cardNames.push(within(c).getByTestId('cardName').children[0]);
		});
		const sortedCardNames = [...cardNames].sort();

		expect(cardNames).toEqual(sortedCardNames);
	});

	/*it("Validate there's at least 1 produtct", () => {
		const screen = create(<ProductScreen />);
		//console.log(screen);
	});*/
});

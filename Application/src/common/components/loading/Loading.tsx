import React, { PureComponent } from 'react';
import Events from 'src/common/services/Events';
import LoadingScreen from './LoadingScreen';

type Props = {};

type State = {
	showLoading: boolean;
};

export default class Loading extends PureComponent<Props, State> {
	state: State = {
		showLoading: false,
	};
	private isComponentMounted: boolean = false;

	constructor(props: Props) {
		super(props);

		Events.addListener('loading', (loading: boolean) => {
			if (this.isComponentMounted && this.state.showLoading !== loading) {
				this.setState({ showLoading: loading });
			}
		});
	}

	componentDidMount() {
		this.isComponentMounted = true;
	}

	componentWillUnmount() {
		this.isComponentMounted = false;
	}

	render() {
		const { showLoading }: State = this.state;
		if (showLoading) {
			return <LoadingScreen />;
		} else {
			return null;
		}
	}
}

import Events from './Events';

class Loading {
	public show() {
		Events.emit('loading', true);
	}

	public hide() {
		Events.emit('loading', false);
	}
}

export default new Loading();

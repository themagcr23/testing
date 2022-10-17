type EventType = 'onLanguageChange' | 'loading' | 'onStage' | 'headerMenu';

export type EventValues = boolean | string;

export type EventSubscription = { remove: () => void };

type EventCB = (values: EventValues) => void;

type Event = {
	[propName in EventType]?: Array<EventCB>;
};

class Events {
	private events: Event = {};

	public addListener(eventName: EventType, cb: any): EventSubscription {
		if (!(this.events as any)[eventName]) {
			(this.events as any)[eventName] = [];
		}
		(this.events as any)[eventName].push(cb);
		const index: number = (this.events as any)[eventName].length - 1;
		return {
			remove: () => {
				(this.events as any)[eventName].splice(index, 1);
			},
		};
	}

	public emit(eventName: EventType, values: EventValues): void {
		const cbs: Array<EventCB> | undefined = (this.events as any)[eventName];
		if (cbs && cbs.length) {
			cbs.forEach((cb: EventCB) => {
				cb(values);
			});
		}
	}
}
export default new Events();

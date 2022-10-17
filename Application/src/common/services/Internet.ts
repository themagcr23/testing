import NetInfo, { NetInfoState, NetInfoSubscription } from '@react-native-community/netinfo';

const isUnique = (state: NetInfoState): boolean =>
	(state.isConnected ?? false) && (state.isInternetReachable ? true : false);

export class InternetConnection {
	public hasInternet: boolean = false;
	private netInfoSubscription: NetInfoSubscription | null;

	constructor(cb: (hasInternet: boolean) => void) {
		this.netInfoSubscription = NetInfo.addEventListener((state: NetInfoState) => {
			const isConnected: boolean = isUnique(state);
			if (this.hasInternet !== isConnected) {
				this.hasInternet = isConnected;
				cb(this.hasInternet);
			}
		});
	}

	public removeInternetListener() {
		if (this.netInfoSubscription) {
			this.netInfoSubscription();
			this.netInfoSubscription = null;
		}
	}
}

class Internet {
	public static getIsConnected(): Promise<boolean> {
		return new Promise((resolve, reject) => {
			NetInfo.fetch()
				.then((state: NetInfoState) => {
					const isConnected: boolean = isUnique(state);
					resolve(isConnected);
				})
				.catch(reject);
		});
	}

	public static addInternetListener(cb: (hasInternet: boolean) => void) {
		return new InternetConnection(cb);
	}
}

export default Internet;

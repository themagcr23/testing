import { Platform } from 'react-native';
import { check, Permission, PERMISSIONS, PermissionStatus, request } from 'react-native-permissions';
import { LogType } from 'src/api/logs/enums/LogType';
import Logger from './Logger';

type PermissionType = 'storage' | 'camera' | 'location';

class Permissions {
	private storagePermissions: Permission[] = [];
	private cameraPermission: Permission;
	private locationPermissions: Permission[] = [];

	constructor() {
		this.storagePermissions =
			Platform.OS === 'ios' ? [PERMISSIONS.IOS.PHOTO_LIBRARY] : [PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE];

		this.cameraPermission = Platform.OS === 'ios' ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA;
		this.locationPermissions =
			Platform.OS === 'ios' ? [PERMISSIONS.IOS.LOCATION_WHEN_IN_USE] : [PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION];
	}

	public checkPermission = (type: PermissionType): Promise<void | PermissionStatus> => {
		return Promise.all(this.getPermissions(type).map((permission: Permission) => check(permission)))
			.then(this.verifyPermissions)
			.catch(this.onError);
	};

	public requestPermission = async (type: PermissionType): Promise<void | PermissionStatus> => {
		return Promise.all(this.getPermissions(type).map((permission: Permission) => request(permission)))
			.then(this.verifyPermissions)
			.catch(this.onError);
	};

	private verifyPermissions = (permissions: PermissionStatus[]) => {
		const permission: PermissionStatus | undefined = permissions.find(
			(perm: PermissionStatus) => perm === 'blocked' || perm === 'denied' || perm === 'unavailable',
		);
		return permission ? permission : permissions[0];
	};

	private getPermissions = (type: PermissionType): Permission[] => {
		switch (type) {
			case 'storage':
				return this.storagePermissions;
			case 'camera':
				return [this.cameraPermission];
			case 'location':
				return this.locationPermissions;
		}
	};

	private onError = (err: any) => {
		Logger.error(LogType.PERMISSIONS, 'Permissions error' + typeof err === 'string' ? String(err) : '', {
			error: err,
		});
	};
}

export default new Permissions();

import { SERVER_BASE_URL } from '../../Config';

export type ImageRMode = 'crop' | 'boxpad' | 'pad' | 'max' | 'min' | 'stretch' | 'manual';

class ImageUtils {
	public getImageUrl(id: string, width?: number, height?: number, rmode?: ImageRMode): string {
		let url = `${SERVER_BASE_URL}/${id}.png?width=${width}`;

		if (height) {
			url += `&height=${height}`;
		}
		if (rmode) {
			url += `&rmode=${rmode}`;
		}
		return url;
	}
}

export default new ImageUtils();

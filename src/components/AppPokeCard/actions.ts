import { navigate } from "@/utils/navigate";
import { TcreateActions, TactionSetImage } from "./types";

export const createActions: TcreateActions = ({ props }) => {
	const showOverview = () => {
		const url = `#/pokemon/${props.data?.national_number}`;
		navigate(url);
	};

	const setImage: TactionSetImage = (imageUrl) => {
		const imageFallbackUrl = "./assets/images/404.png";

		const isValidImage = imageUrl && !!imageUrl.match(/\w+\.(jpg|gif|png)$/gi);

		return isValidImage ? imageUrl : imageFallbackUrl;
	};

	return { showOverview, setImage };
};

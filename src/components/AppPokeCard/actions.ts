import { navigate } from "@/utils/navigate";
import { TcreateActions, TactionSetImage } from "./types";

const showOverview = () => {
	navigate("#/pokemon");
};

const setImage: TactionSetImage = (imageUrl) => {
	const imageFallbackUrl = "/assets/images/404.png";

	const isValidImage = imageUrl && !!imageUrl.match(/\w+\.(jpg|gif|png)$/gi);

	return isValidImage ? imageUrl : imageFallbackUrl;
};

export const createActions: TcreateActions = () => ({
	showOverview,
	setImage,
});
